function counts(teamA, teamB) {
   let intArr = [];
   let count = 0;

   teamB.forEach((score_b) => {
      const teamA_count = teamA.filter((score) => score_b >= score) 
      intArr.push(teamA_count.length);
      count = 0;
   })
   
   console.log(intArr);
}

counts([1, 2, 3], [2, 4]);
counts([1, 4, 2, 4], [3, 5]);
counts([2,10,5,4,8], [3, 1,7,8]);