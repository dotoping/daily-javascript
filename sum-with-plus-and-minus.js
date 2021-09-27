/**
 *
 * @param {number[]} absolutes
 * @param {boolean[]} signs
 */

function solution(absolutes, signs) {
    var answer = 123456789;

    const sum = absolutes
        .map((num, index) => !signs[index] ? num * -1 : num)
        .reduce((pre, curr) => pre + curr, 0);
    return sum;

    //return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // expected 9