<?php

namespace Fusion\Services;

class Version
{
	public function all()
	{
		$response = (new \GuzzleHttp\Client)
			->get('https://beta.getfusioncms.com/releases.json');

		return json_decode($response->getBody(), true);
	}

	public function current()
    {
        return FUSION_VERSION;
    }

	public function latest()
    {
        return current($this->all()['items'])['title'];
    }
}