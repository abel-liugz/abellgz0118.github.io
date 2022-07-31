import{_ as n,o as s,c as a,a as p}from"./app.fc6aae11.js";var t="/images/quartz\u6838\u5FC3\u7EC4\u5EFA.png",e="/images/cron\u8868\u8FBE\u5F0F.png";const o={},c=p('<h1 id="quartz" tabindex="-1"><a class="header-anchor" href="#quartz" aria-hidden="true">#</a> Quartz</h1><h2 id="\u4EC0\u4E48\u662Fquartz" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fquartz" aria-hidden="true">#</a> \u4EC0\u4E48\u662FQuartz</h2><p>quartz:\u77F3\u82F1\u949F\u7684\u610F\u601D</p><p>\u662F\u4E00\u4E2A\u5F53\u4ECA\u5E02\u9762\u4E0A\u6D41\u884C\u7684\u9AD8\u6548\u7684\u4EFB\u52A1\u8C03\u7528\u7BA1\u7406\u5DE5\u5177</p><p>\u7531OpenSymphony\u5F00\u6E90\u7EC4\u7EC7\u5F00\u53D1</p><p>Symphony:\u4EA4\u54CD\u4E50</p><p>\u662Fjava\u7F16\u5199\u7684,\u6211\u4EEC\u4F7F\u7528\u8D39\u65F6\u9700\u8981\u5BFC\u5165\u4F9D\u8D56\u5373\u53EF</p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981quartz" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981quartz" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981Quartz</h2><p>\u4EC0\u4E48\u662F\u4EFB\u52A1\u8C03\u5EA6</p><p>\u6240\u8C13\u4EFB\u52A1\u8C03\u7528,\u5C31\u662F\u6267\u884C\u67D0\u4E9B\u5177\u4F53\u52A8\u4F5C\u7684\u65F6\u95F4\u8BA1\u5212</p><p>\u6211\u4EEC\u4F7F\u7528\u8FC7\u7684\u6700\u7B80\u5355\u7684\u8C03\u5EA6\u65B9\u6CD5\u5C31\u662FTimer</p><p>\u4F46\u662FTimer\u7684\u8C03\u5EA6\u529F\u80FD\u8FC7\u4E8E\u5355\u4E00,\u53EA\u80FD\u662F\u6307\u5B9A\u65F6\u95F4\u7684\u5EF6\u65F6\u8C03\u7528\u548C\u5468\u671F\u8FD0\u884C</p><p>\u800CQuartz\u53EF\u4EE5\u66F4\u8BE6\u7EC6\u7684\u6307\u5B9A\u65F6\u95F4,\u8FDB\u884C\u8BA1\u5212\u8C03\u7528</p><h2 id="quartz\u6838\u5FC3\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#quartz\u6838\u5FC3\u7EC4\u4EF6" aria-hidden="true">#</a> Quartz\u6838\u5FC3\u7EC4\u4EF6</h2><p><img src="'+t+'" alt="quartz\u6838\u5FC3\u7EC4\u5EFA.png"></p><p>\u8C03\u5EA6\u5668:Scheduler</p><p>\u4EFB\u52A1:Job</p><p>\u89E6\u53D1\u5668:Trigger</p><p>\u8C03\u5EA6\u5668\u6765\u914D\u7F6E\\\u8BA1\u5212\u4EC0\u4E48\u65F6\u95F4\u89E6\u53D1\u4EC0\u4E48\u4EFB\u52A1</p><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u8C03\u5EA6\u5668\u89C4\u5B9A\u4EC0\u4E48\u65F6\u95F4\u505A\u4EC0\u4E48\u4E8B\u60C5</p><ul><li>job(\u5DE5\u4F5C\\\u4EFB\u52A1):Quartz \u5B9E\u73B0\u8FC7\u7A0B\u4E2D\u662F\u4E00\u4E2A\u63A5\u53E3,\u63A5\u53E3\u4E2D\u6709\u4E00\u4E2A\u65B9\u6CD5execute(\u6267\u884C\u7684\u610F\u601D)</li></ul><p>\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u7C7B,\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3,\u5728\u65B9\u6CD5\u4E2D\u7F16\u5199\u8981\u8FDB\u884C\u7684\u64CD\u4F5C(\u6267\u884C\u5177\u4F53\u4EFB\u52A1)</p><p>\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2AJobDetail\u7684\u7C7B\u578B\u7684\u5BF9\u8C61,Quartz\u6BCF\u6B21\u6267\u884Cjob\u65F6</p><p>\u4F1A\u5B9E\u4F8B\u5316job\u7C7B\u578B\u5BF9\u8C61,\u53BB\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5,JobDetail\u662F\u7528\u6765\u63CF\u8FF0Job\u5B9E\u73B0\u7C7B</p><p>\u7684\u9759\u6001\u4FE1\u606F, \u6BD4\u5982\u4EFB\u52A1\u8FD0\u884C\u65F6\u5728Quartz\u4E2D\u7684\u540D\u79F0</p><ul><li><p>Trigger(\u89E6\u53D1\u5668):\u80FD\u591F\u63CF\u8FF0\u89E6\u53D1\u6307\u5B9Ajob\u7684\u89C4\u5219,\u5206\u4E3A\u7B80\u5355\u89E6\u53D1\u548C\u590D\u6742\u89E6\u53D1</p><p>\u7B80\u5355\u89E6\u53D1\u53EF\u4EE5\u4F7F\u7528SimplTrigger\u5B9E\u73B0\u7C7B.\u529F\u80FD\u7C7B\u4F3Ctimer</p><p>\u590D\u6742\u89E6\u53D1\u53EF\u4EE5\u4F7F\u7528CronTrigger\u5B9E\u73B0\u7C7B,\u5185\u90E8\u5229\u7528cron\u8868\u8FBE\u5F0F\u63CF\u8FF0\u5404\u79CD\u590D\u6742\u7684\u65F6\u95F4\u8C03\u5EA6\u8BA1\u5212</p></li><li><p>Scheduler(\u8C03\u5EA6\u5668):\u4E00\u4E2A\u53EF\u4EE5\u89C4\u5B9A\u54EA\u4E2A\u89E6\u53D1\u5668\u7ED1\u5B9A\u54EA\u4E2Ajob\u7684\u5BB9\u5668</p><p>\u5728\u8C03\u5EA6\u5668\u4E2D\u4FDD\u5B58\u5168\u90E8\u7684Quartz \u4FDD\u5B58\u7684\u4EFB\u52A1</p><p>SpringBoot\u6846\u67B6\u4E0B,\u6DFB\u52A0Quartz\u4F9D\u8D56\u540E,\u8C03\u5EA6\u5668\u7531SpringBoot\u7BA1\u7406,\u6211\u4EEC\u4E0D\u9700\u8981\u7F16\u5199</p></li></ul><h2 id="cron\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#cron\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> Cron\u8868\u8FBE\u5F0F</h2><p><img src="'+e+`" alt="cron\u8868\u8FBE\u5F0F.png"></p><ul><li><p>* \u8868\u793A\u4EFB\u4F55\u503C,\u5982\u679C\u5728\u5206\u7684\u5B57\u6BB5\u4E0A\u7F16\u5199*,\u8868\u793A\u6BCF\u5206\u949F\u90FD\u4F1A\u89E6\u53D1</p></li><li><p>, \u662F\u4E2A\u5206\u5272\u7B26\u5982\u679C\u79D2\u5B57\u6BB5\u6211\u60F320\u79D2\u548C40\u79D2\u65F6\u89E6\u53D1\u4E24\u6B21\u5C31\u5199 20,40</p></li><li><p>- \u8868\u793A\u4E00\u4E2A\u533A\u95F4 \u79D2\u5B57\u6BB55-10 \u8868\u793A 5,6,7,8,9,10</p></li><li><p>/ \u8868\u793A\u9012\u589E\u89E6\u53D1 \u79D2\u5B57\u6BB5 5/10\u8868\u793A5\u79D2\u5F00\u59CB\u6BCF\u969410\u79D2\u89E6\u53D1\u4E00\u6B21</p><p>\u65E5\u5B57\u6BB5\u7F16\u51991/3\u8868\u793A\u4ECE\u6BCF\u67081\u65E5\u8D77\u6BCF\u96943\u5929\u89E6\u53D1\u4E00\u6B21</p></li><li><p>? \u8868\u793A\u4E0D\u786E\u5B9A\u503C, \u56E0\u4E3A\u6211\u4EEC\u5728\u5B9A\u65E5\u671F\u65F6,\u4E00\u822C\u786E\u5B9A\u65E5\u671F\u5C31\u4E0D\u786E\u5B9A\u662F\u5468\u51E0,\u76F8\u53CD\u786E\u5B9A\u5468\u51E0\u65F6\u5C31\u4E0D\u786E\u5B9A\u65E5\u671F</p></li><li><p>L \u8868\u793Alast\u6700\u540E\u7684\u610F\u601D,\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u5F53\u6708\u7684\u6700\u540E\u4E00\u5929,\u5C31\u4F1A\u5728\u65E5\u5B57\u6BB5\u7528L\u8868\u793A,</p><p>\u5468\u5B57\u6BB5\u4F7F\u7528L\u8868\u793A\u6700\u540E\u4E00\u5468,\u4E00\u822C\u4F1A\u548C1-7\u7684\u6570\u5B57\u7EC4\u5408</p><p>\u4F8B\u59826L\u8868\u793A\u672C\u6708\u6700\u540E\u4E00\u5468\u7684\u5468\u4E94</p></li><li><p>W \u8868\u793A\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5(\u5355\u7EAF\u7684\u5468\u4E00\u5230\u5468\u4E94) \u5982\u679C\u65E5\u5B57\u6BB5\u7F16\u519915W\u8868\u793A</p><p>\u6BCF\u670815\u65E5\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5\u89E6\u53D1,\u5982\u679C15\u65E5\u662F\u5468\u516D\u5C3114\u65E5\u89E6\u53D1,\u5982\u679C15\u65E5\u662F\u5468\u65E5\u5C3116\u65E5\u89E6\u53D1</p></li></ul><p>\u200B LW\u901A\u5E38\u4E00\u8D77\u4F7F\u7528,\u8868\u793A\u672C\u6708\u7684\u6700\u540E\u4E00\u4E2A\u5DE5\u4F5C\u65E5</p><ul><li><p># \u8868\u793A\u7B2C\u51E0\u4E2A,\u53EA\u80FD\u4F7F\u7528\u5728\u5468\u5B57\u6BB5\u4E0A 6#3\u8868\u793A\u6BCF\u6708\u7684\u7B2C\u4E09\u4E2A\u5468\u4E94</p><p>\u5982\u679C#\u540E\u9762\u6570\u5B57\u5199\u5927\u4E86,\u662F\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u65E5\u671F,\u90A3\u5C31\u4E0D\u8FD0\u884C\u4E86</p><p>\u9002\u5408\u8BBE\u8BA1\u5728\u6BCD\u4EB2\u8282\u6216\u7236\u4EB2\u8282\u8FD9\u6837\u7684\u65E5\u671F\u8FD0\u884C</p></li></ul><p>\u53CC11\u7684\u89E6\u53D1</p><p>\u5982\u679C\u662F11\u670811\u65E50\u65F6\u89E6\u53D1</p><p>&quot;0 0 0 11 11 ?&quot;</p><p>\u6BCF\u4E2A\u670810\u65E5\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5\u65E9\u4E0A9\u70B9\u53D1\u5DE5\u8D44</p><p>0 0 9 10W * ?</p><p>\u7F51\u7EDC\u4E0A\u53EF\u7528\u7684Cron\u8868\u8FBE\u5F0F\u751F\u6210\u5668\u5F88\u591A</p><p>\u63A8\u8350\u4E00\u4E2Ahttp://cron.ciding.cc/</p><p>0 0 0 5/3 * ?</p><h2 id="springboot\u4F7F\u7528quartz" tabindex="-1"><a class="header-anchor" href="#springboot\u4F7F\u7528quartz" aria-hidden="true">#</a> SpringBoot\u4F7F\u7528Quartz</h2><p>SpringBoot\u6846\u67B6\u4E0B\u4F7F\u7528Quartz\u683C\u5F0F\u8FD8\u662F\u975E\u5E38\u56FA\u5B9A\u7684</p><p>\u6211\u4EEC\u9009\u7528\u4E4B\u524D\u5B66\u4E60\u5FAE\u670D\u52A1\u7684\u9879\u76EEcsmall\u51CF\u5C11\u5BF9\u5927\u9879\u76EE\u7684\u5F71\u54CD</p><p>\u9996\u5148\u6DFB\u52A0\u4F9D\u8D56</p><p>\u6A21\u5757pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--  SpringBoot Quartz\u4F9D\u8D56  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u7F16\u5199\u8981\u6267\u884C\u7684\u4EFB\u52A1</p><p>\u5F53\u524D\u9879\u76EE\u6A21\u5757\u4E2D\u521B\u5EFAquartz\u5305</p><p>\u5305\u4E2D\u521B\u5EFA\u4E00\u4E2AQuartzJob\u7684\u7C7B,\u5B9E\u73B0Job\u63A5\u53E3</p><p>\u4EE3\u7801\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuartzJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> jobExecutionContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8F93\u51FA\u5F53\u524D\u65F6\u95F4</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------&quot;</span><span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">&quot;---------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728quartz\u5305\u4E0B,\u7EE7\u7EED\u521B\u5EFA\u4E00\u4E2A\u7C7BQuartzConfig</p><p>\u8FD9\u4E2A\u7C7B\u662F\u4E00\u4E2ASpringBoot\u914D\u7F6E\u7C7B,\u5B83\u5B9E\u9645\u4E0A\u662FQuartz\u8C03\u5EA6\u5668\u7684\u914D\u7F6E</p><p>\u4EE3\u7801\u7684\u7F16\u5199\u57FA\u672C\u683C\u5F0F\u4E2A\u56FA\u5B9A\u7684,\u540C\u5B66\u4EEC\u9700\u8981\u4F7F\u7528\u65F6\u76F4\u63A5\u5957\u7528\u8FD9\u4E2A\u683C\u5F0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u8FD9\u4E2A\u914D\u7F6E\u7C7B\u5C31\u662F\u5728\u914D\u7F6E\u5DF2\u7ECF\u4FDD\u5B58\u5728Spring\u5BB9\u5668\u4E2D\u7684\u8C03\u5EA6\u5668Scheduler</span>
<span class="token comment">// \u6211\u4EEC\u9700\u8981\u6309\u4E0B\u9762\u683C\u5F0F\u8FDB\u884C\u914D\u7F6E,\u624D\u80FD\u8BA9Scheduler\u6B63\u5E38\u5DE5\u4F5C</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuartzConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2AJobDetail(\u5DE5\u4F5C\u8BE6\u60C5)\u7C7B\u5BF9\u8C61,\u4FDD\u5B58\u5230Spring\u5BB9\u5668\u4E2D,\u8FD9\u4E2A\u7C7B\u7528\u4E8E\u5C01\u88C5\u6211\u4EEC\u7F16\u5199\u7684job\u63A5\u53E3\u5B9E\u73B0\u7C7B</span>
    <span class="token comment">// @Bean\u6CE8\u89E3\u6807\u8BB0\u7684\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230Spring\u5BB9\u5668\u4E2D(\u65B9\u6CD5\u540D\u968F\u610F)</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JobDetail</span> <span class="token function">showTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;showTime\u65B9\u6CD5\u8FD0\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">QuartzJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>   <span class="token comment">// \u7ED1\u5B9A\u8981\u8FD0\u884C\u7684\u4EFB\u52A1\u7C7B\u7684\u53CD\u5C04</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">)</span>               <span class="token comment">// \u8BBE\u7F6E\u8FD9\u4E2Ajob\u7684\u540D\u79F0</span>
                <span class="token punctuation">.</span><span class="token function">storeDurably</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                     <span class="token comment">//</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4E0B\u9762\u8981\u58F0\u660E\u89E6\u53D1\u5668,Trigger,\u89E6\u53D1\u5668\u51B3\u5B9A\u6211\u4EEC\u7684\u5DE5\u4F5C\\\u4EFB\u52A1\u4F55\u65F6\u89E6\u53D1</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Trigger</span> <span class="token function">showTimeTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;showTime\u89E6\u53D1\u5668\u8FD0\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5B9A\u4E49Cron\u8868\u8FBE\u5F0F   \u6BCF\u5206\u949F\u89E6\u53D1\u4E00\u6B21\u7684\u5B9A\u4E49</span>
        <span class="token class-name">CronScheduleBuilder</span> cronScheduleBuilder<span class="token operator">=</span>
                <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0 0/1 * * * ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forJob</span><span class="token punctuation">(</span><span class="token function">showTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// \u7ED1\u5B9AJobDetail JobDetail\u5BF9\u8C61\u5DF2\u7ECF\u5728Spring\u5BB9\u5668\u4E2D</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;dateTrigger&quot;</span><span class="token punctuation">)</span>       <span class="token comment">// \u5B9A\u4E49\u89E6\u53D1\u5668\u540D\u79F0</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>cronScheduleBuilder<span class="token punctuation">)</span> <span class="token comment">// \u7ED1\u5B9ACron\u8868\u8FBE\u5F0F</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),i=[c];function l(u,r){return s(),a("div",null,i)}var k=n(o,[["render",l],["__file","Quartz.html.vue"]]);export{k as default};
