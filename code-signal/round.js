function roundToTwo(num) {
   return +(Math.round(num + "e+2") + "e-2");
}
console.log(roundToTwo(2.005));