'use strict';

var assert = require('assert');
var chapter5 = require('../src/js/chapter5');

describe('Chapter5', function() {
    var queue,
        priorityQueue;

    beforeEach(function () {
        queue = new chapter5.Queue();
        priorityQueue = new chapter5.PriorityQueue();
    });

    afterEach(function () {
        queue = null;
        priorityQueue = null;
    });

    describe('Queue 재구현', function () {
        it('기본 인터페이스 테스트', function () {
            var fixtures = ['Davit', 'Raymond', 'Bryan'];
            fixtures.forEach(function (item) {
                queue.enqueue(item);
            });
            assert.equal(fixtures.length, queue.length());
            assert.equal('Davit', queue.dequeue());
            queue.enqueue('Tom');
            assert.equal('Tom', queue.back());
            assert.equal('Raymond,Bryan,Tom', queue.toString());
        });
    });

    describe('PriorityQueue 재구현', function () {
        it('기본 인터페이스 테스트', function () {
            function Patient (name, code) {
                this.name = name;
                this.code = code;
            }
            var fixtures = [{
                name: 'Davit',
                code: 5
            }, {
                name: 'Raymond',
                code: 2
            }, {
                name: 'Bryan',
                code: 3
            }];
            fixtures.forEach(function (item) {
                priorityQueue.enqueue(new Patient(item.name, item.code));
            });
            assert.equal(fixtures.length, priorityQueue.length());
            assert.equal('Davit code:5,Raymond code:2,Bryan code:3', priorityQueue.toString());
            assert.equal('Raymond', priorityQueue.dequeue()[0].name);
            priorityQueue.enqueue(new Patient('Tom', 1));
            assert.equal('Tom', priorityQueue.back().name);
            assert.equal('Davit code:5,Bryan code:3,Tom code:1', priorityQueue.toString());
            assert.equal('Tom', priorityQueue.dequeue()[0].name);
            assert.equal('Davit code:5,Bryan code:3', priorityQueue.toString());
        });
    });
});