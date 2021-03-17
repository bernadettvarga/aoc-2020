function countValidPasswords(data) {
	var input = data.split('\n');
	var validPasswords = 0;

	for (let el of input) {
		var match = el.match(/(?<idx1>\d+)-(?<idx2>\d+)\s(?<char>[a-z]):\s(?<pwd>[a-z]+)/);

		const pwd = match.groups.pwd;
		const char = match.groups.char;
		const idx1 = Number(match.groups.idx1) - 1;
		const idx2 = Number(match.groups.idx2) - 1;

		const x = pwd[idx1];
		const y = pwd[idx2];

		if (x !== y && (x === char || y === char)) {
			validPasswords++;
		}	
	}
	
	return validPasswords;
}

module.exports = countValidPasswords;