import config from '../utils/config'
import { ClientFunction } from 'testcafe'
import * as productsPage from '../actions/ui/productsPage.ui.actions'
import * as loginPage from '../actions/ui/loginLogoutPage.ui.actions'

const getLocation = ClientFunction(() => document.location.href);

fixture('Products page').page(config.baseUrl);

// Tests

test('User should be able to add items successfully to the cart', async (t) => {
    await loginPage.automatedLogin();
    await productsPage.addToCart();
    await t.expect(productsPage.shoppingCartContainer.exists).ok();
    await productsPage.goToCart();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/cart.html');
    await t.expect(productsPage.cartHasItem.exists).ok();
})

test('User should be able to remove items successfully from the cart', async (t) => {
    await loginPage.automatedLogin();
    await productsPage.addToCart();
    await t.expect(productsPage.shoppingCartContainer.exists).ok();
    await productsPage.removeFromCart();
    await t.expect(productsPage.shoppingCartContainer.exists).notOk(); 
    await productsPage.goToCart();
    await t.expect(productsPage.cartHasItem.exists).notOk();
})
