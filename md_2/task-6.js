'use strict';

function checkForSpam(str) {
 let tolower = str.toLowerCase();
 let check = tolower.includes('spam') || tolower.includes('sale');
 return check;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true