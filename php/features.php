<?php
declare(strict_types=1);

// FakeRest SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FakeRestFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FakeRestBaseFeature();
            case "test":
                return new FakeRestTestFeature();
            default:
                return new FakeRestBaseFeature();
        }
    }
}
