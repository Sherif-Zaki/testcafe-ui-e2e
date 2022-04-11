import { Selector, t } from 'testcafe'

// Selectors

const addToCartBtn = Selector('[id="add-to-cart-sauce-labs-backpack"]');
const removeFromCartBtn = Selector('[id="remove-sauce-labs-backpack"]');
const goToCartBtn = Selector('.shopping_cart_link');
export const cartHasItem = Selector('.cart_quantity').withText('1');

// Actions

const clickAddToCart = () => t.click(addToCartBtn);
const clickRemoveFromCart = () => t.click(removeFromCartBtn);
const clickGoToCart = () => t.click(goToCartBtn);

// Steps

export const addToCart = async () => {
    await clickAddToCart();
  };

export const removeFromCart = async () => {
    await clickRemoveFromCart();
  };  

export const goToCart = async () => {
    await clickGoToCart();
  };

export const automatedAddItemToCart = async () =>{
  await clickAddToCart();
  await clickGoToCart();
}
// Badges

export const shoppingCartContainer = Selector('.shopping_cart_badge');

