import { Page, Locator } from '@playwright/test';

export class PlacesSortingPage {
  constructor(private page: Page) {
    this.sortButton = page.locator('.places__sorting-type');
    this.optionsList = page.locator('.places__options--custom');
    this.optionItems = page.locator('.places__option');
  }

  readonly sortButton: Locator;
  readonly optionsList: Locator;
  readonly optionItems: Locator;

  async open() {
    await this.page.goto('http://localhost:5173/');
  }

  async getCurrentSortText(): Promise<string> {
    const text = await this.sortButton.textContent();
    return text ?? '';
  }

  async selectSort(sortText: string) {
    await this.sortButton.click();
    await this.optionsList.waitFor({ state: 'visible' });
    const option = this.optionItems.filter({ hasText: sortText });
    await option.click();
    await this.optionsList.waitFor({ state: 'hidden' });
  }
}
