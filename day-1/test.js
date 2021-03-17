const part1 = require('./part-1.js');
const part2 = require('./part-2.js');

const input = `1721
979
366
299
675
1456`;

test('find two entries that sum to 2020 and multiplying them equals to 514579', () => {
  expect(part1(input)).toBe(514579);
});

test('find three entries that sum to 2020 and multiplying them equals to 241861950', () => {
  expect(part2(input)).toBe(241861950);
});