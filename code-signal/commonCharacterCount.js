/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 */
function commonCharacterCount(s1, s2) {
    var result = 0;

    for (let i = 0; i < s1.length; i++) {
        
        if (s2.indexOf(s1[i]) != -1) {
            result++;
            s2 = s2.replace(s1[i], "");
        }
    }

    return result;
}

console.log(commonCharacterCount("aabcc", "adcaa"));