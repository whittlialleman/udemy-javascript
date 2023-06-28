//Importing module
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, {cart} from './shoppingCart.js'; //this imports the unnamed function from shoppingCart.js
add('pizzas', 2);
add('breads', 5);
add('apples', 4);

console.log(cart);