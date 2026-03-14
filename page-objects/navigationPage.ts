import { Page } from '@playwright/test'
import { HelperBase } from './helperBase'

export class NavigationPage extends HelperBase {

    constructor( page: Page) {
        super(page)
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        //await this.page.waitForTimeout(1000)
        await this.page.getByText('Datepicker').click()
    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGroupMenuItem(groupItemTitleName: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitleName)
        const expectedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expectedState == 'false') {
            await groupMenuItem.click()
        }
    }
}

