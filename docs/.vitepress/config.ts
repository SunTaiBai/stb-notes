import { defineConfig } from 'vitepress'
import { head, nav, sidebar, algolia } from './configs'
const isProd = process.env.NODE_ENV === 'production'
export default defineConfig({
    outDir: '../dist',
    base: '/',
    title: '猩猩点灯',
    description: '',
    lang: 'cn-ZH',
    lastUpdated: false,
    cleanUrls: true,
    /* markdown 配置 */
    markdown: {
        lineNumbers: true
    },
    head,
    themeConfig: {
        logo: '/logo.svg',
        nav,
        sidebar,
        outline: {
            level: 'deep',
            label: '本页目录'
        },
        algolia,
        socialLinks: [{ icon: 'github', link: 'https://github.com/SunTaiBai' }],
        footer: {
            message: '如有转载或 CV 的请标注本站原文地址',
            copyright: 'Copyright © 2023-SunTaiBai'
        },
    },
})
