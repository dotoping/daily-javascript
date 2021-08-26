// print out number from 1 to given number

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (n) => {
    var n = parseInt(n);

    for (var i = 1; i <= n; i++) console.log(i);

    rl.close();
}).on('close', () => {
    process.exit();
});