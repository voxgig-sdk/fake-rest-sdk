<?php
declare(strict_types=1);

// FakeRest SDK utility: prepare_body

class FakeRestPrepareBody
{
    public static function call(FakeRestContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
