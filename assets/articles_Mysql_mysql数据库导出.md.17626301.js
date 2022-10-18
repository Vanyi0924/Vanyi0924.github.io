import{_ as s,c as a,o as n,a as l}from"./app.cb733efe.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Mysql/mysql\u6570\u636E\u5E93\u5BFC\u51FA.md"}'),p={name:"articles/Mysql/mysql\u6570\u636E\u5E93\u5BFC\u51FA.md"},o=l(`<div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">backup_dir=/home/backup/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dd=</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">date +%Y-%m-%d-%H-%M-%S</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tool=mysqldump</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">username=xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">password=xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">database_name=xxx</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u5BFC\u51FAsql</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">tool -u</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">username -p</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">password </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">database_name </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">backup_dir/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">database_name-</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">dd.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u5199\u521B\u5EFA\u5907\u4EFD\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">create </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">backup_dir</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">database_name</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">dd</span><span style="color:#C3E88D;">.dupm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">backup_dir/log.txt</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function c(t,r,D,y,C,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{_ as __pageData,d as default};
