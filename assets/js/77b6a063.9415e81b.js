"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],s={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},i=void 0,p={unversionedId:"examples/map-and-reduce",id:"version-2.3/examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Apify dataset",source:"@site/versioned_docs/version-2.3/examples/map_and_reduce.md",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/sdk/js/docs/2.3/examples/map-and-reduce",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1678362517,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"version-2.3/docs",previous:{title:"Forms",permalink:"/sdk/js/docs/2.3/examples/forms"},next:{title:"Playwright crawler",permalink:"/sdk/js/docs/2.3/examples/playwright-crawler"}},d={},u=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows an easy use-case of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/dataset",target:"_blank",rel:"noopener"},"Apify dataset"),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/dataset#map",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"map"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/dataset#reduce",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"reduce"))," methods. Both methods can be used to simplify the\ndataset results workflow process. Both can be called on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/dataset",target:null,rel:null},"dataset")," directly."),(0,o.kt)("p",null,"Important to mention is that both methods return a new result (",(0,o.kt)("inlineCode",{parentName:"p"},"map")," returns a new array and ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce"),"\ncan return any type) - neither method updates the dataset in any way."),(0,o.kt)("p",null,"Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page:\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," and a hypothetical number of ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"h3")," header elements under the ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," key."),(0,o.kt)("p",null,"This data structure is stored in the default dataset under\n",(0,o.kt)("inlineCode",{parentName:"p"},"{PROJECT_FOLDER}/apify_storage/datasets/default/"),".\nIf you want to simulate the functionality, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/dataset#pushdata",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"dataset.PushData()"))," method\nto save the example ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON array")," to your dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "url": "https://apify.com/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://apify.com/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://apify.com/proxy",\n        "headingCount": 4\n    }\n]\n')),(0,o.kt)("h3",{id:"map"},"Map"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method is very similar to standard Array mapping methods.\nIt produces a new array of values by mapping each value in the existing array through\na transformation function and an options parameter."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method used to check if are there more than 5 header elements on each page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // open default dataset\n    const dataSet = await Apify.openDataset();\n\n    // calling map function and filtering through mapped items\n    const moreThan5headers = (await dataSet.map((item) => item.headingCount)).filter((count) => count > 5);\n\n    // saving result of map to default Key-value store\n    await Apify.setValue('pages_with_more_than_5_headers', moreThan5headers);\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moreThan5headers")," variable is an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," attributes where the number\nof headers is greater than 5."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method's result value saved to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"key-value store"))," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[ 11, 8 ]\n")),(0,o.kt)("h3",{id:"reduce"},"Reduce"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method does not produce a new array of values - it reduces a list of values down to a single value.\nThe method iterates through the items in the dataset using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/dataset#datasetreduceiteratee-memo-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"memo")," argument"),".\nAfter performing the necessary calculation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," is sent to the next iteration,\nwhile the item just processed is reduced (removed)."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method to get the total number of headers scraped (all items in the dataset):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // open default dataset\n    const dataSet = await Apify.openDataset();\n\n    // calling reduce function and using memo to calculate number of headers\n    const pagesHeadingCount = await dataSet.reduce((memo, value) => {\n        memo += value.headingCount;\n        return memo;\n    }, 0);\n\n    // saving result of reduce to default Key-value store\n    await Apify.setValue('pages_heading_count', pagesHeadingCount);\n});\n")),(0,o.kt)("p",null,"The original dataset will be reduced to a single value, ",(0,o.kt)("inlineCode",{parentName:"p"},"pagesHeadingCount"),", which contains\nthe count of all headers for all scraped pages (all dataset items)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method's result value saved to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-value-store",target:null,rel:null},"key-value store")," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"23\n")))}c.isMDXComponent=!0}}]);