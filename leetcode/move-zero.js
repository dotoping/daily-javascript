/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
 * the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function (nums) {
       
    // nums.sort((a, b) => a - b);
    // for (var i = 0; i < nums.length; i++){
    //     if (nums[0] === 0) {
    //         nums.splice(nums.length , 0, 0);
    //         nums.shift();
    //     } else {
    //         break;
    //     }
    // }
    // return nums;
    // var arr = new Array(nums.length);
    
    // var i = 0;
    // while (i < nums.length) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //     } else {
    //         ++i;
    //     }
    //     arr[i] = nums[i];
    // }
    
    // arr.fill(0, i);
    // nums = [...arr];
    // console.log(nums)
    var i = 0;
    var length = nums.length;
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
        } else {
            ++i;
        }
    }
    
    for (var j = 0; j < length - i; j++){
        nums.splice(length - j, 0, 0);
    }

    

};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0]));