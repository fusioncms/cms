<?php

namespace Fusion\Console\Actions;

class CheckServerRequirements
{
    /**
     * System requirements.
     * 
     * @var array
     */
    private static $requirements = [
        'php' => '7.2.5',
        'extensions' => [
            'bcmath',
            'ctype',
            'fileinfo',
            'json',
            'mbstring',
            'openssl',
            'pdo',
            'tokenizer',
            'xml'
        ]
    ];

    private static $permissions = [
        'storage/framework/' => '775',
        'storage/logs/'      => '775',
        'bootstrap/cache/'   => '775',
    ];

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
        return [[ 'PHP', phpversion(), self::verifyPHPVersion() ? '<fg=green>√</>' : '<fg=red>x</>' ]];
    }

    /**
     * Get array of extension requirements.
     * 
     * @return array
     */
    private static function getExtensions()
    {
        return collect(self::$requirements['extensions'])->map(function($extension) {
            return [ $extension, phpversion($extension), extension_loaded($extension) ? '<fg=green>√</>' : '<fg=red>x</>' ];
        })->toArray();
    }

    /**
     * Get array of folder permission requirements.
     * 
     * @return array
     */
    private static function getFolderPermissions()
    {
        return collect(self::$permissions)->map(function($perm, $folder) {
            $actual = substr(sprintf('%o', fileperms($folder)), -3);
            
            return [
                $folder,
                $actual,
                $perm,
                ($actual == $perm) ? '<fg=green>√</>' : '<fg=red>x</>'
            ];
        })->toArray();
    }

    /**
     * Verify PHP version requirements.
     *
     * @return bool
     */
    private static function verifyPHPVersion()
    {
       return version_compare(phpversion(), self::$requirements['php'], '>=');
       
    }

    /**
     * Verify PHP extension requirements.
     *
     * @return bool
     */
    private static function verifyExtensions()
    {
        return collect(self::$requirements['extensions'])->every(function($extension) {
            return extension_loaded($extension);
        });
    }

    /**
     * Verify folder permission requirements.
     *
     * @return bool
     */
    private static function verifyFolderPermissions()
    {
       return collect(self::$permissions)->every(function($perm, $folder) {
            return substr(sprintf('%o', fileperms($folder)), -3) == $perm;
        });
    }
}
