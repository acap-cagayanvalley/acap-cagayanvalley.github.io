"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7316],{43370:function(e,t,n){var r=n(85893),o=n(9008),i=n(47426);t.Z=function(e){var t=e.title,n=e.ogDescription,a=e.ogImageURL,c=e.ogImgAlt,u=void 0===c?"Picture":c,l=e.ogSiteName,s=void 0===l?"ACAP-".concat(i.Gt.toUpperCase()):l,f=e.ogURL,p=e.canonicalURL,d=void 0===p?"http://localhost":p;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{rel:"canonical",href:d}),(0,r.jsx)("meta",{name:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:s}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:u}),(0,r.jsx)("meta",{property:"og:url",content:f}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("title",{children:t})]})}},21323:function(e,t,n){n.d(t,{Z:function(){return qe}});var r=n(34051),o=n.n(r),i=n(85893),a=n(67294),c=n(63835),u=n(45697),l=n.n(u),s=n(9669),f=n.n(s),p=n(99431),d=n(94763);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,c,"next",e)}function c(e){v(i,r,o,a,c,"throw",e)}a(void 0)}))}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function j(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?b(e):t}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}var P={DELETE_BULLETIN:"".concat("https://amia-cis-6ykn.onrender.com/api","/bulletins")},D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,i=S(a);function a(){var e;return m(this,a),g(b(e=i.apply(this,arguments)),"FirestoreQuery",new d.Z),g(b(e),"AxiosCancelSource",f().CancelToken.source()),e}return t=a,(n=[{key:"deleteBulletin",value:function(e){var t=e.type,n=e.filename,r=this;return y(o().mark((function e(){var i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={type:t,filename:n},e.next=3,r.createRequestObject({body:i});case 3:return a=e.sent,r.AxiosCancelSource=f().CancelToken.source(),e.next=7,f()(O({},a,{url:P.DELETE_BULLETIN,method:"DELETE",cancelToken:r.AxiosCancelSource.token}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()}},{key:"getBulletins",value:function(e){var t=this;return y(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.FirestoreQuery.getCollectionData(e,"idstr");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},{key:"cancelAxiosRequest",value:function(e){this.AxiosCancelSource.cancel(e)}}])&&h(t.prototype,n),r&&h(t,r),a}(p.Z),L=new D,A=L.deleteBulletin.bind(L),_=L.getBulletins.bind(L),k=L.cancelAxiosRequest.bind(L),I=n(901),R=n(90155);function C(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}var Z={loading:!1,error:"",status:I.G.IDLE};function F(e){var t=e.type,n=e.filename,r=e.action,i=(0,a.useState)(Z),c=i[0],u=i[1];return(0,a.useEffect)((function(){return function(){k("Aborting delete bulletin request")}}),[]),(0,a.useEffect)((function(){var e=function(){var e,r=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return G({},e,{loading:!0,error:"",status:I.G.PENDING})})),e.next=4,A({type:t,filename:n});case 4:u((function(e){return G({},e,{loading:!1,error:"",status:I.G.FULLFILLED})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"Aborting delete bulletin request"!==e.t0.message&&u((function(t){var n;return G({},t,{loading:!1,error:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data)||e.t0.message,status:I.G.IDLE})}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){C(i,r,o,a,c,"next",e)}function c(e){C(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();n&&r===R.RW.DELETE&&e()}),[n,r,t]),{state:c}}var N=new(n(1029).d),U=(N.getPageAssetsDoc.bind(N),N.getTyphoonAdvisory.bind(N),N.getPdfDownloadURL.bind(N));function B(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}var M={loading:!1,error:"",status:I.G.IDLE,url:""};function q(e){var t=e.filename,n=e.type,r=e.urlsegment,i=e.action,c=(0,a.useState)(M),u=c[0],l=c[1];return(0,a.useEffect)((function(){var e=function(){var e,i=(e=o().mark((function e(){var i,a,c,u,s,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l((function(e){return Y({},e,{loading:!0,error:"",url:"",status:I.G.PENDING})})),e.next=4,U(t,n);case 4:return i=e.sent,e.next=7,f().get(i,{responseType:"blob"});case 7:a=e.sent,c=i.substring(i.indexOf(r.keyword)+r.charlength,i.length),u=c.substring(0,c.indexOf("?")),s=window.URL.createObjectURL(new Blob([a.data])),(p=document.createElement("a")).href=s,p.setAttribute("download",decodeURI(u)),document.body.appendChild(p),p.click(),document.body.removeChild(p),l((function(e){return Y({},e,{loading:!1,url:i,status:I.G.FULLFILLED})})),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),l((function(t){var n;return Y({},t,{loading:!1,url:"",error:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data)||e.t0.message,status:I.G.IDLE})}));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){B(i,r,o,a,c,"next",e)}function c(e){B(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return i.apply(this,arguments)}}();t&&i===R.RW.DOWNLOAD&&e()}),[t,n,r,i]),{state:u}}var z=n(77715);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){$(e,t,n[t])}))}return e}function J(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K={loading:!1,error:"",status:I.G.IDLE,random:""};function X(e){var t=e.currentbulletin,n=e.statdload,r=e.statdelete,i=e.fetch,c=(0,a.useState)(K),u=c[0],l=c[1],s=(0,a.useState)({}),f=s[0],p=s[1],d=(0,a.useState)(R.n5),b=d[0],v=d[1],y=(0,a.useState)(!1),m=y[0],h=y[1],g=(0,a.useState)(!1),x=g[0],O=g[1],j=(0,a.useState)(""),w=j[0],E=j[1];return(0,a.useEffect)((function(){var e=!0,n=function(){var n,r=(n=o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l((function(e){return Q({},e,{loading:!0,error:"",status:I.G.PENDING})})),n.next=4,_(t.collection);case 4:r=n.sent,i={},r.forEach((function(e){void 0===i[e.province]&&(i[e.province]=[]),void 0===i[e.province][e.municipality]&&(i[e.province][e.municipality]=[]),i[e.province][e.municipality].push({municipality:e.municipality,province:e.province,filename:e.filename,date_created:(0,z.Xn)(e.date_created),loading:!1,error:""})})),e&&(p(i),l((function(e){return Q({},e,{loading:!1,error:"",status:I.G.FULLFILLED})}))),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),e&&l((function(e){var t;return Q({},e,{loading:!1,error:(null===n.t0||void 0===n.t0||null===(t=n.t0.response)||void 0===t?void 0:t.data)||n.t0.message,status:I.G.IDLE})}));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(e){V(i,r,o,a,c,"next",e)}function c(e){V(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return i&&e&&n(),function(){e=!1}}),[i,t.collection]),(0,a.useEffect)((function(){var e=n.status===I.G.PENDING||r.status===I.G.PENDING;if(O(m!==e),h(e),!e){var o=t.action===R.RW.DELETE?r.error:n.error;E(o)}}),[n,r,t.action,m]),(0,a.useEffect)((function(){if(""!==t.province&&""!==t.filename&&v(t),x){var e=""!==t.filename?Q({},t):Q({},b);""!==e.filename&&function(e){var t=e.province,n=e.filename,r=J(f[t]),o=r.findIndex((function(e){return e.filename===n}));o>=0?(r[o].loading=m,r[o].error=w,p((function(e){return Q({},e,$({},t,J(r)))})),E(""),O(!1)):l((function(e){return Q({},e,{loading:!1,error:"Index not found.",status:I.G.IDLE})}))}({province:e.province,filename:e.filename,loading:m})}}),[m,t,b,f,w,x]),{state:u,bulletins:f}}var ee=n(11496),te=n(75716),ne=n(82280),re=n(38895),oe=n(22797);function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ie(e,t,n[t])}))}return e}var ce=(0,ee.ZP)((function(e){return(0,i.jsx)(ne.Z,ae({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){e.theme;return{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),ue=(0,ee.ZP)((function(e){return(0,i.jsx)(re.Z,ae({expandIcon:(0,i.jsx)(te.Z,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}})),le=(0,ee.ZP)(oe.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}})),se=n(98456),fe=n(86886),pe=n(93946),de=n(15861),be=n(12963),ve=n(50122),ye=n(41664),me={breacrumbs:{"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.dark}},fontSize:"16px",marginTop:function(e){return e.spacing(2)}}};var he=function(e){var t=e.navdata;return(0,i.jsx)(be.Z,{"aria-label":"breadcrumb",sx:me.breacrumbs,children:t.map((function(e,t){return void 0!==e.href?(0,i.jsx)(ve.Z,{underline:"hover",color:"inherit",children:(0,i.jsx)(ye.default,{href:e.href,passHref:!0,children:(0,i.jsx)("span",{children:e.name})})},"bcd-".concat(t)):(0,i.jsx)("div",{color:"text.primary",children:e.name},"bcd-".concat(t))}))})},ge=n(23508),xe=n(62665),Oe=n(78462),je=n(97212),we=n(8364),Ee=n(48885),Se=n(59334),Pe=n(88409),De=n(40044),Le=n(87357),Ae=n(61903),_e=n(98396),ke={listItem:{"& a":{color:function(e){return e.palette.text.primary},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main},textDecoration:"none"}}};function Ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Re(e,t,n[t])}))}return e}function Te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ze(e){var t=e.provinces,n=e.bulletins,r=e.isDeleting,o=e.isFetching,c=e.isPDFLoading,u=e.isUser,s=e.handleClick,f=e.onDeleteClick,p=e.subtitle,d=void 0===p?"":p,b=function(e){var t=e.children,n=e.value,r=e.index,o=Te(e,["children","value","index"]);return(0,i.jsx)("div",Ce({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o,{children:n===r&&(0,i.jsx)(Le.Z,{sx:{p:3},children:t})}))},v=(0,a.useState)(0),y=v[0],m=v[1],h=(0,a.useState)(""),g=h[0],x=h[1],O=(0,a.useState)(n),j=O[0],w=O[1];b.propTypes={children:l().node,index:l().number.isRequired,value:l().number.isRequired};(0,a.useEffect)((function(){w(n)}),[n]);var E=(0,_e.Z)((function(e){return e.breakpoints.down("md")}));return(0,i.jsxs)("div",{role:"presentation",children:[(0,i.jsx)(de.Z,{variant:"h4",children:"Bulletins"}),(0,i.jsx)(de.Z,{variant:"h5",children:d}),(0,i.jsx)(he,{navdata:[{name:"Bulletins",href:"/bulletins"},{name:d}]}),(0,i.jsxs)(fe.ZP,{container:!0,justifyContent:"center",sx:{width:"100%",marginTop:function(e){return e.spacing(6)}},children:[(0,i.jsxs)(fe.ZP,{item:!0,xs:10,sx:{paddingY:"10px"},children:[(0,i.jsx)(de.Z,{variant:"p",sx:{fontSize:"1.25rem"},children:"Search:"}),(0,i.jsx)(Ae.Z,{id:"outlined-basic",value:g,onChange:function(e){var t=e.target.value;x(t);var r=Object.keys(n),o=Object.fromEntries(Object.entries(n[r[y]]).filter((function(e){return Ge(e,1)[0].toLowerCase().includes(t.toLowerCase())})));w((function(e){return Ce({},e,Re({},r[y],o))}))},placeholder:"Search Municipality",variant:"outlined",size:"small",sx:{marginLeft:"10px",width:"50%"}})]}),(0,i.jsxs)(fe.ZP,{item:!0,xs:10,children:[(0,i.jsx)(Pe.Z,{value:y,onChange:function(e,t){m(t),x(""),w(n)},variant:E?"scrollable":"fullWidth","aria-label":"basic tabs example",children:t.map((function(e,t){return(0,i.jsx)(De.Z,Ce({label:"n/a"!==e?e:"General Special Recommendations"},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t)),e)}))}),t.map((function(e,t){return(0,i.jsx)(b,{value:y,index:t,children:void 0!==j[e]&&Object.keys(j[e]).map((function(t,n){var a;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(ce,{defaultExpanded:0===n,children:[(0,i.jsx)(ue,{expandIcon:(0,i.jsx)(ge.Z,{}),"aria-controls":"panel1-content",children:(0,i.jsx)(de.Z,{variant:"subtitle1",children:"undefined"!==t?"n/a"!==t?t:"Cagayan Valley":"All Crops"})}),(0,i.jsx)(le,{children:(0,i.jsx)(Oe.Z,{dense:!0,sx:{padding:0},children:null===(a=j[e][t])||void 0===a?void 0:a.map((function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(je.ZP,{children:[(0,i.jsx)(Ee.Z,{children:(0,i.jsx)(xe.Z,{})}),(0,i.jsx)(Se.Z,{sx:ke.listItem,primary:(0,i.jsx)("a",{href:"#",disabled:o||r||c,onClick:function(t){t.preventDefault(),o||r||c||s(e.province,e.filename)},children:e.filename}),secondary:"Created on ".concat(e.date_created," ").concat(""!==e.error?"Error: ".concat(e.error):""),primaryTypographyProps:{fontSize:"14px"},secondaryTypographyProps:{fontSize:"11px"}}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(se.Z,{size:20,color:"third",sx:{display:e.loading&&(o||r||c)?"block":"none"}}),u&&(0,i.jsx)(pe.Z,{"aria-label":"delete",color:"primary",disabled:o||r||c,onClick:function(){return f(e)},children:(0,i.jsx)(we.Z,{})})]})]})})}))},"acc-sub-".concat(n))})]},"acc-".concat(n))})}))},t)}))]})]})]})}Ze.propTypes={provinces:l().array,bulletins:l().object,isDeleting:l().bool,isFetching:l().bool,isPDFLoading:l().bool,isUser:l().bool,handleClick:l().func,onDeleteClick:l().func,subtitle:l().string};var Fe=Ze;function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ue(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Be(e,t,n[t])}))}return e}function Ye(e){return function(e){if(Array.isArray(e))return Ne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Me(e){var t=e.provinces,n=e.subtitle,r=e.currentDefaultBulletin,u=(0,a.useState)(r),l=u[0],s=u[1],f=(0,c.aC)(),p=F(l).state,d=q(l).state,b=X({currentbulletin:l,statdload:d,statdelete:p,fetch:""===l.filename&&""===p.error&&l.action!==R.RW.DOWNLOAD&&[I.G.FULLFILLED,I.G.IDLE].includes(p.status)}),v=b.state,y=b.bulletins,m=(0,a.useMemo)((function(){if(y&&t)return(null===y||void 0===y?void 0:y["n/a"])?Ye(t).concat(["n/a"]):t}),[y,t]);(0,a.useEffect)((function(){p.status!==I.G.FULLFILLED&&d.status!==I.G.FULLFILLED&&""===p.error&&""===d.error||""===l.filename||s((function(e){return We({},e,{filename:"",province:""})}))}),[p,d,l]);var h=function(){var e,t=(e=o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(We({},l,{filename:n,province:t,action:R.RW.DOWNLOAD}));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Ue(i,r,o,a,c,"next",e)}function c(e){Ue(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,i.jsx)(Fe,{provinces:m,bulletins:y,isDeleting:(null===p||void 0===p?void 0:p.loading)||!1,isFetching:(null===v||void 0===v?void 0:v.loading)||!1,isPDFLoading:(null===d||void 0===d?void 0:d.loading)||!1,isUser:null!==f.user,handleClick:h,onDeleteClick:function(e){var t=e.province,n=e.filename;s(We({},l,{filename:n,province:t,action:R.RW.DELETE}))},subtitle:n})}Me.propTypes={provinces:l().array,subtitle:l().string,currentDefaultBulletin:l().object};var qe=Me},1029:function(e,t,n){n.d(t,{K:function(){return g},d:function(){return x}});var r=n(34051),o=n.n(r),i=n(94763),a=n(25441),c=n(47426),u=n(27392);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?l(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}var g={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=h(n);function n(){var e;p(this,n);var r=l(e=t.apply(this,arguments));d(l(e),"getPageAssetsDoc",function(){var e=f(o().mark((function e(t,n){var i,a,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=[],e.prev=2,e.next=5,r.getDocumentData(g.ASSETS,t);case 5:if(a=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:if(n){e.next=10;break}return e.abrupt("return",a);case 10:if(!i){e.next=14;break}return e.abrupt("return",a.data.filter((function(e){return e.page===n})));case 14:return e.abrupt("return",a.data.filter((function(e){return e.page===n})).map((function(e){return e.url})));case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(2),console.error(e.t0.message),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}());var i=l(e);d(l(e),"getTyphoonAdvisory",f(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.doc(i.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),e.next=3,i.getDoc(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var s=l(e);return d(l(e),"getWeatherForecast",function(){var e=f(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getNestedCollectionData(g.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d(l(e),"getPdfDownloadURL",function(){var e=f(o().mark((function e(t){var n,r,i,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.length>1&&void 0!==l[1]?l[1]:u.Ry.SEASONAL,r="",e.t0=n,e.next=e.t0===u.Ry.SEASONAL?5:e.t0===u.Ry.TEN_DAY?7:e.t0===u.Ry.SPECIAL_WEATHER?9:11;break;case 5:return r=c.Do.PDF_STORAGE_SEASONAL,e.abrupt("break",12);case 7:return r=c.Do.PDF_STORAGE_TENDAY,e.abrupt("break",12);case 9:return r=c.Do.PDF_STORAGE_SPECIAL,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:return e.prev=12,i=(0,a.iH)(a.tO,"".concat(r,"/").concat(t)),e.next=16,(0,a.Jt)(i);case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t1=e.catch(12),new Error(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}()),e}return n}(i.Z)},90155:function(e,t,n){n.d(t,{Do:function(){return r},RW:function(){return o},n5:function(){return i}});var r={PDF_CROPS:"bulletins_pdf_crops",PDF_CROPS_TENDAY:"bulletins_pdf_tenday",PDF_CROPS_SPECIAL:"bulletins_pdf_special",PDF_STORAGE_TENDAY:"bulletins_tenday",PDF_STORAGE_SPECIAL:"bulletins_special",PDF_STORAGE_SEASONAL:"bulletins"},o={DELETE:"delete",DOWNLOAD:"download",IDLE:"idle"},i={action:o.IDLE,type:"",collection:r.PDF_CROPS,filename:"",province:"",keyword:""}}}]);