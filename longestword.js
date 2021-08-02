function LongestWord(sen) {

    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, ''); // regex : only words and number

    let longest = ""

    var arr = sen.split(" ").forEach(word => {
        if (word.length > longest.length) longest = word;
    })

    return longest;

}

// keep this function call here 
let data = 'hello#$^19982020 123theyare randomword'
console.log(LongestWord(data));