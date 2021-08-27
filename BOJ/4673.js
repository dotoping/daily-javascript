// d(n)...d(d(n))..d(d(d(n))) from 1 to 10000
function d(n) {
    var sum = parseInt(n);

    while (n !== 0) {
        sum = parseInt(sum) + (n % 10);
        n = parseInt(n) / 10;
    }

    return parseInt(sum);
}

var check = new Array(10001);

for (var i = 1; i <= 10000; i++) {
    var number = d(i);
    number = parseInt(number);

    if (number < 10001) {
        check[number] = true;
    }
}

for (var j = 1; j < 10001; j++) {
    if (!check[j]) {
        console.log(j);
    }
}
