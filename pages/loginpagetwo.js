class LoginPageOne
{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }
     async open()
     {
        await this.page.goto('https://www.saucedemo.com/');
     }
     
     
        async logintwo(username,password)
        {
           await this.username.fill(username);
            await this.password.fill(password);
           await this.loginButton.click();
        }
     }

     module.exports = {LoginPageOne};

