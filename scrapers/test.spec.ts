import { test } from '@playwright/test';

test('init project', async ({ page }) => {
    await page.goto('/');
    await page.pause();
});
