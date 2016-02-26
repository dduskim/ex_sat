'use strict';

// Queue 클래스 재구현
class Queue {
    constructor() {
        this._init();
    }
    _init() {
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
        return this.dataStore[this.dataStore.length-1];
    }
    toString() {
        return this.dataStore.reduce((result, item) => {
            return result + ',' + item;
        });
    }
    empty() {
        return this.dataStore.length === 0;
    }
    length() {
        return this.dataStore.length;
    }

}

class PriorityQueue extends Queue {
    dequeue() {
        let entry = 0;
        this.dataStore.forEach((item, index) => {
            if (item.code < this.dataStore[entry].code) {
                entry = index;
            }
        });
        return this.dataStore.splice(entry, 1);
    }
    toString() {
        return this.dataStore.map((item) => {
            return item.name + ' code:' + item.code;
        }).join(',');
    }
}

module.exports = {
    Queue,
    PriorityQueue
};