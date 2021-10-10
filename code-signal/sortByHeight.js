/**
 * 
 * @param {Array} a 
 */
function sortByHeight(a) {
    const sorted = a.filter(v => v > 0).sort((a, b) => a - b);
    return a.map(v => v > 0 ? sorted.shift() : -1);
}


console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[-1, 150, 160, 170, -1, -1, 180, 190]