'use strict';

// Dictionary 클래스 재구현
class Dictionary {
    constructor() {
        this.datastore = [];
    }

    add(key, value) {
        this.datastore[key] = value;
    }

    find(key) {
        return this.datastore[key];
    }

    remove(key) {
        delete this.datastore[key];
    }

    showAll() {
        const result = [];
        Object.keys(this.datastore).sort().forEach((key) => {
            result.push(key + ' -> ' + this.datastore[key]);
        });
        return result;
    }

    count() {
        // Object.keys 로 감싼 후에는 length 사용해도 상관없음
        return Object.keys(this.datastore).length;
    }

    clear() {
        Object.keys(this.datastore).forEach((key) => {
            delete this.datastore[key];
        });
    }
}

module.exports = {
    Dictionary
};