import { test, expect, devices } from '@playwright/test'

test.use({
    //...devices['iPhone 13 Pro'],
    //viewport: { width: 414, height: 800 },
})

 test('mobile input fields', async({page}, testInfo) => {
    await page.goto('/')
    if(testInfo.project.name === 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }
    
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

    if(testInfo.project.name === 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }

    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})

    await usingTheGridEmailInput.fill('test@test.com')
    await usingTheGridEmailInput.clear()
    await usingTheGridEmailInput.type('test2@gmail.com')
})