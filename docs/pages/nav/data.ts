import type { NavData } from '../../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: 'AI工具导航',
    items: [
      {
        icon: '/icons/nav/aibot.png',
        title: 'AI工具集',
        link: 'https://ai-bot.cn/',
        badge: '对话',
      },
      {
        icon: '/icons/nav/chatgpt.png',
        title: 'ChatGPT镜像站点',
        link: 'https://cc.ai55.cc',
        badge: '对话',
      },
    ],
  },
  {
    title: 'AI常用网站导航',
    items: [
      {
        icon: '/icons/nav/chatgpt.png',
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
        badge: '对话',
      },
      {
        icon: '/icons/nav/poe.svg',
        title: 'AI对话集成',
        link: 'https://poe.com',
        badge: '对话',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        link: 'https://www.midjourney.com',
        badge: '绘画',
      },
    ],
  },
  {
    title: 'Vue生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.gitee.io/zh-CN/',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
        title: 'NativeUi',
        desc: '比较完整，主题可调，使用 TypeScript，快 有点意思',
        link: 'https://www.naiveui.com/zh-CN/light',
      },
    ],
  },
]
