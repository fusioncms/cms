<?php

namespace Fusion\Console\Uninstaller;

use PDO;
use Artisan;
use PDOException;

class DeleteDatabase
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $driver   = 'mysql';
        $host     = config('database.connections.mysql.host');
        $database = config('database.connections.mysql.database');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');

        try {
            $pdo = new PDO("{$driver}:host={$host}", $username, $password);
            $pdo->query("DROP DATABASE IF EXISTS {$database}");
        } catch (PDOException $e) {
            // die($e->getMessage());
        }
    }
}
