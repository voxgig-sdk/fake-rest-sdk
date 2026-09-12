import { FakeRestEntityBase } from '../FakeRestEntityBase';
import type { FakeRestSDK } from '../FakeRestSDK';
import type { Control } from '../types';
import type { Post, PostLoadMatch, PostListMatch, PostCreateData } from '../FakeRestTypes';
declare class PostEntity extends FakeRestEntityBase<Post> {
    constructor(client: FakeRestSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    load(this: any, reqmatch?: PostLoadMatch, ctrl?: Control): Promise<PostEntity>;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
    create(this: any, reqdata?: PostCreateData, ctrl?: Control): Promise<PostEntity>;
}
export { PostEntity };
