<?php
declare(strict_types=1);

// FakeRest SDK utility: feature_add

class FakeRestFeatureAdd
{
    public static function call(FakeRestContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
