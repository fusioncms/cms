@props([
	'name',
	'value'    => '',
	'label'    => ucfirst($name),
	'type'     => 'input',
	'disabled' => false,
	'readonly' => false,
])

<div class="mt-4">
	@if ($type != 'hidden')
		<label for="email" class="block text-sm font-medium leading-5 text-gray-700">
			{{ $label }}
		</label>
	@endif

	<div class="mt-1 relative rounded-md shadow-sm">
		<input
			id="{{ $name }}"
			type="{{ $type }}"
			name="{{ $name }}"
			class="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:shadow-outline-gray focus:border-gray-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
			placeholder="{{ $label }}"
			aria-describedby="{{ $name }}-input"
			value="{{ old($name, $value) }}"
			{{ $disabled ? 'disabled' : '' }}
			{{ $readonly ? 'readonly' : '' }}/>
	</div>
	
	@error("$name")
		<div class="text-red-500">{{ $message }}</div>
	@enderror
</div>