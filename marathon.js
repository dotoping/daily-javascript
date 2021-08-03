function solution(participant, completion) {
    var answer = "";
    var completionLength = completion.length;

    for (var j = 0; j < completionLength; j++) {
        participant.splice(participant.indexOf(completion[j]), 1)
    }

    // var answer = participant.concat(completion).sort();

    // answer = answer.filter(item => !participant.includes(item) || !completion.includes(item));
    answer = participant[0]

    return answer;
}

var participantArr = ["mislav", "stanko", "mislav", "ana"];
var completionArr = ["stanko", "ana", "mislav"];

console.log(solution(participantArr, completionArr));