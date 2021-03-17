function findSeatID(boardingPassList) {

	return findHighestSeatId(getAllSeatIds(boardingPassList));

	//********************************************************

	function generate(type) {
		var num = 0;
		var arr = [];

		if (type === 'rows') {
			num = 127;
		} else if (type === 'columns') {
			num = 8;
		}

		for (let i = 0; i < num + 1; i++) {
			arr.push(i);
		}

		return arr;
	}

	function get(arr, input) {
		var clone = [...arr];

		for (let pos of input) {
			const end = clone.length;
			const half = end / 2;
			if (pos === 'F' || pos === 'L') {
				clone.splice(half, end - 1);
			} else if (pos === 'B' || pos === 'R') {
				clone.splice(0, half);
			}
		}

		let [ res ] = clone;
		return res;
	}

	function getSeatId(boardingPass) {
		var rows = generate('rows');
		var rowInput = [...boardingPass.slice(0, 7)];

		var columns = generate('columns');
		var columnInput = [...boardingPass.slice(7, 10)];

		const row = get(rows, rowInput);
		const column = get(columns, columnInput);
		const seatId = row * 8 + column;

		return seatId;
	}

	function getAllSeatIds(boardingPassList) {
		var boardingPassArr = boardingPassList.split(/\n/);
		var seatIds = [];

		for (let boardingPass of boardingPassArr) {
			seatIds.push(getSeatId(boardingPass));
		}

		return seatIds;
	}

	function findHighestSeatId(seatIds) {
		return seatIds.reduce((acc, curr) => Math.max(curr, acc));
	}
}

module.exports = findSeatID;