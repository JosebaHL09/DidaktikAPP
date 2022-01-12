<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guneak extends Model
{
    protected $fillable = ['izena','latitud', 'longitud','deskripzioa', 'irudia','audio','bideo'];
    use HasFactory;
}
