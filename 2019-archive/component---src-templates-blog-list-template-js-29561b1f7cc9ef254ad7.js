(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3yTN":function(e,t,a){"use strict";a.r(t);a("xfY5");var r=a("q1tI"),n=a.n(r),l=a("7oih");var i=function(e){return n.a.createElement("ul",null,e.posts.map((function(e){var t=e.node;return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{key:t.id,onClick:function(){window.location.href=t.frontmatter.path},className:"blog-post"},n.a.createElement("h1",null,t.frontmatter.title),n.a.createElement("h2",null,t.frontmatter.date),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),n.a.createElement("div",{className:"separator"},"···"))})))},o=a("vrFN");a.d(t,"postListQuery",(function(){return c}));var c="1610745683";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=Number(e.pageContext.currentPage),r=Number(e.pageContext.numOfPages),c=a-1,u=a+1;return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:"B"}),n.a.createElement(i,{posts:t}),n.a.createElement("div",{className:"pagination-bar"},a>1?n.a.createElement("div",null,n.a.createElement("a",{href:"page-"+c},c," <")):n.a.createElement("div",{Style:"padding-right: 1.5em"},"·"),n.a.createElement("div",{Style:"font-weight: 600"},a),a<r?n.a.createElement("div",null,n.a.createElement("a",{href:"page-"+u},"> ",u)):n.a.createElement("div",{Style:"padding-left: 1.5em"},"‌‌·")))}},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),n=a("aagx"),l=a("LZWt"),i=a("Xbzi"),o=a("apmT"),c=a("eeVq"),u=a("kJMx").f,s=a("EemH").f,m=a("hswa").f,f=a("qncB").trim,p=r.Number,E=p,d=p.prototype,N="Number"==l(a("Kuth")(d)),g="trim"in String.prototype,h=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,r,n,l=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var i,c=t.slice(2),u=0,s=c.length;u<s;u++)if((i=c.charCodeAt(u))<48||i>n)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(N?c((function(){d.valueOf.call(a)})):"Number"!=l(a))?i(new E(h(t)),a,p):h(t)};for(var v,I=a("nh4g")?u(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;I.length>b;b++)n(E,v=I[b])&&!n(p,v)&&m(p,v,s(E,v));p.prototype=d,d.constructor=p,a("KroJ")(r,"Number",p)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-29561b1f7cc9ef254ad7.js.map