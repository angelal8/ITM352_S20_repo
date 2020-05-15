// Author: Kiara Furutani and Angela Lee
// This file contains the details for the products as a reference for the Shopping and Invoice Pages  
// Format used in my Lab13
products =
[
    {
        // Product 1
        "succulent": "Tippy",
        "price": 23.00,
        "image": "./images/Tippy.jpg"
    },
    {
        // Product 2
        "succulent": "Black Knight",
        "price": 21.00,
        "image": "./images/BlackKnight.jpg"
    },
    {
        // Product 3
        "succulent": "Bittersweet",
        "price": 25.00,
        "image": "./images/Bittersweet.jpg"
    },
    {
        // Product 4
        "succulent": "Melaco",
        "price": 22.00,
        "image": "./images/Melaco.jpg"
    },
    {
        // Product 5
        "succulent": "Blue Bird (rare)",
        "price": 30.00,
        "image": "./images/BlueBird.jpg"
    },
    {
        // Product 6
        "succulent": "Raindrops",
        "price": 22.00,
        "image": "./images/Raindrops.jpg"
    }
];

if(typeof module != 'undefined') {
    module.exports.products = products;
  }