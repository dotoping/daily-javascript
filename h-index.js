function solution(citations) {
    var answer = citations;
    var totalIndex = citations.length;

    answer = answer.sort((a, b) => b - a);

    for (var i = 0; i < totalIndex; i++) {
        var idx = i + 1;
        if (idx === answer[i] || idx > answer[i]) return answer[i];
    }
    console.log(answer)
    return answer;
}

// return 3
solution([3, 0, 6, 1, 5])
// return 4
solution([10, 8, 5, 3, 4])
// return 3
solution([25, 8, 3, 3, 5])