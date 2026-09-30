// vitepress client 的 @siteData 虚拟模块最小替身：
// 只有 withBase 真正消费这里的 base，值与 docs/.vitepress/config.ts 的
// siteBase 保持一致（断言内部链接时即「带 /hello-economics/ 前缀」）。
export default { base: '/hello-economics/', lang: 'zh-CN' }
