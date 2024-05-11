"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
// let i = 0;
// console.log(academyMembers[i].films.length);

function getAcademyMemberId(academyArray, memberId){
    let foundId;
    for(let i = 0; i < academyArray.length; i++){
        if(academyArray[i].memID == memberId){
            foundId = academyArray[i];
        }
    }
    return foundId;
}

let foundMemberId = getAcademyMemberId(academyMembers, 187);
console.log("The Academy Member whose ID number is " + foundMemberId.memID + " is: " + foundMemberId.name);
// //----------------------------------------------------

function getFilmsLength(academyArray, numOfFilms){
    let filmLength = [];
    //let lengthOfFilms = academyArray.films.length;

    for(let i = 0; i < academyArray.length; i++){

        if(academyArray[i].films.length >= numOfFilms){
            filmLength.push(academyArray[i]);
        }

    }
    return filmLength;
}
console.log("--------")
let filmsMoreThanThree = getFilmsLength(academyMembers, 3);
    for(let i = 0; i < filmsMoreThanThree.length; i++){
        console.log("these stars have more than 3 films: " + filmsMoreThanThree[i].name);
    }
// ----------------------------------------------------

function getNameThatStartWithBob(academyArray, nameWithBob){
    let nameStartWithBob = [];
    for(let i = 0; i < academyArray.length; i++){
        if(academyArray[i].name.indexOf(nameWithBob) >= 0){
            nameStartWithBob.push(academyArray[i]);
            // console.log(nameStartWithBob);
        }
    }
    return nameStartWithBob;
}
let foundNameWithBob = getNameThatStartWithBob(academyMembers, "Bob");
for(let i = 0; i < foundNameWithBob.length; i++){
    console.log(foundNameWithBob[i].name);
}