// @ts-check
const { test, expect } = require('@playwright/test');

test('ทดสอบ Workshop @group1', async ({ page }) => {
  await test.step('Step 1', async () => {
    
    await page.goto('https://demo-frontend-reactjs.vercel.app');
    
    await expect(page.getByTestId('message_text')).toHaveText("Call REST API");
    await expect(page.getByTestId('hello_text')).toHaveText('Hello World!');
    });
});