//Search function to check if a book requested is in the library
function binarySearch(arr, target) {
	// console.log(target)
	let startIndex = 0;
	let stopIndex = arr.length - 1;
	while (startIndex <= stopIndex) {
		const middle = startIndex + Math.floor((stopIndex - startIndex) / 2);
		
		//Check if the value of the search area is equal to the target
		if (arr[middle].BookName === target && arr[middle].Quantity > 0) {
			arr[middle].Quantity = arr[middle].Quantity - 1 ;
			return arr[middle];

		}

		//Adjust the search parameters if it is not equal to the target.
		if (arr[middle].BookName < target) {
			startIndex = middle + 1;
		} else {
			stopIndex = middle - 1;
		}
	}
	return 0;
}

module.exports = binarySearch;