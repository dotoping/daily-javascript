function caesarCipher(s, k) {
   // Write your code here
   const strArr = s.split('');
   const encArr = [];
   var charCode;
   var tmp = 0;
   var regx = /[a-zA-Z]/g;
   var lowerCases = [97, 122];
   var upperCases = [65, 90];

   for (var i = 0; i < strArr.length; i++) {
      charCode = s.charCodeAt(i);
      if ((charCode >= lowerCases[0] && charCode <= lowerCases[1])
         || (charCode >= upperCases[0] && charCode <= upperCases[1])) {
         tmp = charCode + k;
         if (tmp > lowerCases[1]) tmp = charCode - 26 + k;
         if (tmp > upperCases[1] && tmp < 97) tmp = charCode - 26 + k;
         
         
         encArr.push(String.fromCharCode(tmp));

         tmp = 0;
      } else {
         encArr.push(strArr[i]);
      }
         
   
      
      // if (strArr[i].match(regx)) {
      //    charCode = s.charCodeAt(i);
      //    tmp = charCode + k;

      //    if (strArr[i] === 'z' && tmp > 122) tmp = charCode + k - 26;
      //    if (strArr[i] === 'Z' && tmp > 90) tmp = charCode + k - 26;
         
      
      //    encArr.push(String.fromCharCode(tmp));

      //    tmp = 0;
      // } else {
      //    encArr.push(strArr[i]);
      // }
      
   }
   return encArr.join('');

}

console.log(caesarCipher('www.abc.xy', 87));