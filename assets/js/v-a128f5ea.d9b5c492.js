"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[74501],{9325:(t,p,e)=>{e.r(p),e.d(p,{default:()=>O});var s=e(16492);const a=e.p+"assets/img/http1.b9631590.jpg",i=e.p+"assets/img/http2.541710af.jpg",g=e.p+"assets/img/http3.0ca594eb.jpg",r=e.p+"assets/img/http4.8705cf96.jpg",m=e.p+"assets/img/http5.3a39a821.jpg",c=e.p+"assets/img/http6.4eabe3bf.jpg",l=e.p+"assets/img/http7.8144bb66.jpg",o=e.p+"assets/img/http8.d7b3be11.jpg",n=e.p+"assets/img/http9.23700804.jpg",h=e.p+"assets/img/http10.0efd6e98.jpg",H=e.p+"assets/img/http11.2a58256f.jpg",d=e.p+"assets/img/http12.9c62fe61.jpg",y=e.p+"assets/img/http13.9c62fe61.jpg",T=e.p+"assets/img/http14.e00d0bf5.jpg",b=e.p+"assets/img/http15.fbf35b75.jpg",j=e.p+"assets/img/http16.76b3c0b0.jpg",f=e.p+"assets/img/http17.3ab9e2d4.jpg",u=e.p+"assets/img/http18.addcd124.jpg",K=e.p+"assets/img/http19.6bbe7ae0.jpg",P=e.p+"assets/img/http20.c10f88c0.jpg",w=e.p+"assets/img/http21.78869634.jpg",v=e.p+"assets/img/http22.414c3710.jpg",_=e.p+"assets/img/http23.cb331fa9.jpg",C=e.p+"assets/img/http24.782232a0.jpg",k=e.p+"assets/img/http25.782232a0.jpg",z=e.p+"assets/img/http26.4bb69a8f.jpg",S=e.p+"assets/img/http27.dae38bb7.jpg",Z=e.p+"assets/img/http28.e51fde23.jpg",x=e.p+"assets/img/http29.b11d7635.jpg",L=e.p+"assets/img/http30.f39e9453.jpg",N=e.p+"assets/img/http31.4494db95.jpg",D=e.p+"assets/img/http32.c9f23581.jpg",I=[(0,s.uE)('<h2 id="什么是-http-协议" tabindex="-1"><a class="header-anchor" href="#什么是-http-协议" aria-hidden="true">#</a> 什么是 HTTP 协议</h2><p>HTTP 协议全称 Hyper Text Transfer Protocol，翻译过来就是超文本传输协议，位于 TCP/IP 四层模型当中的应用层。</p><p><img src="'+a+'" alt="Http 漫画"></p><p>HTTP 协议通过 <strong>请求/响应</strong> 的方式，在客户端和服务端之间进行通信。</p><p><img src="'+i+'" alt="Http 漫画"></p><p>这一切看起来很美好，但是 HTTP 协议有一个致命的缺点: <strong>不够安全</strong>。</p><p>HTTP 协议的信息传输完全以明文方式，不做任何加密，相当于是在网络上“裸奔”。这样会导致什么问题呢? 让我们打一个比方:</p><p>小灰是客户端，小灰的同事小红是服务端，有一天小灰试图给小红发送请求。</p><p><img src="'+g+'" alt="Http 漫画"></p><p>但是，由于传输信息是明文，这个信息有可能被某个中间人恶意截获甚至篡改。这种行为叫做<strong>中间人攻击</strong>。</p><p><img src="'+r+'" alt="Http 漫画"></p><p><img src="'+m+'" alt="Http 漫画"></p><p><img src="'+c+'" alt="Http 漫画"></p><p>如何进行加密呢?</p><p>小灰和小红可以事先约定一种<strong>对称加密</strong>方式，并且约定一个随机生成的密钥。后续的通信中，信息发送方都使用密钥对信息加密，而信息接收方通过同样的密钥对信息解密。</p><p><img src="'+l+'" alt="Http 漫画"></p><p><img src="'+o+'" alt="Http 漫画"></p><p>这样做是不是就绝对安全了呢? 并不是。</p><p>虽然我们在后续的通信中对明文进行了加密，但是第一次约定加密方式和密钥的通信仍然是明文，如果第一次通信就已经被拦截了，那么密钥就会泄露给中间人，中间人仍然可以解密后续所有的通信内容。</p><p><img src="'+n+'" alt="Http 漫画"></p><p>这可怎么办呢? 别担心，我们可以使用<strong>非对称加密</strong>，为密钥的传输做一层额外的保护。</p><p>非对称加密的一组秘钥对中，包含一个公钥和一个私钥。明文既可以用公钥加密，用私钥解密；也可以用私钥加密，用公钥解密。</p><p>在小灰和小红建立通信的时候，小红首先把自己的公钥 Key1 发给小灰:</p><p><img src="'+h+'" alt="Http 漫画"></p><p>收到小红的公钥以后，小灰自己生成一个用于对称加密的密钥 Key2，并且用刚才接收的公钥 Key1 对 Key2 进行加密(这里有点绕)，发送给小红:</p><p><img src="'+H+'" alt="Http 漫画"></p><p>小红利用自己非对称加密的私钥，解开了公钥 Key1 的加密，获得了 Key2 的内容。从此以后，两人就可以利用 Key2 进行对称加密的通信了。</p><p><img src="'+d+'" alt="Http 漫画"></p><p>在通信过程中，即使中间人在一开始就截获了公钥 Key1，由于不知道私钥是什么，也无从解密。</p><p><img src="'+y+'" alt="Http 漫画"></p><p><img src="'+T+'" alt="Http 漫画"></p><p>是什么坏主意呢? 中间人虽然不知道小红的私钥是什么，但是在截获了小红的公钥 Key1 之后，却可以偷天换日，自己另外生成一对公钥私钥，把自己的公钥 Key3 发送给小灰。</p><p><img src="'+b+'" alt="Http 漫画"></p><p>小灰不知道公钥被偷偷换过，以为 Key3 就是小红的公钥。于是按照先前的流程，用 Key3 加密了自己生成的对称加密密钥 Key2，发送给小红。</p><p>这一次通信再次被中间人截获，中间人先用自己的私钥解开了 Key3 的加密，获得 Key2，然后再用当初小红发来的 Key1 重新加密，再发给小红。</p><p><img src="'+j+'" alt="Http 漫画"></p><p>这样一来，两个人后续的通信尽管用 Key2 做了对称加密，但是中间人已经掌握了 Key2，所以可以轻松进行解密。</p><p><img src="'+f+'" alt="Http 漫画"></p><p><img src="'+u+'" alt="Http 漫画"></p><p>是什么解决方案呢? 难道再把公钥进行一次加密吗? 这样只会陷入鸡生蛋蛋生鸡，永无止境的困局。</p><p>这时候，我们有必要引入第三方，一个权威的证书颁发机构(CA)来解决。</p><p>到底什么是证书呢? 证书包含如下信息:</p><p><img src="'+K+'" alt="Http 漫画"></p><p>为了便于说明，我们这里做了简化，只列出了一些关键信息。至于这些证书信息的用处，我们看看具体的通信流程就能够弄明白了。</p><p>流程如下:</p><ol><li><p>作为服务端的小红，首先把自己的公钥发给证书颁发机构，向证书颁发机构申请证书。</p><p><img src="'+P+'" alt="Http 漫画"></p></li><li><p>证书颁发机构自己也有一对公钥私钥。机构利用自己的私钥来加密 Key1，并且通过服务端网址等信息生成一个证书签名，证书签名同样经过机构的私钥加密。证书制作完成后，机构把证书发送给了服务端小红。</p><p><img src="'+w+'" alt="Http 漫画"></p></li><li><p>当小灰向小红请求通信的时候，小红不再直接返回自己的公钥，而是把自己申请的证书返回给小灰。</p><p><img src="'+v+'" alt="Http 漫画"></p></li><li><p>小灰收到证书以后，要做的第一件事情是验证证书的真伪。需要说明的是，各大浏览器和操作系统已经维护了所有权威证书机构的名称和公钥。所以小灰只需要知道是</p><p>哪个机构颁布的证书，就可以从本地找到对应的机构公钥，解密出证书签名。</p><p>接下来，小灰按照同样的签名规则，自己也生成一个证书签名，如果两个签名一致，说明证书是有效的。</p><p>验证成功后，小灰就可以放心地再次利用机构公钥，解密出服务端小红的公钥 Key1。</p><p><img src="'+_+'" alt="Http 漫画"></p></li><li><p>像之前一样，小灰生成自己的对称加密密钥 Key2，并且用服务端公钥 Key1 加密 Key2，发送给小红。</p><p><img src="'+C+'" alt="Http 漫画"></p></li><li><p>最后，小红用自己的私钥解开加密，得到对称加密密钥 Key2。于是两人开始用 Key2 进行对称加密的通信。</p><p><img src="'+k+'" alt="Http 漫画"></p></li></ol><p>在这样的流程下，我们不妨想一想，中间人是否还具有使坏的空间呢?</p><p><img src="'+z+'" alt="Http 漫画"></p><p><img src="'+S+'" alt="Http 漫画"></p><p><img src="'+Z+'" alt="Http 漫画"></p><p><img src="'+x+'" alt="Http 漫画"></p><p><img src="'+L+'" alt="Http 漫画"></p><p><img src="'+N+'" alt="Http 漫画"></p><p><img src="'+D+'" alt="Http 漫画"></p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>最新推出的 TLS 协议，是 SSL 3.0 协议的升级版，和 SSL 协议的大体原理是相同的。</p></div>',55)],M={},O=(0,e(11164).Z)(M,[["render",function(t,p){return(0,s.wg)(),(0,s.iD)("div",null,I)}]])},11164:(t,p)=>{p.Z=(t,p)=>{const e=t.__vccOpts||t;for(const[t,s]of p)e[t]=s;return e}},805:(t,p,e)=>{e.r(p),e.d(p,{data:()=>s});const s=JSON.parse('{"key":"v-a128f5ea","path":"/code/website/https.html","title":"Http 与 Https 介绍","lang":"zh-CN","frontmatter":{"title":"Http 与 Https 介绍","icon":"http","date":"2019-11-03T00:00:00.000Z","author":"小灰","copyright":"本文转载自<a href=\\"https://zhuanlan.zhihu.com/p/57142784\\">小灰的知乎专栏</a>","next":"../../vue/","summary":"什么是 HTTP 协议 HTTP 协议全称 Hyper Text Transfer Protocol，翻译过来就是超文本传输协议，位于 TCP/IP 四层模型当中的应用层。 HTTP 协议通过 请求/响应 的方式，在客户端和服务端之间进行通信。 这一切看起来很美好，但是 HTTP 协议有一个致命的缺点: 不够安全。 HTTP 协议的信息传输完全以明文方式，不","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/https.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Http 与 Https 介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mrhope.site/"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Http 与 Https 介绍"}],["meta",{"property":"article:author","content":"小灰"}],["meta",{"property":"article:published_time","content":"2019-11-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"什么是 HTTP 协议","slug":"什么是-http-协议","link":"#什么是-http-协议","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":8}]},"readingTime":{"minutes":5.73,"words":1718},"filePathRelative":"code/website/https.md","localizedDate":"2019年11月3日"}')}}]);