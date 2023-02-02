<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'img', 'id_user'];

    // protected $with = 'user';

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_user', 'id');
    }

    public function diseño()
    {
        return $this->hasMany('App\Models\Diseño');
    }
}
