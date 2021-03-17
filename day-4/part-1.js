function countValidPassports(data) {
	var passports = data.split(/\n\n/);
	var requiredFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
	var validPassports = 0;

	for (let el of passports) {
		let passport = createPassportObject(el);
		if (isValidPassport(passport, requiredFields)) validPassports++;
	}

	return validPassports;

	//******************************************************************

	function createPassportObject(passportArr) {
		var object = {};

		var fields = passportArr
			.split(/\s/)
			.map((field) => {
				var tmp = field.split(':');
				object[tmp[0]] = tmp[1];
			});

		return object;
	}

	function isValidPassport(passport, validator) {
		var valid = true;

		for (let i = 0; i < validator.length; i++) {
			if (passport[validator[i]] === undefined) {
				valid = false;
				break;
			};
		}

		return valid;	
	}
}

module.exports = countValidPassports;