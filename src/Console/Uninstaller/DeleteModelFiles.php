<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteModelFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::delete(glob(fusion_path('src/Models/Collections').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Forms').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Navigation').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Settings').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Singles').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Taxonomies').'/*.php'));
        File::delete(glob(fusion_path('src/Models/Replicators').'/*.php'));
    }
}
