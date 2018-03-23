/*
개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 ***으로 바꿔야 한다.
전화번호를 문자열 str로 입력받는 hideNumbers 함수를 완성해보자.
예를들어 str가 '01033334444'면 '*~4444'를 리턴하고, '027778888'인 경우는 '*~8888'을 리턴하면 된다.
*/

// fn1) 정규표현식
// var hideNumbers = function(str) {
// 	return str.replace(/\d(?=\d{4})/g, '*');
// }
// console.log(hideNumbers('01071011304'));

// fn2)
var hideNumbers = function(str) {
	var result = "*".repeat(str.length - 4) + str.slice(-4);
	return result;
};
console.log(hideNumbers('01071011304'));

/*
stringObj.repeat(count);  // stringObj : 필수 요소. String 객체 / count : 필수 요소. 반환된 문자열에서 원래 문자열을 반복할 횟수

string.split(separator, limit); // 문자열을 분할할 때 사용하는 속성. 기준을 통해서 limit로 최대 분할 개수를 정한다. 값을 정하지 않으면 전체를 다 분할한다.

arr.slice(begin, end);  // begin(시작점 인덱스) / end(), slice는 원본을 대체하지 않는다. 원본 배열에서 요소의 얕은 복사본을 반환한다.

arr.join();
*/

var re = new RegExp("ab+c");
console.log(re);
