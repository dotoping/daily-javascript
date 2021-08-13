// function solution(numbers) {
//     var answer = '';
//     var regex = /[^0-9]/g
//     var array1 = [6, 10, 2];
//     var array2 = [];
//     for (var i = 0; i < array1.length; i++) {
//         array2.push(array1[i])
//     }
//     console.log(array1.sort((a, b) => b - a))
//     // var temp = array1.join()
//     // console.log('temp: ' + temp[0])
//     // var arr = [];
//     // for (var i = 0; i < array1.length; i++) {
//     //     arr.push(array1.sort((a,b)=>b-a))
//     // }
//     // console.log("arr map: " + arr)

//     // console.log(temp.sort((a, b) => b - a).join().replace(regex, ""))
//     return answer;
// }

// function solution(numbers) {

//     if (numbers.length === 0) {
//         return 0;
//     }

//     var answer = numbers;
//     answer = answer.sort((a, b) => '' + a + b > '' + b + a ? -1 : 1);
//     const reducer = answer.reduce((pre, cur) => pre + cur);

//     if (reducer === 0) return '0';
//     answer = answer.join('');
//     return answer.toString();

// }

function solution(numbers) {
    var answer = numbers.map(v => v + '')
        .sort((a, b) => (b + a) * 1 - (a + b) * 1)
        .join('');

    return answer[0] === '0' ? '0' : answer;
}

solution([6, 10, 2])
solution([0, 0, 0, 0, 0])