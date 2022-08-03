import { LinkedList, Node } from '../src';

describe('LinkedList', () => {
  it('LinkedList methods works!', () => {
    const cities = new LinkedList();
    cities.insert('Tehran', 'head');
    cities.insert('LA', 'Tehran');
    cities.insert('London', 'LA');
    cities.insert('Amsterdam', 'London');
    expect(cities.find('Amsterdam')).toEqual(new Node('Amsterdam'));
    cities.remove('Amsterdam');
    expect(cities.find('Amsterdam')).toEqual(null);
    expect(cities.findPrevious('Amsterdam')).toEqual(new Node('London'));
  });
});
