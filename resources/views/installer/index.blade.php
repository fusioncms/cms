@extends('layouts.installer')

@section('subtitle', 'Welcome')

@section('content')
	<div class="grid grid-cols-2 gap-5">
		<div>
			<span class="w-full inline-flex rounded-md shadow-sm">
				<button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue transition duration-150 ease-in-out" aria-label="Sign in with Facebook">
					Blog
				</button>
			</span>
		</div>
		<div>
			<span class="w-full inline-flex rounded-md shadow-sm">
				<button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue transition duration-150 ease-in-out" aria-label="Sign in with Facebook">
					Documentation
				</button>
			</span>
		</div>
	</div>

	<div class="mt-8">
		<p>Some welcoming text here.</p>

		<div class="mt-10">
			<x-installer.button class="w-full" label="Start Installation" href="{{ $next }}" />
		</div>
	</div>
@endsection