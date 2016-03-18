'use strict';

var assert = require('assert');
var chapter7 = require('../src/js/chapter7');

describe('Chapter7', function() {
    var pbook;

    beforeEach(function () {
        pbook = new chapter7.Dictionary();
    });

    afterEach(function () {
        pbook = null;
    });

    describe('Dictionary 재구현', function () {
        it('Dictionary 기본 인터페이스 테스트', function () {
            pbook.add('Mike', '123');
            pbook.add('David', '345');
            pbook.add('Cynthia', '456');
            assert.equal('345', pbook.find('David'));
            pbook.remove('David');

            var result = pbook.showAll();
            assert.equal(2, result.length);
            // 정렬된다
            assert.equal('Cynthia -> 456', result[0]);
            assert.equal('Mike -> 123', result[1]);
            assert.equal(2, pbook.count());
            pbook.clear();
            assert.equal(0, pbook.count());
        });
    });
});