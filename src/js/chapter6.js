'use strict';

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// LinkedList 클래스 재구현
class LinkedList {
    constructor() {
        this._init();
    }

    _init() {
        this.head = new Node('head');
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        const newNode = new Node(newElement);
        const current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next === null) && (currNode.next.element !== item)) {
            currNode = currNode.next;
        }
        return currNode
    }

    remove(item) {
        const prevNode = this.findPrevious(item);
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    // method for test
    getAll() {
        let currNode = this.head;
        let result = [];
        while (!(currNode.next === null)) {
            result.push(currNode.next.element);
            currNode = currNode.next;
        }
        return result;
    }
}

class DoubleNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }

}

class DoubleLinkedList extends LinkedList {
    _init() {
        this.head = new DoubleNode('head');
    }

    insert(newElement, item) {
        const newNode = new DoubleNode(newElement);
        const current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    remove(item) {
        const currNode = this.find(item);
        if (!(currNode.next === null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    findLast() {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    dispReverse() {
        let currNode = this.findLast();
        while (!(currNode.previous === null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }

    // method for test
    getAllReverse() {
        let currNode = this.findLast();
        let result = [];
        while (!(currNode.previous === null)) {
            result.push(currNode.element);
            currNode = currNode.previous;
        }
        return result;
    }
}

module.exports = {
    LinkedList,
    DoubleLinkedList
};