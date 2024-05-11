"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Airheads", price: 2.19 },
    { product: "Trolli", price: 7.99 },
    { product: "Sour patch kids", price: 1.49 },
    { product: "Nerds Gummy Clusters", price: 4.17 },
    { product: "Mike and ike", price: 6.79 },
];


function getCheapestCandy(productArray, price) {
    let cheapCandy = [];
    for (let i = 0; i < productArray.length; i++) {
        // console.log(productArrray);
        // console.log(price);
        if (productArray[i].price < price) {
            cheapCandy.push(productArray[i]);
            // console.log(cheapCandy);
        }
    }
    return cheapCandy;

}


let affordableCandy = getCheapestCandy(products, 4.00);
console.log("Here are the cheapest candy")
for (let i = 0; i < affordableCandy.length; i++) {
    console.log(affordableCandy[i].product + ":");
}





// ----------------------------------------------------------------



function findCandyMatch(productArray, productName) {
    let correctMatch = [];
    // console.log(productArray);
    for (let i = 0; i < productArray.length; i++) {
        // if (productArray[i].product == productName) {
        //   if ( productArray[i].product.includes(productName)) {
        if (productArray[i].product.indexOf(productName) >= 0) {
            correctMatch.push(productArray[i]);
            // console.log(correctMatch);
            // console.log(productArray);
        }

    }
    return correctMatch;
}

let rightCandy = findCandyMatch(products, "M&Ms");
console.log("Here are all the M&M candy")
for (let i = 0; i < rightCandy.length; i++) {
    console.log(rightCandy[i].product + ":");
}













function doWeHaveSwedishFish(productArray, name) {
    let swedishFish = false;
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].product.indexOf(name) >= 0) {
            swedishFish = true;
        }
        else {
            false;
        }
    }
    return swedishFish;
}

let weHaveSwedishFish = doWeHaveSwedishFish(products, "Swedish Fish");
console.log("Do we have Swidish Fish: " + weHaveSwedishFish);


//  for(let i = 0; i < weHaveSwedishFish.length; i++){
//     console.log(weHaveSwedishFish[i].product);
//  }