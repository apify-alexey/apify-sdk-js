"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(39960),o=r(74477),s=r(52263);const i=function(e){var t=e.to,r=e.children,i=(0,o.E)(),p=i.version,l=i.isLast;if((0,s.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var c=p+"/";return"current"===p?c="next/":l&&(c=""),n.createElement(a.default,{to:"/api/"+c+t},r)}},39493:(e,t,r)=>{r.d(t,{B:()=>i,T:()=>s});var n=r(67294),a=r(39960),o="https://crawlee.dev",s=function(e){var t=e.to,r=e.children,s=e.version;return n.createElement(a.default,{href:o+"/api"+(s?"/"+s:"")+"/"+t},r)},i=function(e){var t=e.to,r=e.children;return n.createElement(a.default,{href:o+"/"+t},r)}},44949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>w,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(41435),i=r(14959),p=r(39493);var l=["components"],c={id:"puppeteer-crawler",title:"Puppeteer crawler"},u=void 0,d={unversionedId:"examples/puppeteer-crawler",id:"examples/puppeteer-crawler",title:"Puppeteer crawler",description:"This example demonstrates how to use PuppeteerCrawler in combination",source:"@site/../docs/examples/puppeteer_crawler.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-crawler",permalink:"/docs/next/examples/puppeteer-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671104008,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"puppeteer-crawler",title:"Puppeteer crawler"},sidebar:"docs",previous:{title:"Capture a screenshot using Puppeteer",permalink:"/docs/next/examples/capture-screenshot"},next:{title:"Puppeteer recursive crawl",permalink:"/docs/next/examples/puppeteer-recursive-crawl"}},f={},m=[],h={toc:m};function w(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(p.T,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," in combination\nwith ",(0,o.kt)(i.Z,{to:"apify/class/RequestQueue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"\nto recursively scrape the ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Puppeteer."),(0,o.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create an instance of the PuppeteerCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Puppeteer.\nconst crawler = new PuppeteerCrawler({\n    // Here you can set options that are passed to the launchPuppeteer() function.\n    launchContext: {\n        launchOptions: {\n            headless: true,\n            // Other Puppeteer options\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by the Apify SDK.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks }) {\n        console.log(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Actor.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.length === 0) console.log(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request }) {\n        console.log(`Request ${request.url} failed too many times.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run(['https://news.ycombinator.com/']);\n\nconsole.log('Crawler finished.');\n\nawait Actor.exit();\n"))}w.isMDXComponent=!0}}]);