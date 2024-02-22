// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานทำการค้นหาคำว่า หวย แล้วจะต้องเจอผลการค้นหาตาม req @group1', async ({ page }) => {
  await test.step('Step 1', async () => {
    await page.goto('https://www.google.com/');
  // Type into search box.
    const seachField = await page.locator('#APjFqb');
    await seachField.fill('หวย');
    await seachField.press('Enter');
  });

  // Assert "ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)"
  // Assert text in id=result-stats
  await test.step('Step 2', async () => {
    await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/);
    await expect(page.locator('#result-stats')).toHaveText(/รายการ/);
    await expect(page.locator('#result-stats')).toHaveText(/วินาที/);
  });

  // Assret with regular expression ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)
  await test.step('Step 3', async () => {
    await expect(page.locator('#result-stats'))
    .toHaveText(/ผลการค้นหาประมาณ (\d{1,3},\d{3},\d{3}) รายการ \((\d\.\d{2}) วินาที\)/)
  });
  
});