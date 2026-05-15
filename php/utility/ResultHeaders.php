<?php
declare(strict_types=1);

// FakeRest SDK utility: result_headers

class FakeRestResultHeaders
{
    public static function call(FakeRestContext $ctx): ?FakeRestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
