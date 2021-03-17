const part1 = require('./part-1.js');

const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

test('get the value of the accumulator and return 5', () => {
	expect(part1(input)).toBe(5);
});