import {expect} from '@playwright/test'
import {test} from '../test-options'

test.beforeEach(async({page, globalsQaUrl}) => {
    await page.goto(globalsQaUrl)
})

test('drag & drop with iframes', async({page}) => {

    const iframe = page.frameLocator("[rel-title='Photo Manager'] iframe")
    await iframe.locator('li', {hasText: "High Tatras 2"}).dragTo(iframe.locator('#trash'))

    //more precise control
    await iframe.locator('li', {hasText: "High Tatras 4"}).hover()
    await page.mouse.down()
    await iframe.locator('#trash').hover()
    await page.mouse.up()

   await expect(iframe.locator('#trash li h5')).toHaveText(['High Tatras 2', 'High Tatras 4'])
})