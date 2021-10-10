/**
 * 
 * @param {number} n 
 */
function isLucky(n) {
    let str = n.toString();
    let sumOfFirstHalf = str.slice(0, str.length / 2).split("").reduce((a, b) => Number(a) + Number(b));
    let sumOfSecondHalf = str.slice(str.length / 2, str.length).split("").reduce((a, b) => Number(a) + Number(b));
    
    return sumOfFirstHalf === sumOfSecondHalf;
}


console.log(isLucky(1230));//true