(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),u=(n(9),n(2)),i=(n(10),n(11),n(0));var j=function(e){var t=e.value,n=e.playerTurn,c=t?"square ".concat(t):"square";return Object(i.jsx)("div",{onClick:n,className:c,children:t})};var l=function(e){var t=e.board,n=e.playerTurn;return Object(i.jsxs)("div",{className:"board",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[0],playerTurn:function(){n(0)}}),Object(i.jsx)(j,{value:t[1],playerTurn:function(){n(1)}}),Object(i.jsx)(j,{value:t[2],playerTurn:function(){n(2)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[3],playerTurn:function(){n(3)}}),Object(i.jsx)(j,{value:t[4],playerTurn:function(){n(4)}}),Object(i.jsx)(j,{value:t[5],playerTurn:function(){n(5)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[6],playerTurn:function(){n(6)}}),Object(i.jsx)(j,{value:t[7],playerTurn:function(){n(7)}}),Object(i.jsx)(j,{value:t[8],playerTurn:function(){n(8)}})]})]})},o=(n(13),function(e){var t=e.result,n=e.person,a=Object(c.useState)(0),s=Object(u.a)(a,2),r=s[0],j=s[1],l=Object(c.useState)(0),o=Object(u.a)(l,2),b=o[0],O=o[1],f=Object(c.useState)(0),d=Object(u.a)(f,2),v=d[0],x=d[1];return Object(c.useEffect)((function(){"X"==t.winner&&j(r+1),"O"==t.winner&&O(b+1),"\u041d\u0438\u0447\u044c\u044f"==t.state&&x(v+1)}),[t]),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("span",{children:"Score"}),Object(i.jsxs)("span",{children:[n,": ",r]}),Object(i.jsxs)("span",{children:["Player2: ",b]}),Object(i.jsxs)("span",{children:["\u041d\u0438\u0447\u044c\u044f: ",v]})]})}),b=(n(14),[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]),O=(n(15),function(e){var t=e.modal,n=e.setUserName,a=Object(c.useState)(null),s=Object(u.a)(a,2),r=s[0],j=s[1];return Object(i.jsxs)("div",{className:t?"modal-window":"modal-window-hidden",children:[Object(i.jsx)("div",{className:"modal-bg"}),Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("span",{children:"ENTER YOUR NAME"}),Object(i.jsx)("input",{type:"text",className:"modal-input",onChange:function(e){j(e.target.value)},maxlength:"8"}),Object(i.jsx)("button",{className:"modal-btn",onClick:function(){n(r)},children:"PLAY"})]})]})}),f=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Player1"),r=Object(u.a)(s,2),j=r[0],f=r[1],d=Object(c.useState)(Array(9).fill("")),v=Object(u.a)(d,2),x=v[0],p=v[1],h=Object(c.useState)("X"),m=Object(u.a)(h,2),y=m[0],N=m[1],T=Object(c.useState)({winner:"none",state:"none"}),w=Object(u.a)(T,2),S=w[0],g=w[1];Object(c.useEffect)((function(){E(),C(),N("O"==y?"X":"O")}),[x]),Object(c.useEffect)((function(){"none"!=S.state&&A()}),[S]);var E=function(){b.forEach((function(e){var t=x[e[0]];if(""!=t){var n=!0;e.forEach((function(e){x[e]!=t&&(n=!1)})),n&&g({winner:y,state:"\u041f\u043e\u0431\u0435\u0434\u0430"})}}))},C=function(){var e=!0;x.forEach((function(t){""==t&&(e=!1)})),e&&g({winner:"\u041d\u0438\u0447\u044c\u044f",state:"\u041d\u0438\u0447\u044c\u044f"})},A=function(){p(Array(9).fill("")),N("O")};return Object(i.jsxs)("div",{className:"game-panel",children:[Object(i.jsx)(l,{board:x,playerTurn:function(e){p(x.map((function(t,n){return n==e&&""==t?y:t})))}}),Object(i.jsx)(o,{result:S,person:j}),Object(i.jsx)(O,{modal:n,setUserName:function(e){f(e),a(!1)}})]})};var d=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.eab32493.chunk.js.map