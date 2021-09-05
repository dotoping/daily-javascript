/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    var arrLength = arr.length;

    if (arrLength >= 3) {
        var i_d = "+";
        if (arr[0] < arr[1] && arr[arrLength - 2] > arr[arrLength - 1]) {
            for (var i = 0; i < arrLength; i++) {
                if (arr[i] === arr[i + 1]) {
                    return false;
                }
                if (arr[i] < arr[i + 1]) {
                    if (i_d === "-") {
                        return false;
                    }

                    i_d = "+";
                } else {
                    
                    if (i + 1 === arrLength - 1) {
                        return true;
                    } else if (arr[i] > arr[i + 1]) {
                        i_d = "-";
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }
    return false;
};

console.log(validMountainArray([1, 8, 7, 6, 5, 5, 3, 2, 1, 0]));
