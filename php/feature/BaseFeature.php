<?php
declare(strict_types=1);

// FakeRest SDK base feature

class FakeRestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FakeRestContext $ctx, array $options): void {}
    public function PostConstruct(FakeRestContext $ctx): void {}
    public function PostConstructEntity(FakeRestContext $ctx): void {}
    public function SetData(FakeRestContext $ctx): void {}
    public function GetData(FakeRestContext $ctx): void {}
    public function GetMatch(FakeRestContext $ctx): void {}
    public function SetMatch(FakeRestContext $ctx): void {}
    public function PrePoint(FakeRestContext $ctx): void {}
    public function PreSpec(FakeRestContext $ctx): void {}
    public function PreRequest(FakeRestContext $ctx): void {}
    public function PreResponse(FakeRestContext $ctx): void {}
    public function PreResult(FakeRestContext $ctx): void {}
    public function PreDone(FakeRestContext $ctx): void {}
    public function PreUnexpected(FakeRestContext $ctx): void {}
}
