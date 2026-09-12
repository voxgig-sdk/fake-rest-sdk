import { FakeRestEntityBase } from '../FakeRestEntityBase';
import type { FakeRestSDK } from '../FakeRestSDK';
import type { Control } from '../types';
import type { Todo, TodoListMatch } from '../FakeRestTypes';
declare class TodoEntity extends FakeRestEntityBase<Todo> {
    constructor(client: FakeRestSDK, entopts: any);
    make(this: TodoEntity): TodoEntity;
    list(this: any, reqmatch?: TodoListMatch, ctrl?: Control): Promise<TodoEntity[]>;
}
export { TodoEntity };
