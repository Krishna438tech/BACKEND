// function analyzeScores(scoresArray){
//     let excellentCount = 0;
//     let passCount = 0;
//     let failCount = 0;

//     let totalScore = 0;
//     let validStudents = 0;
//     for(let i=0;i<scoresArray;i++){
//         // convert to number
//         let score = Number(scoresArray[i]);
//         // ignore nan values
//         if (isNaN(score)) {
//             continue;
//         }
//         //scores conditions
//         if(score >= 90){
//             excellentCount++;
//         }else if (score >= 60){
//             passCount++;
//         }else{
//             failCount++;
//         }        
//     }
//     let averageScore;
//     if(validStudents === 0){
//         averageScore = 0;
//     }else{
//         averageScore = Number((totalScore / validStudents).toFixed(2));
//     }
//     // return items
//     return{
//         // totalStudents: validStudents,
//         excellent: excellentCount,
//         pass: passCount,
//         fail: failCount,
//         // averageScore: average
//     };
// }