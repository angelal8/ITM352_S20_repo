// Author of the code: Angela Lee
// This code is used from Professor Dan's Lab13 and Assignment 1 page on the class website

products =
[
    {
        //Product 1: Strawberry Shortcake
        "cake": "Strawberry Shortcake", // Object is Strawberry Shortcake
        "price": 6.00,
        "image": "./images/Strawberry_Shortcake.jpg"
    },
    {
        //Product 2: Tiramisu
        "cake": "Tiramisu",
        "price": 5.00,
        "image": "./images/Tiramisu.jpg"
    },
    {
        //Product 3: Cheesecake
        "cake": "Cheesecake",
        "price": 4.50,
        "image": "./images/Cheesecake.jpg"
    },
    {
        //Product 4: Mont Blanc
        "cake": "Mont Blanc",
        "price": 6.00,
        "image": "./images/Mont_Blanc.jpg"
    },
    {
        //Product 5: Matcha Cake
        "cake": "Matcha Cake",
        "price": 5.00,
        "image": "./images/Matcha_Cake.jpg"
    }
];

// Code is from Professor Dan's Assignment1_2file's product_data.js file
// Module will export data from products array if module is not undefined
if(typeof module != 'undefined') {
    module.exports.products=products;
}