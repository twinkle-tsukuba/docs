const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Twinkle',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0099ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://app.twinkle.nandenjin.com/favicon-16.png', size: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://app.twinkle.nandenjin.com/favicon-32.png', size: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://app.twinkle.nandenjin.com/favicon-128.png', size: '128x128' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'お知らせ',
        link: '/news/',
      },
      {
        text: 'Twinkleを開く',
        link: 'https://twinkle.nandenjin.com',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'using-vue'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'news',
            dirname: '_news',
            path: '/news/',
            layout: 'IndexNews',
            itemLayout: 'News',
            itemPermalink: '/news/:slug',
          },
        ],
        frontmatters: [
          {
            id: 'tags',
            keys: ['tags'],
            path: '/tags/',
            layout: 'Tags',
            scopeLayout: 'Tag',
          },
        ],
      },
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'vuepress-plugin-seo',
      {
        image: () => 'https://app.twinkle.nandenjin.com/twinkle-ogp-cover.png'
      }
    ]
  ],
}
