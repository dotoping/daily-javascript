const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const arr = [];
rl.on('line', (l) => {
    var abc = l.split(' ');
    var a = parseInt(abc[0]);
    var b = parseInt(abc[1]);
    var c = parseInt(abc[2]);

    arr.push((a + b) % c);
    arr.push(((a % c) + (b % c)) % c);
    arr.push((a * b) % c);
    arr.push(((a % c) * (b % c)) % c);

    for (var i = 0; i < arr.length; i++) console.log(arr[i]);

    rl.close();
}).on('close', () => {
    process.exit();
});