var test = require('tape');
var curry = require('./curry');

test('2 params currying', function (t) {
    t.plan(1);
    var addTen = curry(function (a, b) { return a + b; }, 10);
    var result = addTen(5);
    t.equal(result, 15);
});
test('3 params currying, curry each param', function (t) {
    t.plan(1);
    var addTen = curry(function (a, b, c) { return a + b + c; }, 10);
    var addFifteen = addTen(5);
    var result = addFifteen(6);
    t.equal(result, 21);
});

test('3 params currying, curry 2 first', function (t) {
    t.plan(1);
    var addFifteen = curry(function (a, b, c) { return a + b + c; }, 10, 5);
    var result = addFifteen(6);
    t.equal(result, 21);
});

test('3 params currying, curry 2 last', function (t) {
    t.plan(1);
    var addTen = curry(function (a, b, c) { return a + b + c; }, 10);
    var result = addTen(5, 6);
    t.equal(result, 21);
});

test('all params specified in first curry call', function (t) {
    t.plan(1);
    var result = curry(function (a, b, c) { return a + b + c }, 10, 5, 6);
    t.equal(result, 21);
})