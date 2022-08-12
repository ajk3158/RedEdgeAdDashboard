<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\User;

class StoreImageController extends Controller
{
    function index(){
        $data = User::latest()->paginate(5);
        return view('store_image', compact('data'))
        ->with('i', (request()->input('page', 1) - 1)*5);
    }
}
