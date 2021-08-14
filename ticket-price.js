function solution(price, money, count) {
    var answer = -1;
    var total = 0;
    for (var i = 1; i <= count; i++) {
        total += price * i;
    }

    if (money === total || (money - total) > 0) {
        answer = 0;
    } else if (money - total < 0) {
        answer = total - money;
    }

    console.log(answer)

    return answer;
}


function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

solution(3, 40, 4)
//price = 3
//money = 20
//count = 4
//return = 10