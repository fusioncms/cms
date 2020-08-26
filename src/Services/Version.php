<?php

namespace Fusion\Services;

use Illuminate\Pagination\Paginator;
use Illuminate\Database\Concerns\BuildsQueries;

class Version
{
	use BuildsQueries;
	/**
	 * Versions.
	 * 
	 * @var array
	 */
	private $items = [];

	/**
	 * Cache limit - 24 hours.
	 * 
	 * @var integer
	 */
	private $cacheLimit = 60*60*24;

	/**
     * Constructor.
     *
     * @param array $items
     */
    public function __construct()
    {
        $this->items = \Cache::remember('versions', $this->cacheLimit, function() {
			$response = (new \GuzzleHttp\Client)
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
	 * Get paginated `fusioncms/cms` verions.
	 * 
	 * @param  integer $perPage
	 * @param  integer $currentPage
	 * @param  array   $options
	 * @return \Illuminate\Pagination\Paginator          
	 */
	public function paginate($perPage = 25, $pageName = 'page', $page = null)
	{
		$page    = $page ?: Paginator::resolveCurrentPage($pageName);
		$options = [];

		return $this->simplePaginator($this->items, $perPage, $page, $options);
	}

	/**
	 * Find `fusioncms/cms` verion.
	 *
	 * @param  string $version
	 * @return array
	 */
	public function find($version)
	{
		return collect($this->items)->where('title', $version);
	}

	/**
	 * Get current `fusioncms/cms` version.
	 * 
	 * @return string
	 */
	public function current()
	{
		return ltrim(FUSION_VERSION, 'v');
	}

	/**
	 * Get latest `fusioncms/cms` version.
	 * 
	 * @return string
	 */
	public function latest()
	{
		return ltrim(current($this->items)['title'], 'v');
	}

	/**
	 * User is on latest version of `fusioncms/cms`?
	 * 
	 * @return boolean
	 */
	public function hasUpdates()
	{
		return version_compare($this->current(), $this->latest(), '<');
	}
}