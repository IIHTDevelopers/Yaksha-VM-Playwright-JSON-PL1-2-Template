import { Locator, Page } from "@playwright/test";

export class SubstorePage {
    readonly page: Page;
    public substore: {
        substoreLink: Locator;
        selectSubstore: Locator;
        inventoryRequisition: Locator;
        consumption: Locator;
        reports: Locator;
        patientConsumption: Locator;
        return: Locator;
        inventory: Locator;
        signoutCursor: Locator;
        tooltip: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.substore = {
            substoreLink: page.locator(''),
            selectSubstore: page.locator(''),
            inventoryRequisition: page.locator(''),
            consumption: page.locator(''),
            reports: page.locator(''),
            patientConsumption: page.locator(''),
            return: page.locator(''),
            inventory: page.locator(``),
            signoutCursor: page.locator(``),
            tooltip: page.locator(``),
        }
    }

    /**
     * @Test11
     * @description : This method verifies that the user is able to navigate between the sub modules.
     * @expected : Ensure that it should navigate to each sections of the "substore" module 
     */
    async verifyNavigationBetweenSubmodules() {
        // Write your logic here
    }

    /**
    * @Test12
    * @description This method verifies the tooltip text displayed when hovering over the cursor icon in the Inventory tab.
    * @expected
    * Tooltip text should contain: **"To change, you can always click here."**
    */
    async verifyTooltipText() {
        // Write your logic here
    }

    /**
     * @Test13
     * @description This method navigates to the Inventory Requisition section, captures a screenshot of the page, 
     *              and saves it in the screenshots folder.
     * @expected
     * Screenshot of the page is captured and saved successfully.
     */
    async captureInventoryRequisitionScreenshot() {
        // Write your logic here
    }
}