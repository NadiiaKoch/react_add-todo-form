(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(40),i=a.n(n),r=a(10),s=a(36),c=a(12),o=a(0),l=(a(53),a(76)),d=a(77),u=a(74),m=a(44),j=a.n(m),b=a(3),h=function(e){var t=e.user,a=t.name,n=t.email;return Object(b.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},O=function(e){var t=e.todo,a=t.id,n=t.user,i=t.title,r=t.completed;return Object(b.jsxs)("article",{"data-id":a,className:j()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(b.jsx)("h2",{className:"TodoInfo__title",children:i}),n&&Object(b.jsx)(h,{user:n})]})},p=function(e){var t=e.todos;return Object(b.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(b.jsx)(O,{todo:e},e.id)}))})},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function x(e){return f.find((function(t){return t.id===e}))||null}function v(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var y=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:x(e.userId)})})),N=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),s=Object(r.a)(i,2),m=s[0],j=s[1],h=Object(o.useState)(Object(c.a)(y)),O=Object(r.a)(h,2),N=O[0],S=O[1],I=Object(o.useState)(!1),_=Object(r.a)(I,2),g=_[0],C=_[1],k=Object(o.useState)(!1),D=Object(r.a)(k,2),T=D[0],w=D[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{className:"container",children:[Object(b.jsx)(d.a,{variant:"h3",children:"Add todo form"}),Object(b.jsxs)("form",{action:"/api/users",method:"POST",className:"App__form",onSubmit:function(e){e.preventDefault(),C(!a),w(!m),a&&m&&(S((function(e){var t={id:v(e),title:a,userId:m,completed:!1,user:x(+m)};return[].concat(Object(c.a)(e),[t])})),n(""),j(0))},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["Title: ",Object(b.jsx)("input",{type:"text",className:"titleInput","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),C(!1)}})]}),g&&Object(b.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{children:["User: ",Object(b.jsxs)("select",{"data-cy":"userSelect",className:"userSelect",value:m,onChange:function(e){j(+e.target.value),w(!1)},children:[Object(b.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),f.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),T&&Object(b.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(b.jsx)(u.a,{variant:"contained",type:"submit",color:"success","data-cy":"submitButton",children:"Add"})]}),Object(b.jsx)(p,{todos:N})]})})};i.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3876ad2f.chunk.js.map