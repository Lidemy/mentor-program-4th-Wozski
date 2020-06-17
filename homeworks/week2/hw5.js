function join(arr, concatStr) {
	var result = [];
	for ( var i = 0 ; i < arr.length; i++){
		if (i == arr.length -1 && arr.length !== 1 ) {
			result += arr[i];
		} else {
			result += arr[i] + concatStr
		}
	}
	return result
  
};

function repeat(str, times) {
	var result = []
	var Numbers = Number(times)
	for( var i = 0 ; i < Numbers ; i ++){
		result += str
	}
	return result
  
}



console.log(join(['a'], '!'));
console.log(repeat('a', 5));
