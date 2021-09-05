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
        for (var i = 0; i < arrLength; i++){
            if (arr[0] < arr[1] || arr[arrLength - 2] > arr[arrLength - 1]) {
                if (arr[i] < arr[i + 1]) {
                    //시작부터 증가부분
                    if (i_d === "-") {
                        return false + "다시 증가";
                    }

                    i_d = "+";
                } else {
                    if (i + 1 === arrLength - 1) {
                        return true;
                    }
                    else if (arr[i] > arr[i + 1]){
                        //고점에서 작아지는 부분
                        i_d = "-";
                    } else {
                        return false + "?";
                    }
                }
            } else {
                return false + "sec";
            }
        }
    }
    return false + "first";
};

console.log(validMountainArray([0,2,3,3,5,2,1,0]));