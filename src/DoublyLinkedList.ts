interface NodeInterface {
  element: any;
  nextElement: any;
  previousElement: any;
}
export class DoublyNode implements NodeInterface {
  element: any;
  nextElement: any;
  previousElement: any;
  constructor(element: string) {
    this.element = element;
    this.nextElement = null;
    this.previousElement = null;
  }
}

export class DoublyLinkedList {
  head: NodeInterface;
  find: (element: string) => NodeInterface;
  insert: (newElement: string, item: string) => void;
  remove: (item: string) => void;
  display: () => void;
  findLast: () => NodeInterface;
  displayReverse: () => void;
  constructor() {
    this.head = new DoublyNode('head');
    this.find = (element: string) => {
      let currentNode = this.head;

      while (currentNode && currentNode.element != element) {
        currentNode = currentNode.nextElement;
      }
      return currentNode;
    };
    this.insert = (newElement: string, item: string) => {
      let newNode = new DoublyNode(newElement);
      let current = this.find(item);
      newNode.nextElement = current.nextElement;
      newNode.previousElement = current;
      current.nextElement = newNode;
    };
    this.remove = (item: string) => {
      let currentNode = this.find(item);
      if (currentNode.nextElement != null) {
        currentNode.previousElement.nextElement = currentNode.nextElement;
        currentNode.nextElement.previousElement = currentNode.previousElement;
        currentNode.nextElement = null;
        currentNode.previousElement = null;
      } else if (currentNode) {
        currentNode.previousElement.nextElement = currentNode.nextElement;
        currentNode.nextElement = null;
        currentNode.previousElement = null;
      }
    };
    this.findLast = () => {
      let currentNode = this.head;
      if (!(currentNode.nextElement == null)) {
        currentNode = currentNode.nextElement;
      }
      return currentNode;
    };
    this.displayReverse = () => {
      let currentNode = this.head;
      currentNode = this.findLast();
      if (!(currentNode.previousElement == null)) {
        console.log(currentNode.element);
        currentNode = currentNode.previousElement;
      }
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
