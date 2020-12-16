module.exports = {
  title: 'ant-simple-pro',
  description: '简洁，美观，快速上手，支持3大框架，typescript',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base:'/ant-simple-pro-document/',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      { text: '指南', link: '/guide/' },
      {
        text: '生态系统',
        items: [
          { text: 'ant-simple-pro(afterEnd)', link: 'https://github.com/lgf196/ant-simple-pro/tree/afterEnd'},
          { text: 'ant-simple-pro(react)', link: 'https://github.com/lgf196/ant-simple-pro/tree/master/react'},
          { text: 'ant-simple-pro(react+ts)', link: 'https://github.com/lgf196/ant-simple-pro/tree/master/react%2Btypescript'},
          { text: 'ant-simple-pro(vue3.0)', link: 'https://github.com/lgf196/ant-simple-pro/tree/master/vue' },
          { text: 'ant-simple-pro(vue3.0+ts)', link: 'https://github.com/lgf196/ant-simple-pro/tree/master/vue%2Btypescript' },
          { text: 'ant-simple-pro(angular)', link: 'https://github.com/lgf196/ant-simple-pro/tree/angular/angular'},
        ]
      },
      {text: '捐赠', link: '/donate'},
      {
        text: 'Languages',
        items: [
          { text: '简体中文', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      {text: 'Github', link: 'https://github.com/lgf196/ant-simple-pro'}      
    ],
    sidebar:{  // 侧边栏配置 
       '/guide/':[
          {
            title:'基础',
            collapsable: false,
            sidebarDepth:1, 
            children: [
              ['','介绍'],
              ['basis/layout.md','布局']
            ]
          },
       ]
    }
  }
};