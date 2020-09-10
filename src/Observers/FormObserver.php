<?php

namespace Fusion\Observers;

use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;
use Fusion\Models\Field;
use Fusion\Models\Fieldset;
use Fusion\Models\Form;

class FormObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Create a new FormObserver instance.
     *
     * @param \Fusion\Database\Migration $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the form "created" event.
     *
     * @param \Fusion\Models\Form $form
     *
     * @return void
     */
    public function created(Form $form)
    {
        $this->migration->schema->create($form->table, function (Blueprint $table) {
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
        // Fetch our "old" form instance
        $old = Form::find($form->id);

        // Update table if changed
        if ($old->table !== $form->table) {
            $this->migration->schema->rename($old->table, $form->table);
        }
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
        $this->migration->schema->dropIfExists($form->table);
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
