(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4608],{49255:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});t(67294);var i=t(62797),r=t(68199),a=t.n(r),s=t(85893);function o(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n          window.addEventListener('message', message => {\n            if (message.data.type === 'google-one-tap.height_changed') {\n              document.querySelector('#al-google-one-tap-iframe').style.height = message.data.height;\n            }\n          });\n        "}}),(0,s.jsx)("iframe",{className:a().alGoogleOneTapIframe,id:"al-google-one-tap-iframe",src:i.ZP.googleOneTap()})]})}},44608:function(e,n,t){"use strict";t.d(n,{Z:function(){return ue}});var i=t(67294),r=t(17674),a=t(94184),s=t.n(a),o=t(76862),c=t(89211),l=t(71194),u=t(93067),d=t(70325),m=t(37110),f=t(62797),p=t(20405),v=t(29310),_=t(62996),h=t(80400),x=t(44422),g=t(49255),j=t(85893);function b(e){var n=e.isVisible,t=(0,l.sT)().product,i=(0,u.RI)().featureFlags,r=(0,d.u)(),a=i.blueJoinCtaGlobalHeader?m.HK:m.Oc,c=r(f.ZP.candidateSignup,{source:t,sourceContent:a});return(0,j.jsxs)("div",{className:s()("absolute left-0  z-50 h-full w-full space-y-4 bg-white pt-4 font-bold md:hidden",n?"block":"hidden"),children:[(0,j.jsx)(y,{label:"Discover",route:p.RJ.HOME}),(0,j.jsx)(y,{label:"For Job Seekers",route:p.oF.JOBS}),(0,j.jsx)(y,{href:f.ZP.recruitOverview(),label:"For Recruiters"}),(0,j.jsxs)("div",{className:"mx-4 grid grid-cols-2",children:[(0,j.jsx)(o.zx,{href:f.ZP.login(),variant:"secondary",children:"Log In"}),(0,j.jsx)(o.zx,{href:c,children:"Sign Up"})]})]})}function y(e){var n=e.href,t=e.label,i=e.route;return(0,j.jsxs)("div",{className:"mx-6 flex content-center items-center border-b border-gray-300",children:[(0,j.jsx)(_.Z,{className:"flex-1 !text-black !no-underline",href:n,route:i,children:t}),(0,j.jsx)(o.XC,{})]})}function N(){var e=(0,l.sT)().product,n=(0,u.RI)().featureFlags,t=(0,d.u)(),i=(0,c.Z)(!1),a=(0,r.Z)(i,2),_=a[0],y=a[1],N=n.blueJoinCtaGlobalHeader?m.HK:m.Oc,S=t(f.ZP.candidateSignup,{source:e,sourceContent:N});return(0,j.jsxs)("header",{className:"mx-auto mb-8 max-w-screen-xl border-b border-gray-300 px-6 pt-4 pb-6 lg:px-20",children:[(0,j.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,j.jsx)(v.C9,{className:"mr-4",href:f.ZP.root()}),(0,j.jsx)("div",{className:"md:hidden",children:(0,j.jsx)(x.Z,{className:"!text-black",onClick:y,children:_?(0,j.jsx)(o.Tw,{className:"absolute right-6 top-6 w-5"}):(0,j.jsx)(h.MenuIcon,{})})}),(0,j.jsxs)("nav",{className:"relative hidden items-center bg-white md:flex",children:[(0,j.jsx)(x.Z,{className:s()("absolute right-2",_?"block":"hidden")}),(0,j.jsxs)("div",{className:"r-0 relative hidden space-x-8 font-light md:block",children:[(0,j.jsx)(k,{label:"Discover",route:p.RJ.HOME,active:!0}),(0,j.jsx)(k,{label:"Find Jobs",route:p.oF.JOBS}),(0,j.jsx)(k,{href:f.ZP.recruitOverview(),label:"For Recruiters"})]}),(0,j.jsxs)("div",{className:"ml-10",children:[(0,j.jsx)(o.zx,{className:"px-9",href:f.ZP.login(),variant:"secondary",children:"Log In"}),(0,j.jsx)(o.zx,{className:"px-12",href:S,children:"Sign Up"})]})]})]}),(0,j.jsx)(b,{isVisible:_}),(0,j.jsx)(g.Z,{})]})}function k(e){var n=e.active,t=e.href,i=e.label,r=e.route;return(0,j.jsx)(_.Z,{className:s()("!text-black underline-offset-8 hover:!text-dark-link",n&&"underline"),href:t,route:r,children:i})}t(41539),t(88674);var S=t(5152),O=t.n(S),w=t(50029),C=t(87794),I=t.n(C),F=(t(74916),t(15306),t(64765),t(36454)),T=t(31593),Z=t(26515),P=t(20267),D=t.n(P);function E(e){var n=e.formRef,t=e.onSubmit,i=e.onSearch,r=e.results;return(0,j.jsxs)("form",{ref:n,className:D().container,onSubmit:t,children:[(0,j.jsx)("label",{htmlFor:"search",children:(0,j.jsx)(o.W1,{className:D().icon})}),(0,j.jsx)("input",{"aria-label":"Search ".concat(T.p),autoComplete:"off",className:D().input,id:"search",name:"search",onChange:i,onFocus:i,placeholder:"Search",type:"text"}),(0,j.jsx)(Z.Z,{results:r})]})}function R(){var e=(0,i.useState)(null),n=e[0],t=e[1],r=(0,i.useState)([]),a=r[0],s=r[1],o=(0,i.useRef)(null);(0,F.G0)((function(){return s([])}),o);var c=function(){var e=(0,w.Z)(I().mark((function e(n){var i,r,a,o;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.target.value){e.next=5;break}return t(i),s([]),e.abrupt("return");case 5:return e.next=7,fetch("/autocomplete/search.json?query=".concat(encodeURIComponent(i)));case 7:return r=e.sent,e.next=10,r.json();case 10:a=e.sent,o=(null===a||void 0===a?void 0:a.results)||[],t(i),s(o);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(E,{formRef:o,onSearch:c,onSubmit:function(e){e.preventDefault(),window.location.replace(f.ZP.search(n))},results:a})}var A=t(59499),H=(t(29254),t(66778)),q=t.n(H),G=t(25162),M=t.n(G);function V(e){var n=e.className,t=e.href,i=e.label,r=e.onClick,a=e.target,o=e.variant,c=e.route,l=s()(q().link,M()[o],n,(0,A.Z)({},q().text,!t));return c&&!t?(0,j.jsx)(_.Z,{className:l,onClick:r,route:c,target:a||"_self",children:i}):(0,j.jsx)("a",{className:l,href:t,onClick:r,target:a||"_self",children:i})}var L=t(24190),J=t.n(L);function K(e){var n=e.children,t=e.className,i=e.href,r=e.label,a=e.linkClassName,o=e.onClick,c=e.route;return(0,j.jsxs)("li",{className:s()(J().item,t),children:[(0,j.jsx)(V,{className:a,href:i,label:r,onClick:o,route:c,variant:"primary"}),n]})}var Q=t(86418),z=t.n(Q);function U(e){var n=e.children,t=e.className;return(0,j.jsx)("div",{className:s()(z().container,t),children:n})}var W=t(53448),X=t.n(W);function B(){return(0,j.jsx)("div",{className:X().separator})}var Y=t(11853),$=t.n(Y);function ee(e){var n=e.user,t=n.candidateOnly;return(0,j.jsx)("nav",{children:(0,j.jsxs)("ul",{className:$().container,children:[(0,j.jsx)(K,{href:f.ZP.userProfile(n.slug),label:"Profile"}),(0,j.jsx)(K,{label:"Jobs",route:p.oF.JOBS}),!t&&(0,j.jsx)(K,{label:"Recruit",route:p.bK.HOME}),(0,j.jsx)(K,{className:$().itemDropdown,label:"More",children:(0,j.jsxs)(U,{className:$().hidden,children:[t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(V,{label:"Post a Job",route:p.bK.HOME,variant:"secondary"}),(0,j.jsx)(V,{href:f.ZP.salaryTool(),label:"Salaries",variant:"secondary"})]}),!t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(V,{href:f.ZP.salaryTool(),label:"Salaries",variant:"secondary"}),(0,j.jsx)(B,{}),(0,j.jsx)(V,{href:f.ZP.help(),label:"Help",variant:"secondary"})]})]})})]})})}t(68309);var ne=t(29195),te=t(28156),ie=t.n(te);function re(e){var n=e.user,t=(0,i.useState)(!1),r=t[0],a=t[1],s=(0,i.useState)(""),o=s[0],c=s[1],l=(0,i.useRef)(null);(0,F.G0)((function(){return a(!1)}),l);var u=function(){var e=(0,w.Z)(I().mark((function e(){var n,t;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=11;break}return e.next=3,fetch("/home/nav_dropdown");case 3:return n=e.sent,e.next=6,n.text();case 6:t=e.sent,a(!0),c(t),e.next=12;break;case 11:a(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:ie().container,children:[(0,j.jsx)(ne.Z,{legacy:!0}),(0,j.jsx)("a",{onClick:u,children:(0,j.jsx)("img",{alt:"".concat(n.name," avatar"),className:ie().box,src:n.avatarUrl,title:n.name})}),r&&!!o&&(0,j.jsx)("div",{ref:l,dangerouslySetInnerHTML:{__html:o}})]})}var ae=t(41628),se=t.n(ae),oe=t(30026),ce=O()((function(){return Promise.all([t.e(1337),t.e(8327),t.e(3209),t.e(4365),t.e(7561),t.e(1150),t.e(4544),t.e(5205),t.e(113),t.e(9593),t.e(1622)]).then(t.bind(t,97511))}),{loadableGenerated:{webpack:function(){return[97511]}}});function le(e){var n=e.user;return(0,j.jsxs)("header",{className:se().header,children:[(0,j.jsx)(oe.Z,{}),(0,j.jsxs)("div",{className:se().inner,children:[(0,j.jsxs)("div",{className:se().leftSection,children:[(0,j.jsx)(v.C9,{className:"mr-4",href:f.ZP.root()}),(0,j.jsx)(ee,{user:n})]}),(0,j.jsxs)("div",{className:se().rightSection,children:[(0,j.jsx)(R,{}),(0,j.jsx)(re,{user:n})]})]}),(0,j.jsx)(ce,{})]})}function ue(e){var n=e.user;return n?(0,j.jsx)(le,{user:n}):(0,j.jsx)(N,{})}},39371:function(e,n,t){"use strict";t.d(n,{lF:function(){return a},n:function(){return r}});t(57327),t(41539),t(68309),t(92222);var i=t(37887),r={kind:"Document",definitions:function(e){var n={};return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;return!n[t]&&(n[t]=!0,!0)}))}([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"NotificationsQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"talent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"notifications"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NotificationFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"currentCandidate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bannerToShowcase"},arguments:[],directives:[]}]}}]}}]}}]}}].concat([{kind:"FragmentDefinition",name:{kind:"Name",value:"NotificationFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Notification"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sourceId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sourceType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dismissed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}}])),loc:{start:0,end:120,source:{body:"query NotificationsQuery{talent{viewer{id notifications{...NotificationFragment}currentCandidate{id bannerToShowcase}}}}",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function a(){var e=(0,i.a)(r);return{data:e.data,loading:e.loading}}},29195:function(e,n,t){"use strict";t.d(n,{Z:function(){return Y}});var i=t(59499),r=t(17674),a=(t(57327),t(41539),t(47941),t(82526),t(38880),t(54747),t(49337),t(94184)),s=t.n(a),o=t(6805),c=t(76862),l=t(67294),u=t(36454),d=(t(68309),t(32496)),m=t.n(d),f=t(85893);function p(e){var n=e.children,t=e.className,r=e.isActive,a=e.icon,o=e.name,l=e.onClick;return(0,f.jsx)(c.u,{content:o,disabled:r,arrow:!0,children:(0,f.jsxs)("button",{"aria-label":o,className:s()(m().iconContainer,t,(0,i.Z)({},m().open,r)),onClick:l,children:[(0,f.jsx)(a,{className:m().icon}),n]})})}var v=t(71194),_=t(39371),h=(t(21249),t(61501)),x=(t(26699),t(32023),t(80400)),g=t(65145),j=t(43789),b=t(62996),y=t(20405),N=t(50319),k=t(91534),S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DismissNotification"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"DismissNotificationInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"notification"},name:{kind:"Name",value:"dismissNotification"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dismissed"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:124,source:{body:"mutation DismissNotification($input:DismissNotificationInput!){notification:dismissNotification(input:$input){id dismissed}}",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function O(e){var n=(0,N.D)(S,{optimisticResponse:{notification:{__typename:"Notification",dismissed:!0,id:e}}}),t=(0,r.Z)(n,1)[0];return function(){var n={id:e};if(e)return(0,k.iO)(t)(n)}}var w=t(71408),C=t.n(w);function I(e){var n=e.onClick,t=e.item,i=(0,v.sT)().product,r=t.id,a=t.sourceType,s=O(r);return(0,f.jsx)(b.Z,{className:C().component,onClick:function(){s(),n()},route:y.oF.HOME,track:{action:"alert clicked",object:"notification",product:i,properties:{sourceType:a},variant:"curated_global"},children:(0,f.jsx)(A,{item:t})})}var F=t(31139);function T(e){var n=e.item,t=e.onClick,i=(0,v.sT)().product,r=n.id,a=n.sourceId,s=n.sourceType,o=O(r);if(!a)return null;var c=(0,F.Y)(a,j.m3Q.includes(s)?j.bw7.ALIST__CONVERSATION:j.bw7.JOBPAIRING);return(0,f.jsx)(b.Z,{className:C().component,onClick:function(){o(),t()},params:{id:c},route:y.oF.MESSAGES,track:{action:"alert clicked",object:"alerts tray",product:i,properties:{sourceId:a,sourceType:s},variant:"message"},children:(0,f.jsx)(A,{item:n})})}function Z(e){var n=e.item,t=e.onClick,i=(0,v.sT)().product,r=n.id,a=n.sourceType,s=O(r);return(0,f.jsx)(b.Z,{className:C().component,onClick:function(){s(),t()},route:y.sc.PROFILE,track:{action:"alert clicked",object:"notification",product:i,properties:{sourceType:a},variant:"profile"},children:(0,f.jsx)(A,{item:n})})}var P=t(37887),D={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"StartupFollowNotification"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"startupId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"startup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"startupId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:80,source:{body:"query StartupFollowNotification($startupId:ID!){startup(id:$startupId){id slug}}",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function E(e){var n,t,i=e.item,r=e.onClick,a=(0,v.sT)().product,o=i.id,l=i.sourceId,u=i.sourceType,d=i.createdAt,m=i.title,p=O(o),_=(t=l,(0,P.a)(D,{variables:{startupId:t},skip:!t})),h=_.data,x=_.loading;if(!l||x)return null;var j=null===h||void 0===h||null===(n=h.startup)||void 0===n?void 0:n.slug;return(0,f.jsx)(b.Z,{className:s()(C().component,"!no-underline"),onClick:function(){p(),r()},params:{slug:j},route:y.Iu.OVERVIEW,track:{action:"alert clicked",object:"alerts tray",product:a,properties:{sourceId:l,sourceType:u},variant:"message"},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(H,{className:C().icon,type:u}),(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)("div",{className:"text-xs text-gray-600",children:"Followed startup"}),(0,f.jsxs)("div",{className:"relative pr-2",children:[(0,f.jsx)("span",{className:C().title,children:m}),(0,f.jsx)(c.XC,{className:C().arrow})]}),(0,f.jsx)("span",{className:C().date,children:(0,g.pL)(d)})]})]})})}function R(e){var n=e.item,t=e.onClick,i=n.sourceType;return j.O77.includes(i)?(0,f.jsx)(Z,{item:n,onClick:t}):j.tX5.includes(i)?(0,f.jsx)(I,{item:n,onClick:t}):j.sVc.includes(i)?(0,f.jsx)(E,{item:n,onClick:t}):(0,f.jsx)(T,{item:n,onClick:t})}function A(e){var n=e.item,t=n.sourceType,i=n.createdAt,r=n.title;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(H,{className:C().icon,type:t}),(0,f.jsxs)(c.xu,{width:"100%",column:!0,children:[(0,f.jsxs)(c.xu,{padding:{right:2},relative:!0,children:[(0,f.jsx)("span",{className:C().title,children:r}),(0,f.jsx)(c.XC,{className:C().arrow})]}),(0,f.jsx)("span",{className:C().date,children:(0,g.pL)(i)})]})]})}function H(e){var n=e.type,t=e.className;if(j.sVc.includes(n))return(0,f.jsx)(c.tc,{className:s()(t,"h-6 w-6 rounded-full bg-gtmyellow-400 p-1 text-white")});switch(n){case j.Iqg.SOURCE_MATCH:return(0,f.jsx)(c.Y,{className:s()(C().checkmark,t)});case j.Iqg.CORE_CONVERSATION:case j.Iqg.ALIST_CONVERSATION:return(0,f.jsx)(x.ChatBubbleIcon,{className:t,height:"24",width:"24"});default:return(0,f.jsx)(x.NewNotificationIcon,{className:s()(C().new,t)})}}var q=t(77653),G=t.n(q);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function L(e){var n=e.loading,t=e.notifications,i=e.onClose;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.xu,{align:"space-between",padding:2,valign:"center",row:!0,children:[(0,f.jsxs)(c.h4,{color:"gray-800",flow:!1,size:"xs",weight:"medium",h3:!0,children:[!n&&0===t.length&&"NO ","RECENT NOTIFICATIONS"]}),(0,f.jsx)(c.Tw,{className:G().closeIcon,onClick:i})]}),n?(0,f.jsx)(c.TF,{}):(0,f.jsx)(f.Fragment,{children:t.length>0&&(0,f.jsx)("div",{className:G().notifications,children:t.map((function(e){return(0,f.jsx)(R,{item:e,onClick:i},e.id)}))})})]})}function J(e){return(0,f.jsx)("div",{className:G().component,children:(0,f.jsx)(L,V({},e))})}var K=(0,h.Gt)(L,"OverlayWIP",s()(G().component,G().legacy)),Q=t(36252),z=t.n(Q),U=t(63084),W="CX_NEWEST_NOTIFICATION_SEEN";function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e){var n=e.legacy,t=(0,v.sT)().product,i=(0,_.lF)(),a=i.data,d=i.loading,m=((null===a||void 0===a?void 0:a.talent.viewer.notifications)||[]).filter((function(e){return!e.dismissed})),h=function(e,n){var t=(0,l.useState)(!1),i=t[0],r=t[1],a=(0,l.useState)(!1),s=a[0],o=a[1];return(0,l.useEffect)((function(){if(e.length&&!s){var t=e[0].id,i=localStorage.getItem(W)||"";r(!i||t>i),e.filter((function(e){return e.id>i})).forEach((function(e){var t=e.sourceId,i=e.sourceType;U.j({action:"alert triggered",object:"alerts tray",product:n,properties:{sourceId:t,sourceType:i}})})),localStorage.setItem(W,t),o(!0)}}),[e]),[i,r]}(m,t),x=(0,r.Z)(h,2),g=x[0],j=x[1],b=function(){return j(!1)},y=(0,l.useRef)(null);(0,u.G0)(b,y);var N={loading:d,notifications:m,onClose:b};return(0,f.jsxs)("div",{ref:y,className:s()(z().component,n&&z().legacy),children:[(0,f.jsx)(p,{className:z().bell,icon:c.CK,isActive:g,name:"Notifications",onClick:function(){return j(!g)},children:m.length>0?(0,f.jsx)(c.Ct,{className:s()(z().badge),color:"orange-dark"}):null}),g&&(n?(0,f.jsx)(o.M_,{children:(0,f.jsx)(K,B({animationKey:"notification-tray"},N))}):(0,f.jsx)(J,B({},N)))]})}},26515:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});t(21249),t(68309);var i=t(94184),r=t.n(i),a=(t(67294),t(72354)),s=t.n(a),o=t(85893);function c(e){var n=e.className,t=e.results;return t?(0,o.jsx)("div",{className:r()(s().container,n),children:t.map((function(e){return(0,o.jsxs)("a",{className:s().result,href:e.url,children:[(0,o.jsx)("img",{alt:"".concat(e.name," thumbnail"),className:s().thumbnail,src:e.pic}),(0,o.jsxs)("div",{className:s().meta,children:[e.name,e.type&&(0,o.jsx)("p",{className:s().detail,dangerouslySetInnerHTML:{__html:e.type}})]})]},e.id)}))}):null}},70325:function(e,n,t){"use strict";t.d(n,{u:function(){return a}});var i=t(62797),r=t(12680);function a(){var e="true"===(0,r.sV)().params.cg;return function(n,t){return e?i.ZP.curatedGlobalCandidatesSignup():n(t||{})}}},37110:function(e,n,t){"use strict";t.d(n,{DN:function(){return a},HK:function(){return c},Ly:function(){return r},Oc:function(){return l},TR:function(){return o},Z7:function(){return m},mv:function(){return u},pI:function(){return s},qH:function(){return i},uy:function(){return d}});var i="recruiter_onboarding",r="job_collection_detail",a="save_job_button",s="follow_startup_button",o="view_more_button",c="global_header_join_button",l="global_header_join_text",u="claim_profile",d="require_login",m="logged_out_above_fold_cta"},31139:function(e,n,t){"use strict";t.d(n,{S1:function(){return s},Y:function(){return a},_J:function(){return r}});var i=t(43789);function r(e){return e?"0"===e[0]?{id:e.substring(1),type:i._yU}:{id:e,type:i.WMW}:null}function a(e,n){return n===i._yU?"0".concat(e):e}function s(e){var n=e.candidateInboxArchived,t=e.candidateStage,r=e.status;return t===i.er7.CANDIDATE_ARCHIVED||r===i.HaV.REJECTED||n}},68199:function(e){e.exports={alGoogleOneTapIframe:"styles_alGoogleOneTapIframe__iyQc5"}},53448:function(e){e.exports={separator:"styles_separator__gLNu_"}},86418:function(e){e.exports={container:"styles_container__bC9aI"}},66778:function(e){e.exports={link:"styles_link__1CXqe",text:"styles_text__uJoz6"}},25162:function(e){e.exports={primary:"variants_primary__gaPq6",secondary:"variants_secondary__Q8pnP"}},24190:function(e){e.exports={item:"styles_item__1ACVm",link:"styles_link__5n_Xe"}},11853:function(e){e.exports={container:"styles_container__9fGR9",highlighted:"styles_highlighted__Ntob1",itemDropdown:"styles_itemDropdown__MgyHU",hidden:"styles_hidden__IPvn0"}},28156:function(e){e.exports={container:"styles_container__vE5wv",box:"styles_box__1sDzF",avatarItem:"styles_avatarItem__8mMab",hidden:"styles_hidden__1vIK5"}},41628:function(e){e.exports={header:"styles_header__zQWlw",inner:"styles_inner__j4Kuh",leftSection:"styles_leftSection__5qbgG",rightSection:"styles_rightSection__Qqor1",link:"styles_link__6tbl_",joinButton:"styles_joinButton__0otm3"}},71408:function(e){e.exports={component:"styles_component__aq0Z_",icon:"styles_icon__970qb",new:"styles_new__tEgHk",checkmark:"styles_checkmark__YY8du",title:"styles_title__NM5HP",arrow:"styles_arrow__4Ie36",date:"styles_date__x_9hZ"}},77653:function(e){e.exports={component:"styles_component__xe_jW",closeIcon:"styles_closeIcon__PSNfY",notifications:"styles_notifications__dtkmM",legacy:"styles_legacy__iswHU"}},36252:function(e){e.exports={component:"styles_component__8s6FE",badge:"styles_badge__hQaf9",legacy:"styles_legacy__3dNUF",bell:"styles_bell___9Sw4"}},72354:function(e){e.exports={container:"styles_container__oKGnK",result:"styles_result__tbHto",thumbnail:"styles_thumbnail__Mg4WY",meta:"styles_meta__leXa2",detail:"styles_detail__qKDq3"}},20267:function(e){e.exports={container:"styles_container__ZuI_F",icon:"styles_icon__bZAOv",input:"styles_input__bFmQn",bold:"styles_bold__Ksd01"}},32496:function(e){e.exports={iconContainer:"styles_iconContainer__ztwuU",open:"styles_open__czSig"}}}]);