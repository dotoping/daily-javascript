function solution(scores) {
    var answer = '';

    var totalStudents = scores.length;

    for (var i = 0; i < totalStudents; i++) {
        //0번째 학생은 0번째 점수가 본인이 준 점수
        //0번째 점수와 나머지 학생이 준 점수들을 비교
        //가장 크거나 가장 작으면 제외,
        //가장 작은 점수지만, 같은 다른 점수가 존재하면 점수 유지
        //자신의 점수, 다른 사람들의 점수

        for (var j = 0; j < scores[i].length; j++) {
            var myScores = scores[i][j];
            console.log(myScores)
        }
    }


    return answer;
}


solution([[50, 90], [50, 87]])