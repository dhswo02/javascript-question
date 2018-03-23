/*
 숫자형 num을 매개변수로 num이 짝수일 경우 'Even', 홀수일 경우 'Odd'를 반환한다
*/

var evenOdd = function(num) {
	if (num > 0) {
		return (num%2) ? "Odd" : "Even";
	} else {
		return '양의 정수만을 취급한다.'
	}
};

console.log(evenOdd(10));
console.log(evenOdd(11));
console.log(evenOdd(-11));