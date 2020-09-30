@extends('layouts.default')

@section('content')
    <div class="items-center justify-center flex flex-col flex-1">
        <form method="POST" action="{{ route('password.expired') }}" class="p-6 w-full md:max-w-lg">
            @csrf

            <div class="flex flex-col items-center leading-none mb-6">
                <h2>Please Update Your Password</h2>
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
                {{ __('Update Password') }}
            </button>

        </form>
    </div>
@endsection
