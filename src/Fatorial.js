var fatorial = function(n) {
	if(n < 2) {
		return 1;
	}
	return n * fatorial(n-1);
};
var result = fatorial(10);
console.log(result);