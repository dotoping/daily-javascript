/**
 * 
 * @param {Array} inputArray 
 */
function allLongestStrings(inputArray) {
    let maxLength = 0;
    
    inputArray.map(item => item.length > maxLength ? maxLength = item.length : maxLength)    

    return inputArray.filter(v => v.length === maxLength);
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); //["aba", "vcd", "aba"]