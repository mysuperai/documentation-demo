(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),c=(t(0),t(204)),o={sidebar_label:"commands",title:"scrapy.commands"},s={unversionedId:"scrapy/scrapy/commands/__init__",id:"scrapy/scrapy/commands/__init__",isDocsHomePage:!1,title:"scrapy.commands",description:"Base class for Scrapy commands",source:"@site/docs/scrapy/scrapy/commands/__init__.md",sourceDirName:"scrapy/scrapy/commands",slug:"/scrapy/scrapy/commands/__init__",permalink:"/documentation-demo/docs/scrapy/scrapy/commands/__init__",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scrapy/scrapy/commands/__init__.md",version:"current",sidebar_label:"commands",frontMatter:{sidebar_label:"commands",title:"scrapy.commands"},sidebar:"tutorialSidebar",previous:{title:"conftest",permalink:"/documentation-demo/docs/scrapy/conftest"},next:{title:"scrapy.commands.genspider",permalink:"/documentation-demo/docs/scrapy/scrapy/commands/genspider"}},p=[{value:"ScrapyCommand Objects",id:"scrapycommand-objects",children:[]},{value:"BaseRunSpiderCommand Objects",id:"baserunspidercommand-objects",children:[]}],i={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Base class for Scrapy commands"),Object(c.b)("h2",{id:"scrapycommand-objects"},"ScrapyCommand Objects"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"class ScrapyCommand()\n")),Object(c.b)("h4",{id:"syntax"},"syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | syntax()\n")),Object(c.b)("p",null,"Command syntax (preferably one-line). Do not include command name."),Object(c.b)("h4",{id:"short_desc"},"short","_","desc"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | short_desc()\n")),Object(c.b)("p",null,"A short description of the command"),Object(c.b)("h4",{id:"long_desc"},"long","_","desc"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | long_desc()\n")),Object(c.b)("p",null,"A long description of the command. Return short description when not\navailable. It cannot contain newlines, since contents will be formatted\nby optparser which removes newlines and wraps text."),Object(c.b)("h4",{id:"help"},"help"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | help()\n")),Object(c.b)("p",null,"An extensive help for the command. It will be shown when using the\n",'"',"help",'"'," command. It can contain newlines, since no post-formatting will\nbe applied to its contents."),Object(c.b)("h4",{id:"add_options"},"add","_","options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | add_options(parser)\n")),Object(c.b)("p",null,"Populate option parse with options available for this command"),Object(c.b)("h4",{id:"run"},"run"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"}," | run(args, opts)\n")),Object(c.b)("p",null,"Entry point for running commands"),Object(c.b)("h2",{id:"baserunspidercommand-objects"},"BaseRunSpiderCommand Objects"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"class BaseRunSpiderCommand(ScrapyCommand)\n")),Object(c.b)("p",null,"Common class used to share functionality between the crawl, parse and runspider commands"))}l.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||c;return t?a.a.createElement(u,s(s({ref:n},i),{},{components:t})):a.a.createElement(u,s({ref:n},i))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);