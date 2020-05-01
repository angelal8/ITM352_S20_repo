// Author of the Code: Angela Lee
// Assistance from classmate, Kiara Furutani and Shane Gimenez

// This code is used from Kiara Furutani's server.js
var express = require('express'); // Requires express in order to run
var myParser = require("body-parser"); // Loads a body parser module in the server
var fs = require('fs');
var data = require("./public/product_data.js"); // Pulls data from my product_data.js
var products = data.products; // Shows data from product_data.js
var queryString = require("querystring");
 
var app = express(); // Runs and starts express

app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(myParser.urlencoded({ extended: true }));

// Request the quantity_form to form a response to the values
app.post("/process_form", function (request, response) {
   //let POST = request.body;
   process_quantity_form(request.body, response);
});

// File is in the 'public' directory
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

// This code is used from Professor Dan's Lab13, mostly ex4.js
// Function needs to be redefined in order to process the form
function isNonNegInt(q, returnErrors = false) {
   errors = []; // Assume no errors at first
   if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
   if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
   if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
   return returnErrors ? errors : (errors.length == 0);
}

// This code is from Kiara Furutani's server.js
function process_quantity_form(POST, response) {
   if (typeof POST['purchase_submit_button'] != 'undefined') {
       // Check if the quantities are valid, if so, send to the invoice, if not, give an error
       var qString = queryString.stringify(POST);
       for (i in products) {
           let q = POST[`quantity${i}`];
           if (isNonNegInt(q) == true) {
               response.redirect('login.html?' + qString); // Redirects with query strings to invoice.html page
           } else {
               response.redirect('product_display.html?' + qString); // Redirects back to product_display.html page
           }
        }
      }
}