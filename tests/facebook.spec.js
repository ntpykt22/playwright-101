// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้เข้าสู่ระบบ Facebook แล้วโพสต์ข้อความ "Hello Playwright" สำเร็จ', async ({ page }) => {

  const email = (''); //กรอก email 
  const password = (''); //กรอก password
  const username = ('');  //กรอก username
  const website = ('https://www.facebook.com');

  await test.step('Step 1: เข้าสู่ระบบ Facebook @login', async () => {

    const userEmail = page.locator('#email');
    const userPassword = page.locator('#pass');
    const buttonLogin = page.getByTestId('royal_login_button')

    //เข้าไปที่หน้าเว็บไซต์เข้าสู่ระบบ
    await page.goto(website);

    //ตรวจสอบ Input Fields ว่าสามารถใช้งานได้
    await expect(userEmail).toBeEnabled();
    await expect(userPassword).toBeEnabled();
    
    //กรอกชื่อผู้ใช้และรหัสผ่าน
    await page.getByTestId('royal_email').fill(email);
    await expect(userEmail).toHaveValue(email);

    await page.getByTestId('royal_pass').fill(password);
    await expect(userPassword).toHaveValue(password);

    //เข้าสู่ระบบ 
    await buttonLogin.press('Enter');
  });

  await test.step('Step 2: โพสต์ข้อความ ว่า "Hello Playwright" @post', async () => {

    const postingMessage = page.locator('//div[contains(@class, "x1i10hfl") and contains(@class, "x1ejq31n") and contains(@class, "xd10rxx") and contains(@class, "x1sy0etr") and contains(@class, "x17r0tee") and contains(@class, "x972fbf") and contains(@class, "xcfux6l") and contains(@class, "x1qhh985") and contains(@class, "xm0m39n") and contains(@class, "x9f619") and contains(@class, "x1ypdohk") and contains(@class, "xe8uvvx") and contains(@class, "xdj266r") and contains(@class, "x11i5rnm") and contains(@class, "xat24cr") and contains(@class, "x1mh8g0r") and contains(@class, "x16tdsg8") and contains(@class, "x1hl2dhg") and contains(@class, "xggy1nq") and contains(@class, "x87ps6o") and contains(@class, "x1lku1pv") and contains(@class, "x1a2a7pz") and contains(@class, "x6s0dn4") and contains(@class, "xmjcpbm") and contains(@class, "x107yiy2") and contains(@class, "xv8uw2v") and contains(@class, "x1tfwpuw") and contains(@class, "x2g32xy") and contains(@class, "x78zum5") and contains(@class, "x1q0g3np") and contains(@class, "x1iyjqo2") and contains(@class, "x1nhvcw1") and contains(@class, "x1n2onr6") and contains(@class, "xt7dq6l") and contains(@class, "x1ba4aug") and contains(@class, "x1y1aw1k") and contains(@class, "xn6708d") and contains(@class, "xwib8y2") and contains(@class, "x1ye3gou") and @role="button"]');
    const postedMessage = page.locator('//div[contains(@class, "x1n2onr6") and contains(@class, "x1ja2u2z") and contains(@class, "x78zum5") and contains(@class, "x2lah0s") and contains(@class, "xl56j7k") and contains(@class, "x6s0dn4") and contains(@class, "xozqiw3") and contains(@class, "x1q0g3np") and contains(@class, "xi112ho") and contains(@class, "x17zwfj4") and contains(@class, "x585lrc") and contains(@class, "x1403ito") and contains(@class, "x972fbf") and contains(@class, "xcfux6l") and contains(@class, "x1qhh985") and contains(@class, "xm0m39n") and contains(@class, "x9f619") and contains(@class, "xn6708d") and contains(@class, "x1ye3gou") and contains(@class, "xtvsq51") and contains(@class, "x1r1pt67")]');
    const checkMessage = 'คุณคิดอะไรอยู่ ' + username; //เปลี่ยน "คุณคิดอะไรอยู่" หากเป็นภาษาอื่นๆ 

    //ตรวจสอบ Input Fields ว่าสามารถใช้งานได้
    await expect(postingMessage).toBeEnabled();

    //กรอกข้อความ "Hello Playwright" แล้วกดโพสต์ข้อความ
    await postingMessage.click();
    await page.getByLabel(checkMessage).fill('Hello Playwright');
    await postedMessage.click();

    //ตรวจสอบ ข้อความ
    await expect(page.getByText('Hello Playwright')).toBeVisible();
  });
});