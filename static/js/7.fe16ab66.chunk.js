(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{52:function(c,e,s){},56:function(c,e,s){"use strict";s.r(e);var i=s(34),n=s(2),a=s(8),t=s(0),l=s(36),r=s(13),j=s(35),o=s(43),m=(s(52),s(1)),b=function(c){var e=c.comic,s=e.title,i=e.description,n=e.pageCount,t=e.thumbnail,l=e.language,r=e.price;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsx)("img",{src:t,alt:s,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:s}),Object(m.jsx)("p",{className:"single-comic__descr",children:i}),Object(m.jsx)("p",{className:"single-comic__descr",children:n}),Object(m.jsxs)("p",{className:"single-comic__descr",children:["Language: ",l]}),Object(m.jsx)("div",{className:"single-comic__price",children:r})]}),Object(m.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};e.default=function(){var c=Object(n.f)().comicId,e=Object(t.useState)(null),s=Object(i.a)(e,2),a=s[0],u=s[1],d=Object(l.a)(),g=d.loading,O=d.error,_=d.getComic,h=d.clearError;Object(t.useEffect)((function(){x()}),[c]);var x=function(){h(),_(c).then(f)},f=function(c){u(c)},p=O?Object(m.jsx)(j.a,{}):null,v=g?Object(m.jsx)(r.a,{}):null,N=g||O||!a?null:Object(m.jsx)(b,{comic:a});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{}),p,v,N]})}}}]);
//# sourceMappingURL=7.fe16ab66.chunk.js.map