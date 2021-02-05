<?php

// API - Routes
Route::get('admin/navigation', 'AdminNavigationController@index');
Route::get('activity', 'ActivityController@index');
Route::get('logs', 'LogsController@index');

/**
 * API - Backup Routes.
 */
Route::post('backups/upload', 'Backups\UploadController@index');
Route::post('backups/restore/{backup}', 'Backups\RestoreController@index');
Route::apiResource('backups', 'Backups\BackupController');

/**
 * API - Collection Routes.
 */
Route::prefix('collections')->group(function () {
    Route::get('{slug}', 'CollectionController@index');
    Route::get('{slug}/{id}', 'CollectionController@show');
    Route::get('{slug}/create', 'CollectionController@create');
    Route::post('{slug}', 'CollectionController@store');
    Route::patch('{slug}/{id}', 'CollectionController@update');
    Route::get('{slug}/{id}/edit', 'CollectionController@edit');
    Route::delete('{slug}/{id}', 'CollectionController@destroy');
});

/**
 * API - Field Routes.
 */
Route::prefix('fields')->group(function () {
    Route::post('validate', 'Fields\FieldController@valid');
});

/**
 * API - Fieldset Routes.
 */
Route::apiResource('fieldsets', 'FieldsetController');

/**
 * API - Fieldtype Routes.
 */
Route::prefix('fieldtypes')->group(function () {
    Route::get('{slug}', 'Fields\FieldtypeController@show');
    Route::get('', 'Fields\FieldtypeController@index');
});

/**
 * API - Structure Routes.
 */
Route::prefix('structures')->group(function () {
    Route::get('{handle}', 'StructureController@show');
    Route::get('', 'StructureController@index');
    Route::post('', 'StructureController@store');
});

/**
 * API - Replicator Field Routes.
 */
Route::get('replicators/{replicator}', 'Fields\ReplicatorController@show');

/**
 * API - Blueprint Routes.
 */
Route::apiResource('blueprints', 'BlueprintController');
Route::apiResource('blueprints/{blueprint}/sections', 'SectionController');

/**
 * API - FileManager Routes.
 */
Route::apiResource('directories', 'FileManager\DirectoryController');
Route::get('files/{uuid}/download', 'FileManager\FileDownloadController@index');
Route::post('files/move', 'FileManager\FileMoveController@store');
Route::post('files/replace/{file}', 'FileManager\FileReplaceController@store');
Route::apiResource('files', 'FileManager\FileController');

/**
 * API - Form Routes.
 */
Route::apiResource('forms/{slug}/responses', 'Forms\ResponseController');
Route::apiResource('forms', 'Forms\FormController');

/**
 * API - Insight Routes.
 */
Route::prefix('insights')->group(function () {
    Route::get('check', 'Insights\CheckConfigurationController@index');
    Route::get('overview', 'Insights\OverviewController@index');
    Route::get('visitors', 'Insights\VisitorsController@index');
    Route::get('popular', 'Insights\PopularController@index');
    Route::get('referrers', 'Insights\ReferrersController@index');
    Route::get('browsers', 'Insights\BrowsersController@index');
});

/**
 * API - Matrix Routes.
 */
Route::get('matrices/slug/{slug}', 'MatrixController@slug');
Route::apiResource('matrices', 'MatrixController');

/**
 * API - Navigation Routes.
 */
Route::post('navigation/{navigation}/nodes/move/before', 'Navigation\NodeMoveBeforeController');
Route::post('navigation/{navigation}/nodes/move/after', 'Navigation\NodeMoveAfterController');
Route::patch('navigation/{navigation}/nodes/refresh', 'Navigation\NodeRefreshController');
Route::post('navigation/{navigation}/reorder', 'Navigation\NodeReorderController');
Route::apiResource('navigation/{navigation}/nodes', 'Navigation\NodeController');
Route::apiResource('navigation', 'Navigation\NavigationController');

/**
 * API - Addon Routes.
 */
Route::prefix('addons')->group(function () {
    Route::post('upload', 'Addons\UploadController@store');
    Route::post('{addon}/install', 'Addons\ActionController@install');
    Route::post('{addon}/uninstall', 'Addons\ActionController@uninstall');
    Route::post('{addon}/enable', 'Addons\StatusController@enable');
    Route::post('{addon}/disable', 'Addons\StatusController@disable');
});

/**
 * API - Single Routes.
 */
Route::prefix('singles')->group(function () {
    Route::get('{slug}/insight', 'Insights\SingleController@index');
    Route::get('{slug}', 'SingleController@show');
    Route::patch('{single}', 'SingleController@update');
});

/**
 * API - Taxonomy Routes.
 */
Route::apiResource('taxonomies/{taxonomy}/terms', 'TermController');
Route::apiResource('taxonomies', 'TaxonomyController');

/**
 * API - Scripts.
 */
Route::apiResource('scripts', 'ScriptController');

/**
 * API - Theme Routes.
 */
Route::post('themes/verify', 'Themes\VerifyController@index');
Route::apiResource('themes', 'Themes\BrowseController');
Route::get('theme', 'Themes\ActiveController@show');
Route::patch('theme/{theme}', 'Themes\ActiveController@update');

/**
 * API - Settings Routes.
 */
Route::prefix('settings')->group(function () {
    Route::get('', 'SettingController@index');
    Route::get('{group}', 'SettingController@show');
    Route::patch('{group}', 'SettingController@update');
});

/**
 * API - User Routes.
 */
Route::prefix('users')->group(function () {
    Route::post('{user}/verify', 'Users\VerifyEmailController@store');
    Route::post('{user}/reset-password', 'Users\PasswordResetController@store');
    Route::post('{user}/expire-password', 'Users\PasswordExpireController@store');
});
Route::apiResource('users', 'Users\UserController');
Route::apiResource('roles', 'Users\RoleController');
Route::apiResource('tokens', 'Users\TokenController')->except(['show', 'update']);

/**
 * API - Notification Routes.
 */
Route::get('channels', 'Notifications\ChannelController@index');
Route::get('notifications', 'Notifications\NotificationController@index');

/**
 * API - Filesystem Disks.
 */
Route::apiResource('disks', 'DiskController');
Route::post('disks/{disk}/default', 'DiskController@setDefault');

/**
 * API - Updates Routes.
 */
Route::prefix('updates')->group(function () {
    Route::get('', 'UpdateController@index');
    Route::get('{version}', 'UpdateController@show');
    Route::post('backup', 'UpdateController@backup');
    Route::post('composer', 'UpdateController@composer');
    Route::post('finalize', 'UpdateController@finalize');
});
