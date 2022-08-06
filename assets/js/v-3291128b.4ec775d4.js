"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[59345],{29088:(e,n,o)=>{o.r(n),o.d(n,{default:()=>d});var s=o(78e3);const t=(0,s.uE)('<p>溢出是在盒子无法容纳下太多的内容的时候发生的。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>我们知道，CSS 中万物皆盒，因此我们可以通过给 <code>width</code> 和 <code>height</code>(或者 <code>inline-size</code> 和 <code>block-size</code>) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。</p><h2 id="css-尽可能不丢弃内容" tabindex="-1"><a class="header-anchor" href="#css-尽可能不丢弃内容" aria-hidden="true">#</a> CSS 尽可能不丢弃内容</h2><p>在默认情况下，CSS 会将元素溢出的部分显示在和盒子外。</p>',5),a=(0,s._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,s._)("pre",{class:"language-html"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("word"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("Overflow"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"class"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("box"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  This box has a height and a width. This means that if there is too much\n  content to be displayed within the assigned height, there will be an overflow\n  situation. If overflow is set to hidden then any overflow will not be visible.\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("p")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("This content is outside of the box."),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("p")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),c=(0,s._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,s._)("pre",{class:"language-css"},[(0,s._)("code",null,[(0,s._)("span",{class:"token selector"},".word"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 1px solid #333333"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"width"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 100px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"font-size"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 250%"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token selector"},".box"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"border"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 1px solid #333333"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"width"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 200px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token property"},"height"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 100px"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n")])]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),l=(0,s.uE)('<p>只要有可能，CSS 就不会隐藏您的内容，隐藏引起的数据损失通常会造成困扰。</p><p>如果您已经用 <code>width</code> 或者 <code>height</code> 限制住了一个盒子，CSS 假定，您知道您在做什么，而且您已经控制住了溢出的隐患。总之，在盒子里面需要放置文本的时候，限制住块方向的尺寸是会引起问题的，比如用户增加字体大小，或者填入了远超您设计时预计数量的文本。</p><h2 id="overflow-属性" tabindex="-1"><a class="header-anchor" href="#overflow-属性" aria-hidden="true">#</a> overflow 属性</h2><p><code>overflow</code> 属性是您控制一个元素溢出的方式，它告诉浏览器您想怎样处理溢出。<code>overflow</code> 的默认值为 <code>visible</code>，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。</p><p>如果您想在内容溢出的时候把它裁剪掉，设置 <code>overflow: hidden</code>。这就会隐藏掉溢出。这可能会很自然地让东西消失掉，所以您只应该在判断隐藏内容不会引起问题的时候这样做。</p><p>如果您想在有内容溢出的时候加个滚动条，设置 <code>overflow: scroll</code>，那么即使没有足够多引起溢出的内容，您的浏览器也总会显示滚动条。您可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。</p><p>如果仅仅需要在 y 轴方向上滚动，可以使用 <code>overflow-y</code> 属性，设置 <code>overflow-y: scroll</code> 来仅在 y 轴方向滚动。您也可以用 <code>overflow-x</code>，以在 x 轴方向上滚动。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意，<code>overflow-x</code> 不是处理长单词的好办法! 如果您真的需要在小盒子里面和长英文词打交道，使用 <code>word-break</code> 或者 <code>overflow-wrap</code> 属性。</p></div><p>和 <code>scroll</code> 一样，在无论内容是否会溢出，页面上都会显示一个滚动条。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>您可以用 <code>overflow</code> 属性指定 x 轴和 y 轴方向的滚动，同时使用两个值进行传递。如果指定了两个关键字，第一个对 <code>overflow-x</code> 生效而第二个对 <code>overflow-y</code> 生效。否则，<code>overflow-x</code> 和 <code>overflow-y</code> 将会被设置成同样的值。例如，<code>overflow: scroll hidden</code> 会把 <code>overflow-x</code> 设置成 <code>scroll</code>，而 <code>overflow-y</code> 则为 <code>hidden</code>。</p></div><p>如果您想让滚动条只在必要时才显示，那么使用 <code>overflow: auto</code>。此时由浏览器决定是否显示滚动条。浏览器一般仅仅会在有足以引起溢出的内容的时候这么做。</p><h2 id="块级排版上下文" tabindex="-1"><a class="header-anchor" href="#块级排版上下文" aria-hidden="true">#</a> 块级排版上下文</h2><p>CSS 中有所谓块级排版上下文(Block Formatting Context，BFC)的概念。在您使用诸如 <code>scroll</code> 或者 <code>auto</code> 的时候，您就建立了一个块级排版上下文。结果就是，您改变了 <code>overflow</code> 的值的话，对应的盒子就变成了更加小巧的状态。在容器之外的东西没法混进容器内，也没有东西可以突出盒子，进入周围的版面。激活了滚动动作，您的盒子里面所有的内容会被收纳，而且不会遮到页面上其他的物件，于是就产生了一个协调的滚动体验。</p><h2 id="网页设计时不需要的溢出" tabindex="-1"><a class="header-anchor" href="#网页设计时不需要的溢出" aria-hidden="true">#</a> 网页设计时不需要的溢出</h2><p>现代网页布局的方式 (正如 CSS layout 模块中所介绍的那些) 可以很好地处理溢出。我们不一定能预料到网页上会有多少内容，您很好地设计它们，使得它们能与这种现状协调。在开发网站的时候，您应该一直把溢出的问题挂在心头，您应该用或多或少的内容测试设计，增加文本的字号，确保您的 CSS 可以正常地协调。改变溢出属性的值，来隐藏内容或者增加滚动条，会是您仅仅在少数特别情况下需要的，例如在您确实需要一个可滚动盒子的时候。</p>',15),i={},d=(0,o(61935).Z)(i,[["render",function(e,n){const o=(0,s.up)("CodeDemo");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s.Wm)(o,{id:"code-demo-30050d48",type:"normal",title:"%E4%BE%8B%E5%AD%90",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22word%5C%22%3EOverflow%3C%2Fdiv%3E%5Cn%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20This%20box%20has%20a%20height%20and%20a%20width.%20This%20means%20that%20if%20there%20is%20too%20much%5Cn%20%20content%20to%20be%20displayed%20within%20the%20assigned%20height%2C%20there%20will%20be%20an%20overflow%5Cn%20%20situation.%20If%20overflow%20is%20set%20to%20hidden%20then%20any%20overflow%20will%20not%20be%20visible.%5Cn%3C%2Fdiv%3E%5Cn%5Cn%3Cp%3EThis%20content%20is%20outside%20of%20the%20box.%3C%2Fp%3E%5Cn%22%2C%22css%22%3A%22.word%20%7B%5Cn%20%20border%3A%201px%20solid%20%23333333%3B%5Cn%20%20width%3A%20100px%3B%5Cn%20%20font-size%3A%20250%25%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20border%3A%201px%20solid%20%23333333%3B%5Cn%20%20width%3A%20200px%3B%5Cn%20%20height%3A%20100px%3B%5Cn%7D%5Cn%22%7D"},{default:(0,s.w5)((()=>[a,c])),_:1}),l])}]])},61935:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,s]of n)o[e]=s;return o}},92770:(e,n,o)=>{o.r(n),o.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-3291128b","path":"/code/website/css/intro/overflow.html","title":"溢出","lang":"zh-CN","frontmatter":{"title":"溢出","icon":"overflow","date":"2019-09-06T00:00:00.000Z","category":["CSS"],"summary":"溢出是在盒子无法容纳下太多的内容的时候发生的。 概念 我们知道，CSS 中万物皆盒，因此我们可以通过给 width 和 height(或者 inline-size 和 block-size) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。 CSS 尽可能不丢弃","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/css/intro/overflow.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"溢出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-18T14:17:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-18T14:17:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"概念","slug":"概念","children":[]},{"level":2,"title":"CSS 尽可能不丢弃内容","slug":"css-尽可能不丢弃内容","children":[]},{"level":2,"title":"overflow 属性","slug":"overflow-属性","children":[]},{"level":2,"title":"块级排版上下文","slug":"块级排版上下文","children":[]},{"level":2,"title":"网页设计时不需要的溢出","slug":"网页设计时不需要的溢出","children":[]}],"git":{"createdTime":1605516411000,"updatedTime":1652883460000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.13,"words":1239},"filePathRelative":"code/website/css/intro/overflow.md","localizedDate":"2019年9月6日"}')}}]);