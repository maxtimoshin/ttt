(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),u=(n(9),n(2)),i=(n(10),n(11),n(0));var j=function(e){var t=e.value,n=e.playerTurn,c=t?"square ".concat(t):"square";return Object(i.jsx)("div",{onClick:n,className:c,children:t})};var o=function(e){var t=e.board,n=e.playerTurn;return Object(i.jsxs)("div",{className:"board",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[0],playerTurn:function(){n(0)}}),Object(i.jsx)(j,{value:t[1],playerTurn:function(){n(1)}}),Object(i.jsx)(j,{value:t[2],playerTurn:function(){n(2)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[3],playerTurn:function(){n(3)}}),Object(i.jsx)(j,{value:t[4],playerTurn:function(){n(4)}}),Object(i.jsx)(j,{value:t[5],playerTurn:function(){n(5)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[6],playerTurn:function(){n(6)}}),Object(i.jsx)(j,{value:t[7],playerTurn:function(){n(7)}}),Object(i.jsx)(j,{value:t[8],playerTurn:function(){n(8)}})]})]})},l=(n(13),function(e){var t=e.result,n=e.person,r=Object(c.useState)(0),a=Object(u.a)(r,2),s=a[0],j=a[1],o=Object(c.useState)(0),l=Object(u.a)(o,2),b=l[0],f=l[1],O=Object(c.useState)(0),v=Object(u.a)(O,2),d=v[0],p=v[1];return Object(c.useEffect)((function(){"X"==t.winner&&j(s+1),"O"==t.winner&&f(b+1),"\u041d\u0438\u0447\u044c\u044f"==t.state&&p(d+1)}),[t]),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("span",{children:"Score"}),Object(i.jsxs)("span",{children:[n,": ",s]}),Object(i.jsxs)("span",{children:["Player2: ",b]}),Object(i.jsxs)("span",{children:["\u041d\u0438\u0447\u044c\u044f: ",d]})]})}),b=(n(14),[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]),f=function(){var e=Object(c.useState)("Player1"),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(Array(9).fill("")),s=Object(u.a)(a,2),j=s[0],f=s[1],O=Object(c.useState)("X"),v=Object(u.a)(O,2),d=v[0],p=v[1],x=Object(c.useState)({winner:"none",state:"none"}),h=Object(u.a)(x,2),y=h[0],T=h[1];Object(c.useEffect)((function(){r(prompt("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f: "))}),[]),Object(c.useEffect)((function(){m(),w(),p("O"==d?"X":"O")}),[j]),Object(c.useEffect)((function(){"none"!=y.state&&S()}),[y]);var m=function(){b.forEach((function(e){var t=j[e[0]];if(""!=t){var n=!0;e.forEach((function(e){j[e]!=t&&(n=!1)})),n&&T({winner:d,state:"\u041f\u043e\u0431\u0435\u0434\u0430"})}}))},w=function(){var e=!0;j.forEach((function(t){""==t&&(e=!1)})),e&&T({winner:"\u041d\u0438\u0447\u044c\u044f",state:"\u041d\u0438\u0447\u044c\u044f"})},S=function(){f(Array(9).fill("")),p("O")};return Object(i.jsxs)("div",{className:"game-panel",children:[Object(i.jsx)(o,{board:j,playerTurn:function(e){f(j.map((function(t,n){return n==e&&""==t?d:t})))}}),Object(i.jsx)(l,{result:y,person:n})]})};var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}],[[15,1,2]]]);
//# sourceMappingURL=main.129d4db0.chunk.js.map