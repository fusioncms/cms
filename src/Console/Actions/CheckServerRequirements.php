<?php

namespace Fusion\Console\Actions;

class CheckServerRequirements
{
    /**
     * Verify requirements.
     *
     * @return void
     */
    public static function verify()
    {
        return self::verifyPHPVersion() &&
               self::verifyExtensions() &&
               self::verifyFolderPermissions();
    }

    /**
     * Get requirements array.
     *
     * @return array
     */
    public static function requirements()
    {
        return array_merge(self::getPHPVersion(), self::getExtensions());
    }

    /**
     * Get permission requirements array.
     *
     * @return array
     */
    public static function permissions()
    {
        return self::getFolderPermissions();
    }

    /**
     * Get PHP version requirements.
     * 
     * @return array
     */
    private static function getPHPVersion()
    {
        return [[ 'PHP', phpversion(), self::verifyPHPVersion() ? '√' : 'x' ]];
    }

    /**
     * Get array of extension requirements.
     * 
     * @return array
     */
    private static function getExtensions()
    {
        return collect(config('installer.requirements.extensions'))->map(function($extension) {
            return [ $extension, phpversion($extension), extension_loaded($extension) ? '√' : 'x' ];
        })->toArray();
    }

    /**
     * Get array of folder permission requirements.
     * 
     * @return array
     */
    private static function getFolderPermissions()
    {
        return collect(config('installer.permissions'))->map(function($perm, $folder) {
            $actual = substr(sprintf('%o', fileperms(base_path($folder))), -3);
            
            return [
                $folder,
                $actual,
                $perm,
                ($actual >= $perm) ? '√' : 'x'
            ];
        })->toArray();
    }

    /**
     * Verify PHP version requirements.
     *
     * @return bool
     */
    public static function verifyPHPVersion()
    {
       return version_compare(phpversion(), config('installer.requirements.php'), '>=');
       
    }

    /**
     * Verify PHP extension requirements.
     *
     * @return bool
     */
    public static function verifyExtensions()
    {
        return collect(config('installer.requirements.extensions'))->every(function($extension) {
            return extension_loaded($extension);
        });
    }

    /**
     * Verify folder permission requirements.
     *
     * @return bool
     */
    public static function verifyFolderPermissions()
    {
       return collect(config('installer.permissions'))->every(function($perm, $folder) {
            return substr(sprintf('%o', fileperms(base_path($folder))), -3) >= $perm;
        });
    }
}
