(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{35:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(1);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},36:function(e,t,c){"use strict";var n=c(39),a=c.n(n),r=c(40),s=c(34),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=".concat("c5d6fc8b83116d92ed468ce36bac6c62"),j=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,clearError:o,getAllCharacters:j,getCharacter:b,getAllComics:h,getComic:d}}},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(34),a=c(0),r=c(13),s=c(35),i=c(36),o=(c(44),c.p+"static/media/mjolnir.61f31e18.png"),l=c(1),u=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],j=t[1],b=Object(i.a)(),h=b.loading,d=b.error,m=b.getCharacter,p=b.clearError;Object(a.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var O=function(e){j(e)},f=function(){p();var e=Math.floor(400*Math.random())+1011e3;m(e).then(O)},v=d?Object(l.jsx)(s.a,{}):null,x=h?Object(l.jsx)(r.a,{}):null,_=h||d||!c?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsxs)("button",{onClick:f,className:"button__moving",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),"try it"]}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(42),h=(c(45),function(e){var t=Object(a.useState)([]),c=Object(n.a)(t,2),o=c[0],u=c[1],j=Object(a.useState)(!1),h=Object(n.a)(j,2),d=h[0],m=h[1],p=Object(a.useState)(210),O=Object(n.a)(p,2),f=O[0],v=O[1],x=Object(a.useState)(!1),_=Object(n.a)(x,2),g=_[0],N=_[1],k=Object(i.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(a.useEffect)((function(){E(f,!0)}),[]);var E=function(e,t){m(!t),C(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),m((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(a.useRef)([]),I=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var T=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(o),A=w?Object(l.jsx)(s.a,{}):null,R=y&&!d?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[A,R,T,Object(l.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return E(f)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=(c(46),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),m=(c(47),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),p=function(e){var t=Object(a.useState)(null),c=Object(n.a)(t,2),o=c[0],u=c[1],j=Object(i.a)(),b=j.loading,h=j.error,p=j.getCharacter,O=j.clearError;Object(a.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(O(),p(t).then(v))},v=function(e){u(e)},x=o||b||h?null:Object(l.jsx)(d,{}),_=h?Object(l.jsx)(s.a,{}):null,g=b?Object(l.jsx)(r.a,{}):null,N=b||h||!o?null:Object(l.jsx)(m,{char:o});return Object(l.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},O=c(48),f=c(49),v=c(54),x=c(53),_=function(e){Object(v.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(f.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(s.a,{}):this.props.children}}]),c}(a.Component),g=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(_,{children:Object(l.jsx)(h,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)(_,{children:Object(l.jsx)(p,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.5f620cb3.chunk.js.map