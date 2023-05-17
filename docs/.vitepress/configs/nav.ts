import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '快捷导航', link: '/pages/nav/', activeMatch: '/pages/nav/' },
  {
    text: 'AI学习',
    items: [
      {
        text: 'ChatGpt', link: '/pages/ai/chatgpt/study1/',
      },
    ],
    activeMatch: '/pages/ai/',
  },
  { text: '博客', link: '/pages/blog/', activeMatch: '/pages/blog/' },
]
