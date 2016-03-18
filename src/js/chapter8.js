'use strict';

// HashTable 클래스 재구현
class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        const pos = this.simpleHash(data);
        //const pos = this.betterHash(data);
        this.table[pos] = data;
    }

    simpleHash(data) {
        let total = 0;
        for (let i=0; i < data.length; ++i) {
            total = total + data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    betterHash(data) {
        const H = 37;
        let total = 0;
        for (let i=0; i < data.length; ++i) {
            total = total + (H * total + data.charCodeAt(i));
        }
        total = total % this.table.length;

        if (total < 0) {
            total = total + this.table.length -1;
        }

        return parseInt(total);
    }

    showDistro() {
        let result = [];
        for (let i=0; i < this.table.length; ++i) {
            if (typeof this.table[i] !== 'undefined') {
                result.push(i + ':' + this.table[i]);
            }
        }
        return result;
    }

    buildChains() {
        for (let i=0; i<this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }

}

module.exports = {
    HashTable
};