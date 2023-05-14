import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style/index.scss'
import 'uno.css'
import { h } from 'vue'
import 'dayjs/locale/zh-cn'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass)
      props.class = frontmatter.value.layoutClass

    return h(DefaultTheme.Layout, props)
  },
}
