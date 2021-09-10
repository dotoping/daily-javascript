/**
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    var expected = [...heights];
    var count = 0;

    expected.sort((a, b) => a - b);
    
    for (var i = 0; i < heights.length; i++){
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
        
    return count;
};

// console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5,1,2,3,4]));
console.log(heightChecker([1,2,3,4,5]));