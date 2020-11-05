<?php

namespace Fusion\Providers;

use Illuminate\Support\ServiceProvider;

class FieldtypeServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        fieldtypes()->register(\Fusion\Fieldtypes\AddressFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\AssetFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\AudioFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\CheckboxFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\CodeFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\ColorPickerFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\CountryFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\DateTimeFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\DictionaryFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\DividerFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\EmailFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\FileFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\FormFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\HiddenFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\InformationFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\InputFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\LinkFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\ListFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\MarkdownFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\NumberFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\PasswordFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\PhoneFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\RangeFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\RadioFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\ReplicatorFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\SearchFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\SelectFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\TableFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\TaxonomyFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\TextareaFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\ToggleFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\UrlFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\USStateFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\UserFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\VideoFieldtype::class);
        fieldtypes()->register(\Fusion\Fieldtypes\WYSIWYGFieldtype::class);
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\Fusion\Fieldtypes\Registry::class);
    }
}
