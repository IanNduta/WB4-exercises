"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
]
    let foodLength = lunch.length;
    let priceinfo;
    let totalPrice = 0;
    let tax = 0;
    let tip = 0;
    let trueTotal = 0;
for (let i = 0; i < foodLength; i++){
    priceinfo = Number(lunch[i].price);
    totalPrice += Number(priceinfo);
    tax = totalPrice * .08;
    tip = totalPrice * .18;
    trueTotal = totalPrice + tax + tip;
}
// console.log(totalPrice);
// console.log(tax);
// console.log(tip);
console.log("Your total Price is: $" + Math.ceil(trueTotal));