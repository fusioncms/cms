<?php

namespace Fusion\Services;

use Composer\Semver\Comparator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Cache;

class Version
{
    /**
     * Versions.
     *
     * @var array
     */
    private $items = [];

    /**
     * Cache limit - 30 min.
     *
     * @var int
     */
    private $cacheLimit = 60 * 30;

    /**
     * Constructor.
     *
     * @param array $items
     */
    public function __construct()
    {
        $this->items = Cache::remember('versions', $this->cacheLimit, function () {
            $response = (new \GuzzleHttp\Client())
                ->get(config('fusion.feeds.releases'));

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
        return $this->standardize(FUSION_VERSION);
    }

    /**
     * Get latest `fusioncms/cms` version.
     *
     * @return string
     */
    public function latest()
    {
        return $this->standardize(current($this->items)['title']);
    }

    /**
     * Is an update available?
     *
     * @return bool
     */
    public function hasUpdate()
    {
        return Comparator::greaterThan($this->latest(), $this->current());
    }

    /**
     * Creates "PHP-standardized" version number
     * 	(aka Semantic Versioning).
     *
     * @param string $input
     *
     * @return mixed
     */
    public function standardize($input)
    {
        $pattern = "/(\d+)(?:\.(\d+))?(?:\.(\d+))?(.*)?/";
        $output  = [];

        if (preg_match($pattern, $input, $output)) {
            return sprintf(
                '%d.%d.%d%s',
                $output[1] ?? 0,
                $output[2] ?? 0,
                $output[3] ?? 0,
                $output[4] ?? '',
            );
        }

        return $input;
    }
}
