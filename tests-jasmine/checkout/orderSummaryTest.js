import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage} from '../../data/cart.js';

describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
            <div class = "js-order-summary"></div>
        `;
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();
    });
});