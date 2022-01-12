<?php

namespace App\Http\Controllers;
use App\Models\Guneak;
use Illuminate\Http\Request;

class GuneakController extends Controller
{
    public function index(){
        return Guneak::all();
    }
}
