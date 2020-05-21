<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Test</title>

        <link rel="canonical" href="{{ url()->current() }}">

        {{-- Styles --}}
        <link rel="stylesheet" href="{{ theme_mix('/css/theme.css') }}" media="screen">
    </head>

    <body>
        <p>This is a fresh start. Now go and build something amazing.</p>

        {{-- Scripts --}}
        <script src="{{ theme_mix('/js/theme.js') }}"></script>
    </body>
</html>