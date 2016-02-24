'use strict';

var assert = require('assert');
var chapter4 = require('../src/js/chapter4');

describe('Chapter4', function() {
    var stack;

    beforeEach(function () {
        stack = new chapter4.Stack();
    });

    afterEach(function () {
        stack = null;
    });

    describe('Stack 재구현', function () {
        it('기본 인터페이스 테스트', function () {
            var fixtures = ['Davit', 'Raymond', 'Bryan'];
            fixtures.forEach(function (item) {
                stack.push(item);
            });
            assert.equal(fixtures.length, stack.length());
            assert.equal('Bryan', stack.peek());
            stack.push('Tom');
            assert.equal('Tom', stack.peek());
            stack.pop();
            stack.pop();
            assert.equal('Raymond', stack.peek());
        });
    });

    describe('연습문제', function () {
        xit('1. 괄호 위치 반환 함수 구현', function () {

        });
        it('2. 후위 연산 평가자 구현', function () {
            const calculator = new chapter4.PostfixCalculator();
            assert.equal(-5, calculator.run('1 3 2 * -'));
        });
        xit('3. 페즈 디스펜서에서 노란색 사탕만 제거하는 프로그램 구현', function () {

        });
    });
});