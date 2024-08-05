import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.Ci4AqDqK.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/nginx 配置 wss.md","filePath":"articles/运维/nginx 配置 wss.md"}'),e={name:"articles/运维/nginx 配置 wss.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server{</span></span>
<span class="line"><span>  listen 443;</span></span>
<span class="line"><span>  server_name 域名;</span></span>
<span class="line"><span>  ssl on;</span></span>
<span class="line"><span>  ssl_certificate 证书公钥;</span></span>
<span class="line"><span>  ssl_certificate_key 证书私钥;</span></span>
<span class="line"><span>  ssl_session_timeout 5m;</span></span>
<span class="line"><span>  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span>  ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>      # 启用支持websocket连接</span></span>
<span class="line"><span>      proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>      proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>      proxy_pass http://127.0.0.1:xxxx;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),l=[t];function i(c,_,o,r,d,h){return a(),n("div",null,l)}const g=s(e,[["render",i]]);export{x as __pageData,g as default};
