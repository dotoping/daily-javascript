// function solution(citations) {
//     var answer = citations;
//     var totalIndex = citations.length;

//     answer = answer.sort((a, b) => b - a);

//     for (var i = 0; i < totalIndex; i++) {

//         var idx = i + 1;
//         console.log(`index: ${idx}, value:${answer[i]}`)

//         if (idx === answer[i]) {
//             console.log(idx)
//             return idx;
//         }
//         if (idx > answer[i]) {
//             console.log(idx - 1)
//             return idx - 1;
//         }

//         if (idx === totalIndex && idx < answer[i]) {
//             console.log(idx)
//             return idx;
//         }
//     }
//     // console.log(answer)
//     // return answer;
// }

function solution(citations) {
    citations = citations.sort(sorting);
    var i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;


    function sorting(a, b) {
        return b - a;
    }
}

// return 3
// solution([3, 0, 6, 1, 5])
// // return 4
// solution([10, 8, 5, 3, 4])
// // return 3
// solution([25, 8, 3, 3, 5])
// solution([1, 3, 5, 7, 9, 11])
// solution([0, 0, 0, 0, 1])
solution([10, 11, 12, 13])