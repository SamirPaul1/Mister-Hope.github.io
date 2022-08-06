"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[59941],{8497:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(78e3);const o=[(0,a.uE)('<p>CPU 内部已经含有一些微指令，我们所使用的软件都要经过 CPU 内部的微指令集来达成才行。那这些指令集的设计主要又被分为两种设计理念，这就是目前世界上常见到的两种主要 CPU 架构，分别是: 精简指令集(RISC)与复杂指令集(CISC) 系统。</p><h2 id="精简指令集" tabindex="-1"><a class="header-anchor" href="#精简指令集" aria-hidden="true">#</a> 精简指令集</h2><p>精简指令集，(Reduced Instruction Set Computer, RISC) 的设计中，微指令集较为精简。每个指令的执行时间都很短，完成的动作也很单纯，指令的执行性能较佳；但是若要做复杂的事情，就要由多个指令来完成。常见的 RISC 微指令集 CPU 主要例如甲骨文(Oracle) 公司的 SPARC 系列、IBM 公司的 Power Architecture (包括 PowerPC) 系列、与 ARM 公司(ARM Holdings) 的 ARM CPU 系列等。</p><p>在应用方面，SPARC CPU 的电脑常用于学术领域的大型工作站中，包括银行金融体系的主要伺服器也都有这类的电脑架构；至于 PowerPC 架构的应用上，例如索尼(Sony)公司出产的 Play Station 3(PS3)就是使用 PowerPC 架构的 Cell 处理器；那 ARM 的 ARM 呢? 您常使用的各厂牌手机、PDA、导航系统、网络设备(交换器、路由器等)等，几乎都是使用 ARM 架构的 CPU。目前世界上使用范围最广的 CPU 可能就是 ARM 这种架构。</p><h2 id="复杂指令集" tabindex="-1"><a class="header-anchor" href="#复杂指令集" aria-hidden="true">#</a> 复杂指令集</h2><p>复杂指令集，(Complex Instruction Set Computer, CISC)。与 RISC 不同的，CISC 在微指令集的每个小指令可以执行一些较低阶的硬体操作，指令数目多而且复杂，每条指令的长度并不相同。因为指令执行较为复杂所以每条指令花费的时间较长，但每条个别指令可以处理的工作较为丰富。常见的 CISC 微指令集 CPU 主要有 AMD、Intel、VIA 等的 x86 架构的 CPU。</p><p>由于 AMD、Intel、VIA 所开发出来的 x86 架构 CPU 被大量使用于个人电脑(Personal computer)用途上面，因此，个人电脑常被称为 x86 架构的电脑! 那为何称为 x86 架构呢? 这是因为最早的那颗 Intel 发展出来的 CPU 代号称为 8086，后来依此架构又开发出 80286, 80386...，因此这种架构的 CPU 就被称为 x86 架构了。</p><p>在 2003 年以前由 Intel 所开发的 x86 架构 CPU 由 8 位数升级到 16、32 位数，后来 AMD 依此架构修改新一代的 CPU 为 64 位数， 为了区别两者的差异，因此 64 位数的个人电脑 CPU 又被统称为 x86_64 的架构。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>所谓的位数指的是 CPU 一次资料读取的最大量! 64 位数 CPU 代表 CPU 一次可以读写 64bits 这么多的资料，32 位数 CPU 则是 CPU 一次只能读取 32 位数的意思。因为 CPU 读取资料量有限制，因此能够从记忆体中读写的资料也就有所限制。所以，一般 32 位数的 CPU 所能读写的最大资料量是 4GB。</p></div><p>那么不同的 x86 架构的 CPU 有什么差异呢? 除了 CPU 的整体结构(如第二层快取、每次运行可执行的指令数等)之外， 主要是在于微指令集的不同。新的 x86 的 CPU 大多含有很先进的微指令集， 这些微指令集可以加速多媒体程序的运行，也能够加强虚拟化的性能，而且某些微指令集更能够增加能源效率，降低 CPU 耗电量。</p>',10)],n={},C=(0,r(61935).Z)(n,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,o)}]])},61935:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,a]of t)r[e]=a;return r}},96733:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-43d15734","path":"/hardware/structure.html","title":"CPU 的架构","lang":"zh-CN","frontmatter":{"title":"CPU 的架构","date":"2020-06-05T00:00:00.000Z","category":["硬件"],"summary":"CPU 内部已经含有一些微指令，我们所使用的软件都要经过 CPU 内部的微指令集来达成才行。那这些指令集的设计主要又被分为两种设计理念，这就是目前世界上常见到的两种主要 CPU 架构，分别是: 精简指令集(RISC)与复杂指令集(CISC) 系统。 精简指令集 精简指令集，(Reduced Instruction Set Computer, RISC) 的设","head":[["meta",{"property":"og:url","content":"https://mrhope.site/hardware/structure.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"CPU 的架构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"精简指令集","slug":"精简指令集","children":[]},{"level":2,"title":"复杂指令集","slug":"复杂指令集","children":[]}],"git":{"createdTime":1591861522000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":3.07,"words":921},"filePathRelative":"hardware/structure.md","localizedDate":"2020年6月5日"}')}}]);