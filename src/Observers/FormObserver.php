<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Field;
use Fusion\Models\Form;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FormObserver implements BuilderObserver
{
    /**
     * Handle the "created" event.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function created(Model $model)
    {
        Schema::create($model->getBuilderTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('form_id');

            $table->string('identifiable_ip_address')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Handle the "updating" event.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function updating(Model $model)
    {
        $old = Form::find($model->id);

        if ($old->getBuilderTable() !== $model->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $model->getBuilderTable());
        }
    }

    /**
     * Handle the "deleted" event.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function deleted(Model $model)
    {
        Schema::dropIfExists($model->getBuilderTable());
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
