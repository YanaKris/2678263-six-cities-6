import { test, expect } from '@playwright/test';
import { PlacesSortingPage } from './pages/places-sorting-page';
import { SORT_OPTIONS, SORT } from '../src/const';

test('user can change all sort types', async ({ page }) => {
  const sortingPage = new PlacesSortingPage(page);

  await sortingPage.open();

  for (const sortKey of SORT_OPTIONS) {
    const expectedText = SORT[sortKey];
    console.log('Selecting sort:', expectedText);

    await sortingPage.selectSort(expectedText);

    const currentSort = await sortingPage.getCurrentSortText();
    console.log('Current sort:', currentSort);

    expect(currentSort).toContain(expectedText);
  }
});
