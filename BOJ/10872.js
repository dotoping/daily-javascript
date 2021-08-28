// N! N(0<=N<=12)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var n = parseInt(l);
    // var sum = 1;
    // for (var i = 1; i <= n; i++) {
    //     sum *= i;
    // }

    function factorial(n) {
        if (n === 0) return 1;
        console.log(`n: ${n}`)
        return n * factorial(n - 1);
    }

    console.log(factorial(n));


    rl.close();
}).on('close', () => {
    process.exit();
});