function isPrime(num) {
    for (var i = 2; i * i <= num; i++) {
        console.log(`i:${i}`);
        if (num % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(80));
console.log(isPrime(17));