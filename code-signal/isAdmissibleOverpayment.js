// const originalPrice = (prices, notes) => {
//    return notes.map((note, index) => {
//       return note.indexOf('lower') > 0 ? prices[index] / (1 - (note.slice(0, note.indexOf('.')) * 0.01))
//          : note.indexOf('higher') > 0 ? prices[index] / (1 + (note.slice(0, note.indexOf('.')) * 0.01))
//             : prices[index];
//    })   
// }
function roundToTwo(num) {
   return +(Math.round(num + "e+2") + "e-2");
}

function isAdmissibleOverpayment(prices, notes, x) {
   const originalPrice = notes.map((note, index) => {
      return note.indexOf('lower') > -1 ? roundToTwo(roundToTwo(prices[index]) / roundToTwo((1 - (note.slice(0, note.indexOf('%')) * 0.01))))
         : note.indexOf('higher') > -1 ? roundToTwo(roundToTwo(prices[index]) / roundToTwo((1 + (note.slice(0, note.indexOf('%')) * 0.01))))
            : roundToTwo(prices[index]);
   });

   console.log(originalPrice)

   let sum = 0;
   originalPrice.forEach((price, index) => {
      sum += prices[index] - price;
   })
   console.log(roundToTwo(sum))

   return x === sum;
   
   
}


console.log(isAdmissibleOverpayment([24.42, 24.42, 24.2424, 85.23], ["13.157% higher than in-store",
   "13.157% lower than in-store",
   "Same as in-store",
   "19.24% higher than in-store"], 24.24));