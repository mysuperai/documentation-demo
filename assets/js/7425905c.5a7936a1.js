(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(204)),i={sidebar_label:"pqueues",title:"scrapy.pqueues"},u={unversionedId:"scrapy/scrapy/pqueues",id:"scrapy/scrapy/pqueues",isDocsHomePage:!1,title:"scrapy.pqueues",description:"ScrapyPriorityQueue Objects",source:"@site/docs/scrapy/scrapy/pqueues.md",sourceDirName:"scrapy/scrapy",slug:"/scrapy/scrapy/pqueues",permalink:"/documentation-demo/docs/scrapy/scrapy/pqueues",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scrapy/scrapy/pqueues.md",version:"current",sidebar_label:"pqueues",frontMatter:{sidebar_label:"pqueues",title:"scrapy.pqueues"},sidebar:"tutorialSidebar",previous:{title:"scrapy.pipelines.media",permalink:"/documentation-demo/docs/scrapy/scrapy/pipelines/media"},next:{title:"scrapy.resolver",permalink:"/documentation-demo/docs/scrapy/scrapy/resolver"}},c=[{value:"ScrapyPriorityQueue Objects",id:"scrapypriorityqueue-objects",children:[]},{value:"DownloaderAwarePriorityQueue Objects",id:"downloaderawarepriorityqueue-objects",children:[]}],s={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"scrapypriorityqueue-objects"},"ScrapyPriorityQueue Objects"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class ScrapyPriorityQueue()\n")),Object(o.b)("p",null,"A priority queue implemented using multiple internal queues (typically,\nFIFO queues). It uses one internal queue for each priority value. The internal\nqueue must implement the following methods:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"* push(obj)\n* pop()\n* close()\n* __len__()\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__init__")," method of ScrapyPriorityQueue receives a downstream_queue_cls\nargument, which is a class used to instantiate a new (internal) queue when\na new priority is allocated."),Object(o.b)("p",null,"Only integer priorities should be used. Lower numbers are higher\npriorities."),Object(o.b)("p",null,"startprios is a sequence of priorities to start with. If the queue was\npreviously closed leaving some priority buckets non-empty, those priorities\nshould be passed in startprios."),Object(o.b)("h2",{id:"downloaderawarepriorityqueue-objects"},"DownloaderAwarePriorityQueue Objects"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"class DownloaderAwarePriorityQueue()\n")),Object(o.b)("p",null,"PriorityQueue which takes Downloader activity into account:\ndomains (slots) with the least amount of active downloads are dequeued\nfirst."))}p.isMDXComponent=!0},204:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,b=l["".concat(i,".").concat(d)]||l[d]||y[d]||o;return t?a.a.createElement(b,u(u({ref:r},s),{},{components:t})):a.a.createElement(b,u({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);