import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docsx/",
  head: [["link", { rel: "icon", href: "/docsx/logo.svg" }]],
  title: "Library",
  description: "MyLibrary",
  themeConfig: {
    outlineTittle:"目錄",
    outline:[2,6],
    logo:'/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    
    nav: [
      { text: '首頁', link: '/' },
      { text: '文檔內容',
      items:[
      {text:'記錄類',link:''},
      {text:'學習類',link:''},
      {text:'雜項類',link:''}
      ] 
      },
      { text: '工具' ,items:[
      {text:'CTFtools',link:'http://www.hiencode.com/'},
      {text:'HEx在線',link:'https://hexed.it/zh/'},
      {text:'python引導',link:'https://docs.python.org/zh-cn/3.11/'}
      
      ] 
      },
      {text:'友情鏈接',items:[
      {text:'FREEBUF',link:'https://www.freebuf.com/'}
      ]
      }
    ],

    sidebar: [
      {
        text: '學習類',
        items: [
          { text: '介紹',link:''},
          { text: 'Markdown語法', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
       text:'記錄類',
       items:[
       {text:'介紹',link:''}
       //{text:}
       ]
      },
      {
      text:'雜項類',
      items:[
     {text:'介紹'}      
     ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/too1-666' }
    ],
    footer:{
    Copyright:"Copyright © 2024 "
    }
  }
})
//.....