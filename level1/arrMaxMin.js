var array = [1, 10, 5, 11, 2];
var result = 0;

var maxFn = function(arr) {
	for (var i = 0; i < arr.length-1; i++) {
	}
};

var minFn = function(arr) {
	for (var i = 0; i < arr.length; i++) {
	}
};

//최대값
var max = array.reduce( function (previous, current) {
	return previous > current ? previous:current;
});

//최소값
var min = array.reduce( function (previous, current) {
	return previous > current ? current:previous;
});

// console.log(max);
// console.log(min);

maxFn(array);
console.log(result);