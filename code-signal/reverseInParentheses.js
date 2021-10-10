/**
 * 
 * @param {String} inputString 
 */
function reverseInParentheses(inputString) {
    if (inputString.includes('(')) {
        return reverseInParentheses(reverseIt(inputString));
    } else {
        return inputString;
    }
}

function reverseIt(s) {
    const regexp = /\(([^()]*)\)/i;
    
    let substr = regexp.exec(s)[1];
    
    substr = substr.split('').reverse().join('');
    return s.replace(regexp, substr);
}

// console.log(reverseIt("(baz)")); //foobazrabblim
// console.log(reverseInParentheses("(baz)")); //foobazrabblim
console.log(reverseInParentheses("foo(bar(baz))blim")); //foobazrabblim