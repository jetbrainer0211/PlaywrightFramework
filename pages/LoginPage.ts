import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginBtn: Locator;
    readonly errorLoginMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.passWord = page.getByPlaceholder("Password");
        this.loginBtn = page.getByRole("button", { name: "Login   " });
        this.errorLoginMessage = page.getByRole('paragraph');
    }

    async openApp() {
        await this.page.goto(process.env.BASE_URL + '/admin/login');
    }
    async login(userNameVal: string, passWordVal: string) {
        await this.userName.fill(userNameVal);
        await this.passWord.fill(passWordVal);
        await this.loginBtn.click();
    }
}