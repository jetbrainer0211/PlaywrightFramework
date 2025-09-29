import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly successLoginMessage: Locator;
    readonly roleAccessElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successLoginMessage = page.locator("//div[@class='alert alert-success']/p");
        this.roleAccessElement = page.getByRole('link', { name: 'Welcome admin' });
    }

    async openApp() {
        await this.page.goto(process.env.BASE_URL + '/admin/login');
    }
    async verifyHomePageDisplay(successMessage : string) {
        await expect(this.successLoginMessage).toHaveText(successMessage);
        await expect(this.roleAccessElement).toBeVisible();
    }
}