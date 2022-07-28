"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||i[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(7392),p=n(7094),u=n(2466);const c="tabList__CuJ",i="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,h=e.defaultValue,d=e.values,w=e.groupId,f=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,p.U)(),C=k.tabGroupChoices,x=k.setTabGroupChoices,T=(0,a.useState)(b),P=T[0],N=T[1],O=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var E=C[w];null!=E&&E!==P&&v.some((function(e){return e.value===E}))&&N(E)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==P&&(S(t),N(r),null!=w&&x(w,String(r)))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;n=null!=(o=O[l])?o:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:U,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function h(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),s=n(5162),p=n(1435);var u=["components"],c={id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},i=void 0,m={unversionedId:"examples/capture-screenshot",id:"examples/capture-screenshot",title:"Capture a screenshot using Puppeteer",description:"To run this example on the Apify Platform, select the apify/actor-node-puppeteer-chrome image for your Dockerfile.",source:"@site/../docs/examples/puppeteer_capture_screenshot.mdx",sourceDirName:"examples",slug:"/examples/capture-screenshot",permalink:"/apify-sdk-js/docs/examples/capture-screenshot",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1659035602,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"}},h={},d=[],w={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)("p",null,"This example captures a screenshot of a web page using ",(0,o.kt)("inlineCode",{parentName:"p"},"Puppeteer"),". It would look almost exactly the same with ",(0,o.kt)("inlineCode",{parentName:"p"},"Playwright"),"."),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyValueStore, launchPuppeteer } from '@crawlee/puppeteer';\n\nconst keyValueStore = await KeyValueStore.open();\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nconst screenshot = await page.screenshot();\n\n// Save the screenshot to the default key-value store\nawait keyValueStore.setValue('my-key', screenshot, { contentType: 'image/png' });\n\n// Close Puppeteer\nawait browser.close();\n")),(0,o.kt)(s.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { launchPuppeteer, puppeteerUtils } from '@crawlee/puppeteer';\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nawait puppeteerUtils.saveSnapshot(page, { key: 'my-key', saveHtml: false });\n\n// Close Puppeteer\nawait browser.close();\n"))),(0,o.kt)("p",null,"This example captures a screenshot of multiple web pages when using ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, KeyValueStore } from '@crawlee/puppeteer';\n\nconst keyValueStore = await KeyValueStore.open();\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Capture the screenshot with Puppeteer\n        const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Save the screenshot to the default key-value store\n        await keyValueStore.setValue(key, screenshot, { contentType: 'image/png' });\n    },\n});\n\nawait crawler.addRequests([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\n// Run the crawler\nawait crawler.run();\n")),(0,o.kt)(s.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, puppeteerUtils } from '@crawlee/puppeteer';\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Capture the screenshot\n        await puppeteerUtils.saveSnapshot(page, { key, saveHtml: false });\n    },\n});\n\nawait crawler.addRequests([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\n// Run the crawler\nawait crawler.run();\n"))),(0,o.kt)("p",null,"In both examples using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," variable is created based on the URL of the web page. This variable is used as the key when saving\neach screenshot into a key-value store."))}f.isMDXComponent=!0}}]);