import { Page, Locator } from "@playwright/test";

export default class ADTPage {
  readonly page: Page;
  public ADT: {
    ADTLink: Locator;
    searchBar: Locator;
    admittedPatientsTab: Locator;
    moreOptionsButton: Locator;
    changeDoctorOption: Locator;
    changeDoctorModal: Locator;
    updateButton: Locator;
    fieldErrorMessage: Locator;
    counterItem: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.ADT = {
      ADTLink: page.locator(''),
      searchBar: page.locator(""),
      admittedPatientsTab: page.locator(''),
      moreOptionsButton: page.locator(``),
      changeDoctorOption: page.locator(''),
      changeDoctorModal: page.locator(''),
      updateButton: page.locator(''),
      fieldErrorMessage: page.locator(``),
      counterItem: page.locator(""),
    };
  }

  /**
   * @Test14
   * @description This test verifies that the error message "Select doctor from the list." is displayed 
   *              when the user attempts to update the doctor without selecting a value.
   * @expected The error message "Select doctor from the list." is shown near the field.
   */
  async verifyFieldLevelErrorMessage() {
    // Write your logic here
  }
}