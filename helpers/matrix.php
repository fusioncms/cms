<?php

use Fusion\Models\Matrix;

/**
 * retrieve an instance of the matrix model builder.
 *
 * @param string $matrix
 *
 * @return \Fusion\Services\Builders\Matrix
 */
function matrix_page($slug)
{
    try {
        return Matrix::where('slug', $slug)->firstOrFail();
    } catch (\Exception $e) {
        return null;
    }
}

function matrix_entries($slug)
{
    try {
        return Matrix::where('slug', $slug)->firstOrFail()->entries;
    } catch (\Exception $e) {
        return null;
    }
}
