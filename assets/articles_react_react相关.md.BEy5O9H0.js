import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.C5pyVv65.js";const u=JSON.parse('{"title":"react相关","description":"","frontmatter":{},"headers":[],"relativePath":"articles/react/react相关.md","filePath":"articles/react/react相关.md"}'),o={name:"articles/react/react相关.md"},c=r('<h1 id="react相关" tabindex="-1">react相关 <a class="header-anchor" href="#react相关" aria-label="Permalink to &quot;react相关&quot;">​</a></h1><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><p>react组件是一段可以使用标签进行扩展的JS函数，组件名称必须以大写字母开头，否则无法使用。React 仅在渲染之间存在差异时才会更改 DOM 节点。</p><h2 id="组件被渲染两次" tabindex="-1">组件被渲染两次 <a class="header-anchor" href="#组件被渲染两次" aria-label="Permalink to &quot;组件被渲染两次&quot;">​</a></h2><p>React 提供了 “严格模式”，在严格模式下开发时，它将会调用每个组件函数两次。通过重复调用组件函数，严格模式有助于找到违反这些规则的组件。(<a href="https://zh-hans.react.dev/learn/keeping-components-pure" target="_blank" rel="noreferrer">参考</a>)</p><h2 id="jsx-规则" tabindex="-1">JSX 规则 <a class="header-anchor" href="#jsx-规则" aria-label="Permalink to &quot;JSX 规则&quot;">​</a></h2><ol><li>只能返回一个根元素，JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。</li><li>标签必须闭合</li><li>使用驼峰式命名法给 所有 大部分属性命名</li></ol><h2 id="hook" tabindex="-1">hook <a class="header-anchor" href="#hook" aria-label="Permalink to &quot;hook&quot;">​</a></h2><p>在 React 中，useState 以及任何其他以“use”开头的函数都被称为 Hook。 Hook 是特殊的函数，只在 React 渲染时有效（我们将在下一节详细介绍）。它们能让你 “hook” 到不同的 React 特性中去。</p><blockquote><p>Hooks ——以 use 开头的函数——只能在组件或自定义 Hook 的最顶层调用。 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。(<a href="https://zh-hans.react.dev/learn/state-a-components-memory" target="_blank" rel="noreferrer">参考</a>)</p></blockquote>',10),l=[c];function s(n,h,i,_,d,p){return t(),e("div",null,l)}const m=a(o,[["render",s]]);export{u as __pageData,m as default};
