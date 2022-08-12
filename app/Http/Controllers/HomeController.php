<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function home()
    {
        return view('./layouts/layout', ['title' => 'Home', 'pageID' => 'home']);
    }

    public function users(){
        return view('./layouts/layout', ['title' => 'Users', 'pageID' => 'users']);
    }

    public function campaign(){
        return view('./layouts/layout', ['title' => 'Campaign Page', 'pageID' => 'campaign']);
    }

    public function newUser(){
        return view('./layouts/layout', ['title' => 'New User', 'pageID' => 'newUser']);
    }
}
