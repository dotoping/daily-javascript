function solution(numbers) {
    var answer = -1;
    var nFactor = 9 * (9 + 1) / 2;
    answer = numbers.reduce((pre, curr) => {
        pre += curr;
        return pre;
    })
    return nFactor - answer;
}


console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //  expected 5+9 = 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6