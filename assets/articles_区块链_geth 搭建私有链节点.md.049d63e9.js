import{_ as s,c as n,o as a,a as o}from"./app.7ddf743b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u533A\u5757\u94FE/geth \u642D\u5EFA\u79C1\u6709\u94FE\u8282\u70B9.md"}'),l={name:"articles/\u533A\u5757\u94FE/geth \u642D\u5EFA\u79C1\u6709\u94FE\u8282\u70B9.md"},t=o(`<ol><li><p><a href="https://geth.ethereum.org/docs/install-and-build/installing-geth" target="_blank" rel="noreferrer">geth\u5BA2\u6237\u7AEF\u5B89\u88C5</a></p></li><li><p>\u521B\u5EFA\u76EE\u5F55\u5B58\u653E\u6570\u636E <code>mkdir data</code></p></li><li><p>\u521B\u5EFA\u8D26\u6237 <code>geth --datadir data account new</code></p></li><li><p>\u914D\u7F6E\u521B\u4E16\u533A\u5757</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;chainId&quot;: 1129,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;homesteadBlock&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eip150Block&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eip155Block&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eip158Block&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;byzantiumBlock&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;constantinopleBlock&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;petersburgBlock&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;istanbulBlock&quot;: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;alloc&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;0x0000000000000000000000000000000000000001&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;balance&quot;: &quot;111111111&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;0x0000000000000000000000000000000000000002&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;balance&quot;: &quot;222222222&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;coinbase&quot;: &quot;0x0000000000000000000000000000000000000000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;difficulty&quot;: &quot;0x20000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;extraData&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;gasLimit&quot;: &quot;0x2fefd8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;nonce&quot;: &quot;0x0000000000000042&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;mixhash&quot;: &quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;parentHash&quot;: &quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;timestamp&quot;: &quot;0x00&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li><p>\u5199\u5165\u521B\u4E16\u533A\u5757 <code>geth --datadir data init genesis.json</code></p></li><li><p>\u542F\u52A8 <code>geth --datadir data console</code></p></li><li><p><code>miner.start()</code> \u5F00\u542F\u6316\u77FF</p></li></ol>`,3),p=[t];function e(c,i,u,r,q,C){return a(),n("div",null,p)}const _=s(l,[["render",e]]);export{d as __pageData,_ as default};
