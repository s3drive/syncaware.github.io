(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),p=r("FYa8"),l=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var p=o.key.slice(o.key.indexOf("$")+1);e.has(p)?a=!1:e.add(p)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,c=h.length;l<c;l++){var s=h[l];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var u=o.props[s],d=n[s]||new Set;"name"===s&&i||!d.has(u)?(d.add(u),n[s]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function f(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(p.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}f.rewind=function(){};var m=f;t.default=m},"8lYe":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("nKUr");function o(){return Object(n.jsx)("footer",{className:"pb-4 text-gray-200",children:Object(n.jsx)("div",{className:"max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8",children:Object(n.jsxs)("div",{className:"flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black",children:[Object(n.jsxs)("ul",{className:"flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://web.syncaware.com/terms",className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Terms"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://web.syncaware.com/privacy",className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Privacy Policy"})})]}),Object(n.jsxs)("ul",{className:"flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",href:"https://t.me/photosyncs3",children:"Telegram"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",href:"https://github.com/photosync/android-photosync-s3",children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",href:"https://syncaware.canny.io/",children:"Roadmap"})})]}),Object(n.jsx)("ul",{className:"flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",children:Object(n.jsx)("a",{href:"/",className:"text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight",children:"\xa9 2022 Sync Solutions."})})]})})})}},"9ixD":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("g4pe"),o=r.n(n),a=r("q1tI"),i=r.n(a);function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e){var t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var r="";e.title?(r=e.title,l.templateTitle&&(r=l.templateTitle.replace(/%s/g,(function(){return r})))):e.defaultTitle&&(r=e.defaultTitle),r&&t.push(i.a.createElement("title",{key:"title"},r));var n=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,o=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow;if(n||o?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(n?"noindex":"index")+","+(o?"nofollow":"follow")})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(n?"noindex":"index")+","+(o?"nofollow":"follow")}))):(t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var a=e.openGraph.type.toLowerCase();t.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:a})),"profile"===a&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===a&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"book:author:0"+r,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"book:tag:0"+r,property:"book:tag",content:e}))}))):"article"===a&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"article:author:0"+r,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"article:tag:0"+r,property:"article:tag",content:e}))}))):"video.movie"!==a&&"video.episode"!==a&&"video.tv_show"!==a&&"video.other"!==a||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,r){e.profile&&t.push(i.a.createElement("meta",{key:"video:actor:0"+r,property:"video:actor",content:e.profile})),e.role&&t.push(i.a.createElement("meta",{key:"video:actor:role:0"+r,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"video:director:0"+r,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"video:writer:0"+r,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"video:tag:0"+r,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||r})),(e.openGraph.description||e.description)&&t.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"og:image:0"+r,property:"og:image",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:image:alt0"+r,property:"og:image:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&t.push(i.a.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&t.push(i.a.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,r){t.push(i.a.createElement("meta",{key:"og:video:0"+r,property:"og:video",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:video:alt0"+r,property:"og:video:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&t.push(i.a.createElement("meta",{key:"og:video:width0"+r,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&t.push(i.a.createElement("meta",{key:"og:video:height"+r,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(i.a.createElement("meta",Object.assign({key:e.name||e.property||e.httpEquiv},e)))})),t},s=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,n=void 0!==r&&r,a=e.nofollow,p=e.description,l=e.canonical,s=e.openGraph,u=e.facebook,h=e.twitter,d=e.additionalMetaTags,f=e.titleTemplate,m=e.mobileAlternate,g=e.languageAlternates;return i.a.createElement(o.a,null,c({title:t,noindex:n,nofollow:a,description:p,canonical:l,facebook:u,openGraph:s,additionalMetaTags:d,twitter:h,titleTemplate:f,mobileAlternate:m,languageAlternates:g}))},t}(a.Component))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),p=r("a1gu"),l=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("q1tI"),u=function(e){i(r,e);var t=c(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=u},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},b0oO:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("nKUr");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(n=(i=p.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==p.return||p.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r("q1tI"),p=r.n(i);function l(){var e=a(p.a.useState(!1),2),t=e[0],r=e[1],o=a(p.a.useState(!1),2),i=(o[0],o[1],a(p.a.useState(!1),2));i[0],i[1];return Object(n.jsx)("header",{class:"fixed top-0 w-full clearNav z-50",children:Object(n.jsxs)("div",{class:"max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row",children:[Object(n.jsxs)("div",{className:"flex flex-row items-center justify-between p-3 md:p-1",children:[Object(n.jsx)("img",{src:"./images/app_icon_photosync.png",width:"48",class:"mr-3"}),Object(n.jsx)("a",{href:"/",class:"flex text-3xl text-white font-medium mb-4 md:mb-0",children:"Sync Solutions"}),Object(n.jsx)("button",{className:"text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto",type:"button","aria-label":"button",onClick:function(){return r(!t)},children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-menu",children:[Object(n.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),Object(n.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(n.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]}),Object(n.jsxs)("div",{className:"md:flex flex-grow items-center"+(t?" flex":" hidden"),children:[Object(n.jsx)("div",{class:"md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start"}),Object(n.jsx)("a",{className:"mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04",href:"#features",children:"Features"}),Object(n.jsx)("a",{href:"https://t.me/photosyncs3",rel:"noopener noreferrer",target:"_blank",className:"invisible md:visible",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",height:"20",title:"Telegram",children:Object(n.jsx)("path",{fill:"white",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"})})}),Object(n.jsx)("a",{"data-v-54e46119":"",href:"https://github.com/photosync/android-photosync-s3",rel:"noopener noreferrer",target:"_blank",className:"pl-7 invisible md:visible",children:Object(n.jsx)("svg",{"data-v-54e46119":"",width:"30",height:"20",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"GitHub",class:"github-link--logo",children:Object(n.jsx)("path",{"data-v-54e46119":"","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z",fill:"white"})})})]})]})})}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);