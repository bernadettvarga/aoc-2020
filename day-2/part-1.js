function countValidPasswords(data) {
	var input = data.split('\n');
	var validPasswords = 0;

	for (let el of input) {
		var counter = 0;

		var match = el.match(/(?<min>\d+)-(?<max>\d+)\s(?<char>[a-z]):\s(?<pwd>[a-z]+)/);
		var rules = {
			'min': Number(match.groups.min),
			'max': Number(match.groups.max),
			'char': match.groups.char
		};
		const pwd = match.groups.pwd;

		for (let char of pwd) {
			if (char === rules.char) {
				counter++;
			}
		}

		if (rules.min <= counter && counter <= rules.max) {
			validPasswords++;
		}
	}
	
	return validPasswords;
}

module.exports = countValidPasswords;