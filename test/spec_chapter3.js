'use strict';

var assert = require('assert');
var chapter3 = require('../src/js/chapter3');

describe('Chapter3', function() {
    var list;

    beforeEach(function () {
        list = new chapter3.List();
    });

    afterEach(function () {
        list = null;
    });

    describe('List 재구현', function () {
        it('기본 인터페이스 테스트 1', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara'];
            fixtures.forEach(function (item) {
                list.append(item);
            });
            list.remove('Raymond');
            assert.equal(list.toString().join(','), 'Cynthia,Barbara');
        });
        it('기본 인터페이스 테스트 2', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara', 'Jennifer'];
            fixtures.forEach(function (item) {
                list.append(item);
            });

            assert.equal(list.contains('Raymond'), true);
            list.front();
            assert.equal(list.getElement(), 'Cynthia');
            list.next();
            assert.equal(list.getElement(), 'Raymond');
            list.next();
            list.next();
            list.prev();
            assert.equal(list.getElement(), 'Barbara');
        });
    });

    describe('1. appendOnlyGreaterThan 메서드 추가', function () {
        it('새 숫자 요소가 모든 숫자 요소보다 클때만 삽입해야한다.', function () {
            var fixtures = [3, 6, 7];
            fixtures.forEach(function (item) {
                list.append(item);
            });
            list.appendOnlyGreaterThan(4);
            assert.equal(list.length(), 3);
            list.appendOnlyGreaterThan(9);
            assert.equal(list.length(), 4);
        });
        it('새 알파벳 요소가 모든 알파벳 요소보다 후순위 인 경우에만 삽입해야한다.', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara'];
            fixtures.forEach(function (item) {
                list.append(item);
            });
            list.appendOnlyGreaterThan('Albin');
            assert.equal(list.length(), 3);
            list.appendOnlyGreaterThan('Young');
            assert.equal(list.length(), 4);
        });
    });

    describe('2. appendOnlyLessThan 메서드 추가', function () {
        it('새 숫자 요소가 모든 숫자 요소보다 작을때만 삽입해야한다.', function () {
            var fixtures = [3, 6, 7];
            fixtures.forEach(function (item) {
                list.append(item);
            });
            list.appendOnlyLessThan(4);
            assert.equal(list.length(), 3);
            list.appendOnlyLessThan(1);
            assert.equal(list.length(), 4);
        });
        it('새 알파벳 요소가 모든 알파벳 요소보다 이전 알파벳 인 경우에만 삽입해야한다.', function () {
            var fixtures = ['Cynthia', 'Raymond', 'Barbara'];
            fixtures.forEach(function (item) {
                list.append(item);
            });
            list.appendOnlyLessThan('Young');
            assert.equal(list.length(), 3);
            list.appendOnlyLessThan('Albin');
            assert.equal(list.length(), 4);
        });
    });

    describe('3. getSameGenderList 메서드 구현', function () {
        it('같은 성별을 가진 사람들을 모두 출력하는 함수를 구현해야한다.', function () {
            var Person = function (name, gender) {
                this.name = name;
                this.gender = gender;
            };
            var persons = [
                { name: 'a', gender: 'm' },
                { name: 'b', gender: 'f' },
                { name: 'c', gender: 'm' },
                { name: 'd', gender: 'f' },
                { name: 'e', gender: 'm' },
                { name: 'f', gender: 'f' },
                { name: 'g', gender: 'm' },
                { name: 'h', gender: 'f' },
                { name: 'i', gender: 'm' },
                { name: 'j', gender: 'f' }
            ];
            persons.forEach(function (item) {
                list.append(new Person(item.name, item.gender));
            });

            var getSameGenderList = function (list, gender) {
                var result = [];
                for (list.front(); list.currPos() < list.length(); list.next()) {
                    if (list.getElement().gender === gender) {
                        result.push(list.getElement().name);
                    }
                }
                return result;
            };
            assert.equal(getSameGenderList(list, 'm').join(','), 'a,c,e,g,i');
            assert.equal(getSameGenderList(list, 'f').join(','), 'b,d,f,h,j');
        });
    });

    describe('4, 5 예제 풀이', function () {
        it('비디오 상점 에서 대여시 대여된 영화 리스트를 출력하고 반납이 가능해야 한다.', function () {
            var movieList = new chapter3.List();
            var customerList = new chapter3.List();
            var checkoutMovieList = new chapter3.List();

            var Customer = function (name, movie) {
                this.name = name;
                this.movie = movie;
            };
            var movies = [
                'The Shawshank Redemption',
                'The Godfather',
                'The Godfather: Part 2',
                'Pulp Fiction',
                'The Good, the Bad and the Ugly',
                '12 Angry Men',
                'Schindlers List',
                'The Dark Knight',
                'The Lord of the Rings',
                'Fight Club'
            ];
            movies.forEach(function (item) {
                movieList.append(item);
            });

            function displayList(list) {
                var result = [];
                for (list.front(); list.currPos() < list.length(); list.next()) {
                    if (list.getElement() instanceof Customer) {
                        result.push(list.getElement()['name'] + ':' + list.getElement()['movie']);
                    } else {
                        result.push(list.getElement());
                    }
                }
                return result;
            }

            function checkout(name, movie, movieList, customerList, checkoutMovieList) {
                if (movieList.contains(movie)) {
                    var c = new Customer(name, movie);
                    customerList.append(c);
                    movieList.remove(movie);
                    checkoutMovieList.append(movie);
                } else {
                    console.log(movie + ' is not available.');
                }
            }

            function returnVideo(name, movie, movieList, customerList, checkoutMovieList) {
                var c = new Customer(name, movie);
                customerList.remove(c);
                checkoutMovieList.remove(movie);
                movieList.append(movie);
            }

            checkout('dewey', 'The Godfather', movieList, customerList, checkoutMovieList);
            assert.equal(movieList.length(), 9);
            assert.equal(checkoutMovieList.length(), 1);
            assert.equal(checkoutMovieList.find('The Godfather'), 0);

            console.log(displayList(movieList));
            console.log(displayList(checkoutMovieList));

            returnVideo('dewey', 'The Godfather', movieList, customerList, checkoutMovieList);
            assert.equal(movieList.length(), 10);
            assert.equal(checkoutMovieList.length(), 0);
            assert.equal(movieList.find('The Godfather'), 9);

            console.log(displayList(movieList));
            console.log(displayList(checkoutMovieList));
        });
    });
});