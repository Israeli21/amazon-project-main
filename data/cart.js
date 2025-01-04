export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  //     // Check if there's a previous timeout for this product. If there is, we should stop it
//     const previousTimeoutId = addedMessageTimeouts[productId];
//     if (previousTimeoutId) {
//       clearTimeout(previousTimeoutId);
//     }

//     const timeoutId = setTimeout(() => {
//       addedMessage.classList.remove('added-to-cart-visible');
//     }, 2000);

//     // Save the timeoutId for this product so we can stop it later if we need to
//     addedMessageTimeouts[productId] = timeoutId;

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

// // Normalizing the Data (deduplicating): removing dupilcate values from a data structure
// export let cart = [{
//     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//     quantity: 2,
// }, {
//     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//     quantity: 1
// }];

// export function removeFromCart(productId){
//     const newCart = [];

//     // Purpose: Contain all the products that don't match the productId, which is the same thing as removing it from the checkout
//     cart.forEach((cartItem) => {
//         if(cartItem.productId != productId){
//             newCart.push(cartItem);
//         }
//     });

//     cart = newCart;
// }