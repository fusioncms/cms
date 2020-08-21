<?php

/**
 * retrieve an instance of the matrix model builder.
 *
 * @param string $matrix
 *
 * @return \Fusion\Services\Builders\Matrix
 */
function matrix_page($matrix)
{
    try {
        return new \Fusion\Services\Builders\Single($matrix);
    } catch (\Exception $e) {
        return null;
    }
}

function matrix_entries($matrix)
{
    try {
        return (new \Fusion\Services\Builders\Collection($matrix))->make();
    } catch (\Exception $e) {
        return null;
    }
}
