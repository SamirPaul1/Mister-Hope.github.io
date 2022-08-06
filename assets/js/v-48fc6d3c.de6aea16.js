"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[71498],{41658:(e,a,n)=>{n.r(a),n.d(a,{default:()=>f});var t=n(78e3);const i=(0,t.uE)('<h2 id="创建一个项目" tabindex="-1"><a class="header-anchor" href="#创建一个项目" aria-hidden="true">#</a> 创建一个项目</h2><p>在尝试了单文件的快速开发后，我们就可以开始真正创建一个项目。</p><h3 id="vue-create" tabindex="-1"><a class="header-anchor" href="#vue-create" aria-hidden="true">#</a> vue create</h3><p>运行以下命令来创建一个新项目:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue create hello-world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用图形化界面" tabindex="-1"><a class="header-anchor" href="#使用图形化界面" aria-hidden="true">#</a> 使用图形化界面</h3><p>您也可以通过 <code>vue ui</code> 命令以图形化界面创建和管理项目:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue ui\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会打开一个浏览器窗口，并以图形化界面将您引导至项目创建的流程。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>对于新手，推荐先使用图形化界面</p></div><h2 id="预置命令" tabindex="-1"><a class="header-anchor" href="#预置命令" aria-hidden="true">#</a> 预置命令</h2><p>使用 <code>vue create</code> 创建的项目带有一系列预置指令。</p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>若日后项目编译出问题后一般能够通过重新执行此命令恢复正常。</p></div><h2 id="更新项目依赖" tabindex="-1"><a class="header-anchor" href="#更新项目依赖" aria-hidden="true">#</a> 更新项目依赖</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在拉取最新代码后发现 <code>package.json</code> 文件发生变动时使用，该命令会将所有依赖升级到 <code>package.json</code> 中指定的版本。</p></div><h2 id="启动开发环境" tabindex="-1"><a class="header-anchor" href="#启动开发环境" aria-hidden="true">#</a> 启动开发环境</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run serve\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',20),s={class:"custom-container tip"},l=(0,t._)("p",{class:"custom-container-title"},"提示",-1),r=(0,t._)("p",null,"该指令会创建一个开发环境。开发环境其实就是开发时提供的一个代码错误提示与页面展示窗口，终端会显示编译状态与错误、浏览器会显示文件编译后的效果。",-1),c=(0,t._)("p",null,"开发环境启动后，vue-cli 会对项目文件进行实时编译，并搭载一个临时服务器加载编译后的网页，并监听文件改动执行实时编译。",-1),d=(0,t.Uk)("此时可在浏览器通过 "),o={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("http://localhost:8080"),p=(0,t.Uk)(" 直接访问网页。"),h=(0,t._)("p",null,"在对项目的任何文件进行更改并保存后，vue-cli 会自动编译需要更新的文件，使得临时服务器的网页与编译器内的文件最终效果保持一致。",-1),v=(0,t._)("p",null,"也就是说，在启动开发环境下，浏览器所展示的网页状态就是编译器中正在编辑的网页状态，在编译器做任何修改后改动会立即更新在网页中。",-1),m=(0,t._)("p",null,[(0,t.Uk)("使用 "),(0,t._)("code",null,"ctrl + c"),(0,t.Uk)(" 组合键并输入 "),(0,t._)("code",null,"y"),(0,t.Uk)(" 按回车来终止开发环境。")],-1),g=(0,t.uE)('<h2 id="构建生产环境" tabindex="-1"><a class="header-anchor" href="#构建生产环境" aria-hidden="true">#</a> 构建生产环境</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>执行构建，将构建成功的网页文件输出至 <code>/dist</code> 目录</p></div><h2 id="执行文件提示和文件修复" tabindex="-1"><a class="header-anchor" href="#执行文件提示和文件修复" aria-hidden="true">#</a> 执行文件提示和文件修复</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run lint\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>执行代码错误提示与修复功能，推荐使用 ESLint + @typescript-eslint/parser 检查。</p></div>',6),b={},f=(0,n(61935).Z)(b,[["render",function(e,a){const n=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[i,(0,t._)("div",s,[l,r,c,(0,t._)("p",null,[d,(0,t._)("a",o,[u,(0,t.Wm)(n)]),p]),h,v,m]),g])}]])},61935:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,t]of a)n[e]=t;return n}},5756:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-48fc6d3c","path":"/code/vue/cli/create.html","title":"相关指令","lang":"zh-CN","frontmatter":{"title":"相关指令","icon":"add","category":["Vue"],"tag":["Vue Cli","指令"],"summary":"创建一个项目 在尝试了单文件的快速开发后，我们就可以开始真正创建一个项目。 vue create 运行以下命令来创建一个新项目: 使用图形化界面 您也可以通过 vue ui 命令以图形化界面创建和管理项目: 上述命令会打开一个浏览器窗口，并以图形化界面将您引导至项目创建的流程。 对于新手，推荐先使用图形化界面 预置命令 使用 vue create 创建的项目","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/vue/cli/create.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"相关指令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Vue Cli"}],["meta",{"property":"article:tag","content":"指令"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"创建一个项目","slug":"创建一个项目","children":[{"level":3,"title":"vue create","slug":"vue-create","children":[]},{"level":3,"title":"使用图形化界面","slug":"使用图形化界面","children":[]}]},{"level":2,"title":"预置命令","slug":"预置命令","children":[]},{"level":2,"title":"初始化项目","slug":"初始化项目","children":[]},{"level":2,"title":"更新项目依赖","slug":"更新项目依赖","children":[]},{"level":2,"title":"启动开发环境","slug":"启动开发环境","children":[]},{"level":2,"title":"构建生产环境","slug":"构建生产环境","children":[]},{"level":2,"title":"执行文件提示和文件修复","slug":"执行文件提示和文件修复","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":2.05,"words":616},"filePathRelative":"code/vue/cli/create.md","localizedDate":"2020年6月3日"}')}}]);