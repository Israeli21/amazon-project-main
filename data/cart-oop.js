// Use PascalCase for things that generate objects
// PascalCase: start every word with a capital
function Cart (localStorageKey) {
    const cart = {
        // You can't have 'export function' on the front of a code line
        cartItems: undefined,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            
            if (!this.cartItems) {
                this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
              }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
              }];
            }
        },
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId) {
            let matchingItem;
            
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                matchingItem = cartItem;
                }
            });
            
            const quantitySelector = document.querySelector(
                `.js-quantity-selector-${productId}`
            );
            const quantity = Number(quantitySelector.value);
            
            if(matchingItem){
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({
                productId: productId,
                quantity: quantity,
                deliveryOptionId: '1'
                });
            }
            this.saveToStorage();
        },
        removeFromCart(productId) {
            const newCart = [];
            
            // Purpose: Contain all the products that don't match the productId, which is the same thing as removing it from the checkout
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                newCart.push(cartItem);
                }
            });
            
            this.cartItems = newCart;
            
            this.saveToStorage();
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
          
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
          
            matchingItem.deliveryOptionId = deliveryOptionId;
          
            this.saveToStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);

// 