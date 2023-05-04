import { defineConfig } from 'vitepress'
export default defineConfig({
    base: '/',
    outDir: '../dist',
    title: '猩猩点灯',
    description: '',
    lang: 'cn-ZH',
    lastUpdated: true,
    /* markdown 配置 */
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: "快捷导航", link: "/pages/nav/" },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/SunTaiBai' }],
    },
})
