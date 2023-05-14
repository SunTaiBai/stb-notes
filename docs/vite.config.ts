import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(() => {
  const root = process.cwd()
  const pathResolve = (pathname: string) => resolve(root, '.', pathname)
  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${pathResolve('docs/.vitepress')}/`,
        },
      ],
    },
    plugins: [MarkdownTransform(), UnoCSS(), // plugins
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }), Icons({
        compiler: 'vue3',
        autoInstall: true,
        defaultStyle: 'display: inline-block',
      })],
  }
})
