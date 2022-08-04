type DictionaryIndex = string | number;

export class Dictionary {
  private dataStore: {
    [key in DictionaryIndex]: any;
  };
  find: (key: string | number) => any;
  remove: (key: string | number) => void;
  add: (key: string | number, value: any) => void;
  length: () => number;
  clear: () => void;

  constructor() {
    this.dataStore = {};
    this.find = (key: string | number) => this.dataStore[key];
    this.add = (key: string | number, value: any) => {
      this.dataStore[key] = value;
    };
    this.remove = (key: string | number) => {
      delete this.dataStore[key];
    };
    this.length = () => {
      return Object.keys(this.dataStore).length;
    };
    this.clear = () => {
      this.dataStore = {};
    };
  }
}
