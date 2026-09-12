import { FakeRestEntityBase } from '../FakeRestEntityBase';
import type { FakeRestSDK } from '../FakeRestSDK';
import type { Control } from '../types';
import type { Product, ProductLoadMatch, ProductListMatch } from '../FakeRestTypes';
declare class ProductEntity extends FakeRestEntityBase<Product> {
    constructor(client: FakeRestSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    load(this: any, reqmatch?: ProductLoadMatch, ctrl?: Control): Promise<ProductEntity>;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
