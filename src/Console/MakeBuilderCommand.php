<?php

namespace Fusion\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeBuilderCommand extends Command
{
	/**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:builder {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new FusionCMS builer';


    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->info('Verifying a few things...');
        $this->verify();
        $this->info('Setting up your Builder...');

    	// Building model..
    	$this->createBuildingModel();
    	$this->createBuildingModelObserver();
    	$this->createBuilderModelFolder();

    	// Builder class..
    	$this->createBuilderClass();

    	// Builder model..
    	$this->createBuilderModel();

        $this->info('Builder created successfully.');
    }

    /**
     * Create Building Model.
     *
     * @return void
     */
    protected function createBuildingModel()
    {
    	list($path, $stub) = $this->getPath('building_model');

    	$name    = Str::studly($this->argument('name'));
    	$content = File::get($stub);

    	File::put($path, strtr($content, [
    		'{name}' => $name,
    	]));
    }

    /**
     * Create Building Model Observer.
     *
     * @return void
     */
    protected function createBuildingModelObserver()
    {
    	list($path, $stub) = $this->getPath('building_model_observer');

    	$name    = Str::studly($this->argument('name'));
    	$handle  = str_handle($name);
    	$content = File::get($stub);

    	File::put($path, strtr($content, [
    		'{name}'   => $name,
    		'{handle}' => $handle
    	]));
    }

    /**
     * Ensure building model's folder path exists.
     * 
     * @return void
     */
    protected function createBuilderModelFolder()
    {
    	$name = Str::of($this->argument('name'))->studly()->plural()->__toString();
    	$path = fusion_path("src/Models/{$name}");

    	File::ensureDirectoryExists($path, 0755, true);

    	if (!File::exists("{$path}/.gitignore")) {
    		File::put("{$path}/.gitignore", "*\n!.gitignore");
    	}
    }

    /**
     * Create Builder Class.
     * 
     * @return void
     */
    protected function createBuilderClass()
    {
    	list($path, $stub) = $this->getPath('builder_class');

    	$name    = Str::studly($this->argument('name'));
    	$handle  = str_handle($name);
    	$content = File::get($stub);

    	File::put($path, strtr($content, [
    		'{name}'   => $name,
    		'{handle}' => $handle
    	]));
    }

    /**
     * Create Builder Model stub file.
     *
     * @return void
     */
    protected function createBuilderModel()
    {
    	list($path, $stub) = $this->getPath('builder_model');

    	$name    = Str::of($this->argument('name'))->studly()->plural()->__toString();
    	$content = File::get($stub);

    	File::put($path, strtr($content, [
    		'{name}' => $name,
    	]));
    }

    /**
     * Helper.
     *
     * @throws Exception
     * @return void
     */
    private function verify()
    {
        foreach ($this->getPaths() as $key => $value) {
            if (File::exists($value[0])) {
                throw new \Exception($value[0] . ' already exists!');
            }
        }
    }

    /**
     * Helper.
     * 
     * @param  string $key
     * @access private
     * @return array
     */
    private function getPath($key)
    {
    	return $this->getPaths()[$key];
    }

    /**
     * Helper.
     *
     * @access private
     * @return array
     */
    private function getPaths()
    {
        $modelName = Str::studly($this->argument('name'));
        $stubName  = Str::camel($this->argument('name'));

        return [
            'building_model' => [
                fusion_path("/src/Models/{$modelName}.php"),
                fusion_path('stubs/builders/console/buildingModel.stub'),
            ],
            'building_model_observer' => [
                fusion_path("/src/Observers/{$modelName}Observer.php"),
                fusion_path('stubs/builders/console/buildingModelObserver.stub'),
            ],
            'builder_class' => [
                fusion_path("/src/Services/Builders/{$modelName}"),
                fusion_path('stubs/builders/console/builderClass.stub'),
            ],
            'builder_model' => [
                $path = fusion_path("/stubs/builders/{$stubName}.stub"),
                fusion_path('stubs/builders/console/builderModel.stub'),
            ],
        ];
    }
}