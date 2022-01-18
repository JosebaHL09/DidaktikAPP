<?php

namespace App\Http\Controllers;
use App\Models\Guneak;
use Illuminate\Http\Request;

class GuneakController extends Controller
{
    public function index(){
        return Guneak::all();
    }
    public function show($id){
        $guneaks = Guneak::find($id);
        return $guneaks;
    }
    /*public function update(Request $request, $id ){
        $guneaks = Guneak::find($id);
        $guneaks -> izena = $request -> input('izena');
        $guneaks -> latitud = $request -> input('latitud');
        $guneaks -> longitud = $request -> input('longitud');
        $guneaks -> deskripzioa = $request -> input('deskripzioa');
        $guneaks->save();
    
        return $request-> input('id');
    }*/

}
