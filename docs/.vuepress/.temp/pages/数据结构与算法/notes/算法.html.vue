<template><div><h2 id="二分查找算法" tabindex="-1"><a class="header-anchor" href="#二分查找算法" aria-hidden="true">#</a> 二分查找算法</h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>二分查找算法也称折半查找(Binary Search)，它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列</p>
<ul>
<li>前提要求：
<ol>
<li>线性表必须采用顺序存储结构 -- 数组满足</li>
<li>要求元素实现了排序</li>
</ol>
</li>
</ul>
<h3 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h3>
<p>线性表是最基本、最简单、也是最常用的一种数据结构。一个线性表是n个具有相同特性的数据元素的有限序列。
线性表中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的（注意，这句话只适用大部分线性表，而不是全部。比如，循环链表逻辑层次上也是一种线性表（存储层次上属于链式存储，但是把最后一个数据元素的尾指针指向了首位结点）</p>
<h3 id="顺序存储结构" tabindex="-1"><a class="header-anchor" href="#顺序存储结构" aria-hidden="true">#</a> 顺序存储结构</h3>
<p>顺序存储结构是存储结构类型中的一种，该结构是把逻辑上相邻的结点存储在物理位置上相邻的存储单元中，顺序存储结构的主要优点是节省存储空间。结点之间的逻辑关系由存储单元的邻接关系来体现。</p>
<h3 id="查找过程" tabindex="-1"><a class="header-anchor" href="#查找过程" aria-hidden="true">#</a> 查找过程</h3>
<p>首先，假设表中元素是按升序排列，将表中间位置记录的关键字与查找关键字比较<br>
如果两者相等，则查找成功；<br>
否则利用中间位置记录将表分成前、后两个子表，<br>
如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，<br>
否则进一步查找后一子表。<br>
重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。</p>
<p><img src="/images/二分查找.png" alt="二分查找"></p>
<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h2>
<h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3>
<div class="custom-container tip"><p class="custom-container-title">原理机制</p>
<p>相邻元素两两比较，大的（小的）往后排，一轮比较结束后，最大值（最小值）出现在最大下标处，会比较多轮</p>
</div>
<p><img src="/images/冒泡排序.png" alt="冒泡排序"></p>
<h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ary <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">67</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>ary<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//i表示轮数</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>ary<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//j表示遍历元素的下标</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ary<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>ary<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">int</span> tmp <span class="token operator">=</span> ary<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    ary<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>ary<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    ary<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>ary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3>
<div class="custom-container tip"><p class="custom-container-title">定义</p>
<p>选择排序（Selection
sort）是一种简单直观的排序算法。它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。以此类推，直到全部待排序的数据元素的个数为零。选择排序是不稳定的排序方法。</p>
</div>
<h4 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则" aria-hidden="true">#</a> 排序规则</h4>
<ul>
<li>排序规则解读：从第一位开始，为每一位求应该保存的最小值，除了最后一位
<img src="/images/选择排序.png" alt="选择排序"></li>
</ul>
<h4 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性" aria-hidden="true">#</a> 稳定性</h4>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>选择排序是给每个位置选择当前元素最小的，比如给第一个位置选择最小的，在剩余元素里面给第二个元素选择第二小的，依次类推，直到第n-1个元素，第n个元素不用选择了，因为只剩下它一个最大的元素了。那么，在一趟选择，如果一个元素比当前元素小，而该小的元素又出现在一个和当前元素相等的元素后面，那么交换后稳定性就被破坏了。举个例子，序列5
8 5 2 9，我们知道第一遍选择第1个元素5会和2交换，那么原序列中两个5的相对前后顺序就被破坏了，所以选择排序是一个不稳定的排序算法。</p>
<p>稳定性: 排序后相同元素的相对前后位置是否发生改变;若改变,则该算法是不稳定的;若不改变,则该算法是稳定的.</p>
<p>冒泡排序是稳定的排序算法.</p>
</div>
<h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3>
<div class="custom-container tip"><p class="custom-container-title">定义</p>
<p>插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个有效的算法 [1]
。插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增1的有序表。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">思想</p>
<p>将序列分为排好序部分与未排序部分,对未排序部分的元素进行遍历,将遍历到的元素插入到排好序部分适当的位置去,则排好序部分元素数量增1,直到未排序部分的元素数量为0,则所有元素插入完成,即排序完成.</p>
</div>
<p><img src="/images/插入排序.png" alt="插入排序"></p>
<h3 id="三种算法排序效率" tabindex="-1"><a class="header-anchor" href="#三种算法排序效率" aria-hidden="true">#</a> 三种算法排序效率</h3>
<div class="custom-container tip"><p class="custom-container-title">数组容量相同情况下对比</p>
<ul>
<li>
<p>数组容量为50000</p>
<ul>
<li>冒泡排序:3693毫秒</li>
<li>选择排序:1106毫秒</li>
<li>插入排序:366毫秒</li>
</ul>
</li>
<li>
<p>数组容量为100000</p>
<ul>
<li>冒泡排序:14995毫秒</li>
<li>选择排序:4138毫秒</li>
<li>插入排序:1470毫秒</li>
</ul>
</li>
<li>
<p>数组容量为200000</p>
<ul>
<li>冒泡排序:60749毫秒</li>
<li>选择排序:16143毫秒</li>
<li>插入排序:5823毫秒</li>
</ul>
</li>
</ul>
</div>
</div></template>
