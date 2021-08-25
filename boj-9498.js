const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (num) => {

    num = parseInt(num);
    if (num > 0 && num <= 100) {
        var grade = num >= 90 ? 'A' :
            num >= 80 && num < 90 ? 'B' :
                num >= 70 && num < 80 ? 'C' :
                    num >= 60 && num < 70 ? 'D' : 'F';
    }
    console.log(grade)
    rl.close();
}).on('close', () => {
    process.exit();
});