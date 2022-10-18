import{_ as s,c as n,o as a,a as l}from"./app.19505eb6.js";const D=JSON.parse('{"title":"\u4E00\u3001\u7F16\u5199","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u5F0F\u4E00\uFF1A \u4F7F\u7528 solc \u7F16\u8BD1","slug":"\u65B9\u5F0F\u4E00\uFF1A-\u4F7F\u7528-solc-\u7F16\u8BD1","link":"#\u65B9\u5F0F\u4E00\uFF1A-\u4F7F\u7528-solc-\u7F16\u8BD1","children":[]},{"level":2,"title":"\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE","slug":"\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE","link":"#\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE","children":[]}],"relativePath":"articles/DApp/solidity \u7F16\u5199 \u7F16\u8BD1 \u90E8\u7F72 \u8C03\u7528.md"}'),e={name:"articles/DApp/solidity \u7F16\u5199 \u7F16\u8BD1 \u90E8\u7F72 \u8C03\u7528.md"},p=l(`<h1 id="\u4E00\u3001\u7F16\u5199" tabindex="-1">\u4E00\u3001\u7F16\u5199 <a class="header-anchor" href="#\u4E00\u3001\u7F16\u5199" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// SPDX-License-Identifier: GPL-3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">pragma solidity &gt;=0.4.16 &lt;0.8.0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E00\u4E2A\u7B80\u5355\u50A8\u5B58\u6570\u5B57\u7684 \u667A\u80FD\u5408\u7EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5173\u952E\u5B57 pragma \u7684\u542B\u4E49\u662F\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0Cpragmas\uFF08\u7F16\u8BD1\u6307\u4EE4\uFF09\u662F\u544A\u77E5\u7F16\u8BD1\u5668\u5982\u4F55\u5904\u7406\u6E90\u4EE3\u7801\u7684\u6307\u4EE4\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">contract SimpleStorage {</span></span>
<span class="line"><span style="color:#A6ACCD;">    uint256 storedData;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function set(uint256 x) public {</span></span>
<span class="line"><span style="color:#A6ACCD;">        storedData = x;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function get() public view returns (uint256) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return storedData;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u4E8C\u3001\u7F16\u8BD1" tabindex="-1">\u4E8C\u3001\u7F16\u8BD1 <a class="header-anchor" href="#\u4E8C\u3001\u7F16\u8BD1" aria-hidden="true">#</a></h1><h2 id="\u65B9\u5F0F\u4E00\uFF1A-\u4F7F\u7528-solc-\u7F16\u8BD1" tabindex="-1">\u65B9\u5F0F\u4E00\uFF1A \u4F7F\u7528 solc \u7F16\u8BD1 <a class="header-anchor" href="#\u65B9\u5F0F\u4E00\uFF1A-\u4F7F\u7528-solc-\u7F16\u8BD1" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">solcjs --help</span></span>
<span class="line"><span style="color:#A6ACCD;">Usage: solcjs [options]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -V, --version                        output the version number</span></span>
<span class="line"><span style="color:#A6ACCD;">  --version                            Show version and exit.</span></span>
<span class="line"><span style="color:#A6ACCD;">  --optimize                           Enable bytecode optimizer.</span></span>
<span class="line"><span style="color:#A6ACCD;">  --bin                                Binary of the contracts in hex.</span></span>
<span class="line"><span style="color:#A6ACCD;">  --abi                                ABI of the contracts.</span></span>
<span class="line"><span style="color:#A6ACCD;">  --standard-json                      Turn on Standard JSON Input / Output mode.</span></span>
<span class="line"><span style="color:#A6ACCD;">  --base-path &lt;path&gt;                   Automatically resolve all imports inside the given path.</span></span>
<span class="line"><span style="color:#A6ACCD;">  -o, --output-dir &lt;output-directory&gt;  Output directory for the contracts.</span></span>
<span class="line"><span style="color:#A6ACCD;">  -h, --help                           output usage information</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\uFF1A<code>--base-path</code> \u8BBE\u7F6E\u7F16\u8BD1\u76EE\u5F55\uFF0C\u907F\u514D\u6253\u5305\u65F6 <code>import</code> \u627E\u5230\u4E0D\u5230\u76EE\u5F55</p><h1 id="\u4E09\u3001\u90E8\u7F72" tabindex="-1">\u4E09\u3001\u90E8\u7F72 <a class="header-anchor" href="#\u4E09\u3001\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE" tabindex="-1">\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE <a class="header-anchor" href="#\u573A\u666F\u4E00\u3001\u90E8\u7F72\u5230\u672C\u5730\u6D4B\u8BD5\u94FE" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5B9E\u4F8B\u5316\u4E00\u4E2A\u5408\u7EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">  const myContract = new this.web3Instance.eth.Contract(abi)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  myContract.deploy({ // \u90E8\u7F72\u5408\u7EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: bin // \u5408\u7EA6\u5B57\u8282\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).send({ // \u53D1\u8D77\u4E00\u4E2A\u521B\u5EFA\u5408\u7EA6\u7684\u4EA4\u6613</span></span>
<span class="line"><span style="color:#A6ACCD;">    from: publishAccount, // \u8D26\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    gas: &#39;4700000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).then(newContractInstance =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;newContractInstance&quot;, newContractInstance);</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="\u56DB\u3001\u8C03\u7528" tabindex="-1">\u56DB\u3001\u8C03\u7528 <a class="header-anchor" href="#\u56DB\u3001\u8C03\u7528" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    async getValue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const res = await this.contractInstance.methods.getVal().call()</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;getVal&quot;, res);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    async setValue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const res = await this.contractInstance.methods.setVal(9).send({</span></span>
<span class="line"><span style="color:#A6ACCD;">        from: &quot;xxxx&quot;, // \u63D0\u4F9Bgas\u7684\u8D26\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // web3 \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.web3Instance = new Web3(Web3.givenProvider || &#39;http://127.0.0.1:7545&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u53D6 \u667A\u80FD\u5408\u7EA6 \u5B9E\u4F8B contractAddress \u4E3A\u90E8\u7F72\u751F\u6210\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.contractInstance = new this.web3Instance.eth.Contract(abi, contractAddress)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),o=[p];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{D as __pageData,h as default};
