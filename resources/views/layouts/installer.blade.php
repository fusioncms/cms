<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>FusionCMS - Installation Wizard</title>

    <!-- TailwindCSS -->
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
	<div class="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 text-gray-800 shadow sm:rounded-lg sm:px-10">
                
                <main>
                    <div>
                        <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Installation Wizard
                        </h2>
                    </div>

                    <div class="mt-6 relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>

                        <div class="relative flex justify-center text-sm leading-5">
                            <span class="px-2 bg-white text-gray-500">
                                @section('subtitle')
                                    Subtitle
                                @show
                            </span>
                        </div>
                    </div>

                    <div class="mt-8">
                        @yield('content')
                    </div>
                </main>
                
            </div>
        </div>
    </div>
</body>
</html>
