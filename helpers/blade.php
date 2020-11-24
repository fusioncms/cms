<?php

use Symfony\Component\Debug\Exception\FatalThrowableError;

/**
 * Compile a blade template string in a safe and controlled manner.
 *
 * @param string $template
 * @param Model  $model
 *
 * @return string
 */
function compile_blade_template($template, $model)
{
    $template = str_replace(' ', '', $template);
    $template = str_replace('{', '{{$model->', $template);
    $template = str_replace('}', '}}', $template);

    $php     = Blade::compileString($template);
    $obLevel = ob_get_level();

    ob_start() and extract([$model], EXTR_SKIP);

    try {
        eval('?>'.$php);
    } catch (Exception $e) {
        while (ob_get_level() > $obLevel) ob_end_clean();
        throw $e;
    } catch (Throwable $e) {
        while (ob_get_level() > $obLevel) ob_end_clean();
        throw new FatalThrowableError($e);
    }

    return ob_get_clean();
}