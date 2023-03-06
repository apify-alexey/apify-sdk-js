"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],i={id:"pseudo-url",title:"PseudoUrl"},s=void 0,o={unversionedId:"api/pseudo-url",id:"version-2.3/api/pseudo-url",title:"PseudoUrl",description:"Represents a pseudo-URL (PURL) - an URL pattern used by web crawlers to specify which URLs should the crawler visit. This class is used by the",source:"@site/versioned_docs/version-2.3/api/PseudoUrl.md",sourceDirName:"api",slug:"/api/pseudo-url",permalink:"/sdk/js/docs/2.3/api/pseudo-url",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1677773981,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{id:"pseudo-url",title:"PseudoUrl"},sidebar:"version-2.3/docs",previous:{title:"RequestQueue",permalink:"/sdk/js/docs/2.3/api/request-queue"},next:{title:"utils",permalink:"/sdk/js/docs/2.3/api/utils"}},u={},c=[{value:"<code>new PseudoUrl(purl, requestTemplate)</code>",id:"new-pseudourlpurl-requesttemplate",level:2},{value:"<code>pseudoUrl.matches(url)</code>",id:"pseudourlmatchesurl",level:2},{value:"<code>pseudoUrl.createRequest(urlOrProps)</code>",id:"pseudourlcreaterequesturlorprops",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"pseudourl"}),(0,l.kt)("p",null,"Represents a pseudo-URL (PURL) - an URL pattern used by web crawlers to specify which URLs should the crawler visit. This class is used by the\n",(0,l.kt)("a",{parentName:"p",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()"))," function."),(0,l.kt)("p",null,"A PURL is simply a URL with special directives enclosed in ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," brackets. Currently, the only supported directive is ",(0,l.kt)("inlineCode",{parentName:"p"},"[RegExp]"),", which defines a\nJavaScript-style regular expression to match against the URL."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PseudoUrl")," class can be constructed either using a pseudo-URL string or a regular expression (an instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," object). With a\npseudo-URL string, the matching is always case-insensitive. If you need case-sensitive matching, use an appropriate ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," object."),(0,l.kt)("p",null,"For example, a PURL ",(0,l.kt)("inlineCode",{parentName:"p"},"http://www.example.com/pages/[(\\w|-)*]")," will match all of the following URLs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://www.example.com/pages/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://www.example.com/pages/my-awesome-page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://www.example.com/pages/something"))),(0,l.kt)("p",null,"Be careful to correctly escape special characters in the pseudo-URL string. If either ",(0,l.kt)("inlineCode",{parentName:"p"},"[")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"]")," is part of the normal query string, it must be\nencoded as ",(0,l.kt)("inlineCode",{parentName:"p"},"[\\x5B]")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[\\x5D]"),", respectively. For example, the following PURL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"http://www.example.com/search?do[\\x5B]load[\\x5D]=1\n")),(0,l.kt)("p",null,"will match the URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"http://www.example.com/search?do[load]=1\n")),(0,l.kt)("p",null,"If the regular expression in the pseudo-URL contains a backslash character (",")",", you need to escape it with another back backslash, as shown in the\nexample below."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Using a pseudo-URL string\nconst purl = new Apify.PseudoUrl('http://www.example.com/pages/[(\\\\w|-)+]', {\n    userData: { foo: 'bar' },\n});\n\n// Using a regular expression\nconst purl2 = new Apify.PseudoUrl(/http:\\/\\/www\\.example\\.com\\/pages\\/(\\w|-)+/);\n\nif (purl.matches('http://www.example.com/pages/my-awesome-page')) console.log('Match!');\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"pseudourl"}),(0,l.kt)("h2",{id:"new-pseudourlpurl-requesttemplate"},(0,l.kt)("inlineCode",{parentName:"h2"},"new PseudoUrl(purl, requestTemplate)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"purl")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"RegExp")," - A pseudo-URL string or a regular expression object. Using a ",(0,l.kt)("inlineCode",{parentName:"li"},"RegExp")," instance enables more granular control,\nsuch as making the matching case sensitive."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"requestTemplate")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/request-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," - Options for the new ",(0,l.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," instances created for\nmatching URLs by the ",(0,l.kt)("a",{parentName:"li",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()"))," function.")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"matches"}),(0,l.kt)("h2",{id:"pseudourlmatchesurl"},(0,l.kt)("inlineCode",{parentName:"h2"},"pseudoUrl.matches(url)")),(0,l.kt)("p",null,"Determines whether a URL matches this pseudo-URL pattern."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," - URL to be matched.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," - Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if given URL matches pseudo-URL."),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"createrequest"}),(0,l.kt)("h2",{id:"pseudourlcreaterequesturlorprops"},(0,l.kt)("inlineCode",{parentName:"h2"},"pseudoUrl.createRequest(urlOrProps)")),(0,l.kt)("p",null,"Creates a Request object from a provided ",(0,l.kt)("inlineCode",{parentName:"p"},"requestTemplate")," and a given URL or an object that specifies \\$",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," properties. In\ncase of a collision the properties will override the template, except for ",(0,l.kt)("inlineCode",{parentName:"p"},"userData"),", which will be merged together, with the ",(0,l.kt)("inlineCode",{parentName:"p"},"userData")," property\nhaving preference over the template. This enables dynamic overriding of the template."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"urlOrProps")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Object<string, *>"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);