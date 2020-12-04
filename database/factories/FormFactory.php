<?php

namespace Database\Factories;

use Fusion\Models\Form;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FormFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Form::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => ($name = $this->faker->words(2, true)),
            'handle'      => Str::slug($name, '_'),
            'slug'        => Str::slug($name, '-'),
            'description' => $this->faker->sentence,

            'collect_email_addresses' => true,
            'collect_ip_addresses'    => false,
            'response_receipt'        => true,
            'confirmation_message'    => null,
            'redirect_on_submission'  => false,
            'redirect_url'            => null,
            'enable_recaptcha'        => false,
            'enable_honeypot'         => false,
            'send_to'                 => null,
            'reply_to'                => null,
            'form_template'           => null,
            'thankyou_template'       => null,
            'status'                  => true,
        ];
    }

    /**
     * Set model name.
     *
     * @param string $name
     *
     * @return $this
     */
    public function withName($name)
    {
        return $this->state([
            'name'   => $name,
            'handle' => str_handle($name),
            'slug'   => Str::slug($name),
        ]);
    }

    /**
     * Set model redirect.
     *
     * @param string $uri
     *
     * @return $this
     */
    public function withCustomRedirect($uri)
    {
        return $this->state([
            'redirect_on_submission' => true,
            'redirect_url'           => $uri,
        ]);
    }

    /**
     * Set model to collect emails.
     *
     * @return $this
     */
    public function thatCollectsEmails()
    {
        return $this->state([
            'collect_email_addresses' => true,
        ]);
    }

    /**
     * Set model to NOT collect emails.
     *
     * @return $this
     */
    public function thatDoesNotCollectEmails()
    {
        return $this->state([
            'collect_email_addresses' => false,
        ]);
    }

    /**
     * Set model to collect IPs.
     *
     * @return $this
     */
    public function thatCollectsIPs()
    {
        return $this->state([
            'collect_ip_addresses' => true,
        ]);
    }

    /**
     * Set model to NOT collect IPs.
     *
     * @return $this
     */
    public function thatDoesNotCollectIPs()
    {
        return $this->state([
            'collect_ip_addresses' => false,
        ]);
    }
}
