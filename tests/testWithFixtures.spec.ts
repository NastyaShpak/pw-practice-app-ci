import { test } from '../test-options'
import {faker} from '@faker-js/faker'

/*test.beforeEach(async({page}) => {
    await page.goto('/')
})*/

test('parametrized methods', async({pageManager}) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    //await pageManager.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await pageManager.onFormLayoutPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
})
    