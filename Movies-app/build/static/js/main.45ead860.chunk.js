(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{121:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(121),n(13)),s=n(22),l=n(30),u=n(31),d=n(193),j=n(79),h=n(19),b=n(107),p=n(194),m=n(195),O=n(196),g=n(215),x=n(197),f=n(198),v=n(199),y=n(200),S=n(201),w=n(190),C=n(3);function k(e){var t=e.height,n=e.width,a=e.name,r={};t&&(r.height=t),n&&(r.width=n);var o="https://ui-avatars.com/api/?name=".concat(a);return Object(C.jsx)(w.a,{image:o,style:r})}var I=n(98),E=n.n(I),N=Object(d.a)((function(e){return{root:{width:200,minWidth:200,cursor:"pointer"},title:{fontSize:19},rating:{display:"flex",marginTop:e.spacing(.75)},ratingText:{marginLeft:e.spacing(.5)}}}));function _(e){return Object(C.jsx)(E.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:Object(C.jsx)(b.a,Object(h.a)({},e))})}var L=function(e){var t,n=e.movie,r=N(),o=Object(a.useState)(!1),c=Object(s.a)(o,2),i=c[0],l=c[1],u=function(){l(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{className:r.root,elevation:3,onClick:function(){l(!0)},children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(k,{name:n.title,height:300,width:200}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(j.a,{className:r.title,gutterBottom:!0,variant:"h6",style:{fontWeight:"700"},children:n.title}),Object(C.jsx)(j.a,{gutterBottom:!0,variant:"overline",children:""===n.genres?"General":n.genres}),Object(C.jsx)(j.a,{children:(t=n.description,t.slice(0,50).concat("..."))})]})]})}),Object(C.jsxs)(g.a,{open:i,onClose:u,PaperComponent:_,"aria-labelledby":"draggable-dialog-title",children:[Object(C.jsx)(x.a,{style:{cursor:"move",fontWeight:"700"},id:"draggable-dialog-title",children:n.title}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)(k,{name:n.title,height:300}),Object(C.jsx)(j.a,{gutterBottom:!0,variant:"h6",style:{fontWeight:"600"},children:""===n.genres?"General":n.genres}),Object(C.jsx)(v.a,{children:n.description})]}),Object(C.jsx)(y.a,{children:Object(C.jsx)(S.a,{autoFocus:!0,onClick:u,color:"primary",children:"Cancel"})})]})]})},T=Object(d.a)((function(e){return{root:Object(u.a)({display:"flex",flexWrap:"wrap",justifyContent:"center",margin:e.spacing(0,0,0,-4),"& > *":{margin:e.spacing(4,0,0,4)}},e.breakpoints.down("xs"),{justifyContent:"center"}),noResultsText:{fontWeight:e.typography.fontWeightRegular,textAlign:"center"}}})),R=function(e){var t=e.movies,n=T(e);if(!t)return Object(C.jsx)(j.a,{className:n.noResultsText,variant:"h6",children:"No movies found"});return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:n.root,children:t.map((function(e){return Object(C.jsx)(L,{movie:e},e.id)}))})})},A=n(212),F="LOGIN_SUCCESS",M="LOGIN_FAIL",P="LOGOUT_SUCCESS",W="GET_ERRORS",G="CLEAR_ERRORS",D="MOVIES_SUCCESS",B="MOVIES_FAIL",V="MOVIES_NEXTPREV",z=n(59),U=n.n(z),X=function(e,t,n){return{type:W,payload:{msg:e,status:t,id:n}}},q=function(){return function(e){U()({method:"GET",url:"https://demo.credy.in/api/v1/maya/movies/",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e({type:D,payload:t.data})})).catch((function(t){e(X(t.response.data.error,t.response.status,"MOVIES_FAIL")),e({type:B})}))}},J=n(48);function Y(){return Object(C.jsxs)(j.a,{className:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(J.a,{color:"inherit",className:"colorSecondary",to:"",children:"OneFin"})," ",(new Date).getFullYear(),"."]})}var H=n(17),K=n(204),Q=n(205),Z=n(202),$=n(217),ee=n(203),te=n(216),ne=n(105),ae=n(102),re=n.n(ae),oe=n(78),ce=n.n(oe),ie=n(100),se=n.n(ie),le=n(101),ue=n.n(le),de=n(99),je=n.n(de)()(),he=Object(d.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(H.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var be=Object(l.b)(null,{logout:function(){return{type:P}}})((function(e){var t=he(),n=r.a.useState(null),a=Object(s.a)(n,2),o=a[0],c=a[1],i=r.a.useState(null),l=Object(s.a)(i,2),u=l[0],d=l[1],j=Boolean(o),h=Boolean(u),b=r.a.useState(""),p=Object(s.a)(b,2),m=p[0],O=p[1],g=function(e){c(e.currentTarget)},x=function(){d(null)},f=function(){c(null),x()},v="primary-search-account-menu",y=Object(C.jsx)(ne.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:v,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:f,children:Object(C.jsx)(te.a,{onClick:function(t){e.logout(),je.push("/"),f()},children:"Logout"})}),S=Object(C.jsxs)(ne.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:x,children:[Object(C.jsxs)(te.a,{children:[Object(C.jsx)(Z.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(C.jsx)(ee.a,{badgeContent:4,color:"secondary",children:Object(C.jsx)(se.a,{})})}),Object(C.jsx)("p",{children:"Messages"})]}),Object(C.jsxs)(te.a,{children:[Object(C.jsx)(Z.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(C.jsx)(ee.a,{badgeContent:11,color:"secondary",children:Object(C.jsx)(ue.a,{})})}),Object(C.jsx)("p",{children:"Notifications"})]}),Object(C.jsxs)(te.a,{onClick:g,children:[Object(C.jsx)(Z.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(C.jsx)(ce.a,{})}),Object(C.jsx)("p",{children:"Profile"})]})]});return Object(C.jsxs)("div",{className:t.grow,children:[Object(C.jsx)(K.a,{position:"static",children:Object(C.jsxs)(Q.a,{children:[Object(C.jsxs)("div",{className:t.search,children:[Object(C.jsx)("div",{className:t.searchIcon,children:Object(C.jsx)(re.a,{})}),Object(C.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.keyItem(m)},children:Object(C.jsx)($.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:m,onChange:function(e){return O(e.target.value)}})})]}),Object(C.jsx)("div",{className:t.grow}),Object(C.jsx)("div",{children:Object(C.jsx)(Z.a,{edge:"end","aria-label":"account of current user","aria-controls":v,"aria-haspopup":"true",onClick:g,color:"inherit",children:Object(C.jsx)(ce.a,{})})})]})}),S,y]})}));var pe=Object(l.b)((function(e){return{movies:e.movies}}),{fetch_movies:q,fetch_NextPrev:function(e){return function(t){U()({method:"GET",url:e?"https://demo.credy.in/api/v1/maya/movies/?page=".concat(e):"https://demo.credy.in/api/v1/maya/movies/",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t({type:V,payload:e.data})})).catch((function(e){t(X(e.response.data.error,e.response.status,"MOVIES_FAIL")),t({type:B})}))}}})((function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),i=Object(s.a)(c,2),l=i[0],u=i[1],d=e.movies.data?e.movies.data:e.movies.results;Object(a.useEffect)((function(){e.fetch_movies(),u(null)}),[]);var j=Object(a.useState)(0),h=Object(s.a)(j,2),b=h[0],p=h[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(be,{keyItem:function(e){var t=d.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));o(t),u(0),console.log(r)}}),Object(C.jsx)(R,{movies:0===r.length?d:r}),Object(C.jsx)(A.a,{style:{marginTop:"20px",marginBottom:"30px",justifyContent:"center"},count:null===l?e.movies.count:l,page:b,onChange:function(t,n){p(n),e.fetch_NextPrev(n+1)}}),Object(C.jsx)(Y,{})]})})),me=n(207),Oe=n(208),ge=n(218),xe=n(210),fe=n(209),ve=n(211),ye=n(103),Se=n.n(ye),we=n(214),Ce=n(206),ke=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Ie(e){var t=ke();return Object(C.jsx)("div",{className:t.root,children:Object(C.jsxs)(we.a,{severity:e.ren,children:[Object(C.jsx)(Ce.a,{children:"error"===e.ren?"Error":"Success"})," ",Object(C.jsx)("strong",{children:e.msg})]})})}var Ee=Object(d.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Ne=Object(l.b)((function(e,t){return{error:e.error,errorMsg:e.error.msg}}),{SignIN:function(e){return function(t){U()({method:"POST",url:"https://demo.credy.in/api/v1/usermodule/login/",headers:{"Content-Type":"application/json"},data:e}).then((function(e){t({type:F,payload:e.data.data}),je.push("/home")})).catch((function(e){t(X(e.response.data.error,e.response.status,"LOGIN_FAIL")),t({type:M})}))}}})((function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Ee();return Object(C.jsxs)(me.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(Oe.a,{}),Object(C.jsxs)("div",{className:d.paper,children:[Object(C.jsx)(ge.a,{className:d.avatar,children:Object(C.jsx)(Se.a,{})}),Object(C.jsx)(j.a,{component:"h1",variant:"h5",children:"Sign in"}),function(){if(e.error.status)return Object(C.jsx)(Ie,{ren:"error",msg:e.errorMsg.message})}(),Object(C.jsxs)("form",{className:d.form,noValidate:!0,children:[Object(C.jsx)(xe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"username",autoComplete:"email",autoFocus:!0,value:r,onChange:function(e){o(e.target.value)}}),Object(C.jsx)(xe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){u(e.target.value)}}),Object(C.jsx)(S.a,{fullWidth:!0,variant:"contained",color:"primary",className:d.submit,onClick:function(t){return function(t){t.preventDefault();var n={username:r,password:l};e.SignIN(n)}(t)},children:"Sign In"}),Object(C.jsxs)(fe.a,{container:!0,children:[Object(C.jsx)(fe.a,{item:!0,xs:!0,children:Object(C.jsx)(J.a,{to:"/",className:"body2 colorPrimary",children:"Forgot password?"})}),Object(C.jsx)(fe.a,{item:!0,children:Object(C.jsx)(J.a,{to:"/signup",className:"body2 colorPrimary",children:"Don't have an account? Sign Up"})})]})]})]}),Object(C.jsx)(ve.a,{mt:8,children:Object(C.jsx)(Y,{})})]})}));n(154);var _e=Object(l.b)(null,{fetch_movies:q})((function(e){return Object(a.useEffect)((function(){localStorage.getItem("token")?(e.fetch_movies(),je.push("/home")):je.push("/")}),[]),Object(C.jsx)(i.b,{history:je,children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",component:Ne}),Object(C.jsx)(i.a,{path:"/home",component:pe})]})})})),Le=n(52),Te=n(104),Re={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},Ae={msg:{},status:null,id:null},Fe={data:null,next:null,prev:null},Me=Object(Le.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return localStorage.setItem("token",t.payload.token),Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isLoading:!1,isAuthenticated:!0});case M:case P:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case G:return{msg:{},status:null,id:null};default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(h.a)(Object(h.a)({},e),t.payload);case B:return Object(h.a)({},e);case V:return Object(h.a)(Object(h.a)({},e),{},{data:t.payload.results,next:t.payload.next,prev:t.payload.previous});default:return e}}}),Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Le.c,We=Object(Le.d)(Me,Pe(Object(Le.a)(Te.a)));c.a.render(Object(C.jsx)(l.a,{store:We,children:Object(C.jsx)(_e,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.45ead860.chunk.js.map