/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArrayByParity = function (nums) {
    var temp;
    var j = 0;
    var arrLength = nums.length;

    for (var i = 0; i < arrLength; i++){
        if (nums[j] % 2 !== 0) {
            temp = nums.splice(j, 1)[0];
            nums.splice(arrLength, 0, temp);
        }
        else {
            j++;
        }
    }
    console.log(nums)
};

// sortArrayByParity([3, 1, 2, 4]);
sortArrayByParity([0, 1, 2]);