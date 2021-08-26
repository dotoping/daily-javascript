// print out number from 1 to given number

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (n) => {
    var s = '';

    for (var i = 0; i < n; i++) {

        s += '*';
        console.log(s)
    }

    rl.close();
}).on('close', () => {
    process.exit();
});