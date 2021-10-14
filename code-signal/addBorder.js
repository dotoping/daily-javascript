function addBorder(picture) {
    let result = [];
    let maxChar = picture[0].length;
    let asterisk = "*";
    let border = "**";
    
    const addAsterisk = picture.map((char) => asterisk + char + asterisk);
    
    for (var i = 0; i < maxChar; i++){
        border += "*";  
    } 
    result.push(border, addAsterisk, border);

    return result.flat();

}

function addBorder2(picture) {
    let border = "*".repeat(picture[0].length + 2);
    let result = [border];
    for (let c of picture) result.push("*" + c + "*");
    result.push(border);

    return result;
}


// console.log(addBorder(["abc", "ded"]));
console.log(addBorder2(["abc", "ded"]));