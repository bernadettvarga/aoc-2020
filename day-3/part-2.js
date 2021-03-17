function multiplyTrees(data) {
	var treeMap = data
		.split('\n')
		.map((line) => line.split(''));
		
	var slopes = [
		{
			x: 1,
			y: 1
		},{
			x: 3,
			y: 1
		},{
			x: 5,
			y: 1
		},{
			x: 7,
			y: 1
		},{
			x: 1,
			y: 2
		}
	];

	var treePerSlope = slopes.map((slope) => countTrees(slope.x, slope.y));

	return treePerSlope.reduce(multiply);
	
	//*************************************************************

	function countTrees(x, y) {
		var treeCounter = 0;
		var xPos = 0;

		for (let i = y; i < treeMap.length; i += y) {
			const line = treeMap[i];

			xPos = (line.length + xPos + x) % line.length;

			if (line[xPos] === '#') {
				treeCounter++;
			}
		}

		return treeCounter;
	}

	function multiply(acc, curr) {
		return acc * curr;
	}
}

module.exports = multiplyTrees;