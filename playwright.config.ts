import { defineConfig } from '@playwright/test';

export interface Target {
  fuckWho?: string,
  fuckWhere: string,
};

export default defineConfig({
  testDir: './scrapers',
  use: {
    baseURL: 'https://www.xiaohongshu.com/',
  }
});
