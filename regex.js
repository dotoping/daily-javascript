// username must have at least 4 charaters and underscore'_' and then numbers optional

function validate(username) {
    // Write the code that goes here
    var regex = /^[a-zA-Z\_0-9?]{4,}$/g;
    var result = regex.test(username)
    return result
}

console.log(validate('Mike_Standish1')); // Valid username
console.log(validate('Mike Standish2')); // Invalid username
console.log(validate('Mik')); // Invalid username