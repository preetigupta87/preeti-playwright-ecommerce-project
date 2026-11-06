const {LoginPageOne} = require('../pages/loginpagetwo');
const {test, expect} = require('@playwright/test');

test ('loginpage function two',async({page}) => {

    const lp =  new LoginPageOne(page);
    await lp.open();
    await lp.logintwo('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})