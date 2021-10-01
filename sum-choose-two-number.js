function solution(numbers) {
    var answer = [];

    var i=0, j=0;

    for (i=0; i < numbers.length - 1; i++){
        while (j<numbers.length -1) {
            answer.push(numbers[i] + numbers[j + 1]);
            j++;
        }
        j = i + 1;
    }
    var arr = [... new Set(answer)].sort((a,b)=>a-b);
    return arr;
}


console.log(solution([2, 1, 3, 4, 1])); // expected [2,3,4,5,6,7]