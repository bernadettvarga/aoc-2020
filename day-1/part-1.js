function multiply(data) {
	var input = data
		.split('\n')
		.map((x) => Number(x));

	for (let i = 0; i < input.length; i++) {
		const a = input[i];

		for (let j = i + 1; j < input.length; j++) {
			const b = input[j];

			if (a + b === 2020) {
				return a * b;
			};
		}
	}
}

module.exports = multiply;