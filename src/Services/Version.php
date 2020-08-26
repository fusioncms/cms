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
	 * Is an update available?
	 * 
	 * @return boolean
	 */
	public function hasUpdate()
	{
		return version_compare($this->current(), $this->latest(), '<');
	}

	/**
	 * Creates "PHP-standardized" version number
	 * 	(aka Semantic Versioning).
	 * 
	 * Credit:
	 * https://gist.github.com/jhorsman/62eeea161a13b80e39f5249281e17c39#gistcomment-2918033
	 * 
	 * @param  string $input
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