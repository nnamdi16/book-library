const binarySearch = require('./binarySearch');
const replaceSearch = require('./replaceSearch');

describe('Searches for a particular item in an array', () => {
	it('Should return an array of objects that match the search', () => {
		const arr = [{
				BookName: 'Shades of Home',
				Author: 'Bachir Lawal',
				Quantity: 8
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			}
		];
		const target = 'Simple Crazy';
		replaceSearch(arr, target);
		const result = [{
				BookName: 'Shades of Home',
				Author: 'Bachir Lawal',
				Quantity: 8
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 7
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			}
		];
		expect(result).toEqual(arr);
	});
	it('Should return an array of objects that match the search', () => {
		const arr = [{
				BookName: 'Shades of Home',
				Author: 'Bachir Lawal',
				Quantity: 8
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			}
		];
		const target = 'Programming in a Nutshell';
		replaceSearch(arr, target);
		const result = [{
				BookName: 'Shades of Home',
				Author: 'Bachir Lawal',
				Quantity: 8
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			},
			{
				BookName: 'Simple Crazy',
				Author: 'Antolva Cripal',
				Quantity: 6
			}
		];
		expect(arr).toEqual(result);
	});
});


