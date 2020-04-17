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
var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs=require('fs');

var data=require('./public/product_data.js');
var products=data.products;

app.all('*',function(request,response,next) {
    console.log(request.method + ' to ' + request.path);
    next();
}
);

app.use(myParser.urlencoded({ extended: true }));

app.post('/quantity_form', function (request, response) {
    let POST=request.body;
    q=POST["quantity_textbox"];

    if(type POST['quantity_textbox'] != 'undefined') {
        console.log(q);
        if(isNonNegInt(q,false)) {
            response.send('Purchased ${q} cakes!');
        }
        else {
            response.send(`${q} is not valid. Try again.`);
        }
    };
    
});

app.use(express.static('.public'));
app.listen(8080, () => console.log(`connected to port 8080`));