import { List } from '../src';

describe('List', () => {
  it('List Append Method Works!', () => {
    const moviesList = new List();
    expect(moviesList.length()).toEqual(0);
    moviesList.append('Interstellar');
    expect(moviesList.length()).toEqual(1);
  });
  it('List Find Method Works!', () => {
    const moviesList = new List();
    moviesList.append('Interstellar');
    moviesList.append('Shutter Island');
    moviesList.append('Inception');
    expect(moviesList.find('Interstellar')).toEqual(0);
    expect(moviesList.find('Inception')).toEqual(2);
  });
  it('List Remove Method Works!', () => {
    const moviesList = new List();
    moviesList.append('Interstellar');
    moviesList.append('Shutter Island');
    moviesList.append('Inception');
    moviesList.remove('Interstellar');
    expect(moviesList.find('Interstellar')).toEqual(-1);
  });
  it('List Clear Method Works!', () => {
    const moviesList = new List();
    moviesList.append('Interstellar');
    moviesList.append('Shutter Island');
    moviesList.append('Inception');
    moviesList.clear();
    expect(moviesList.length()).toEqual(0);
  });
  it('List Insert Method Works!', () => {
    const moviesList = new List();
    moviesList.append('Interstellar');
    moviesList.append('Shutter Island');
    moviesList.append('Inception');
    moviesList.insert('The Time', 'Shutter Island');
    expect(moviesList.contains('The Time')).toEqual(true);
    expect(moviesList.find('The Time')).toEqual(2);
    expect(moviesList.length()).toEqual(4);
  });
  it('List Traversing Methods Works!', () => {
    const moviesList = new List();
    moviesList.append('Interstellar');
    moviesList.append('Shutter Island');
    moviesList.append('Inception');
    expect(moviesList.getElement()).toEqual('Interstellar');
    moviesList.next();
    expect(moviesList.getElement()).toEqual('Shutter Island');
    moviesList.next();
    moviesList.next();
    expect(moviesList.getElement()).toEqual('Inception');
    moviesList.prev();
    moviesList.prev();
    expect(moviesList.getElement()).toEqual('Interstellar');
    moviesList.prev();
    expect(moviesList.getElement()).toEqual('Interstellar');
  });
});
