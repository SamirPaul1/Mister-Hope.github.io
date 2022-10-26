"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[14784],{40991:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(71534);const p=[(0,t.uE)('<h1 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h1><p>在执行 JavaScript 代码的时候，有些情况下会发生错误。</p><p>错误分两种，一种是程序写的逻辑不对，导致代码执行异常。例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// TypeError: null 变量没有 length 属性</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这种错误，要修复程序。</p><p>一种是执行过程中，程序可能遇到无法预测的异常情况而报错，例如，网络连接中断，读取不存在的文件，没有操作权限等。</p><p>对于这种错误，我们需要处理它，并可能需要给用户反馈。</p><p>错误处理是程序设计时必须要考虑的问题。对于 C 这样贴近系统底层的语言，错误是通过错误码返回的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>int fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/file&quot;</span><span class="token punctuation">,</span> <span class="token constant">O_RDONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>fd <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error when open file!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过错误码返回错误，就需要约定什么是正确的返回值，什么是错误的返回值。上面的 <code>open()</code> 函数约定返回 <code>-1</code> 表示错误。</p><p>显然，这种用错误码表示错误在编写程序时十分不便。</p><p>因此，高级语言通常都提供了更抽象的错误处理逻辑 <code>try ... catch ... finally</code>，JavaScript 也不例外。</p><h2 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> <code>try ... catch ... finally</code></h2><p>使用 <code>try ... catch ... finally</code> 处理错误时，我们编写的代码如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> r1<span class="token punctuation">,</span>\n  r2<span class="token punctuation">,</span>\n  s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  r1 <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 此处应产生错误</span>\n  r2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 该语句不会执行</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;出错了: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;finally&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;r1 = &quot;</span> <span class="token operator">+</span> r1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r1应为undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;r2 = &quot;</span> <span class="token operator">+</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r2应为undefined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后可以发现，输出提示类似出错了: <code>TypeError: Cannot read property &#39;length&#39; of null”</code>。</p><p>我们来分析一下使用 <code>try ... catch ... finally</code> 的执行流程。</p><p>当代码块被 <code>try { ... }</code> 包裹的时候，就表示这部分代码执行过程中可能会发生错误，一旦发生错误，就不再继续执行后续代码，转而跳到 <code>catch</code> 块。<code>catch (e) { ... }</code> 包裹的代码就是错误处理代码，变量 <code>e</code> 表示捕获到的错误。最后，无论有没有错误，<code>finally</code> 一定会被执行。</p><p>所以，有错误发生时，执行流程像这样:</p><ol><li>先执行 <code>try { ... }</code> 的代码；</li><li>执行到出错的语句时，后续语句不再继续执行，转而执行 <code>catch (e) { ... }</code> 代码；</li><li>最后执行 <code>finally { ... }</code> 代码。</li></ol><p>而没有错误发生时，执行流程像这样:</p><ol><li>先执行 <code>try { ... }</code> 的代码；</li><li>因为没有出错，<code>catch (e) { ... }</code> 代码不会被执行；</li><li>最后执行 <code>finally { ... }</code> 代码。</li></ol><p>最后请注意，<code>catch</code> 和 <code>finally</code> 可以不必都出现。也就是说，<code>try</code> 语句一共有三种形式:</p><p>完整的 <code>try ... catch ... finally</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有 <code>try ... catch</code>，没有 <code>finally</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有 <code>try ... finally</code>，没有 <code>catch</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误类型" tabindex="-1"><a class="header-anchor" href="#错误类型" aria-hidden="true">#</a> 错误类型</h2><p>JavaScript 有一个标准的 Error 对象表示错误，还有从 Error 派生的 <code>TypeError</code>、<code>ReferenceError</code> 等错误对象。我们在处理错误时，可以通过 <code>catch(e)</code> 捕获的变量 <code>e</code> 访问错误对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">TypeError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Type error!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Error: &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用变量 <code>e</code> 是一个习惯用法，也可以以其他变量名命名，如 <code>catch(ex)</code>。</p><h2 id="抛出错误" tabindex="-1"><a class="header-anchor" href="#抛出错误" aria-hidden="true">#</a> 抛出错误</h2><p>程序也可以主动抛出一个错误，让执行流程直接跳转到 <code>catch</code> 块。抛出错误使用 <code>throw</code> 语句。</p><p>例如，下面的代码让用户输入一个数字，程序接收到的实际上是一个字符串，然后用 <code>parseInt()</code> 转换为整数。当用户输入不合法的时候，我们就抛出错误:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> r<span class="token punctuation">,</span> n<span class="token punctuation">,</span> s<span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  s <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个数字&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  n <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;输入错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 计算平方:</span>\n  r <span class="token operator">=</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">&quot; * &quot;</span> <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;出错了: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，JavaScript 允许抛出任意对象，包括数字、字符串。但是，最好还是抛出一个 <code>Error</code> 对象。</p><p>最后，当我们用 <code>catch</code> 捕获错误时，一定要编写错误处理语句:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  s<span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>哪怕仅仅把错误打印出来，也不要什么也不干:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  s<span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>catch</code> 到错误却什么都不执行，就不知道程序执行过程中到底有没有发生错误。</p><p>处理错误时，请不要简单粗暴地用 <code>alert()</code> 把错误显示给用户。教程的代码使用 <code>alert()</code> 是为了便于演示。</p><h2 id="错误传播" tabindex="-1"><a class="header-anchor" href="#错误传播" aria-hidden="true">#</a> 错误传播</h2><p>如果代码发生了错误，又没有被 <code>try ... catch</code> 捕获，那么，程序执行流程会跳转到哪呢?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">printLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error!</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">printLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，直到被 JavaScript 引擎捕获，代码终止执行。</p><p>所以，我们不必在每一个函数内部捕获错误，只需要在合适的地方来个统一捕获，一网打尽:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN main()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;出错了: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END main()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN foo()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">bar</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END foo()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BEGIN bar()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;length = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END bar()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>bar()</code> 函数传入参数 <code>null</code> 时，代码会报错，错误会向上抛给调用方 <code>foo()</code> 函数，<code>foo()</code> 函数没有 <code>try ... catch</code> 语句，所以错误继续向上抛给调用方 <code>main()</code> 函数，<code>main()</code> 函数有 <code>try ... catch</code> 语句，所以错误最终在 <code>main()</code> 函数被处理了。</p><p>至于在哪些地方捕获错误比较合适，需要视情况而定。</p><h2 id="异步错误处理" tabindex="-1"><a class="header-anchor" href="#异步错误处理" aria-hidden="true">#</a> 异步错误处理</h2><p>编写 JavaScript 代码时，我们要时刻牢记，JavaScript 引擎是一个事件驱动的执行引擎，代码总是以单线程执行，而回调函数的执行需要等到下一个满足条件的事件出现后，才会被执行。</p><p>例如，<code>setTimeout()</code> 函数可以传入回调函数，并在指定若干毫秒后执行:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;It is time!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span>printTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码会先打印 <code>done</code>，1 秒后才会打印 <code>It is time!</code>。</p><p>如果 <code>printTime()</code> 函数内部发生了错误，我们试图用 <code>try</code> 包裹 <code>setTimeout()</code> 是无效的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span>printTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因就在于调用 <code>setTimeout()</code> 函数时，传入的 <code>printTime</code> 函数并未立刻执行! 紧接着，JavaScript 引擎会继续执行 <code>console.log(&#39;done&#39;);</code> 语句，而此时并没有错误发生。直到 1 秒钟后，执行 <code>printTime</code> 函数时才发生错误，但此时除了在 <code>printTime</code> 函数内部捕获错误外，外层代码并无法捕获。</p><p>所以，涉及到异步代码，无法在调用时捕获，原因就是在捕获的当时，回调函数并未执行。</p><p>类似的，当我们处理一个事件时，在绑定事件的代码处，无法捕获事件处理函数的错误。</p>',62)],e={},o=(0,a(61935).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},60261:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-245c31a9","path":"/code/language/js/error.html","title":"错误处理","lang":"zh-CN","frontmatter":{"icon":"warn","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","next":"../typescript/","summary":"错误处理 在执行 JavaScript 代码的时候，有些情况下会发生错误。 错误分两种，一种是程序写的逻辑不对，导致代码执行异常。例如: 对于这种错误，要修复程序。 一种是执行过程中，程序可能遇到无法预测的异常情况而报错，例如，网络连接中断，读取不存在的文件，没有操作权限等。 对于这种错误，我们需要处理它，并可能需要给用户反馈。 错误处理是程序设计时必须要考","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/error.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"try ... catch ... finally","slug":"try-catch-finally","link":"#try-catch-finally","children":[]},{"level":2,"title":"错误类型","slug":"错误类型","link":"#错误类型","children":[]},{"level":2,"title":"抛出错误","slug":"抛出错误","link":"#抛出错误","children":[]},{"level":2,"title":"错误传播","slug":"错误传播","link":"#错误传播","children":[]},{"level":2,"title":"异步错误处理","slug":"异步错误处理","link":"#异步错误处理","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":6.08,"words":1824},"filePathRelative":"code/language/js/error.md","localizedDate":"2020年6月3日"}')}}]);