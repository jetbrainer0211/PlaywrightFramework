import { expect } from '@playwright/test';
import { test } from '../fixtures/common-fixtures'

test('Global setup for auto login', async ({ page, loginPage, homePage, commonUtils }) => {
    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.openApp();
    await loginPage.login(decryptedUsername, decryptedPassword);
    await page.waitForURL(process.env.BASE_URL + '/admin/welcome');
    await homePage.verifyHomePageDisplay("You are successfully logged in.");
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })

})