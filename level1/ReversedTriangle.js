/*
printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받는다.
다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printReversedTriangle 메소드를 완성해보자.
*/

// fn1)
// function printReversedTriangle(num) {
// 	var result = '';
// 	for (var height = num - 1; height >= 0; height--) {
// 		for (var star = 0; star <= height; star++) {
// 			result += '*';
// 		}
// 		result += '\n';
// 	}
// 	return result;
// }
// console.log("결과 : " + "\n" + printReversedTriangle(10));

// fn2)
var printReversedTriangle = function(num) {
	var result = '';
	while(num > 0) {
		result += Array(num + 1).join('*') + '\n';
		num--
	}
	return result;
};

console.log("결과 : " + "\n" + printReversedTriangle(10));