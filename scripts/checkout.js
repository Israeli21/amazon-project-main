// Make payment summary interactive
// Saved data and generated HTML for payment summary
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
// Stopped: 21:22:47

// Promise: is an object that represents the eventual completion of an asynchronous operation and its resulting value
async function loadPage() {     // async: makes a function return a promise
    try{
        // throw 'error 1';
        await loadProductsFetch();  // await: lets us write asynchronous code like normal code
    
        const value = await new Promise((resolve, reject) => {  // reject(): it lets us create an error in the future
            // throw 'error 2';
            loadCart(() => {
                // reject('error 3');
                resolve('value3');
            });
        });

    } catch(error){
        console.log('unexpected error. Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();
    
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');  // Resolve() lets us control when to go to the next step
    });

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });
*/

// Multiple callbacks cause a lot of nesting, promises are recommended because they keep our code flat
// Async Await: even better way to handle asynchronous code
// Await: lets us wait for a promise to finish, before going to the next line

// Error Handling: when we're sending HTTP requests, we could get unexpected errors
// We can use try/catch to catch errors in normal code, whenever we get an error, it will skip the rest of the code
// Why don't we use try/catch everywhere?
// It's meant to handle UNEXPECTED ERRORS (code is correct, outside of our control)