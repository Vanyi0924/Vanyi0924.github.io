import{_ as s,c as n,o as a,a as p}from"./app.7ddf743b.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u8FD0\u7EF4/nginx \u5F00\u542F gzip \u8D44\u6E90\u538B\u7F29.md"}'),l={name:"articles/\u8FD0\u7EF4/nginx \u5F00\u542F gzip \u8D44\u6E90\u538B\u7F29.md"},t=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#gizp\u538B\u7F29\u8D77\u70B9\uFF0C\u6587\u4EF6\u5927\u4E8E1k\u624D\u8FDB\u884C\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">	gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">	## gzip \u538B\u7F29\u7EA7\u522B\uFF0C1-9\uFF0C\u6570\u5B57\u8D8A\u5927\u538B\u7F29\u7684\u8D8A\u597D\uFF0C\u4E5F\u8D8A\u5360\u7528CPU\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">	gzip_comp_level 6;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#</span></span>
<span class="line"><span style="color:#A6ACCD;">	## \u8FDB\u884C\u538B\u7F29\u7684\u6587\u4EF6\u7C7B\u578B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json image/png image/gif image/jpeg;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#</span></span>
<span class="line"><span style="color:#A6ACCD;">	##nginx\u5BF9\u4E8E\u9759\u6001\u6587\u4EF6\u7684\u5904\u7406\u6A21\u5757\uFF0C\u5F00\u542F\u540E\u4F1A\u5BFB\u627E\u4EE5.gz\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u4F1A\u5360\u7528cpu\u8FDB\u884C\u538B\u7F29\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u5219\u4E0D\u8FDB\u884C\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">	## gzip_static on|off</span></span>
<span class="line"><span style="color:#A6ACCD;">	#</span></span>
<span class="line"><span style="color:#A6ACCD;">	## \u662F\u5426\u5728http header\u4E2D\u6DFB\u52A0Vary: Accept-Encoding\uFF0C\u5EFA\u8BAE\u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">	gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#</span></span>
<span class="line"><span style="color:#A6ACCD;">	## \u8BBE\u7F6E\u538B\u7F29\u6240\u9700\u8981\u7684\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u4EE54k\u4E3A\u5355\u4F4D\uFF0C\u5982\u679C\u6587\u4EF6\u4E3A7k\u5219\u7533\u8BF72*4k\u7684\u7F13\u51B2\u533A </span></span>
<span class="line"><span style="color:#A6ACCD;">	gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # ... </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),e=[t];function c(o,i,r,C,A,_){return a(),n("div",null,e)}const D=s(l,[["render",c]]);export{y as __pageData,D as default};
