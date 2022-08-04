import { DoublyLinkedList } from '../src';

describe('LinkedList', () => {
  it('DoublyLinkedList methods works!', () => {
    const cities = new DoublyLinkedList();
    cities.insert('Tehran', 'head');
    cities.insert('LA', 'Tehran');
    cities.insert('London', 'LA');
    cities.insert('Amsterdam', 'London');
    expect(cities.find('Amsterdam').element).toEqual('Amsterdam');
    expect(cities.find('Amsterdam').previousElement.element).toEqual('London');
    cities.remove('Amsterdam');
    expect(cities.find('Amsterdam')).toEqual(null);
  });
});
