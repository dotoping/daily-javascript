const diff = (a, b) => makePositive(a - b);
const makePositive = (n) => n > 0 ? n : n * -1;

function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = 0;
    for (var i = 0; i < inputArray.length - 1; i++){
        let elDiff = diff(inputArray[i], inputArray[i + 1]);
        if (maxDiff < elDiff) {
            maxDiff = elDiff;
        }
    }

    return maxDiff;

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));//3