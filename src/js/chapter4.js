'use strict';

// Stack 클래스 재구현
class Stack {
    constructor() {
        this._init();
    }
    _init() {
        this.dataStore = [];
    }
    push(element) {
        this.dataStore.push(element);
    }
    peek() {
        return this.dataStore[this.dataStore.length-1];
    }
    pop() {
        return this.dataStore.pop();
    }
    clear() {
        this._init();
    }
    length() {
        return this.dataStore.length;
    }
}

class PostfixCalculator {
    constructor() {
        this.stack = new Stack();
    }
    run(postfixNotation) {
        postfixNotation.split(' ').forEach((token) => {
            if (Number.isInteger(Number.parseInt(token))) {
                this.stack.push(token);
            } else {
                const b = this.stack.pop();
                const a = this.stack.pop();
                this.stack.push(eval(a + token + b));
            }
        });
        return this.stack.peek();
    }
}

module.exports = {
    Stack,
    PostfixCalculator
};