import {test} from '@playwright/test'

/*test.beforeAll(() => {

})*/

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test.describe.skip('suite 1', () => {
    test.beforeEach(async({page}) => {
    await page.getByText('Charts').click()
})

test('the first test', async ({page}) => {
    await page.getByText('Form Layouts').click()
})

test('navigate to datepicker page', async ({page}) => {
    await page.getByText('Datepicker').click()
})
})

test.describe('suite 2', () => {
    test.beforeEach(async({page}) => {
    await page.getByText('Forms').click()
})

test('the second test', async ({page}) => {
    await page.getByText('Form Layouts').click()
})

test('navigate to datepicker page second', async ({page}) => {
    await page.getByText('Datepicker').click()
})
})

//avoid these (better put logic in beforeEach)
//test.afterEach()
//test.afterAll()