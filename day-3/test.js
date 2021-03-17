const part1 = require('./part-1.js');
const part2 = require('./part-2.js');

const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

test('count all trees you encounter while traversing the map and return 7', () => {
  expect(part1(input)).toBe(7);
});

test('multiply all trees you encounter and return 336', () => {
  expect(part2(input)).toBe(336);
});