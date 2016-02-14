'use strict';

// 1. 객체에 학생들의 점수 집합을 저장하는 grades 객체를 만드시오.
// 점수를 추가하는 함수, 학생의 평균 점수를 출력하는 기능을 객체에 추가하시오.
var Grades = function () {
    this._grades = [];
};
Grades.prototype = {
    add: function (grade) {
        this._grades.push(grade);
    },
    average: function () {
        var sum = this._grades.reduce(function (sum, grade) {
            return sum + grade;
        });
        return sum / this._grades.length;
    }
};


// 2. 배열의 단어 집합을 저장한 다음 배열의 내용을 정방향 또는 역방향으로 출력하는 기능을 구현하시오.
var Words = function () {
    this._words = [];
};
Words.prototype = {
    add: function (word) {
        this._words.push(word);
    },
    print: function () {
        return this._words.join('');
    },
    printRight: function () {
        return this._words.reduceRight(function (result, word) {
            return result + word;
        });
    }
};


// 3. 이차원 배열을 이용해 월간 온도 자료를 저장하도록 weeklyTemps 객체를 고치시오.
// 월간 평균, 지정한 주의 평균, 모든 주의 평균을 출력하는 함수를 만드시오.
var WeeklyTemps = function () {
    this._dataStore = [];
};
WeeklyTemps.prototype = {
    add: function (weekNum, temp) {
        var index = weekNum - 1;
        if (index < 0) {
            throw new Error('shit!');
        }
        if (!this._dataStore[index]) {
            this._dataStore[index] = [];
        }
        this._dataStore[index].push(temp);
    },
    average: function () {
        var monthlyLen = 0;
        var monthlySum = 0;
        this._dataStore.forEach(function (weekArr) {
            monthlyLen = monthlyLen + weekArr.length;
            monthlySum = monthlySum + weekArr.reduce(function (weeklySum, temp) {
                return weeklySum + temp;
            });
        });
        return Math.round(monthlySum / monthlyLen);
    },
    averageWeek: function (weekNum) {
        var index = weekNum - 1;
        if (index < 0 || !this._dataStore[index]) {
            throw new Error('shit!');
        }
        var sum = this._dataStore[index].reduce(function (sum, temp) {
            return sum + temp;
        });
        return sum / this._dataStore[index].length;
    },
    averageWeekAll: function () {
        var self = this;
        return this._dataStore.map(function (weekArr, index) {
            return self.averageWeek(index + 1);
        });
    }
};

module.exports = {
    Grades: Grades,
    Words: Words,
    WeeklyTemps: WeeklyTemps
};