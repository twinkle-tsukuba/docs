import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default defineConfig({
  title: 'Twinkle',
  description:
    '授業予定をカレンダーに読み込み。科目検索やシラバス参照にも対応。筑波大向けの履修管理ツール',
  head: [
    ['meta', { name: 'theme-color', content: '#0099ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      {
        name: 'og:image',
        content:
          'https://storage.googleapis.com/twinkle-resouces/common/ogp-cover.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://storage.googleapis.com/twinkle-resouces/common/favicon-16.png',
        size: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://storage.googleapis.com/twinkle-resouces/common/favicon-32.png',
        size: '32x32',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://storage.googleapis.com/twinkle-resouces/common/favicon-128.png',
        size: '128x128',
      },
    ],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/twinkle-tsukuba/docs/edit/master/docs/:path',
    },
    nav: [
      {
        text: '使い方ガイド',
        link: '/guide/what-is-this',
      },
      {
        text: 'お知らせ',
        link: '/news/',
      },
      {
        text: 'Twinkleを開く',
        link: 'https://app.twinkle.nandenjin.com',
      },
    ],
    sidebar: [
      ...getSidebar({
        contentRoot: 'src',
        contentDirs: [{ path: 'guide', title: '使い方ガイド' }],
        useFrontmatter: true,
      }),
      {
        text: 'お知らせ',
        link: '/news/',
      },
    ],
  },
})
