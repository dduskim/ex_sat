'use strict';

// List 클래스 구현
var List = function () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
};
List.prototype = {
    append: function (element) {
        this.dataStore[this.listSize++] = element;
    },
    find: function (element) {
        return this.dataStore.indexOf(element);
    },
    remove: function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    },
    length: function () {
        return this.listSize;
    },
    toString: function () {
        return this.dataStore;
    },
    insert: function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    clear: function () {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    },
    contains: function (element) {
        if (this.dataStore.indexOf(element) > -1) {
            return true;
        }
        return false;
    },
    front: function () {
        this.pos = 0;
    },
    end: function () {
        this.pos = this.listSize-1;
    },
    prev: function () {
        this.pos > 0 && --this.pos;
    },
    next: function () {
        this.pos < this.listSize-1 && ++this.pos;
    },
    currPos: function () {
        return this.pos;
    },
    moveTo: function (position) {
        this.pos = position;
    },
    getElement: function () {
        return this.dataStore[this.pos];
    }
};

// 1. 현재 리스트의 모든 요소보다 클 때만 요소를 삽입하는 함수를 구현하시오.
// 여기서 크다는 의미는 숫자일 때는 크기를 비교하고 텍스트일때는 알파벳순으로 나중을 의미한다.
// 2. 현재 리스트의 모든 요소보다 작을 때만 요소를 삽입하는 함수를 구현하시오.
// 사람의 이름과 성별을 저장하는 Person 클래스를 구현하시오 최소한 10개의 Person 객체를 포함하는 리스트를 만드시오
// 리스트에서 같은 성별을 가진 사람을 모두 출력하는 함수를 구현하시오.
// 4. 비디오 대여 상점 프로그램에서 고객이 대여한 영화를 대여된 영화 리스트로 추가하시오
// 그리고 고객이 영화를 대여할 때마다 대여된 영화 리스트를 출력하시오
// 5. 비디오 대여 상점 프로그램에 반납 함수를 추가하시오
// 고객이 영화를 반납하면 대여된 영화 리스트에서 영화를 삭제한 다음 이용할 수 있는 영화 리스트로 추가하시오.

module.exports = {
    List: List
};