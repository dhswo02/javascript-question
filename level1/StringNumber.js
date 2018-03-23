/*
strToInt 함수는 String형 str을 매개변수로 받는다.
str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성해보자.
예를들어 str이 “1234”이면 1234를 반환하고, “-1234”이면 -1234를 반환하면 된다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.
*/

var strToInt = function(str) {
	var result = 0;
	result = Number(str);
	return result;
}
console.log(strToInt('1234'));

/*
문자열을 숫자로 바꾸는 방법

1. paresInt()

2. 더하기 곱하기 나누기 등의 연산자를 사용하는 방법
	var num = +"111";

	var num = 1 * "111";

	var num = "111" / 1
*/