<?php
namespace Fusion\Jobs\Composer;

use Composer\Installer\PackageEvent;
use Illuminate\Foundation\Application;

class Scripts
{
	/**
	 * Track addon packages for uninstall.
	 * 
	 * @param  PackageEvent $event
	 * @return void
	 */
	public static function prePackageUninstall(PackageEvent $event)
    {
        $package = $event->getOperation()->getPackage();
        $extra   = $package->getExtra();

        if (isset($extra['fusioncms'])) {
        	static::writeToAddonStorage($package->getName());
        }
    }

    /**
     * Write to Addon Storage for immediate processing.
     * 
     * @param  string $package
     * @return void
     */
	protected static function writeToAddonStorage($package)
	{
		$laravel = new Application(getcwd());
		$path    = $laravel->bootstrapPath('addon.php');

		if (is_file($path)) {
			@unlink($path);
		}

		file_put_contents($path, "{$package}\n");
	}
}