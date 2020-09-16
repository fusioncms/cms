<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Form;
use Illuminate\Support\Str;

class FormFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var bool
     */
    protected $collectsEmails = false;

    /**
     * @var bool
     */
    protected $collectsIPs = false;

    /**
     * @var bool
     */
    protected $redirectOnSubmission = false;

    /**
     * @var string
     */
    protected $redirectUrl;

    /**
     * Create a new Form factory.
     *
     * @return \Fusion\Models\Form
     */
    public function create()
    {
        $overrides = [
            'collect_email_addresses' => $this->collectsEmails,
            'collect_ip_addresses'    => $this->collectsIPs,
            'redirect_on_submission'  => $this->redirectOnSubmission,
            'redirect_url'            => $this->redirectUrl,
        ];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = Str::snake($this->name);
            $overrides['slug']   = Str::slug($this->name);
        }

        $form = factory(Form::class)->create($overrides);

        return $form;
    }

    /**
     * Create a form with the given name.
     *
     * @param string $name
     *
     * @return \FormFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Enable custom redirect.
     *
     * @param string $uri
     *
     * @return \FormFactory
     */
    public function withCustomRedirect($uri)
    {
        $this->redirectOnSubmission = true;
        $this->redirectUrl          = $uri;

        return $this;
    }

    public function thatCollectsEmails()
    {
        $this->collectsEmails = true;

        return $this;
    }

    public function thatDoesNotCollectEmails()
    {
        $this->collectsEmails = false;

        return $this;
    }

    public function thatCollectsIPs()
    {
        $this->collectsIPs = true;

        return $this;
    }

    public function thatDoesNotCollectIPs()
    {
        $this->collectsIPs = false;

        return $this;
    }
}
