import { Selector, t } from 'testcafe'
import {loginUser} from '../../utils/constants'

// Selectors

const userNameField = Selector('[id="user-name"]');
const passwordField = Selector('[id="password"]');
const loginBtn = Selector('[id="login-button"]');
const burgerMenuBtn = Selector('[id="react-burger-menu-btn"]');
const logoutBtn = Selector('[id="logout_sidebar_link"]');

// Actions

const enterUserName = (userName: string) => t.typeText(userNameField, userName);
const enterPassword = (password: string) => t.typeText(passwordField, password);
const clickLogIn = () => t.click(loginBtn);
const clickBurgerMenu = () => t.click(burgerMenuBtn);
const clickLogOut = () => t.click(logoutBtn);

// Steps

export const userLogin = async (userName: string, password: string) => {
    await enterUserName(userName);
    await enterPassword(password);
    await clickLogIn();
  };

export const automatedLogin = async () => {
    await enterUserName(loginUser.validUserName);
    await enterPassword(loginUser.validpassword);
    await clickLogIn();
  };  

export const openBurgerMenu = async () => {
    await clickBurgerMenu();
  };  

export const userLogout = async () => {
    await clickLogOut();
  };