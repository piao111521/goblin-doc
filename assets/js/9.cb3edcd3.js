(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cache-相关参数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-相关参数介绍"}},[t._v("#")]),t._v(" Cache 相关参数介绍")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可使用的缓存类型 [redis,none,self] self 缓存到本地，redis 缓存到 redis 。none 不使用缓存")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expire_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10m0s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存失效时间")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hq7TKpR6B11w8\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CacheType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可缓存的路径后缀。目前带有参数的静态文件不做缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" png\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jpg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jpeg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" css\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" otf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ttf\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CacheSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12582912")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大缓存大小")]),t._v("\n")])])]),a("h2",{attrs:{id:"cache-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-type"}},[t._v("#")]),t._v(" cache type")]),t._v(" "),a("p",[t._v("Cache type 有三个类型可以使用 "),a("code",[t._v("self")]),t._v("、"),a("code",[t._v("redis")]),t._v("、"),a("code",[t._v("none")]),t._v(" 其中使用 "),a("code",[t._v("none")]),t._v(" 时不缓存任何静态文件, "),a("code",[t._v("self")]),t._v(" 会使用自身内建的缓存。"),a("code",[t._v("redis")]),t._v(" 使用redis 作为缓存数据库。")]),t._v(" "),a("p",[a("code",[t._v("none")]),t._v(" ：不处理任何缓存数据")]),t._v(" "),a("p",[a("code",[t._v("self")]),t._v("：内建的缓存。不会序列化请求体响应体的结构")]),t._v(" "),a("p",[a("code",[t._v("redis")]),t._v(": 会序列化请求体响应体的结构,读取后再解码出来")])])}),[],!1,null,null,null);s.default=n.exports}}]);