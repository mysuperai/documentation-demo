(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(204)),s={sidebar_label:"sitemap",title:"scrapy.spiders.sitemap"},c={unversionedId:"scrapy/scrapy/spiders/sitemap",id:"scrapy/scrapy/spiders/sitemap",isDocsHomePage:!1,title:"scrapy.spiders.sitemap",description:"SitemapSpider Objects",source:"@site/docs/scrapy/scrapy/spiders/sitemap.md",sourceDirName:"scrapy/scrapy/spiders",slug:"/scrapy/scrapy/spiders/sitemap",permalink:"/documentation-demo/docs/scrapy/scrapy/spiders/sitemap",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scrapy/scrapy/spiders/sitemap.md",version:"current",sidebar_label:"sitemap",frontMatter:{sidebar_label:"sitemap",title:"scrapy.spiders.sitemap"},sidebar:"tutorialSidebar",previous:{title:"scrapy.spiders.init",permalink:"/documentation-demo/docs/scrapy/scrapy/spiders/init"},next:{title:"scrapy.utils.boto",permalink:"/documentation-demo/docs/scrapy/scrapy/utils/boto"}},p=[{value:"SitemapSpider Objects",id:"sitemapspider-objects",children:[]}],o={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"sitemapspider-objects"},"SitemapSpider Objects"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"class SitemapSpider(Spider)\n")),Object(i.b)("h4",{id:"sitemap_filter"},"sitemap","_","filter"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"}," | sitemap_filter(entries)\n")),Object(i.b)("p",null,"This method can be used to filter sitemap entries by their\nattributes, for example, you can filter locs with lastmod greater\nthan a given date (see docs)."))}l.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?a.a.createElement(b,c(c({ref:t},o),{},{components:r})):a.a.createElement(b,c({ref:t},o))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<i;o++)s[o]=r[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);