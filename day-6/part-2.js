function getSumOfCommonYesByGroup(input) {
	var groups = getGroups(input);
	var sum = 0;

	for (let group of groups) {
		if (group.length === 1) {
			sum += group[0].length;
			continue;
		}
		
		let reference = [...group[0]];

		for (let char of reference) {
			let commonChar = true;

			for (let line = 1; line < group.length; line++) {
				if (!group[line].includes(char)) {
					commonChar = false;
					break;
				};
			}

			if (commonChar) {
				sum += 1;
			}
		}
	}

	return sum;

	//********************************************

	function getGroups(input) {
		return input.split(/\n\n/)
					.map((el) => el.split(/\n/));
	}
}

module.exports = getSumOfCommonYesByGroup;