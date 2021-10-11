function mostFrequentDigits(a) {
    
    let newArr = a.map((v) => v.toString().split("")).flat();
    const arr = [...new Set(newArr)].sort((a,b)=>a-b);
    const result = [];
    const result2 = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(newArr.filter(elm => elm === arr[i]).length);
    }

    const ab = result.map((v, i) => {
        return v === Math.max(...result) ? i : "";
    })

    for (var j = 0; j < ab.length; j++){
        if (ab[j] !== '') result2.push(parseInt(arr[j]));
    }
    return result2;
}


console.log(mostFrequentDigits([25, 2, 3, 57, 38, 41]));