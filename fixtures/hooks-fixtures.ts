import {test as basetest} from "./common-fixtures";
import { LoginPage } from "../pages/LoginPage"


type HookFixturesType = {
    goToUrl: any;
    logout: any
}

export const test = basetest.extend<HookFixturesType>({
    goToUrl: async({loginPage}:{ loginPage: LoginPage }, use:any) => {
        await loginPage.openApp();
        await use();
    } 
}) 