"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(array) {
    let arrayTotal = 0;
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        arrayTotal += array[i];
    }
    let arrayAverage = arrayTotal / arrayLength;
    console.log(arrayAverage);
}

getAverage(yourScores);