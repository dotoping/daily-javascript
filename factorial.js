function FirstFactorial(num) {

    // 1.
    //return (num === 1 ? 1 : num * FirstFactorial(num - 1));

    // 2.
    let factorial = 1
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial

}

// keep this function call here 
const data = 5;
console.log(FirstFactorial(data))