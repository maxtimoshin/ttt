(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),u=(n(9),n(2)),l=(n(10),n(11),n(0));var i=function(e){var t=e.value,n=e.playerTurn,c=t?"square ".concat(t):"square";return Object(l.jsx)("div",{onClick:n,className:c,children:t})};var j=function(e){var t=e.board,n=e.playerTurn;return Object(l.jsxs)("div",{className:"board",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(i,{value:t[0],playerTurn:function(){n(0)}}),Object(l.jsx)(i,{value:t[1],playerTurn:function(){n(1)}}),Object(l.jsx)(i,{value:t[2],playerTurn:function(){n(2)}})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(i,{value:t[3],playerTurn:function(){n(3)}}),Object(l.jsx)(i,{value:t[4],playerTurn:function(){n(4)}}),Object(l.jsx)(i,{value:t[5],playerTurn:function(){n(5)}})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(i,{value:t[6],playerTurn:function(){n(6)}}),Object(l.jsx)(i,{value:t[7],playerTurn:function(){n(7)}}),Object(l.jsx)(i,{value:t[8],playerTurn:function(){n(8)}})]})]})},o=(n(13),function(e){var t=e.result,n=e.person,a=Object(c.useState)(0),s=Object(u.a)(a,2),r=s[0],i=s[1],j=Object(c.useState)(0),o=Object(u.a)(j,2),b=o[0],O=o[1],d=Object(c.useState)(0),f=Object(u.a)(d,2),x=f[0],v=f[1];return Object(c.useEffect)((function(){"X"==t.winner&&i(r+1),"O"==t.winner&&O(b+1),"\u041d\u0438\u0447\u044c\u044f"==t.state&&v(x+1)}),[t]),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("span",{children:"Score"}),Object(l.jsxs)("span",{children:[n,": ",r]}),Object(l.jsxs)("span",{children:["Player2: ",b]}),Object(l.jsxs)("span",{children:["\u041d\u0438\u0447\u044c\u044f: ",x]})]})}),b=(n(14),[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]),O=(n(15),function(e){var t=e.modal,n=e.setUserName,a=Object(c.useState)(null),s=Object(u.a)(a,2),r=s[0],i=s[1];return Object(l.jsxs)("div",{className:t?"modal-window":"modal-window-hidden",children:[Object(l.jsx)("div",{className:"modal-bg"}),Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("span",{children:"ENTER YOUR NAME"}),Object(l.jsx)("input",{type:"text",className:"modal-input",onChange:function(e){i(e.target.value)},maxlength:"8"}),Object(l.jsx)("button",{className:"modal-btn",onClick:function(){n(r)},children:"PLAY"})]})]})}),d=(n(16),function(e){var t=e.resultModal,n=e.result,c=e.closeResultWindow;return Object(l.jsxs)("div",{className:t?"result-modal":"result-modal-hidden",children:[Object(l.jsx)("div",{className:"modal-bg"}),Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("span",{children:"X"==n.winner||"O"==n.winner?"\u041f\u041e\u0411\u0415\u0414\u0418\u041b \u0418\u0413\u0420\u041e\u041a ".concat(n.winner):"\u041d\u0418\u0427\u042c\u042f"}),Object(l.jsx)("button",{className:"modal-btn",onClick:c,children:"PLAY AGAIN"})]})]})}),f=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),i=r[0],f=r[1],x=Object(c.useState)("Player1"),v=Object(u.a)(x,2),m=v[0],h=v[1],p=Object(c.useState)(Array(9).fill("")),N=Object(u.a)(p,2),w=N[0],y=N[1],T=Object(c.useState)("O"),S=Object(u.a)(T,2),g=S[0],E=S[1],A=Object(c.useState)({winner:"none",state:"none"}),C=Object(u.a)(A,2),P=C[0],k=C[1];Object(c.useEffect)((function(){F(),L(),E("O"==g?"X":"O")}),[w]),Object(c.useEffect)((function(){"none"!=P.state&&(f(!0),M())}),[P]);var F=function(){b.forEach((function(e){var t=w[e[0]];if(""!=t){var n=!0;e.forEach((function(e){w[e]!=t&&(n=!1)})),n&&k({winner:g,state:"\u041f\u043e\u0431\u0435\u0434\u0430"})}}))},L=function(){var e=!0;w.forEach((function(t){""==t&&(e=!1)})),e&&k({winner:"\u041d\u0438\u0447\u044c\u044f",state:"\u041d\u0438\u0447\u044c\u044f"})},M=function(){y(Array(9).fill("")),E("O")};return Object(l.jsxs)("div",{className:"game-panel",children:[Object(l.jsx)(j,{board:w,playerTurn:function(e){y(w.map((function(t,n){return n==e&&""==t?g:t})))}}),Object(l.jsx)(o,{result:P,person:m}),Object(l.jsx)(O,{modal:n,setUserName:function(e){h(null==e?"Player1":e),a(!1)}}),Object(l.jsx)(d,{resultModal:i,result:P,closeResultWindow:function(){f(!1)}})]})};var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.b8bcbcef.chunk.js.map