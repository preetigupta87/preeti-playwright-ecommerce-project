const {test,expect} = require('@playwright/test');
const {loginpage} = require('../pages/login');

test('page launch and login with multiple credentials with screenshots and reports', async({page}) =>
{
 const runone =new loginpage(page);
    await runone.launchpage();
    await runone.openAndLogin("standard_user", "secret_sauce");


await page.screenshot
({ path: 'screenshots/login.png', fullpage: true});

})
