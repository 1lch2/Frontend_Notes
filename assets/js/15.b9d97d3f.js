(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{276:function(t,a,s){t.exports=s.p+"assets/img/Box_Model_1.e7635a35.png"},326:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css基础-盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css基础-盒子模型"}},[t._v("#")]),t._v(" CSS基础 - 盒子模型")]),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("在 CSS 中任何元素都可以看成是一个盒子，而一个盒子是由 4 部分组成的：内容（content）、内边距（padding）、边框（border）和外边距（margin）。")]),t._v(" "),a("p",[t._v("盒模型有 2 种：标准盒模型和 IE 盒模型，本别是由 W3C 和 IExplore 制定的标准。")]),t._v(" "),a("p",[t._v("标准盒模型认为：\n盒子的实际尺寸 = 内容（设置的宽/高） + 内边距 + 边框")]),t._v(" "),a("p",[t._v("IE 盒模型认为：\n盒子的实际尺寸 = 设置的宽/高 = 内容 + 内边距 + 边框")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("标准盒模型下， .box 元素内容的宽度就为 200px，而实际的宽度则是")]),t._v(" "),a("p",[t._v("width + padding-left + padding-right + border-left-width + border-right-width = 200 + 10 + 10 + 1 + 1 = 222。")]),t._v(" "),a("p",[a("strong",[t._v("标准盒模型下，内容宽度一定，增加边距和边框会 增加 整个元素的尺寸")])]),t._v(" "),a("p",[t._v("而 IE 盒模型下，内容的真实宽度则是")]),t._v(" "),a("p",[t._v("width - padding-left - padding-right - border-left-width - border-right-width = 200 - 10 - 10 - 1 - 1 = 178。")]),t._v(" "),a("p",[a("strong",[t._v("IE盒模型下，整个元素的宽度一定，增加边距和边框会 缩小 内容的尺寸")])]),t._v(" "),a("p",[t._v("在 CSS3 中新增了一个属性 "),a("code",[t._v("box-sizing")]),t._v("，允许开发者来指定盒子使用什么标准，它有 2 个值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("content-box")]),t._v("：标准盒模型；")]),t._v(" "),a("li",[a("code",[t._v("border-box")]),t._v("：IE 盒模型；")])]),t._v(" "),a("h2",{attrs:{id:"margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[t._v("#")]),t._v(" margin")]),t._v(" "),a("p",[t._v("外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。 外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。")]),t._v(" "),a("p",[t._v("给 margin 传入的参数数量不同，代表的效果也不同：")]),t._v(" "),a("ul",[a("li",[t._v("1 个参数：代表上下左右的 mragin")]),t._v(" "),a("li",[t._v("2 个参数：第一个代表上下，第二个代表左右")]),t._v(" "),a("li",[t._v("3 个参数：第一个代表上，第二个代表左右，第三个代表下")]),t._v(" "),a("li",[t._v("4 个参数：按序分别代表上，右，下，左")])]),t._v(" "),a("p",[a("strong",[t._v("padding 同理")])]),t._v(" "),a("h3",{attrs:{id:"属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),a("p",[t._v("可以取固定值（px）或者相对值（vh，vw，em，rem）以及百分比。")]),t._v(" "),a("p",[t._v("margin 的百分比值取的是"),a("strong",[t._v("父容器的宽度")]),t._v("的百分比。")]),t._v(" "),a("p",[a("strong",[t._v("padding 的百分比取值同理")])]),t._v(" "),a("h3",{attrs:{id:"行内元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内元素"}},[t._v("#")]),t._v(" 行内元素")]),t._v(" "),a("p",[t._v("margin-top/margin-bottom对于上下元素无效，margin-left/margin-right有效")]),t._v(" "),a("h3",{attrs:{id:"块级元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级元素"}},[t._v("#")]),t._v(" 块级元素")]),t._v(" "),a("p",[t._v("对于相邻的块级元素margin-top和margin-bottom两者叠加按照一定的规则：")]),t._v(" "),a("ul",[a("li",[t._v("都是正数 "),a("code",[t._v("margin")]),t._v(" 值取最大值")]),t._v(" "),a("li",[t._v("都是负数 "),a("code",[t._v("margin")]),t._v(" 值取最小值\n"),a("blockquote",[a("p",[t._v("margin 取负数时会往反方向拓展。例如，设置了 "),a("code",[t._v("margin-top: -100px")]),t._v(" ，则对应的元素边距相比父元素会向上拓展 100px")])])]),t._v(" "),a("li",[t._v("两者正负相反，"),a("code",[t._v("margin")]),t._v(" 值取两者之和")])]),t._v(" "),a("h3",{attrs:{id:"auto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto"}},[t._v("#")]),t._v(" auto")]),t._v(" "),a("p",[t._v("当元素的左右 margin 设为 auto 时，它将会被设置相同的左右边距，结果是这个元素被水平居中了。")]),t._v(" "),a("p",[t._v("元素的上下 margin 设为 auto 时，值会变成 0。因此不能用这种办法垂直居中元素。")]),t._v(" "),a("h2",{attrs:{id:"padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#padding"}},[t._v("#")]),t._v(" padding")]),t._v(" "),a("p",[t._v("内边距位于边框和内容区域之间，通常用于将内容推离边框。")]),t._v(" "),a("p",[t._v("与外边距不同，padding 不能为负数值。应用于元素的任何背景都将显示在内边距后面。")]),t._v(" "),a("p",[a("strong",[t._v("padding 没有 auto 这个选项")])]),t._v(" "),a("h2",{attrs:{id:"元素默认宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素默认宽高"}},[t._v("#")]),t._v(" 元素默认宽高")]),t._v(" "),a("p",[t._v("在默认情况下，height 和 width 的值为 auto，两者有不同的表现。")]),t._v(" "),a("p",[t._v("min/max-width/height 会优先于 width/height 生效。")]),t._v(" "),a("h3",{attrs:{id:"width"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),a("p",[t._v("width 用来设置"),a("strong",[t._v("内容区域")]),t._v("的宽度，不是整个元素的宽度（即带上内外边距和边框）")]),t._v(" "),a("p",[t._v("默认值为 auto ，意味着元素会占满它的包含块（containing block）的宽度。如果元素还有额外的内外边距，则内容宽度会相应减少，元素的"),a("strong",[t._v("盒子宽度")]),t._v("保持为父元素的"),a("strong",[t._v("内容宽度")]),t._v("。")]),t._v(" "),a("p",[t._v("如果设为 auto，则元素宽度会变为它的包含块的内容宽度（即width）再加上额外的元素内外边距。")]),t._v(" "),a("p",[t._v("与 width: 100% 对比如下图所示：\n"),a("img",{attrs:{src:s(276),alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#height"}},[t._v("#")]),t._v(" height")]),t._v(" "),a("p",[t._v("与 width 相同，height 用来设置"),a("strong",[t._v("内容区域")]),t._v("的高度。")]),t._v(" "),a("p",[t._v("默认值为 auto ，等于元素的内容高度，如果这个块级元素没有内容则会变为 0。")]),t._v(" "),a("p",[t._v("如果设为 100%，则元素的内容高度会和父元素保持一致")]),t._v(" "),a("h2",{attrs:{id:"获取元素的宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取元素的宽高"}},[t._v("#")]),t._v(" 获取元素的宽高")]),t._v(" "),a("p",[t._v("有如下HTML和CSS")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    test\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div#test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用如下JS代码无法获取到元素的宽高")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ""')]),t._v("\n")])])]),a("p",[t._v("原因是 "),a("code",[t._v("element.style.height")]),t._v(" 这样的方式仅能获取到内联样式。对于外部样式，应该参考以下方式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法一，getComputedStyle")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "50px"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法二，clientHeight/clientWidth 属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到的是内容区域加上下 padding 的大小")]),t._v("\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 50")]),t._v("\n")])])]),a("p",[t._v("除此之外，通过元素的"),a("code",[t._v("offsetHeight、offsetWidth")]),t._v("可以获取到包含 padding 和 margin 的尺寸值。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ishadeed.com/article/auto-css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Everything About Auto in CSS\n"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);