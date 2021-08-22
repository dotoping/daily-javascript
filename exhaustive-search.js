function solution(answers) {
    var answer = [];

    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var oneScore = answers.filter((a, i) => a === one[i % one.length]).length;
    var twoScore = answers.filter((a, i) => a === two[i % two.length]).length;
    var threeScore = answers.filter((a, i) => a === three[i % three.length]).length;


    var max = Math.max(oneScore, twoScore, threeScore);

    if (oneScore === max) { answer.push(1) };
    if (twoScore === max) { answer.push(2) };
    if (threeScore === max) { answer.push(3) };

    return answer;
}

// function solution(answers) {
//     var answer = [];

//     const one = [1, 2, 3, 4, 5];
//     const two = [2, 1, 2, 3, 2, 4, 2, 5];
//     const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     let score = [0, 0, 0]

//     for (let i = 0; i < answers.length; i++) {
//         score[0] += (one[i % 5] === answers[i]) ? 1 : 0
//         score[1] += (two[i % 8] === answers[i]) ? 1 : 0
//         score[2] += (three[i % 10] === answers[i]) ? 1 : 0
//     }

//     let maxv = 0;

//     score.forEach((v, i) => {
//         if (v === Math.max(...score)) {
//             answer.push(i + 1)
//         }
//         maxv += v
//     })
//     // console.log(Math.max(...score))

//     if (maxv === 0) {
//         return [];
//     }


//     // console.log(answer)
//     return answer;
// }

console.log(solution([1, 2, 3, 4, 5]));