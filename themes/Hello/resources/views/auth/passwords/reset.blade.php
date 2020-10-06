@extends('layouts.default')

@section('content')
    <div class="items-center justify-center flex flex-col flex-1">
        <form method="POST" action="{{ route('password.update') }}" class="p-6 w-full md:max-w-lg">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">

            <h2 class="m-0 mb-10 text-center text-4xl font-bold tracking-wider leading-tight">
                {{ __('Reset Password') }}
            </h2>

            <div class="mb-6">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                    {{ __('E-Mail Address') }}
                </label>

                <input
                    type="text"
                    id="email"
                    name="email"
                    class="form__control w-full {{ $errors->has('email') ? 'border-red-500 border-2' : '' }}"
                    value="{{ $email ?? old('email') }}"
                    required
                    autofocus>

                 @if ($errors->has('email'))
                    <div class="text-sm mb-3 mt-1 flex justify-between">
                        <div class="text-grey-darker italic">
                            <span class="block text-red-500">{{ $errors->first('email') }}</span>
                        </div>
                    </div>
                @endif
            </div>

            <div class="mb-6">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password">
                    {{ __('Password') }}
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form__control w-full {{ $errors->has('password') ? 'border-red-500 border-2' : '' }}"
                    required />
                
                @if ($errors->has('password'))
                    <div class="text-sm mb-3 mt-1 flex justify-between">
                        <div class="text-grey-darker italic">
                            <span class="block text-red-500">{{ $errors->first('password') }}</span>
                        </div>
                    </div>
                @endif
            </div>

            <div class="mb-6">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password_confirmation">
                    {{ __('Confirm Password') }}
                </label>

                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    class="form__control w-full {{ $errors->has('password') ? 'border-red-500 border-2' : '' }}"
                    required />
            </div>

            <button type="submit" class="button w-full block mb-6">
                {{ __('Reset Password') }}
            </button>

        </form>
    </div>
@endsection
