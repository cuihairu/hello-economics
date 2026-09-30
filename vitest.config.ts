import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

// theme/ 组件测试的选型：node --test 装不了 .vue SFC（需要编译与别名解析），
// Vitest 复用与站点构建同一条 vite ^6.4.3 工具链（含 pnpm-workspace 的安全
// overrides），@vue/test-utils 负责挂载与交互，happy-dom 提供 DOM 环境；
// node --test 继续跑数据/门禁黑盒用例（tests/*.test.mjs），两边互不接手。
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // 组件从 'vitepress' 具名导入 withBase——站点构建时 vitepress 插件会把它
      // 别名到 client 入口，vitest 里手动指过去（node 入口没有这些导出）
      {
        find: /^vitepress$/,
        replacement: fileURLToPath(
          new URL('node_modules/vitepress/dist/client/index.js', import.meta.url),
        ),
      },
      // client 入口顶层的 @siteData 虚拟模块：最小替身见 tests/vue/stubs/site-data.ts。
      // 斜杠形态是 vitepress data.js 里 import.meta.hot.accept('/@siteData', …) 的
      // 依赖字面量，import-analysis 会尝试解析它——同一替身接住，消掉每次跑测的告警
      {
        find: /^\/?@siteData$/,
        replacement: fileURLToPath(new URL('tests/vue/stubs/site-data.ts', import.meta.url)),
      },
    ],
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/vue/**/*.spec.ts'],
    setupFiles: ['tests/vue/setup.ts'],
    // vitepress client 入口在 node_modules 里，外部化交给 Node ESM 会栽在
    // 无扩展名相对导入上；inline 走 vite 转换管线即可正常解析（@siteData 别名同此生效）
    server: { deps: { inline: [/vitepress/] } },
  },
})
