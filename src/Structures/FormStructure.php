<?php

namespace Fusion\Structures;

class FormStructure extends Structure
{
	/**
	 * @var string
	 */
	public $name = 'Form';

	/**
	 * @var array
	 */
	public $excluded = [
        'audio',
        'asset',
        'code',
        'color_picker',
        'dictionary',
        'form',
        'list',
        'markdown',
        'replicator',
        'table',
        'taxonomy',
        'user',
        'video',
    ];
}