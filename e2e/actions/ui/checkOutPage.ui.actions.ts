import { Selector, t } from 'testcafe'

// Selectors

const checkOutBtn = Selector('[id="checkout"]');
const firstNameField =  Selector('[id="first-name"]');
const lastNameField = Selector('[id="last-name"]');
const zipCodeField =  Selector('[id="postal-code"]');
const continueBtn = Selector('[id="continue"]');
const finishBtn = Selector('[id="finish"]');

// Actions

const clickCheckOut = () => t.click(checkOutBtn);
const enterFirstName = (firstName: string) => t.typeText(firstNameField, firstName);
const enterLastName = (lastName: string) => t.typeText(lastNameField, lastName);
const enterZipCode = (zipCode: string) => t.typeText(zipCodeField, zipCode);
const clickContinue = () => t.click(continueBtn);
const clickFinish = () => t.click(finishBtn);

// Steps

export const checkOut = async () => {
    await clickCheckOut();
  };

export const userInfo = async (firstName: string, lastName: string, zipCode: string) => {
    await enterFirstName(firstName);
    await enterLastName(lastName);
    await enterZipCode(zipCode);
  };

export const continueButton = async () => {
    await clickContinue();
  };

export const finishButton = async () => {
    await clickFinish();
  };