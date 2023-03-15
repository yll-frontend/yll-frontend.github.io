(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{383:function(t,a,_){"use strict";_.r(a);var r=_(4),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http性能优化"}},[t._v("#")]),t._v(" HTTP性能优化")]),t._v(" "),a("h2",{attrs:{id:"_1-http-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-1-1"}},[t._v("#")]),t._v(" 1. HTTP 1.1")]),t._v(" "),a("p",[t._v("HTTP/1.1中大多数的网站性能优化技术都是减少向服务器发起的HTTP请求数。浏览器可以同时建立有限个TCP连接，而通过这些连接下载资源是一个线性的流程：一个资源的请求响应返回后，下一个请求才能发送。这被称为线头阻塞。")]),t._v(" "),a("p",[t._v("在HTTP/1.1中，Web开发者往往将整个网站的所有CSS都合并到一个文件。类似的，JavaScript也被压缩到了一个文件，图片被合并到了一张雪碧图上。合并CSS、JavaScript和图片极大地减少了HTTP的请求数，在HTTP/1.1中能获得显著的性能提升。")]),t._v(" "),a("p",[a("strong",[t._v("存在的问题：")]),t._v("\n为了尽可能减少请求数，需要做合并文件、雪碧图、资源内联等优化工作，但是这无疑造成了单个请求内容变大延迟变高的问题，且内嵌的资源不能有效地使用缓存机制。")]),t._v(" "),a("h2",{attrs:{id:"_2-http-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-2-0"}},[t._v("#")]),t._v(" 2. HTTP 2.0")]),t._v(" "),a("h3",{attrs:{id:"_2-1-二进制分帧传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-二进制分帧传输"}},[t._v("#")]),t._v(" 2.1 二进制分帧传输")]),t._v(" "),a("p",[t._v("帧是数据传输的最小单位，以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧。")]),t._v(" "),a("p",[t._v("原来Headers + Body的报文格式如今被拆分成了一个个二进制的帧，用"),a("strong",[t._v("Headers帧")]),t._v("存放头部字段，"),a("strong",[t._v("Data帧")]),t._v("存放请求体数据。分帧之后，服务器看到的不再是一个个完整的 HTTP 请求报文，而是一堆乱序的二进制帧。这些二进制帧不存在先后关系，因此也就不会排队等待，也就没有了 HTTP 的队头阻塞问题。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-多路复用-multiplexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-多路复用-multiplexing"}},[t._v("#")]),t._v(" 2.2 多路复用（MultiPlexing）")]),t._v(" "),a("p",[t._v("通信双方都可以给对方发送二进制帧，这种二进制帧的"),a("strong",[t._v("双向传输的序列")]),t._v("，也叫做流(Stream)。HTTP/2 用流来在一个 TCP 连接上来进行多个数据帧的通信，这就是"),a("strong",[t._v("多路复用")]),t._v("的概念。")]),t._v(" "),a("p",[t._v("在一个 TCP 连接上，我们可以向对方不断发送帧，每帧的 Stream Identifier 标明这一帧属于哪个流，然后在对方接收时，根据 Stream Identifier 拼接每个流的所有帧组成一整块数据。 把 HTTP/1.1 每个请求都当作一个流，那么多个请求变成多个流，请求响应数据分成多个帧，不同流中的帧交错地发送给对方，这就是 HTTP/2 中的多路复用。")]),t._v(" "),a("p",[t._v("流的概念实现了单连接上多请求 - 响应并行，解决了线头阻塞的问题，减少了 TCP 连接数量和 TCP 连接慢启动造成的问题。所以 http2 对于同一域名只需要创建一个连接，而不是像 http/1.1 那样创建 6~8 个连接")]),t._v(" "),a("h3",{attrs:{id:"_2-3-服务端推送-server-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-服务端推送-server-push"}},[t._v("#")]),t._v(" 2.3 服务端推送（Server Push）")]),t._v(" "),a("p",[t._v("在 HTTP/2 当中，服务器已经不再是完全被动地接收请求，响应请求，它也能新建 stream 来给客户端发送消息，当 TCP 连接建立之后，比如浏览器请求一个 HTML 文件，服务器就可以在返回 HTML 的基础上，将 HTML 中引用到的其他资源文件一起返回给客户端，减少客户端的等待。")]),t._v(" "),a("p",[t._v("Server-Push 主要是针对资源内联做出的优化，相较于 http/1.1 资源内联的优势:")]),t._v(" "),a("ul",[a("li",[t._v("客户端可以缓存推送的资源")]),t._v(" "),a("li",[t._v("客户端可以拒收推送过来的资源")]),t._v(" "),a("li",[t._v("推送资源可以由不同页面共享")]),t._v(" "),a("li",[t._v("服务器可以按照优先级推送资源")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-header-压缩-hpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-header-压缩-hpack"}},[t._v("#")]),t._v(" 2.4 Header 压缩（HPACK）")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://link.segmentfault.com/?enc=1KOjEahVHT7FmdXOxcufRg%3D%3D.BbEHfQa9r3dB3QFbYwut7rye4teUL4qhyPFYk0XVIfS36XmXC0a37AxS5L9RCdjp7bZOnh05vhDhjerWNg2InwbGQvcIj95f93zmhEVrAC8%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("HPACK"),a("OutboundLink")],1),t._v(" 算法来压缩首部内容")]),t._v(" "),a("h2",{attrs:{id:"_3-http-2-web优化最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-2-web优化最佳实践"}},[t._v("#")]),t._v(" 3. HTTP/2 Web优化最佳实践")]),t._v(" "),a("p",[t._v("HTTP/2的优化需要不同的思维方式。Web开发者应该专注于网站的"),a("strong",[t._v("缓存调优")]),t._v("，而不是担心如何减少HTTP请求数。通用的法则是，"),a("strong",[t._v("传输轻量、细粒度的资源")]),t._v("，以便独立缓存和并行传输。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVcZl9g",alt:"http-2-multiplexing.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-停止合并文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-停止合并文件"}},[t._v("#")]),t._v(" 3.1 停止合并文件")]),t._v(" "),a("p",[t._v("在HTTP/2中合并文件不再是一项最佳实践。虽然合并依然可以提高压缩率，但它带来了代价高昂的缓存失效。即使有一行CSS改变了，浏览器也会强制重新加载你 "),a("em",[t._v("所有的")]),t._v(" CSS声明。")]),t._v(" "),a("p",[t._v("另外，你的网站不是所有页面都使用了合并后的CSS或JavaScript文件中的全部声明或函数。被缓存之后倒没什么关系，但这意味着在用户第一次访问时这些不必要的字节被传输、处理、执行了。HTTP/1.1中请求的开销使得这种权衡是值得的，而在HTTP/2中这实际上减慢了页面的首次绘制。")]),t._v(" "),a("p",[t._v("Web开发者应该更加专注于缓存策略优化，而不是压缩文件。将经常改动和不怎么改动的文件分离开来，就可以尽可能利用CDN或者用户浏览器缓存中已有的内容。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-停止内联资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-停止内联资源"}},[t._v("#")]),t._v(" 3.2 停止内联资源")]),t._v(" "),a("p",[t._v("内联资源是文件合并的一个特例。它指的是将CSS样式表、外部的JavaScript文件和图片直接嵌入HTML页面中。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-停止细分域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-停止细分域名"}},[t._v("#")]),t._v(" 3.3 停止细分域名")]),t._v(" "),a("p",[t._v("细分域名是让浏览器建立更多TCP连接的通常手段。浏览器限制了单个服务器的连接数量，但是通过将网站上的资源切分到几个域上，你可以获得额外的TCP连接。它避免了线头阻塞，但也带来了显著的代价。")]),t._v(" "),a("p",[t._v("细分域名在HTTP/2中应该避免。每个细分的域名都会带来额外的DNS查询、TCP连接和TLS握手（假设服务器使用不同的TLS证书）。在HTTP/1.1中，这个开销通过资源的并行下载得到了补偿。但在HTTP/2中就不是这样了：多路复用使得多个资源可以在一个连接中并行下载。同时，类似于资源内联，域名细分破坏了HTTP/2的流优先级，因为浏览器不能跨域比较优先级。")]),t._v(" "),a("h2",{attrs:{id:"_4-一些最佳实践依然有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-一些最佳实践依然有效"}},[t._v("#")]),t._v(" 4. 一些最佳实践依然有效")]),t._v(" "),a("p",[t._v("幸运的是，HTTP/2没有改变所有的Web优化方式。一些HTTP/1.1中的最佳实践在HTTP/2中依然有效。剩下的文章讨论了这些技巧，无论你在HTTP/1.1还是HTTP/2优化都能用上。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-减少dns查询时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-减少dns查询时间"}},[t._v("#")]),t._v(" 4.1 减少DNS查询时间")]),t._v(" "),a("p",[t._v("在浏览器可以请求网站资源之前，它需要通过域名系统(DNS)获得你的服务端IP地址。直到DNS响应前，用户看到的都是白屏。HTTP/2优化了Web浏览器和服务器之间的通信方式，但它不会影响域名系统的性能。\n因为DNS查询的开销可能会很昂贵，尤其是当你从根名字服务器开始查询时，最小化网站使用的DNS查询数仍然是一个明智之举。使用HTML头部的"),a("link",{attrs:{rel:"dns-prefetch",href:"…"}}),t._v("可以帮助你提前获取DNS记录，但这不是万能的解决方案。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-静态资源使用cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-静态资源使用cdn"}},[t._v("#")]),t._v(" 4.2 静态资源使用CDN")]),t._v(" "),a("p",[t._v("内容分发网络（CDN）是一组分布在多个不同地理位置的 Web 服务器。我们都知道，当服务器离用户越远时，延迟越高。CDN 就是为了解决这一问题，在多个位置部署服务器，让用户离服务器更近，从而缩短请求时间。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-利用浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-利用浏览器缓存"}},[t._v("#")]),t._v(" 4.3 利用浏览器缓存")]),t._v(" "),a("p",[t._v("你可以进一步利用内容分发网络，将资源存储在用户的本地浏览器缓存中，除了产生一个304 Not Modified响应之外，这避免了任何形式的数据在网络上传输。")]),t._v(" "),a("h3",{attrs:{id:"_4-4-最小化http请求大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-最小化http请求大小"}},[t._v("#")]),t._v(" 4.4 最小化HTTP请求大小")]),t._v(" "),a("p",[t._v("尽管HTTP/2的请求使用了多路复用技术，在线缆上传输数据仍然需要时间。同时，减少需要传输的数据规模同样会带来好处。在请求端，这意味着尽可能多地最小化cookie、URL和查询字符串的大小。")]),t._v(" "),a("h3",{attrs:{id:"_4-5-最小化http响应大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-最小化http响应大小"}},[t._v("#")]),t._v(" 4.5 最小化HTTP响应大小")]),t._v(" "),a("p",[t._v("当然了，另一端也是这样。作为Web开发者，你会希望服务端的响应尽可能的小。你可以最小化HTML、CSS和JavaScript文件，优化图像，并通过gzip压缩资源。")]),t._v(" "),a("h3",{attrs:{id:"_4-6-减少不必要的重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-减少不必要的重定向"}},[t._v("#")]),t._v(" 4.6 减少不必要的重定向")]),t._v(" "),a("p",[t._v("HTTP 301和302重定向在迁移到新平台或者重新设计网站时难以避免，但如有可能应该被去除。重定向会导致一圈额外的浏览器到服务端往返，这会增加不必要的延迟。 你应该特别留意重定向链，上面需要多个重定向才能到达目的地址。\n像301和302这样的服务端重定向虽不理想，但也不是世界上最糟的事情。它们可以在本地被缓存，所以浏览器可以识别重定向URL，并且避免不必要的往返。元标签中的刷新(如<meta http-equiv=“refresh”…)在另一方面开销更大，因为它们无法被缓存，而且在特定浏览器中存在性能问题。")])])}),[],!1,null,null,null);a.default=v.exports}}]);