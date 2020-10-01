<div class="form__field form__input">
    <input
    	type="{{ $field->type }}"
    	name="{{ $field->handle }}"
    	id="{{ $field->handle }}"
    	value="{{ $field->settings['value'] ?? '' }}">
</div>