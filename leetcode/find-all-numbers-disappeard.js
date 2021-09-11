/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 */

/**
* @param {number[]} nums
* @return {number[]}
*/
var findDisappearedNumbers = function (nums) {
    
    var result = [];
    var lengthArr = nums.length;

    result = nums.reduce((pre, curr) => {
        pre.indexOf(curr) > -1 ? pre : pre.push(curr)
        return pre;
    }, []);
    
    result.sort((a, b) => a - b);
    
    var i = 1, j = 0;
    var newArr = [];
    while(i<=lengthArr){
        if(i === result[j]){
            i++;
            j++;
        } else {
            newArr.push(i);
            i++;
        }
    }

    return newArr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));//[5,6]
// console.log(findDisappearedNumbers([1, 1]));//[2]
