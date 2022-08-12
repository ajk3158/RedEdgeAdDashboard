@extends('layouts.app')

@vite(['resources/js/app.js'])

@section('content')

<div class="container justify-content-center text-center" style="width: 40%;">

<h2 class="mb-4">Red Edge Ad Dashboard Password Reset</h2>

                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-outline mb-4">

                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label class="form-label" for="email">{{ __('Email Address') }}</label>


                        </div>

                        <div class="form-outline mb-0">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                        </div>

                        <div class="mt-2">
                        <a href="{{ route('login') }}">Back to Login</a>
                    </div>
                    </form>
</div>
            
@endsection
