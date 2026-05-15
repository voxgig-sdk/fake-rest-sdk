<?php
declare(strict_types=1);

// FakeRest SDK exists test

require_once __DIR__ . '/../fakerest_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FakeRestSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
