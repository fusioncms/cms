<div class="form__field form__input">
    <label class="form__label" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>

    <input
    	type="file"
    	id="{{ $field->handle }}-field"
    	name="{{ $field->handle }}[]"
    	accept="{{ $field->settings['accept'] ?? null }}"
    	{{ $field->settings['multiple'] ? 'multiple': null }}
    />

    @if($field->help)
		@include('forms.components.help', ['field' => $field])
    @endif
</div>