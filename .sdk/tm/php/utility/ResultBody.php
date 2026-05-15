<?php
declare(strict_types=1);

// FakeRest SDK utility: result_body

class FakeRestResultBody
{
    public static function call(FakeRestContext $ctx): ?FakeRestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
