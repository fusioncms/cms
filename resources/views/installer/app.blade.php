@extends('layouts.installer')

@section('subtitle', 'Configure your application')

@section('content')
	<form method="POST">
		@csrf

		<x-installer.input
			type="hidden"
			name="app_key"
			value="{{ config('app.key') }}"
		/>

		<x-installer.input
			type="hidden"
			name="app_env"
			value="local"
		/>

		<x-installer.input
			type="hidden"
			name="app_debug"
			value="false"
		/>

		<x-installer.input
			name="app_name"
			label="Name"
			value="FusionCMS"
		/>

		<x-installer.input
			name="app_url"
			label="URL"
			value="{{ $data['app_url'] ?? url('/') }}"
			readonly
		/>

		<div class="mt-10 flex justify-between">
			<x-installer.button class="w-1/3" label="Back" href="{{ $prev }}" />
			<x-installer.button class="w-1/3" label="Next" type="submit" />
		</div>
	</form>
@endsection