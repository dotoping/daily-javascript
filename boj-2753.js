// get leap year, if number is leap year return 1, not return 0
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (n) => {
    var year = parseInt(n);
    var result = 0;

    if (year % 400 === 0) {
        result = 1;
    } else {
        if (year % 100 !== 0 && year % 4 === 0) {
            result = 1;
        }
    }

    console.log(result);

    rl.close();
}).on('close', () => {
    process.exit();
});