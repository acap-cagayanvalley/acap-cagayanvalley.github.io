"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5883],{35883:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(85893),o=n(67294),i=n(25675),a=n(41664),c=n(42293),u=n(87357),s=n(27948),l=n(93946),p=n(10155),f=n(63835),d=n(26660),h=n(47426),x=n(38333),m=n(11057),b={button:{"& a, span":{color:function(e){return e.palette.primary.light},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.light}},"& a:hover":{color:"#fff"},"& span:hover":{color:"#fff"},fontSize:12},buttonSide:{"& a":{color:function(e){return e.palette.text.primary},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.main}}},buttonSelectedNav:{"& a, span":{color:function(e){return e.palette.third.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.third.main}},fontSize:12},buttonSelectedSide:{color:function(e){return e.palette.third.main},"& a":{color:function(e){return e.palette.third.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.third.main}}},subButtonSelected:{"& a, span":{color:function(e){return e.palette.text.primary},textDecoration:"none",textAlign:"left",textTransform:"capitalize",fontWeight:"normal",fontSize:16},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.secondary.main}},width:"100%",justifyContent:"flex-start"},dropMainButton:{"& a, span":{color:function(e){return e.palette.secondary.main},textDecoration:"none",textAlign:"left",textTransform:"capitalize",fontWeight:"normal",fontSize:12},"& a:visited":{color:"#000"},width:"100%",justifyContent:"flex-start"},menuContainerRegular:{width:"100% !important",display:{xs:"block"},"& .MuiPaper-root":{borderTop:function(e){return"5px solid ".concat(e.palette.third.main)},minWidth:"270px",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}}};var v=function(e){var t=(0,o.useState)(null),n=t[0],i=t[1],c=e.href,u=e.query,s=void 0===u?"":u,l=e.name,p=e.id,f=e.active,d=e.subitems,h=void 0===d?[]:d,v=e.layout,g=void 0===v?"horizontal":v,y=e.searchopts,w=void 0!==y&&y,S=e.isParent,j=void 0!==S&&S,O=e.isNavItem,C=void 0===O||O,k=e.IconMain,A=void 0===k?null:k,P=e.IconSub,E=void 0===P?null:P,I=e.onItemClick;(0,o.useEffect)((function(){var e=function(){return i(null)};return window.addEventListener("resize",e),function(){window.addEventListener("resize",e)}}),[]);var D=function(e,t){i(null),I(e,t,h.length>0)};return(0,r.jsx)("div",{style:{display:w?"none":"block"},children:(0,r.jsx)(m.Z,{color:"inherit",id:p,sx:f?C?b.buttonSelectedNav:b.buttonSelectedSide:C?b.button:b.buttonSide,style:b.dropMainButton,onClick:function(e){return I(e,p,0===h.length)},children:j?(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsxs)("span",{onClick:function(e){return function(e){i(e.currentTarget)}(e)},style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[l,null!==A&&(0,r.jsx)(A,{})]}),(0,r.jsx)(x.Z,{id:"submenu-item",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:D,MenuListProps:{onMouseLeave:D},sx:b.menuContainerRegular,children:h.map((function(e,t){return(0,r.jsx)(m.Z,{color:"inherit",id:p,sx:f?b.subButtonSelected:b.button,style:{display:"flex",displayDirection:"horizontal"===g?"row":"column"},onClick:function(e){return D(e,p,h.length)},children:(0,r.jsx)(a.default,{href:"".concat(e.href,"/#").concat(e.query),query:e.query,passHref:!0,children:(0,r.jsxs)("a",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.name,null!==E&&(0,r.jsx)(E,{sx:{height:16}})]})})},"sub-".concat(e.href,"-").concat(t))}))})]}):(0,r.jsx)(a.default,{href:c,query:s,children:l})})})},g=n(11163),y=n(36304),w=n(87682),S=n(1029),j=n(76295),O=n(61903),C=n(15861),k=n(55113),A=n(42761),P=n(68047),E={searchbar:{width:{xs:"205px",smol:"245px",b4xs:"380px"},minWidth:"parent",borderRadius:"5px",backgroundColor:"#fff","& .MuiAutocomplete-option":{backgroundColor:"red !important",color:"blue"}},textfield:{"& .MuiOutlinedInput-root":{"& > fieldset":{border:"none !important"}}},listbox:{maxHeight:"500px","& li":{borderRadius:"6px",marginTop:"8px"},"& :hover":{"& h6, svg":{color:function(e){return e.palette.secondary.main}}}},paperbg:{borderRadius:"6px",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",marginTop:"-2px",padding:"8px",border:"1px solid rgba(0, 0, 0, 0.12)"}};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}var R=function(e){var t=e.search,n=e.options,o=e.currentval,i=e.onSelectItemChange,a=e.handleSearchClick,c=e.onTextChange;return(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(j.Z,{disablePortal:!0,id:"search-key",value:o,options:n,getOptionLabel:function(e){return e.label},filterOptions:function(e){return e},sx:E.searchbar,style:{display:t?"block":"none"},size:"small",PaperComponent:function(e){return(0,r.jsx)(k.Z,D({elevation:5},e,{sx:E.paperbg}))},ListboxProps:{sx:E.listbox},noOptionsText:"No results found.",isOptionEqualToValue:function(e,t){return e.id===t.id},onInputChange:c,onChange:function(e,t){return i(e,D({},t))},renderOption:function(e,t){return(0,r.jsx)("li",D({},e,{children:(0,r.jsxs)(u.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)(t.icon,{size:"24"}),(0,r.jsxs)(u.Z,{display:"flex",ml:3,flexDirection:"column",children:[(0,r.jsx)(C.Z,{variant:"subtitle1",color:"text.primary",children:(0,r.jsx)("strong",{children:t.label})}),(0,r.jsx)(C.Z,{variant:"body2",color:"text.secondary",children:t.info})]})]})}))},renderInput:function(e){return(0,r.jsx)(O.Z,D({},e,{autoFocus:!0,focused:!0,placeholder:"Search",sx:E.textfield,inputRef:function(e){return e&&e.focus()}}))}}),(0,r.jsx)(l.Z,{size:"large","aria-label":"Search button","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:a,color:"inherit",sx:E.searchicon,children:t?(0,r.jsx)(P.Z,{}):(0,r.jsx)(A.Z,{})})]})};var Z=n(64689),T=n(45680),_=n(27430),L=n(17934),z=n(88497),N=n(61327),M=[{path:"/",name:"Home",icon:Z.Z},{path:"weather-services",icon:T.Z},{path:"cropping-calendar",icon:_.Z},{path:"agroclimatic-services",icon:L.Z},{path:"bulletins",icon:z.Z},{path:"admin",icon:N.Z}];function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){var t=e.search,n=e.handleSearchClick,i=(0,w.Kx)(S.K.PAGE_SEARCH,"id").documents,a=(0,o.useState)(null),c=a[0],u=a[1],s=(0,o.useState)(null),l=s[0],p=s[1],f=(0,o.useState)([]),d=f[0],h=f[1],x=(0,o.useState)({}),m=x[0],b=x[1],v=(0,o.useState)(null),j=v[0],O=v[1],C=function(e,t){var n=(0,o.useState)(e),r=n[0],i=n[1];return(0,o.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(l,500),k=(0,g.useRouter)();(0,o.useEffect)((function(){if(i.length>0){var e=new y.Index({tokenize:"full",matcher:"simple",cache:!0});i.forEach((function(t){e.add(t.id,t.content)})),b(i.reduce((function(e,t){var n=M.find((function(e){return e.path===("index"===t.id?"/":t.id)})),r=n?n.icon:M[4].icon;return void 0===e?W({},t.id,{name:t.name,info:t.info,icon:r,path:t.path}):function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}({},e,W({},t.id,{name:t.name,info:t.info,icon:r,path:t.path}))}),{})),u(e)}}),[i]),(0,o.useEffect)((function(){if(C){var e=c.search(C,{limit:10,suggest:!0});h(e.map((function(e,t){return{id:t,label:m[e].name,info:m[e].info,icon:m[e].icon,href:"index"===e?"/":"/".concat(m[e].path)}})))}}),[C,c,m]);var A=function(){h([]),O(null),p(null)};return(0,r.jsx)(R,{search:t,word:l,options:d,currentval:j,onSelectItemChange:function(e,t){void 0===t.id?A():(O(t),k.push(t.href))},handleSearchClick:function(){t&&(h([]),O(null)),n()},onTextChange:function(e){if(e){var t=e.target.value;""===t?A():p(t)}}})},G={weather:{href:"/weather-services",name:"ACAP Services",subitems:[{href:"/weather-services",query:"ten-day-weather-forecast",name:"10-Day Weather Forecast"},{href:"/weather-services",query:"seasonal-forecast",name:"Seasonal Forecast"},{href:"/weather-services",query:"special-weather-forecast",name:"Special Weather Forecast"},{href:"/weather-services",query:"support-services",name:"Support Services"}]},calendar:{href:"/cropping-calendar-v2",name:"Cropping Calendar",subitems:[]},agroclimatic:{href:"/agroclimatic-services",name:"Recommendations",subitems:[{href:"/agroclimatic-services",query:"seasonal-recommendations",name:"Regional Seasonal Climate Outlook and Advisory"},{href:"/agroclimatic-services",query:"resilient-practices",name:"10-Day Farm Weather Outlook and Advisory"}]},bulletins:{href:"/bulletins",name:"Bulletins",subitems:[]},crva:{href:"/crva",name:"CRVA",subitems:[]}};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q={container:function(e){return H({display:{md:"flex"}},e.breakpoints.down("lg"),{color:e.palette.primary.main,paddingLeft:0,paddingRight:0})},appbar:{width:"100%",minHeight:"36px",borderBottom:function(e){return"4px solid ".concat(e.palette.third.main)},backgroundColor:function(e){return{md:e.palette.primary.light,lg:e.palette.primary.main}}},toolbar:{width:"100%",justifyContent:{sm:"space-between",md:"end"},alignItems:{xs:"flex-start",sm:"center"},backgroundColor:function(e){return e.palette.primary.main},flexDirection:{xs:"column",sm:"row"},color:function(e){return e.palette.primary.light},paddingTop:{xs:"4px"},padding:{lg:"3px 0 3px"},paddingRight:{xs:0,md:"8px"},height:"parent"},titleContainerFixed:function(e){var t;return H(t={position:"fixed",zIndex:"999",left:0,top:0,width:{xs:"unset",md:"320px"}},e.breakpoints.down("980"),{width:"300px"}),H(t,"marginRight",{xs:"24px",md:"unset"}),H(t,"cursor","pointer"),H(t,"alignItems","center"),t},titleContainer:function(e){var t;return H(t={width:{xs:"unset",md:"400px"}},e.breakpoints.down("980"),{width:"300px"}),H(t,"marginRight",{xs:"24px",md:"unset"}),H(t,"cursor","pointer"),H(t,"alignItems","center"),t},titleTextDesktop:{display:"grid",placeContent:"center","& h5":{fontSize:"16px"},"& h4":{fontSize:"12px"}},title:{backgroundColor:function(e){return{md:e.palette.primary.light}},width:{sm:"100%"},display:{xs:"none",md:"flex"},justifyContent:{sm:"center"},"& span:first-child":{width:{xs:"50px !important",md:"50px !important"},display:{xs:"none !important",md:"block !important"}},gap:{xs:"12px",md:"12px"},"& h5, h4":function(e){var t;return H(t={fontFamily:"Roboto",fontSize:{xs:"1rem",md:"1.25rem"},lineHeight:{xs:"1.07",md:"1"},fontWeight:{xs:"normal",md:"bold"},textTransform:"uppercase",textAlign:"center",color:{md:e.palette.primary.main}},e.breakpoints.down("980"),{fontSize:"16px",fontWeight:"bold"}),H(t,"margin",0),H(t,"whiteSpace","nowrap"),t},"& h4":{color:{md:function(e){return e.palette.primary.main}},fontWeight:"normal",fontSize:{xs:"0.875rem",md:"1rem"},marginTop:{xs:"1px",md:"2px"}},height:"100%",padding:{md:"8px 16px 8px 0"}},subtitleLink:{fontFamily:"Antonio",textTransform:"uppercase",color:"#DCEDC8",cursor:"pointer",display:{sm:"block",md:"none"}},menuContainerSmall:{width:"100% !important",display:{xs:"block",md:"none"},"& .MuiPaper-root":{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}},menuContainerRegular:{width:"100% !important",minWidth:"300px",display:{xs:"block"},"& .MuiPaper-root":{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}}},B=n(326),Y=n(45111),J=n(93619);function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}var U=Object.keys(G).reduce((function(e,t){return e[t]=!1,e}),{}),X={search:!1,loading:!1,info:"",error:""};var $=function(){var e=(0,o.useState)(U),t=e[0],n=e[1],m=(0,o.useState)(null),g=m[0],y=m[1],w=(0,o.useState)(X),S=w[0],j=w[1],O=(0,f.aC)();(0,o.useEffect)((function(){var e=function(){y(null)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var C=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r?(n(K({},U,V({},t,!0))),y(null)):n(K({},U,V({},t,!0)))},k=function(e,t){y(null),C(t)},A=function(){j((function(e){return K({},e,{search:!e.search})}))};return(0,r.jsx)(c.Z,{position:"sticky",sx:q.appbar,children:(0,r.jsxs)(s.Z,{maxWidth:"lg",sx:q.container,id:"header-contents",children:[(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsx)(u.Z,{sx:{minHeight:{sm:"none"}},children:(0,r.jsx)(u.Z,{sx:q.titleContainerFixed,children:(0,r.jsxs)(u.Z,{sx:q.title,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,d.assetPrefixer)("images/logos/amia-logo.png"),height:100,width:100,loader:d.imageLoader,alt:"Agro-Climatic Advisory Portal - ".concat(h.nF," (ACAP-").concat(h.Gt,")")}),(0,r.jsxs)(u.Z,{sx:q.titleTextDesktop,children:[(0,r.jsxs)("h5",{children:["Agro-Climatic Advisory",(0,r.jsx)("br",{}),"Portal - ",h.Gt]}),(0,r.jsxs)("h4",{children:["(ACAP-",h.Gt,")"]})]})]})})})}),(0,r.jsx)(u.Z,{sx:{minHeight:{sm:"none",visibility:"hidden"}},children:(0,r.jsx)(u.Z,{sx:q.titleContainer,style:{visibility:"hidden"},children:(0,r.jsxs)(u.Z,{sx:q.title,style:{visibility:"hidden"},children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,d.assetPrefixer)("images/logos/da-logo.png"),height:65,width:65,loader:d.imageLoader,alt:"".concat(h.nF," Agro-Climatic Advisory Portal")}),(0,r.jsxs)(u.Z,{sx:q.titleTextDesktop,children:[(0,r.jsxs)("h5",{children:["Agro-Climatic Advisory",(0,r.jsx)("br",{}),"Portal - ",h.Gt]}),(0,r.jsxs)("h4",{children:["(ACAP-",h.Gt,")"]})]})]})})}),(0,r.jsxs)(p.Z,{variant:"dense",disableGutters:!0,sx:q.toolbar,children:[(0,r.jsxs)(u.Z,{sx:{width:"100%",flexGrow:1,justifyContent:"space-between",display:{xs:"flex",md:"none"}},children:[(0,r.jsx)(l.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit",children:(0,r.jsx)(B.Z,{})}),(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsxs)(u.Z,{sx:q.title,style:{display:S.search?"none":"flex",width:"100%",justifyContent:"center"},children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,d.assetPrefixer)("images/logos/da-logo.png"),height:75,width:75,loader:d.imageLoader,alt:"".concat(h.nF," Agro-Climatic Advisory Portal")}),(0,r.jsxs)("div",{className:"acap-title",children:[(0,r.jsxs)("h5",{children:["Agro-Climatic Advisory",(0,r.jsx)("br",{}),"Portal - ",h.Gt]}),(0,r.jsxs)("h4",{children:["(ACAP-",h.Gt,")"]})]})]})}),S.search&&(0,r.jsx)(F,{search:S.search,handleSearchClick:A}),(0,r.jsxs)(x.Z,{id:"menu-appbar",elevation:0,anchorEl:g,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(g),onClose:k,sx:b.menuContainerRegular,children:[Object.keys(G).map((function(e,n){var o=G[e].subitems.length>0;return(0,r.jsx)(v,{href:G[e].href,name:G[e].name,id:e,active:t[e],isParent:o,isNavItem:!1,IconMain:Y.Z,IconSub:J.Z,subitems:G[e].subitems,onItemClick:C},n)})),(0,r.jsx)(v,{href:null!==O.user?O.user.accountlevel===h.DW.ADMIN?"/admin":"/superadmin":"/admin/login",name:null!==O.user?O.user.accountlevel===h.DW.ADMIN?"Admin":"Superadmin":"Login",id:"admin",active:!1,isNavItem:!1,layout:"vertical",onItemClick:function(){return k()}}),(0,r.jsx)(v,{href:"#",name:"Search",id:"sm-search",active:!1,isNavItem:!1,layout:"vertical",preventnavs:!0,onItemClick:function(e){k(0,"sm-search"),A()}})]})]}),(0,r.jsxs)(u.Z,{sx:{flexGrow:1,justifyContent:"flex-end",alignItems:"center",display:{xs:"none",md:"flex"}},children:[Object.keys(G).map((function(e,n){var o=G[e].subitems.length>0;return(0,r.jsx)(v,{href:G[e].href,name:G[e].name,id:e,active:t[e],isParent:o,IconMain:Y.Z,IconSub:J.Z,subitems:G[e].subitems,searchopts:S.search,onItemClick:function(t){return C(t,e)}},n)})),(0,r.jsx)(v,{href:null!==O.user?O.user.accountlevel===h.DW.ADMIN?"/admin":"/superadmin":"/admin/login",name:null!==O.user?O.user.accountlevel===h.DW.ADMIN?"Admin":"Superadmin":"Login",id:"admin",active:!1,searchopts:S.search,onItemClick:function(){}}),(0,r.jsx)(F,{search:S.search,handleSearchClick:A})]})]})]})})}},87682:function(e,t,n){n.d(t,{ky:function(){return h},Kx:function(){return x},m$:function(){return m},tl:function(){return b}});var r=n(34051),o=n.n(r),i=n(67294),a=n(36100),c=n(25441);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var n=(0,i.useState)(null),r=n[0],u=n[1],s=(0,i.useState)(!0),p=s[0],f=s[1],d=(0,i.useState)(""),h=d[0],x=d[1],m=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var n=function(){var n=l(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=(0,a.JU)(c.db,e,t),n.next=4,(0,a.QT)(r);case 4:i=n.sent,m.current&&(i.exists()&&u(i.data()),f(!1)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0.message),f(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return m.current=!1}}),[e,t]),[r,p,h]}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=(0,i.useState)([]),s=u[0],p=u[1],h=(0,i.useState)(!0),x=h[0],m=h[1],b=(0,i.useState)(""),v=b[0],g=b[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=l(o().mark((function i(){var u,s,l,h;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,u=[(0,a.Xo)(t,"asc")],r>0&&u.push((0,a.b9)(r)),s=(0,a.hJ)(c.db,e),l=n||a.IO.apply(void 0,[s].concat(d(u))),o.next=7,(0,a.PL)(l);case 7:h=o.sent,y.current&&(p(h.docs.map((function(e){return f({},e.data())}))),m(!1)),o.next=15;break;case 11:o.prev=11,o.t0=o.catch(0),g(o.t0.message),m(!1);case 15:case"end":return o.stop()}}),i,null,[[0,11]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,t,n,r]),{documents:s,loading:x,error:v}}function m(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=(0,i.useState)([]),s=u[0],p=u[1],d=(0,i.useState)(!0),h=d[0],x=d[1],m=(0,i.useState)(""),b=m[0],v=m[1],g=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=l(o().mark((function i(){var u,s;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,u=(0,a.IO)((0,a.hJ)(c.db,e,t,n),(0,a.Xo)(r)),o.next=4,(0,a.PL)(u);case 4:s=o.sent,g.current&&(p(s.docs.map((function(e){return f({},e.data())}))),x(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),v(o.t0.message),x(!1);case 12:case"end":return o.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return g.current=!1}}),[e,t,n,r]),{documents:s,loading:h,error:b}}function b(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4?arguments[4]:void 0,s=(0,i.useState)([]),p=s[0],d=s[1],h=(0,i.useState)(!0),x=h[0],m=h[1],b=(0,i.useState)(""),v=b[0],g=b[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=l(o().mark((function i(){var s,l;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=(0,a.hJ)(c.db,e,t,n),""!==r&&(s=(0,a.IO)(s,(0,a.Xo)(r))),u&&(s=(0,a.IO)(s,(0,a.b9)(u))),o.next=6,(0,a.PL)(s);case 6:l=o.sent,y.current&&(d(l.docs.map((function(e){return f({},e.data())}))),m(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),g(o.t0.message),m(!1);case 14:case"end":return o.stop()}}),i,null,[[0,10]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,t,n,r,u]),{documents:p,loading:x,error:v}}},1029:function(e,t,n){n.d(t,{K:function(){return g},d:function(){return y}});var r=n(34051),o=n.n(r),i=n(94763),a=n(25441),c=n(47426),u=n(27392);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){l(i,r,o,a,c,"next",e)}function c(e){l(i,r,o,a,c,"throw",e)}a(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function x(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?s(e):t}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}var g={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,e);var t=v(n);function n(){var e;f(this,n);var r=s(e=t.apply(this,arguments));d(s(e),"getPageAssetsDoc",function(){var e=p(o().mark((function e(t,n){var i,a,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=[],e.prev=2,e.next=5,r.getDocumentData(g.ASSETS,t);case 5:if(a=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:if(n){e.next=10;break}return e.abrupt("return",a);case 10:if(!i){e.next=14;break}return e.abrupt("return",a.data.filter((function(e){return e.page===n})));case 14:return e.abrupt("return",a.data.filter((function(e){return e.page===n})).map((function(e){return e.url})));case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(2),console.error(e.t0.message),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}());var i=s(e);d(s(e),"getTyphoonAdvisory",p(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.doc(i.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),e.next=3,i.getDoc(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var l=s(e);return d(s(e),"getWeatherForecast",function(){var e=p(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getNestedCollectionData(g.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d(s(e),"getPdfDownloadURL",function(){var e=p(o().mark((function e(t){var n,r,i,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.length>1&&void 0!==s[1]?s[1]:u.Ry.SEASONAL,r="",e.t0=n,e.next=e.t0===u.Ry.SEASONAL?5:e.t0===u.Ry.TEN_DAY?7:e.t0===u.Ry.SPECIAL_WEATHER?9:11;break;case 5:return r=c.Do.PDF_STORAGE_SEASONAL,e.abrupt("break",12);case 7:return r=c.Do.PDF_STORAGE_TENDAY,e.abrupt("break",12);case 9:return r=c.Do.PDF_STORAGE_SPECIAL,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:return e.prev=12,i=(0,a.iH)(a.tO,"".concat(r,"/").concat(t)),e.next=16,(0,a.Jt)(i);case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t1=e.catch(12),new Error(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}()),e}return n}(i.Z)}}]);