@extends('layouts.admin')

@section('content')
	@auth
		<app :user="{{ auth()->user()->append('permissions') }}" version="{{ FUSION_VERSION }}"></app>
	@else
		<app version="{{ FUSION_VERSION }}"></app>
	@endauth
@endsection