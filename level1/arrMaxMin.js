var maxFn = function(arr) {
	var array = arr instanceof Array ? arr : arguments;
	var result = array[0];
	for (var i = 0; i < array.length; i++) {
		if(result < array[i]) {
			result = array[i];
		}
	}
	return result;
};

var minFn = function(arr) {
	var array = arr instanceof Array ? arr : arguments;
	var result = array[0];
	for (var i = 0; i < array.length; i++) {
		if(result > array[i]) {
			result = array[i];
		}
	}
	return result;
};

console.log(maxFn(1,4,6,9,7));
console.log(minFn(1,4,6,9,7));