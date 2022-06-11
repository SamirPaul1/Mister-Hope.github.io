"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[40555],{83496:(e,l,i)=>{i.r(l),i.d(l,{default:()=>z});var t=i(95393);const n=(0,t._)("p",null,"框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。",-1),p=(0,t._)("p",null,"将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。",-1),u=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,"WXML (WeiXin Markup language) 用于描述页面的结构。")]),(0,t._)("li",null,[(0,t._)("p",null,"WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。")]),(0,t._)("li",null,[(0,t._)("p",null,"WXSS (WeiXin Style Sheet) 用于描述页面的样式。")]),(0,t._)("li",null,[(0,t._)("p",null,"组件 (Component) 是视图的基本组成单元。")])],-1),a=(0,t._)("h2",{id:"文档",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),(0,t.Uk)(" 文档")],-1),o=(0,t.Uk)("WXML"),d=(0,t.Uk)("数据绑定"),m=(0,t.Uk)("条件渲染"),r=(0,t.Uk)("列表渲染"),_=(0,t.Uk)("模板"),c=(0,t.Uk)("WXSS"),W=(0,t.Uk)("事件"),g=(0,t.Uk)("基础组件"),w=(0,t._)("h2",{id:"高级",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#高级","aria-hidden":"true"},"#"),(0,t.Uk)(" 高级")],-1),h=(0,t.Uk)("动画"),k=(0,t.Uk)(),s=(0,t.Uk)("WXS"),X=(0,t.Uk)(),y=(0,t.Uk)("WXS 事件"),S=(0,t.Uk)(),v=(0,t.Uk)("建议双向绑定"),f=(0,t.Uk)(),U=(0,t.Uk)("获取界面上的节点信息"),M=(0,t.Uk)(),x=(0,t.Uk)("相应显示区域变化"),L=(0,t.Uk)(),b=(0,t.Uk)("初始渲染缓存"),C=(0,t.Uk)(),T={},z=(0,i(13860).Z)(T,[["render",function(e,l){const i=(0,t.up)("RouterLink"),T=(0,t.up)("Badge");return(0,t.wg)(),(0,t.iD)("div",null,[n,p,u,(0,t.kq)(" more "),a,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxml.html"},{default:(0,t.w5)((()=>[o])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/data-bind.html"},{default:(0,t.w5)((()=>[d])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/condition-render.html"},{default:(0,t.w5)((()=>[m])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/list-render.html"},{default:(0,t.w5)((()=>[r])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/template.html"},{default:(0,t.w5)((()=>[_])),_:1})])])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxss.html"},{default:(0,t.w5)((()=>[c])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/event.html"},{default:(0,t.w5)((()=>[W])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/component.html"},{default:(0,t.w5)((()=>[g])),_:1})])])]),w,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/animation.html"},{default:(0,t.w5)((()=>[h])),_:1}),k,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxs.html"},{default:(0,t.w5)((()=>[s])),_:1}),X,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxs-event.html"},{default:(0,t.w5)((()=>[y])),_:1}),S,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/model.html"},{default:(0,t.w5)((()=>[v])),_:1}),f,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/selector.html"},{default:(0,t.w5)((()=>[U])),_:1}),M,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/selector.html"},{default:(0,t.w5)((()=>[x])),_:1}),L,(0,t.Wm)(T,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/rendering-cache.html"},{default:(0,t.w5)((()=>[b])),_:1}),C,(0,t.Wm)(T,{type:"grey",text:"高级"})])])])])}]])},13860:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,t]of l)i[e]=t;return i}},10745:(e,l,i)=>{i.r(l),i.d(l,{data:()=>t});const t={key:"v-0450ba08",path:"/code/mini-app/guide/view/",title:"视图层 View",lang:"zh-CN",frontmatter:{title:"视图层 View",icon:"layout",category:["小程序"],summary:"框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。\n将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。\n\n\nWXML (WeiXin Markup language) 用于描述页面的结构。\n\n\nWXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。\n\n\nWXSS (WeiXin Style Sheet) 用于描述页面的样式。\n\n\n组件 (Component) 是视图的基本组成单元。\n\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"视图层 View"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:01:38.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:01:38.000Z"}]]},excerpt:"<p>框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。</p>\n<p>将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。</p>\n<ul>\n<li>\n<p>WXML (WeiXin Markup language) 用于描述页面的结构。</p>\n</li>\n<li>\n<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>\n</li>\n<li>\n<p>WXSS (WeiXin Style Sheet) 用于描述页面的样式。</p>\n</li>\n<li>\n<p>组件 (Component) 是视图的基本组成单元。</p>\n</li>\n</ul>\n",headers:[{level:2,title:"文档",slug:"文档",children:[]},{level:2,title:"高级",slug:"高级",children:[]}],git:{createdTime:1644163298e3,updatedTime:1644163298e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.79,words:238},filePathRelative:"code/mini-app/guide/view/README.md",localizedDate:"2022年2月6日"}}}]);