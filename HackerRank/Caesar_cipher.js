function caesarCipher(s, k) {
   // Write your code here
   const strArr = s.split('');
   const encArr = [];
   var charCode;
   var tmp = 0;
   var regx = /[a-zA-Z]/g;

   for (var i = 0; i < strArr.length; i++){
      if (strArr[i].match(regx)) {
         charCode = s.charCodeAt(i);
         tmp = charCode + k;

         if (strArr[i] === 'z' && tmp > 122) tmp = charCode + k - 26;
         if (strArr[i] === 'Z' && tmp > 90) tmp = charCode + k - 26;
         
      
         encArr.push(String.fromCharCode(tmp));

         tmp = 0;
      } else {
         encArr.push(strArr[i]);
      }
      
   }
   return encArr.join('');

}

console.log(caesarCipher('Hello_World!', 4));