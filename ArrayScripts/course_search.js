"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    },
];

// When does the PROG200 course start?

function getCourseByCourseId(arrayOfCourses, courseId){
    let theCourse;
    //todo: find the right course from the array and return it...
    for (let i = 0; i < arrayOfCourses.length; i++){
        if(arrayOfCourses[i].CourseId == courseId){
            theCourse = arrayOfCourses[i];
            return theCourse;
        }
    }
    return undefined;
}

let PROG200Course = getCourseByCourseId(courses, "PROG200");
console.log("The Start date is: " + PROG200Course.StartDate);

// -----------------------------------------------------------

// function getTitlesOfCourses(arrayOfCollegeCourse, courseId){
   

//     for(let i = 0; i < arrayOfCollegeCourse.length; i++ ){
//         if(arrayOfCollegeCourse[i].CourseId == courseId){
//             let courseTitle = arrayOfCollegeCourse[i];
//             return courseTitle
//         }
//     }

// }

let thePROJ500course = getCourseByCourseId(courses, "PROJ500")
console.log("The course title: " + thePROJ500course.Title);

// -----------------------------------------------------------


 function getCoursesUnderPrice(courseArray, price){
    let coursesUnderPrice = [];
    for(let i = 0; i < courseArray.length; i++){
        // console.log(courseArray);
        // console.log(price);
        // console.log(feeOfCourses);
        if(courseArray[i].Fee == price){
            coursesUnderPrice.push(courses[i])

        }
    }
    return coursesUnderPrice;
 }

let allCoursesUnder50 = getCoursesUnderPrice(courses, 50.00);



for(let i = 0 ; i < allCoursesUnder50.length; i++){
     console.log("Course $50 or below are: " + allCoursesUnder50[i].Title);
}
//-----------------------------------------------------
function getCourseInSameClassroom(courseArray, loctaion) {
    let sameClassroom = [];
    for (let i = 0; i < courseArray.length; i++) {
        if (courseArray[i].Location == loctaion) {
            sameClassroom.push(courses[i]);
            // console.log(sameClassroom);
        }
    }
    return sameClassroom;
}
let allLocationInClassroomOne = getCourseInSameClassroom(courses, "Classroom 1");
for (let i = 0; i < allLocationInClassroomOne.length; i++) {
    console.log(allLocationInClassroomOne[i].Title);
}