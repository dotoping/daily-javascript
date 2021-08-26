const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var n = parseInt(l);
    if (n >= 1 && n <= 9) {
        for (var i = 1; i <= 9; i++) {
            console.log(`${n} * ${i} = ${n * i}`);
        }
    }

    rl.close();
}).on('close', () => {
    process.exit();
});