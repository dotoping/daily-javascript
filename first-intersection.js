function FindIntersection(strArr) {
    const tmpArr = strArr[0].split(", ").filter(f => strArr[1].split(", ").includes(f));
    return !tmpArr.length ? false : tmpArr.join(",")
}

// keep this function call here 
let dataArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
console.log(FindIntersection(dataArr));