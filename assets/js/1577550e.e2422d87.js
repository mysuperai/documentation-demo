(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),c=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=c(n),u=r,f=b["".concat(s,".").concat(u)]||b[u]||d[u]||a;return n?i.a.createElement(f,l(l({ref:t},o),{},{components:n})):i.a.createElement(f,l({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<a;o++)s[o]=n[o];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),a=(n(0),n(204)),s={sidebar_label:"files",title:"scrapy.pipelines.files"},l={unversionedId:"scrapy/scrapy/pipelines/files",id:"scrapy/scrapy/pipelines/files",isDocsHomePage:!1,title:"scrapy.pipelines.files",description:"Files Pipeline",source:"@site/docs/scrapy/scrapy/pipelines/files.md",sourceDirName:"scrapy/scrapy/pipelines",slug:"/scrapy/scrapy/pipelines/files",permalink:"/documentation-demo/docs/scrapy/scrapy/pipelines/files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scrapy/scrapy/pipelines/files.md",version:"current",sidebar_label:"files",frontMatter:{sidebar_label:"files",title:"scrapy.pipelines.files"},sidebar:"tutorialSidebar",previous:{title:"scrapy.middleware",permalink:"/documentation-demo/docs/scrapy/scrapy/middleware"},next:{title:"scrapy.pipelines.images",permalink:"/documentation-demo/docs/scrapy/scrapy/pipelines/images"}},p=[{value:"FileException Objects",id:"fileexception-objects",children:[]},{value:"S3FilesStore Objects",id:"s3filesstore-objects",children:[]},{value:"FilesPipeline Objects",id:"filespipeline-objects",children:[]}],o={toc:p};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Files Pipeline"),Object(a.b)("p",null,"See documentation in topics/media-pipeline.rst"),Object(a.b)("h2",{id:"fileexception-objects"},"FileException Objects"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"class FileException(Exception)\n")),Object(a.b)("p",null,"General media error exception"),Object(a.b)("h2",{id:"s3filesstore-objects"},"S3FilesStore Objects"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"class S3FilesStore()\n")),Object(a.b)("h4",{id:"persist_file"},"persist","_","file"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"}," | persist_file(path, buf, info, meta=None, headers=None)\n")),Object(a.b)("p",null,"Upload file to S3 storage"),Object(a.b)("h2",{id:"filespipeline-objects"},"FilesPipeline Objects"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"class FilesPipeline(MediaPipeline)\n")),Object(a.b)("p",null,"Abstract pipeline that implement the file downloading"),Object(a.b)("p",null,"This pipeline tries to minimize network transfers and file processing,\ndoing stat of the files and determining if file is new, uptodate or\nexpired."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"new")," files are those that pipeline never processed and needs to be\ndownloaded from supplier site the first time."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"uptodate")," files are the ones that the pipeline processed and are still\nvalid files."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"expired")," files are those that pipeline already processed but the last\nmodification was made long time ago, so a reprocessing is recommended to\nrefresh it in case of change."))}c.isMDXComponent=!0}}]);