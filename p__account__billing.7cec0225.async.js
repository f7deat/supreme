(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[703],{5966:function(me,$,n){"use strict";var f=n(28991),o=n(81253),i=n(85893),u=n(82082),_=["fieldProps","proFieldProps"],z=["fieldProps","proFieldProps"],O="text",j=function(M){var A=M.fieldProps,x=M.proFieldProps,E=(0,o.Z)(M,_);return(0,i.jsx)(u.Z,(0,f.Z)({valueType:O,fieldProps:A,filedConfig:{valueType:O},proFieldProps:x},E))},k=function(M){var A=M.fieldProps,x=M.proFieldProps,E=(0,o.Z)(M,z);return(0,i.jsx)(u.Z,(0,f.Z)({valueType:"password",fieldProps:A,proFieldProps:x,filedConfig:{valueType:O}},E))},g=j;g.Password=k,g.displayName="ProFormComponent",$.Z=g},70347:function(){},71228:function(me,$,n){"use strict";n.r($);var f=n(13062),o=n(71230),i=n(402),u=n(97272),_=n(48736),z=n(27049),O=n(89032),j=n(15746),k=n(58024),g=n(39144),Q=n(62350),M=n(75443),A=n(34792),x=n(48086),E=n(3182),T=n(57663),V=n(71577),ae=n(2824),q=n(94043),H=n.n(q),U=n(92374),a=n(49101),p=n(73171),m=n(3224),s=n(71975),d=n(5966),Z=n(67265),P=n(67294),c=n(85893),K=function(){var C=(0,P.useState)(!1),S=(0,ae.Z)(C,2),G=S[0],D=S[1],L=(0,P.useRef)(),W=(0,P.useRef)(),ee=(0,P.useState)(0),I=(0,ae.Z)(ee,2),se=I[0],J=I[1];(0,P.useEffect)(function(){(0,U.Gt)().then(function(y){J(y)})});var le=function(){var b;(b=W.current)===null||b===void 0||b.resetFields(),D(!0)},re=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(V.Z,{type:"primary",icon:(0,c.jsx)(a.Z,{}),onClick:le,children:"New transaction"})})},ue=function(){var y=(0,E.Z)(H().mark(function b(v){return H().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:v.price=Number(v.price),v.quantity=Number(v.quantity),(0,U.xH)(v).then(function(ie){var N;console.log(ie),x.default.success("succeeded"),(N=L.current)===null||N===void 0||N.reload(),D(!1)});case 3:case"end":return Y.stop()}},b)}));return function(v){return y.apply(this,arguments)}}(),X=function(b){(0,U.G_)(b).then(function(v){if(v.succeeded){var F;x.default.success("succeeded!"),(F=L.current)===null||F===void 0||F.reload()}})},te=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:"Quantity",dataIndex:"quantity",search:!1},{title:"Price",render:function(b,v){return v.price.toLocaleString()},search:!1},{title:"Task",render:function(b,v){return(0,c.jsx)(M.Z,{title:"Are you sure?",onConfirm:function(){return X(v.id)},children:(0,c.jsx)(V.Z,{icon:(0,c.jsx)(p.Z,{}),danger:!0,type:"primary"})})},valueType:"option"}];return(0,c.jsxs)(Z.ZP,{title:"Billing",children:[(0,c.jsxs)(o.Z,{gutter:16,children:[(0,c.jsxs)(j.Z,{span:16,children:[(0,c.jsxs)(o.Z,{gutter:16,className:"mb-4",children:[(0,c.jsx)(j.Z,{span:12,children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)(j.Z,{span:6,children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)(j.Z,{span:6,children:(0,c.jsx)(g.Z,{children:(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsx)("div",{className:"mb-2",children:(0,c.jsx)("img",{src:"https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg",alt:"Paypal",width:150})}),(0,c.jsx)("div",{className:"font-bold",children:"Paypal"}),(0,c.jsx)("div",{className:"",children:"Freelance Payment"}),(0,c.jsx)(z.Z,{}),(0,c.jsxs)(u.Z.Title,{level:4,children:[se.toLocaleString(),"\u20AB"]})]})})})]}),(0,c.jsx)(g.Z,{title:"Transaction",extra:(0,c.jsx)(re,{}),children:(0,c.jsx)(m.Z,{search:{layout:"vertical"},rowKey:"id",columns:te,actionRef:L,request:U._J,rowSelection:{}})})]}),(0,c.jsx)(j.Z,{span:8,children:(0,c.jsx)(g.Z,{})})]}),(0,c.jsxs)(s.a,{visible:G,onVisibleChange:D,onFinish:ue,formRef:W,children:[(0,c.jsx)(d.Z,{name:"name",label:"Name",required:!0}),(0,c.jsx)(d.Z,{name:"price",label:"Price",required:!0}),(0,c.jsx)(d.Z,{name:"quantity",label:"Quantity",required:!0})]})]})};$.default=K},92374:function(me,$,n){"use strict";n.d($,{P8:function(){return z},uC:function(){return g},ad:function(){return M},tM:function(){return ae},b1:function(){return H},_I:function(){return m},Pq:function(){return d},kK:function(){return P},YA:function(){return K},rt:function(){return C},c5:function(){return G},bL:function(){return L},uM:function(){return ee},bg:function(){return se},RD:function(){return le},k$:function(){return ue},_8:function(){return te},_J:function(){return b},xH:function(){return F},G_:function(){return ie},Gt:function(){return he},Ao:function(){return h}});var f=n(11849),o=n(3182),i=n(94043),u=n.n(i),_=n(21010);function z(){return O.apply(this,arguments)}function O(){return O=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("file/backup",{responseType:"blob"}));case 1:case"end":return t.stop()}},r)})),O.apply(this,arguments)}function j(r){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime.mark(function r(l){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("post/list-in-user/".concat(l)));case 1:case"end":return e.stop()}},r)})),k.apply(this,arguments)}function g(r){return Q.apply(this,arguments)}function Q(){return Q=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("post/".concat(l)));case 1:case"end":return e.stop()}},r)})),Q.apply(this,arguments)}function M(r){return A.apply(this,arguments)}function A(){return A=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("file/list",{method:"GET",params:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),A.apply(this,arguments)}function x(r){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime.mark(function r(l){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("appsetting/details/".concat(l)));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function T(r){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime.mark(function r(l){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("appsetting/save",{data:l,method:"POST"}));case 1:case"end":return e.stop()}},r)})),V.apply(this,arguments)}function ae(r){return q.apply(this,arguments)}function q(){return q=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=2;break}return e.abrupt("return",(0,_.WY)("user/".concat(l)));case 2:return e.abrupt("return",(0,_.WY)("user"));case 3:case"end":return e.stop()}},r)})),q.apply(this,arguments)}function H(){return U.apply(this,arguments)}function U(){return U=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,_.WY)("file/total-used");case 2:return t.t0=t.sent,t.abrupt("return",{data:t.t0});case 4:case"end":return t.stop()}},r)})),U.apply(this,arguments)}function a(r){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime.mark(function r(l){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("file/upload",{method:"POST",data:l}));case 1:case"end":return e.stop()}},r)})),p.apply(this,arguments)}function m(r){return s.apply(this,arguments)}function s(){return s=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("file/delete/".concat(l),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),s.apply(this,arguments)}function d(r,l){return Z.apply(this,arguments)}function Z(){return Z=(0,o.Z)(u().mark(function r(l,t){return u().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,_.WY)("post/list-by-category/".concat(l),{params:(0,f.Z)({},t)}));case 1:case"end":return R.stop()}},r)})),Z.apply(this,arguments)}function P(){return c.apply(this,arguments)}function c(){return c=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("post/get-list-popular"));case 1:case"end":return t.stop()}},r)})),c.apply(this,arguments)}function K(r){return B.apply(this,arguments)}function B(){return B=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("file/read-all-text",{params:{type:l}}));case 1:case"end":return e.stop()}},r)})),B.apply(this,arguments)}function C(r){return S.apply(this,arguments)}function S(){return S=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("menu/list",{params:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),S.apply(this,arguments)}function G(){return D.apply(this,arguments)}function D(){return D=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("menu/parrent/all"));case 1:case"end":return t.stop()}},r)})),D.apply(this,arguments)}function L(r){return W.apply(this,arguments)}function W(){return W=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("menu/add",{method:"POST",data:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}function ee(){return I.apply(this,arguments)}function I(){return I=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("menu/sync",{method:"POST"}));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function se(){return J.apply(this,arguments)}function J(){return J=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("menu/backup"));case 1:case"end":return t.stop()}},r)})),J.apply(this,arguments)}function le(r){return re.apply(this,arguments)}function re(){return re=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("menu/delete/".concat(l),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),re.apply(this,arguments)}function ue(r){return X.apply(this,arguments)}function X(){return X=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("menu/".concat(l)));case 1:case"end":return e.stop()}},r)})),X.apply(this,arguments)}function te(r){return y.apply(this,arguments)}function y(){return y=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("menu/update",{method:"POST",data:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),y.apply(this,arguments)}function b(r){return v.apply(this,arguments)}function v(){return v=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("billing/list",{params:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),v.apply(this,arguments)}function F(r){return Y.apply(this,arguments)}function Y(){return Y=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("billing/add",{method:"POST",data:(0,f.Z)({},l)}));case 1:case"end":return e.stop()}},r)})),Y.apply(this,arguments)}function ie(r){return N.apply(this,arguments)}function N(){return N=(0,o.Z)(u().mark(function r(l){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("billing/delete/".concat(l),{method:"POST"}));case 1:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function he(){return ce.apply(this,arguments)}function ce(){return ce=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("billing/total-spend"));case 1:case"end":return t.stop()}},r)})),ce.apply(this,arguments)}function h(){return oe.apply(this,arguments)}function oe(){return oe=(0,o.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)("https://restcountries.com/v3/all?fields=name"));case 1:case"end":return t.stop()}},r)})),oe.apply(this,arguments)}function w(r,l){return de.apply(this,arguments)}function de(){return de=_asyncToGenerator(_regeneratorRuntime.mark(function r(l,t){return _regeneratorRuntime.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",request("https://api.unsplash.com/search/photos",{method:"GET",params:{query:l,page:t,client_id:"CZPN7ThG5VGGhT-N4pKutskjCkEu_0Tp4fPn62xmsXQ"}}));case 1:case"end":return R.stop()}},r)})),de.apply(this,arguments)}function ve(){return _e.apply(this,arguments)}function _e(){return _e=_asyncToGenerator(_regeneratorRuntime.mark(function r(){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("https://api.unsplash.com/photos",{method:"GET",params:{page:1,client_id:"CZPN7ThG5VGGhT-N4pKutskjCkEu_0Tp4fPn62xmsXQ"}}));case 1:case"end":return t.stop()}},r)})),_e.apply(this,arguments)}},39144:function(me,$,n){"use strict";n.d($,{Z:function(){return U}});var f=n(96156),o=n(22122),i=n(67294),u=n(94184),_=n.n(u),z=n(98423),O=n(65632),j=function(a,p){var m={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(m[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(m[s[d]]=a[s[d]]);return m},k=function(p){var m=p.prefixCls,s=p.className,d=p.hoverable,Z=d===void 0?!0:d,P=j(p,["prefixCls","className","hoverable"]);return i.createElement(O.C,null,function(c){var K=c.getPrefixCls,B=K("card",m),C=_()("".concat(B,"-grid"),s,(0,f.Z)({},"".concat(B,"-grid-hoverable"),Z));return i.createElement("div",(0,o.Z)({},P,{className:C}))})},g=k,Q=function(a,p){var m={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(m[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(m[s[d]]=a[s[d]]);return m},M=function(p){return i.createElement(O.C,null,function(m){var s=m.getPrefixCls,d=p.prefixCls,Z=p.className,P=p.avatar,c=p.title,K=p.description,B=Q(p,["prefixCls","className","avatar","title","description"]),C=s("card",d),S=_()("".concat(C,"-meta"),Z),G=P?i.createElement("div",{className:"".concat(C,"-meta-avatar")},P):null,D=c?i.createElement("div",{className:"".concat(C,"-meta-title")},c):null,L=K?i.createElement("div",{className:"".concat(C,"-meta-description")},K):null,W=D||L?i.createElement("div",{className:"".concat(C,"-meta-detail")},D,L):null;return i.createElement("div",(0,o.Z)({},B,{className:S}),G,W)})},A=M,x=n(16004),E=n(71230),T=n(15746),V=n(97647),ae=function(a,p){var m={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(m[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(m[s[d]]=a[s[d]]);return m};function q(a){var p=a.map(function(m,s){return i.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:"action-".concat(s)},i.createElement("span",null,m))});return p}var H=i.forwardRef(function(a,p){var m,s,d=i.useContext(O.E_),Z=d.getPrefixCls,P=d.direction,c=i.useContext(V.Z),K=function(fe){var ne;(ne=a.onTabChange)===null||ne===void 0||ne.call(a,fe)},B=function(){var fe;return i.Children.forEach(a.children,function(ne){ne&&ne.type&&ne.type===g&&(fe=!0)}),fe},C=a.prefixCls,S=a.className,G=a.extra,D=a.headStyle,L=D===void 0?{}:D,W=a.bodyStyle,ee=W===void 0?{}:W,I=a.title,se=a.loading,J=a.bordered,le=J===void 0?!0:J,re=a.size,ue=a.type,X=a.cover,te=a.actions,y=a.tabList,b=a.children,v=a.activeTabKey,F=a.defaultActiveTabKey,Y=a.tabBarExtraContent,ie=a.hoverable,N=a.tabProps,he=N===void 0?{}:N,ce=ae(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),h=Z("card",C),oe=ee.padding===0||ee.padding==="0px"?{padding:24}:void 0,w=i.createElement("div",{className:"".concat(h,"-loading-block")}),de=i.createElement("div",{className:"".concat(h,"-loading-content"),style:oe},i.createElement(E.Z,{gutter:8},i.createElement(T.Z,{span:22},w)),i.createElement(E.Z,{gutter:8},i.createElement(T.Z,{span:8},w),i.createElement(T.Z,{span:15},w)),i.createElement(E.Z,{gutter:8},i.createElement(T.Z,{span:6},w),i.createElement(T.Z,{span:18},w)),i.createElement(E.Z,{gutter:8},i.createElement(T.Z,{span:13},w),i.createElement(T.Z,{span:9},w)),i.createElement(E.Z,{gutter:8},i.createElement(T.Z,{span:4},w),i.createElement(T.Z,{span:3},w),i.createElement(T.Z,{span:16},w))),ve=v!==void 0,_e=(0,o.Z)((0,o.Z)({},he),(m={},(0,f.Z)(m,ve?"activeKey":"defaultActiveKey",ve?v:F),(0,f.Z)(m,"tabBarExtraContent",Y),m)),r,l=y&&y.length?i.createElement(x.Z,(0,o.Z)({size:"large"},_e,{className:"".concat(h,"-head-tabs"),onChange:K}),y.map(function(pe){return i.createElement(x.Z.TabPane,{tab:pe.tab,disabled:pe.disabled,key:pe.key})})):null;(I||G||l)&&(r=i.createElement("div",{className:"".concat(h,"-head"),style:L},i.createElement("div",{className:"".concat(h,"-head-wrapper")},I&&i.createElement("div",{className:"".concat(h,"-head-title")},I),G&&i.createElement("div",{className:"".concat(h,"-extra")},G)),l));var t=X?i.createElement("div",{className:"".concat(h,"-cover")},X):null,e=i.createElement("div",{className:"".concat(h,"-body"),style:ee},se?de:b),R=te&&te.length?i.createElement("ul",{className:"".concat(h,"-actions")},q(te)):null,Ee=(0,z.Z)(ce,["onTabChange"]),ye=re||c,ge=_()(h,(s={},(0,f.Z)(s,"".concat(h,"-loading"),se),(0,f.Z)(s,"".concat(h,"-bordered"),le),(0,f.Z)(s,"".concat(h,"-hoverable"),ie),(0,f.Z)(s,"".concat(h,"-contain-grid"),B()),(0,f.Z)(s,"".concat(h,"-contain-tabs"),y&&y.length),(0,f.Z)(s,"".concat(h,"-").concat(ye),ye),(0,f.Z)(s,"".concat(h,"-type-").concat(ue),!!ue),(0,f.Z)(s,"".concat(h,"-rtl"),P==="rtl"),s),S);return i.createElement("div",(0,o.Z)({ref:p},Ee,{className:ge}),r,t,e,R)});H.Grid=g,H.Meta=A;var U=H},58024:function(me,$,n){"use strict";var f=n(38663),o=n.n(f),i=n(70347),u=n.n(i),_=n(18106),z=n(13062),O=n(89032)}}]);
