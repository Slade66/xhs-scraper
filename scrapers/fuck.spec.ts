import { test, chromium } from '@playwright/test';
import { Target, projectConfig } from '../playwright.config';

const target: Target = {
    fuckWho: 'Sweetie',
    fuckWhere: 'https://www.xiaohongshu.com/user/profile/6216d592000000001000af11',
}

test('XHS fetch User Data', async () => {

    const context = await chromium.launchPersistentContext(projectConfig.chromeUserDataDir, {
        headless: false,
        channel: 'chrome'
    });

    const page = await context.newPage();
    await page.goto(target.fuckWhere);

    // await page.pause();
});
