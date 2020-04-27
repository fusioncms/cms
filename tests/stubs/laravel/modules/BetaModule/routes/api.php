<?php

Route::apiResource('/beta', 'BetaController');
Route::post('/beta/install', 'InstallController@install');