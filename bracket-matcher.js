function BracketMatcher(str) {

    var arr = str.split('')
    var findBracket = 1;
    arr.forEach(element => {

        if (element == '(') {
            findBracket += 1
        }
        if (element == ')') {
            findBracket -= 1
        }

    });
    return findBracket
}

// keep this function call here
let datas = ["(bracket)(matcher)(not)(pass))", "((this)(is)(passed))"]

datas.forEach(data => {
    console.log(
        `${data}: ${BracketMatcher(data) === 1
            ? 'passed'
            : 'failed'}`
    )
})