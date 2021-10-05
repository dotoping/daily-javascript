/**
 * Description
   두 정수 left와 right가 매개변수로 주어집니다. 
   left부터 right까지의 모든 수들 중에서, 
   약수의 개수가 짝수인 수는 더하고, 
   약수의 개수가 홀수인 수는 뺀 수를 
   return 하도록 solution 함수를 완성해주세요.
 * @param {number} left 
 * @param {number} right 
 */

function solution(left, right) {
    var answer = 0;

    for (left; left <= right; left++) {
        var count = 0;
        for (let i = 1; i <= left; i++) {
            if (left % i === 0) count++;
        }
        answer = count % 2 === 0 ? answer + left : answer - left;
    }
    return answer;
}

//square root 값의 제곱근이 정수면, 개수는 홀수, 정수가 아니면 짝수
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(13, 17)); //expected 13 + 14 + 15 - 16 + 17 = 43 