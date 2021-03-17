const part1 = require('./part-1.js');
const part2 = require('./part-2.js');

const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

test('get sum of yes by group and return 11', () => {
  expect(part1(input)).toBe(11);
});

test('get sum of common yes by group and return 6', () => {
  expect(part2(input)).toBe(6);
});