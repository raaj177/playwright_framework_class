

// sign in , login , sign up, reset password etc 
import { Locator, Page } from '@playwright/test';

export class LoginPage 
{
    
    readonly page: Page;
    readonly loginlink: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    readonly signuplink: Locator;


    constructor(PageRecivedFromLoginTest: Page)
    {
        this.page = PageRecivedFromLoginTest;
        this.loginlink = PageRecivedFromLoginTest.locator('//a[@id="login2"]');
        this.username = PageRecivedFromLoginTest.locator('//input[@id="loginusername"]');
        this.password = PageRecivedFromLoginTest.locator('//input[@id="loginpassword"]');
        this.loginbutton = PageRecivedFromLoginTest.locator('(//button[@class="btn btn-primary"])[3]');
        this.signuplink = PageRecivedFromLoginTest.locator('//a[@id="signin2"]');
    }

   

    async DoLogin(uname:string, pass:string)
    {
        //await this.page.goto("https://www.demoblaze.com/index.html");

        //click on login button 
        await this.loginlink.click();


       //click on the username 
        await this.username.fill(uname);

        //click on the password 
        await this.password.fill(pass);

        //click on login 
        await this.loginbutton.click();
    }

    async signup()
{
        //await this.page.goto("https://www.demoblaze.com/index.html");

        //click on sign up button 
        await this.signuplink.click();
}
}