"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[43339],{65923:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var s=a(78e3);const i=[(0,s.uE)('<h1 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h1><h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname" aria-hidden="true">#</a> uname</h2><p><code>uname</code> 命令返回当前机器的信息。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 内核的版本</span>\n$ <span class="token function">uname</span> -r\n<span class="token number">3.2</span>.0-24-virtual\n\n<span class="token comment"># CPU 架构</span>\n$ <span class="token function">uname</span> -m\nx86_64\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要了解操作系统的版本，可以查看<code>/etc/issue</code> 文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/issue\nDebian GNU/Linux <span class="token number">9</span> <span class="token punctuation">\\</span>n <span class="token punctuation">\\</span>l\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><p><code>service</code> 命令可以查看当前正在运行的服务。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> --status-all\n <span class="token punctuation">[</span> + <span class="token punctuation">]</span>  apache2\n <span class="token punctuation">[</span> ? <span class="token punctuation">]</span>  atd\n <span class="token punctuation">[</span> - <span class="token punctuation">]</span>  bootlogd\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>+</code> 表示正在运行，<code>-</code> 表示已经停止，<code>?</code>表示 <code>service</code> 命令不了解相关信息。</p>',10)],t={},c=(0,a(61935).Z)(t,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,i)}]])},61935:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},35275:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-d66a505a","path":"/linux/bash/archives/system.html","title":"系统信息","lang":"zh-CN","frontmatter":{"summary":"系统信息 uname uname 命令返回当前机器的信息。 如果要了解操作系统的版本，可以查看/etc/issue 文件。 service service 命令可以查看当前正在运行的服务。 上面代码中，+ 表示正在运行，- 表示已经停止，?表示 service 命令不了解相关信息。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/bash/archives/system.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"系统信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"uname","slug":"uname","children":[]},{"level":2,"title":"service","slug":"service","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"linux/bash/archives/system.md","localizedDate":"2020年6月3日"}')}}]);