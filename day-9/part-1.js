function findInvalidNumber(data, preamble) {
	var input = data
		.split('\n')
		.map((x) => Number(x));

	for (let i = preamble; i < input.length; i++) {
		const sum = input[i];
		let foundPair = false;

		for (let j = i - preamble; j < i - 1; j++) {
			if (foundPair) break;

			const a = input[j];

			for (let k = j + 1; k < i; k++) {
				const b = input[k];

				if (a + b === sum) {
					foundPair = true;
					break;
				}
			}
		}

		if (!foundPair) return sum;
	}
}

module.exports = findInvalidNumber;