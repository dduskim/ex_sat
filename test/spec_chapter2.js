'use strict';

var assert = require('assert');
var chapter2 = require('../src/js/chapter2');

describe('Chapter2', function() {
    var grades, words, weeklyTemps;

    beforeEach(function () {
        grades = new chapter2.Grades();
        words = new chapter2.Words();
        weeklyTemps = new chapter2.WeeklyTemps();
    });

    afterEach(function () {
        grades = null;
        words = null;
        weeklyTemps = null;
    });

    describe('1. Grades', function () {
        it('학생들의 점수를 추가할 수 있고, 평균값을 알 수 있어야 한다.', function () {
            var fixtures = [50, 60, 70, 80];
            fixtures.forEach(function (grade) {
                grades.add(grade);
            });
            assert.equal(fixtures.length, grades._grades.length);
            assert.equal(65, grades.average());
        });
    });

    describe('2. Words', function () {
        it('단어를 추가할 수 있고, 추가한 순서대로, 그리고 추가한 역순으로 출력할 수 있어야 한다.', function () {
            var fixtures = ['a', 'b', 'c'];
            fixtures.forEach(function (word) {
                words.add(word);
            });
            assert.equal(fixtures.length, words._words.length);
            assert.equal('abc', words.print());
            assert.equal('cba', words.printRight());
        });
    });

    describe('3. WeeklyTemps', function () {
        var fixtures = [
            [50, 60, 70],       // 1주
            [40, 50, 60],       // 2주
            [30, 40, 50],       // 3주
            [55, 65, 55, 65]    // 4주
        ],
        addMockData = function (weeklyTemps) {
            fixtures.forEach(function (weekArr, index) {
                weekArr.forEach(function (temp) {
                    weeklyTemps.add(index + 1, temp);
                });
            });
        };

        it('주를 지정해서 온도를 추가할 수 있어야 한다.', function () {
            addMockData(weeklyTemps);

            assert.equal(fixtures.length, weeklyTemps._dataStore.length);
            fixtures.forEach(function (weekArr, index) {
                assert.equal(weekArr.length, weeklyTemps._dataStore[index].length);
            });
        });
        it ('월간 평균을 구할 수 있어야 한다.', function () {
            addMockData(weeklyTemps);

            assert.equal(53, weeklyTemps.average());
        });
        it ('지정한 주의 평균을 구할 수 있어야 한다.', function () {
            addMockData(weeklyTemps);

            assert.equal(60, weeklyTemps.averageWeek(1));
            assert.equal(50, weeklyTemps.averageWeek(2));
            assert.equal(40, weeklyTemps.averageWeek(3));
            assert.equal(60, weeklyTemps.averageWeek(4));
        });
        it ('모든 주의 평균을 구할 수 있어야 한다.', function () {
            addMockData(weeklyTemps);

            var avgs = weeklyTemps.averageWeekAll();
            assert.equal(fixtures.length, avgs.length);
            assert.equal(60, avgs[0]);
            assert.equal(50, avgs[1]);
            assert.equal(40, avgs[2]);
            assert.equal(60, avgs[3]);
        });
    });
});