"use strict";
// function compareAscendingNumber(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     else if (a == b) {
//         return 0;
//     }
//     else{ 
//         return 1;
//     }
// }


let students = ["Natalie", "Brittany", "Zachary", "Monse", "Zana", "Ian", "Tracie", "Yoseph", "Adama", "Juslian"];
let numbers = [3, 27 ,400, 5, 111, 70, 24 ,6 ,13, 45, 67, 22323, 70, 1];
// console.log("befor")
// console.log(students);

// students.sort();
// numbers.sort(compareAscendingNumber)
numbers.sort(function (a, b){return a - b});
console.log(numbers);

// console.log();
// console.log("after");
// console.log(students);