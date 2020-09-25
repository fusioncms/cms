<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::prefix('install')->group(function () {
    Route::get('confirm', 'Installer\InstallController@index');
    Route::post('confirm', 'Installer\InstallController@store')
        ->withoutMiddleware([App\Http\Middleware\VerifyCsrfToken::class]);

    Route::get('{step?}', 'Installer\StepController@index');
    Route::post('{step?}', 'Installer\StepController@store')
        ->withoutMiddleware([App\Http\Middleware\VerifyCsrfToken::class]);
});

Route::get('file/{uuid}/{name}', 'FileController@index');
Route::get('backups/{backup}', 'BackupController@index');
Route::get('/themes/{theme}/preview.png', 'Themes\ScreenshotController@show');

Route::get('sitemap', [
    'as'   => 'sitemap',
    'uses' => 'SitemapController@index',
]);

Route::get('sitemap.xml', [
    'as'   => 'sitemap.xml',
    'uses' => 'SitemapController@xml',
]);

Auth::routes([
    'verify'   => setting('users.user_email_verification') === 'enabled',
    'register' => setting('users.public_registration') === 'enabled',
    'confirm'  => true,
]);

Route::get('password/set', 'Auth\SetPasswordController@showSetForm')->name('password.setForm');
Route::post('password/set', 'Auth\SetPasswordController@setPassword')->name('password.set');
Route::get('logout', 'Auth\LoginController@logout')->name('logout');

Route::group(['prefix' => 'account', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/', 'Account\SettingController@index');

    Route::get('settings', 'Account\SettingController@edit');
    Route::post('settings', 'Account\SettingController@update');

    Route::group(['prefix' => 'security', 'middleware' => ['password.confirm']], function () {
        Route::get('', 'Account\SecurityController@edit');
        Route::post('', 'Account\SecurityController@update');
    });

    if (setting('api.personal_access_tokens') === 'enabled') {
        Route::get('api', 'Account\APIController@edit');
    }
});

Route::group(['prefix' => config('fusion.path')], function () {
    Route::get('/{any?}', [
        'as'   => 'admin',
        'uses' => 'AdminController@index',
    ])->where('any', '.*');
});

Route::group(['middleware' => ['can:themes.update']], function () {
    Route::post('/customize', 'CustomizeController@show');
    Route::post('{any?}/customize', 'CustomizeController@show')->where('any', '.*');
});

Route::post('form/{form}', 'ResponseController@store');
Route::get('form/{form}/thankyou', 'ThankyouController@index');

Route::fallback([
    'as'   => 'routes.handle',
    'uses' => 'RouterController@handle',
])->where('fallbackPlaceholder', '^(?!api).*$');
