/** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */


/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function (nums) {
    var result;
    // var i = 0;
    // for (var j = 0; j < nums.length; j++){
    //     if (nums[j] !== nums[i]) {
    //         i++;
    //         nums[i] = nums[j];
    //     }
    // }

    result = nums.reduce((pre, curr) => {
        pre.indexOf(curr) > -1 ? pre : pre.push(curr)
        return pre;
    }, []);

    // result = nums.forEach((num, idx, self) => {
    //     if (self.indexOf(num)!==idx) {
    //         nums.splice(self.indexOf(num), 1)
    //     }
    // });

    // nums.filter((num, idx, self) => {
    //     if (self.indexOf(num) !== idx) {
    //         // nums.splice(self.indexOf(num), 1);
    //         console.log(`not eq:${self.indexOf(num)}`)
    //     }
    //     return self.indexOf(num) === idx;
    // })
    
    console.log(result)
};

// removeDuplicates([1, 1, 2])
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])