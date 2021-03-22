@props([
	'label',
	'type'     => 'button',
	'href'     => false,
	'disabled' => false,
])

<span {{ $attributes->merge(['class' => 'block rounded-md shadow-sm']) }}>
	@if ($href)
		<a href="{{ $href }}" type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:border-orange-700 focus:ring-orange active:bg-orange-700 transition duration-150 ease-in-out">
			{{ $label }}
		</a>
	@else
		<button type="{{ $type }}" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:border-orange-700 focus:ring-orange active:bg-orange-700 transition duration-150 ease-in-out">
			{{ $label }}
		</button>
	@endif
</span>
