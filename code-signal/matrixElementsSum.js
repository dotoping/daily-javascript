function matrixElementsSum(matrix) {
    hauntedColumns = []
    totalCost = 0
    matrix.forEach((arr) => {
        arr.forEach((elem, pos) => {
            if (elem == 0) hauntedColumns.push(pos);
            if (!hauntedColumns.includes(pos)) totalCost += elem;
        });
    });
    return totalCost;
}



function matrixElementsSum2(matrix) {

    let total = 0

    if (matrix.length == 1) {
        return matrix[0].reduce((a, b) => a + b)
    }


    for (let i = matrix.length - 1; i >= 1; i--) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] !== 0 && matrix[0][j] !== 0) {
                total = total + matrix[i][j]
            }
        }

    }

    let top_floor = matrix[0].reduce((a, b) => a + b);
    return total + top_floor
}

function matrixElementsSum3(matrix) {
    let sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0 && i + 1 < matrix.length) {
                matrix[i + 1][j] = 0;
            }
            sum += matrix[i][j];
        }
    }
    return sum;
}