(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{377:function(t,v,_){"use strict";_.r(v);var s=_(4),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"渲染引擎渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎渲染"}},[t._v("#")]),t._v(" 渲染引擎渲染")]),t._v(" "),v("ul",[v("li",[t._v("构建dom树")]),t._v(" "),v("li",[t._v("构建css树")]),t._v(" "),v("li",[t._v("构建渲染树")]),t._v(" "),v("li",[t._v("节点渲染")]),t._v(" "),v("li",[t._v("页面布局")])]),t._v(" "),v("h2",{attrs:{id:"js引擎执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js引擎执行"}},[t._v("#")]),t._v(" js引擎执行")]),t._v(" "),v("ul",[v("li",[t._v("词法分析")]),t._v(" "),v("li",[t._v("语法分析（生成语法树）")]),t._v(" "),v("li",[t._v("代码生成")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("浏览器工作大体流程渲染引擎首先通过网络获得所请求文档的内容，通常以8K分块的方式完成。")])]),t._v(" "),v("h2",{attrs:{id:"渲染引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎"}},[t._v("#")]),t._v(" 渲染引擎")]),t._v(" "),v("p",[t._v("下面是渲染引擎在取得内容之后的"),v("strong",[t._v("基本流程")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("解析html为dom树，解析css为cssom。渲染引擎开始解析html，并将标签转化为内容树中的dom节点。")]),t._v(" "),v("li",[t._v("把dom和cssom结合起来生成渲染树(render)。接着，它解析外部CSS文件及style标签中的样式信息。这些样式信息以及html中的可见性指令将被用来构建另一棵树——render树。Render树由一些包含有颜色和大小等属性的矩形组成，它们将被按照正确的顺序显示到屏幕上。")]),t._v(" "),v("li",[t._v("布局渲染树，计算几何形状。Render树构建好了之后，将会执行布局过程，它将确定每个节点在屏幕上的确切坐标。")]),t._v(" "),v("li",[t._v("把渲染树展示到屏幕上。再下一步就是绘制，即遍历render树，并使用UI后端层绘制每个节点。")])]),t._v(" "),v("h2",{attrs:{id:"回流与重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[t._v("#")]),t._v(" 回流与重绘")]),t._v(" "),v("h3",{attrs:{id:"重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),v("p",[t._v("当元素属性发生改变且不影响布局时（背景颜色、透明度、字体样式等），产生重绘，相当于 不刷新页面，动态更新内容。")]),t._v(" "),v("h3",{attrs:{id:"回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[t._v("#")]),t._v(" 回流")]),t._v(" "),v("p",[t._v("当元素属性发生改变且影响布局时（宽度、高度、内外边距等），产生回流，相当于 刷新页面。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("重绘不一定引起回流，回流必将引起重绘")])]),t._v(" "),v("h3",{attrs:{id:"如何减少回流和重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何减少回流和重绘"}},[t._v("#")]),t._v(" 如何减少回流和重绘？")]),t._v(" "),v("ul",[v("li",[t._v("使用 "),v("code",[t._v("transform")]),t._v(" 替代 "),v("code",[t._v("top")])]),t._v(" "),v("li",[t._v("使用 "),v("code",[t._v("visibility")]),t._v(" 替换 "),v("code",[t._v("display: none")]),t._v(" ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),t._v(" "),v("li",[t._v("不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局")]),t._v(" "),v("li",[t._v("动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用"),v("code",[t._v("requestAnimationFrame")])]),t._v(" "),v("li",[t._v("CSS 选择符从右往左匹配查找，避免节点层级过多")]),t._v(" "),v("li",[t._v("将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);