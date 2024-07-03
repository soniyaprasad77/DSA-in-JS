class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element);
  }
  dequeue() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  empty() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

var q = new Queue();
q.enqueue("Soniya");
q.enqueue("Anirudh");
q.enqueue("Swati");
q.enqueue("Ankit");
q.enqueue("Deepesh");
console.log(q.toString());
console.log(`Dequed element is: ${q.dequeue()}`);
console.log("front of queue: " + q.front());
console.log("back of queue: " + q.back());
