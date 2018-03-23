/*
	1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
*/

var result = 0;
for(var i = 1; i < 1000; i++) {
	if(i%3 === 0 || i%5 === 0) {
		result += i;
	}
}
console.log(result);