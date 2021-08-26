// sum 1 to given number

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (n) => {
    var n = parseInt(n);
    console.log((n * n + n) / 2);

    rl.close();
}).on('close', () => {
    process.exit();
});