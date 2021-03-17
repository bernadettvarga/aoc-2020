const part1 = require('./part-1.js');
const part2 = require('./part-2.js');

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

test('count valid passwords against given policy and return 2', () => {
  expect(part1(input)).toBe(2);
});

test('count valid passwords against given policy and return 1', () => {
  expect(part2(input)).toBe(1);
});