import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/pages/ai/chatgpt/': [
    {
      text: 'ChatGpt',
      collapsed: false,
      items: [
        { text: 'chatgpt初体验', link: '/pages/ai/chatgpt/index1' },
        { text: '体验chatgpt官网教程node版本demo', link: '/pages/ai/chatgpt/index2' },
      ],
    },
  ],
}
