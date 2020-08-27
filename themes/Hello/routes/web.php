<?php

Route::get('/test', 'TestController@index');

Route::prefix('forms')->group(function () {
	Route::get('{form}', 'FormController@index');
});

Route::get('/feed.json', 'RSSController@index');
