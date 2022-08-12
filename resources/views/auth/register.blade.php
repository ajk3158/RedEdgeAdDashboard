@extends('layouts.app')
@vite(['resources/js/app.js'])

@section('content')

  <!-- import Material Icons from Google Fonts -->
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

<!-- import MDB Pro -->
<link rel="stylesheet" href="/css/mdb.min.css" />

<div class="container justify-content-center text-center" style="width: 40%;">
<h2 class="mb-4">Red Edge Ad Dashboard Register</h2>
                    <form method="POST" action="{{ route('register') }}" enctype="multipart/form-data">
                        @csrf

                        <div class="form-outline mb-4">

                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                            <label class="form-label" for="name">{{ __('Name') }}</label>
                        </div>

                        <div class="form-outline mb-4">

                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label class="form-label" for="name">{{ __('Email Address') }}</label>
                        </div>

                        <div class="form-outline mb-4">
                        

                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label class="form-label" for="name">{{ __('Password') }}</label>

                        </div>

                        <div class="form-outline mb-4">


                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">

                                <label class="form-label" for="name">{{ __('Confirm Password') }}</label>

                        </div>

                        <div class="form-outline mb-4">


                                <input id="avatar" type="file" class="form-control  @error('avatar') is-invalid @enderror" name="avatar" required>

                                <label class="form-label" for="avatar">{{ __('Avatar') }}</label>

                        </div>

                        <div class="mb-0">
                        


                                <button type="submit" class="btn btn-primary" style="padding-left: 50px; padding-right: 50px;">
                                    {{ __('Register') }}
                                </button>
                                
                        </div>

                        <div class="mt-2">
                        <a href="{{ route('login') }}">Back to Login</a>
                    </div>
                    </form>
</div>


<script
    type="text/javascript"
    src="{{ asset('js/mdb.min.js') }}">
</script>


@endsection
