import{_ as s,c as n,o as a,a as l}from"./app.cb733efe.js";const i=JSON.parse('{"title":"\u5E38\u7528 JS \u4EE3\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A","slug":"\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A","link":"#\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A","children":[]},{"level":2,"title":"\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A","slug":"\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A","link":"#\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A","children":[]}],"relativePath":"commonly-used-codes/js.md"}'),e={name:"commonly-used-codes/js.md"},o=l(`<h1 id="\u5E38\u7528-js-\u4EE3\u7801" tabindex="-1">\u5E38\u7528 JS \u4EE3\u7801 <a class="header-anchor" href="#\u5E38\u7528-js-\u4EE3\u7801" aria-hidden="true">#</a></h1><h2 id="\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A" tabindex="-1">\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A <a class="header-anchor" href="#\u5143\u7D20\u662F\u5426\u5168\u5C4F\u663E\u793A" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFullScreenElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fullscreenElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A" tabindex="-1">\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A <a class="header-anchor" href="#\u4F7F\u5143\u7D20\u5168\u5C4F\u663E\u793A" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> beFullScreen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">requestFullscreen</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),p=[o];function t(c,r,D,y,F,C){return a(),n("div",null,p)}const d=s(e,[["render",t]]);export{i as __pageData,d as default};
