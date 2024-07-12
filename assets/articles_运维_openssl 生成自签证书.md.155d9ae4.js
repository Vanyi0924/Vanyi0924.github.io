import{_ as e,c as s,o as n,a as l}from"./app.e46a7e75.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C","link":"#\u51C6\u5907\u5DE5\u4F5C","children":[]},{"level":2,"title":"\u521B\u5EFACA\u81EA\u7B7E\u8BC1\u4E66","slug":"\u521B\u5EFAca\u81EA\u7B7E\u8BC1\u4E66","link":"#\u521B\u5EFAca\u81EA\u7B7E\u8BC1\u4E66","children":[]},{"level":2,"title":"\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66","slug":"\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66","link":"#\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66","children":[]},{"level":2,"title":"\u540A\u9500\u8BC1\u4E66","slug":"\u540A\u9500\u8BC1\u4E66","link":"#\u540A\u9500\u8BC1\u4E66","children":[]},{"level":2,"title":"\u672F\u8BED","slug":"\u672F\u8BED","link":"#\u672F\u8BED","children":[{"level":3,"title":"OpenSSL\u547D\u4EE4\u8BE6\u89E3","slug":"openssl\u547D\u4EE4\u8BE6\u89E3","link":"#openssl\u547D\u4EE4\u8BE6\u89E3","children":[]}]}],"relativePath":"articles/\u8FD0\u7EF4/openssl \u751F\u6210\u81EA\u7B7E\u8BC1\u4E66.md"}'),a={name:"articles/\u8FD0\u7EF4/openssl \u751F\u6210\u81EA\u7B7E\u8BC1\u4E66.md"},p=l(`<h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u521B\u5EFAindex.txt \uFF08database index file\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">touch /etc/pki/CA/index.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u521B\u5EFA\u65B0\u8BC1\u4E66\u7F16\u53F7\u4E3A01\uFF0C\u5F80\u4E0B\u4F9D\u6B21\u7C7B\u63A8\uFF0C\u4E3A\u5341\u516D\u8FDB\u5236 \uFF08The current serial number\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">touch /etc/pki/CA/serial\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u7528\u4E8E\u540A\u9500\u8BC1\u4E66</span></span>
<span class="line"><span style="color:#A6ACCD;">touch /etc/pki/CA/crlnumber </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFAca\u81EA\u7B7E\u8BC1\u4E66" tabindex="-1">\u521B\u5EFACA\u81EA\u7B7E\u8BC1\u4E66 <a class="header-anchor" href="#\u521B\u5EFAca\u81EA\u7B7E\u8BC1\u4E66" aria-hidden="true">#</a></h2><ol><li><p>\u751F\u6210\u79C1\u94A5 <code>openssl genrsa -out /etc/pki/CA/private/cakey.pem</code></p></li><li><p>\u751F\u6210\u81EA\u7B7E\u6587\u4EF610\u5E74 <code>openssl req -new -x509 -key /etc/pki/CA/private/cakey.pem -out /etc/pki/CA/cacert.pem -days 3650 </code></p></li><li><p>\u67E5\u770B\u751F\u6210\u7684\u81EA\u7B7E\u8BC1\u4E66 <code>openssl x509 -in /etc/pki/CA/cacert.pem -noout -text</code></p></li></ol><h2 id="\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66" tabindex="-1">\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66 <a class="header-anchor" href="#\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66" aria-hidden="true">#</a></h2><ol><li><p>\u751F\u6210\u79C1\u94A5 <code>openssl genrsa -out client.key</code></p></li><li><p>\u751F\u6210\u8BF7\u6C42\u6587\u4EF6 <code>openssl req -new -key client.key -out client.csr -days 365</code></p></li><li><p>\u4F7F\u7528CA\u7B7E\u53D1\u5BA2\u6237\u7AEF\u8BC1\u4E66(\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E) <code>openssl ca -in client.csr -out client.crt -days 365</code></p></li><li><p>\u751F\u6210\u6D4F\u89C8\u5668\u8BC1\u4E66 <code>openssl pkcs12 -export -clcerts -in client.crt -inkey client.key -out client.p12</code></p></li></ol><h2 id="\u540A\u9500\u8BC1\u4E66" tabindex="-1">\u540A\u9500\u8BC1\u4E66 <a class="header-anchor" href="#\u540A\u9500\u8BC1\u4E66" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u540A\u9500\u8BC1\u4E66\u5E8F\u5217\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">echo 01 &gt;/etc/pki/CA/crlnumber</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u540A\u9500</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl ca -revoke \u8BC1\u4E66\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"># or</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl ca -revoke /etc/pki/CA/newcerts/\u5BF9\u5E94\u8BC1\u4E66\u5E8F\u5217\u53F7.pem</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u91CD\u65B0\u5199\u5165\u540A\u9500\u5217\u8868\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl ca -gencrl -out /etc/pki/CA/crl/crl.pem</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u67E5\u770B\u540A\u9500\u8BC1\u4E66\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">openssl crl -in /etc/pki/CA/crl/crl.pem -noout -text</span></span>
<span class="line"><span style="color:#A6ACCD;"># or</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/pki/CA/index.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u672F\u8BED" tabindex="-1">\u672F\u8BED <a class="header-anchor" href="#\u672F\u8BED" aria-hidden="true">#</a></h2><ul><li><p>RSA\u79C1\u94A5\u80FD\u89E3\u5BC6\u7528\u8BC1\u4E66\u516C\u94A5\u52A0\u5BC6\u540E\u7684\u4FE1\u606F\u3002\u901A\u5E38\u4EE5.key\u4E3A\u540E\u7F00\uFF0C\u8868\u793A\u79C1\u94A5\u4E5F\u79F0\u4F5C\u5BC6\u94A5\u3002\u662F\u9700\u8981\u7BA1\u7406\u5458\u5C0F\u5FC3\u4FDD\u7BA1\uFF0C\u4E0D\u80FD\u6CC4\u9732\u7684\u3002</p></li><li><p>CSR(Certificate Signing Request)\u5305\u542B\u4E86\u516C\u94A5\u548C\u540D\u5B57\u4FE1\u606F\u3002\u901A\u5E38\u4EE5.csr\u4E3A\u540E\u7F00\uFF0C\u662F\u7F51\u7AD9\u5411CA\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\u7684\u6587\u4EF6\uFF0C\u662F\u4E2D\u95F4\u6587\u4EF6\u3002</p></li><li><p>\u8BC1\u4E66\u901A\u5E38\u4EE5.crt\u4E3A\u540E\u7F00\uFF0C\u8868\u793A\u8BC1\u4E66\u6587\u4EF6\u3002</p></li><li><p>CA(Certifying Authority)\u8868\u793A\u8BC1\u4E66\u6743\u5A01\u673A\u6784\uFF0C\u5B83\u7684\u804C\u8D23\u662F\u8BC1\u660E\u516C\u94A5\u5C5E\u4E8E\u4E2A\u4EBA\u3001\u516C\u53F8\u6216\u5176\u4ED6\u7684\u7EC4\u7EC7\u3002</p></li></ul><h3 id="openssl\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a href="https://juejin.cn/post/6844903989469773832" target="_blank" rel="noreferrer">OpenSSL\u547D\u4EE4\u8BE6\u89E3</a> <a class="header-anchor" href="#openssl\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a></h3><p>\u5907\u5FD8\uFF1A</p><ul><li><code>nginx</code>\u9700\u8981\u914D\u7F6E <code>ssl_crl /etc/pki/CA/crl/crl.pem;</code> \u540A\u9500\u8BC1\u4E66\u5217\u8868\u6587\u4EF6\uFF0C\u66F4\u65B0\u540E\u91CD\u542F<code>nginx</code></li><li>\u5B58\u50A8\u76EE\u5F55 <code>/etc/pki/CA/</code> \u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u8BBE\u7F6E</li><li>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6 <code>/etc/pki/CA/openssl.cnf</code></li><li>openssl \u5347\u7EA7\u65B0\u7248\u672C <a href="https://blog.51cto.com/net881004/2116848" target="_blank" rel="noreferrer">https://blog.51cto.com/net881004/2116848</a></li></ul>`,13),c=[p];function t(o,i,r,d,C,A){return n(),s("div",null,c)}const y=e(a,[["render",t]]);export{u as __pageData,y as default};
