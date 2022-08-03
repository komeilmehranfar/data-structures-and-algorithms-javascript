import { Queue } from '../src';

describe('Queue', () => {
  it('Queue Methods Works!', () => {
    const people = new Queue();
    people.enqueue('Person 1');
    people.enqueue('Person 2');
    people.enqueue('Person 3');
    expect(people.length()).toEqual(3);
    const person1 = people.dequeue();
    expect(person1).toEqual('Person 1');
    people.enqueue(person1);
    expect(people.back()).toEqual('Person 1');
    expect(people.front()).toEqual('Person 2');
    expect(people.empty()).toEqual(false);
  });
});
