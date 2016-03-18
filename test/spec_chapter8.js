'use strict';

var assert = require('assert');
var chapter8 = require('../src/js/chapter8');

describe('Chapter8', function() {
    var hTable;

    beforeEach(function () {
        hTable = new chapter8.HashTable();
    });

    afterEach(function () {
        hTable = null;
    });

    describe('HashTable 재구현', function () {
        it('HashTable 기본 인터페이스 테스트', function () {
            const fixtures = ['David', 'Jennifer', 'Donnie', 'Raymond',
                'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
            fixtures.forEach((name) => {
                hTable.put(name);
            });
            const result = hTable.showDistro();
            assert.equal(8, result.length);
            //assert.equal('35:Cynthia', result[0]);

            //assert.equal(9, result.length);
            //assert.equal('57:Clayton', result[5]);
        });
    });
});