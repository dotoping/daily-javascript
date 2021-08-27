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
    const n = input[0];
    const numbers = input[1].split(' ');
    const maxSubject = Math.max(...numbers)

    const result = numbers.reduce((pre, curr) => {
        console.log(`pre:${pre}, curr:${curr}`)
        pre += (parseInt(curr) / maxSubject * 100);

        return pre;
    }, 0);
    console.log((result / n).toFixed(6));

    process.exit();
});