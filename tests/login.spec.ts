import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixtures';
import loginData from '../data/login-data.json'

let decryptedUsername: string;
let decryptedPassword: string;

test.use({
    storageState: {
        cookies: [],
        origins: [],
    }
})

loginData.Testcases.forEach((item, index) => {
    test(item.Testcase, async ({ page, loginPage, homePage, goToUrl, commonUtils }) => {
        if (item.username) {
            await loginPage.login(item.username, decryptedPassword);
            await expect(loginPage.errorLoginMessage).toHaveText(item.ExpectedResult.ErrorMessage);
        } else if (item.password) {
            await loginPage.login(decryptedUsername, item.password);
            await expect(loginPage.errorLoginMessage).toHaveText(item.ExpectedResult.ErrorMessage);
        } else {
            decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
            decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
            await loginPage.login(decryptedUsername, decryptedPassword);
            await homePage.verifyHomePageDisplay(item.ExpectedResult.SuccessMessage!);
        }

    })
})

