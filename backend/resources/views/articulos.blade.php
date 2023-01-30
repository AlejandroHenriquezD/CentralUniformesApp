<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Listado Articulos</title>
    <style>
        h3,h1 {
            text-align: center;
        }
        
        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td,
        #customers th{
            border: 1px solid #ddd;
            padding: 8px;
        }
        #customers tr:nth-child(even){
            background-color: #f2f2f2;
        }

        #customers tr:hover {
            background-color: #ddd;
        }

        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white; 
        }
    </style>
</head>
<body>
    @php
    $count = DB::table('articulos')->count();
    @endphp
    <h1>Articulos</h1>
    <h3>Numero Total de Artículos: {{$count}}</h3>
    <table id="customers">
        <tr>
            <th>Nombre</th>
            <th>Talla</th>
            <th>Color</th>
            <th>Precio</th>
        </tr> 
        @foreach ($articulos as $articulo)
        <tr>
            <td>{{$articulo->nombre}}</td>
            <td>{{$articulo->talla}}</td>
            <td>{{$articulo->color}}</td>
            <td>{{$articulo->precio}} €</td>
        </tr>
        @endforeach
    </table>
    
</body>
</html>