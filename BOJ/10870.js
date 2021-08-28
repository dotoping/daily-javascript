//Fibonacci sequence
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var f = parseInt(l);
    var result = 0;

    function fibonacci(n) {
        if (n < 2) return n;
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    for (var j = 1; j <= f; j++) {
        result = fibonacci(j);
    }
    console.log(result);

    rl.close();
}).on('close', () => {
    process.exit();
});