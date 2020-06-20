function printStars(n) {
	let result = [];
	for (let i= 1; i <= n ; i++){
		if (i === n){
			result += '*';
		} else {
			result += '*' + '\n'
		};
	};
		console.log(result);
	}

printStars(5);
