<template><div><h2 id="jvm内存结构" tabindex="-1"><a class="header-anchor" href="#jvm内存结构" aria-hidden="true">#</a> JVM内存结构</h2>
<p><img src="/images/JVM内存结构.png" alt="JVM内存结构"></p>
<h2 id="jvm调优" tabindex="-1"><a class="header-anchor" href="#jvm调优" aria-hidden="true">#</a> JVM调优</h2>
<blockquote>
<p>目的是降低full gc的触发频率</p>
</blockquote>
<ol>
<li>扩大这个堆内存空间
<ul>
<li>会增加老年代的可用空间，可以降低full gc的触发频率</li>
<li>到了老年代中存活时间不长的这些对象，尽可能在年轻代中被回收走，解决办法为扩大年轻代的内存，而扩大堆内存能达到这个效果</li>
</ul>
</li>
<li>程序中尽量避免生成大对象</li>
<li>可以调整年轻代和老年代比较以及年轻代中三个区域的比例（不太建议）</li>
<li>更换GC位G1GC</li>
</ol>
<h3 id="gc的迭代" tabindex="-1"><a class="header-anchor" href="#gc的迭代" aria-hidden="true">#</a> GC的迭代</h3>
<ol>
<li>SerialleGC  处理单线程程序</li>
<li>ParalleGC   正对并行程序</li>
<li>CMSGC       并发情况-从JDK1.5开始默认开启</li>
<li>G1GC        从JDK1.9开始默认开启</li>
</ol>
<h3 id="如何调整堆内存大小-以及调整各年代之间的比例" tabindex="-1"><a class="header-anchor" href="#如何调整堆内存大小-以及调整各年代之间的比例" aria-hidden="true">#</a> 如何调整堆内存大小，以及调整各年代之间的比例</h3>
<ul>
<li>修改JVM堆大小方式：
找到IDEA安装目录下的--&gt;bin--&gt;idea.exe.vmoptions</li>
</ul>
<div class="language-vmoptions ext-vmoptions line-numbers-mode"><pre v-pre class="language-vmoptions"><code>-server
-Xms128m //堆初始大小
-Xmx512m //最大堆内存
-XX:ReservedCodeCacheSize=240m
-XX:+UseConcMarkSweepGC  //指定GC
-XX:SoftRefLRUPolicyMSPerMB=50-ea
-XX:CICompilerCount=2-Dsun.io.useCanonPrefixCache=false
-Djdk.http.auth.tunneling.disabledSchemes=&quot;&quot;
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
-Djdk.attach.allowAttachSelf=true
-Dkotlinx.coroutines.debug=off
-Djdk.module.illegalAccess.silent=true  
堆配置    
    -Xms:初始堆大小    
    -Xmx：最大堆大小    
    -XX:NewSize=n:   设置年轻代大小
    -XX:NewRatio=n:  设置年轻代和年老代的比值,
  如：为3表示年轻代和年老代比值为1：3，年轻代占堆内存的1/4  
    -XX:SurvivorRatio=n: 年轻代中Eden区与两个Survivor区的比值。        
 注意Survivor区有两个。如3表示Eden：3 Survivor：2，   一个Survivor区占整个年轻代的1/5    
  -XX:MaxPermSize=n:设置永久代大小
       永久代:元空间
       
注意:修改完该文件后,idea启动项目发现修改不生效,此时需要修改配置环境以及一些设置.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gc常用算法" tabindex="-1"><a class="header-anchor" href="#gc常用算法" aria-hidden="true">#</a> GC常用算法</h2>
<ol>
<li>复制算法 -- minor gc使用的</li>
<li>标记-清除算法  缺点：可用的内存空间不连续，造成内存利用率不高</li>
<li>标记-整理算法 -- full gc使用的</li>
</ol>
</div></template>
