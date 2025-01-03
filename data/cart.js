// Normalizing the Data (deduplicating): removing dupilcate values from a data structure
export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

export function removeFromCart(productId){
    const newCart = [];

    // Purpose: Contain all the products that don't match the productId, which is the same thing as removing it from the checkout
    cart.forEach((cartItem) => {
        if(cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}