function getSumOfYesByGroup(input) {
	var groups = getGroups(input);
	var sum = 0;

	for (let group of groups) {
		sum += removeDuplicates(group).size;
	}

	return sum;

	//**************************************

	function getGroups(input) {
		return input.split(/\n\n/)
					.map((el) => el.replace(/\n/g, ''));
	};

	function removeDuplicates(group) {
		return new Set([...group]);
	}
}

module.exports = getSumOfYesByGroup;