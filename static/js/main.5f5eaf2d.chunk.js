(this["webpackJsonpguess-card"]=this["webpackJsonpguess-card"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(13),n(3)),u=n(4),l=n(2),o=a.a.createContext(),b=n.p+"static/media/1.fa178bc8.png",d=n.p+"static/media/2.88b2ff20.png",j=n.p+"static/media/3.bf530db1.png",m=n.p+"static/media/4.2573326b.png",O=n.p+"static/media/5.3fbe9716.png",f=n.p+"static/media/6.bad3e4b4.png",g=n.p+"static/media/7.82008915.png",p=n.p+"static/media/8.749e2220.png",h=n(0),x={1:b,2:d,3:j,4:m,5:O,6:f,7:g,8:p},v=function(e){var t=e.src,n=e.style,a=e.disabled,s=e.gameState,r=Object(c.useContext)(o).checkActiveCard,i=a?"visible":"hidden";return Object(h.jsx)("button",{type:"button",disabled:a,className:"game__item",onClick:function(){return r(s.id,t)},style:n,children:Object(h.jsx)("img",{alt:"NBA",className:"game__item-img",src:x[parseInt(t)],style:{visibility:i}})})},_=function(e){return Object(h.jsx)("div",{className:"game",style:e.style,children:e.gameState.map((function(e){return Object(h.jsx)(v,{src:e.src,style:e.style,disabled:e.disabled,gameState:e},e.id)}))})},S=function(e){var t=e.setStartGame;return Object(h.jsx)("button",{className:"game__button game__button_start",onClick:function(){return t(!0)},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})},N=function(e){var t=e.gameRestart;return Object(h.jsx)("button",{className:"game__button game__button_restart",onClick:t,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})},y=function(e){var t,n=e.id,a=e.number,s=e.name,r=e.move,i=Object(c.useContext)(o).deleteResult;switch(a){case 1:t={color:"gold",fontWeight:700};break;case 2:t={color:"silver",fontWeight:700};break;case 3:t={color:"#cd7f32",fontWeight:700}}return Object(h.jsxs)("li",{className:"game__result-item",children:[Object(h.jsxs)("span",{children:[a,")"]}),Object(h.jsx)("span",{style:t,children:s}),Object(h.jsxs)("span",{children:[r," \u0445\u043e\u0434\u043e\u0432"]}),Object(h.jsx)("button",{className:"button-delete",onClick:function(){return i(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})},k=function(e){var t=e.gameResult,n=e.deleteAllResult;return Object(h.jsxs)("div",{className:"game__result",children:[Object(h.jsx)("h2",{className:"game__result-title",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}),Object(h.jsx)("ul",{className:"game__result-list",children:t.length?t.map((function(e,t){return Object(h.jsx)(y,{id:e.id,number:t+1,name:e.name,move:e.move},e.id)})):Object(h.jsx)("h2",{className:"game__result-title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435\u0442"})}),Object(h.jsx)("button",{className:"button-delete button-delete-all",onClick:n,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})]})},R=function(e){var t=e.addResult,n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(h.jsx)("div",{className:"game-end-modal modal",children:Object(h.jsxs)("div",{className:"modal-container",children:[Object(h.jsx)("h1",{className:"game-end-message modal__title",children:"\u0412\u044b \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438 \u0438\u0433\u0440\u0443!"}),Object(h.jsxs)("form",{className:"game-end-form modal__form",onSubmit:function(e){e.preventDefault(),t(s),r("")},children:[Object(h.jsx)("input",{type:"text",value:s,autoFocus:!0,onChange:function(e){return r(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"}),Object(h.jsx)("button",{className:"game__button",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})};function C(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}var E=function(){var e=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],t=Object(c.useState)((function(){return[].concat(Object(u.a)(C(e)),Object(u.a)(C(e)))})),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(a.map((function(e,t){return{id:t+1,src:e,style:{background:"#1E90FF"},disabled:!1}}))),b=Object(l.a)(r,2),d=b[0],j=b[1],m=Object(c.useState)(!1),O=Object(l.a)(m,2),f=O[0],g=O[1],p=Object(c.useState)(!1),x=Object(l.a)(p,2),v=x[0],y=x[1],E=Object(c.useState)([]),F=Object(l.a)(E,2),A=F[0],w=F[1],J=Object(c.useState)(0),I=Object(l.a)(J,2),W=I[0],B=I[1],D=Object(c.useState)({}),G=Object(l.a)(D,2),M=G[0],T=G[1],P=Object(c.useState)(0),X=Object(l.a)(P,2),q=X[0],z=X[1],H=Object(c.useState)(JSON.parse(localStorage.gameResult)||[]),K=Object(l.a)(H,2),L=K[0],Q=K[1],U=Object(c.useState)(!1),V=Object(l.a)(U,2),Y=V[0],Z=V[1];return Object(c.useEffect)((function(){localStorage.setItem("gameResult",JSON.stringify(L))}),[L]),Object(c.useEffect)((function(){2===A.length&&(z((function(e){return e+1})),A[0]===A[1]?(B((function(e){return e+1})),j((function(e){return e.map((function(e){return A.includes(e.src)?Object(i.a)(Object(i.a)({},e),{},{style:Object(i.a)(Object(i.a)({},e.style),{},{border:"3px green solid"})}):e}))}))):(setTimeout((function(){j((function(e){return e.map((function(e){return A.includes(e.src)?Object(i.a)(Object(i.a)({},e),{},{style:{background:"#1E90FF",transform:"none"},disabled:!1}):e}))})),T({})}),1e3),T({pointerEvents:"none"})),w([]))}),[A]),Object(c.useEffect)((function(){W===d.length/2&&(setTimeout((function(){Z(!0)}),2e3),B(0))}),[W]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.Provider,{value:{checkActiveCard:function(e,t){j((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{style:{background:"none",transform:"scaleX(-1)"},disabled:!0}):t}))})),w([].concat(Object(u.a)(A),[t]))},deleteResult:function(e){return Q((function(t){return t.filter((function(t){return t.id!==e}))}))}},children:[Y?Object(h.jsx)(R,{addResult:function(e){Z(!1),y(!0),Q((function(t){return[].concat(Object(u.a)(t),[{move:q,name:e||"unnamed",id:new Date}]).sort((function(e,t){return e.move-t.move}))}))}}):null,f?null:Object(h.jsx)(S,{setStartGame:g}),f&&!v?Object(h.jsx)(_,{gameState:d,style:M}):null,v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{gameResult:L,deleteAllResult:function(){return Q([])}}),Object(h.jsx)(N,{gameRestart:function(){var t;s(t=[].concat(Object(u.a)(C(e)),Object(u.a)(C(e)))),j(t.map((function(e,t){return{id:t+1,src:e,style:{background:"#1E90FF"},disabled:!1}}))),y(!1),z(0)}})]}):null]})})};r.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f5eaf2d.chunk.js.map