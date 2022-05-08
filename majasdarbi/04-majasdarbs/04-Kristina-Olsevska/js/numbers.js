let integer = 3;
let decimalNumber = 3.14;

let scientificNumber = 123e2; //123 * 10 * 10
console.log("Scientific number value:", scientificNumber);

// let acceptableIntegerValue = 999999999999999;
// console.log("Number with up to 15 digits:", acceptableIntegerValue);

// let faultyIntegerValue = 9999999999999999;
// console.log ("Number with more than 15 digits", faultyIntegerValue);

// let specialJavaScriptMath = 0.2 + 0.1;
// console.log("What is this JavaScript?", specialJavaScriptMath);

let fixedJavaScriptMath = speciealJavaScriptMath.toFixed(1);
console.log("Type of number:", fixedJavaScriptMat);

let possibilitiesWithJavaScript = 1e999;
console.log("Possiblities with frontend:", possibilitiesWithJavaScript);

let possibilitiesWithoutJavaScript = possibilitiesWithJavaScript * 0;
console.log("Possibilities without JavaScript", possibilitiesWithoutJavaScript);
console.log("Is Nan?", isNan(possibilitiesWithoutJavaScript));

const isJavaScriptAwesome = true;
const isAboveStatementFalse = false;

let yearInvetedHTML = 1991;
let yearInventedJS = 1995;

let isHTMLolderThanJS = yearInventedHTML < yearInventedJS;
console.log ("HTML is older than JavcaScript?", isHTMLolderThanJS);

let uniqueSymbol1 = Symbol('xyz');
let uniqueSymbol2 = Symbol('xyz');

let areBothUniqueValuesIdentical = uniqueSymbol1 === uniqueSymbol2;
console.log("Are bith symbols identical?", areBothUniqueValuesIdentical);
