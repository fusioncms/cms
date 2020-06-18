@extends('layouts.installer')

@section('subtitle', 'Tell us about yourself')

@section('content')
	<form method="POST">
		<x-installer.input
			name="user_email"
			label="E-mail"
			value="{{ $data['user_email'] ?? 'admin@example.com' }}"
		/>

		<x-installer.input
			name="user_name"
			label="Name"
			value="{{ $data['user_name'] ?? '' }}"
		/>

		<x-installer.input
			name="user_password"
			label="Password"
			type="password"
			value="{{ $data['user_password'] ?? '' }}"
		/>

		<x-installer.input
			name="user_confirm"
			label="Confirm"
			type="password"
			value="{{ $data['user_password'] ?? '' }}"
		/>

		<div class="mt-10 flex justify-between">
			<x-installer.button class="w-1/3" label="Back" href="{{ $prev }}" />
			<x-installer.button class="w-1/3" label="Next" type="submit" />
		</div>
	</form>
@endsection