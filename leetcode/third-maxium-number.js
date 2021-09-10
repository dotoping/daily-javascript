/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 * 
 */

/**
* @param {number[]} nums
* @return {number}
*/
var thirdMax = function (nums) {
    
    var result = nums.reduce((pre, curr) => {
        pre.indexOf(curr) > -1 ? pre : pre.push(curr)
        return pre;
    }, []);

    if (result.length === 1) return result[0];
    if (result.length === 2) return Math.max.apply(null, result);

    result.sort((a, b) => b - a);
    
    return result[2];
};

console.log(thirdMax([3, 2, 1])); //1
console.log(thirdMax([1, 2])); //2
console.log(thirdMax([2, 2, 3, 1])); //1