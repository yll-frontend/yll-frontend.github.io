// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/base/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/base/#JavaScript' },
          { text: 'Html', link: 'base/#Html5' },
          { text: 'Css', link: '/base/#Css' },
          { text: 'Vue', link: '/frame/#Vue' },
        ],
      },
    ],
  },
  {
    text: '书籍',
    link: '/book/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript高级程序设计》', link: '/pages/d2f8aa/' },
        ],
      },
    ],
  },
  {
    text: '技术',
    link: '/more/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    // items: [
    //   {
    //     text: '学习笔记',
    //     items: [
    //       { text: '《JavaScript高级程序设计》', link: '/book/javascript高级程序设计/' },
    //     ],
    //   },
    // ],
  },
  // { text: '关于', link: '/about/' },
]
