import{_ as e,c as t,o as a,a as d}from"./app.b96ad919.js";const u=JSON.parse('{"title":"Class: AccountService","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"applySharedId","slug":"applysharedid","link":"#applysharedid","children":[]},{"level":3,"title":"createSharedId","slug":"createsharedid","link":"#createsharedid","children":[]},{"level":3,"title":"dataShowToOther","slug":"datashowtoother","link":"#datashowtoother","children":[]},{"level":3,"title":"downloadData","slug":"downloaddata","link":"#downloaddata","children":[]},{"level":3,"title":"downloadDefaultDataString","slug":"downloaddefaultdatastring","link":"#downloaddefaultdatastring","children":[]},{"level":3,"title":"fillAvatar","slug":"fillavatar","link":"#fillavatar","children":[]},{"level":3,"title":"getNickName","slug":"getnickname","link":"#getnickname","children":[]},{"level":3,"title":"getOpenId","slug":"getopenid","link":"#getopenid","children":[]},{"level":3,"title":"getUserData","slug":"getuserdata","link":"#getuserdata","children":[]},{"level":3,"title":"getUserId","slug":"getuserid","link":"#getuserid","children":[]},{"level":3,"title":"setUserData","slug":"setuserdata","link":"#setuserdata","children":[]},{"level":3,"title":"uploadData","slug":"uploaddata","link":"#uploaddata","children":[]},{"level":3,"title":"getInstance","slug":"getinstance","link":"#getinstance","children":[]}]}],"relativePath":"classes/Service.Service.AccountService.md"}'),r={name:"classes/Service.Service.AccountService.md"},i=d('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Service.html">Service</a> / <a href="./../modules/Service.Service.html">Service</a> / AccountService</p><h1 id="class-accountservice" tabindex="-1">Class: AccountService <a class="header-anchor" href="#class-accountservice" aria-hidden="true">#</a></h1><p><a href="./../modules/Service.html">Service</a>.<a href="./../modules/Service.Service.html">Service</a>.AccountService</p><p><strong><code>Author</code></strong></p><p>huipeng.jia &amp; guang.deng</p><p><strong><code>Instance</code></strong></p><p><strong><code>Description</code></strong></p><p>用户账号信息管理相关服务</p><p><strong><code>Precautions</code></strong></p><p>单例类，请使用 getInstance 获取对象</p><p><strong><code>Network Status</code></strong></p><p>usage: 客户端</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.AccountService.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.AccountService.html#applysharedid">applySharedId</a></li><li><a href="./Service.Service.AccountService.html#createsharedid">createSharedId</a></li><li><a href="./Service.Service.AccountService.html#datashowtoother">dataShowToOther</a></li><li><a href="./Service.Service.AccountService.html#downloaddata">downloadData</a></li><li><a href="./Service.Service.AccountService.html#downloaddefaultdatastring">downloadDefaultDataString</a></li><li><a href="./Service.Service.AccountService.html#fillavatar">fillAvatar</a></li><li><a href="./Service.Service.AccountService.html#getnickname">getNickName</a></li><li><a href="./Service.Service.AccountService.html#getopenid">getOpenId</a></li><li><a href="./Service.Service.AccountService.html#getuserdata">getUserData</a></li><li><a href="./Service.Service.AccountService.html#getuserid">getUserId</a></li><li><a href="./Service.Service.AccountService.html#setuserdata">setUserData</a></li><li><a href="./Service.Service.AccountService.html#uploaddata">uploadData</a></li><li><a href="./Service.Service.AccountService.html#getinstance">getInstance</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new AccountService</strong>()</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="applysharedid" tabindex="-1">applySharedId <a class="header-anchor" href="#applysharedid" aria-hidden="true">#</a></h3><p>▸ <strong>applySharedId</strong>(<code>character</code>, <code>id</code>, <code>callback</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>应用分享 Id 的角色数据</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage:分享换装数据的角色</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:分享 Id</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#boolresponse"><code>BoolResponse</code></a></td><td style="text-align:left;">usage: 回调参数，true:应用成功；false:应用失败</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Service/index.d.ts:135</p><hr><h3 id="createsharedid" tabindex="-1">createSharedId <a class="header-anchor" href="#createsharedid" aria-hidden="true">#</a></h3><p>▸ <strong>createSharedId</strong>(<code>character</code>, <code>callback</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>生成分享 Id</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage:分享换装数据的角色</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#stringresponse"><code>StringResponse</code></a></td><td style="text-align:left;">usage: 回调参数，返回生成的 Id</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Service/index.d.ts:124</p><hr><h3 id="datashowtoother" tabindex="-1">dataShowToOther <a class="header-anchor" href="#datashowtoother" aria-hidden="true">#</a></h3><p>▸ <strong>dataShowToOther</strong>(<code>index</code>, <code>isOpen</code>, <code>callback?</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置数据是否公开给其他用户</p><p><strong><code>Effect</code></strong></p><p>客户端</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:资源位(0-5) default:0,主角资源位</td></tr><tr><td style="text-align:left;"><code>isOpen</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:是否公开</td></tr><tr><td style="text-align:left;"><code>callback?</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#boolresponse"><code>BoolResponse</code></a></td><td style="text-align:left;">usage:设置是否成功的回调 default:无回调</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Service/index.d.ts:113</p><hr><h3 id="downloaddata" tabindex="-1">downloadData <a class="header-anchor" href="#downloaddata" aria-hidden="true">#</a></h3><p>▸ <strong>downloadData</strong>(<code>character</code>, <code>callback?</code>, <code>index?</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>下载角色形象并应用到当前角色身上</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage:要应用换装数据的角色</td></tr><tr><td style="text-align:left;"><code>callback?</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#boolresponse"><code>BoolResponse</code></a> | <a href="./../modules/Service.Service.html#voidresponse"><code>VoidResponse</code></a></td><td style="text-align:left;">usage:设置是否成功的回调 default:默认没有回调</td></tr><tr><td style="text-align:left;"><code>index?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:角色位(0-5) default:0,主角资源位</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Service/index.d.ts:101</p><hr><h3 id="downloaddefaultdatastring" tabindex="-1">downloadDefaultDataString <a class="header-anchor" href="#downloaddefaultdatastring" aria-hidden="true">#</a></h3><p>▸ <strong>downloadDefaultDataString</strong>(<code>callback</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>下载默认角色数据</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#stringresponse"><code>StringResponse</code></a></td><td style="text-align:left;">usage:回调</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Service/index.d.ts:79</p><hr><h3 id="fillavatar" tabindex="-1">fillAvatar <a class="header-anchor" href="#fillavatar" aria-hidden="true">#</a></h3><p>▸ <strong>fillAvatar</strong>(<code>img</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>将头像赋值到 Image 变量上</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><p><strong><code>Precautions</code></strong></p><p>只在由 233 拉起生效</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>img</code></td><td style="text-align:left;"><a href="./UI.UI.Image.html"><code>Image</code></a></td><td style="text-align:left;">usage:需要赋值获得头像的 Image 变量</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Service/index.d.ts:73</p><hr><h3 id="getnickname" tabindex="-1">getNickName <a class="header-anchor" href="#getnickname" aria-hidden="true">#</a></h3><p>▸ <strong>getNickName</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取玩家昵称</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><p><strong><code>Precautions</code></strong></p><p>只在由 233 拉起生效</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>string</code></p><p>昵称</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Service/index.d.ts:66</p><hr><h3 id="getopenid" tabindex="-1">getOpenId <a class="header-anchor" href="#getopenid" aria-hidden="true">#</a></h3><p>▸ <strong>getOpenId</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取 OpenId</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><p><strong><code>Precautions</code></strong></p><p>只在由 233 拉起生效</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>string</code></p><p>OpenId</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Service/index.d.ts:53</p><hr><h3 id="getuserdata" tabindex="-1">getUserData <a class="header-anchor" href="#getuserdata" aria-hidden="true">#</a></h3><p>▸ <strong>getUserData</strong>(<code>userId</code>, <code>index</code>, <code>callback</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>获取用户存储在服务器上的角色形象数据</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>userId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:用户 Id</td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:资源位(0-5)</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#stringresponse"><code>StringResponse</code></a></td><td style="text-align:left;">usage:返回获取的数据 string.</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Service/index.d.ts:147</p><hr><h3 id="getuserid" tabindex="-1">getUserId <a class="header-anchor" href="#getuserid" aria-hidden="true">#</a></h3><p>▸ <strong>getUserId</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取平台的用户 Id,可以用于 getUserData 接口</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>string</code></p><p>用户 Id</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p>Service/index.d.ts:59</p><hr><h3 id="setuserdata" tabindex="-1">setUserData <a class="header-anchor" href="#setuserdata" aria-hidden="true">#</a></h3><p>▸ <strong>setUserData</strong>(<code>character</code>, <code>dataString</code>, <code>callback?</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>将角色形象数据应用至角色</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage: 用于换装的角色</td></tr><tr><td style="text-align:left;"><code>dataString</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 返回的数据</td></tr><tr><td style="text-align:left;"><code>callback?</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#boolresponse"><code>BoolResponse</code></a></td><td style="text-align:left;">usage:设置是否成功的回调 default:无回调</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p>Service/index.d.ts:155</p><hr><h3 id="uploaddata" tabindex="-1">uploadData <a class="header-anchor" href="#uploaddata" aria-hidden="true">#</a></h3><p>▸ <strong>uploadData</strong>(<code>character</code>, <code>callback?</code>, <code>index?</code>, <code>openStatus?</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>上传角色形象资源到服务器 Character， Hair, UpperCloth, LowerCloth, Gloves, Shoe</p><p><strong><code>Effect</code></strong></p><p>客户端调用</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage:要上传换装数据的角色</td></tr><tr><td style="text-align:left;"><code>callback?</code></td><td style="text-align:left;"><a href="./../modules/Service.Service.html#boolresponse"><code>BoolResponse</code></a> | <a href="./../modules/Service.Service.html#voidresponse"><code>VoidResponse</code></a></td><td style="text-align:left;">usage:设置是否成功的回调 default:默认没有回调</td></tr><tr><td style="text-align:left;"><code>index?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:角色位(0-5) default:0,主角资源位</td></tr><tr><td style="text-align:left;"><code>openStatus?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:开发状态 default:1,默认是开放状态</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p>Service/index.d.ts:88</p><hr><h3 id="getinstance" tabindex="-1">getInstance <a class="header-anchor" href="#getinstance" aria-hidden="true">#</a></h3><p>▸ <code>Static</code> <strong>getInstance</strong>(): <a href="./Service.Service.AccountService.html"><code>AccountService</code></a></p><p><strong><code>Description</code></strong></p><p>获取用户账号信息管理器全局实例</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-hidden="true">#</a></h4><p><a href="./Service.Service.AccountService.html"><code>AccountService</code></a></p><p>用户账号信息管理器全局实例</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p>Service/index.d.ts:46</p>',191),n=[i];function c(o,l,s,h,p,g){return a(),t("div",null,n)}const x=e(r,[["render",c]]);export{u as __pageData,x as default};
