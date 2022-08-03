export class Queue {
  dataStore: any[];
  enqueue: (element: any) => any;
  dequeue: () => any;
  front: () => any;
  back: () => any;
  toString: () => any;
  empty: () => any;
  length: () => number;
  constructor() {
    this.dataStore = [];
    this.enqueue = (element: any) => {
      this.dataStore.push(element);
    };
    this.dequeue = () => this.dataStore.shift();
    this.front = () => this.dataStore[0];
    this.back = () => this.dataStore[this.dataStore.length - 1];
    this.toString = () => {
      let str = '';
      for (let i = 0; i < this.dataStore.length; ++i) {
        str += this.dataStore[i] + '\n';
      }
      return str;
    };
    this.empty = () => {
      if (this.dataStore.length == 0) {
        return true;
      } else {
        return false;
      }
    };
    this.length = () => this.dataStore.length;
  }
}
