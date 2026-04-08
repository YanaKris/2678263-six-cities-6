import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.route('**/login', async (route) => {
    if (route.request().method() === 'POST') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          token: 'fake-token',
        }),
      });
    } else {
      await route.continue();
    }
  });

  await loginPage.open();

  await loginPage.login('test@mail.com', '123abc');

  await expect(page).toHaveURL('http://localhost:5173/');
});
