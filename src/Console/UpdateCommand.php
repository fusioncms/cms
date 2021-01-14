<?php

namespace Fusion\Console;

use Throwable;
use Fusion\Facades\Version;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class UpdateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:update'.
                           ' {--version-number : Package version constraint. }'.
                           ' {--no-backup      : Disable backup before update. }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update FusionCMS to the latest version';
    
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (!Version::hasUpdate()) {
            $this->error('You are currently on the latest version of FusionCMS.');

            return;
        }
        
        $jobs = $this->jobs();
        // --
        
        $this->line("<fg=black;bg=white>--- Relax while FusionCMS proceeds with the update process...</>");

        $progressBar = new ProgressBar($this->output, count($jobs));
        $progressBar->setFormat("\n%status:-45s%\n%current%/%max% [%bar%] %percent:3s%%\n🏁  %estimated:-20s%  %memory:20s%\n\n");

        event('fusioncms.updating');

        $progressBar->setBarCharacter('<fg=green>⚬</>');
        $progressBar->setEmptyBarCharacter('<fg=red>⚬</>');
        $progressBar->setProgressCharacter('<fg=green>➤</>');
     
        $progressBar->setMessage('Starting update process...', 'status');
        $progressBar->start();

        foreach ($jobs as $message => $instance) {
            $progressBar->setMessage($message, 'status');
            $progressBar->advance();

            try {
                dispatch_now($instance);
            } catch (Throwable $exception) {
                Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

                $this->comment("\n\n".'Uh oh! The following error was encountered during the update process'."\n");
                $this->error($exception->getMessage());
                $this->comment("\n".'Please check the error logs for more information.');

                exit;
            }
        }

        event('fusioncms.updated');

        $progressBar->setMessage('Complete', 'status');
        $progressBar->finish();

        return $this->line("\n<fg=black;bg=green>--- Update complete.</>");
    }

    /**
     * List of jobs.
     * 
     * @return array
     */
    private function jobs()
    {
        $version = $this->option('version-number') ?? Version::latest();

        $jobs = [
            'Making backup...'          => new \Fusion\Jobs\Backups\BackupRun(['disable-notifications' => true]),
            'Updating dependencies...'  => new \Fusion\Jobs\Updates\Update($version),
            'Finalizing..'              => new \Fusion\Jobs\Updates\Finalize,
        ];

        // `--no-backup` option..
        if ($this->option('no-backup')) {
            unset($jobs['Making backup...']);
        }

        return $jobs;
    }
}
