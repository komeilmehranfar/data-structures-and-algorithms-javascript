import { Stack } from '../src';

describe('Stack', () => {
  it('Stack Push and Pop and Peak Method Works!', () => {
    const tasksStack = new Stack();
    expect(tasksStack.length()).toEqual(tasksStack.dataStore.length);
    tasksStack.push('To Do 1');
    tasksStack.push('To Do 2');
    tasksStack.push('To Do 3');
    expect(tasksStack.length()).toEqual(tasksStack.dataStore.length);
    const task = tasksStack.pop();
    expect(task).toEqual('To Do 3');
    expect(tasksStack.length()).toEqual(tasksStack.dataStore.length);
    expect(tasksStack.peak()).toEqual('To Do 2');
  });
});
