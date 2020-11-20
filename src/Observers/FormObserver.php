<?php

namespace Fusion\Observers;

use Fusion\Models\Field;
use Fusion\Models\Form;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FormObserver
{
    /**
     * Handle the form "created" event.
     *
     * @param \Fusion\Models\Form $form
     *
     * @return void
     */
    public function created(Form $form)
    {
        Schema::create($form->builderName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('form_id');

            $table->string('identifiable_ip_address')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Handle the form "updating" event.
     *
     * @param \Fusion\Models\Form $form
     *
     * @return void
     */
    public function updating(Form $form)
    {
        $old = Form::find($form->id);

        if ($old->builderName() !== $form->builderName()) {
            Schema::rename($old->builderName(), $form->builderName());
        }
    }

    /**
     * Handle the "saved" event.
     *
     * @param \Fusion\Models\Form $form
     *
     * @return void
     */
    public function saved(Form $form)
    {
        $form->getBuilder();
    }

    /**
     * Handle the form "deleted" event.
     *
     * @param \Fusion\Models\Form $form
     *
     * @return void
     */
    public function deleted(Form $form)
    {
        Schema::dropIfExists($form->builderName());
    }

    /**
     * Automatically create a fieldset for our form.
     *
     * @param Form $form
     *
     * @return void
     */
    protected function createFieldset(Form $form)
    {
        $form->withoutEvents(function () use ($form) {
            $fieldset = Fieldset::create([
                'name'   => ($name = 'Form: '.$form->name),
                'handle' => str_handle($name),
            ]);

            if (app('env') == 'testing') {
                if ($form->collect_email_addresses) {
                    $this->verifyEmailFieldExists($fieldset);
                }
            }

            $form->attachFieldset($fieldset);
            $form->save();
        });
    }

    /**
     * Automatically update the fieldset for our form.
     *
     * @param Form $old - old Form instance
     * @param Form $new - new Form instance
     *
     * @return void
     */
    protected function updateFieldset(Form $old, Form $new)
    {
        if ($old->name !== $new->name) {
            $fieldset = $old->fieldset;
            $newName  = $new->name;

            $fieldset->withoutEvents(function () use ($fieldset, $newName) {
                $fieldset->name = ($name = 'Form: '.$newName);
                $fieldset->handle = str_handle($name);
                $fieldset->save();
            });
        }
    }

    /**
     * Assure fieldset has e-mail collection field.
     * [Note: added for unit testing assurance].
     *
     * @param Fieldset $fieldset
     *
     * @return void
     */
    protected function verifyEmailFieldExists(Fieldset $fieldset)
    {
        if ($fieldset->sections->isEmpty()) {
            $fieldset->sections()->create([
                'name'   => 'General',
                'handle' => 'general',
            ])->fields()->create([
                'name'     => 'E-mail',
                'handle'   => 'identifiable_email_address',
                'required' => true,
                'help'     => 'Please enter your e-mail address.',
                'type'     => 'input',
                'settings' => ['type' => 'email'],
                'order'    => 1,
            ]);
        }
    }
}
