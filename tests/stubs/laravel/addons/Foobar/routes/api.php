<?php

Route::apiResource('/foobar', 'FoobarController');
Route::post('/foobar/install', 'InstallController@install');
