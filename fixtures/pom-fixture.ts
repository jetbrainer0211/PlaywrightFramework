import {test as basetest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";

type PomFixturesType = {
    loginPage : LoginPage;
    homePage : HomePage;
}

export const test = basetest.extend<PomFixturesType>({
    loginPage: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    },

    homePage: async({page}, use) => {
        const homePageObj = new HomePage(page);
        await use(homePageObj);
    } 
})
