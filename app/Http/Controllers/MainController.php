<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// Контроллер загрузки начальной страницы

class MainController extends Controller
{
    public function __invoke()
    {
        return(view('index'));
    }
}
