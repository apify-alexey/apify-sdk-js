"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3491],{29124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],l={id:"add-data-to-dataset",title:"Add data to dataset"},d=void 0,i={unversionedId:"examples/add-data-to-dataset",id:"version-2.3/examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/versioned_docs/version-2.3/examples/add_data_to_dataset.md",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/sdk/js/docs/2.3/examples/add-data-to-dataset",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1679943065,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"version-2.3/docs",previous:{title:"Accept user input",permalink:"/sdk/js/docs/2.3/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/sdk/js/docs/2.3/examples/basic-crawler"}},c={},p=[],u={toc:p},m="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#opendataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.openDataset()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Actor } = require('apify');\nconst { CheerioCrawler } = require('crawlee');\n\nActor.main(async () => {\n    // Function called for each URL\n    const requestHandler = async ({ request, body }) => {\n        // Save data to default dataset\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    };\n\n    const crawler = new CheerioCrawler({\n        requestHandler,\n    });\n\n    // Run the crawler\n    await crawler.run([\n        { url: 'http://www.example.com/page-1' },\n        { url: 'http://www.example.com/page-2' },\n        { url: 'http://www.example.com/page-3' },\n    ]);\n});\n")),(0,o.kt)("p",null,"Each item in this dataset will be saved to its own file in the following directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/apify_storage/datasets/default/\n")))}f.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);