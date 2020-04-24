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


//LAB

