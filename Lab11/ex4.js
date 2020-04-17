attributes  =  "Angela;21;21.5;-20.5" ;
var pieces = attributes.split(';');
for(i=0; i<pieces.length; i++) {
    console.log(pieces[i],typeof pieces[i]);
}
console.log(isNonNegInt());

function isNonNegInt(q,returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
}