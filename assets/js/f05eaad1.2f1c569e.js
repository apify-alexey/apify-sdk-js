"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=p,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),p=n(63366),o=(n(67294),n(3905)),a=["components"],l={id_old:"version-1.3-puppeteer-pool",title:"PuppeteerPool",id:"puppeteer-pool"},i=void 0,s={unversionedId:"api/puppeteer-pool",id:"version-1.3/api/puppeteer-pool",title:"PuppeteerPool",description:"Manages a pool of Chrome browser instances controlled using Puppeteer.",source:"@site/versioned_docs/version-1.3/api/PuppeteerPool.md",sourceDirName:"api",slug:"/api/puppeteer-pool",permalink:"/docs/1.3/api/puppeteer-pool",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1664841405,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id_old:"version-1.3-puppeteer-pool",title:"PuppeteerPool",id:"puppeteer-pool"}},u={},c=[{value:"<code>new PuppeteerPool([options])</code>",id:"new-puppeteerpooloptions",level:2},{value:"<code>puppeteerPool.newPage()</code>",id:"puppeteerpoolnewpage",level:2},{value:"<code>puppeteerPool.destroy()</code>",id:"puppeteerpooldestroy",level:2},{value:"<code>puppeteerPool.retire(browser)</code>",id:"puppeteerpoolretirebrowser",level:2},{value:"<code>puppeteerPool.recyclePage(page)</code>",id:"puppeteerpoolrecyclepagepage",level:2},{value:"<code>puppeteerPool.serveLiveViewSnapshot(page)</code>",id:"puppeteerpoolserveliveviewsnapshotpage",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"puppeteerpool"}),(0,o.kt)("p",null,"Manages a pool of Chrome browser instances controlled using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," reuses Chrome instances and tabs using specific browser rotation and retirement policies. This is useful in order to facilitate\nrotation of proxies, cookies or other settings in order to prevent detection of your web scraping bot, access web pages from various countries etc."),(0,o.kt)("p",null,"Additionally, the reuse of browser instances instances speeds up crawling, and the retirement of instances helps mitigate effects of memory leaks in\nChrome."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," is internally used by the ",(0,o.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," class."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const puppeteerPool = new PuppeteerPool({\n    launchPuppeteerOptions: {\n        // Use Chrome instead of Chromium\n        useChrome: true,\n        // Hide from bot detection\n        stealth: true,\n    },\n});\n\nconst page1 = await puppeteerPool.newPage();\nconst page2 = await puppeteerPool.newPage();\n\n// ... do something with the pages ...\n\n// Close all browsers.\nawait puppeteerPool.destroy();\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"puppeteerpool"}),(0,o.kt)("h2",{id:"new-puppeteerpooloptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"new PuppeteerPool([options])")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/puppeteer-pool-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerPoolOptions"))," - All ",(0,o.kt)("inlineCode",{parentName:"li"},"PuppeteerPool")," parameters are passed via an options object.")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"newpage"}),(0,o.kt)("h2",{id:"puppeteerpoolnewpage"},(0,o.kt)("inlineCode",{parentName:"h2"},"puppeteerPool.newPage()")),(0,o.kt)("p",null,"Produces a new page instance either by reusing an idle page that currently isn't processing any request or by spawning a new page (new browser tab) in\none of the available browsers when no idle pages are available."),(0,o.kt)("p",null,"To spawn a new browser tab for each page, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"reusePages")," constructor option to false."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<Page>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"destroy"}),(0,o.kt)("h2",{id:"puppeteerpooldestroy"},(0,o.kt)("inlineCode",{parentName:"h2"},"puppeteerPool.destroy()")),(0,o.kt)("p",null,"Closes all open browsers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"retire"}),(0,o.kt)("h2",{id:"puppeteerpoolretirebrowser"},(0,o.kt)("inlineCode",{parentName:"h2"},"puppeteerPool.retire(browser)")),(0,o.kt)("p",null,"Manually retires a Puppeteer ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-class-browser",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Browser"))," instance from the pool. The browser will\ncontinue to process open pages so that they may gracefully finish. This is unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.close()")," which will forcibly terminate the browser and all\nopen pages will be closed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"browser")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Browser"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"recyclepage"}),(0,o.kt)("h2",{id:"puppeteerpoolrecyclepagepage"},(0,o.kt)("inlineCode",{parentName:"h2"},"puppeteerPool.recyclePage(page)")),(0,o.kt)("p",null,"Closes the page, unless the ",(0,o.kt)("inlineCode",{parentName:"p"},"reuseTabs")," option is set to true. Then it would only flag the page for a future reuse, without actually closing it."),(0,o.kt)("p",null,"NOTE: LiveView snapshotting is tied to this function. When ",(0,o.kt)("inlineCode",{parentName:"p"},"useLiveView")," option is set to true, a snapshot of the page will be taken just before\nclosing the page or flagging it for reuse."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Page"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"serveliveviewsnapshot"}),(0,o.kt)("h2",{id:"puppeteerpoolserveliveviewsnapshotpage"},(0,o.kt)("inlineCode",{parentName:"h2"},"puppeteerPool.serveLiveViewSnapshot(page)")),(0,o.kt)("p",null,"Tells the connected LiveViewServer to serve a snapshot when available."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Page"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);