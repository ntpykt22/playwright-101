# จุดที่ต้องแก้ไข ก่อนการทดสอบ ในไฟล์ facebook.spec.js 

1. กรอก email ที่จะใช้งาน 
```
//กรอกชื่อผู้ใช้และรหัสผ่าน
    await page.getByTestId('royal_email').fill('กรอก email');
    const emailCheck = page.locator('#email');
    await expect(emailCheck).toHaveValue('ชื่อ email');
```
2. กรอก รหัสผ่าน ที่จะใช้งาน 
```
    await page.getByTestId('royal_pass').fill('กรอก รหัสผ่าน');
    const passwordCheck = page.locator('#pass');
    await expect(passwordCheck).toHaveValue('รหัสผ่าน');
```
3. กรอกชื่อผู้ใช้งาน เพื่อทำการตรวจสอบว่า ชื่อผู้ใช้งานถูกต้อง
```
await expect(page.getByLabel('สร้างโพสต์')).toContainText('คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน'); 
```

```
await page.getByRole('button', { name: 'คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน' }).click();
await page.getByLabel('คุณคิดอะไรอยู่ ชื่อผู้ใช้งาน').fill('Hello Playwright');
```

