import{_ as a,c as n,o,a4 as s}from"./chunks/framework.C5pyVv65.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/linux安装mongodb.md","filePath":"articles/运维/linux安装mongodb.md"}'),e={name:"articles/运维/linux安装mongodb.md"},t=s(`<h2 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h2><p>curl -O <a href="https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-4.0.18.tgz" target="_blank" rel="noreferrer">https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-4.0.18.tgz</a> # 下载 tar -zxvf mongodb-linux-x86_64-rhel62-4.0.18.tgz # 解压</p><p>mv mongodb-linux-x86_64-rhel62-4.0.18 /usr/local/mongodb # 将解压包拷贝到指定目录</p><h2 id="添加path路径" tabindex="-1">添加path路径 <a class="header-anchor" href="#添加path路径" aria-label="Permalink to &quot;添加path路径&quot;">​</a></h2><p>export PATH=[mongodb-install-directory]/bin:$PATH [mongodb-install-directory] 为 MongoDB 的安装路径 /usr/local/mongodb</p><h2 id="创建数据库目录" tabindex="-1">创建数据库目录 <a class="header-anchor" href="#创建数据库目录" aria-label="Permalink to &quot;创建数据库目录&quot;">​</a></h2><p>MongoDB的数据存储在data目录的db目录下，但是这个目录在安装过程不会自动创建，所以你需要手动创建data目录，并在data目录中创建db目录。 注意：/data/db 是 MongoDB 默认的启动的数据库路径(--dbpath)。 <code>mkdir -p /data/db</code></p><h2 id="命令行中运行-mongodb-服务" tabindex="-1">命令行中运行 MongoDB 服务 <a class="header-anchor" href="#命令行中运行-mongodb-服务" aria-label="Permalink to &quot;命令行中运行 MongoDB 服务&quot;">​</a></h2><p>命令行中执行mongo安装目录中的bin目录执行mongod命令来启动mongdb服务。<br><code>./mongod</code><code>./mongod --dbpath=/data/db --logpath=/data/logs</code></p><h2 id="后台启动mongo服务-常驻-fork" tabindex="-1">后台启动mongo服务（常驻 --fork） <a class="header-anchor" href="#后台启动mongo服务-常驻-fork" aria-label="Permalink to &quot;后台启动mongo服务（常驻 --fork）&quot;">​</a></h2><p><code>./mongod --dbpath=/data/db --fork --logpath=/data/logs</code></p><blockquote><p>后台启动成功除非手动关掉mongo服务或者关机等意外，否则mongo服务一直是开启状态</p></blockquote><h2 id="使用nginx代理" tabindex="-1">使用nginx代理 <a class="header-anchor" href="#使用nginx代理" aria-label="Permalink to &quot;使用nginx代理&quot;">​</a></h2><p>mongodb接口走的是tcp，不是http</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>stream {</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen      92;</span></span>
<span class="line"><span>        proxy_pass mongo;</span></span>
<span class="line"><span>        proxy_connect_timeout 1s;</span></span>
<span class="line"><span>        proxy_timeout 3s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    upstream mongo{</span></span>
<span class="line"><span>        server 127.0.0.1:27017;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15),l=[t];function p(d,r,i,c,h,g){return o(),n("div",null,l)}const u=a(e,[["render",p]]);export{b as __pageData,u as default};
