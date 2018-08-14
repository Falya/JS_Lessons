function getFriendlyNumbers(start, end) {

	if (start > end || !isInt(start) || !isInt(end) || end < 0 || start < 0) {
		return false;
	} else {
		let arr =[];
		let arrF = [];

		for (let n = start; n <= end; n++) {
			let i = n;
			let count = 0;

			while (i > 1 ) {

				if (n%i == 0) {
					count = count + (n / i);
					arr[n-1] = [count];
				}

				i--;
			}
		}

		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if (arr[i] == (j+1) && arr[j] == (i + 1) && (i + 1) != (j+1)) {
						arrF.push(i+1);
				}	
			}
		}

		if (arrF.length > 0) {
			arr = [];

			for (let i = 0; i < arrF.length; i++) {
				arr.push([arrF[i], arrF[i+1]]);
				i++;
			}
		} else {
			arr = [];
		}
	  return arr;
  }
}

function isInt(n) {
   return Number(n) === n && n % 1 === 0;
}

module.exports = {
    firstName: 'Максим',
    secondName: 'Фалей',
    task: getFriendlyNumbers
};