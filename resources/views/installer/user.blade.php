@extends('layouts.installer')

@section('subtitle', 'Tell us about yourself')

@section('content')
	<form method="POST">
		@csrf

		<x-installer.input
			name="user_email"
			label="E-mail"
			value="{{ $data['user_email'] ?? 'admin@example.com' }}"
		/>

		<x-installer.input
			name="user_name"
			value="{{ $data['user_name'] ?? 'Fusion User' }}" 
		/>

		<x-installer.input
			name="user_password"
			type="password"
			value="{{ $data['user_password'] ?? 'asDF12#$' }}"
		/>

		<x-installer.input
			name="user_confirm"
			type="password"
			value="{{ $data['user_password'] ?? 'asDF12#$' }}"
		/>

		<div class="mt-10 flex justify-between">
			<x-installer.button class="w-1/3" label="Back" href="{{ $prev }}" />
			<x-installer.button class="w-1/3" label="Next" type="submit" />
		</div>
	</form>
@endsection