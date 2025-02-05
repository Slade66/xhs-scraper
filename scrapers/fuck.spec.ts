import { test } from '@playwright/test';
import { Target } from '../playwright.config';

const target: Target = {
    fuckWho: 'Sweetie',
    fuckWhere: 'https://www.xiaohongshu.com/user/profile/6216d592000000001000af11',
}

test('XHS Login', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(target.fuckWhere);
        
    await page.pause();
});
