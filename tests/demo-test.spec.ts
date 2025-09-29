import { expect } from '@playwright/test';
// import { test } from '../fixtures/pom-fixture';
// import { test } from '../fixtures/common-fixtures';
import { test } from '../fixtures/hooks-fixtures';


test('Login', async ({ page, loginPage, goToUrl}) => {
  // await loginPage.openApp();
  console.log(await page.title());
});


