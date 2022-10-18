import{_ as e,c as a,o as s,a as n}from"./app.7ddf743b.js";const D=JSON.parse('{"title":"DApp\u4E0ETruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5B89\u88C5","slug":"\u4E00\u3001\u5B89\u88C5","link":"#\u4E00\u3001\u5B89\u88C5","children":[]},{"level":2,"title":"\u4E8C\u3001\u5B9E\u4F8B\u5316web3","slug":"\u4E8C\u3001\u5B9E\u4F8B\u5316web3","link":"#\u4E8C\u3001\u5B9E\u4F8B\u5316web3","children":[]},{"level":2,"title":"\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6","slug":"\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6","link":"#\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6","children":[]},{"level":2,"title":"\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5","slug":"\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5","link":"#\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5","children":[]}],"relativePath":"articles/Web3/DApp\u4E0ETruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92.md"}'),o={name:"articles/Web3/DApp\u4E0ETruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92.md"},l=n(`<h1 id="dapp\u4E0Etruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92" tabindex="-1">DApp\u4E0ETruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92 <a class="header-anchor" href="#dapp\u4E0Etruffle\u5F00\u53D1\u7684\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5B89\u88C5" tabindex="-1">\u4E00\u3001\u5B89\u88C5 <a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5" aria-hidden="true">#</a></h2><p><code>npm install web3 truffle @truffle/contract</code></p><h2 id="\u4E8C\u3001\u5B9E\u4F8B\u5316web3" tabindex="-1">\u4E8C\u3001\u5B9E\u4F8B\u5316web3 <a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u4F8B\u5316web3" aria-hidden="true">#</a></h2><p><code>web3 = new Web3(Web3.givenProvider || &quot;ws://localhost:8545&quot;);</code></p><blockquote><p>\u7136\u540E\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A web3 \u7684\u5B9E\u4F8B\uFF0C\u8BBE\u7F6E\u4E00\u4E2A provider\u3002 \u652F\u6301\u4EE5\u592A\u574A\u7684\u6D4F\u89C8\u5668\u5982 Mist \u6216 MetaMask \u4F1A\u6709\u63D0\u4F9B\u4E00\u4E2A ethereumProvider \u6216 web3.currentProvider\u3002\u5BF9\u4E8E web3.js \u6765\u8BF4\uFF0C\u53EF\u4EE5\u68C0\u67E5 Web3.givenProvider \uFF0C\u5982\u679C\u5C5E\u6027\u4E3A null \u518D\u8FDE\u63A5\u672C\u5730\u6216\u8FDC\u7A0B\u7684\u8282\u70B9\u3002</p></blockquote><blockquote><p>\u65B0\u7684 Dapp \u6D4F\u89C8\u5668\u6216 MetaMask \u7684\u65B0\u7248\u672C\uFF0C\u6CE8\u5165\u4E86\u4E00\u4E2A ethereum \u5BF9\u8C61\u5230 window \u5BF9\u8C61\u91CC\uFF0C\u4F7F\u7528 ethereum.enable() \u6765\u8BF7\u6C42\u7528\u6237\u6388\u6743\u8BBF\u95EE\u94FE\u63A5\u8D26\u53F7\u3002<code>if (window.ethereum) window.ethereum.enable()</code></p></blockquote><h2 id="\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6" tabindex="-1">\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6 <a class="header-anchor" href="#\u4E09\u3001\u5B9E\u4F8B\u5316\u667A\u80FD\u5408\u7EA6" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> MyContract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TruffleContract</span><span style="color:#A6ACCD;">(Adoption)</span></span>
<span class="line"><span style="color:#A6ACCD;">  MyContract</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProvider</span><span style="color:#A6ACCD;">(web3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentProvider)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">contract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> MyContract</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deployed</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5" tabindex="-1">\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5 <a class="header-anchor" href="#\u56DB\u3001\u8C03\u7528\u5408\u7EA6\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>this.contract.yourMethod(args, { from: accounts[0] })</code> \u8FD9\u91CC\u4E0E\u4E0D\u4F7F\u7528 <code>truffle</code> \u8C03\u7528\u6709\u4E00\u4E9B\u5DEE\u522B</p>`,11),t=[l];function r(p,c,d,i,h,u){return s(),a("div",null,t)}const _=e(o,[["render",r]]);export{D as __pageData,_ as default};
