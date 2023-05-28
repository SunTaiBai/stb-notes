# Unocss 在设置类名前缀后vscode的unocss插件不提示了

我的环境是 vue3 + vite

首先我设置unocss的前缀：
``` ts
UnoCSS({
  exclude: ['node_modules'],
  include: ['**.ts', '**.tsx', '**.vue'],
  presets: [
    presetUno(),
    presetTypography(),
    presetMini({
      prefix: 'uno-', // 这就前缀 案例：uno-flex： display：flex
    }),
  ],
})
```

到这后unocss插件就不提示了，要在根目录添加`uno.config.ts`文件：
```ts
// uno.config.ts
import { defineConfig, presetMini } from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      prefix: 'uno-'
    }),
  ],
})
```
这样就可以了(*^▽^*)