//Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */

/**
* @param {number[]} nums
* @return {number}
*/
var findMaxConsecutiveOnes = function (nums) {
    var currCount = 0;
    var preCount = 0;
    
    nums.forEach((n) => {
        if (n === 1) {
            currCount++;
        }
        else {
            currCount = 0;
        }
        if (preCount < currCount) {
            preCount = currCount;
        }
        
    })
    console.log(preCount)

};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
findMaxConsecutiveOnes([1,0,1,1,0,1])