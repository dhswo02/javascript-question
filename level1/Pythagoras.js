var pythagorean = (function() {
	return function(a,b){
		return Math.sqrt(a*a+b*b);
	};
})();

console.log(pythagorean(4, 3));

var powNumber = (function() {
	return function(a, b, c) {
		return Math.pow(a, c) + Math.pow(b, c);
	}
})();

console.log(powNumber(2, 3, 3));

// Math.sqrt() : 제곱근을 구하는 메소드;
// Math.pow(base, exponent) : base - 여러번 곱할 수 / exponent - 지수;