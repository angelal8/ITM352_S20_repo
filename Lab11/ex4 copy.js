attributes  =  "Angela;21;21.5;-20.5" ;
var pieces = attributes.split(';');
for(i=0; i<pieces.length; i++) {
    console.log(pieces[i],typeof pieces[i]);
    //console.log(pieces[i],typeof pieces[i], isNotNegInt(pieces[i]));
    //console.log(pieces[i],typeof pieces[i], isNotNegInt(pieces[i]. true));
    //console.log(pieces[i],typeof pieces[i], isNotNegInt(pieces[i]));
}
console.log(isNonNegInt("-2.2"));

//console.log(isNonNegInt("2"));

//pieces.forEach(printIt);
//console.log(typeof isNonNegInt);

//function printIt(item, index) {
    //console.log(item, index);
    //console.log(item, typeof item, isNonNegInt(item, true));
//}

//pieces.forEach(printIt);
    //anon = function () {console.log( (typeof item == 'string' && item.length > 0)?true:false )}
    //console.log(anon);
//);


//function printIt(item, index) {
    //console.log(item, typeof item, isNonNegInt(item, true));
//}

function isNonNegInt(q) {
    //function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return (errors.length == 0);
    //return returnErrors ? errors : (errors.length == 0);
}