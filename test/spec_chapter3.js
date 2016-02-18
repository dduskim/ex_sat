'use strict';

var assert = require('assert');
var chapter3 = require('../src/js/chapter3');

describe('Chapter3', function() {
    var names;

    beforeEach(function () {
        names = new chapter3.List();
    });

    afterEach(function () {
        names = null;
    });

    describe('List 재구현', function () {
        it('기본 인터페이스 테스트 1', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara'];
            fixtures.forEach(function (item) {
                names.append(item);
            });
            names.remove('Raymond');
            assert.equal(names.toString().join(','), 'Cynthia,Barbara');
        });
        it('기본 인터페이스 테스트 2', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara', 'Jennifer'];
            fixtures.forEach(function (item) {
                names.append(item);
            });

            assert.equal(names.contains('Raymond'), true);
            names.front();
            assert.equal(names.getElement(), 'Cynthia');
            names.next();
            assert.equal(names.getElement(), 'Raymond');
            names.next();
            names.next();
            names.prev();
            assert.equal(names.getElement(), 'Barbara');
        });
    });

    describe('', function () {
        //
    });
});