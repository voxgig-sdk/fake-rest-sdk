<?php
declare(strict_types=1);

// FakeRest SDK context

require_once __DIR__ . '/Control.php';
require_once __DIR__ . '/Operation.php';
require_once __DIR__ . '/Spec.php';
require_once __DIR__ . '/Result.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/Error.php';
require_once __DIR__ . '/Helpers.php';

class FakeRestContext
{
    public string $id;
    public array $out;
    public mixed $client;
    public ?FakeRestUtility $utility;
    public FakeRestControl $ctrl;
    public array $meta;
    public ?array $config;
    public ?array $entopts;
    public ?array $options;
    public mixed $entity;
    public ?array $shared;
    public array $opmap;
    public array $data;
    public array $reqdata;
    public array $match;
    public array $reqmatch;
    public ?array $point;
    public ?FakeRestSpec $spec;
    public ?FakeRestResult $result;
    public ?FakeRestResponse $response;
    public FakeRestOperation $op;

    public function __construct(array $ctxmap = [], ?self $basectx = null)
    {
        $this->id = 'C' . random_int(10000000, 99999999);
        $this->out = [];

        $this->client = FakeRestHelpers::get_ctx_prop($ctxmap, 'client') ?? ($basectx ? $basectx->client : null);
        $this->utility = FakeRestHelpers::get_ctx_prop($ctxmap, 'utility') ?? ($basectx ? $basectx->utility : null);

        $this->ctrl = new FakeRestControl();
        $ctrl_raw = FakeRestHelpers::get_ctx_prop($ctxmap, 'ctrl');
        if (is_array($ctrl_raw)) {
            if (array_key_exists('throw', $ctrl_raw)) {
                $this->ctrl->throw_err = $ctrl_raw['throw'];
            }
            if (isset($ctrl_raw['explain']) && is_array($ctrl_raw['explain'])) {
                $this->ctrl->explain = $ctrl_raw['explain'];
            }
        } elseif ($basectx !== null && $basectx->ctrl !== null) {
            $this->ctrl = $basectx->ctrl;
        }

        $m = FakeRestHelpers::get_ctx_prop($ctxmap, 'meta');
        $this->meta = is_array($m) ? $m : ($basectx ? $basectx->meta ?? [] : []);

        $cfg = FakeRestHelpers::get_ctx_prop($ctxmap, 'config');
        $this->config = is_array($cfg) ? $cfg : ($basectx ? $basectx->config : null);

        $eo = FakeRestHelpers::get_ctx_prop($ctxmap, 'entopts');
        $this->entopts = is_array($eo) ? $eo : ($basectx ? $basectx->entopts : null);

        $o = FakeRestHelpers::get_ctx_prop($ctxmap, 'options');
        $this->options = is_array($o) ? $o : ($basectx ? $basectx->options : null);

        $e = FakeRestHelpers::get_ctx_prop($ctxmap, 'entity');
        $this->entity = $e ?? ($basectx ? $basectx->entity : null);

        $s = FakeRestHelpers::get_ctx_prop($ctxmap, 'shared');
        $this->shared = is_array($s) ? $s : ($basectx ? $basectx->shared : null);

        $om = FakeRestHelpers::get_ctx_prop($ctxmap, 'opmap');
        $this->opmap = is_array($om) ? $om : ($basectx ? $basectx->opmap ?? [] : []);

        $this->data = FakeRestHelpers::to_map(FakeRestHelpers::get_ctx_prop($ctxmap, 'data')) ?? [];
        $this->reqdata = FakeRestHelpers::to_map(FakeRestHelpers::get_ctx_prop($ctxmap, 'reqdata')) ?? [];
        $this->match = FakeRestHelpers::to_map(FakeRestHelpers::get_ctx_prop($ctxmap, 'match')) ?? [];
        $this->reqmatch = FakeRestHelpers::to_map(FakeRestHelpers::get_ctx_prop($ctxmap, 'reqmatch')) ?? [];

        $pt = FakeRestHelpers::get_ctx_prop($ctxmap, 'point');
        $this->point = is_array($pt) ? $pt : ($basectx ? $basectx->point : null);

        $sp = FakeRestHelpers::get_ctx_prop($ctxmap, 'spec');
        $this->spec = ($sp instanceof FakeRestSpec) ? $sp : ($basectx ? $basectx->spec : null);

        $r = FakeRestHelpers::get_ctx_prop($ctxmap, 'result');
        $this->result = ($r instanceof FakeRestResult) ? $r : ($basectx ? $basectx->result : null);

        $rp = FakeRestHelpers::get_ctx_prop($ctxmap, 'response');
        $this->response = ($rp instanceof FakeRestResponse) ? $rp : ($basectx ? $basectx->response : null);

        $opname = FakeRestHelpers::get_ctx_prop($ctxmap, 'opname') ?? '';
        $this->op = $this->resolve_op($opname);
    }

    public function resolve_op(string $opname): FakeRestOperation
    {
        if (isset($this->opmap[$opname])) {
            return $this->opmap[$opname];
        }
        if ($opname === '') {
            return new FakeRestOperation([]);
        }

        $entname = (is_object($this->entity) && method_exists($this->entity, 'get_name'))
            ? $this->entity->get_name()
            : '_';
        $opcfg = \Voxgig\Struct\Struct::getpath($this->config, "entity.{$entname}.op.{$opname}");

        $input = ($opname === 'update' || $opname === 'create') ? 'data' : 'match';

        $points = [];
        if (is_array($opcfg)) {
            $t = \Voxgig\Struct\Struct::getprop($opcfg, 'points');
            if (is_array($t)) {
                $points = $t;
            }
        }

        $op = new FakeRestOperation([
            'entity' => $entname,
            'name' => $opname,
            'input' => $input,
            'points' => $points,
        ]);
        $this->opmap[$opname] = $op;
        return $op;
    }

    public function make_error(string $code, string $msg): FakeRestError
    {
        return new FakeRestError($code, $msg, $this);
    }
}
