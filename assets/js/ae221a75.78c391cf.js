(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(7),a=(r(0),r(204)),o={sidebar_label:"httpcache",title:"scrapy.extensions.httpcache"},s={unversionedId:"scrapy/scrapy/extensions/httpcache",id:"scrapy/scrapy/extensions/httpcache",isDocsHomePage:!1,title:"scrapy.extensions.httpcache",description:"FilesystemCacheStorage Objects",source:"@site/docs/scrapy/scrapy/extensions/httpcache.md",sourceDirName:"scrapy/scrapy/extensions",slug:"/scrapy/scrapy/extensions/httpcache",permalink:"/documentation-demo/docs/scrapy/scrapy/extensions/httpcache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scrapy/scrapy/extensions/httpcache.md",version:"current",sidebar_label:"httpcache",frontMatter:{sidebar_label:"httpcache",title:"scrapy.extensions.httpcache"},sidebar:"tutorialSidebar",previous:{title:"scrapy.extensions.feedexport",permalink:"/documentation-demo/docs/scrapy/scrapy/extensions/feedexport"},next:{title:"scrapy.extensions.logstats",permalink:"/documentation-demo/docs/scrapy/scrapy/extensions/logstats"}},p=[{value:"FilesystemCacheStorage Objects",id:"filesystemcachestorage-objects",children:[]}],i={toc:p};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"filesystemcachestorage-objects"},"FilesystemCacheStorage Objects"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"class FilesystemCacheStorage()\n")),Object(a.b)("h4",{id:"retrieve_response"},"retrieve","_","response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"}," | retrieve_response(spider, request)\n")),Object(a.b)("p",null,"Return response if present in cache, or None otherwise."),Object(a.b)("h4",{id:"store_response"},"store","_","response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"}," | store_response(spider, request, response)\n")),Object(a.b)("p",null,"Store the given response in the cache."),Object(a.b)("h4",{id:"parse_cachecontrol"},"parse","_","cachecontrol"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"parse_cachecontrol(header)\n")),Object(a.b)("p",null,"Parse Cache-Control header"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9"},"https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9")),Object(a.b)("p",null,">",">",">"," parse_cachecontrol(b","'","public, max-age=3600","'",") == {b","'","public","'",": None,\n...                                                 b","'","max-age","'",": b","'","3600","'","}\nTrue\n",">",">",">"," parse_cachecontrol(b","'","'",") == {}\nTrue"))}l.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,y=u["".concat(o,".").concat(h)]||u[h]||b[h]||a;return r?c.a.createElement(y,s(s({ref:t},i),{},{components:r})):c.a.createElement(y,s({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);