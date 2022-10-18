import{_ as e,c as s,o as n,a}from"./app.cb733efe.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E00\u3001\u4EC0\u4E48\u662FMVVM\u6A21\u5F0F","slug":"\u4E00\u3001\u4EC0\u4E48\u662Fmvvm\u6A21\u5F0F","link":"#\u4E00\u3001\u4EC0\u4E48\u662Fmvvm\u6A21\u5F0F","children":[]},{"level":3,"title":"\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406","slug":"\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406","link":"#\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406","children":[]},{"level":3,"title":"\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F","slug":"\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F","link":"#\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F","children":[]},{"level":3,"title":"\u56DB\u3001\u5BF9\u6BD4Object.defineProperty()\u548Cproxy\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406","slug":"\u56DB\u3001\u5BF9\u6BD4object-defineproperty-\u548Cproxy\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406","link":"#\u56DB\u3001\u5BF9\u6BD4object-defineproperty-\u548Cproxy\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406","children":[]},{"level":3,"title":"\u4E94\u3001Vue.nextTick \u7684\u539F\u7406","slug":"\u4E94\u3001vue-nexttick-\u7684\u539F\u7406","link":"#\u4E94\u3001vue-nexttick-\u7684\u539F\u7406","children":[]},{"level":3,"title":"\u516D\u3001vue-router \u8DEF\u7531\u4F20\u53C2","slug":"\u516D\u3001vue-router-\u8DEF\u7531\u4F20\u53C2","link":"#\u516D\u3001vue-router-\u8DEF\u7531\u4F20\u53C2","children":[]},{"level":3,"title":"\u4E03\u3001v-model\u7B49\u4EF7\u5982\u4E0B","slug":"\u4E03\u3001v-model\u7B49\u4EF7\u5982\u4E0B","link":"#\u4E03\u3001v-model\u7B49\u4EF7\u5982\u4E0B","children":[]}],"relativePath":"articles/Vue/Vue\u77E5\u8BC6\u70B9\u6C47\u603B\uFF08\u4E8C\uFF09.md"}'),l={name:"articles/Vue/Vue\u77E5\u8BC6\u70B9\u6C47\u603B\uFF08\u4E8C\uFF09.md"},p=a(`<h3 id="\u4E00\u3001\u4EC0\u4E48\u662Fmvvm\u6A21\u5F0F" tabindex="-1">\u4E00\u3001\u4EC0\u4E48\u662FMVVM\u6A21\u5F0F <a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662Fmvvm\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><code>MVVM\uFF08Model-View-ViewModel\uFF09</code>\u662F\u4E00\u79CD\u8BBE\u8BA1\u65B9\u5F0F\uFF0C<code>Model</code>\u6570\u636E\u5C42\u4EE3\u8868\u6570\u636E\u6A21\u578B\uFF0C<code>View</code>\u89C6\u56FE\u5C42\uFF0CViewModel \u662F\u4E00\u4E2A\u540C\u6B65View\u548CModel\u7684\u5BF9\u8C61\u3002\u5728 MVVM \u67B6\u6784\u4E0B\uFF0CView \u548C Model \u4E4B\u95F4\u5E76\u6CA1\u6709\u76F4\u63A5\u7684\u8054\u7CFB\uFF0C\u800C\u662F\u901A\u8FC7 ViewModel \u8FDB\u884C\u4EA4\u4E92\uFF0CModel \u548C ViewModel \u4E4B\u95F4\u7684\u4EA4\u4E92\u662F\u53CC\u5411\u7684\uFF0C \u56E0\u6B64 View \u6570\u636E\u7684\u53D8\u5316\u4F1A\u540C\u6B65\u5230 Model \u4E2D\uFF0C\u800C Model \u6570\u636E\u7684\u53D8\u5316\u4E5F\u4F1A\u7ACB\u5373\u53CD\u5E94\u5230 View \u4E0A\u3002</p><h3 id="\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h3><p>Vue: \u5728\u751F\u6210vue\u5B9E\u4F8B\u65F6\uFF0C\u4E3A\u5BF9\u4F20\u5165\u7684data\u8FDB\u884C\u904D\u5386\uFF0C\u4F7F\u7528<code>Object.defineProperty</code>\u628A\u8FD9\u4E9B\u5C5E\u6027\u8F6C\u4E3A<code>getter/setter</code>\u3002\u6BCF\u4E2Avue\u5B9E\u4F8B\u90FD\u6709\u4E00\u4E2Awatcher\u5B9E\u4F8B\uFF0C\u5B83\u4F1A\u5728\u5B9E\u4F8B\u6E32\u67D3\u65F6\u8BB0\u5F55\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u5E76\u5728setter\u89E6\u53D1\u65F6\u91CD\u65B0\u6E32\u67D3\u3002</p><p>React: React\u662F\u901A\u8FC7this.setState\u53BB\u6539\u53D8\u6570\u636E\uFF0C\u7136\u540E\u6839\u636E\u65B0\u7684\u6570\u636E\u91CD\u65B0\u6E32\u67D3\u51FA\u865A\u62DFDOM\uFF0C\u6700\u540E\u901A\u8FC7\u5BF9\u6BD4\u865A\u62DFDOM\u627E\u5230\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u8FDB\u884C\u66F4\u65B0\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4React\u662F\u4F9D\u9760\u7740\u865A\u62DFDOM\u4EE5\u53CADOM\u7684diff\u7B97\u6CD5\u505A\u5230\u8FD9\u4E00\u70B9\u7684\u3002</p><h3 id="\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F" tabindex="-1">\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F <a class="header-anchor" href="#\u4E09\u3001vue\u4E2D\u662F\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u53D8\u5316\uFF1F" aria-hidden="true">#</a></h3><p>vue\u91CD\u5199\u4E86\u6570\u7EC4\u7684push\u3001splice\u3001pop\u7B49\u65B9\u6CD5\uFF0C\u9664\u4E86\u5C06\u6570\u7EC4\u65B9\u6CD5\u540D\u5BF9\u5E94\u7684\u539F\u59CB\u65B9\u6CD5\u8C03\u7528\u4E00\u904D\u5E76\u5C06\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\u5916\uFF0C\u8FD8\u901A\u8FC7\u6267\u884Cob.dep.notify()\u5C06\u5F53\u524D\u6570\u7EC4\u7684\u53D8\u66F4\u901A\u77E5\u7ED9\u5176\u8BA2\u9605\u8005\uFF0C\u8FD9\u6837\u5F53\u4F7F\u7528\u91CD\u5199\u540E\u65B9\u6CD5\u6539\u53D8\u6570\u7EC4\u540E\uFF0C\u6570\u7EC4\u8BA2\u9605\u8005\u4F1A\u5C06\u8FD9\u8FB9\u53D8\u5316\u66F4\u65B0\u5230\u9875\u9762\u4E2D\u3002</p><h3 id="\u56DB\u3001\u5BF9\u6BD4object-defineproperty-\u548Cproxy\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406" tabindex="-1">\u56DB\u3001\u5BF9\u6BD4<code>Object.defineProperty()</code>\u548C<code>proxy</code>\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406 <a class="header-anchor" href="#\u56DB\u3001\u5BF9\u6BD4object-defineproperty-\u548Cproxy\u5BF9\u6570\u7EC4\u76D1\u542C\u7684\u5904\u7406" aria-hidden="true">#</a></h3><p><code>Object.defineProperty()</code>\u65B9\u6CD5\u7528\u4E8E\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027 \u95EE\u9898\uFF1A</p><ol><li>\u4E0D\u80FD\u76D1\u542C\u6570\u7EC4\u7684\u53D8\u5316\uFF0C\u6570\u7EC4\u7684\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u89E6\u53D1 set,push\u3001pop\u3001shift\u3001unshift\u3001splice\u3001sort\u3001reverse</li><li>\u5FC5\u987B\u904D\u5386\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u4F7F\u7528 Object.defineProperty() \u591A\u6570\u8981\u914D\u5408 Object.keys() \u548C\u904D\u5386\uFF0C\u4E8E\u662F\u591A\u4E86\u4E00\u5C42\u5D4C\u5957</li><li>\u5FC5\u987B\u6DF1\u5C42\u904D\u5386\u5D4C\u5957\u7684\u5BF9\u8C61</li></ol><p>proxy\u53EF\u4EE5\u76F4\u63A5\u4EE3\u7406\u6570\u7EC4\uFF0C\u53EF\u4EE5\u53D1\u73B0proxy\u4E0D\u4F46\u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\u6570\u7EC4\uFF0C\u800C\u4E14\u4EE3\u7406\u6570\u7EC4\u540E\u53EF\u4EE5\u76D1\u542C\u5230\u6570\u7EC4\u5E38\u7528\u7684\u65B9\u6CD5\u5BF9\u6570\u7EC4\u4EA7\u751F\u7684\u6539\u53D8\uFF0C\u6BD4Object.defineProperty()\u66F4\u65B9\u4FBF\u66F4\u5F3A\u5927\uFF0C\u8FD9\u4E5F\u662FVue 3.0\u4F7F\u7528proxy\u8FDB\u884C\u6570\u636E\u76D1\u542C\u7684\u539F\u56E0\u3002 \u80FD\u591F\u89E3\u51B3\uFF1A</p><ol><li>\u9488\u5BF9\u5BF9\u8C61\uFF0CProxy \u662F\u9488\u5BF9 \u6574\u4E2A\u5BF9\u8C61obj \u7684\u3002\u56E0\u6B64\u65E0\u8BBA obj \u5185\u90E8\u5305\u542B\u591A\u5C11\u4E2A key \uFF0C\u90FD\u53EF\u4EE5\u8D70\u8FDB set\u3002(\u5E76\u4E0D\u9700\u8981\u901A\u8FC7Object.keys() \u7684\u904D\u5386)</li><li>\u652F\u6301\u6570\u7EC4,Proxy \u4E0D\u9700\u8981\u5BF9\u6570\u7EC4\u7684\u65B9\u6CD5\u8FDB\u884C\u91CD\u8F7D\uFF0C\u7701\u53BB\u4E86\u4F17\u591A hack\uFF0C\u51CF\u5C11\u4EE3\u7801\u91CF\u7B49\u4E8E\u51CF\u5C11\u4E86\u7EF4\u62A4\u6210\u672C</li><li>\u5D4C\u5957\u652F\u6301\uFF0CProxy \u4E5F\u662F\u4E0D\u652F\u6301\u5D4C\u5957\u7684\uFF0C\u8FD9\u70B9\u548C Object.defineProperty() \u662F\u4E00\u6837\u7684\u3002\u56E0\u6B64\u4E5F\u9700\u8981\u901A\u8FC7\u9010\u5C42\u904D\u5386\u6765\u89E3\u51B3\u3002Proxy \u7684\u5199\u6CD5\u662F\u5728 get \u91CC\u9762\u9012\u5F52\u8C03\u7528 Proxy \u5E76\u8FD4\u56DE</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  info: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: eason,</span></span>
<span class="line"><span style="color:#A6ACCD;">    blogs: [webpack, babel, cache]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let handler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get (target, key, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(get, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9012\u5F52\u521B\u5EFA\u5E76\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof target[key] === object &amp;&amp; target[key] !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Proxy(target[key], handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Reflect.get(target, key, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  set (target, key, value, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set, key, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Reflect.set(target, key, value, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let proxy = new Proxy(obj, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4EE5\u4E0B\u4E24\u53E5\u90FD\u80FD\u591F\u8FDB\u5165 set</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.info.name = Zoe</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.info.blogs.push(proxy)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>const p = new Proxy(target, handler)</code> target\uFF1A\u8981\u4F7F\u7528 Proxy \u5305\u88C5\u7684\u76EE\u6807\u5BF9\u8C61\uFF08\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5305\u62EC\u539F\u751F\u6570\u7EC4\uFF0C\u51FD\u6570\uFF0C\u751A\u81F3\u53E6\u4E00\u4E2A\u4EE3\u7406\uFF09\u3002 handler\uFF1A\u4E00\u4E2A\u901A\u5E38\u4EE5\u51FD\u6570\u4F5C\u4E3A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5404\u5C5E\u6027\u4E2D\u7684\u51FD\u6570\u5206\u522B\u5B9A\u4E49\u4E86\u5728\u6267\u884C\u5404\u79CD\u64CD\u4F5C\u65F6\u4EE3\u7406 p \u7684\u884C\u4E3A\uFF0Cget\u3001set\u7B49\u3002</p><p><code>Object.defineProperty(obj, prop, descriptor)</code> configurable enumerable value writable get set \u6570\u636E\u63CF\u8FF0\u7B26 \u53EF\u4EE5 \u53EF\u4EE5 \u53EF\u4EE5 \u53EF\u4EE5 \u4E0D\u53EF\u4EE5 \u4E0D\u53EF\u4EE5 \u5B58\u53D6\u63CF\u8FF0\u7B26 \u53EF\u4EE5 \u53EF\u4EE5 \u4E0D\u53EF\u4EE5 \u4E0D\u53EF\u4EE5 \u53EF\u4EE5 \u53EF\u4EE5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let obj = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  const arrProxy = new Proxy(obj, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(target, prop, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u83B7\u53D6\u503C&quot;, prop);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Reflect.get(target, prop, receiver);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set(target, prop, value, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u8BBE\u7F6E\u503C&quot;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      target[prop] = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Reflect.get(target, prop, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Reflect.get \u548C Reflect.set \u53EF\u4EE5\u7406\u89E3\u4E3A\u7C7B\u7EE7\u627F\u91CC\u7684 super\uFF0C\u5373\u8C03\u7528\u539F\u6765\u7684\u65B9\u6CD5</p></blockquote><h3 id="\u4E94\u3001vue-nexttick-\u7684\u539F\u7406" tabindex="-1">\u4E94\u3001Vue.nextTick \u7684\u539F\u7406 <a class="header-anchor" href="#\u4E94\u3001vue-nexttick-\u7684\u539F\u7406" aria-hidden="true">#</a></h3><ol><li>\u5F02\u6B65\uFF1AVue \u5B9E\u73B0\u54CD\u5E94\u5F0F\u5E76\u4E0D\u662F\u6570\u636E\u53D1\u751F\u53D8\u5316\u4E4B\u540E DOM \u7ACB\u5373\u53D8\u5316\uFF0C\u800C\u662F\u6309\u4E00\u5B9A\u7684\u7B56\u7565\u8FDB\u884C DOM \u7684\u66F4\u65B0;</li><li>\u4E8B\u4EF6\u5FAA\u73AF\uFF1AVue\u5728\u4FEE\u6539\u6570\u636E\u540E\uFF0C\u89C6\u56FE\u4E0D\u4F1A\u7ACB\u523B\u66F4\u65B0\uFF0C\u800C\u662F\u7B49\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u7EDF\u4E00\u8FDB\u884C\u89C6\u56FE\u66F4\u65B0\u3002</li></ol><h3 id="\u516D\u3001vue-router-\u8DEF\u7531\u4F20\u53C2" tabindex="-1">\u516D\u3001vue-router \u8DEF\u7531\u4F20\u53C2 <a class="header-anchor" href="#\u516D\u3001vue-router-\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a></h3><p>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 $route \u4F1A\u4F7F\u4E4B\u4E0E\u5176\u5BF9\u5E94\u8DEF\u7531\u5F62\u6210\u9AD8\u5EA6\u8026\u5408\uFF0C\u4ECE\u800C\u4F7F\u7EC4\u4EF6\u53EA\u80FD\u5728\u67D0\u4E9B\u7279\u5B9A\u7684 URL \u4E0A\u4F7F\u7528\uFF0C\u9650\u5236\u4E86\u5176\u7075\u6D3B\u6027\u3002\u4F7F\u7528 props \u5C06\u7EC4\u4EF6\u548C\u8DEF\u7531\u89E3\u8026\uFF1A</p><ol><li><p>\u5E03\u5C14\u6A21\u5F0F \u5982\u679C props \u88AB\u8BBE\u7F6E\u4E3A true\uFF0Croute.params \u5C06\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u7EC4\u4EF6\u5C5E\u6027\u3002</p></li><li><p>\u5BF9\u8C61\u6A21\u5F0F \u5982\u679C props \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u4F1A\u88AB\u6309\u539F\u6837\u8BBE\u7F6E\u4E3A\u7EC4\u4EF6\u5C5E\u6027\u3002\u5F53 props \u662F\u9759\u6001\u7684\u65F6\u5019\u6709\u7528\u3002</p></li></ol><p>3.\u51FD\u6570\u6A21\u5F0F \u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE props\u3002\u8FD9\u6837\u4F60\u4FBF\u53EF\u4EE5\u5C06\u53C2\u6570\u8F6C\u6362\u6210\u53E6\u4E00\u79CD\u7C7B\u578B\uFF0C\u5C06\u9759\u6001\u503C\u4E0E\u57FA\u4E8E\u8DEF\u7531\u7684\u503C\u7ED3\u5408\u7B49\u7B49\u3002</p><p><a href="https://router.vuejs.org/zh/guide/essentials/passing-props.html" target="_blank" rel="noreferrer">\u5B98\u65B9\u6587\u6863</a></p><h3 id="\u4E03\u3001v-model\u7B49\u4EF7\u5982\u4E0B" tabindex="-1">\u4E03\u3001<code>v-model</code>\u7B49\u4EF7\u5982\u4E0B <a class="header-anchor" href="#\u4E03\u3001v-model\u7B49\u4EF7\u5982\u4E0B" aria-hidden="true">#</a></h3><p>\u7ED1\u5B9A\u5C5E\u6027\uFF0C\u76D1\u542C<code>input</code>\u4E8B\u4EF6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;custom-input</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-bind:value=&quot;searchText&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-on:input=&quot;searchText = $event&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/custom-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,28),o=[p];function t(r,c,i,d,u,y){return n(),s("div",null,o)}const h=e(l,[["render",t]]);export{A as __pageData,h as default};
