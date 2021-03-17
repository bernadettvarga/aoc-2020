function execute(input) {
	var instructions = getInstructions(input);
	var acc = 0;

	for (let i = 0; i < instructions.length; i++) {
		if (instructions[i].executed) break;
		instructions[i].executed = true;

		switch (instructions[i].cmd) {
			case 'nop': break;
			case 'jmp':
				let jmp = instructions[i].num - 1;
				i += jmp;
				break;
			case 'acc':
				acc += instructions[i].num;
				break;
			default: break;
		}
	}

	return acc;

	//*********************************************

	function getInstructions(input) {
		return input.split(/\n/).map((line) => {
			var match = line.match(/(?<instruction>.+)\s(?<num>.+)/);
			return {
				'cmd': match.groups.instruction.trim(),
				'num': Number(match.groups.num),
				'executed': false
			}
		});
	}
}

module.exports = execute;