function replaceSearch(arr, target) {
	// console.log(target)
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);
		if (arr[mid].BookName === target) {
			arr[mid].Quantity = arr[mid].Quantity + 0.5;
			return arr[mid];

		}
		if (arr[mid].BookName < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return 0;
}

module.exports = replaceSearch;