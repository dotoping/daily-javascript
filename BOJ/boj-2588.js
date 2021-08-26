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
    const a = parseInt(input[0]);
    const b = input[1];
    const c = [];
    const result = [];

    b.split("").reverse().reduce((pre, curr) => {
        pre = curr * a;
        c.push(pre);
        return pre;
    }, a);

    const total = c.reduce((pre, curr, idx) => {
        if (idx === 0) { pre += curr * 1 }
        else if (idx === 1) { pre += curr * 10 }
        else if (idx === 2) { pre += curr * 100 }
        return pre;
    })

    const final = [...c, total];

    final.forEach((v) => {
        console.log(v);
    });

    process.exit();
});