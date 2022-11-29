(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{314:function(e,s,t){"use strict";t.r(s);var a=t(13),o=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"前端认证方式-session-token-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端认证方式-session-token-jwt"}},[e._v("#")]),e._v(" 前端认证方式 - Session，Token，JWT")]),e._v(" "),s("h2",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[e._v("#")]),e._v(" Session")]),e._v(" "),s("p",[e._v("session 是另一种记录服务器和客户端会话状态的机制。")]),e._v(" "),s("p",[e._v("session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中")]),e._v(" "),s("h3",{attrs:{id:"认证流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证流程"}},[e._v("#")]),e._v(" 认证流程")]),e._v(" "),s("ol",[s("li",[e._v("用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session")]),e._v(" "),s("li",[e._v("请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器")]),e._v(" "),s("li",[e._v("浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名")]),e._v(" "),s("li",[e._v("当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息\n"),s("ol",[s("li",[e._v("如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息")]),e._v(" "),s("li",[e._v("如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。")])])])]),e._v(" "),s("p",[s("strong",[e._v("SessionID 是连接 Cookie 和 Session 的一道桥梁")])]),e._v(" "),s("h3",{attrs:{id:"cookie-和-session-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session-的区别"}},[e._v("#")]),e._v(" Cookie 和 Session 的区别")]),e._v(" "),s("ul",[s("li",[e._v("安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。")]),e._v(" "),s("li",[e._v("存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。")]),e._v(" "),s("li",[e._v("有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。")]),e._v(" "),s("li",[e._v("存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。")])]),e._v(" "),s("h2",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[e._v("#")]),e._v(" Token")]),e._v(" "),s("h3",{attrs:{id:"access-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-token"}},[e._v("#")]),e._v(" Access Token")]),e._v(" "),s("p",[e._v("访问资源接口（API）时所需要的资源凭证")]),e._v(" "),s("p",[e._v("简单 token 的组成： uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）")]),e._v(" "),s("p",[e._v("特点：")]),e._v(" "),s("ul",[s("li",[e._v("服务端无状态化、可扩展性好")]),e._v(" "),s("li",[e._v("支持移动端设备")]),e._v(" "),s("li",[e._v("安全")]),e._v(" "),s("li",[e._v("支持跨程序调用")])]),e._v(" "),s("p",[e._v("Token 的身份验证流程")]),e._v(" "),s("ol",[s("li",[e._v("客户端使用用户名跟密码请求登录")]),e._v(" "),s("li",[e._v("服务端收到请求，去验证用户名与密码")]),e._v(" "),s("li",[e._v("验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端")]),e._v(" "),s("li",[e._v("客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里")]),e._v(" "),s("li",[e._v("客户端每次向服务端请求资源的时候需要带着服务端签发的 token")]),e._v(" "),s("li",[e._v("服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据")])]),e._v(" "),s("h3",{attrs:{id:"refresh-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token"}},[e._v("#")]),e._v(" Refresh Token")]),e._v(" "),s("p",[e._v("refresh token 是专用于刷新 access token 的 token。")]),e._v(" "),s("p",[e._v("如果没有 refresh token，也可以刷新 access token，但每次刷新都要用户输入登录用户名与密码，会很麻烦。有了 refresh token，可以减少这个麻烦，客户端直接用 refresh token 去更新 access token，无需用户进行额外的操作。")]),e._v(" "),s("h3",{attrs:{id:"token-与-session-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-与-session-的区别"}},[e._v("#")]),e._v(" Token 与 Session 的区别")]),e._v(" "),s("ul",[s("li",[e._v("Session 是一种记录服务器和客户端会话状态的机制，使服务端有状态化，可以记录会话信息。而 Token 是令牌，访问 API 时所需要的资源凭证。Token 使服务端无状态化，不会存储会话信息。")]),e._v(" "),s("li",[e._v("Session 和 Token 并不矛盾。\n"),s("ul",[s("li",[e._v("作为身份认证 Token 安全性比 Session 好，因为每一个请求都有签名还能防止监听以及重放攻击")]),e._v(" "),s("li",[e._v("而 Session 就必须依赖链路层来保障通讯安全了。如果你需要实现有状态的会话，仍然可以增加 Session 来在服务器端保存一些状态。")])])])]),e._v(" "),s("h2",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[e._v("#")]),e._v(" JWT")]),e._v(" "),s("p",[e._v("JWT (JSON Web Token) 是一种认证授权机制，是目前最流行的跨域认证解决方案。")]),e._v(" "),s("p",[e._v("JWT 的原理是，服务器认证以后，生成一个 JSON 对象，发回给用户。以后，用户与服务端通信的时候，都要发回这个 JSON 对象。")]),e._v(" "),s("p",[e._v("服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名（详见后文）。服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。")]),e._v(" "),s("h3",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[e._v("#")]),e._v(" 结构")]),e._v(" "),s("p",[e._v("它是一个很长的字符串，中间用点（.）分隔成三个部分。注意，JWT 内部是没有换行的，这里只是为了便于展示，将它写成了几行。")]),e._v(" "),s("p",[e._v("JWT 的三个部分依次如下。")]),e._v(" "),s("ul",[s("li",[e._v("Header（头部）")]),e._v(" "),s("li",[e._v("Payload（负载）")]),e._v(" "),s("li",[e._v("Signature（签名）\n写成一行，就是下面的样子。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Header.Payload.Signature\n")])])]),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),s("p",[e._v("客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。此后，客户端每次与服务器通信，都要带上这个 JWT。")]),e._v(" "),s("h4",{attrs:{id:"方式一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[e._v("#")]),e._v(" 方式一")]),e._v(" "),s("p",[e._v("当用户希望访问一个受保护的路由或者资源的时候，可以把它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求头信息的 Authorization 字段里，使用 Bearer 模式添加 JWT。")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[e._v("GET /calendar/v1/events\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("api.example.com")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Authorization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Bearer <token>")])]),e._v("\n")])])]),s("h4",{attrs:{id:"方式二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[e._v("#")]),e._v(" 方式二")]),e._v(" "),s("p",[e._v("跨域的时候，可以把 JWT 放在 POST 请求的数据体里。")]),e._v(" "),s("h4",{attrs:{id:"方式三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式三"}},[e._v("#")]),e._v(" 方式三")]),e._v(" "),s("p",[e._v("通过 URL 传输，例如："),s("code",[e._v("http://www.example.com/user?token=xxx")])]),e._v(" "),s("h3",{attrs:{id:"token-与-jwt-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-与-jwt-的区别"}},[e._v("#")]),e._v(" Token 与 JWT 的区别")]),e._v(" "),s("p",[e._v("相同：")]),e._v(" "),s("ul",[s("li",[e._v("都是访问资源的令牌")]),e._v(" "),s("li",[e._v("都可以记录用户的信息")]),e._v(" "),s("li",[e._v("都是使服务端无状态化")]),e._v(" "),s("li",[e._v("都是只有验证成功后，客户端才能访问服务端上受保护的资源")])]),e._v(" "),s("p",[e._v("区别：")]),e._v(" "),s("ul",[s("li",[e._v("Token：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效。")]),e._v(" "),s("li",[e._v("JWT： 将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据。")])])])}),[],!1,null,null,null);s.default=o.exports}}]);