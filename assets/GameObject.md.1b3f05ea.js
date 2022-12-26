import{_ as e,c as s,o,a as n}from"./app.b96ad919.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"getBoundingBoxSize","slug":"getBoundingBoxSize","link":"#getBoundingBoxSize","children":[]},{"level":2,"title":"getChildrenBoxCenter","slug":"getChildrenBoxCenter","link":"#getChildrenBoxCenter","children":[]}],"relativePath":"GameObject.md"}'),a={name:"GameObject.md"},t=n(`<p>Gameobject 的基类</p><p><code>@networkStatus</code>双端</p><h2 id="getBoundingBoxSize" tabindex="-1">getBoundingBoxSize <a class="header-anchor" href="#getBoundingBoxSize" aria-hidden="true">#</a></h2><p>getBoundingBoxSize(nonColliding?: boolean, includeFromChildActors?: boolean, outer?: Type.Vector): Type.Vector;</p><p><code>@description</code> 获取物体包围盒大小</p><p><code>@effect</code> 调用端生效</p><div class="tip custom-block"><p class="custom-block-title">@precautions</p><p>如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象 这里本该是一个亮块</p></div><p><code>@param</code></p><ul><li>nonColliding usage:表示要在边界框中包含非碰撞组件 default:false</li><li>includeFromChildActors usage:如果为 true，则递归子物体 default:false</li><li>outer usage:接收转换数据的 Vector 对象 default:null</li></ul><p><code>@returns</code>Type.Vector</p><hr><h2 id="getChildrenBoxCenter" tabindex="-1">getChildrenBoxCenter <a class="header-anchor" href="#getChildrenBoxCenter" aria-hidden="true">#</a></h2><p>getChildrenBoxCenter(outer?: Type.Vector): Type.Vector;</p><p><code>@description</code> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])</p><p><code>@effect</code> 调用端生效</p><div class="tip custom-block"><p class="custom-block-title">@precautions</p><p>如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象 这里本该是一个亮块</p></div><p><code>@param</code></p><ul><li>outer usage:接收转换数据的 Vector 对象 default:null</li></ul><p><code>@returns</code>Type.Vector</p><p><code>@example</code>随便捞的代码</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UnwrapRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>这是代码介绍</p><hr>`,23),l=[t];function p(c,r,i,d,u,C){return o(),s("div",null,l)}const B=e(a,[["render",p]]);export{y as __pageData,B as default};
