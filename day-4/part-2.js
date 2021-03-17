function countValidPassports(data) {
	var passports = data.split(/\n\n/);
	var validPassports = 0;

	var validator = {
		'byr': /^(19[2-9][0-9]|200[0-2])$/,
		'iyr': /^20(1[0-9]|20)$/,
		'eyr': /^20(2[0-9]|30)$/,
		'hgt': /^(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)$/,
		'hcl': /^#[0-9a-f]{6}$/,
		'ecl': /^(amb|blu|brn|gry|grn|hzl|oth)$/,
		'pid': /^\d{9}$/
	};

	for (let el of passports) {
		const passport = createPassportObject(el);
		if (isValidPassport(passport, validator)) validPassports++;
	}

	return validPassports;

	//****************************************************************

	function createPassportObject(passportArr) {
		var object = {};

		var fields = passportArr.split(/\s/).map((field) => {
			let tmp = field.split(':');
			object[tmp[0]] = tmp[1];
		});

		return object;
	}

	function isValidPassport(passport, validator) {
		var valid = true;

		for (let prop in validator) {
			const regex = validator[prop];
			const value = passport[prop];
			
			if (value === undefined || !regex.test(value)) {
				valid = false;
				break;
			}
		}

		return valid;	
	}
}

module.exports = countValidPassports;