import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@core/scm-report-table$': path.resolve('src'),
    '@core/scm-report-table/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Trigger',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  styles: [
    `
      .dumi-default-previewer-demo {
        position: relative;
        min-height: 300px;
      }
    `,
  ]
});
