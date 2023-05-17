import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import type { PageData } from 'vitepress'
import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { algolia, head, nav, sidebar } from './configs'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []
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
  /* 生成站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
    }
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://notes.sunguojia.com/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
    await new Promise(resolve => writeStream.on('finish', resolve))
  },
})
