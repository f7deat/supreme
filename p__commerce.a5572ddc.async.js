(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[394],{70347:function(){},42981:function(y,d,t){"use strict";t.r(d);var c=t(13062),_=t(71230),n=t(89032),P=t(15746),b=t(58024),O=t(39144),x=t(54421),D=t(38272),w=t(94233),A=t(51890),N=t(70844),i=t(85893),U=function(){var u=[{title:"Google Merchant Center ",description:"Merchant Center lets you manage how your in-store and online product inventory appears on Google",avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"},{title:"Meta Commerce",description:"Manage your catalog and organize your sales on Facebook and Instagram and gain valuable insights about your business with Facebook Commerce Manager",avatar:"https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg"}];return(0,i.jsx)(N.ZP,{title:"Commerce",children:(0,i.jsxs)(_.Z,{gutter:24,children:[(0,i.jsx)(P.Z,{span:8,children:(0,i.jsx)(O.Z,{title:"External Market",children:(0,i.jsx)(D.ZP,{itemLayout:"horizontal",dataSource:u,renderItem:function(Z){return(0,i.jsx)(D.ZP.Item,{actions:[(0,i.jsx)("a",{children:"connect"},"list-loadmore-edit")],children:(0,i.jsx)(D.ZP.Item.Meta,{avatar:(0,i.jsx)(A.C,{src:Z.avatar,size:"large"}),title:(0,i.jsx)("a",{href:"https://defzone.net",children:Z.title}),description:Z.description})})}})})}),(0,i.jsx)(P.Z,{span:8,children:(0,i.jsx)(O.Z,{})}),(0,i.jsx)(P.Z,{span:8,children:(0,i.jsx)(O.Z,{})})]})})};d.default=U},39144:function(y,d,t){"use strict";t.d(d,{Z:function(){return re}});var c=t(96156),_=t(22122),n=t(67294),P=t(94184),b=t.n(P),O=t(98423),x=t(65632),D=function(r,a){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(r);l<e.length;l++)a.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(r,e[l])&&(o[e[l]]=r[e[l]]);return o},w=function(a){var o=a.prefixCls,e=a.className,l=a.hoverable,T=l===void 0?!0:l,g=D(a,["prefixCls","className","hoverable"]);return n.createElement(x.C,null,function(C){var h=C.getPrefixCls,M=h("card",o),m=b()("".concat(M,"-grid"),e,(0,c.Z)({},"".concat(M,"-grid-hoverable"),T));return n.createElement("div",(0,_.Z)({},g,{className:m}))})},A=w,N=function(r,a){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(r);l<e.length;l++)a.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(r,e[l])&&(o[e[l]]=r[e[l]]);return o},i=function(a){return n.createElement(x.C,null,function(o){var e=o.getPrefixCls,l=a.prefixCls,T=a.className,g=a.avatar,C=a.title,h=a.description,M=N(a,["prefixCls","className","avatar","title","description"]),m=e("card",l),z=b()("".concat(m,"-meta"),T),K=g?n.createElement("div",{className:"".concat(m,"-meta-avatar")},g):null,I=C?n.createElement("div",{className:"".concat(m,"-meta-title")},C):null,B=h?n.createElement("div",{className:"".concat(m,"-meta-description")},h):null,j=I||B?n.createElement("div",{className:"".concat(m,"-meta-detail")},I,B):null;return n.createElement("div",(0,_.Z)({},M,{className:z}),K,j)})},U=i,W=t(51752),u=t(71230),v=t(15746),Z=t(97647),ae=function(r,a){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(r);l<e.length;l++)a.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(r,e[l])&&(o[e[l]]=r[e[l]]);return o};function ne(r){var a=r.map(function(o,e){return n.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(e)},n.createElement("span",null,o))});return a}var S=function(a){var o,e,l=n.useContext(x.E_),T=l.getPrefixCls,g=l.direction,C=n.useContext(Z.Z),h=function(R){var f;(f=a.onTabChange)===null||f===void 0||f.call(a,R)},M=function(){var R;return n.Children.forEach(a.children,function(f){f&&f.type&&f.type===A&&(R=!0)}),R},m=a.prefixCls,z=a.className,K=a.extra,I=a.headStyle,B=I===void 0?{}:I,j=a.bodyStyle,G=j===void 0?{}:j,$=a.title,H=a.loading,J=a.bordered,le=J===void 0?!0:J,ce=a.size,Q=a.type,V=a.cover,F=a.actions,L=a.tabList,oe=a.children,X=a.activeTabKey,se=a.defaultActiveTabKey,ie=a.tabBarExtraContent,de=a.hoverable,Y=a.tabProps,_e=Y===void 0?{}:Y,ve=ae(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),s=T("card",m),Ee=G.padding===0||G.padding==="0px"?{padding:24}:void 0,E=n.createElement("div",{className:"".concat(s,"-loading-block")}),me=n.createElement("div",{className:"".concat(s,"-loading-content"),style:Ee},n.createElement(u.Z,{gutter:8},n.createElement(v.Z,{span:22},E)),n.createElement(u.Z,{gutter:8},n.createElement(v.Z,{span:8},E),n.createElement(v.Z,{span:15},E)),n.createElement(u.Z,{gutter:8},n.createElement(v.Z,{span:6},E),n.createElement(v.Z,{span:18},E)),n.createElement(u.Z,{gutter:8},n.createElement(v.Z,{span:13},E),n.createElement(v.Z,{span:9},E)),n.createElement(u.Z,{gutter:8},n.createElement(v.Z,{span:4},E),n.createElement(v.Z,{span:3},E),n.createElement(v.Z,{span:16},E))),k=X!==void 0,ue=(0,_.Z)((0,_.Z)({},_e),(o={},(0,c.Z)(o,k?"activeKey":"defaultActiveKey",k?X:se),(0,c.Z)(o,"tabBarExtraContent",ie),o)),q,ee=L&&L.length?n.createElement(W.Z,(0,_.Z)({size:"large"},ue,{className:"".concat(s,"-head-tabs"),onChange:h}),L.map(function(p){return n.createElement(W.Z.TabPane,{tab:p.tab,disabled:p.disabled,key:p.key})})):null;($||K||ee)&&(q=n.createElement("div",{className:"".concat(s,"-head"),style:B},n.createElement("div",{className:"".concat(s,"-head-wrapper")},$&&n.createElement("div",{className:"".concat(s,"-head-title")},$),K&&n.createElement("div",{className:"".concat(s,"-extra")},K)),ee));var fe=V?n.createElement("div",{className:"".concat(s,"-cover")},V):null,ye=n.createElement("div",{className:"".concat(s,"-body"),style:G},H?me:oe),Pe=F&&F.length?n.createElement("ul",{className:"".concat(s,"-actions")},ne(F)):null,Oe=(0,O.Z)(ve,["onTabChange"]),te=ce||C,ge=b()(s,(e={},(0,c.Z)(e,"".concat(s,"-loading"),H),(0,c.Z)(e,"".concat(s,"-bordered"),le),(0,c.Z)(e,"".concat(s,"-hoverable"),de),(0,c.Z)(e,"".concat(s,"-contain-grid"),M()),(0,c.Z)(e,"".concat(s,"-contain-tabs"),L&&L.length),(0,c.Z)(e,"".concat(s,"-").concat(te),te),(0,c.Z)(e,"".concat(s,"-type-").concat(Q),!!Q),(0,c.Z)(e,"".concat(s,"-rtl"),g==="rtl"),e),z);return n.createElement("div",(0,_.Z)({},Oe,{className:ge}),q,fe,ye,Pe)};S.Grid=A,S.Meta=U;var re=S},58024:function(y,d,t){"use strict";var c=t(38663),_=t.n(c),n=t(70347),P=t.n(n),b=t(18106),O=t(13062),x=t(89032)},15746:function(y,d,t){"use strict";var c=t(21584);d.Z=c.Z},89032:function(y,d,t){"use strict";var c=t(38663),_=t.n(c),n=t(6999)},71230:function(y,d,t){"use strict";var c=t(92820);d.Z=c.Z},13062:function(y,d,t){"use strict";var c=t(38663),_=t.n(c),n=t(6999)}}]);
