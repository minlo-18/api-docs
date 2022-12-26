import{_ as e,c as t,o as a,a as n}from"./app.b96ad919.js";const g=JSON.parse('{"title":"Namespace: Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Enumerations","slug":"enumerations","link":"#enumerations","children":[]},{"level":3,"title":"Classes","slug":"classes","link":"#classes","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"addClientListener","slug":"addclientlistener","link":"#addclientlistener","children":[]},{"level":3,"title":"addExitListener","slug":"addexitlistener","link":"#addexitlistener","children":[]},{"level":3,"title":"addFocusListener","slug":"addfocuslistener","link":"#addfocuslistener","children":[]},{"level":3,"title":"addLocalListener","slug":"addlocallistener","link":"#addlocallistener","children":[]},{"level":3,"title":"addOnPauseListener","slug":"addonpauselistener","link":"#addonpauselistener","children":[]},{"level":3,"title":"addOnResumeListener","slug":"addonresumelistener","link":"#addonresumelistener","children":[]},{"level":3,"title":"addPlayerJoinedListener","slug":"addplayerjoinedlistener","link":"#addplayerjoinedlistener","children":[]},{"level":3,"title":"addPlayerLeftListener","slug":"addplayerleftlistener","link":"#addplayerleftlistener","children":[]},{"level":3,"title":"addServerListener","slug":"addserverlistener","link":"#addserverlistener","children":[]},{"level":3,"title":"addUnfocusedListener","slug":"addunfocusedlistener","link":"#addunfocusedlistener","children":[]},{"level":3,"title":"dispatchLocal","slug":"dispatchlocal","link":"#dispatchlocal","children":[]},{"level":3,"title":"dispatchToAllClient","slug":"dispatchtoallclient","link":"#dispatchtoallclient","children":[]},{"level":3,"title":"dispatchToClient","slug":"dispatchtoclient","link":"#dispatchtoclient","children":[]},{"level":3,"title":"dispatchToServer","slug":"dispatchtoserver","link":"#dispatchtoserver","children":[]}]}],"relativePath":"modules/Events.Events.md"}'),s={name:"modules/Events.Events.md"},d=n(`<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./Events.html">Events</a> / Events</p><h1 id="namespace-events" tabindex="-1">Namespace: Events <a class="header-anchor" href="#namespace-events" aria-hidden="true">#</a></h1><p><a href="./Events.html">Events</a>.Events</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-hidden="true">#</a></h3><ul><li><a href="./../enums/Events.Events.DispatchEventResult.html">DispatchEventResult</a></li></ul><h3 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h3><ul><li><a href="./../classes/Events.Events.EventListener.html">EventListener</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./Events.Events.html#addclientlistener">addClientListener</a></li><li><a href="./Events.Events.html#addexitlistener">addExitListener</a></li><li><a href="./Events.Events.html#addfocuslistener">addFocusListener</a></li><li><a href="./Events.Events.html#addlocallistener">addLocalListener</a></li><li><a href="./Events.Events.html#addonpauselistener">addOnPauseListener</a></li><li><a href="./Events.Events.html#addonresumelistener">addOnResumeListener</a></li><li><a href="./Events.Events.html#addplayerjoinedlistener">addPlayerJoinedListener</a></li><li><a href="./Events.Events.html#addplayerleftlistener">addPlayerLeftListener</a></li><li><a href="./Events.Events.html#addserverlistener">addServerListener</a></li><li><a href="./Events.Events.html#addunfocusedlistener">addUnfocusedListener</a></li><li><a href="./Events.Events.html#dispatchlocal">dispatchLocal</a></li><li><a href="./Events.Events.html#dispatchtoallclient">dispatchToAllClient</a></li><li><a href="./Events.Events.html#dispatchtoclient">dispatchToClient</a></li><li><a href="./Events.Events.html#dispatchtoserver">dispatchToServer</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="addclientlistener" tabindex="-1">addClientListener <a class="header-anchor" href="#addclientlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addClientListener</strong>(<code>eventName</code>, <code>listener</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>服务器监听客户端发来的事件</p><p><strong><code>Effect</code></strong></p><p>只在服务端调用生效</p><p><strong><code>Precautions</code></strong></p><p>应该在服务器端的逻辑里面使用</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;">(<code>player</code>: <a href="./../classes/Gameplay.Gameplay.Player.html"><code>Player</code></a>, ...<code>params</code>: <code>unknown</code>[]) =&gt; <code>void</code></td><td style="text-align:left;">usage:监听回调 Player 发送事件的客户端 target 事件内容</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Events/index.d.ts:63</p><hr><h3 id="addexitlistener" tabindex="-1">addExitListener <a class="header-anchor" href="#addexitlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addExitListener</strong>(<code>callback</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>添加退出游戏时执行的回调函数</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在 233 悬浮球退出和 PIE 关闭窗口时生效。</p><p><strong><code>Example</code></strong></p><p>使用示例:调用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let listener = Events.addExitListener(this.testFunction);</span></span>
<span class="line"><span style="color:#A6ACCD;">public testFunction() {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除监听</span></span>
<span class="line"><span style="color:#A6ACCD;">listener.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>void</code></td><td style="text-align:left;">usage:需要触发的回调函数</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Events/index.d.ts:221</p><hr><h3 id="addfocuslistener" tabindex="-1">addFocusListener <a class="header-anchor" href="#addfocuslistener" aria-hidden="true">#</a></h3><p>▸ <strong>addFocusListener</strong>(<code>callback</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>添加窗口聚焦时执行的回调函数</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在 PIE 模式下生效。</p><p><strong><code>Example</code></strong></p><p>使用示例:调用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let listener = Events.addFocusListener(this.testFunction);</span></span>
<span class="line"><span style="color:#A6ACCD;">public testFunction() {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除监听</span></span>
<span class="line"><span style="color:#A6ACCD;">listener.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>void</code></td><td style="text-align:left;">usage:需要触发的回调函数</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Events/index.d.ts:151</p><hr><h3 id="addlocallistener" tabindex="-1">addLocalListener <a class="header-anchor" href="#addlocallistener" aria-hidden="true">#</a></h3><p>▸ <strong>addLocalListener</strong>(<code>eventName</code>, <code>listener</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>监听本地事件</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;">(...<code>params</code>: <code>unknown</code>[]) =&gt; <code>void</code></td><td style="text-align:left;">usage:监听回调</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Events/index.d.ts:40</p><hr><h3 id="addonpauselistener" tabindex="-1">addOnPauseListener <a class="header-anchor" href="#addonpauselistener" aria-hidden="true">#</a></h3><p>▸ <strong>addOnPauseListener</strong>(<code>callback</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>添加 OnPause 开始时执行的回调函数</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在 Android 和 IOS 生效。触发时机有切入后台、息屏和播广告。</p><p><strong><code>Example</code></strong></p><p>使用示例:调用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let listener = Events.addOnPauseListener(this.testFunction);</span></span>
<span class="line"><span style="color:#A6ACCD;">public testFunction() {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除监听</span></span>
<span class="line"><span style="color:#A6ACCD;">listener.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>void</code></td><td style="text-align:left;">usage:需要触发的回调函数</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Events/index.d.ts:185</p><hr><h3 id="addonresumelistener" tabindex="-1">addOnResumeListener <a class="header-anchor" href="#addonresumelistener" aria-hidden="true">#</a></h3><p>▸ <strong>addOnResumeListener</strong>(<code>callback</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>添加 OnPause 结束时执行的回调函数</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在 Android 和 IOS 生效。触发时机有切入后台、息屏和播广告后回到游戏。</p><p><strong><code>Example</code></strong></p><p>使用示例:调用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let listener = Events.addOnResumeListener(this.testFunction);</span></span>
<span class="line"><span style="color:#A6ACCD;">public testFunction(leaveDuration: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除监听</span></span>
<span class="line"><span style="color:#A6ACCD;">listener.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>leaveDuration</code>: <code>number</code>) =&gt; <code>void</code></td><td style="text-align:left;">usage:需要触发的回调函数，leaveDuration 指 OnPause 持续时长</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Events/index.d.ts:202</p><hr><h3 id="addplayerjoinedlistener" tabindex="-1">addPlayerJoinedListener <a class="header-anchor" href="#addplayerjoinedlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addPlayerJoinedListener</strong>(<code>listener</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>监听玩家进入 room 事件</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;">(<code>player</code>: <a href="./../classes/Gameplay.Gameplay.Player.html"><code>Player</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">usage:监听回调</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Events/index.d.ts:123</p><hr><h3 id="addplayerleftlistener" tabindex="-1">addPlayerLeftListener <a class="header-anchor" href="#addplayerleftlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addPlayerLeftListener</strong>(<code>listener</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>监听玩家离开 room 事件</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;">(<code>player</code>: <a href="./../classes/Gameplay.Gameplay.Player.html"><code>Player</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">usage:监听回调</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Events/index.d.ts:132</p><hr><h3 id="addserverlistener" tabindex="-1">addServerListener <a class="header-anchor" href="#addserverlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addServerListener</strong>(<code>eventName</code>, <code>listener</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>客户端监听服务器事件</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>应在客户端逻辑里调用</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;">(...<code>params</code>: <code>unknown</code>[]) =&gt; <code>void</code></td><td style="text-align:left;">usage:监听回调 params 事件内容</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Events/index.d.ts:87</p><hr><h3 id="addunfocusedlistener" tabindex="-1">addUnfocusedListener <a class="header-anchor" href="#addunfocusedlistener" aria-hidden="true">#</a></h3><p>▸ <strong>addUnfocusedListener</strong>(<code>callback</code>): <a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p><strong><code>Description</code></strong></p><p>添加窗口失焦时执行的回调函数</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在 PIE 模式下生效。</p><p><strong><code>Example</code></strong></p><p>使用示例:调用方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let listener = Events.addUnfocusedListener(this.testFunction);</span></span>
<span class="line"><span style="color:#A6ACCD;">public testFunction() {</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除监听</span></span>
<span class="line"><span style="color:#A6ACCD;">listener.disconnect();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">() =&gt; <code>void</code></td><td style="text-align:left;">usage:需要触发的回调函数</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><a href="./../classes/Events.Events.EventListener.html"><code>EventListener</code></a></p><p>返回一个事件监听器</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p>Events/index.d.ts:168</p><hr><h3 id="dispatchlocal" tabindex="-1">dispatchLocal <a class="header-anchor" href="#dispatchlocal" aria-hidden="true">#</a></h3><p>▸ <strong>dispatchLocal</strong>(<code>eventName</code>, <code>...params</code>): <a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p><strong><code>Description</code></strong></p><p>发送本地事件</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>...params</code></td><td style="text-align:left;"><code>unknown</code>[]</td><td style="text-align:left;">usage:事件内容</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p>返回发送本地事件的结果</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p>Events/index.d.ts:51</p><hr><h3 id="dispatchtoallclient" tabindex="-1">dispatchToAllClient <a class="header-anchor" href="#dispatchtoallclient" aria-hidden="true">#</a></h3><p>▸ <strong>dispatchToAllClient</strong>(<code>eventName</code>, <code>...params</code>): <a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p><strong><code>Description</code></strong></p><p>服务器发送事件给所有客户端</p><p><strong><code>Effect</code></strong></p><p>只在服务端调用生效</p><p><strong><code>Precautions</code></strong></p><p>应在服务器逻辑里调用</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>...params</code></td><td style="text-align:left;"><code>unknown</code>[]</td><td style="text-align:left;">usage:可变长参数</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p>返回事件发送结果</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p>Events/index.d.ts:113</p><hr><h3 id="dispatchtoclient" tabindex="-1">dispatchToClient <a class="header-anchor" href="#dispatchtoclient" aria-hidden="true">#</a></h3><p>▸ <strong>dispatchToClient</strong>(<code>player</code>, <code>eventName</code>, <code>...params</code>): <a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p><strong><code>Description</code></strong></p><p>服务器发送事件给指定客户端</p><p><strong><code>Effect</code></strong></p><p>只在服务端调用生效</p><p><strong><code>Precautions</code></strong></p><p>应在服务器逻辑里调用</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><a href="./../classes/Gameplay.Gameplay.Player.html"><code>Player</code></a></td><td style="text-align:left;">usage:客户端</td></tr><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>...params</code></td><td style="text-align:left;"><code>unknown</code>[]</td><td style="text-align:left;">usage:可变长参数</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-hidden="true">#</a></h4><p><a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p>返回事件发送结果</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p>Events/index.d.ts:100</p><hr><h3 id="dispatchtoserver" tabindex="-1">dispatchToServer <a class="header-anchor" href="#dispatchtoserver" aria-hidden="true">#</a></h3><p>▸ <strong>dispatchToServer</strong>(<code>eventName</code>, <code>...params</code>): <a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p><strong><code>Description</code></strong></p><p>客户端发送事件给服务器</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>应在客户端逻辑里面调用</p><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>eventName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:事件名</td></tr><tr><td style="text-align:left;"><code>...params</code></td><td style="text-align:left;"><code>unknown</code>[]</td><td style="text-align:left;">usage:可变长参数</td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-hidden="true">#</a></h4><p><a href="./../enums/Events.Events.DispatchEventResult.html"><code>DispatchEventResult</code></a></p><p>返回事件发送结果</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a></h4><p>Events/index.d.ts:75</p>`,241),r=[d];function l(i,o,c,h,p,f){return a(),t("div",null,r)}const v=e(s,[["render",l]]);export{g as __pageData,v as default};
