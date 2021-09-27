/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 */

function solution(a, b) {
    var answer = 1234567890;
    var sum = 0

    const sumFucnion = (a, b) => a + b;

    a.forEach((v, i) => sum = sumFucnion(sum, v * b[i]))

    return sum;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // expected 3