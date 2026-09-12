import { FakeRestEntityBase } from '../FakeRestEntityBase';
import type { FakeRestSDK } from '../FakeRestSDK';
import type { Control } from '../types';
import type { Comment, CommentListMatch, CommentCreateData } from '../FakeRestTypes';
declare class CommentEntity extends FakeRestEntityBase<Comment> {
    constructor(client: FakeRestSDK, entopts: any);
    make(this: CommentEntity): CommentEntity;
    list(this: any, reqmatch?: CommentListMatch, ctrl?: Control): Promise<CommentEntity[]>;
    create(this: any, reqdata?: CommentCreateData, ctrl?: Control): Promise<CommentEntity>;
}
export { CommentEntity };
