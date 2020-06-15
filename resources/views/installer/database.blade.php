@extends('layouts.installer')

@section('subtitle', 'Configure your database')

@section('content')
	<form method="POST">
		<x-installer.input
			name="db_driver"
			label="Driver"
			value="mysql"
			readonly
		/>

		<x-installer.input
			name="db_host"
			label="Hostname"
			value="{{ $data['db_host'] ?? 'localhost' }}"
		/>

		<x-installer.input
			name="db_name"
			label="Database Name"
			value="{{ $data['db_name'] ?? 'fusioncms' }}"
		/>

		<x-installer.input
			name="db_user"
			label="Username"
			value="{{ $data['db_user'] ?? 'homestead' }}"
		/>

		<x-installer.input
			name="db_pass"
			type="password"
			label="Password"
			value="{{ $data['db_pass'] ?? 'secret' }}"
		/>

		<x-installer.input
			name="db_charset"
			label="Character Set"
			value="{{ $data['db_charset'] ?? 'utf8' }}"
		/>

		<x-installer.input
			name="db_collation"
			label="Collation"
			value="{{ $data['db_collation'] ?? 'utf8_unicode_ci' }}"
		/>

		<div class="mt-10 flex justify-between">
			<x-installer.button class="w-1/3" label="Back" href="{{ $prev }}" />
			<x-installer.button class="w-1/3" label="Next" type="submit" />
		</div>
	</form>
@endsection