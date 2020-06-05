@extends('layouts.default')

@section('content')
    <div class="text-center items-center justify-center flex flex-col flex-1">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-700 tracking-wider leading-tight">{{ theme_option('homepage.greeting') ?? 'Welcome to FusionCMS' }}</h1>

        <p class="tracking-wide leading-loose text-gray-500 mt-6">{{ theme_option('homepage.message') ?? 'We think you\'ll enjoy your time here' }}</p>

        <div class="flex md:flex-row flex-col w-full max-w-xl justify-between items-center mt-10 p-6 uppercase tracking-wider">
            <a href="https://beta.getfusioncms.com/docs" target="_blank" class="mb-3 text-gray-600 hover:text-black">Documentation</a>
            <a href="https://beta.getfusioncms.com/blog" target="_blank" class="mb-3 text-gray-600 hover:text-black">Blog</a>
            <a href="https://github.com/fusioncms/fusioncms" target="_blank" class="mb-3 text-gray-600 hover:text-black">GitHub</a>
            <a href="https://beta.getfusioncms.com/discord" target="_blank" class="mb-3 text-gray-600 hover:text-black">Discord</a>
        </div>
    </div>
@endsection