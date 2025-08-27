// .storybook/main.ts
import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  viteFinal: async (cfg) => {
    cfg.resolve = {
      ...(cfg.resolve ?? {}),
      alias: {
        ...(cfg.resolve?.alias ?? {}),
        '@': resolve(__dirname, '../src'),
      },
    };
    return cfg;
  },

  core: {
    disableWhatsNewNotifications: true
  }
};
export default config;
