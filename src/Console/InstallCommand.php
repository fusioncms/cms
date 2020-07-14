<?php

namespace Fusion\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Helper\ProgressBar;
use Fusion\Console\Actions\CheckServerRequirements;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:install' .
                           ' {--H|homestead                : Quick install; uses default homestead configurations. }' .
                           ' {--A|valet                    : Quick install; uses default valet configurations. }' .
                           ' {--R|refresh                  : Same as running uninstall/install but wont\'t refresh .env file. }' .
                           ' {--D|debug                    : Enables error logging; for development purposes. }' .
                           ' {--url=http://localhost       : Sets .env variable APP_URL }' .
                           ' {--host=localhost             : Sets .env variable DB_HOST }' .
                           ' {--database=fusioncms         : Sets .env variable DB_DATABASE }' .
                           ' {--username=root              : Sets .env variable DB_USERNAME }' .
                           ' {--password=secret            : Sets .env variable DB_PASSWORD }' .
                           ' {--charset=utf8               : Sets .env variable DB_CHARSET }' .
                           ' {--collation=utf8_general_ci  : Sets .env variable DB_COLLATION }'
                           ;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install and publish all of FusionCMS\' resources';

    /**
     * Array to store the configuration details.
     *
     * @var array
     */
    protected $container;

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (app_installed() and ! $this->option('refresh')) {
            $this->error('FusionCMS is already installed.');
            $this->comment('Did you mean?');
            $this->line('fusion:uninstall - Uninstall FusionCMS.');
            $this->line('fusion:refresh   - Refresh installation; resets database and default settings.');
            return;
        }

        if (! app_installed() and $this->option('refresh')) {
            $this->error('FusionCMS first needs to be installed.');
            $this->comment('Did you mean?');
            $this->line('fusion:install - Install FusionCMS.');
            return;
        }

        // is a dev?
        //
        $dev = ($this->option('homestead') or $this->option('valet'));

        // installation configurations
        //
        $this->container = [
            // application
            'app_name'  => env('APP_NAME',  'FusionCMS'),
            'app_env'   => env('APP_ENV',   'local'),
            'app_debug' => env('APP_DEBUG', $this->option('debug')),
            'app_url'   => env('APP_URL',   $this->option('url')),

            // database
            'db_driver'    => env('DB_DRIVER',    'mysql'),
            'db_host'      => env('DB_HOST',      $this->option('host')),
            'db_name'      => env('DB_DATABASE',  $this->option('database')),
            'db_user'      => env('DB_USERNAME',  $this->option('username')),
            'db_pass'      => env('DB_PASSWORD',  $this->option('password')),
            'db_charset'   => env('DB_CHARSET',   $this->option('charset')),
            'db_collation' => env('DB_COLLATION', $this->option('collation')),

            // default user
            'user_email'    => 'admin@example.com',
            'user_password' => 'secret',
            'user_name'     => $this->generateName(),
        ];

        // --homestead flag overrides
        //
        if ($this->option('homestead')) {
            $this->container['db_user']   = env('DB_USERNAME', 'homestead');
            $this->container['db_pass']   = env('DB_PASSWORD', 'secret');
            $this->container['app_debug'] = true;
        }

        // --valet flag overrides
        //
        if ($this->option('valet')) {
            $this->container['db_user']   = env('DB_USERNAME', 'root');
            $this->container['db_pass']   = env('DB_PASSWORD', '');
            $this->container['app_debug'] = true;
        }

        if ($dev or $this->option('refresh')) {
            $this->confirmation(true);
        } else {
            $this->line('<fg=white;options=bold>' . File::get(fusion_path('/stubs/console/wizard.stub')) . '</>');

            $this->line("\n<fg=black;bg=white>--- Verifying server for requirements...</>");
            $this->verifyServerRequirements();

            $this->line("\n<fg=black;bg=white>--- Now for some questions to get you started...</>");
            $this->wizard();
        }
    }

    /**
     * Installation wizard.
     *
     * @return void
     */
    private function wizard()
    {
        // application
        $this->container['app_name']  = $this->ask('Please enter your application name:', $this->container['app_name']);
        $this->container['app_url']   = $this->ask('Please enter your website url:',      $this->container['app_url']);

        // database
        $this->container['db_host']      = $this->ask('Please enter the database host:',      $this->container['db_host']);
        $this->container['db_name']      = $this->ask('Please enter the database name:',      $this->container['db_name']);
        $this->container['db_user']      = $this->ask('Please enter the database username:',  $this->container['db_user']);
        $this->container['db_pass']      = $this->ask('Please enter the database password:',  $this->container['db_pass']);
        $this->container['db_charset']   = $this->ask('Please enter the database charset:',   $this->container['db_charset']);
        $this->container['db_collation'] = $this->ask('Please enter the database collation:', $this->container['db_collation']);

        // default user
        $this->container['user_name']     = $this->ask('Please enter a default user name:',     $this->container['user_name']);
        $this->container['user_email']    = $this->ask('Please enter a default user email:',    $this->container['user_email']);
        $this->container['user_password'] = $this->ask('Please enter a default user password:', $this->container['user_password']);

        $this->confirmation();
    }

    /**
     * Installation confirmation
     *
     * @return void
     */
    private function confirmation($confirmed = false)
    {
        if (! $confirmed) {
            $this->line("\n<fg=black;bg=white>--- You have entered the following...</>");

            // application
            $this->comment('Application name:      ' . $this->container['app_name']);
            $this->comment('Application URL:       ' . $this->container['app_url']);

            // database
            $this->comment('Database host:         ' . $this->container['db_host']);
            $this->comment('Database name:         ' . $this->container['db_name']);
            $this->comment('Database username:     ' . $this->container['db_user']);
            $this->comment('Database password:     ' . $this->container['db_pass']);
            $this->comment('Database charset:      ' . $this->container['db_charset']);
            $this->comment('Database collation:    ' . $this->container['db_collation']);

            // default user
            $this->comment('Default user name:     ' . $this->container['user_name']);
            $this->comment('Default user email:    ' . $this->container['user_email']);
            $this->comment('Default user password: ' . $this->container['user_password']);

            // make confirmation..
            if ($this->confirm('Do you wish to proceed in installing FusionCMS?')) {
                $this->confirmation(true);
            } else {
                $this->wizard();
            }
        } else {
            $this->line("\n<fg=black;bg=white>--- Relax while FusionCMS proceeds with the installation process...</>");

            $this->install();
        }
    }

    /**
     * Install FusionCMS.
     *
     * @return void
     */
    private function install()
    {
        $jobs = [
            'Entering maintenance mode...'      => new \Fusion\Console\Actions\EnterMaintenanceMode,

            'Deleting asset files...'           => new \Fusion\Console\Uninstaller\DeleteUserFiles,
            'Deleting model files...'           => new \Fusion\Console\Uninstaller\DeleteModelFiles,
            'Deleting addon assets...'          => new \Fusion\Console\Uninstaller\DeleteAddonAssets,
            'Deleting addon cache...'           => new \Fusion\Console\Uninstaller\DeleteAddonCache,
            'Deleting theme assets...'          => new \Fusion\Console\Uninstaller\DeleteThemeAssets,
            'Deleting theme cache...'           => new \Fusion\Console\Uninstaller\DeleteThemeCache,
            'Deleting log files...'             => new \Fusion\Console\Uninstaller\DeleteLogFiles,
            'Deleting environment config...'    => new \Fusion\Console\Uninstaller\DeleteEnvironmentConfig,
            'Deleting database...'              => new \Fusion\Console\Uninstaller\DeleteDatabase,

            'Creating directories...'           => new \Fusion\Console\Installer\CreateDirectories,
            'Creating database...'              => new \Fusion\Console\Installer\CreateDatabase($this->container),
            'Creating environment config...'    => new \Fusion\Console\Installer\CreateEnvironmentConfig($this->container),
            'Creating database tables...'       => new \Fusion\Console\Installer\CreateDatabaseTables,
            'Publishing Fusion resources...'    => new \Fusion\Console\Installer\PublishFusionResources,
            'Creating storage link...'          => new \Fusion\Console\Installer\CreateStorageLink,
            'Creating default permissions...'   => new \Fusion\Console\Installer\CreateDefaultPermissions,
            'Creating default roles...'         => new \Fusion\Console\Installer\CreateDefaultRoles,
            'Creating default user account...'  => new \Fusion\Console\Installer\CreateDefaultUser($this->container),

            'Exiting maintenance mode...'       => new \Fusion\Console\Actions\ExitMaintenanceMode,
        ];

        if ($this->option('refresh')) {
            unset(
                $jobs['Deleting environment config...'],
                $jobs['Creating environment config...'],
                $jobs['Generating encryption key...']
            );
        }

        $progressBar = new ProgressBar($this->output, count($jobs));
        $progressBar->setFormat("\n%status:-45s%\n%current%/%max% [%bar%] %percent:3s%%\n🏁  %estimated:-20s%  %memory:20s%\n\n");

        event('fusioncms.installing');

        $progressBar->setBarCharacter('<fg=green>⚬</>');
        $progressBar->setEmptyBarCharacter('<fg=red>⚬</>');
        $progressBar->setProgressCharacter('<fg=green>➤</>');

        $progressBar->setMessage('Starting installation process...', 'status');
        $progressBar->start();

        foreach ($jobs as $message => $instance) {
            $progressBar->setMessage($message, 'status');
            $progressBar->advance();

            try {
                dispatch($instance);
            } catch (\Exception $exception) {
                Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

                $this->comment("\n\n" . 'Uh oh! The following error was encountered during the installation process:' . "\n");
                $this->error($exception->getMessage());
                $this->comment("\n" . 'Please check the error logs for more information.');

                exit;
            }
        }

        Artisan::call('fusion:sync');
        Artisan::call('config:clear');
        Artisan::call('addon:discover');

        event('fusioncms.installed');

        $progressBar->setMessage('Complete', 'status');
        $progressBar->finish();

        return $this->line("\n<fg=black;bg=green>--- Installation complete.</>");
    }

    /**
     * Generate a random name.
     *
     * @return array
     */
    private function generateName()
    {
        $people = [
            'Marie Curie',        // Marie Skłodowska-Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.
            'Ada Lovelace',       // Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.
            'Rosalind Franklin',  // Rosalind Elsie Franklin was an English chemist and X-ray crystallographer who made critical contributions to the understanding of the fine molecular structures of DNA, RNA, viruses, coal, and graphite.
            'Lise Meitner',       // Lise Meitner was an Austrian physicist who worked on radioactivity and nuclear physics.
            'Dorothy Hodgkin',    // Dorothy Mary Hodgkin, OM, FRS, known professionally as Dorothy Crowfoot Hodgkin or simply Dorothy Hodgkin, was a British biochemist who developed protein crystallography, for which she won the Nobel Prize in Chemistry in 1964.
            'Mileva Marić',       // Mileva Marić was a Serbian physicist. She was the only woman among Albert Einstein's fellow students at the Zurich Polytechnic.
            'Grace Hopper',       // Grace Murray Hopper was an American professor of mathematics, computer scientist and United States Navy rear admiral.
            'Alan Turing',        // Alan Mathison Turing, OBE, FRS was a British pioneering computer scientist, mathematician, logician, cryptanalyst, philosopher, mathematical biologist, and marathon and ultra distance runner.
            'Niels Bohr',         // Niels Henrik David Bohr was a Danish physicist who made foundational contributions to understanding atomic structure and quantum theory, for which he received the Nobel Prize in Physics in 1922.
            'Charles Darwin',     // Charles Robert Darwin, FRS was an English naturalist and geologist, best known for his contributions to evolutionary theory.
            'Nikola Tesla',       // Nikola Tesla was a Serbian American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.
            'Albert Einstein',    // Albert Einstein was a German-born theoretical physicist. Einstein's work is also known for its influence on the philosophy of science. He developed the general theory of relativity, one of the two pillars of modern physics.
            'Carl Sagan',         // Carl Edward Sagan was an American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences.
            'Edwin Hubble',       // Edwin Powell Hubble was an American astronomer who played a crucial role in establishing the field of extragalactic astronomy and is generally regarded as one of the most important observational cosmologists of the 20th century.
            'John Glenn',         // John Herschel Glenn Jr. was an American aviator, engineer, astronaut, and United States Senator from Ohio. In 1962 he became the first American to orbit the Earth, circling three times.
            'Ursula Franklin',    // Ursula Martius Franklin, CC OOnt FRSC, was a German-Canadian metallurgist, research physicist, author, and educator who taught at the University of Toronto for more than 40 years.
        ];

        return $people[array_rand($people)];
    }

    private function verifyServerRequirements()
    {
        $this->table(['Requirement', 'Version', 'Pass'], CheckServerRequirements::requirements());
        $this->table(['Folder', 'Actual', 'Required', 'Pass'],   CheckServerRequirements::permissions());

        if (! CheckServerRequirements::verify()) {
            $this->error('Your server does not meet the FusionCMS requirements.');
            die();
        }
    }
}
