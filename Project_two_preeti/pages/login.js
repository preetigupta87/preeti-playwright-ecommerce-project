class loginpage{

    constructor(page){
        this.page =page;
        this.username =page.locator('#user-name');
        this.password =page.locator('#password');
        this.Lbutton =page.locator('#login-button');

    }

    async launchpage()
    {
await this.page.goto('https://www.saucedemo.com/');

    }

    async logincredentials(username, password)
    {
 await this.username.fill(username);
 await this.password.fill(password);
 await this.Lbutton.click();

    }

async openAndLogin(username, password)
{
 const callM = new loginpage();
 await callM.launchpage();
 await callM.logincredentials(username, password);

}

}
module.exports = {loginpage};