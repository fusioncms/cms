<?php

namespace Fusion\Console\Installer;

use PDO;

class CreateDatabase
{
    /**
     * @var array
     */
    protected $container;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
        $this->container = $container;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $driver = $this->container['db_driver'];
        $host   = $this->container['db_host'];
        $name   = $this->container['db_name'];
        $user   = $this->container['db_user'];
        $pass   = $this->container['db_pass'];

        try {
            $pdo = new PDO("{$driver}:host={$host}", $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $pdo->query("CREATE DATABASE IF NOT EXISTS {$name}");
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}
