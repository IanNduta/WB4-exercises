"use strict";
let yourScores = [82, 98, 94, 88, 92, 100, 100];

yourScores.sort();

function sortNumbersForLowestToHighest(a,b){
    if(a < b){
        return -1;
    }
    else if(a == b){
        return 0;
    }
    else{
        return 1;
    }
}
yourScores.sort(sortNumbersForLowestToHighest);
console.log(yourScores);