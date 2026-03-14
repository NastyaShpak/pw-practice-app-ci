import { test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import {faker} from '@faker-js/faker'
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('navigate to form page @smoke @regression', async({page}) => {
    const pageManager = new PageManager(page)
    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.navigateTo().datepickerPage()
    await pageManager.navigateTo().toasterPage()
    await pageManager.navigateTo().smartTablePage()
    await pageManager.navigateTo().tooltipPage()
})

test('parametrized methods @smoke', async({page}) => {
    const pageManager = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
    await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
    await pageManager.onFormLayoutPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
    await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inlineForm.png'})
    await pageManager.navigateTo().datepickerPage()
    await pageManager.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    await pageManager.onDatePickerPage().selectDatepickerWithRangeFromToday(1, 5)
})

test.only('testing with agros CI', async({page}) => {
    const pageManager = new PageManager(page)
    await argosScreenshot(page, "form layouts page");
    await argosScreenshot(page, "datepicker page");
})