// set 45mins earlier given alarm
// hour 0<= hour <=23
// minute 0<= minute <=59
// input: 10 10
// output: 9 25

var h = 10, m = 10;
var t = new Date();
var ms = 24 * 60 * 60 * 1000;

// console.log(t.getHours())
// console.log(t.getMinutes())
// console.log(t.getTime())
// console.log(ms);


var onTime = new Date();
var setTime = new Date((24 * 3600 * 1000) - (45 * 60 * 1000));
// var setTime = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
// endYear.setFullYear(today.getFullYear()); // Set year to this year
// var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
// var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// var daysLeft = Math.round(daysLeft); //returns days left in the year
console.log(onTime.getHours())
console.log(setTime.getHours())