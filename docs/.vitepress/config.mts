import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "wbw121124's blog and docs",
  description: "wbw121124's blog and docs.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'markdown实例', link: '/markdown-examples' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wbwdxh/' }
    ]
  },
  base: '/wbw121124-s_blog_and_docs/'
})
