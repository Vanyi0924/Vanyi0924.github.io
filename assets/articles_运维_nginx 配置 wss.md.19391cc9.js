import{_ as s,c as n,o as a,a as e}from"./app.cb733efe.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u8FD0\u7EF4/nginx \u914D\u7F6E wss.md"}'),p={name:"articles/\u8FD0\u7EF4/nginx \u914D\u7F6E wss.md"},l=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 443;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name \u57DF\u540D;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate \u8BC1\u4E66\u516C\u94A5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate_key \u8BC1\u4E66\u79C1\u94A5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_session_timeout 5m;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      # \u542F\u7528\u652F\u6301websocket\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_pass http://127.0.0.1:xxxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),o=[l];function t(c,r,i,_,C,A){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
