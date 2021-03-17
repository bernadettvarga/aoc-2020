function countTrees(data) {
	var treeMap = data
		.split('\n')
		.map((line) => line.split(''));

	var move = {
		x: 3,
		y: 1
	};

	var treeCounter = 0;
	var xPos = 0;

	for (let i = move.y; i < treeMap.length; i += move.y) {
		const line = treeMap[i];

		xPos = (line.length + xPos + move.x) % line.length;

		if (line[xPos] === '#') {
			treeCounter++;
		}
	}

	return treeCounter;
}

module.exports = countTrees;