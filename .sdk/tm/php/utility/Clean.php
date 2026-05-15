<?php
declare(strict_types=1);

// FakeRest SDK utility: clean

class FakeRestClean
{
    public static function call(FakeRestContext $ctx, mixed $val): mixed
    {
        return $val;
    }
}
