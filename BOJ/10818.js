var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {
    input.push(n);
    if (input.length == 2) rl.close();
});
rl.on('close', () => {
    const numbers = input[1].split(' ');
    const result = [];
    result.push(Math.min(...numbers))
    result.push(Math.max(...numbers))
    console.log(result[0], result[1])
    process.exit();
});