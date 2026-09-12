import { Context } from './Context';
declare class FakeRestError extends Error {
    isFakeRestError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FakeRestError };
