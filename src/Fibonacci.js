// function Fibo(n){
// 	if (n == 1)
// 		return 1;
// 	else if (n == 2)
// 		return 2;
// 	else
// 		return Fibo(n - 1) + Fibo(n - 2);
// }
//
// i = 1;
// sum = 0;
// while(true) {
// 	num = Fibo(i);
// 	if (num >= 4000000) {
// 		break;
// 	}
//
// 	if (num % 2 == 0) {
// 		sum += num;
// 	}
// 	i++;
// }
// console.log(sum)

var sum = 0;
var prev = 1;
var now = 1;
while(now < 4000001) {
	if (now%2 === 0) {
		sum += now;
	}
	var temp = Number(now);
	now = prev + now;
	prev = temp;
}
console.log(sum);