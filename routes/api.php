<?php

// API - Routes
Route::get('admin/navigation', 'NavigationController@index');
Route::get('activity',         'ActivityController@index');
Route::get('logs',             'LogsController@index');
Route::get('mail/test',        'MailController@index');
Route::get('structures',       'StructureController@index');


/**
 * API - Backup Routes
 */
Route::post('backups/upload',           'Backups\BackupUploadController@index');
Route::post('backups/restore/{backup}', 'Backups\BackupRestoreController@index');
Route::apiResource('backups',           'Backups\BackupController')->except(['show', 'update']);


/**
 * API - Collection Routes
 */
Route::prefix('collections')->group(function() {
	Route::get('{slug}',           'CollectionController@index');
	Route::get('{slug}/{id}',      'CollectionController@show');
	Route::get('{slug}/create',    'CollectionController@create');
	Route::post('{slug}',          'CollectionController@store');
	Route::patch('{slug}/{id}',    'CollectionController@update');
	Route::get('{slug}/{id}/edit', 'CollectionController@edit');
	Route::delete('{slug}/{id}',   'CollectionController@destroy');
});


/**
 * API - Extension Routes
 */
Route::apiResource('extensions',  'ExtensionController');


/**
 * API - Field Routes
 */
Route::prefix('fields')->group(function() {
	Route::post('validate', 'Fields\FieldController@valid');
});


/**
 * API - Fieldtype Routes
 */
Route::prefix('fieldtypes')->group(function() {
	Route::get('{slug}', 'Fields\FieldtypeController@show');
	Route::get('',       'Fields\FieldtypeController@index');
});


/**
 * API - Fieldset Routes
 */
Route::apiResource('fieldsets/{fieldset}/sections', 'Fields\FieldsetSectionController');
Route::apiResource('fieldsets', 'Fields\FieldsetController');


/**
 * API - FileManager Routes
 */
Route::apiResource('directories',   'FileManager\DirectoryController');
Route::get('files/{uuid}/download', 'FileManager\FileDownloadController@index');
Route::post('files/move',           'FileManager\FileMoveController@store');
Route::post('files/replace/{file}', 'FileManager\FileReplaceController@store');
Route::apiResource('files',         'FileManager\FileController');


/**
 * API - Form Routes
 */
Route::apiResource('forms/{slug}/responses', 'Forms\ResponseController');
Route::apiResource('forms',                  'Forms\FormController');


/**
 * API - Import Routes
 */
Route::get('imports/mapping/{import}',   'Imports\ImportMappingController@show');
Route::patch('imports/mapping/{import}', 'Imports\ImportMappingController@update');
Route::post('imports/queue/{import}',    'Imports\ImportQueueController@store');
Route::get('imports/queue',              'Imports\ImportQueueController@index');
Route::get('imports/logs/{importLog}',   'Imports\ImportLogController@index');
Route::apiResource('imports',            'Imports\ImportController');


/**
 * API - Insight Routes
 */
Route::prefix('insights')->group(function () {
    Route::get('check',     'Insights\CheckConfigurationController@index');
    Route::get('overview',  'Insights\OverviewController@index');
    Route::get('visitors',  'Insights\VisitorsController@index');
    Route::get('popular',   'Insights\PopularController@index');
    Route::get('referrers', 'Insights\ReferrersController@index');
    Route::get('browsers',  'Insights\BrowsersController@index');
});

/**
 * API - Mailable Routes
 */
Route::apiResource('mailables', 'MailableController')->except(['index', 'store', 'destroy']);


/**
 * API - Matrix Routes
 */
Route::get('matrices/slug/{slug}', 'MatrixController@slug');
Route::apiResource('matrices',    'MatrixController');


/**
 * API - Menu Routes
 */
Route::post('menus/{menu}/nodes/move/before',  'Menus\NodeMoveBeforeController');
Route::post('menus/{menu}/nodes/move/after',   'Menus\NodeMoveAfterController');
Route::patch('menus/{menu}/nodes/refresh',     'Menus\NodeRefreshController');
Route::post('menus/{menu}/reorder',            'Menus\NodeReorderController');
Route::apiResource('menus/{menu}/nodes',       'Menus\NodeController');
Route::apiResource('menus',                    'Menus\MenuController');


/**
 * API - Module Routes
 */
Route::prefix('modules')->group(function() {
	Route::post('{module}/install',   'Modules\ActionController@install');
	Route::post('{module}/update',    'Modules\ActionController@update');
	Route::post('{module}/seed',      'Modules\ActionController@seed');
	Route::post('{module}/uninstall', 'Modules\ActionController@uninstall');
	Route::post('upload',             'Modules\UploadController@store');
	Route::post('{module}/enable',    'Modules\StatusController@enable');
	Route::post('{module}/disable',   'Modules\StatusController@disable');
});


/**
 * API - Single Routes
 */
Route::prefix('singles')->group(function() {
	Route::get('{slug}',   'SingleController@show');
	Route::patch('{single}', 'SingleController@update');
});


/**
 * API - Taxonomy Routes
 */
Route::apiResource('taxonomies/{taxonomy}/terms', 'TermController');
Route::apiResource('taxonomies',                  'TaxonomyController');


/**
 * API - Theme Routes
 */
Route::post('themes/verify',  'Themes\VerifyController@index');
Route::apiResource('themes',  'Themes\BrowseController');
Route::get('theme',           'Themes\ActiveController@show');
Route::patch('theme/{theme}', 'Themes\ActiveController@update');


/**
 * API - Settings Routes
 */
Route::prefix('settings')->group(function() {
	Route::get('',            'SettingsController@index');
	Route::get('{section}',   'SettingsController@show');
	Route::patch('{section}', 'SettingsController@update');
});


/**
 * API - User Routes
 */
Route::post('users/{user}/password', 'Users\PasswordController@index');
Route::apiResource('users',          'Users\UserController');
Route::apiResource('roles',          'Users\RoleController');