function solution(array, commands) {
    var answer = [];
    var start;
    var end;
    for (var i = 0; i < commands.length; i++) {
        start = commands[i][0] - 1;
        end = commands[i][1];
        var returnValue = commands[i][2] - 1;
        var temp = array.slice(start, end).sort((a, b) => a - b);
        answer.push(temp[returnValue])
    }
    return answer;
}

// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a, b) => a - b)

//         return newArray[position - 1]
//     })
// }

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))