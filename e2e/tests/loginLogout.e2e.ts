import config from '../utils/config'
import { Selector, ClientFunction } from 'testcafe'
import * as loginPage from '../actions/ui/loginLogoutPage.ui.actions'
import {loginUser} from '../utils/constants'

const getLocation = ClientFunction(() => document.location.href);

fixture('Login page').page(config.baseUrl);

// Tests

test('User should be able to login successfully with Valid credentials', async (t) => {
    await loginPage.userLogin(loginUser.validUserName, loginUser.validpassword);
    await t.expect(getLocation()).contains('https://www.saucedemo.com/inventory.html');
})

test('User should not be able to login with Invalid credentials', async (t) => {
    await loginPage.userLogin(loginUser.validUserName, loginUser.invalidPassword);
    await t.expect(Selector('html').textContent).contains('Epic sadface: Username and password do not match any user in this service');
    await t.expect(Selector('html').textContent).contains('Accepted usernames are:');
})

test('User should be able to logout successfully', async (t) => {
    await loginPage.userLogin(loginUser.validUserName, loginUser.validpassword);
    await t.expect(getLocation()).contains('https://www.saucedemo.com/inventory.html');
    await loginPage.openBurgerMenu();
    await loginPage.userLogout();
    await t.expect(Selector('html').textContent).contains('Accepted usernames are:');
})
