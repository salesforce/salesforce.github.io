(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),c=a(174),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(c.a,null,l.a.createElement("h1",null,"Not Found"))},t}(l.a.Component);t.default=i},158:function(e,t,a){"use strict";a(38);var n=a(82),r=a.n(n),o=a(0),l=a.n(o),c=a(4),i=a.n(c),s=a(33),u=a.n(s);a(167),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;var m=a(173);t.a=function(e){var t=e.children,a=e.to,n=e.activeClassName,o=e.partiallyActive,c=r()(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(a)?l.a.createElement(u.a,Object.assign({to:a,activeClassName:n,partiallyActive:o},c),t):l.a.createElement(m.OutboundLink,Object.assign({href:a},c),t)}},159:function(e,t,a){a(162)("asyncIterator")},160:function(e,t,a){"use strict";var n=a(5),r=a(26),o=a(18),l=a(12),c=a(14),i=a(168).KEY,s=a(19),u=a(40),m=a(41),f=a(37),p=a(3),v=a(163),h=a(162),d=a(169),g=a(80),b=a(6),y=a(11),E=a(35),w=a(76),N=a(56),x=a(81),k=a(170),S=a(171),O=a(25),C=a(39),j=S.f,P=O.f,A=k.f,T=n.Symbol,F=n.JSON,H=F&&F.stringify,M=p("_hidden"),D=p("toPrimitive"),K={}.propertyIsEnumerable,L=u("symbol-registry"),_=u("symbols"),J=u("op-symbols"),R=Object.prototype,V="function"==typeof T,z=n.QObject,I=!z||!z.prototype||!z.prototype.findChild,G=o&&s(function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,a){var n=j(R,t);n&&delete R[t],P(e,t,a),n&&e!==R&&P(R,t,n)}:P,q=function(e){var t=_[e]=x(T.prototype);return t._k=e,t},B=V&&"symbol"==typeof T.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof T},W=function(e,t,a){return e===R&&W(J,t,a),b(e),t=w(t,!0),b(a),r(_,t)?(a.enumerable?(r(e,M)&&e[M][t]&&(e[M][t]=!1),a=x(a,{enumerable:N(0,!1)})):(r(e,M)||P(e,M,N(1,{})),e[M][t]=!0),G(e,t,a)):P(e,t,a)},Y=function(e,t){b(e);for(var a,n=d(t=E(t)),r=0,o=n.length;o>r;)W(e,a=n[r++],t[a]);return e},Z=function(e){var t=K.call(this,e=w(e,!0));return!(this===R&&r(_,e)&&!r(J,e))&&(!(t||!r(this,e)||!r(_,e)||r(this,M)&&this[M][e])||t)},Q=function(e,t){if(e=E(e),t=w(t,!0),e!==R||!r(_,t)||r(J,t)){var a=j(e,t);return!a||!r(_,t)||r(e,M)&&e[M][t]||(a.enumerable=!0),a}},U=function(e){for(var t,a=A(E(e)),n=[],o=0;a.length>o;)r(_,t=a[o++])||t==M||t==i||n.push(t);return n},X=function(e){for(var t,a=e===R,n=A(a?J:E(e)),o=[],l=0;n.length>l;)!r(_,t=n[l++])||a&&!r(R,t)||o.push(_[t]);return o};V||(c((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(a){this===R&&t.call(J,a),r(this,M)&&r(this[M],e)&&(this[M][e]=!1),G(this,e,N(1,a))};return o&&I&&G(R,e,{configurable:!0,set:t}),q(e)}).prototype,"toString",function(){return this._k}),S.f=Q,O.f=W,a(164).f=k.f=U,a(75).f=Z,a(77).f=X,o&&!a(36)&&c(R,"propertyIsEnumerable",Z,!0),v.f=function(e){return q(p(e))}),l(l.G+l.W+l.F*!V,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var te=C(p.store),ae=0;te.length>ae;)h(te[ae++]);l(l.S+l.F*!V,"Symbol",{for:function(e){return r(L,e+="")?L[e]:L[e]=T(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){I=!0},useSimple:function(){I=!1}}),l(l.S+l.F*!V,"Object",{create:function(e,t){return void 0===t?x(e):Y(x(e),t)},defineProperty:W,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:U,getOwnPropertySymbols:X}),F&&l(l.S+l.F*(!V||s(function(){var e=T();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))})),"JSON",{stringify:function(e){for(var t,a,n=[e],r=1;arguments.length>r;)n.push(arguments[r++]);if(a=t=n[1],(y(t)||void 0!==e)&&!B(e))return g(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!B(t))return t}),n[1]=t,H.apply(F,n)}}),T.prototype[D]||a(13)(T.prototype,D,T.prototype.valueOf),m(T,"Symbol"),m(Math,"Math",!0),m(n.JSON,"JSON",!0)},161:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},162:function(e,t,a){var n=a(5),r=a(20),o=a(36),l=a(163),c=a(25).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:l.f(e)})}},163:function(e,t,a){t.f=a(3)},164:function(e,t,a){var n=a(79),r=a(57).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},165:function(e){e.exports={data:{githubToml:{organizations:[{name:"Salesforce",url:"https://github.com/salesforce"},{name:"Salesforce UX",url:"https://github.com/salesforce-ux"},{name:"Heroku",url:"https://github.com/heroku"},{name:"Mulesoft",url:"https://github.com/mulesoft"},{name:"Datorama",url:"https://github.com/datorama"},{name:"oclif",url:"https://github.com/oclif"},{name:"Lightning Platform",url:"https://github.com/forcedotcom"},{name:"Developer Force",url:"https://github.com/developerforce"},{name:"Trailhead Apps",url:"https://github.com/trailheadapps"}]}}}},166:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},167:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},168:function(e,t,a){var n=a(37)("meta"),r=a(11),o=a(26),l=a(25).f,c=0,i=Object.isExtensible||function(){return!0},s=!a(19)(function(){return i(Object.preventExtensions({}))}),u=function(e){l(e,n,{value:{i:"O"+ ++c,w:{}}})},m=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!i(e))return"F";if(!t)return"E";u(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!i(e))return!0;if(!t)return!1;u(e)}return e[n].w},onFreeze:function(e){return s&&m.NEED&&i(e)&&!o(e,n)&&u(e),e}}},169:function(e,t,a){var n=a(39),r=a(77),o=a(75);e.exports=function(e){var t=n(e),a=r.f;if(a)for(var l,c=a(e),i=o.f,s=0;c.length>s;)i.call(e,l=c[s++])&&t.push(l);return t}},170:function(e,t,a){var n=a(35),r=a(164).f,o={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(t){return l.slice()}}(e):r(n(e))}},171:function(e,t,a){var n=a(75),r=a(56),o=a(35),l=a(76),c=a(26),i=a(78),s=Object.getOwnPropertyDescriptor;t.f=a(18)?s:function(e,t){if(e=o(e),t=l(t,!0),i)try{return s(e,t)}catch(a){}if(c(e,t))return r(!n.f.call(e,t),e[t])}},172:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(58),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},173:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.OutboundLink=c;var r=n(a(83)),o=n(a(0)),l=n(a(4));function c(e){return o.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}c.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(161),a(159),a(160),a(74),a(55),a(34),a(165)),l=a(166),c=a.n(l),i=a(148),s=a.n(i),u=a(158),m=function(){var e=[],t=o.data.githubToml.organizations.entries(),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var l;if(a){if(n>=t.length)break;l=t[n++]}else{if((n=t.next()).done)break;l=n.value}var i=l,m=i[0],f=i[1];e.push(r.a.createElement(u.a,{to:f.url,className:"dropdown-item nav-link pl-2",key:"github-org-"+m},f.name))}return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg justify-content-between navbar-light border-bottom-0","data-sticky":"top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col flex-fill px-0 d-flex justify-content-between"},r.a.createElement(u.a,{to:"/",className:c()("navbar-brand","mr-0","fade-page")},r.a.createElement("img",{src:"/assets/img/salesforce-opensource.svg",alt:"Salesforce Open Source",className:s.a.logo})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("svg",{className:"icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z",fill:"#212529"})))),r.a.createElement("div",{className:"collapse navbar-collapse col px-0 px-lg-2 flex-fill justify-content-end"},r.a.createElement("div",{className:"py-2 py-lg-0"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(u.a,{to:"https://engineering.salesforce.com/",className:"nav-link"},"Blog")),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(u.a,{to:"https://twitter.com/salesforceeng",className:"nav-link"},"Twitter")),r.a.createElement("li",{className:"dropdown nav-item text-center"},r.a.createElement(u.a,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false","aria-haspopup":"true"},"GitHub"),r.a.createElement("div",{className:"dropdown-menu m-0","aria-labelledby":"dropdownMenuLink"},e)),r.a.createElement("li",{className:"nav-item text-center"},r.a.createElement(u.a,{to:"https://www.salesforce.com/company/careers/tech-product/",className:"nav-link"},"Careers"))))))))},f=function(){var e=[],t=o.data.githubToml.organizations.entries(),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var l;if(a){if(n>=t.length)break;l=t[n++]}else{if((n=t.next()).done)break;l=n.value}var c=l,i=c[0],s=c[1];e.push(r.a.createElement("div",{className:"nav-item col-12 col-md-6 p-0",key:"github-org-"+i},r.a.createElement(u.a,{to:s.url,className:"nav-link p-0 mb-2"},s.name)))}return r.a.createElement("footer",{className:"pb-5 bg-primary-3 text-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(u.a,{to:"https://salesforce.com"},r.a.createElement("img",{src:"/assets/img/cloud-salesforce.svg",alt:"Salesforce",className:"mb-4",style:{height:100}})))),r.a.createElement("div",{className:"row mb-6 justify-content-center"},r.a.createElement("div",{className:"col-md-10 col-lg-5 mb-3 text-lg-left text-md-center"},r.a.createElement("h5",null,"About Salesforce"),r.a.createElement("p",{className:"pr-xl-3 text-light"},"Salesforce is the leader in customer relationship management (CRM), bringing companies closer to their customers. Salesforce enables companies of every size and industry to take advantage of powerful technologies—cloud, mobile, social, internet of things, and artificial intelligence—to connect to their customers. ",r.a.createElement(u.a,{className:"hover-arrow"},"Go to salesforce.com"))),r.a.createElement("div",{className:"col-md-3 col-lg-2 mb-3"},r.a.createElement("h5",null,"Open Source"),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"nav-item"},r.a.createElement(u.a,{to:"https://engineering.salesforce.com/",className:"nav-link p-0 mb-2"},"Blog")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(u.a,{to:"https://twitter.com/salesforceeng",className:"nav-link p-0 mb-2"},"Twitter")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(u.a,{to:"https://www.salesforce.com/company/careers/tech-product/",className:"nav-link p-0 mb-2"},"Careers")))),r.a.createElement("div",{className:"col-md-6 col-lg-4"},r.a.createElement("h5",null,"On GitHub"),r.a.createElement("div",{className:"d-flex flex-wrap"},e))),r.a.createElement("div",{className:"row justify-content-center text-center"},r.a.createElement("div",{className:"col-xl-10"},r.a.createElement("ul",{className:"list-inline mb-0"},r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},"Copyright © ",(new Date).getFullYear(),", Salesforce, Inc"),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(u.a,{to:"https://www.salesforce.com/company/privacy/"},"Privacy Policy")),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(u.a,{to:"https://www.salesforce.com/company/legal/sfdc-website-terms-of-service.jsp"},"Terms")),r.a.createElement("li",{className:"list-inline-item pr-2 mb-0 text-muted small"},r.a.createElement(u.a,{to:"#"},"Cookies")))))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(m,null),t,r.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-9b3c137fe7ad414a268c.js.map