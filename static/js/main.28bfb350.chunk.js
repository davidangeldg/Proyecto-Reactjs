(this["webpackJsonpproyecto-david-angel"]=this["webpackJsonpproyecto-david-angel"]||[]).push([[0],{112:function(e,t,c){e.exports={card:"Item_card__31Anf"}},114:function(e,t,c){e.exports={img:"carousel_img__33q18"}},115:function(e,t,c){e.exports={contador:"cartItem_contador__2IM_M"}},116:function(e,t,c){e.exports={backg:"cart_backg__mtVDc"}},117:function(e,t,c){e.exports={cont:"checkcart_cont__20K4X"}},136:function(e,t,c){},137:function(e,t,c){},157:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c.n(n),i=c(12),o=c.n(i),s=(c(136),c(137),c(200)),l=c(201),j=c(120),d=c(105),b=c(20),u=c.n(b),x=c(104),O=c(199),m=c(111),h=c.n(m),p=c(59),f=c(196),g=c(51),v=c(23),_=c(60),y=(c(88),_.a.initializeApp({apiKey:"AIzaSyCK_v5jUGGML5ripEoUAKyJrF_Px9XEW0c",authDomain:"a-mark.firebaseapp.com",projectId:"a-mark",storageBucket:"a-mark.appspot.com",messagingSenderId:"74765623920",appId:"1:74765623920:web:9307697f51444d30d24ab5",measurementId:"G-K93RF1YQP7"})),C=function(){return _.a.firestore(y)},N=Object(n.createContext)([]),k=function(e){var t=e.children,c=JSON.parse(localStorage.getItem("cart")),r=Object(n.useState)(c||[]),i=Object(v.a)(r,2),o=i[0],s=i[1],l=Object(n.useState)([]),j=Object(v.a)(l,2),d=j[0],b=j[1],u=Object(n.useState)(""),x=Object(v.a)(u,2),O=x[0],m=x[1],h=Object(n.useState)(""),p=Object(v.a)(h,2),f=p[0],y=p[1],k=Object(n.useState)(""),S=Object(v.a)(k,2),A=S[0],w=S[1],P=Object(n.useState)(""),T=Object(v.a)(P,2),I=T[0],F=T[1],z=Object(n.useState)(""),E=Object(v.a)(z,2),q=E[0],D=E[1],B=Object(n.useState)(""),M=Object(v.a)(B,2),R=M[0],G=M[1],K=Object(n.useState)(!1),V=Object(v.a)(K,2),L=V[0],U=V[1],W=Object(n.useState)(!1),J=Object(v.a)(W,2),X=J[0],Z=J[1];Object(n.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(o))}),[o]);var H=function(){return o.reduce((function(e,t){return e+t.quantity*t.item.price}),0)},$=function(e){return o.findIndex((function(t){return t.item.id===e}))};return Object(a.jsx)(N.Provider,{value:{productCart:o,addCart:function(e){if(-1===$(e.item.id))s([].concat(Object(g.a)(o),[e]));else{var t=Object(g.a)(o);t.forEach((function(t){t.item.id===e.item.id&&(t.quantity+=e.quantity)})),s(t)}},sumarCantCart:function(e){var t=Object(g.a)(o);t.forEach((function(t){t.item.id===e.item.id&&(t.quantity+=1)})),s(t)},restCantCart:function(e){var t=Object(g.a)(o);t.forEach((function(t){t.item.id===e.item.id&&(t.quantity-=1)})),s(t)},removeCart:function(e){s(o.filter((function(t){return t.item.id!==e.item.id})))},totalPrice:H,totalCant:function(){return o.reduce((function(e,t){return e+t.quantity}),0)},productos:d,setProductos:b,name:O,setName:m,cellphone:f,setCellphone:y,email:A,setEmail:w,direccion:q,setDireccion:D,validarEmail:I,setValidarEmail:F,finalizarCompra:function(){var e={buyer:{name:O,telefono:f,email:A,direccion:q},items:Object(g.a)(o),date:_.a.firestore.Timestamp.fromDate(new Date),total:H()},t=C().collection("ordenes");O&f||""!==q&A===I?t.add(e).then((function(e){G(e.id),U(!0),s([])})):I===A&&""!==I||Z(!0)},open:L,setOpen:U,idCompra:R,openAlert:X,setOpenAlert:Z},children:t})},S=Object(p.a)({palette:{primary:{main:"#fff !important"},secondary:{main:"rgb(88, 88, 88)"}}});var A=function(){var e=Object(n.useContext)(N).totalCant;return Object(a.jsx)(f.a,{theme:S,children:Object(a.jsx)(x.a,{color:"primary","aria-label":"add to shopping cart",children:Object(a.jsx)(O.a,{badgeContent:e(),max:9,color:"secondary",children:Object(a.jsx)(h.a,{color:"primary"})})})})},w=c(8),P=Object(d.a)((function(e){return{offset:e.mixins.toolbar,menuButton:{marginRight:e.spacing(2)}}})),T=function(){var e=P();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.a,{position:"fixed",color:"secondary",children:Object(a.jsxs)(l.a,{className:u.a.toolbar,children:[Object(a.jsx)(j.a,{variant:"h6",className:u.a.tittle,children:Object(a.jsx)(w.b,{to:"/",className:u.a.logo,children:"A-MARK"})}),Object(a.jsxs)("nav",{children:[Object(a.jsx)("input",{id:u.a.navToggle,type:"checkbox"}),Object(a.jsxs)("ul",{className:u.a.links,children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.c,{to:"/category/Camisetas",activeClassName:u.a.active,className:u.a.normal,children:"Camisetas"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.c,{to:"/category/Buzos",activeClassName:u.a.active,className:u.a.normal,children:"Buzos"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.c,{to:"/category/Zapatillas",activeClassName:u.a.active,className:u.a.normal,children:"Zapatillas"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.c,{to:"/category/Maletas",activeClassName:u.a.active,className:u.a.normal,children:"Maletas"})})]}),Object(a.jsxs)("label",{for:u.a.navToggle,className:u.a.iconBurguer,children:[Object(a.jsx)("div",{className:u.a.line}),Object(a.jsx)("div",{className:u.a.line}),Object(a.jsx)("div",{className:u.a.line})]})]}),Object(a.jsx)(w.b,{to:"/cart",children:Object(a.jsx)(A,{})})]})}),Object(a.jsx)("div",{className:e.offset})]})},I=c(41),F=c.n(I),z=c(64),E=c(63),q=c(202),D=c(112),B=c.n(D),M=function(e){var t=e.product;return Object(a.jsx)(w.b,{to:"/item/".concat(t.id),children:Object(a.jsxs)("div",{className:B.a.card,children:[Object(a.jsx)("img",{src:t.image,alt:""}),Object(a.jsxs)("h2",{children:["$ ",t.price]}),Object(a.jsx)("h3",{children:t.title}),Object(a.jsx)(w.b,{to:"/item/".concat(t.id),children:"VER DETALLE"})]})})},R=Object(d.a)({contenedor:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"row wrap",padding:"0 2rem",margin:"auto",maxWidth:1100}}),G=function(e){var t=e.productos,c=R();return Object(a.jsx)("div",{className:c.contenedor,children:t.map((function(e){return Object(a.jsx)(M,{product:e},e.id)}))})},K=c(16),V=c(113),L=c.n(V),U=c(161),W=c(114),J=c.n(W),X=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(L.a,{animation:"slide",navButtonsAlwaysInvisible:!0,children:[{img:"https://i.ibb.co/f92LJ3N/carrousel-2.jpg"},{img:"https://i.ibb.co/6Z9JHs9/carrousel-1.jpg"}].map((function(e,t){return Object(a.jsx)(Z,{item:e},t)}))})})};function Z(e){return Object(a.jsx)(U.a,{children:Object(a.jsx)("img",{src:e.item.img,alt:"",className:J.a.img})})}var H=Object(d.a)({contenedor:{padding:"40px",display:"flex",justifyContent:"center",alignItems:"center"},titulo:{textAlign:"center",color:"rgb(243, 19, 19)"},carga:{textAlign:"center"}}),$=function(){var e=H(),t=Object(n.useContext)(N),c=t.productos,r=t.setProductos,i=Object(K.f)().categoria;return Object(n.useEffect)((function(){var e=C();e.collection("items").get().then(function(){var t=Object(E.a)(F.a.mark((function t(c){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(c.docs.map(function(){var t=Object(E.a)(F.a.mark((function t(c){var a,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.collection("categorias"),t.next=3,a.doc(c.data().categoria).get();case 3:return n=t.sent,t.abrupt("return",Object(z.a)(Object(z.a)({},c.data()),{},{categoria:n.data().category,id:c.id}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:a=t.sent,r(void 0===i?a:a.filter((function(e){return e.categoria===i})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[i]),Object(a.jsxs)(a.Fragment,{children:[void 0===i?Object(a.jsx)(X,{}):null,c.length<1?Object(a.jsx)("div",{className:e.contenedor,children:Object(a.jsx)(q.a,{color:"secondary"})}):Object(a.jsx)(G,{productos:c})]})},Q=c(42),Y=c.n(Q),ee=c(65),te=c.n(ee),ce=c(203),ae=c(82),ne=c(94),re=c.n(ne),ie=c(93),oe=c.n(ie),se=Object(d.a)({contenedor:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},centrado:{display:"flex",justifyContent:"space-between",boxShadow:"0px 1px 3px #cccccc",width:183,flexFlow:"row wrap",marginBottom:5},cont:{padding:"1rem"},tittleP:{marginBottom:10}}),le=function(e){var t=e.stock,c=e.onAdd,r=se(),i=Object(n.useState)(1),o=Object(v.a)(i,2),s=o[0],l=o[1];return Object(a.jsxs)("div",{className:r.contenedor,children:[Object(a.jsx)("p",{className:r.tittleP,children:"Cantidad"}),Object(a.jsxs)("div",{className:r.centrado,children:[s>1?Object(a.jsx)(x.a,{color:"secondary",onClick:function(){s>1?l(s-1):console.log("el valor es menor a lo que podemos vender")},children:Object(a.jsx)(oe.a,{})}):Object(a.jsx)(x.a,{disabled:!0,children:Object(a.jsx)(oe.a,{})}),Object(a.jsx)("b",{className:r.cont,children:s}),s<t?Object(a.jsx)(x.a,{color:"secondary",onClick:function(){!function(e){s<e?l(s+1):console.log("no tenemos stock")}(t)},children:Object(a.jsx)(re.a,{})}):Object(a.jsx)(x.a,{disabled:!0,children:Object(a.jsx)(re.a,{})})]}),Object(a.jsx)(ce.a,{variant:"outlined",color:"secondary",onClick:function(){c(s)},children:"Agregar al carrito"})]})},je=Object(d.a)({contenedor:{display:"flex",justifyContent:"center",alignItems:"center"}}),de=function(e){var t=e.detallePro;console.log(t);var c=je(),r=Object(n.useState)(!1),i=Object(v.a)(r,2),o=i[0],s=i[1],l=Object(n.useContext)(N).addCart;return Object(a.jsx)("div",{className:Y.a.contenedorGrande,children:Object(a.jsxs)("div",{className:Y.a.cont,children:[Object(a.jsx)("div",{className:Y.a.contImg,children:Object(a.jsx)("img",{src:t.image,alt:""})}),Object(a.jsx)("img",{src:t.image,alt:""}),Object(a.jsxs)("div",{className:Y.a.contDetail,children:[Object(a.jsx)("h6",{children:"Nuevo | 1.000 vendidos"}),Object(a.jsx)("h3",{children:t.title}),Object(a.jsxs)("div",{className:Y.a.productRating,children:[Object(a.jsx)(te.a,{style:{color:ae.a[800]},fontSize:"small"}),Object(a.jsx)(te.a,{style:{color:ae.a[800]},fontSize:"small"}),Object(a.jsx)(te.a,{style:{color:ae.a[800]},fontSize:"small"}),Object(a.jsx)(te.a,{style:{color:ae.a[800]},fontSize:"small"}),Object(a.jsx)(te.a,{color:"disabled",fontSize:"small"})]}),Object(a.jsx)("span",{className:Y.a.venta,children:"M\xc1S VENDIDO"}),Object(a.jsxs)("h2",{children:["$",t.price]}),Object(a.jsx)("p",{children:t.description}),Object(a.jsxs)("div",{className:Y.a.productSize,children:[Object(a.jsx)("h4",{class:Y.a.talla,children:"Talla:"}),Object(a.jsxs)("ul",{class:Y.a.ul_size,children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{children:"XS"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{children:"S"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{children:"M"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{children:"L"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{children:"XL"})})]})]}),Object(a.jsxs)("h5",{children:["Stock Disponible: ",t.stock]}),o?Object(a.jsx)(w.b,{to:"/Cart",children:Object(a.jsx)(ce.a,{variant:"contained",color:"secondary",children:"Ver Carrito"})}):Object(a.jsx)(le,{className:c.contenedor,stock:t.stock,onAdd:function(e){console.log("Usted agrego ".concat(e," productos")),s(!0),l({item:t,quantity:e})}})]})]})})},be=c(83),ue=c.n(be),xe=function(){return Object(a.jsxs)("section",{className:ue.a.cont,children:[Object(a.jsx)(j.a,{variant:"h4",color:"secondary",children:"Uuups!"}),Object(a.jsx)(j.a,{variant:"subtitle2",color:"initial",children:"Lo sentimos, pero no encontramos la p\xe1gina que solicitaste"}),Object(a.jsxs)("div",{className:ue.a.errorContainer,children:[Object(a.jsx)("span",{children:Object(a.jsx)("span",{children:"4"})}),Object(a.jsx)("span",{children:"0"}),Object(a.jsx)("span",{children:Object(a.jsx)("span",{children:"4"})})]}),Object(a.jsx)("div",{className:ue.a.linkContainer,children:Object(a.jsx)(w.b,{to:"/",children:Object(a.jsx)(ce.a,{variant:"contained",color:"secondary",children:"Vuele al inicio"})})})]})},Oe=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],r=t[1],i=Object(K.f)().id;return console.log(i),Object(n.useEffect)((function(){var e=C();e.collection("items").get().then(function(){var t=Object(E.a)(F.a.mark((function t(c){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(c.docs.map(function(){var t=Object(E.a)(F.a.mark((function t(c){var a,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.collection("categorias"),t.next=3,a.doc(c.data().categoria).get();case 3:return n=t.sent,t.abrupt("return",Object(z.a)(Object(z.a)({},c.data()),{},{categoria:n.data().category,id:c.id}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:a=t.sent,r.apply(void 0,Object(g.a)(a.filter((function(e){return e.id.toString()===i}))));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),console.log(c),Object(a.jsx)("section",{children:void 0===c?Object(a.jsx)(xe,{}):Object(a.jsx)(de,{detallePro:c})})},me=c(204),he=c(122),pe=c(96),fe=c.n(pe),ge=c(95),ve=c.n(ge),_e=c(115),ye=c.n(_e),Ce=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:"0.5rem"},paper:{padding:e.spacing(2),margin:"auto",maxWidth:700},image:{width:128,height:"100%"},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},delete:{margin:".5rem 0"}}})),Ne=function(e){var t=e.cartProduct;console.log(t.item.title);var c=Ce(),r=Object(n.useContext)(N),i=r.sumarCantCart,o=r.restCantCart,s=r.removeCart;return Object(a.jsx)("div",{className:c.root,children:Object(a.jsx)(U.a,{className:c.paper,children:Object(a.jsxs)(me.a,{container:!0,spacing:4,children:[Object(a.jsx)(me.a,{item:!0,children:Object(a.jsx)(he.a,{className:c.image,children:Object(a.jsx)("img",{className:c.img,alt:"complex",src:t.item.image})})}),Object(a.jsx)(me.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(a.jsx)(me.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:Object(a.jsxs)(me.a,{item:!0,xs:!0,children:[Object(a.jsx)(j.a,{gutterBottom:!0,variant:"h6",children:t.item.title}),Object(a.jsx)(j.a,{variant:"body2",gutterBottom:!0,children:t.item.description}),Object(a.jsxs)("div",{className:ye.a.contador,children:[t.quantity>1?Object(a.jsx)(x.a,{"aria-label":"remove",onClick:function(){o(t)},children:Object(a.jsx)(ve.a,{fontSize:"small",color:"secondary"})}):Object(a.jsx)(x.a,{disabled:!0,children:Object(a.jsx)(ve.a,{fontSize:"small",color:"secondary"})}),Object(a.jsx)(j.a,{variant:"body1",color:"textSecondary",children:t.quantity}),t.quantity<t.item.stock?Object(a.jsx)(x.a,{"aria-label":"add",onClick:function(){i(t)},children:Object(a.jsx)(fe.a,{fontSize:"small",color:"secondary"})}):Object(a.jsx)(x.a,{disabled:!0,children:Object(a.jsx)(fe.a,{fontSize:"small",color:"secondary"})})]}),Object(a.jsx)(me.a,{item:!0,className:c.delete,children:Object(a.jsx)(w.b,{variant:"body2",style:{cursor:"pointer"},onClick:function(){s(t)},children:"Eliminar"})})]})})}),Object(a.jsx)(me.a,{item:!0,children:Object(a.jsxs)(j.a,{variant:"h6",children:["$",t.item.price*t.quantity]})})]})})})},ke=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:"0.5rem"},paper:{padding:e.spacing(2),margin:"auto",maxWidth:900,height:300,display:"flex",justifyContent:"center",alignItems:"center"}}})),Se=function(){var e=ke();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(U.a,{className:e.paper,children:Object(a.jsx)(me.a,{container:!0,spacing:4,children:Object(a.jsx)(me.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(a.jsxs)(me.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(a.jsx)(j.a,{gutterBottom:!0,variant:"h4",align:"center",children:"Tu carrito est\xe1 vac\xedo"}),Object(a.jsx)(j.a,{variant:"body2",gutterBottom:!0,align:"center",children:"\xbfNo sabes qu\xe9 comprar? \xa1Miles de productos te esperan!"}),Object(a.jsx)(w.b,{to:"/",align:"center",children:"Vuelve a ver nuestros productos"})]})})})})})},Ae=c(116),we=c.n(Ae),Pe=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:"0.5rem"},paper:{padding:e.spacing(2),margin:"auto",marginTop:".5rem",maxWidth:700,display:"flex",alignItems:"flex-end"},texto:{textAlign:"right",padding:"1rem",margin:".5rem 0"},allPrice:{marginLeft:"4rem"},separador:{borderBottom:"1px solid #f1ebeb",width:"100%",margin:"0 .5rem"}}})),Te=function(){var e=Pe(),t=Object(n.useContext)(N),c=Object(n.useContext)(N),r=c.totalPrice,i=c.totalCant;return Object(a.jsxs)("div",{className:we.a.backg,children:[0===t.productCart.length?Object(a.jsx)(Se,{}):t.productCart.map((function(e){return Object(a.jsx)(Ne,{cartProduct:e},e.item.id)})),0===t.productCart.length?null:Object(a.jsx)(U.a,{className:e.paper,children:Object(a.jsxs)(me.a,{container:!0,spacing:4,children:[Object(a.jsx)(me.a,{item:!0,xs:12,className:e.texto,children:Object(a.jsxs)(j.a,{variant:"body2",children:["Cantidad de productos ",Object(a.jsx)("span",{className:e.allPrice,children:i()})]})}),Object(a.jsx)("div",{className:e.separador}),Object(a.jsx)(me.a,{item:!0,xs:12,className:e.texto,children:Object(a.jsxs)(j.a,{variant:"h5",children:["Total ",Object(a.jsxs)("span",{className:e.allPrice,children:[" $ ",r()," "]})]})}),Object(a.jsx)(me.a,{item:!0,xs:12,className:e.texto,children:Object(a.jsx)(w.b,{to:"/checkout",children:Object(a.jsx)(ce.a,{variant:"contained",color:"secondary",children:"Terminar compra"})})})]})})]})},Ie=c(211),Fe=c(214),ze=c(212),Ee=c(33),qe=c.n(Ee),De=c(117),Be=c.n(De),Me=function(e){var t=e.cartProduct;return Object(a.jsxs)("div",{className:Be.a.cont,children:[Object(a.jsx)("img",{alt:t.item.title,src:t.item.image}),Object(a.jsxs)("span",{children:[Object(a.jsx)(j.a,{variant:"h6",color:"initial",children:t.item.title}),Object(a.jsxs)(j.a,{variant:"body2",color:"inherit",children:[t.item.price," x ",t.quantity]})]})]})},Re=c(205),Ge=c(215),Ke=c(206),Ve=c(207),Le=c(208),Ue=c(209),We=c(118),Je=c.n(We),Xe=c(30),Ze=c(97),He=c.n(Ze),$e=function(){var e=Object(n.useContext)(N),t=e.open,c=e.setOpen,r=e.idCompra,i=Object(Xe.a)(),o=Object(Re.a)(i.breakpoints.down("sm")),s=function(){c(!1)};return Object(a.jsx)("div",{className:He.a.contenedor,children:Object(a.jsxs)(Ge.a,{fullScreen:o,open:t,onClose:s,"aria-labelledby":"responsive-dialog-title",className:He.a.contenedor,children:[Object(a.jsxs)(Ke.a,{id:"responsive-dialog-title",children:[" ",Object(a.jsx)(Je.a,{severity:"success"})," Tu compra ha sido realizada"]}),Object(a.jsx)(Ve.a,{children:Object(a.jsxs)(Le.a,{children:["Esta es tu orden de compra, por favor toma nota para hacerle seguimiento",Object(a.jsx)(j.a,{variant:"h5",color:"initial",children:r}),Object(a.jsx)(j.a,{variant:"subtitle1",color:"initial",children:"\xa1Gracias por confiar en nosotros!"})]})}),Object(a.jsx)(Ue.a,{children:Object(a.jsx)(ce.a,{variant:"contained",onClick:s,color:"secondary",autoFocus:!0,children:"cerrar"})})]})})},Qe=Object(d.a)((function(e){return{textField:{width:"49%"},large:{width:"100%"}}})),Ye=function(){var e=Qe(),t=Object(n.useContext)(N),c=t.productCart,r=t.totalPrice,i=t.totalCant,o=t.finalizarCompra,s=t.setName,l=t.cellphone,d=t.setCellphone,b=t.email,u=t.setEmail,x=t.direccion,O=t.setDireccion,m=t.validarEmail,h=t.setValidarEmail,p=t.openAlert,f=t.setOpenAlert,g=function(e){f(!1)};return Object(a.jsxs)("div",{className:qe.a.backg,children:[Object(a.jsxs)("div",{className:qe.a.checkContainer,children:[Object(a.jsx)("form",{className:qe.a.root,noValidate:!0,autoComplete:"off",children:Object(a.jsxs)("div",{className:qe.a.inputs,children:[Object(a.jsx)("h3",{children:"datos de contacto"}),Object(a.jsx)(Ie.a,{id:"name",label:"Nombre y Apellido",placeholder:"Tu nombre Aqu\xed!",color:"secondary",onChange:function(e){s(e.target.value)},className:e.large}),Object(a.jsx)(Ie.a,{id:"telefono",label:"telefono",placeholder:"3115553344",value:l,className:e.textField,color:"secondary",onChange:function(e){d(e.target.value)}}),Object(a.jsx)(Ie.a,{id:"standard-required",label:"Direcci\xf3n",placeholder:"cll 1 # 100-50",value:x,color:"secondary",onChange:function(e){O(e.target.value)},className:e.textField}),Object(a.jsx)(Ie.a,{id:"e-mail",label:"E-mail",placeholder:"usuario@correo.com",value:b,className:e.large,color:"secondary",onChange:function(e){u(e.target.value)},autoComplete:"off"}),Object(a.jsx)(Ie.a,{id:"validateEmail",label:"Confirmar Email",placeholder:"usuario@correo.com",value:m,className:e.large,color:"secondary",onChange:function(e){h(e.target.value)},autoComplete:"off"})]})}),Object(a.jsxs)("div",{className:qe.a.carrito,children:[Object(a.jsx)("h3",{children:"Productos en tu carrito"}),c.map((function(e){return Object(a.jsx)(Me,{cartProduct:e},e.item.id)})),Object(a.jsxs)("div",{className:qe.a.total,children:[Object(a.jsxs)(j.a,{variant:"body2",className:qe.a.price,children:["Total items",Object(a.jsx)("span",{children:i()})]}),Object(a.jsxs)(j.a,{variant:"subtitle2",className:qe.a.price,children:["Total ",Object(a.jsxs)("span",{children:[" $ ",r()," "]})]})]}),Object(a.jsx)("div",{className:qe.a.comprar,children:Object(a.jsx)(ce.a,{variant:"contained",color:"secondary",onClick:function(){o()},children:"Comprar"})})]})]}),Object(a.jsx)(Fe.a,{open:p,autoHideDuration:3e3,onClose:g,className:qe.a.snack,children:Object(a.jsx)(ze.a,{onClose:g,severity:"error",children:"No has completado todos los campos"})}),Object(a.jsx)($e,{})]})},et=c(45),tt=c.n(et),ct=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:tt.a.contCol,children:[Object(a.jsxs)("div",{className:tt.a.column,children:[Object(a.jsx)("h5",{children:"Acerca de"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"A-mark"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Trabaja con nosotros"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Tendencias"})})]})]}),Object(a.jsxs)("div",{className:tt.a.column,children:[Object(a.jsx)("h5",{children:"Otros sitios"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Developers"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Mercado Pago"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"A-mark Env\xedos"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"A-mark Ads"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"A-mark ideas"})})]})]}),Object(a.jsxs)("div",{className:tt.a.column,children:[Object(a.jsx)("h5",{children:"Ayuda / PQR"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Comprar"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Vender"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Resoluci\xf3n de problemas"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Centro de seguridad"})})]})]}),Object(a.jsxs)("div",{className:tt.a.column,children:[Object(a.jsx)("h5",{children:"Redes sociales"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Facebook"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Instagram"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Twitter"})})]})]}),Object(a.jsxs)("div",{className:tt.a.column,children:[Object(a.jsx)("h5",{children:"Mi cuenta"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Acceder"})}),Object(a.jsx)("li",{children:Object(a.jsx)(w.b,{to:"/",children:"Vender"})})]})]})]}),Object(a.jsxs)("div",{className:tt.a.info,children:[Object(a.jsxs)("nav",{className:tt.a.navFoot,children:[Object(a.jsx)(w.b,{children:"Trabaja con nosotros"}),Object(a.jsx)(w.b,{children:"T\xe9rminos y condiciones"}),Object(a.jsx)(w.b,{children:"C\xf3mo cuidamos tu privacidad"}),Object(a.jsx)(w.b,{children:"Ayuda"}),Object(a.jsx)(w.b,{children:"Avisos legales"})]}),Object(a.jsx)("small",{class:"nav-footer-copyright",children:"Copyright \xa9\xa02021 A-mark Colombia S.A.S / David Angel DG"})]})]})};var at=function(){return Object(a.jsx)(k,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(T,{}),Object(a.jsxs)(K.c,{children:[Object(a.jsx)(K.a,{exact:!0,path:"/",children:Object(a.jsx)($,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/category/:categoria",children:Object(a.jsx)($,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/item/:id",children:Object(a.jsx)(Oe,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/cart",children:Object(a.jsx)(Te,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/checkout",children:Object(a.jsx)(Ye,{})})]}),Object(a.jsx)(ct,{})]})})},nt=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,216)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(at,{})}),document.getElementById("root")),nt()},20:function(e,t,c){e.exports={toolbar:"navbar_toolbar__1f6o_",tittle:"navbar_tittle__3CuLx",logo:"navbar_logo__RWtOp",navToggle:"navbar_navToggle__2dPol",links:"navbar_links__30wU0",normal:"navbar_normal__18oei",active:"navbar_active__37G4a",iconBurguer:"navbar_iconBurguer__14Iuv",line:"navbar_line__1PG8S","icon-burguer":"navbar_icon-burguer__3Vccc"}},33:function(e,t,c){e.exports={backg:"check_backg__rzXtK",checkContainer:"check_checkContainer__AbRWR",root:"check_root__2QtMR",inputs:"check_inputs__2ljST",dir:"check_dir__2As_u",carrito:"check_carrito__psZlj",total:"check_total__3bgc_",price:"check_price__oQMDR",comprar:"check_comprar__Waxrw",snack:"check_snack__1bXx_"}},42:function(e,t,c){e.exports={contenedorGrande:"detail_contenedorGrande__-Y8ql",cont:"detail_cont__3kzba",contImg:"detail_contImg__1-u40",contDetail:"detail_contDetail__31qFI",venta:"detail_venta__106P1",productRating:"detail_productRating__2AKpH",productSize:"detail_productSize__1KFto",talla:"detail_talla__3_UKF",ul_size:"detail_ul_size__phzZ0"}},45:function(e,t,c){e.exports={contCol:"footer_contCol__3bMhH",column:"footer_column__3hM1T",info:"footer_info__1diss",navFoot:"footer_navFoot__1n9eO"}},83:function(e,t,c){e.exports={cont:"notFound_cont__3nswK",errorContainer:"notFound_errorContainer__3UZqU",easyoutelastic:"notFound_easyoutelastic__2ipKY",rotatedrop:"notFound_rotatedrop__1oVmk",linkContainer:"notFound_linkContainer__cTxR0"}},97:function(e,t,c){e.exports={contenedor:"popUp_contenedor__31boK"}}},[[157,1,2]]]);
//# sourceMappingURL=main.28bfb350.chunk.js.map