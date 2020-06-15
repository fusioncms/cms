
@extends('layouts.installer')

@section('subtitle', 'Confirm your settings')

@section('content')
	@error('install')
		<div class="text-red-500">{{ $message }}</div>
	@enderror

	<div>
		<x-installer.input
			name="app_name"
			label="Name"
			value="{{ $data['app']['app_name'] }}"
			readonly
		/>

		<x-installer.input
			name="app_url"
			label="URL"
			value="{{ $data['app']['app_url'] }}"
			readonly
		/>
	</div>

	<div class="py-2">
		<x-installer.input
			name="user_email"
			label="E-mail"
			value="{{ $data['user']['user_email'] }}"
			readonly
		/>

		<x-installer.input
			name="user_name"
			label="Username"
			value="{{ $data['user']['user_name'] }}" 
			readonly
		/>

		<x-installer.input
			name="user_password"
			label="Password"
			type="password"
			value="{{ $data['user']['user_password'] }}"
			readonly
		/>
	</div>

	<div class="py-2">
		<x-installer.input
			name="db_driver"
			label="Driver"
			value="mysql"
			readonly
		/>

		<x-installer.input
			name="db_host"
			label="Hostname"
			value="{{ $data['database']['db_host'] }}"
			readonly
		/>

		<x-installer.input
			name="db_name"
			label="Database Name"
			value="{{ $data['database']['db_name'] }}"
			readonly
		/>

		<x-installer.input
			name="db_user"
			label="Username"
			value="{{ $data['database']['db_user'] }}"
			readonly
		/>

		<x-installer.input
			name="db_pass"
			type="password"
			label="Password"
			value="{{ $data['database']['db_pass'] }}"
			readonly
		/>

		<x-installer.input
			name="db_charset"
			label="Character Set"
			value="{{ $data['database']['db_charset'] }}"
			readonly
		/>

		<x-installer.input
			name="db_collation"
			label="Collation"
			value="{{ $data['database']['db_collation'] }}"
			readonly
		/>
	</div>

	<form method="POST">
		<div class="mt-5 flex justify-between">
			<x-installer.button class="w-1/3" label="Start Over" href="/installer"/>
			<x-installer.button class="w-1/3" label="Install!" type="submit"/>
		</div>
	</form>
@endsection