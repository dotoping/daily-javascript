/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
 * @param {Array} a 
 * @param {Array} b 
 */
function areSimilar(a, b) {
    
    // for (let i of a) {
    //     if (b.includes(i)) {
    //         b.splice(b.indexOf(i), 1);
    //     } else {
    //         return false;
    //     }
    // }
    // return true;

    const ad = a.filter((v, i) => v != b[i])
    const bd = b.filter((v, i) => v != a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))

}

console.log(areSimilar([1, 4, 3], [1, 2, 3]));