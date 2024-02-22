// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้เข้าสู่ระบบ Facebook แล้วโพสต์ status "Hello Playwright" @group1', async ({ page }) => {

  await test.step('Step 1: เข้าสู่ระบบ Facebook', async () => {
    await page.goto('https://www.facebook.com');

    //ตรวจสอบ Input Fields ว่าสามารถใช้งานได้
    const emailFields = page.locator('#email');
    await expect(emailFields).toBeEnabled();

    await expect(page.locator('#email')).toBeEnabled();
    await expect(page.locator('#pass')).toBeEnabled();

    const passwordFields = page.locator('#pass');
    await expect(passwordFields).toBeEnabled();
    
    //กรอกชื่อผู้ใช้และรหัสผ่าน
    await page.getByTestId('royal_email').fill('กรอก email');
    const emailCheck = page.locator('#email');
    await expect(emailCheck).toHaveValue('ชื่อ email');

    await page.getByTestId('royal_pass').fill('กรอก รหัสผ่าน');
    const passwordCheck = page.locator('#pass');
    await expect(passwordCheck).toHaveValue('รหัสผ่าน');

    //เข้าสู่ระบบ 
    const Login = await page.getByTestId('royal_login_button')
    await Login.press('Enter');
  });

  await test.step('Step 2: โพสต์ข้อความ ว่า "Hello Playwright"', async () => {
    await page.goto('https://www.facebook.com');
    
    //ตรวจสอบ Input Fields ว่าสามารถใช้งานได้
    await expect(page.getByLabel('สร้างโพสต์')).toContainText('คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน');   
   
    const postMessage = page.getByLabel('สร้างโพสต์');
    await expect(postMessage).toBeEnabled();

    // กรอกข้อความ "Hello Playwright"
    await page.getByRole('button', { name: 'คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน' }).click();
    await page.getByLabel('คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน').fill('Hello Playwright');
    //await page.getByLabel('ถัดไป', { exact: true }).click();
    await page.getByLabel('โพสต์', { exact: true }).click();

    //ตรวจสอบ ข้อความ
    await page.goto('https://www.facebook.com');
    await expect(page.getByText('Hello Playwright')).toBeVisible();
  });
});