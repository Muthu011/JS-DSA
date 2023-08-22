/*
1. Implement Undo Feature
2. Navigations 
3. Building Compliers (Syntax checking)
4. Calculators (1+2+3*5)


Notes : 
1. LIFO (Last In First Out)
2. Remember it as book shelf or cookies in a jar
3. push(), pop(), peek(),isEmpty() these are important functions 
4. When ever we need to get reverse functionality or reverse data like reverse a string ,
 undo , back functionality we can use stack


Examples: 
Reverse String 
Paranthesis validation

*/

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

class Stacks {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(data) {
    this.linkedList.prepend(data);
  }
  pop() {
    this.linkedList.RemoveAtFirst();
  }
  peek() {
    if (!this.linkedList.FirstNode) {
      return null;
    }

    return this.linkedList.FirstNode.data;
  }
  isEmpty() {
    return !this.linkedList.FirstNode;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.data);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

let stacks = new Stacks();
stacks.push("Muthu");
stacks.push("How");
stacks.push("Are");
// stacks.pop();

console.log(stacks.isEmpty());
console.log(stacks.toArray());
