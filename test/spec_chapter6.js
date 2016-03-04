'use strict';

var assert = require('assert');
var chapter6 = require('../src/js/chapter6');

describe('Chapter6', function() {
    var linkedList;

    beforeEach(function () {
        linkedList = new chapter6.LinkedList();
    });

    afterEach(function () {
        linkedList = null;
    });

    describe('LinkedList 재구현', function () {
        it('LinkedList 기본 인터페이스 테스트', function () {
            var cities = new chapter6.LinkedList();
            cities.insert('Conway', 'head');
            cities.insert('Russellville', 'Conway');
            cities.insert('Alma', 'Russellville');
            assert.equal('Conway,Russellville,Alma', cities.getAll().join(','));
            cities.remove('Russellville');
            assert.equal('Conway,Alma', cities.getAll().join(','));
        });
        it('DoubleListedList 기본 인터페이스 테스트', function () {
            var cities = new chapter6.DoubleLinkedList();
            cities.insert('Conway', 'head');
            cities.insert('Russellville', 'Conway');
            cities.insert('Alma', 'Russellville');
            assert.equal('Conway,Russellville,Alma', cities.getAll().join(','));
            cities.remove('Russellville');
            assert.equal('Alma,Conway', cities.getAllReverse().join(','));
        })
    });
});