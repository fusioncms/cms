<?php

namespace Fusion\Concerns;

use Illuminate\Support\Collection;

trait RegistersAssets
{
    /**
     * Regex pattern to match CSS/JS assets.
     *
     * @var string
     */
    protected $assetRegex = '/.\.(css|js)$/i';

    /**
     * Regex pattern to match CSS assets.
     *
     * @var string
     */
    protected $cssRegex = '/.\.css$/i';

    /**
     * Regex pattern to match JS assets.
     *
     * @var string
     */
    protected $jsRegex = '/.\.js$/i';

    /**
     * @var Illuminate\Support\Collection
     */
    protected $assets;

    /**
     * @var string
     */
    protected $lastAddedAsset = '';

    /**
     * @var string
     */
    protected $lastAddedType = '';

    /**
     * @var array
     */
    private $nodes = [];

    /**
     * @var array
     */
    private $nodeNames = [];

    /**
     * Constructor method.
     *
     * @return null
     */
    public function __construct()
    {
        $this->assets = new Collection(['css' => [], 'js' => []]);
    }

    /**
     * Add a new asset to the node collection.
     *
     * @return Asset
     */
    public function asset($assets, $namespace = null)
    {
        if (is_array($assets)) {
            foreach ($assets as $asset) {
                $this->asset($asset, $namespace);
            }
        } elseif ($this->isAsset($assets)) {
            $this->addAsset($assets, $namespace);
        }

        return $this;
    }

    /**
     * Add a dependency to an asset.
     *
     * @return Asset
     */
    public function dependsOn($dependency)
    {
        $assets = $this->assets->get($this->lastAddedType);

        foreach ($assets as $path => $item) {
            if ($path === $this->lastAddedAsset) {
                $assets[$path] = [
                    'namespace'  => $item['namespace'],
                    'dependency' => $dependency,
                ];

                $this->assets->put($this->lastAddedType, $assets);
            }
        }

        return $this;
    }

    /**
     * Builds the CSS HTML tags.
     *
     * @return Closure|string
     */
    public function css()
    {
        $cssCollection = $this->sort($this->assets->get('css'), 'css');
        $output        = '';

        foreach ($cssCollection as $key => $value) {
            $output .= '<link rel="stylesheet" href="'.$value.'">'."\n";
        }

        return $output;
    }

    /**
     * Builds the CSS HTML tags.
     *
     * @return Closure|string
     */
    public function js()
    {
        $jsCollection = $this->sort($this->assets->get('js'), 'js');
        $output       = '';

        foreach ($jsCollection as $key => $value) {
            $output .= '<script type="text/javascript" src="'.$value.'"></script>'."\n";
        }

        return $output;
    }

    /**
     * Determines if the passed asset is indeed an asset.
     *
     * @param string $asset
     *
     * @return bool
     */
    protected function isAsset($asset)
    {
        return preg_match($this->assetRegex, $asset);
    }

    /**
     * Determines if the passed asset is a Javascript file.
     *
     * @param string $asset
     *
     * @return bool
     */
    protected function isJs($asset)
    {
        return preg_match($this->jsRegex, $asset);
    }

    /**
     * Determines if the passed asset is a CSS file.
     *
     * @param string $asset
     *
     * @return bool
     */
    protected function isCss($asset)
    {
        return preg_match($this->cssRegex, $asset);
    }

    /**
     * Add an asset file to the collection.
     *
     * @param array|string $assets
     *
     * @return Assets
     */
    protected function addAsset($assets, $namespace = null)
    {
        if (is_array($assets)) {
            foreach ($assets as $asset => $meta) {
                $this->addAsset($asset);
            }

            return $this;
        }

        $type       = ($this->isCss($assets)) ? 'css' : 'js';
        $collection = $this->assets->get($type);

        if (!in_array($assets, $collection)) {
            $collection[$assets] = [
                'namespace'  => $namespace,
                'dependency' => [],
            ];

            $this->assets->put($type, $collection);

            $this->lastAddedType  = $type;
            $this->lastAddedAsset = $assets;
        }

        return $this;
    }

    /**
     * Sorts the dependencies of all assets, to ensure dependant
     * assets are loaded first.
     *
     * @param array $assets
     *
     * @return array
     */
    protected function sort($assets = [], $type)
    {
        $list = [];

        foreach ($assets as $key => $value) {
            if (isset($value['dependency'])) {
                $list[$key] = [$this->getNamespacedAsset($value['dependency'], $type)];
            } else {
                $list[$key] = null;
            }
        }

        $dependencies       = $this->buildDependencies($list);
        $sortedDependencies = $this->sortDependencies();

        return array_filter($sortedDependencies);
    }

    /**
     * Retrievs the asset based on the defined namespace.
     *
     * @param string $namespace
     * @param string $type      (css|js)
     *
     * @return string
     */
    protected function getNamespacedAsset($namespace, $type)
    {
        $collection = $this->assets->get($type);

        foreach ($collection as $key => $value) {
            if ($value['namespace'] === $namespace) {
                return $key;
            }
        }
    }

    protected function buildDependencies($dependencies = [], $parse = true)
    {
        $this->nodeNames = array_keys($dependencies);

        if ($parse) {
            $dependencies = $this->parseDependencyList($dependencies);
        }

        foreach ($dependencies as $pair) {
            foreach ($pair as $asset => $dependency) {
                if (!isset($this->nodes[$asset])) {
                    $this->addNode($asset);
                }

                if (!isset($this->nodes[$dependency])) {
                    $this->addNode($dependency);
                }

                if (!in_array($dependency, $this->nodes[$asset]->children)) {
                    $this->nodes[$asset]['children'][] = $dependency;
                }

                if (!in_array($asset, $this->nodes[$dependency]->parents)) {
                    $this->nodes[$dependency]['parents'][] = $asset;
                }
            }
        }
    }

    /**
     * Parses a list of dependencies into an array of dependency pairs.
     *
     * @param array $list
     *
     * @return array
     */
    protected function parseDependencyList(array $list = [])
    {
        $parsedList = [];

        foreach ($list as $name => $dependencies) {
            foreach ($dependencies as $dependency) {
                array_push($parsedList, [$dependency => $name]);
            }
        }

        return $parsedList;
    }

    /**
     * Add a new asset node.
     *
     * @param string $name
     *
     * @return void
     */
    protected function addNode($name = '')
    {
        $this->nodes[$name] = [
            'name'     => $name,
            'parents'  => [],
            'children' => [],
        ];
    }

    /**
     * Performs topological sorting against the list of nodes.
     *
     * @return array
     */
    protected function sortDependencies()
    {
        $nodes     = $this->nodes;
        $rootNodes = array_values($this->getRootNodes($nodes));
        $sorted    = [];

        while (count($nodes) > 0) {
            if ($rootNodes === []) {
                return [];
            }

            $node     = array_pop($rootNodes);
            $sorted[] = $node['name'];

            for ($i = count($node['children']) - 1; $i >= 0; $i--) {
                $childNode = $node['children'][$i];

                unset($nodes[$node['name']]['children'][$i]);

                $parentPosition = array_search($node['name'], $nodes[$childNode]['parents']);

                unset($nodes[$childNode]->parents[$parentPosition]);

                if (!count($nodes[$childNode]['parents'])) {
                    array_push($rootNodes, $nodes[$childNode]);
                }
            }

            unset($nodes[$node['name']]);
        }

        $looseNodes = [];

        foreach ($this->nodeNames as $name) {
            if (!in_array($name, $sorted)) {
                $looseNodes[] = $name;
            }
        }

        return array_merge($sorted, $looseNodes);
    }

    /**
     * Returns an array of node objects that do not have parents.
     *
     * @param array $nodes
     *
     * @return array
     */
    protected function getRootNodes(array $nodes)
    {
        $rootNodes = [];

        foreach ($nodes as $name => $node) {
            if (!count($node->parents)) {
                $rootNodes[$name] = $node;
            }
        }

        return $rootNodes;
    }
}
