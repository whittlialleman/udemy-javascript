/*
//Importing module
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
*/

import add, {cart} from './shoppingCart.js'; //this imports the unnamed function from shoppingCart.js
add('pizzas', 2);
add('breads', 5);
add('apples', 4);

console.log(cart);

/*
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

////////////////////////////////////////////////////
//Module pattern

const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`)
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //This does not work, log shows undefined

/////////////////////////////////////////////////////
//CommonJS Modules
//Export
export.addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

//Import
const {addToCart} = require('./shoppingCart.js')
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if(module.hot) {
    module.hot.accept()
}

class Person {
    greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}

const whip = new Person('Whip');

console.log('Whip' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

//Polyfilling async functions
import 'regenerator-runtime/runtime';