(this.webpackJsonpttt=this.webpackJsonpttt||[]).push([[0],[,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var c=t(1),r=t.n(c),a=t(4),u=t.n(a),s=(t(9),t(2)),i=(t(10),t(11),t(0));var j=function(n){var e=n.value,t=n.playerTurn,c=e?"square ".concat(e):"square";return Object(i.jsx)("div",{onClick:t,className:c,children:e})},o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var l=function(){var n=Object(c.useState)(Array(9).fill("")),e=Object(s.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)("X"),u=Object(s.a)(a,2),l=u[0],f=u[1],b=Object(c.useState)({winner:"none",state:"none"}),O=Object(s.a)(b,2),v=O[0],d=O[1];Object(c.useEffect)((function(){p(),h(),f("O"==l?"X":"O")}),[t]),Object(c.useEffect)((function(){"none"!=v.state&&alert("\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430 ! \u041f\u043e\u0431\u0435\u0434\u0438\u043b \u0438\u0433\u0440\u043e\u043a :".concat(v.winner)),y()}),[v]);var x=function(n){r(t.map((function(e,t){return t==n&&""==e?l:e})))},p=function(){o.forEach((function(n){var e=t[n[0]];if(""!=e){var c=!0;n.forEach((function(n){t[n]!=e&&(c=!1)})),c&&d({winner:l,state:"\u041f\u043e\u0431\u0435\u0434\u0430"})}}))},h=function(){var n=!0;t.forEach((function(e){""==e&&(n=!1)})),n&&d({winner:"\u041d\u0438\u0447\u044c\u044f",state:"\u041d\u0438\u0447\u044c\u044f"})},y=function(){r(Array(9).fill("")),f("O")};return Object(i.jsxs)("div",{className:"board",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[0],playerTurn:function(){x(0)}}),Object(i.jsx)(j,{value:t[1],playerTurn:function(){x(1)}}),Object(i.jsx)(j,{value:t[2],playerTurn:function(){x(2)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[3],playerTurn:function(){x(3)}}),Object(i.jsx)(j,{value:t[4],playerTurn:function(){x(4)}}),Object(i.jsx)(j,{value:t[5],playerTurn:function(){x(5)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{value:t[6],playerTurn:function(){x(6)}}),Object(i.jsx)(j,{value:t[7],playerTurn:function(){x(7)}}),Object(i.jsx)(j,{value:t[8],playerTurn:function(){x(8)}})]})]})},f=(t(13),function(){return Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("span",{children:"Score"}),Object(i.jsx)("span",{children:"Player1: 1"}),Object(i.jsx)("span",{children:"Player2: 2"})]})}),b=(t(14),function(){return Object(i.jsxs)("div",{className:"game-panel",children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{})]})});var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})},v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,u=e.getTTFB;t(n),c(n),r(n),a(n),u(n)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}],[[15,1,2]]]);
//# sourceMappingURL=main.132c4e0c.chunk.js.map