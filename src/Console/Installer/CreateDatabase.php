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
        $driver    = $this->container['db_driver']    ?? 'mysql';
        $host      = $this->container['db_host']      ?? 'localhost';
        $name      = $this->container['db_name']      ?? 'fusioncms';
        $user      = $this->container['db_user']      ?? 'root';
        $pass      = $this->container['db_pass']      ?? 'secret';
        $charset   = $this->container['db_charset']   ?? 'utf8';
        $collation = $this->container['db_collation'] ?? 'utf8_general_ci';

        try {
            $pdo = new PDO("{$driver}:host={$host}", $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $pdo->query("CREATE DATABASE IF NOT EXISTS {$name} CHARACTER SET {$charset} COLLATE {$collation}");
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}
