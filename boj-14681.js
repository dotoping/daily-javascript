// given x,y and get Quadrant
// example,
// (12,5) quadrant 1
// (-12,5) quadrant 2
// (-12,-5) quadrant 3
// (12,-5) quadrant 4

var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (cmd) => {
    input.push(cmd);
    if (input.length == 2) rl.close();
});
rl.on('close', () => {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);

    if (x > 0 && y > 0) console.log('1');
    if (x < 0 && y > 0) console.log('2');
    if (x < 0 && y < 0) console.log('3');
    if (x > 0 && y < 0) console.log('4');

    process.exit();
});
