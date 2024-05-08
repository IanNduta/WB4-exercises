"use strict";

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];
// let arrayStudentNames = 0;
// let studentScores = 0;
// let averageScores = 0;
// let i = 0;



function arrayLooping(students){
    for (let i = 0; i < students.length; i++) {
        let total = 0;
        // let arrayLength = students[i].scores.length;
        for (let j = 0; j < students[i].scores.length; j++) {
            total += students[i].scores[j];
        }
        let averageScores = total / students[i].scores.length;
        // let arrayStudentNames = students[i].name;
        // console.log(students[i].name);
        // console.log(averageScores);
        console.log(`${students[i].name} average scores is ${averageScores.toFixed(2)}`);
    }
}

arrayLooping(students);



// for ( i = 0; i < students.length; i++){
//     for (let k = 0; k < students[i].scores.length; k++){ 
//         // console.log(students[i].scores[k]); 
//         console.log(`studntes names ${students.name} arry scores length ${students[i].scores.length} arrray scores ${students[i].scores[k]}`);       
//     }

// }