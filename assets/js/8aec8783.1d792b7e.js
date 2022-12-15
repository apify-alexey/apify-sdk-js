"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),w=a,f=u["".concat(p,".").concat(w)]||u[w]||m[w]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=w;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},30169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>w,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"crawl-multiple-urls",title:"Crawl multiple URLs"},p=void 0,s={unversionedId:"examples/crawl-multiple-urls",id:"version-2.3/examples/crawl-multiple-urls",title:"Crawl multiple URLs",description:"This example crawls the specified list of URLs.",source:"@site/versioned_docs/version-2.3/examples/crawl_multiple_urls.md",sourceDirName:"examples",slug:"/examples/crawl-multiple-urls",permalink:"/docs/2.3/examples/crawl-multiple-urls",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671111189,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"crawl-multiple-urls",title:"Crawl multiple URLs"},sidebar:"version-2.3/docs",previous:{title:"Crawl all links on a website",permalink:"/docs/2.3/examples/crawl-all-links"},next:{title:"Crawl a website with relative links",permalink:"/docs/2.3/examples/crawl-relative-links"}},c={},u=[],m={toc:u};function w(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example crawls the specified list of URLs."),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestList\n    const requestList = await Apify.openRequestList('start-urls',\n        [\n            { url: 'http://www.example.com/page-1' },\n            { url: 'http://www.example.com/page-2' },\n            { url: 'http://www.example.com/page-3' },\n        ]);\n    // Function called for each URL\n    const handlePageFunction = async ({ request, $ }) => {\n        const title = $('title').text();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    };\n    // Create a CheerioCrawler\n    const crawler = new Apify.CheerioCrawler({\n        requestList,\n        handlePageFunction,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestList\n    const requestList = await Apify.openRequestList('start-urls',\n        [\n            { url: 'http://www.example.com/page-1' },\n            { url: 'http://www.example.com/page-2' },\n            { url: 'http://www.example.com/page-3' },\n        ]);\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        const title = await page.title();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestList\n    const requestList = await Apify.openRequestList('start-urls',\n        [\n            { url: 'http://www.example.com/page-1' },\n            { url: 'http://www.example.com/page-2' },\n            { url: 'http://www.example.com/page-3' },\n        ]);\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        const title = await page.title();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PlaywrightCrawler({\n        requestList,\n        handlePageFunction,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")))}w.isMDXComponent=!0}}]);