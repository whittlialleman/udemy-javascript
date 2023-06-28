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

///////////////////////////////////////////////////
//Top level await as of 2022 - no longer have to use await inside an async function
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title: data.at(-1).title, text: data.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost);

//Not very clean
//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);