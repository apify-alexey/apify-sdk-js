"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],l={id:"statistic-persisted-state",title:"StatisticPersistedState"},o=void 0,p={unversionedId:"typedefs/statistic-persisted-state",id:"version-2.3/typedefs/statistic-persisted-state",title:"StatisticPersistedState",description:"Format of the persisted stats",source:"@site/versioned_docs/version-2.3/typedefs/StatisticPersistedState.md",sourceDirName:"typedefs",slug:"/typedefs/statistic-persisted-state",permalink:"/docs/2.3/typedefs/statistic-persisted-state",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1668460339,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{id:"statistic-persisted-state",title:"StatisticPersistedState"}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>requestRetryHistogram</code>",id:"requestretryhistogram",level:3},{value:"<code>statsId</code>",id:"statsid",level:3},{value:"<code>requestAvgFailedDurationMillis</code>",id:"requestavgfaileddurationmillis",level:3},{value:"<code>requestAvgFinishedDurationMillis</code>",id:"requestavgfinisheddurationmillis",level:3},{value:"<code>requestsFinishedPerMinute</code>",id:"requestsfinishedperminute",level:3},{value:"<code>requestsFailedPerMinute</code>",id:"requestsfailedperminute",level:3},{value:"<code>requestTotalDurationMillis</code>",id:"requesttotaldurationmillis",level:3},{value:"<code>requestsTotal</code>",id:"requeststotal",level:3},{value:"<code>crawlerRuntimeMillis</code>",id:"crawlerruntimemillis",level:3},{value:"<code>crawlerLastStartTimestamp</code>",id:"crawlerlaststarttimestamp",level:3},{value:"<code>statsPersistedAt</code>",id:"statspersistedat",level:3}],c={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"statisticpersistedstate"}),(0,a.kt)("p",null,"Format of the persisted stats"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"requestretryhistogram"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestRetryHistogram")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<number>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statsid"},(0,a.kt)("inlineCode",{parentName:"h3"},"statsId")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestavgfaileddurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestAvgFailedDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestavgfinisheddurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestAvgFinishedDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsfinishedperminute"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFinishedPerMinute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsfailedperminute"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFailedPerMinute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requesttotaldurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestTotalDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requeststotal"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsTotal")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawlerruntimemillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawlerRuntimeMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawlerlaststarttimestamp"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawlerLastStartTimestamp")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statspersistedat"},(0,a.kt)("inlineCode",{parentName:"h3"},"statsPersistedAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);