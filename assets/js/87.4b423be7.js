(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{388:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xmlhttprequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest"}},[t._v("#")]),t._v(" XMLHttpRequest")]),t._v(" "),s("h2",{attrs:{id:"发送跨域的-post-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送跨域的-post-请求"}},[t._v("#")]),t._v(" 发送跨域的 POST 请求")]),t._v(" "),s("p",[t._v("场景：要使用 XMLHttpRequest 对象 POST 请求不在同一域名下的一个站点，即：跨域请求，请求数据格式为JSON。")]),t._v(" "),s("p",[t._v("需要使用 "),s("code",[t._v("setRequestHeader()")]),t._v(" 方法设置 Content-Type 为"),s("code",[t._v("application/json")]),t._v(" 。设置完这个自定义的HTTP Headers后，发现原本可以跨域POST请求失效了。调试对应的服务端代码，发现POST请求变成了OPTIONS请求。")]),t._v(" "),s("p",[t._v("这与CORS（Cross-Origin Resource Sharing，跨站资源共享）策略有关，设置Content-Type后，CORS简单请求变为Preflighted 请求。在Preflighted 请求中，XMLHttpRequest对象会首先发送OPTIONS嗅探，以验证是否有对指定站点的访问权限。")]),t._v(" "),s("h2",{attrs:{id:"xhr-跨域请求分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xhr-跨域请求分类"}},[t._v("#")]),t._v(" XHR 跨域请求分类")]),t._v(" "),s("p",[t._v("XHR对象对于HTTP跨域请求有三种：简单请求、Preflighted 请求、Preflighted 认证请求。")]),t._v(" "),s("p",[t._v("简单请求不需要发送OPTIONS嗅探请求，但只能按发送简单的GET、HEAD或POST请求，且不能自定义HTTP Headers。")]),t._v(" "),s("p",[t._v("Preflighted 请求和认证请求，XHR会首先发送一个OPTIONS嗅探请求，然后XHR会根据OPTIONS请求返回的 Access-Control-* 等头信息判断是否有对指定站点的访问权限，并最终决定是否发送实际请求信息。")]),t._v(" "),s("h3",{attrs:{id:"简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),s("p",[t._v("使用简单请求进行跨域访问时，XMLHttpRequest对象会直接将实际请求发送给服务器。简单请求具有如下特点：")]),t._v(" "),s("ul",[s("li",[t._v("只能使用GET、HEAD、POST方法。")]),t._v(" "),s("li",[t._v("使用POST方法向服务器发送数据时，Content-Type "),s("strong",[t._v("只能")]),t._v(" 使用"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),s("code",[t._v("multipart/form-data")]),t._v(" 或 "),s("code",[t._v("text/plain")]),t._v(" 编码格式。")]),t._v(" "),s("li",[t._v("请求时不能使用自定义的 HTTP Headers")])]),t._v(" "),s("h3",{attrs:{id:"preflighted-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preflighted-请求"}},[t._v("#")]),t._v(" Preflighted 请求")]),t._v(" "),s("p",[t._v("Preflighted 请求与简单请求不同，Preflighted 请求首先会向服务器发送一个 Options 请求，以验证是否对指定服务有访问权限，之后再发送实际的请求。Preflighted 请求具有以下特点：")]),t._v(" "),s("ul",[s("li",[t._v("除GET、HEAD、POST方法外，XHR都会使用Preflighted 请求。")]),t._v(" "),s("li",[t._v("使用POST方法向服务器发送数据时，Content-Type 使用"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),s("code",[t._v("multipart/form-data")]),t._v(" 或 "),s("code",[t._v("text/plain")]),t._v(" 之外编码格式也会使用 Preflighted 请求。")]),t._v(" "),s("li",[t._v("使用了自定义的 HTTP Headers后，也会使用 Preflighted 请求。")])]),t._v(" "),s("p",[t._v("常见情况为发送JSON数据与服务器交互，示例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://itbilu.other/resources/post-json/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IT笔录'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-ITBILU'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itbilu.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json;charset=UTF-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("p",[t._v("服务器第一次收到的Options请求头如下：")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token method property"}},[t._v("OPTIONS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("/resources/post-json/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("itbilu.other")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2,da;q=0.2")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("gzip,deflate")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Charset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("ISO-8859-1,utf-8;q=0.7,*;q=0.7")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("keep-alive")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("http://itbilu.com")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Request-Method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("POST")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Request-Headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("X-ITBILU")])]),t._v("\n")])])]),s("p",[t._v("在上面的请示头中：Access-Control-Request-Method 告诉服务器接下来的实际请求是一个POST请求。")]),t._v(" "),s("p",[t._v("Access-Control-Request-Headers告诉服务器接下来实际请求将包含一个自定义的请求头 X-ITBILU 。")]),t._v(" "),s("p",[t._v("对该Options请求的响应头如下：")]),t._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token response-status"}},[s("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token status-code number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[t._v("OK")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Tue, 22 SEP 2015 22:23:55 GMT")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Nginx/1.8.0 ")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("http://itbilu.com")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Methods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("POST, GET, OPTIONS")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("X-ITBILU")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Max-Age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("1728000")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Vary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Accept-Encoding, Origin")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("gzip")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("0")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Keep-Alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("timeout=2, max=100")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Keep-Alive")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("text/plain")])]),t._v("\n")])])]),s("p",[t._v("在上面的响应头中：Access-Control-Request-Method 告诉请求对象（XHR），服务允许使用POST、GET、OPTIONS方法访问资源。")]),t._v(" "),s("p",[t._v("Access-Control-Request-Headers告诉请求对象，服务器允许包含自定义请求头X-ITBILU。")]),t._v(" "),s("p",[t._v("而最后一个响应头Access-Control-Max-Age告诉请求对象验证有效时长，在接下来的1728000秒（20天）不用再发送OPTIONS请求验证合法性。")]),t._v(" "),s("p",[t._v("在XHR对象发送OPTIONS请求并验证完以上头信息后，才最终发送了实际的POST请求。")]),t._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://itbilu.com/javascript/js/VkiXuUcC.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么XMLHttpRequest的POST请求会变OPTIONS请求"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);