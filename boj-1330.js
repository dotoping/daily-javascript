const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var ab = l.split(' ');
    var a = parseInt(ab[0]);
    var b = parseInt(ab[1]);

    if (a < b) console.log("<")
    else if (a > b) console.log(">")
    else console.log("==");

    rl.close();
}).on('close', () => {
    process.exit();
});