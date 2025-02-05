import { defineConfig } from '@playwright/test';

export interface Target {
  fuckWho?: string,
  fuckWhere: string,
};

export const projectConfig = {
  phoneNumber: '',
  chromeUserDataDir: '',
};

export default defineConfig({
  testDir: './scrapers',
  timeout: 1 * 60 * 60 * 1000,
  use: {
    baseURL: 'https://www.xiaohongshu.com/',
  }
});
