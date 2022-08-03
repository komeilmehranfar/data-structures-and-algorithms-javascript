export class List {
  listSize: number;
  position: number;
  dataStore: any[];
  length: () => number;
  clear: () => void;
  find: (element: any) => number;
  toString: () => number[];
  insert: (element: any, after: any) => boolean;
  append: (element: any) => void;
  remove: (element: any) => boolean;
  front: () => void;
  end: () => void;
  prev: () => void;
  next: () => void;
  currentPosition: () => void;
  moveTo: (position: number) => void;
  getElement: () => void;
  contains: (element: any) => void;

  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
    this.clear = () => {
      this.dataStore = [];
      this.listSize = this.position = 0;
    };
    this.find = (element: any) => {
      for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
          return i;
        }
      }
      return -1;
    };
    this.toString = () => this.dataStore;
    this.insert = (element, after) => {
      let insertPosition = this.find(after);
      if (insertPosition > -1) {
        this.dataStore.splice(insertPosition + 1, 0, element);
        ++this.listSize;
        return true;
      }
      return false;
    };
    this.append = (element: any) => {
      this.dataStore[this.listSize++] = element;
    };
    this.remove = (element: any) => {
      let foundAt = this.find(element);
      if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
      }
      return false;
    };
    this.front = () => {
      this.position = 0;
    };
    this.end = () => {
      this.position = this.listSize - 1;
    };
    this.prev = () => {
      if (this.position > 0) {
        --this.position;
      }
    };
    this.next = () => {
      if (this.position < this.listSize - 1) {
        ++this.position;
      }
    };
    this.currentPosition = () => this.position;
    this.moveTo = (position: number) => (this.position = position);
    this.getElement = () => this.dataStore[this.position];
    this.contains = (element: any) => {
      for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
          return true;
        }
      }
      return false;
    };
    this.length = () => this.listSize;
  }
}
