@extends('layouts.admin')

@section('content')
	@auth
		<app :user="{{ auth()->user()->append('permitted') }}" version="{{ FUSION_VERSION }}"></app>
	@else
		<app version="{{ FUSION_VERSION }}"></app>
	@endauth
@endsection