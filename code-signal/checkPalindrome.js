/**
 * 
 * @param {String} inputString 
 */
function checkPalindrome(inputString) {
    let palindrome = inputString.split("").reverse().join("");

    return inputString === palindrome ? true : false;
}


console.log(Number.NEGATIVE_INFINITY);
console.log(checkPalindrome("decaf faced"));