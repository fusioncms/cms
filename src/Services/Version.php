<?php

namespace Fusion\Services;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Composer\Semver\Comparator;
use Illuminate\Support\Facades\Artisan;

class Version
{
    /**
     * Versions.
     *
     * @var array
     */
    private $items = [];

    /**
     * Cache limit - 24 hours.
     *
     * @var int
     */
    private $cacheLimit = 60 * 60 * 24;

    /**
     * Constructor.
     *
     * @param array $items
     */
    public function __construct()
    {
        $this->items = \Cache::remember('versions', $this->cacheLimit, function () {
            $response = (new \GuzzleHttp\Client())
                ->get('https://beta.getfusioncms.com/releases.json');

            return json_decode($response->getBody(), true)['items'];
        });
    }

    /**
     * Get all `fusioncms/cms` verions.
     *
     * @return array
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Get total number of versions.
     *
     * @return int
     */
    public function total()
    {
        return count($this->all());
    }

    /**
     * Get paginated `fusioncms/cms` verions.
     *
     * @param int $perPage
     *
     * @return \Illuminate\Pagination\Paginator
     */
    public function paginate($perPage = 5, $page = null)
    {
        $page  = $page ?: Paginator::resolveCurrentPage();
        $items = array_slice($this->all(), ($page - 1) * $perPage, $perPage);

        return new LengthAwarePaginator($items, $this->total(), $perPage, $page);
    }

    /**
     * Find `fusioncms/cms` verion.
     *
     * @param string $version
     *
     * @return array
     */
    public function find($version)
    {
        return collect($this->items)
            ->where('title', $version)
            ->first();
    }

    /**
     * Get current `fusioncms/cms` version.
     *
     * @return string
     */
    public function current()
    {
        return self::standardize(FUSION_VERSION);
    }

    /**
     * Get latest `fusioncms/cms` version.
     *
     * @return string
     */
    public function latest()
    {
        return self::standardize(current($this->items)['title']);
    }

    /**
     * Is new update available?
     *
     * @return bool
     */
    public function hasUpdate()
    {
        return Comparator::greaterThan($this->latest(), $this->current());
    }

    /**
     * Is auto-updating enabled?
     *
     * @return bool
     */
    public function isAutoUpdateEnabled()
    {
        return setting('system.auto_update', false);
    }

    /**
     * Dispatch update job.
     * 
     * @return void
     */
    public function update()
    {
        if ($this->hasUpdate()) {
            BackupRun::withChain([
                function() {
                    // Composer::update("fusioncms/cms:{$this->latest()}");
                },
                function() {
                    Artisan::call('fusion:publish');
                    Artisan::call('optimize:clear');
                }
            ])
            ->dispatch();
        }
    }

    /**
     * Creates "PHP-standardized" version number
     * 	(aka Semantic Versioning).
     *
     * Credit:
     * https://gist.github.com/jhorsman/62eeea161a13b80e39f5249281e17c39#gistcomment-2918033
     *
     * @param string $input
     *
     * @return mixed
     */
    public static function standardize($input)
    {
        $pattern = "/(0|(?:[1-9]\d*))(?:\.(0|(?:[1-9]\d*))(?:\.(0|(?:[1-9]\d*)))?(?:\-([\w][\w\.\-_]*))?)?/";
        $output  = [];

        if (preg_match($pattern, $input, $output)) {
            return vsprintf('%d.%d.%d-%s', array_slice($output, 1));
        }

        return $input;
    }
}