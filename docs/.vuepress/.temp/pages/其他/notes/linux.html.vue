<template><div><h2 id="linux操作系统的目录结构" tabindex="-1"><a class="header-anchor" href="#linux操作系统的目录结构" aria-hidden="true">#</a> Linux操作系统的目录结构</h2>
<p><img src="/images/linux目录结构.png" alt="linux目录结构"></p>
<ul>
<li>/ ：根目录</li>
<li>/bin ：保存命令文件</li>
<li>/dev ：保存外部设备
<ul>
<li>|-mnt ：挂载</li>
</ul>
</li>
<li>/etc ：所有的配置文件</li>
<li>/home ：用户的主目录</li>
<li>/usr ：应用程序的文件</li>
</ul>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<ul>
<li>
<p>Linux命令的格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>命令 -选项<span class="token punctuation">..</span>. 参数1 参数2 参数3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>ls命令 - 列出当前目录的所有子目录及文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ls：显示某目录下所有的目录及文件
选项：每个命令都会有若干个选项，每个选项都代表一种功能
<span class="token function">ls</span> -l ：以长格式显示当前目录下的所有子目录及文件
<span class="token function">ls</span> -a ：显示当前目录下所有目录及文件，包括隐藏文件
<span class="token function">ls</span> -la ：以长格式列出当前目录下所有的目录以及文件，包括隐藏文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>命令帮助手册</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>命令 --help ：查看指定命令的详细信息，eg：ls --help
<span class="token function">man</span> 命令 ：查看给定命令的详细信息，eg：man <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>pwd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pwd：显示当前所处目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>cd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>切换到指定的目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>  切换到上一级目录
<span class="token builtin class-name">cd</span> /etc

<span class="token builtin class-name">cd</span>  切换到指定的目录，可以是绝对路径可以是相对路径
<span class="token builtin class-name">cd</span>  /  使用绝对路径
<span class="token builtin class-name">cd</span>  <span class="token punctuation">..</span>  使用相对路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>more:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>more命令：查看更多  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>|  :管道符</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>用法： <span class="token function">ls</span><span class="token operator">|</span><span class="token function">more</span>    前一个命令的结果作为后一个命令的数据源
		
常见的用法：
    <span class="token function">ls</span><span class="token operator">|</span><span class="token function">grep</span> tomcat    grep命令：对数据进行筛选
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>mkdir  - 创建文件夹</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>用法：mkdir  文件夹名称
-创建一级目录： <span class="token function">mkdir</span>  目录名称  不能创建多级目录
-创建多级目录： <span class="token function">mkdir</span> -p a/b/c  创建多级目录
    				-p ：parents 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>touch  命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>作用1：创建新文件
      <span class="token function">touch</span>  不存在的文件名   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>cp  命令  复制</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span>  源文件/文件夹  目标文件夹/文件
  
  复制文件夹（下有内容）到另一个文件夹
    	必须使用递归复制
    		选项： -r  递归    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>vim   命令  编辑文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> hello.txt
对文件进行编辑，需要切换模式，
    <span class="token number">1</span>.按INSERT键进入编辑模式，就可以开始编辑文件内容
    <span class="token number">2</span>.编辑完成，需要保存且退出文件编辑 ，先按ESC退出编辑模式，然后输入 :wq 保存并退出文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>cat 命令  - 查看文件内容</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</div></template>
