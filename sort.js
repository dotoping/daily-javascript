function solution(array, commands) {
    var answer = [];
    var start;
    var end;
    for (var i = 0; i < commands.length; i++) {
        start = commands[i][0] - 1;
        end = commands[i][1];
        var returnValue = commands[i][2] - 1;
        answer.push(array.slice(start, end).sort()[returnValue])
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))