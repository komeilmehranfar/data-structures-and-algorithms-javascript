export class Stack {
  dataStore: any[];
  top: number;
  push: (element: any) => void;
  pop: () => any;
  peak: () => any;
  clear: () => void;
  length: () => number;

  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.push = (element: any) => {
      this.dataStore[this.top++] = element;
    };
    this.pop = () => {
      if (this.top > 0) {
        const data = this.dataStore[this.top - 1];
        this.dataStore.splice(this.top - 1, 1);
        this.top--;
        return data;
      }
    };
    this.peak = () => {
      if (this.top > 0) {
        return this.dataStore[this.top - 1];
      }
    };
    this.clear = () => {
      this.top = 0;
    };
    this.length = () => this.top;
  }
}
