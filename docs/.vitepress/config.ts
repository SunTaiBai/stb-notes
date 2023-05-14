import { defineConfig } from 'vitepress'
import { algolia, head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: '/',
  title: '猩猩点灯',
  description: '',
  lang: 'cn-ZH',
  lastUpdated: true,
  cleanUrls: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  head,
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.svg',
    nav,
    sidebar,
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    algolia,
    socialLinks: [{ icon: 'github', link: 'https://github.com/SunTaiBai' }],
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: `<a target="_blank" href="https://github.com/SunTaiBai/blob/main/LICENSE">MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="https://github.com/SunTaiBai">SunTaiBai</a>`,
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
