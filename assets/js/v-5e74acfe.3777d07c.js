"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92895],{6148:(e,n,s)=>{s.r(n),s.d(n,{default:()=>c});var a=s(78e3);const o=[(0,a.uE)('<h1 id="dirname、-filename-和-process-cwd-三者的区别" tabindex="-1"><a class="header-anchor" href="#dirname、-filename-和-process-cwd-三者的区别" aria-hidden="true">#</a> <code>__dirname</code>、<code>__filename</code> 和 <code>process.cwd()</code> 三者的区别</h1><ol><li><p><code>process.cwd()</code> 方法返回 Node.js 进程当前工作的目录</p><p>例: 我在 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code> 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 <code>run test.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cwd <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cwd<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p></li><li><p><code>__dirname</code> 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名</p><p>还在上面的 js 文件中输入一下代码</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p><p>现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 <code>node webpack ..</code> 打包了一个应用程序， 我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd) 在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径</p></li><li><p><code>__filename</code> 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 <code>__filename</code> 变量获取当前模块文件的带有完整绝对路径的文件名</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出 <code>F:\\自己的文件\\自己在网上学习的知识点\\node 学习\\node-API\\process\\test.js</code></p>',4)],t={},c=(0,s(61935).Z)(t,[["render",function(e,n){return(0,a.wg)(),(0,a.iD)("div",null,o)}]])},61935:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},52558:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-5e74acfe","path":"/note/node-js/current-path.html","title":"__dirname、__filename 和 process.cwd() 三者的区别","lang":"zh-CN","frontmatter":{"icon":"nodeJS","date":"2019-09-10T00:00:00.000Z","tag":["Node.js"],"summary":"dirname、filename 和 process.cwd() 三者的区别 1. process.cwd() 方法返回 Node.js 进程当前工作的目录 例: 我在 F:\\\\自己的文件\\\\自己在网上学习的知识点\\\\node学习\\\\node-API\\\\process 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 run tes","head":[["meta",{"property":"og:url","content":"https://mrhope.site/note/node-js/current-path.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"__dirname、__filename 和 process.cwd() 三者的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:published_time","content":"2019-09-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1611747207000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"note/node-js/current-path.md","localizedDate":"2019年9月10日"}')}}]);