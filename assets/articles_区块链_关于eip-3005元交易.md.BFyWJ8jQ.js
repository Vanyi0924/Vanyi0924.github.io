import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.C5pyVv65.js";const m=JSON.parse('{"title":"关于 eip-3005 元交易","description":"","frontmatter":{},"headers":[],"relativePath":"articles/区块链/关于eip-3005元交易.md","filePath":"articles/区块链/关于eip-3005元交易.md"}'),i={name:"articles/区块链/关于eip-3005元交易.md"},p=r('<h1 id="关于-eip-3005-元交易" tabindex="-1">关于 eip-3005 元交易 <a class="header-anchor" href="#关于-eip-3005-元交易" aria-label="Permalink to &quot;关于 eip-3005 元交易&quot;">​</a></h1><p><a href="https://github.com/defifuture/erc20-batched-meta-transactions" target="_blank" rel="noreferrer">eip-3005</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>元交易是用户发送给中继器的加密签名消息，中继器随后根据元交易数据进行链上交易。中继者有效地用以太币支付 gas 费用，而元交易发送者可以用代币补偿中继者（“无气体”交易）。</p><p>该提案提供了一种解决方案，可以在一次链上交易中将多个元交易作为一批进行中继。这减少了中继者需要支付的 gas 成本，进而减少了每个元交易发送者以代币形式支付的中继者费用。</p><p>对于没有任何以太币但持有 ERC-20 代币并希望移动它们（无 gas 交易）的以太坊账户，元交易已被证明是一种有用的解决方案。</p><p>当前的元交易 GNS-eip1613）中继器实现一次只允许中继一个元交易。</p><p>EIP-3005 背后的动机是找到一种允许在一个链上交易中中继多个元交易（一批）的方法，这也减少了中继者需要支付的总 gas 成本。</p><h3 id="加油站网络-gns-eip1613" tabindex="-1">加油站网络（GNS-eip1613） <a class="header-anchor" href="#加油站网络-gns-eip1613" aria-label="Permalink to &quot;加油站网络（GNS-eip1613）&quot;">​</a></h3><p><a href="https://eips.ethereum.org/EIPS/eip-1613" target="_blank" rel="noreferrer">参考 Gas stations network - eip-1613</a></p>',10),s=[p];function o(n,_,c,h,l,d){return t(),a("div",null,s)}const u=e(i,[["render",o]]);export{m as __pageData,u as default};
