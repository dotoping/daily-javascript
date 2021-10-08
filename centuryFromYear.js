function centuryFromYear(year) {
    let v = year / 100;
    return Number.isInteger(v) ? v : Number.parseInt(v) + 1;

}


console.log(centuryFromYear(2000));