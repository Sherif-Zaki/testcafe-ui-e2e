import config from '../utils/config'
import { ClientFunction, Selector } from 'testcafe'
import * as productsPage from '../actions/ui/productsPage.ui.actions'
import * as loginPage from '../actions/ui/loginLogoutPage.ui.actions'
import * as checkOutPage from '../actions/ui/checkOutPage.ui.actions'
import {userInfo} from '../utils/constants'

const getLocation = ClientFunction(() => document.location.href);

fixture('Checkout page').page(config.baseUrl);

// Tests

test('User should be able to place an order successfully', async (t) => {
    await loginPage.automatedLogin();
    await productsPage.automatedAddItemToCart();
    await checkOutPage.checkOut();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/checkout-step-one.html');
    await checkOutPage.userInfo(userInfo.firstName, userInfo.lastName, userInfo.lastName);
    await checkOutPage.continueButton();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/checkout-step-two.html');
    await t.expect(productsPage.cartHasItem.exists).ok();
    await t.expect(Selector('html').textContent).contains('Sauce Labs Backpack');
    await checkOutPage.finishButton();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/checkout-complete.html');
    await t.expect(Selector('html').textContent).contains('THANK YOU FOR YOUR ORDER');
})

test('User should be able to place an empty order', async (t) => {
    await loginPage.automatedLogin();
    await productsPage.goToCart();
    await checkOutPage.checkOut();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/checkout-step-one.html');
    await checkOutPage.userInfo(userInfo.firstName, userInfo.lastName, userInfo.lastName);
    await checkOutPage.continueButton();
    await t.expect(getLocation()).contains('https://www.saucedemo.com/checkout-step-two.html');
    await checkOutPage.finishButton();
    await t.expect(Selector('html').textContent).contains('Your Shopping Cart is empty');
})
