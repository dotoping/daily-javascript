process.stdin.setEncoding('utf8');
let a, b = 0;

process.stdin.on('readable', () => {
    a = process.stdin.read();
    b = process.stdin.read();

    a !== null || a > 0 ? a : 0;
    b !== null || b < 10 ? b : 0;

    console.log(a, b);
    process.exit();
})