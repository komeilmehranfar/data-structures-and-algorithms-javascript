import { Dictionary } from '../src';

describe('Dictionary', () => {
  it('Dictionary methods works!', () => {
    const peopleHeights = new Dictionary();
    peopleHeights.add('Komeil', 184);
    peopleHeights.add('Tara', 165);
    expect(peopleHeights.find('Komeil')).toEqual(184);
    expect(peopleHeights.length()).toEqual(2);
    peopleHeights.remove('Komeil');
    expect(peopleHeights.find('Komeil')).toBeUndefined();
    peopleHeights.clear();
    expect(peopleHeights.length()).toEqual(0);
  });
});
