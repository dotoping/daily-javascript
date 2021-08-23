// get arithmetic progression
// given start number, common different number

function getAP(start, differ, where) {

    let ap = start + differ * (where - 1);

    return ap;
}

function getApFromArray(numbers, where) {

    let startNum = numbers[0];
    let d1 = (numbers[0] - numbers[1]) * -1;
    let d2 = (numbers[1] - numbers[2]) * -1;
    let differ = 0;

    if (d1 === d2) {
        differ = d1;

        return getAP(startNum, differ, where);
    }
    else {
        return false;
    }
}

console.log(getApFromArray([3, 6, 9, 12, 15], 6));//18
