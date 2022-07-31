---
title: JVM相关知识
---

## JVM内存结构
![JVM内存结构](/images/JVM内存结构.png)

## JVM调优
> 目的是降低full gc的触发频率

1. 扩大这个堆内存空间
   - 会增加老年代的可用空间，可以降低full gc的触发频率
   - 到了老年代中存活时间不长的这些对象，尽可能在年轻代中被回收走，解决办法为扩大年轻代的内存，而扩大堆内存能达到这个效果
2. 程序中尽量避免生成大对象
3. 可以调整年轻代和老年代比较以及年轻代中三个区域的比例（不太建议）
4. 更换GC位G1GC

### GC的迭代
1. SerialleGC  处理单线程程序
2. ParalleGC   正对并行程序
3. CMSGC       并发情况-从JDK1.5开始默认开启
4. G1GC        从JDK1.9开始默认开启

### 如何调整堆内存大小，以及调整各年代之间的比例
- 修改JVM堆大小方式：
找到IDEA安装目录下的-->bin-->idea.exe.vmoptions
~~~vmoptions
-server
-Xms128m //堆初始大小
-Xmx512m //最大堆内存
-XX:ReservedCodeCacheSize=240m
-XX:+UseConcMarkSweepGC  //指定GC
-XX:SoftRefLRUPolicyMSPerMB=50-ea
-XX:CICompilerCount=2-Dsun.io.useCanonPrefixCache=false
-Djdk.http.auth.tunneling.disabledSchemes=""
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
~~~

## GC常用算法
1. 复制算法 -- minor gc使用的
2. 标记-清除算法  缺点：可用的内存空间不连续，造成内存利用率不高
3. 标记-整理算法 -- full gc使用的