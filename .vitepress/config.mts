import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig, PageData } from 'vitepress'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "Library",
  description: "MyLibrary",
  themeConfig: {
    outlineTitle:"目錄",
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
      {text:'記錄類',link:'shouye_jilu'},
      {text:'學習類',link:'/shouye_xuexi'},
      {text:'雜項類',link:'/shouye_zaxiang'}
      ] 
      },
      { text: '工具' ,items:[
      {text:'CTFtools',link:'http://www.hiencode.com/'},
      {text:'HEx在線',link:'https://hexed.it/zh/'},
      {text:'python引導',link:'https://docs.python.org/zh-cn/3.11/'},
      {text :'excalidraw',link :'https://excalidraw.com/'},
      ] 
      },
      {text:'友情鏈接',items:[
      {text:'FREEBUF',link:'https://www.freebuf.com/'},
      {text:'黄哥的博客',link:'http://jerryhuang.eu.org/'}
      ]
      }
    ],

    sidebar: [
      {
        text: '學習類',
        collapsed: false,
        items: [
          { text: '介紹',link:'/shouye_xuexi'},         
          { text: 'Markdown語法', link: '/markdown-examples' },
          { text: 'RE',
            collapsed: true,
            items:[
            {text : 're入门1',link:'/study/re/rumen1'},
            {text :'re入门2' ,link:'/study/re/rumen2'},
            {text:'re工具使用',link:'/study/re/rmdongtaitiaoshi1'},
            {text :'部分IDA使用',link :'/study/re/IDA1'},
            {text :'HowToFindMain',link :'/study/re/How_to_find_main'}
            ]},
        { text: 'Windows_SDK',
            collapsed: true,
            items:[
            {text:'WinSdK',link :'/study/winsdk/myWrong'},
            {text:'Win2SdK',link :'/study/winsdk/My2Wrong'},
            {text:'Win_Kr_Sdk_1',link:'/study/winsdk/WindowsSdk_Kr_1'},
            {text:'Win_Kr_Sdk_2',link:'/study/winsdk/WindowsSdk_Kr_2'},
            {text:'Win_Kr_Sdk_2.5_ProMax',link:'/study/winsdk/WindowsSdk_Kr_2.5'},
            {text:'Win_Kr_Sdk_3',link:'/study/winsdk/WindowsSdk_Kr_3'},
            {text:'Win_Kr_Sdk_3.5_ProMax',link:'/study/winsdk/WindowsSdk_Kr_3.5'},
            {text:'Win_Kr_Sdk_4',link:'/study/winsdk/WindowsSdk_Kr_4'},
            {text:'Win_Kr_Sdk_4.5_ProMax',link:'/study/winsdk/WindowsSdk_Kr_4.5'},
            {text:'Win_Kr_Sdk_5',link:'/study/winsdk/WindowsSdk_Kr_5'},
            {text:'Win_Kr_Sdk_5.5ProMax',link:'/study/winsdk/WindowsSdk_Kr_5.5'},
            {text:'WindowsSdk 6.0 (完结)',link:'/study/winsdk/WindowsSdk_Kr_6'},
            {text:'WindowsSDK查表(持续更新同步)',link:'/study/winsdk/SDK_All',},
            
            ]},
        
        
        
        { text: 'Windows_MFC开发',
            collapsed: true,
            items:[
            {text:'WindowsMFC_01',link :'/study/MFC/WindowsMFC_01'},
            {text:'WindowsMFC_1.5_ProMax',link :'/study/MFC/WindowsMFC_1.5'},
            {text:'WindowsMFC_02',link :'/study/MFC/WindowsMFC_02'},
            {text:'WindowsMFC_2.5_ProMax',link :'/study/MFC/WindowsMFC_2.5'},
            {text:'WindowsMFC_3.0_MINI',link :'/study/MFC/WindowsMFC_3.0'},
            {text:'WindowsMFC_4.0',link :'/study/MFC/WindowsMFC_4.0'},
            {text:'WindowsMFC_4.5',link :'/study/MFC/WindowsMFC_4.5'},
            {text:'WindowsMFC_5.0',link :'/study/MFC/WindowsMFC_5.0'},
            {text:'WindowsMFC_5.5',link :'/study/MFC/WindowsMFC_5.5'},
            {text:'WindowsMFC_5.5.1简易实验',link :'/study/MFC/WindowsMFC_5.5.1'},
            {text:'WindowsMFC_6.0初探序列化反序列化',link :'/study/MFC/WindowsMFC_6.0'},
            {text:'WindowsMFC_EX_A',link :'/study/MFC/WindowsMFC_EX_A'},
        
        ]},
        { text: 'Windows',
            collapsed: true,
            items:[
            {text:'WinSdK',link :'/study/Windows/Windows_1'},
           
            ]},
        
        ]
        
},
      {
       text:'記錄類',
       collapsed: false,
       items:[
       {text:'介紹',link:'shouye_jilu'},
       {text:'C++',
       collapsed: true,
       items:[{text: 'C++(1)',link:'/jilu/C++/c++_(1)' },
             {text: 'C++(2)',link:'/jilu/C++/c++_(2)'},
             {text:'C++(3)',link:'/jilu/C++/c++_(3)'},
             {text:'C++(4)',link:'/jilu/C++/c++_(4)'},
             {text:'C++(5)',link:'/jilu/C++/c++_(5)'},
             {text:'C++(6)',link:'/jilu/C++/c++_(6)'},
             {text:'c++文件流',link:'/jilu/C++/c++1'},
       ]},
       
       ]
      },
      {
      text:'雜項類',
      collapsed: false,//折叠
      items:[{text:'介紹',link:'/shouye_zaxiang'},     
              {text:'ISCC国赛题解', 
              collapsed: true,
              items:[{text:'msic',
              collapsed: true,
              items:[
              {text:'2024ISCC 国赛的工业互联网流量分析题的题解 ',link:'/zaxiang/ISCC/misc/ISCC_gongye'},
                    {text:'2024ISCC num_is_the_key',link:'/zaxiang/ISCC/misc/ISCC_num'},
                    
                    ]},
                                                                                    
              {text:'re',
              collapsed: true,
              items:[
              {text:'2024ISCC re 迷失之门' , link:'/zaxiang/ISCC/re/mishi'},
              
              ]},                                                                      
                                                                                    ]},
                      
    ]
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/too1-666' },
      {icon:{svg:'<svg t="1716206795729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2678" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#333333" p-id="2679"></path><path d="M719.36 416c2.048 0.256 17.664-3.072 18.176-2.048 0.768 1.28 7.936 51.712 6.144 51.968s-14.592 3.328-14.592 3.328c-1.024-6.656-9.472-48.896-9.728-53.248m25.088-4.864l6.912 54.016c3.584 0 17.664-1.28 18.944-1.28-2.048-20.48-5.376-52.736-5.376-52.736-6.912-1.28-13.824-1.28-20.48 0m-13.568 74.752s30.72-7.68 41.728-4.096c5.632 20.48 15.872 134.912 16.896 139.52-7.168 0.768-29.952 2.816-31.744 3.328-1.28-8.448-26.88-133.376-26.88-138.752M844.8 417.28c1.792 0.512 18.176-1.792 18.176-0.512 0.256 4.096 2.048 52.224 0 52.224l-14.848 1.28c-0.256-6.656-3.84-48.64-3.328-52.992m24.832-1.28l1.28 53.248c3.584 0 17.408 0.768 18.944 0.768-0.256-20.48 0-52.736 0-52.736-6.656-1.024-13.312-1.536-20.224-1.28m-21.248 71.68s31.232-4.096 41.984 0.768c2.304 23.808 2.048 135.168 2.304 140.032-7.168 0-29.952 0.256-31.744 0.768-0.256-8.96-13.056-136.192-12.544-141.568m-72.96-137.216c18.176 92.16 32 249.856 32.256 260.096 0 0 14.336 0.256 30.464 1.28-9.472-99.328-20.992-258.304-20.992-263.168-3.84-4.352-41.728 2.048-41.728 1.792m-39.936 218.368c-3.584-25.856-96-55.296-148.224-45.824 0 0-6.4-56.832-8.96-112.384-2.048-47.36-0.256-93.696 0-101.12-3.584-2.56-40.96 15.36-61.184 22.784 0 0 24.32 102.656 41.728 315.392 0 0 28.16 3.072 76.288-6.4 48.128-9.216 105.216-38.144 100.352-72.448m-113.152 46.592l-8.192-58.624c2.048-1.024 51.968 17.664 57.344 20.992-0.768 3.584-49.152 37.632-49.152 37.632m-288.768-199.424c2.048 0.256 17.664-3.072 18.176-2.048 0.512 1.28 7.936 51.712 6.144 51.968-1.792 0.256-14.848 3.328-14.848 3.328-0.768-6.912-9.216-48.896-9.472-53.248m24.832-4.864l6.912 54.016c3.584 0 17.664-1.28 18.944-1.28-2.048-20.48-5.376-52.736-5.376-52.736-6.912-1.536-13.824-1.536-20.48 0m-13.568 74.752s30.72-7.68 41.728-4.096c5.632 20.48 15.872 134.912 16.896 139.52-7.168 0.768-29.952 2.816-31.744 3.328-1.024-8.192-26.88-133.12-26.88-138.752m113.92-68.608c1.792 0.512 18.176-1.792 18.176-0.512 0.256 4.096 2.048 52.224 0.256 52.224l-14.848 1.28c-0.512-6.4-3.84-48.384-3.584-52.992m24.832-1.28l1.28 53.248c3.584 0 17.408 0.768 18.944 0.768-0.256-20.48 0-52.736 0-52.736-6.656-1.024-13.312-1.536-20.224-1.28m-21.248 71.424s31.232-4.096 41.984 0.768c2.304 23.808 2.048 135.168 2.304 140.032-7.168 0-29.952 0.256-31.744 0.768 0-8.704-13.056-136.192-12.544-141.568m-72.96-136.96c18.176 92.16 32 249.856 32.256 260.096 0 0 14.336 0.256 30.464 1.28-9.472-99.328-20.992-258.304-20.992-263.68-3.84-4.096-41.728 2.304-41.728 2.304m-39.68 218.368c-3.584-25.856-96-55.296-148.224-45.824 0 0-6.4-56.832-8.96-112.384-2.048-47.36-0.256-93.696 0-101.12-3.328-2.304-40.96 15.36-61.184 22.784 0 0 24.32 102.656 41.728 315.392 0 0 28.16 3.072 76.288-6.4 48.128-9.216 105.216-38.144 100.352-72.448m-113.152 46.592l-8.192-58.624c2.048-1.024 51.968 17.664 57.344 20.992-1.024 3.584-49.152 37.632-49.152 37.632" fill="#FFFFFF" p-id="2680"></path></svg>'
      },
      link:'https://www.bilibili.com/video/BV12S411c7TY/'
      },
      
    ],
    footer:{
    copyright:"Copyright © 2024 "
    }
  },
/* 站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    // hostname 为线上域名
    const sitemap = new SitemapStream({ hostname: 'https://e1elibrary.com/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
  


})




//....