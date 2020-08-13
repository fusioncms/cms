<?php

namespace Fusion\Http\Controllers\Web\Installer;

use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StepController extends Controller
{
    /**
     * Installation step.
     *
     * @param string $step
     *
     * @return View
     */
    public function index(Request $request, $step = 'index')
    {
        abort_if(app_installed(), '404');

        return view("installer.{$step}", $this->getStepData($step));
    }

    /**
     * Validate and save form request.
     *
     * @param Request $request
     * @param string  $step
     *
     * @return Redirect
     */
    public function store(Request $request, $step)
    {
        if ($this->getStepIndex($step) === false) {
            abort('404');
        }

        $validator = Validator::make(
            $request->all(),
            $this->getStepRules($step),
            $this->getStepMessages($step)
        );

        if ($validator->passes()) {
            $this->set($step, $validator->validated());

            return redirect($this->getNextStepLink($step));
        }

        return back()
            ->withErrors($validator)
            ->withInput();
    }

    /**
     * Get validation rules for step.
     *
     * @param string $step
     *
     * @return array
     */
    private function getStepRules($step)
    {
        return config('installer.wizard.steps')[$step]['rules'] ?? [];
    }

    /**
     * Get validation messages for step.
     *
     * @param string $step
     *
     * @return array
     */
    private function getStepMessages($step)
    {
        return config('installer.wizard.steps')[$step]['messages'] ?? [];
    }

    /**
     * Store subset into cache.
     *
     * @param string $key
     * @param array  $value
     * @param void
     */
    private function set($step, array $value = [])
    {
        $key          = config('installer.wizard.storage.key');
        $expires      = now()->addMinutes(config('installer.wizard.storage.expires'));
        $cache        = $this->all();
        $cache[$step] = array_merge($this->get($step), $value);

        cache([$key => $cache], $expires);
    }

    /**
     * Get subset from cache.
     *
     * @param string $step
     * @param array
     */
    private function get($step)
    {
        return $this->all()[$step] ?? [];
    }

    /**
     * Get cache.
     *
     * @param array
     */
    private function all()
    {
        return cache(config('installer.wizard.storage.key'), []);
    }

    /**
     * Get step data or throw 404 if not found.
     *
     * @param string $step
     * @param void
     */
    private function getStepData($step)
    {
        if ($this->getStepIndex($step) === false) {
            abort('404');
        }

        return [
            'data' => $this->get($step),
            'prev' => $this->getPrevStepLink($step),
            'next' => $this->getNextStepLink($step),
        ];
    }

    /**
     * Converts multi-dimensional array to key-based array.
     *
     * @return array
     */
    private function getStepKeys()
    {
        return array_keys(config('installer.wizard.steps'));
    }

    /**
     * Gets current step index.
     *
     * @param string $step
     *
     * @return int|false
     */
    private function getStepIndex($step)
    {
        return array_search($step, $this->getStepKeys());
    }

    /**
     * Get previous step link.
     *
     * @param string $step
     *
     * @return string|null
     */
    private function getPrevStepLink($step)
    {
        $keys  = $this->getStepKeys();
        $index = $this->getStepIndex($step);

        if (array_key_exists($index - 1, $keys)) {
            return '/install/'.$keys[$index - 1];
        }

        return null;
    }

    /**
     * Get next step link.
     *
     * @param string $step
     *
     * @return string|null
     */
    private function getNextStepLink($step)
    {
        $keys  = $this->getStepKeys();
        $index = $this->getStepIndex($step);

        if (array_key_exists($index + 1, $keys)) {
            return '/install/'.$keys[$index + 1];
        }

        return null;
    }
}
