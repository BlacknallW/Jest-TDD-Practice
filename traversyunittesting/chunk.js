const chunkArray = (arr, len) => {
	//Init chunked arr
	const chunkArr = [];

	//Loop through arr
	arr.forEach(val => {
		//Get last element
		const last = chunkArr[chunkArr.length - 1];

		//Check if last and if last length is equal to the chunk len
		if (!last || last.length === len) {
			chunkArr.push([val]);
		} else {
			last.push(val);
		}
    });
    
    return chunkArr;
};

module.exports = chunkArray