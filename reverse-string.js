function FirstReverse(str) {

    // code goes here  
    //return str.split('').reverse().join('');

    //another way
    // var temp = ''
    // for (var i = 0; i < str.length; i++) {
    //     temp = str[i] + temp
    // }
    // return temp

    // used array
    var temp = []
    var split_str = str.split('')
    console.log(split_str)
    for (var i = split_str.length - 1; i > -1; i--) {
        temp.push(split_str[i])
    }
    return temp.join('')

}

// keep this function call here 
let data = 'This is the reversed strings.'
console.log(FirstReverse(data));