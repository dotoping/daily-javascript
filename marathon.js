function solution(participant, completion) {

    // 4.
    // var answer = participant.find(
    //     participant => !completion[participant]--,
    //     completion.map(participant => completion[participant] = (completion[participant] | 0) + 1)
    // )
    // return answer;
    // 3.
    participant.sort()
    completion.sort()

    for (const i in completion) {
        if (participant[i] != completion[i])
            return participant[i];
    }

    return participant[participant.length - 1]

    // 2.
    // var answer = "";
    // var completionLength = completion.length;

    // for (var j = 0; j < completionLength; j++) {
    //     participant.splice(participant.indexOf(completion[j]), 1)
    // }

    // 1.
    // var answer = participant.concat(completion).sort();

    // answer = answer.filter(item => !participant.includes(item) || !completion.includes(item));
    // answer = participant[0]
    // return answer;
}

var participantArr = ["mislav", "stanko", "mislav", "ana"];
var completionArr = ["stanko", "ana", "mislav"];

console.log(solution(participantArr, completionArr));
// var solution = (_, $) => _.find(_ => !$[_]--, $.map(_ => $[_] = ($[_] | 0) + 1))