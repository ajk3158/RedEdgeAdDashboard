@extends('layouts.app')

@vite(['resources/js/app.js'])

@section('content')

<div class="container justify-content-center text-center" style="width: 40%;">

<h2 class="mb-4">Red Edge Ad Dashboard Password Reset</h2>
<form method="POST" action="{{ route('password.update') }}">
                        @csrf

                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="form-outline mb-4">
                        

                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label class="form-label" for="email">{{ __('Email Address') }}</label>
                           
                        </div>

                        <div class="form-outline mb-4">
                            
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label class="form-label" for="password">{{ __('Password') }}</label>

                        </div>

                        <div class="form-outline mb-4">

                        
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">

                                <label class="form-label" for="password-confirm">{{ __('Confirm Password') }}</label>


                        </div>

                        <div class="form-outline mb-4">

                                <button type="submit" class="btn btn-primary">
                                    {{ __('Reset Password') }}
                                </button>
                        </div>
                    </form>
                
@endsection
