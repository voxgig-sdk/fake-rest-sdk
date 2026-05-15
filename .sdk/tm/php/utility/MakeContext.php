<?php
declare(strict_types=1);

// FakeRest SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FakeRestMakeContext
{
    public static function call(array $ctxmap, ?FakeRestContext $basectx): FakeRestContext
    {
        return new FakeRestContext($ctxmap, $basectx);
    }
}
