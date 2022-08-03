interface NodeInterface {
  element: any;
  nextElement: any;
}
export class Node implements NodeInterface {
  element: any;
  nextElement: any;
  constructor(element: string) {
    this.element = element;
    this.nextElement = null;
  }
}

export class LinkedList {
  head: NodeInterface;
  find: (element: string) => NodeInterface;
  insert: (newElement: string, item: string) => void;
  remove: (item: string) => void;
  findPrevious: (item: string) => NodeInterface;
  display: () => void;

  constructor() {
    this.head = new Node('head');
    this.find = (element: string) => {
      let currentNode = this.head;

      while (currentNode && currentNode.element != element) {
        currentNode = currentNode.nextElement;
      }
      return currentNode;
    };
    this.insert = (newElement: string, item: string) => {
      let newNode = new Node(newElement);
      let current = this.find(item);
      newNode.nextElement = current.nextElement;
      current.nextElement = newNode;
    };
    this.remove = (item: string) => {
      let prevNode = this.findPrevious(item);
      if (!(prevNode.nextElement == null)) {
        prevNode.nextElement = prevNode.nextElement.nextElement;
      }
    };
    this.findPrevious = (item: string) => {
      let currentNode = this.head;

      while (
        !(currentNode.nextElement == null) &&
        currentNode.nextElement.element != item
      ) {
        currentNode = currentNode.nextElement;
      }
      return currentNode;
    };
    this.display = () => {
      let currentNode = this.head;
      while (!(currentNode.nextElement == null)) {
        console.log(currentNode.nextElement.element);
        currentNode = currentNode.nextElement;
      }
    };
  }
}
