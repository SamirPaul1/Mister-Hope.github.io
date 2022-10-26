"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[29093],{82916:(n,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s(71534);const a=(0,i.uE)('<p>有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 <code>git status</code> 都会显示 <code>Untracked files</code> ...，有强迫症的童鞋心里肯定不爽。</p><p>好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 <code>.gitignore</code> 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。</p><p>忽略文件的原则是:</p><ul><li>忽略操作系统自动生成的文件，比如缩略图等；</li><li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件；</li><li>忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。</li></ul><p>举个例子:</p><p>假设您在 Windows 下进行 Python 开发，Windows 会自动在有图片的目录下生成隐藏的缩略图文件，如果有自定义目录，目录下就会有 <code>Desktop.ini</code> 文件，因此您需要忽略 Windows 自动生成的垃圾文件:</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">Thumbs.db</span>\n<span class="token entry string">ehthumbs.db</span>\n<span class="token entry string">Desktop.ini</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，继续忽略 Python 编译产生的 <code>.pyc</code>、<code>.pyo</code>、<code>dist</code> 等文件或目录:</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">_.py<span class="token regex">[cod]</span></span>\n<span class="token entry string">_.so</span>\n<span class="token entry string">_.egg</span>\n<span class="token entry string">_.egg-info</span>\n<span class="token entry string">dist</span>\n<span class="token entry string">build</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上您自己定义的文件，最终得到一个完整的 <code>.gitignore</code> 文件，内容如下:</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># Windows:</span>\n\n<span class="token entry string">Thumbs.db</span>\n<span class="token entry string">ehthumbs.db</span>\n<span class="token entry string">Desktop.ini</span>\n\n<span class="token comment"># Python:</span>\n\n<span class="token entry string">_.py<span class="token regex">[cod]</span></span>\n<span class="token entry string">_.so</span>\n<span class="token entry string">_.egg</span>\n<span class="token entry string">_.egg-info</span>\n<span class="token entry string">dist</span>\n<span class="token entry string">build</span>\n\n<span class="token comment"># My configurations:</span>\n\n<span class="token entry string">db.ini</span>\n<span class="token entry string">deploy_key_rsa</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一步就是把 <code>.gitignore</code> 也提交到 Git，就完成了! 当然检验 <code>.gitignore</code> 的标准是 <code>git status</code> 命令是不是说 <code>working directory clean</code>。</p><p>使用 Windows 的童鞋注意了，如果您在资源管理器里新建一个 <code>.gitignore</code> 文件，它会非常弱智地提示您必须输入文件名，但是在文本编辑器里“保存”或者“另存为”就可以把文件保存为 <code>.gitignore</code> 了。</p><p>有些时候，您想添加一个文件到 Git，但发现添加不了，原因是这个文件被 <code>.gitignore</code> 忽略了:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> App.class\nThe following paths are ignored by one of your .gitignore files:\nApp.class\nUse <span class="token parameter variable">-f</span> <span class="token keyword">if</span> you really want to <span class="token function">add</span> them.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您确实想添加该文件，可以用 <code>-f</code> 强制添加到 Git:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> App.class\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者您发现，可能是 <code>.gitignore</code> 写得有问题，需要找出来到底哪个规则写错了，可以用 <code>git check-ignore</code> 命令检查:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> check-ignore <span class="token parameter variable">-v</span> App.class\n.gitignore:3:*.class    App.class\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 会告诉我们，<code>.gitignore</code> 的第 3 行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。</p><h2 id="格式规范" tabindex="-1"><a class="header-anchor" href="#格式规范" aria-hidden="true">#</a> 格式规范</h2><ul><li><p>所有空行或者以 # 开头的行都会被 Git 忽略。</p></li><li><p>可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。</p></li><li><p>匹配模式可以以(<code>/</code>)开头防止递归。</p></li><li><p>匹配模式可以以(<code>/</code>)结尾指定目录。</p></li><li><p>要忽略指定模式以外的文件或目录，可以在模式前加上叹号(<code>!</code>)取反。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">glob 模式</p><p>所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。星号(<code>*</code>)匹配零个或多个任意字符；<code>[abc]</code> 匹配任何一个列在方括号中的字符 (这个例子要么匹配一个 <code>a</code>，要么匹配一个 <code>b</code>，要么匹配一个 <code>c</code>)； 问号(<code>?</code>)只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配(比如 <code>[0-9]</code> 表示匹配所有 <code>0</code> 到 <code>9</code> 的数字)。使用两个星号(<code>**</code>)表示匹配任意中间目录，比如 <code>a/**/z</code> 可以匹配 <code>a/z</code> 、<code>a/b/z</code> 或 <code>a/b/c/z</code> 等。</p></div><p>一个具体的例子:</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># 忽略所有的 .a 文件</span>\n<span class="token entry string"><span class="token operator">*</span>.a</span>\n\n<span class="token comment"># 但跟踪所有的 lib.a，即便您在前面忽略了 .a 文件</span>\n<span class="token entry string"><span class="token operator">!</span>lib.a</span>\n\n<span class="token comment"># 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO</span>\n<span class="token entry string"><span class="token punctuation">/</span>TODO</span>\n\n<span class="token comment"># 忽略任何目录下名为 build 的文件夹</span>\n<span class="token entry string">build<span class="token punctuation">/</span></span>\n\n<span class="token comment"># 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt</span>\n<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>\n\n<span class="token comment"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span>\n<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.pdf</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',25),t={class:"custom-container tip"},o=(0,i._)("p",{class:"custom-container-title"},"提示",-1),c={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},d=(0,i.uE)('<div class="custom-container tip"><p class="custom-container-title">多个 .gitignore</p><p>在最简单的情况下，一个仓库可能只根目录下有一个 .gitignore 文件，它递归地应用到整个仓库中。然而，子目录下也可以有额外的 .gitignore 文件。子目录中的 .gitignore 文件中的规则只作用于它所在的目录中。(Linux 内核的源码库拥有 206 个 .gitignore 文件。)</p></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><p>忽略某些文件时，需要编写 <code>.gitignore</code>；</p></li><li><p><code>.gitignore</code> 文件本身要放到版本库里，并且可以对 <code>.gitignore</code> 做版本管理!</p></li></ul>',3),l={},r=(0,s(61935).Z)(l,[["render",function(n,e){const s=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[a,(0,i._)("div",t,[o,(0,i._)("p",null,[(0,i.Uk)("GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 您可以在 "),(0,i._)("a",c,[(0,i.Uk)("https://github.com/github/gitignore"),(0,i.Wm)(s)]),(0,i.Uk)(" 找到它。")])]),d])}]])},61935:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,i]of e)s[n]=i;return s}},11604:(n,e,s)=>{s.r(e),s.d(e,{data:()=>i});const i=JSON.parse('{"key":"v-46819f1b","path":"/software/git/ignore.html","title":"忽略特殊文件","lang":"zh-CN","frontmatter":{"title":"忽略特殊文件","icon":"skin","order":12,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","summary":"有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 git status 都会显示 Untracked files ...，有强迫症的童鞋心里肯定不爽。 好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 .gitignore 文件，然后把要忽","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/git/ignore.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"忽略特殊文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-07T17:18:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-09-07T17:18:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"格式规范","slug":"格式规范","link":"#格式规范","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591291369000,"updatedTime":1662571086000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":10},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.23,"words":1268},"filePathRelative":"software/git/ignore.md","localizedDate":"2020年6月4日"}')}}]);