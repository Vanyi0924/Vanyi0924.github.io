import{_ as e,c as t,o,a4 as s}from"./chunks/framework.C5pyVv65.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/pm2 启动 mjs.md","filePath":"articles/运维/pm2 启动 mjs.md"}'),a={name:"articles/运维/pm2 启动 mjs.md"},r=s('<p><a href="https://github.com/Unitech/pm2/issues/4591" target="_blank" rel="noreferrer">github issue</a></p><blockquote><p>I also had the same issue, the workaround I found is to use <code>pm2 start node -- .</code> This way pm2 starts up node which starts your app. In my case I use . (Starts the main: entry in package.json), but I&#39;m sure you can also use <code>pm2 start node -- server.js</code> or <code>pm2 start npm -- start</code> (I haven&#39;t tried these, but I don&#39;t see why they wouldn&#39;t work). I run a discord bot and for some reason if I add <code>--watch</code> it restarts my bot every time I do a command, this might be a side effect from using this work around. Although I can&#39;t be sure since I can&#39;t get my bot to run with <code>pm2 start server.js</code>. I&#39;ve also tried to run <code>pm2 start nodemon -- server.js</code> as a workaround to the <code>--watch</code> issue but that throws a syntax error for: @ECHO off in the nodemon package</p></blockquote>',2),n=[r];function c(d,i,m,h,u,p){return o(),t("div",null,n)}const f=e(a,[["render",c]]);export{l as __pageData,f as default};
