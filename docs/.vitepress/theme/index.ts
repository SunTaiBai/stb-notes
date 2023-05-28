import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { useData, useRoute } from 'vitepress'
import './style/index.scss'
import 'uno.css'
import { h, nextTick, onMounted, watch } from 'vue'
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
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'rgb(0 0 0 / 38%)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}
