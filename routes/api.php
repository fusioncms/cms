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
    Route::post('{id}/collection/reorder', 'CollectionReorderController');
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
Route::post('fieldsets/reorder', 'FieldsetReorderController');

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
Route::prefix('files/{disk}')->group(function () {
    Route::get('{file}/download', 'FileManager\FileDownloadController@index');
    Route::post('move', 'FileManager\FileMoveController@store');
    Route::post('{file}/replace', 'FileManager\FileReplaceController@store');

    Route::get('', 'FileManager\FileController@index');
    Route::get('{file}', 'FileManager\FileController@show');
    Route::post('', 'FileManager\FileController@store');
    Route::patch('{file}', 'FileManager\FileController@update');
    Route::delete('{file}', 'FileManager\FileController@destroy');
});

/**
 * API - FileManager Directory Routes.
 */
Route::prefix('directories/{disk}')->group(function () {
    Route::get('', 'FileManager\DirectoryController@index');
    Route::get('{directory}', 'FileManager\DirectoryController@show');
    Route::post('', 'FileManager\DirectoryController@store');
    Route::patch('{directory}', 'FileManager\DirectoryController@update');
    Route::delete('{directory}', 'FileManager\DirectoryController@destroy');
});

/**
 * API - Form Routes.
 */
Route::apiResource('forms/{slug}/responses', 'Forms\ResponseController');
Route::apiResource('forms', 'Forms\FormController');
Route::post('forms/reorder', 'FormReorderController');

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
Route::post('matrices/reorder', 'MatrixReorderController');

/**
 * API - Navigation Routes.
 */
Route::patch('navigation/{navigation}/links/refresh', 'LinkRefreshController');
Route::post('navigation/{navigation}/links/reorder', 'LinkReorderController');
Route::apiResource('navigation/{navigation}/links', 'LinkController');
Route::apiResource('navigation', 'NavigationController');
Route::post('navigation/reorder', 'NavigationReorderController');

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
Route::post('taxonomies/reorder', 'TaxonomyReorderController');

/**
 * API - Scripts.
 */
Route::apiResource('scripts', 'ScriptController');
Route::post('scripts/reorder', 'ScriptReorderController');

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
Route::post('users/reorder', 'UserReorderController');
Route::apiResource('roles', 'Users\RoleController');
Route::apiResource('tokens', 'Users\TokenController')->except(['show', 'update']);
Route::post('roles/reorder', 'RoleReorderController');

/**
 * API - Notification Routes.
 */
Route::get('channels', 'Notifications\ChannelController@index');
Route::get('notifications', 'Notifications\NotificationController@index');

/**
 * API - Filesystem Disks.
 */
Route::apiResource('disks', 'DiskController');
Route::post('disks/reorder', 'DiskReorderController');

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
