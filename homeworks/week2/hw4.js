function printFactor(n) {
	let ans = Number(n);
	let result = [];
	for (let i = 1 ; i <= n; i++) {
		if ( n % i == 0 ) {
			result += i + '\n';
		};
	};
	console.log(result)
}



printFactor(10);
