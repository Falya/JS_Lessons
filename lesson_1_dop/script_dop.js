	let num = 33721;
	let arr = num.toString().split("");
	let comp = 1;

	for (let i = 0; i < arr.length; i++) {
		comp = comp * arr[i];
	}
	
	console.log(comp);
	alert( Math.pow(comp, 3).toString().substring(0, 2) );