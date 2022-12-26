import{_ as e,c as t,o as a,a as r}from"./app.b96ad919.js";const g=JSON.parse('{"title":"Namespace: Network","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Enumerations","slug":"enumerations","link":"#enumerations","children":[]},{"level":3,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[]},{"level":3,"title":"Type Aliases","slug":"type-aliases","link":"#type-aliases","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]}]},{"level":2,"title":"Type Aliases","slug":"type-aliases-1","link":"#type-aliases-1","children":[{"level":3,"title":"HttpResponse","slug":"httpresponse","link":"#httpresponse","children":[]},{"level":3,"title":"TransactionType","slug":"transactiontype","link":"#transactiontype","children":[]}]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"fetch","slug":"fetch","link":"#fetch","children":[]},{"level":3,"title":"generalHttpRequest","slug":"generalhttprequest","link":"#generalhttprequest","children":[]},{"level":3,"title":"getUrlParameter","slug":"geturlparameter","link":"#geturlparameter","children":[]},{"level":3,"title":"httpRequestTransmitData","slug":"httprequesttransmitdata","link":"#httprequesttransmitdata","children":[]},{"level":3,"title":"urlDecode","slug":"urldecode","link":"#urldecode","children":[]},{"level":3,"title":"urlEncode","slug":"urlencode","link":"#urlencode","children":[]}]}],"relativePath":"modules/Network.Network.md"}'),d={name:"modules/Network.Network.md"},n=r(`<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./Network.html">Network</a> / Network</p><h1 id="namespace-network" tabindex="-1">Namespace: Network <a class="header-anchor" href="#namespace-network" aria-hidden="true">#</a></h1><p><a href="./Network.html">Network</a>.Network</p><p><strong><code>Author</code></strong></p><p><a href="http://tengxiao.li" target="_blank" rel="noreferrer">tengxiao.li</a></p><p><strong><code>Description</code></strong></p><p>暴露给用户使用的 Http 请求接口,用户可选的是网络身份(服务器,客户端)</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-hidden="true">#</a></h3><ul><li><a href="./../enums/Network.Network.HttpRequestType.html">HttpRequestType</a></li><li><a href="./../enums/Network.Network.HttpRequestURL.html">HttpRequestURL</a></li></ul><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h3><ul><li><a href="./../interfaces/Network.Network.RequestInit.html">RequestInit</a></li><li><a href="./../interfaces/Network.Network.Response.html">Response</a></li></ul><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h3><ul><li><a href="./Network.Network.html#httpresponse">HttpResponse</a></li><li><a href="./Network.Network.html#transactiontype">TransactionType</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="./Network.Network.html#fetch">fetch</a></li><li><a href="./Network.Network.html#generalhttprequest">generalHttpRequest</a></li><li><a href="./Network.Network.html#geturlparameter">getUrlParameter</a></li><li><a href="./Network.Network.html#httprequesttransmitdata">httpRequestTransmitData</a></li><li><a href="./Network.Network.html#urldecode">urlDecode</a></li><li><a href="./Network.Network.html#urlencode">urlEncode</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a></h2><h3 id="httpresponse" tabindex="-1">HttpResponse <a class="header-anchor" href="#httpresponse" aria-hidden="true">#</a></h3><p>Ƭ <strong>HttpResponse</strong>: (<code>result</code>: <code>boolean</code>, <code>content</code>: <code>string</code>, <code>responseCode</code>: <code>number</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>▸ (<code>result</code>, <code>content</code>, <code>responseCode</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>Http 请求的回调消息格式</p><p><strong><code>Precautions</code></strong></p><p>无需主动销毁，生命周期由 UObject 管理</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage: 请求否成功</td></tr><tr><td style="text-align:left;"><code>content</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 消息内容</td></tr><tr><td style="text-align:left;"><code>responseCode</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage: 状态码</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Network/index.d.ts:157</p><hr><h3 id="transactiontype" tabindex="-1">TransactionType <a class="header-anchor" href="#transactiontype" aria-hidden="true">#</a></h3><p>Ƭ <strong>TransactionType</strong>: (<code>isSuccess</code>: <code>boolean</code>, <code>content</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a></h4><p>▸ (<code>isSuccess</code>, <code>content</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>商城通信回调消息格式</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>isSuccess</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage: 通信结果</td></tr><tr><td style="text-align:left;"><code>content</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 消息内容</td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Network/index.d.ts:167</p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-hidden="true">#</a></h2><h3 id="fetch" tabindex="-1">fetch <a class="header-anchor" href="#fetch" aria-hidden="true">#</a></h3><p>▸ <strong>fetch</strong>(<code>url</code>, <code>init?</code>): <code>Promise</code>&lt;<a href="./../interfaces/Network.Network.Response.html"><code>Response</code></a>&gt;</p><p><strong><code>Description</code></strong></p><p>HTTP 请求</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:url</td></tr><tr><td style="text-align:left;"><code>init?</code></td><td style="text-align:left;"><a href="./../interfaces/Network.Network.RequestInit.html"><code>RequestInit</code></a></td><td style="text-align:left;">usage:请求信息 default:请求信息</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/Network.Network.Response.html"><code>Response</code></a>&gt;</p><p>响应信息</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Network/index.d.ts:55</p><hr><h3 id="generalhttprequest" tabindex="-1">generalHttpRequest <a class="header-anchor" href="#generalhttprequest" aria-hidden="true">#</a></h3><p>▸ <strong>generalHttpRequest</strong>(<code>response</code>, <code>requestUrl</code>, <code>param</code>, <code>jsonContent</code>, <code>requestType</code>): <code>boolean</code></p><p><strong><code>Author</code></strong></p><p><a href="http://tengxiao.li" target="_blank" rel="noreferrer">tengxiao.li</a></p><p><strong><code>Description</code></strong></p><p>通用 Http 请求</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><p><strong><code>Example</code></strong></p><p>使用示例:发送 Http 请求</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">generalHttpRequest(Response,Url,Param,JsonContent)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>response</code></td><td style="text-align:left;"><a href="./Network.Network.html#httpresponse"><code>HttpResponse</code></a></td><td style="text-align:left;">usage:OnHttpResponse</td></tr><tr><td style="text-align:left;"><code>requestUrl</code></td><td style="text-align:left;"><a href="./../enums/Network.Network.HttpRequestURL.html"><code>HttpRequestURL</code></a></td><td style="text-align:left;">usage:EHttpRequestURL</td></tr><tr><td style="text-align:left;"><code>param</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:string</td></tr><tr><td style="text-align:left;"><code>jsonContent</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">usage:any</td></tr><tr><td style="text-align:left;"><code>requestType</code></td><td style="text-align:left;"><a href="./../enums/Network.Network.HttpRequestType.html"><code>HttpRequestType</code></a></td><td style="text-align:left;">usage:0 是 Get 1 是 Post</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>bool</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Network/index.d.ts:199</p><hr><h3 id="geturlparameter" tabindex="-1">getUrlParameter <a class="header-anchor" href="#geturlparameter" aria-hidden="true">#</a></h3><p>▸ <strong>getUrlParameter</strong>(<code>url</code>, <code>parameterName</code>): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取 url 参数</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:url</td></tr><tr><td style="text-align:left;"><code>parameterName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:参数名</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>string</code></p><p>参数值</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Network/index.d.ts:77</p><hr><h3 id="httprequesttransmitdata" tabindex="-1">httpRequestTransmitData <a class="header-anchor" href="#httprequesttransmitdata" aria-hidden="true">#</a></h3><p>▸ <strong>httpRequestTransmitData</strong>(<code>response</code>, <code>paramUrl</code>, <code>jsonContent</code>, <code>requestType</code>): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>Http 请求接口</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>response</code></td><td style="text-align:left;"><a href="./Network.Network.html#httpresponse"><code>HttpResponse</code></a></td><td style="text-align:left;">usage: 请求的回调</td></tr><tr><td style="text-align:left;"><code>paramUrl</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 请求的参数和值</td></tr><tr><td style="text-align:left;"><code>jsonContent</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 请求数据内容，json 格式</td></tr><tr><td style="text-align:left;"><code>requestType</code></td><td style="text-align:left;"><a href="./../enums/Network.Network.HttpRequestType.html"><code>HttpRequestType</code></a></td><td style="text-align:left;">usage: 请求类型。HttpRequestType 枚举值</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>请求是否发送成功</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Network/index.d.ts:177</p><hr><h3 id="urldecode" tabindex="-1">urlDecode <a class="header-anchor" href="#urldecode" aria-hidden="true">#</a></h3><p>▸ <strong>urlDecode</strong>(<code>str</code>): <code>string</code></p><p><strong><code>Description</code></strong></p><p>url 解码</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:内容</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>string</code></p><p>解码后的内容</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Network/index.d.ts:69</p><hr><h3 id="urlencode" tabindex="-1">urlEncode <a class="header-anchor" href="#urlencode" aria-hidden="true">#</a></h3><p>▸ <strong>urlEncode</strong>(<code>str</code>): <code>string</code></p><p><strong><code>Description</code></strong></p><p>url 转码</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:内容</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>string</code></p><p>转码后的内容</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Network/index.d.ts:62</p>`,133),s=[n];function o(l,i,c,h,p,f){return a(),t("div",null,s)}const y=e(d,[["render",o]]);export{g as __pageData,y as default};
