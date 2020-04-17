/* Author of the code: Angela Lee
Used code from lab 13 and revised from there */

products=
[
    {
        //Product 1
        "cake": "Strawberry Shortcake",
        "price": 6.00,
        "image": 'Strawberry_Shortcake.jpg'
    },
    {
        //Product 2
        "cake": "Tiramisu",
        "price": 5.00,
        "image": 'Tiramisu.jpg'
    },
    {
        //Product 3
        "cake": "Cheesecake",
        "price": 4.50,
        "image": 'Cheesecake.jpg'
    },
    {
        //Product 4
        "cake": "Mont Blanc",
        "price": 6.00,
        "image": 'Mont_Blanc.jpg'
    },
    {
        //Product 5
        "cake": "Matcha Cake",
        "price": 5.00,
        "image": 'Matcha_Cake.jpg'
    }
];

if(typeof module != 'undefined') {
    module.exports.products=products;
}