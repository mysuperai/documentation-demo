(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(110)),i={sidebar_position:1},s={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-extras/manage-docs-versions.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},c=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],l={toc:c};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Docusaurus can manage multiple versions of your docs."),Object(a.b)("h2",{id:"create-a-docs-version"},"Create a docs version"),Object(a.b)("p",null,"Release a version 1.0 of your project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",Object(a.b)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"versions.json")," is created."),Object(a.b)("p",null,"Your docs now have 2 versions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"1.0")," at ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"current")," at ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",Object(a.b)("strong",{parentName:"li"},"upcoming, unreleased docs"))),Object(a.b)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),Object(a.b)("p",null,"To navigate seamlessly across versions, add a version dropdown."),Object(a.b)("p",null,"Modify the ",Object(a.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),Object(a.b)("p",null,"The docs version dropdown appears in your navbar:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Docs Version Dropdown",src:n(163).default})),Object(a.b)("h2",{id:"update-an-existing-version"},"Update an existing version"),Object(a.b)("p",null,"It is possible to edit versioned docs in their respective folder:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}d.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);