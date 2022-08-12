@extends('layouts.app')
@vite(['resources/js/app.js'])

@section('content')

  <!-- import Material Icons from Google Fonts -->
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

<!-- import MDB Pro -->
<link rel="stylesheet" href="/css/mdb.min.css" />

<div class="container justify-content-center text-center" style="width: 40%;">

<h2 class="mb-4">Red Edge Ad Dashboard Login</h2>

<form method="POST" action="{{ route('login') }}">
@csrf

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input id="email" id="form2Example1" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
    <label class="form-label" for="form2Example1">Email Address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
  <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

@error('password')
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
@enderror

    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row">
      <!-- Simple link -->
      <p class="mb-0" style="font-size: 18px;">Click Here to 
      <a href="{{ route('register') }}">Register!</a></p>
    </div>

    <div class="mb-3">
    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                <div class="form-check" >
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" style="float: none;">

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4" style="width: 60%">Sign in</button>

  
</form>
</div>
        
<script
    type="text/javascript"
    src="{{ asset('js/mdb.min.js') }}">
</script>

@endsection
