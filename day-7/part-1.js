function getSumOfShinyGoldBagContainers(input) {	
	class Bag {
		constructor(color, contents) {
			this.color = color;
			this.contents = [...contents];
		}
	}

	return getSumOfContainers(input, 'shiny gold');

	//******************************************

	function getRules(input) {
		return input.split(/\n/);
	};

	function createBagByRule(rule) {
		const [ , color, contentStr] = rule.match(/(.+)\sbags contain\s(.+)/);
		var contentArr = [];
		
		for (let content of contentStr.split(',')) {
			if (content.match(/no other bags./)) continue;
			let [ , num, color] = content.match(/(\d)\s(.+)(?<=)bag/);
			num = Number(num);
			color = color.trim();
			contentArr.push({ num, color });
		}

		return new Bag(color, contentArr);
	}

	function getAllBags(rules) {
		var bags = [];

		for (let rule of rules) {
			bags.push(createBagByRule(rule));
		}

		return bags;
	}

	function findContainers(bags, search, container) {
		for (let bag of bags) {
			for (let content of bag.contents) {
				if (content.color === search) {
					container = container.concat(`${bag.color},`);
					container = findContainers(bags, bag.color, container);
				}
			}
		}

		return container;
	}

	function getSumOfContainers(input, search) {
		var rules = getRules(input);
		var bags = getAllBags(rules);

		var containers = findContainers(bags, search, '').replace(/,$/, '');
		var containersWithoutDuplications = new Set(containers.split(','));

		return containersWithoutDuplications.size;
	}
}

module.exports = getSumOfShinyGoldBagContainers;