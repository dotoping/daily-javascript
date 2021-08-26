const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var ab = l.split(' ');
    var a = parseInt(ab[0]);
    var b = parseInt(ab[1]);

    arr.push(a + b);
    arr.push(a - b);
    arr.push(a * b);
    arr.push(parseInt(a / b));
    arr.push(a % b);

    for (var i = 0; i < arr.length; i++) console.log(arr[i]);

    rl.close();
}).on('close', () => {
    process.exit();
});