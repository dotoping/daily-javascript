/**
 * Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].
 * @param {Array} a 
 */
function alternatingSums(a) {
    const teamOne = a
        .filter((person, index) => index % 2 === 0)
        .reduce((a, b) => a + b, 0);
    const teamTwo = a
        .filter((person, index) => index % 2 !== 0)
        .reduce((a, b) => a + b, 0);
    const result = [teamOne, teamTwo];

    return result;

}

function alternatingSums2(a) {
    let result = [0, 0];
    
    for (let i in a) result[i % 2 === 0 ? 0 : 1] += a[i];
    return result;
}


console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums2([50, 60, 60, 45, 70]));