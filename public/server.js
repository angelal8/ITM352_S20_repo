/* Author of the code: Angela Lee */

/* Used code from lab 11 and modifed from there */
function isNonNegInt(q,returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}

let products_array=require('./pastries.json');
/* Used code from Professor Dan's assignment 1 workshop file & lab 13 and modified from there */
