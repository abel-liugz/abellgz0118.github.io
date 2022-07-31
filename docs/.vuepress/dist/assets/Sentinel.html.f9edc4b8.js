import{_ as n,o as s,c as a,a as t}from"./app.fc6aae11.js";const e={},p=t(`<h2 id="\u4EC0\u4E48\u662Fsentinel" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fsentinel" aria-hidden="true">#</a> \u4EC0\u4E48\u662FSentinel</h2><p>Sentinel\u4E5F\u662FSpring Cloud Alibaba\u7684\u7EC4\u4EF6</p><p>Sentinel\u82F1\u6587\u7FFB\u8BD1&quot;\u54E8\u5175\\\u95E8\u536B&quot;</p><p>\u968F\u7740\u5FAE\u670D\u52A1\u7684\u6D41\u884C\uFF0C\u670D\u52A1\u548C\u670D\u52A1\u4E4B\u95F4\u7684\u7A33\u5B9A\u6027\u53D8\u5F97\u8D8A\u6765\u8D8A\u91CD\u8981\u3002Sentinel \u4EE5\u6D41\u91CF\u4E3A\u5207\u5165\u70B9\uFF0C\u4ECE\u6D41\u91CF\u63A7\u5236\u3001\u7194\u65AD\u964D\u7EA7\u3001\u7CFB\u7EDF\u8D1F\u8F7D\u4FDD\u62A4\u7B49\u591A\u4E2A\u7EF4\u5EA6\u4FDD\u62A4\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u3002</p><p>\u5B98\u7F51\u5730\u5740</p><p>https://sentinelguard.io/zh-cn/</p><p>\u4E0B\u8F7D\u5730\u5740</p><p>https://github.com/alibaba/Sentinel/releases</p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981sentinel" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981sentinel" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981Sentinel</h2><ul><li><p>\u4E30\u5BCC\u7684\u5E94\u7528\u573A\u666F</p><p>\u53CC11,\u79D2\u6740,12306\u62A2\u706B\u8F66\u7968</p></li><li><p>\u5B8C\u5907\u7684\u5B9E\u65F6\u72B6\u6001\u76D1\u63A7</p><p>\u53EF\u4EE5\u652F\u6301\u663E\u793A\u5F53\u524D\u9879\u76EE\u5404\u4E2A\u670D\u52A1\u7684\u8FD0\u884C\u548C\u538B\u529B\u72B6\u6001,\u5206\u6790\u51FA\u6BCF\u53F0\u670D\u52A1\u5668\u5904\u7406\u7684\u79D2\u7EA7\u522B\u7684\u6570\u636E</p></li><li><p>\u5E7F\u6CDB\u7684\u5F00\u6E90\u751F\u6001</p><p>\u5F88\u591A\u6280\u672F\u53EF\u4EE5\u548CSentinel\u8FDB\u884C\u6574\u5408,SpringCloud,Dubbo,\u800C\u4E14\u4F9D\u8D56\u5C11\u914D\u7F6E\u7B80\u5355</p></li><li><p>\u5B8C\u5584\u7684SPI\u6269\u5C55</p><p>Sentinel\u652F\u6301\u7A0B\u5E8F\u8BBE\u7F6E\u5404\u79CD\u81EA\u5B9A\u4E49\u7684\u89C4\u5219</p></li></ul><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><p>\u6211\u4EEC\u627E\u4E00\u4E2A\u76F8\u5BF9\u7B80\u5355\u7684\u6A21\u5757\u6D4B\u8BD5\u548C\u89C2\u5BDF\u9650\u6D41\u6548\u679C</p><p>\u4EE5csmall-stock-webapi\u6A21\u5757\u4E3A\u4F8B</p><p>\u6DFB\u52A0pom\u4F9D\u8D56\u5982\u4E0B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application-dev.yml\u4FEE\u6539\u914D\u7F6E\u5982\u4E0B</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">transport</span><span class="token punctuation">:</span>
        <span class="token key atrule">dashboard</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8080</span> <span class="token comment"># \u914D\u7F6ESentinel\u4EEA\u8868\u53F0\u7684\u4F4D\u7F6E</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8721</span> <span class="token comment"># \u771F\u6B63\u6267\u884C\u9650\u6D41\u7684\u7AEF\u53E3\u4E5F\u8981\u8BBE\u7F6E\u4E00\u4E0B,\u6CE8\u610F\u8FD9\u4E2A\u7AEF\u53E3\u5176\u4ED6\u5FAE\u670D\u52A1\u9879\u76EE\u4E0D\u80FD\u76F8\u540C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sentinel.transport.port\u6BCF\u4E2A\u5FAE\u670D\u52A1\u9879\u76EE\u4E0D\u80FD\u76F8\u540C</p><h2 id="\u6D41\u63A7\u4E0E\u964D\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u6D41\u63A7\u4E0E\u964D\u7EA7" aria-hidden="true">#</a> \u6D41\u63A7\u4E0E\u964D\u7EA7</h2><p>Sentinel\u9650\u6D41\u9488\u5BF9\u63A7\u5236\u5C42\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u8981\u5230Controller\u7C7B\u4E2D\u7684\u65B9\u6CD5\u4E0A\u53BB\u505A\u8BBE\u7F6E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/reduce/count&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u51CF\u5C11\u5546\u54C1\u5E93\u5B58\u4E1A\u52A1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// @SentinelResource\u6807\u8BB0\u7684\u65B9\u6CD5\u4F1A\u88ABSentinel\u76D1\u63A7</span>
<span class="token comment">// ()\u91CC\u9762\u7684\u5185\u5BB9\u662F\u8FD9\u4E2A\u76D1\u63A7\u7684\u540D\u79F0,\u6211\u4EEC\u53EF\u4EE5\u5728&quot;\u4EEA\u8868\u53F0&quot;\u4E2D\u770B\u5230</span>
<span class="token comment">// \u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193</span>
<span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span><span class="token string">&quot;\u51CF\u5C11\u5E93\u5B58\u65B9\u6CD5(\u63A7\u5236\u5668)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">JsonResult</span> <span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span><span class="token class-name">StockReduceCountDTO</span> stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
    stockService<span class="token punctuation">.</span><span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span>stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">JsonResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u5546\u54C1\u5E93\u5B58\u51CF\u5C11\u5B8C\u6210!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u88AB\u6D41\u63A7\u7684\u8BF7\u6C42\u53EA\u6709\u4E00\u4E2A\u9519\u8BEF,\u6CA1\u6709\u9519\u8BEF\u63D0\u793A,\u4E0D\u65B9\u4FBF\u7ED9\u7528\u6237\u53CD\u9988</p><p>\u6211\u4EEC\u5E94\u8BE5\u5728\u5F00\u53D1\u65F6,\u5BF9\u4E8E\u88AB\u6D41\u63A7\u7684\u8BF7\u6C42\u7ED9\u4E0E\u76F8\u5173\u63D0\u793A</p><p>StockController\u4E2D\u7F16\u5199\u4EE3\u7801\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">IStockService</span> stockService<span class="token punctuation">;</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/reduce/count&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u51CF\u5C11\u5546\u54C1\u5E93\u5B58\u4E1A\u52A1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// @SentinelResource\u6807\u8BB0\u7684\u65B9\u6CD5\u4F1A\u88ABSentinel\u76D1\u63A7</span>
<span class="token comment">// value\u7684\u503C\u662F\u8FD9\u4E2A\u76D1\u63A7\u7684\u540D\u79F0,\u6211\u4EEC\u53EF\u4EE5\u5728&quot;\u4EEA\u8868\u53F0&quot;\u4E2D\u770B\u5230</span>
<span class="token comment">// blockHandler\u7684\u503C\u6307\u5B9A\u4E86\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5\u540D\u79F0</span>
<span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u51CF\u5C11\u5E93\u5B58\u65B9\u6CD5(\u63A7\u5236\u5668)&quot;</span><span class="token punctuation">,</span>blockHandler <span class="token operator">=</span> <span class="token string">&quot;blockError&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">JsonResult</span> <span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span><span class="token class-name">StockReduceCountDTO</span> stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
    stockService<span class="token punctuation">.</span><span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span>stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">JsonResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u5546\u54C1\u5E93\u5B58\u51CF\u5C11\u5B8C\u6210!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Sentinel \u9650\u6D41\u65B9\u6CD5\u5E94\u8BE5\u6EE1\u8DB3\u5982\u4E0B\u8981\u6C42</span>
<span class="token comment">// 1.\u5FC5\u987B\u662Fpublic\u4FEE\u6539</span>
<span class="token comment">// 2.\u8FD4\u56DE\u503C\u7C7B\u578B\u5FC5\u987B\u548C\u63A7\u5236\u65B9\u6CD5\u4E00\u81F4(JsonResult)</span>
<span class="token comment">// 3.\u65B9\u6CD5\u540D\u79F0\u8981\u548C\u63A7\u5236\u5668\u65B9\u6CD5\u9650\u6D41\u6CE8\u89E3\u4E2D\u89C4\u5B9A\u7684\u540D\u79F0\u4E00\u81F4(blockError)</span>
<span class="token comment">// 4.\u53C2\u6570\u5217\u8868\u5FC5\u987B\u548C\u63A7\u5236\u5668\u4E00\u81F4,\u53EF\u4EE5\u5728\u6240\u4EE5\u53C2\u6570\u540E\u58F0\u660EBlockException\u6765\u83B7\u5F97\u9650\u6D41\u5F02\u5E38</span>
<span class="token keyword">public</span> <span class="token class-name">JsonResult</span> <span class="token function">blockError</span><span class="token punctuation">(</span><span class="token class-name">StockReduceCountDTO</span> stockReduceCountDTO<span class="token punctuation">,</span>
                             <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">JsonResult</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span><span class="token class-name">ResponseCode</span><span class="token punctuation">.</span>BAD_REQUEST<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u5668\u5FD9,\u8BF7\u7A0D\u540E\u518D\u8BD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u964D\u7EA7\u529F\u80FD\u548C\u6211\u4EEC\u4E4B\u524D\u5B66\u4E60\u7684\u7EDF\u4E00\u5F02\u5E38\u5904\u7406\u7C7B\u6709\u76F8\u4F3C\u7684\u5730\u65B9</p><p>\u4F46\u662F\u964D\u7EA7\u662FSentinel\u7684\u529F\u80FD</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/reduce/count&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u51CF\u5C11\u5546\u54C1\u5E93\u5B58\u4E1A\u52A1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// @SentinelResource\u6807\u8BB0\u7684\u65B9\u6CD5\u4F1A\u88ABSentinel\u76D1\u63A7</span>
<span class="token comment">// value\u7684\u503C\u662F\u8FD9\u4E2A\u76D1\u63A7\u7684\u540D\u79F0,\u6211\u4EEC\u53EF\u4EE5\u5728&quot;\u4EEA\u8868\u53F0&quot;\u4E2D\u770B\u5230</span>
<span class="token comment">// blockHandler\u7684\u503C\u6307\u5B9A\u4E86\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5\u540D\u79F0</span>
<span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u51CF\u5C11\u5E93\u5B58\u65B9\u6CD5(\u63A7\u5236\u5668)&quot;</span><span class="token punctuation">,</span>blockHandler <span class="token operator">=</span> <span class="token string">&quot;blockError&quot;</span><span class="token punctuation">,</span>
                    fallback <span class="token operator">=</span> <span class="token string">&quot;fallbackError&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">JsonResult</span> <span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span><span class="token class-name">StockReduceCountDTO</span> stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u751F\u6210\u968F\u673A\u51FA\u89E6\u53D1\u964D\u7EA7\u6D41\u7A0B</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> 
          <span class="token class-name">CoolSharkServiceException</span><span class="token punctuation">(</span><span class="token class-name">ResponseCode</span><span class="token punctuation">.</span>INTERNAL_SERVER_ERROR<span class="token punctuation">,</span><span class="token string">&quot;\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stockService<span class="token punctuation">.</span><span class="token function">reduceCommodityCount</span><span class="token punctuation">(</span>stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">JsonResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u5546\u54C1\u5E93\u5B58\u51CF\u5C11\u5B8C\u6210!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8FD9\u4E2A\u65B9\u6CD5\u662FSentinel\u6CE8\u89E3\u4E2Dfallback\u5C5E\u6027\u6307\u5B9A\u7684\u964D\u7EA7\u65B9\u6CD5</span>
<span class="token comment">// \u5F53\u524D\u63A7\u5236\u5668\u65B9\u6CD5\u8FD0\u884C\u53D1\u751F\u5F02\u5E38\u65F6,Sentinel\u4F1A\u8FD0\u884C\u4E0B\u9762\u7684\u964D\u7EA7\u65B9\u6CD5</span>
<span class="token comment">// \u964D\u7EA7\u65B9\u6CD5\u4E2D,\u53EF\u4EE5\u4E0D\u76F4\u63A5\u7ED3\u675F\u8BF7\u6C42,\u800C\u53BB\u8FD0\u884C\u4E00\u4E9B\u4EE3\u66FF\u4EE3\u7801\u6216\u8005\u8865\u6551\u63AA\u65BD</span>
<span class="token comment">// \u8BA9\u7528\u6237\u83B7\u5F97\u6700\u4F4E\u9650\u5EA6\u7684\u54CD\u5E94</span>
<span class="token keyword">public</span> <span class="token class-name">JsonResult</span> <span class="token function">fallbackError</span><span class="token punctuation">(</span><span class="token class-name">StockReduceCountDTO</span> stockReduceCountDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">JsonResult</span><span class="token punctuation">.</span><span class="token function">failed</span><span class="token punctuation">(</span><span class="token class-name">ResponseCode</span><span class="token punctuation">.</span>BAD_REQUEST<span class="token punctuation">,</span><span class="token string">&quot;\u56E0\u4E3A\u8FD0\u884C\u5F02\u5E38,\u670D\u52A1\u964D\u7EA7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>blockHandler\u548Cfallback\u7684\u533A\u522B</strong> \u4E24\u8005\u90FD\u662F\u4E0D\u80FD\u6B63\u5E38\u8C03\u7528\u8D44\u6E90\u8FD4\u56DE\u503C\u7684\u9876\u66FF\u5904\u7406\u903B\u8F91. blockHander\u53EA\u80FD\u5904\u7406BlockException \u6D41\u63A7\u9650\u5236\u4E4B\u540E\u7684\u903B\u8F91. fallback\u5904\u7406\u7684\u662F\u8D44\u6E90\u8C03\u7528\u5F02\u5E38\u7684\u964D\u7EA7\u903B\u8F91.</p></blockquote>`,29),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","Sentinel.html.vue"]]);export{k as default};
