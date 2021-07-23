const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
const imgBaseUrl = "https://sls-cloudfunction-ap-shanghai-code-1305386406.cos.ap-shanghai.myqcloud.com/"
module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Yang ll's Blog ",
  description: '总要去做一些有意义的事情',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  imgBaseUrl,
  head,
  plugins,
  themeConfig,
}
