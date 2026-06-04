
import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import data from "../utilities/testData.json"

//before each hook
test.beforeEach(async ({ page }) => 
    {
        await page.goto("https://www.demoblaze.com/index.html");
    });

//after each hook
test.afterEach(async ({ page }, testInfo) => 
    {
        if (testInfo.status === "failed")
        {
            await page.screenshot({ path: `screenshots/${testInfo.title}.`, fullPage: true });
        }
    });


test("Login test ", async ({ page }: { page: any }) => 
    {

         const obj = new LoginPage(page);
         //await obj.DoLogin("prince177", "prince177");
        await obj.DoLogin(data.users[0].username, data.users[0].password);
        await obj.DoLogin(data.users[1].username, data.users[1].password);

        

        //validation 
        expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");

        //logout 
        await page.locator('//a[@id="logout2"]').click();


    });

test("Sign up test ", async ({ page }: { page: any }) =>
{
        const obj = new LoginPage(page);
        await obj.signup();
})