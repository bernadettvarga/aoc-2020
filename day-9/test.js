const part1 = require('./part-1.js');

const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

test('find invalid number in a 5 length preamble and return 127', () => {
	expect(part1(input, 5)).toBe(127);
})