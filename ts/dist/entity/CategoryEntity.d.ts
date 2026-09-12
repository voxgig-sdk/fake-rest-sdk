import { FakeRestEntityBase } from '../FakeRestEntityBase';
import type { FakeRestSDK } from '../FakeRestSDK';
import type { Control } from '../types';
import type { Category, CategoryListMatch } from '../FakeRestTypes';
declare class CategoryEntity extends FakeRestEntityBase<Category> {
    constructor(client: FakeRestSDK, entopts: any);
    make(this: CategoryEntity): CategoryEntity;
    list(this: any, reqmatch?: CategoryListMatch, ctrl?: Control): Promise<CategoryEntity[]>;
}
export { CategoryEntity };
