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
        $driver = $this->container['db_driver'] ?? 'mysql';
        $host = $this->container['db_host'] ?? 'localhost';
        $database = $this->container['db_database'] ?? 'fusioncms';
        $username = $this->container['db_username'] ?? 'root';
        $password = $this->container['db_password'] ?? 'secret';
        $charset = $this->container['db_charset'] ?? 'utf8';
        $collation = $this->container['db_collation'] ?? 'utf8_general_ci';

        try {
            $pdo = new PDO("{$driver}:host={$host}", $username, $password);
            $pdo->query("CREATE DATABASE IF NOT EXISTS {$database} CHARACTER SET {$charset} COLLATE {$collation}");
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }
}
