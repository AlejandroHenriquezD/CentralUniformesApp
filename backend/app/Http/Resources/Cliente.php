<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cliente extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'usuario' => $this->usuario,
            'contraseña' => $this->contraseña,
            'cif_nif' => $this->cif_nif,
            'razon_social' => $this->razon_social,
            'nombre_comercial' => $this->nombre_comercial,
            'telefono' => $this->telefono,
            'email' => $this->email,
            'direccion' => $this->direccion,
            'codigo_postal' => $this->codigo_postal,
            'municipio' => $this->municipio,
            'provincia' => $this->provincia,
            'observaciones' => $this->observaciones
            
        ];
    }
}
