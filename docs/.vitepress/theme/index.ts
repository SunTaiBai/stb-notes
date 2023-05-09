import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style/index.scss'
import { h, App } from 'vue'
import GitTalk from './components/git-talk.vue'
import NavBox from './components/Nav/index.vue'
export default {
    extends: DefaultTheme,
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()
        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        return h(DefaultTheme.Layout, props)
    },
    enhanceApp({ app }: { app: App }) {
        app.component("git-talk", GitTalk)
        app.component("NavBox", NavBox)
    }
}