class Node {
  data = null;
  nextNode = null;
  constructor(val) {
    this.data = val;
  }
}

class LinkedList {
  FirstNode = null;
  LastNode = null;
  constructor() {
    //super(this);
  }

  RemoveAtFirst() {
    if (this.FirstNode) {
      let currentNode = this.FirstNode.nextNode;
      this.FirstNode = currentNode;
    }
  }

  RemoveAtLast() {
    if (this.FirstNode) {
      let curNode = this.FirstNode,
        lastTempNode;
      while (curNode.nextNode) {
        lastTempNode = curNode;
        curNode = curNode.nextNode;
      }

      this.LastNode = lastTempNode;
      this.LastNode.nextNode = null;
    }
  }

  printValues() {
    let currentNode = this.FirstNode;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
      //console.log(currentNode);
    }
  }

  //Append will happen only at last
  append(data) {
    const newNode = new Node(data);

    if (this.FirstNode) {
      //Last Node holding reference for firstNode end elements so changing lastnode it changes firstNode
      this.LastNode.nextNode = newNode;
      this.LastNode = newNode;
    } else {
      this.FirstNode = newNode;
      this.LastNode = newNode;
    }
  }

  //Prepend will happen at first
  prepend(data) {
    if (this.FirstNode === null) {
      this.FirstNode = new Node();
      this.FirstNode.data = data;

      this.LastNode = this.FirstNode;
    } else {
      let tempNode = new Node();
      tempNode.data = data;
      tempNode.nextNode = this.FirstNode;
      this.FirstNode = tempNode;
    }
  }

  //insert at particular index
  insert(index, data) {
    if (index === 0) {
      this.prepend(data);
    } else {
      let curNode = this.FirstNode,
        i = 1;
      const tempNewNode = new Node(data);

      while (curNode) {
        if (i === index) {
          break;
        }
        curNode = curNode.nextNode;
        i++;
      }

      //same shallow copy plays an important role here

      if (curNode) {
        tempNewNode.nextNode = curNode.nextNode;
        curNode.nextNode = tempNewNode;
      } else {
        this.append(data);
      }
    }

    return JSON.stringify(this);
  }

  //delete particular node
  delete(index) {
    if (index === 0) {
      this.RemoveAtFirst();
    } else {
      let curNode = this.FirstNode,
        i = 1;
      let tempNode = null;

      while (curNode) {
        if (i === index) {
          break;
        }
        curNode = curNode.nextNode;
        i++;
      }

      if (curNode) {
        tempNode = curNode.nextNode;
        curNode.nextNode = tempNode.nextNode;
      } else {
        this.RemoveAtLast();
      }
    }

    return JSON.stringify(this);
  }

  //find a element
  find() {}

  //copy array to node format
  fromArray(arr) {
    arr.forEach((item) => {
      this.append(item);
    });

    return this;
  }

  //nodes to array
  toArray() {
    let nodes = [];
    let curNode = this.FirstNode;
    while (curNode) {
      nodes.push(curNode);
      curNode = curNode.nextNode;
    }

    return nodes;
  }

  //nodes to string
  toString() {
    return JSON.stringify(this);
  }

  //reverse linkedList
  reverse() {
    let prevNode = this.FirstNode;
    let curNode = this.FirstNode.nextNode;
    let nextNode;
    while (curNode) {
      nextNode = curNode.nextNode;
      curNode.nextNode = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }

    // this.LastNode = this.FirstNode;
    // this.FirstNode=pre
    return prevNode;
  }
}

const tempList = new LinkedList();
// tempList.prepend("1");
// tempList.prepend("2");
// tempList.prepend("3");
// tempList.prepend("4");
// tempList.prepend("5");
// tempList.prepend("6");
// tempList.append("7");
// tempList.append("8");
// tempList.append("9");

console.log(tempList.fromArray(["ads", "afsd", "ase", "qd", "asdasd"]));
console.log(tempList.toString());
