@extends('layouts.app')

@vite(['resources/js/app.js'])

<?php $name = Auth::user()->name;
?>
@section('content')
<div class="container justify-content-center text-center" style="width: 40%;">
    <h1 class="mb-4">Welcome {{ $name }}!</h1>

    @if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
    @endif

    <h3 class="mb-3">{{ __('You are logged in!') }} </h3>
    <button type="submit" class="btn btn-primary btn-block mb-2" style="width: 50%" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
        {{ __('Logout') }}
    </button>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>

    <a href="/home"> <button class="btn btn-primary btn-block mb-4" style="width: 50%">Go to Home</button> </a>


</div>

@endsection