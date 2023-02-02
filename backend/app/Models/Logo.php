<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logo extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img', 'id_user'];

    // protected $with = 'user';

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_articulo', 'id');
    }

    public function diseño()
    {
        return $this->hasMany('App\Models\Diseño');
    }
}
