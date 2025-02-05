import { test } from '@playwright/test';

test('init project', async ({ page }) => {
    await page.goto('https://www.xiaohongshu.com/');
    await page.pause();
});
