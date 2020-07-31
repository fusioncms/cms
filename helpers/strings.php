<?php

use Fusion\Services\Parsers\ParsedownExtra;
use Illuminate\Support\Str;

function render_markdown($content)
{
    $parsedown = new ParsedownExtra();

    return $parsedown->text($content);
}

function str_handle($string)
{
    return Str::slug($string, '_');
}
