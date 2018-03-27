/*
	최대 공약수, 최소 공약수
*/

function gcdlcm(a, b) {
	var answer = [];
	var minNum = Math.min(a, b);
	var maxNum = Math.max(a, b);
	answer[0] = gcd(minNum, maxNum);
	answer[1] = lcm(minNum, maxNum);
	return answer;
}
// 최대공약수
function gcd(minNum, maxNum){
	return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum){
	return minNum * maxNum / gcd(minNum, maxNum);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));