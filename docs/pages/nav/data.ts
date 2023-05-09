import type { NavData } from '../../.vitepress/theme/types';

export const NAV_DATA: NavData[] = [
    {
        title: 'AI工具导航',
        items: [
            {
                icon: '/icons/nav/aibot.png',
                title: 'AI工具集',
                link: 'https://ai-bot.cn/',
                badge: '对话'
            },
            {
                icon: '/icons/nav/chatgpt.png',
                title: 'ChatGPT镜像站点',
                link: 'https://cc.ai55.cc',
                badge: '对话'
            },
        ]
    },
    {
        title: 'AI常用网站导航',
        items: [
            {
                icon: '/icons/nav/chatgpt.png',
                title: 'ChatGPT',
                link: 'https://chat.openai.com/chat',
                badge: '对话'
            },
            {
                icon: '/icons/nav/poe.svg',
                title: 'AI对话集成',
                link: 'https://poe.com',
                badge: '对话'
            },
            {
                icon: 'https://www.midjourney.com/apple-touch-icon.png',
                title: 'Midjourney',
                link: 'https://www.midjourney.com',
                badge: '绘画'
            },
        ]
    },
]