"use strict";
let parseCode = "supplierCode:productNumber-size";

function parsePartCode(parseCode){
    let info ={
        supplierCodeInfo: getSupplier(parseCode),
        numberInfo: getProductNumber(parseCode),
        sizeInfo: getSize(parseCode)
    }
    return info;
}

function getSupplier(parseCode){
    let posOfColon = parseCode.indexOf(":");
    let supplierCode = parseCode.substring(0, posOfColon);
    //console.log(supplierCodePosition);
    return supplierCode;
}

function getProductNumber(parseCode){
    let productNumberPositionBefore;
    let productPositionAfter;
    productNumberPositionBefore = parseCode.indexOf(":");
    productPositionAfter = parseCode.indexOf("-");
    let productNumber = parseCode.substring(1 + productNumberPositionBefore, productPositionAfter);
    // console.log(supplierCodePosition);
    // console.log(supplierCodePositionOfCollen);
    return productNumber; 
}

function getSize(parseCode){
    let sizePosition;
    sizePosition = parseCode.indexOf("-");
    let size = parseCode.substring(1 + sizePosition);
    return size;
}

let partcode1 = "XYZ:1234-L";
let part1 = parsePartCode(partcode1);
console.log(part1.supplierCodeInfo);















// let partcode1 = "supplierCode:productNumber-size";
// let supplierNumber;
// let productNumber;
// let productSize;
// function parsePartCode(partcode1){
//     let supplierNumber = partcode1.substring(0,12);
//     let productNumber = partcode1.substring(13,26);
//     let productSize = partcode1.substring(27);
// }

// let part1 = parsePartCode(supplyCode);
// parsePartCode(partcode1);
// console.log("supplierCode" + part1.supplyInfo);
