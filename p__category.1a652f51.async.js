(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[634],{64317:function(K,g,e){"use strict";var C=e(22122),i=e(28991),f=e(81253),t=e(67294),m=e(30702),u=e(22270),_=e(66758),h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],D=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=t.forwardRef(function(r,I){var c=r.fieldProps,y=r.children,R=r.params,o=r.proFieldProps,d=r.mode,s=r.valueEnum,n=r.request,a=r.showSearch,B=r.options,U=(0,f.Z)(r,h),L=(0,t.useContext)(_.Z);return t.createElement(m.Z,(0,C.Z)({mode:"edit",valueEnum:(0,u.h)(s),request:n,params:R,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:B,mode:d,showSearch:a,getPopupContainer:L.getPopupContainer},c),ref:I,proFieldProps:o},U),y)}),M=t.forwardRef(function(r,I){var c=r.fieldProps,y=r.children,R=r.params,o=r.proFieldProps,d=r.mode,s=r.valueEnum,n=r.request,a=r.options,B=(0,f.Z)(r,D),U=(0,i.Z)({options:a,mode:d||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},c),L=(0,t.useContext)(_.Z);return t.createElement(m.Z,(0,C.Z)({mode:"edit",valueEnum:(0,u.h)(s),request:n,params:R,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:L.getPopupContainer},U),ref:I,proFieldProps:o},B),y)}),l=p,v=M,O=l;O.SearchSelect=v,O.displayName="ProFormComponent",g.Z=O},90672:function(K,g,e){"use strict";var C=e(22122),i=e(81253),f=e(67294),t=e(30702),m=["fieldProps","proFieldProps"],u=function(h,D){var p=h.fieldProps,M=h.proFieldProps,l=(0,i.Z)(h,m);return f.createElement(t.Z,(0,C.Z)({ref:D,mode:"edit",valueType:"textarea",fieldProps:p,proFieldProps:M},l))};g.Z=f.forwardRef(u)},5966:function(K,g,e){"use strict";var C=e(22122),i=e(81253),f=e(67294),t=e(30702),m=["fieldProps","proFieldProps"],u=["fieldProps","proFieldProps"],_="text",h=function(l){var v=l.fieldProps,O=l.proFieldProps,r=(0,i.Z)(l,m);return f.createElement(t.Z,(0,C.Z)({mode:"edit",valueType:_,fieldProps:v,filedConfig:{valueType:_},proFieldProps:O},r))},D=function(l){var v=l.fieldProps,O=l.proFieldProps,r=(0,i.Z)(l,u);return f.createElement(t.Z,(0,C.Z)({mode:"edit",valueType:"password",fieldProps:v,proFieldProps:O,filedConfig:{valueType:_}},r))},p=h;p.Password=D,p.displayName="ProFormComponent",g.Z=p},31778:function(K,g,e){"use strict";e.r(g);var C=e(62350),i=e(75443),f=e(57663),t=e(71577),m=e(34792),u=e(48086),_=e(3182),h=e(2824),D=e(94043),p=e.n(D),M=e(70844),l=e(75408),v=e(21010),O=e(8212),r=e(73171),I=e(49101),c=e(51742),y=e(5966),R=e(90672),o=e(64317),d=e(71975),s=e(952),n=e(67294),a=e(85893),B=function(){var L=(0,v.YB)(),F=(0,n.useRef)(),z=(0,n.useState)(),S=(0,h.Z)(z,2),G=S[0],j=S[1],N=(0,n.useState)(),w=(0,h.Z)(N,2),Y=w[0],$=w[1],b=(0,n.useRef)();(0,n.useEffect)(function(){(0,c.rB)().then(function(A){return $(A.map(function(E){return{value:E.id,label:E.name}}))})},[]);var V=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(P){setTimeout(function(){P(!0)},E)})},H=function(){var A=(0,_.Z)(p().mark(function E(P){return p().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:(0,c.i8)(P).then(function(Z){Z.succeeded?u.default.success("succeeded!"):u.default.error(Z.message)});case 1:case"end":return T.stop()}},E)}));return function(P){return A.apply(this,arguments)}}(),Q=function(E){(0,c.uu)(E).then(function(P){if(P.succeeded){var W;b==null||(W=b.current)===null||W===void 0||W.reload(),u.default.success(P.message)}else u.default.error(P.message)})},J=function(E){(0,c.n3)(E).then(function(){var P=(0,_.Z)(p().mark(function W(T){var Z;return p().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return j(!0),x.next=3,V();case 3:F.current&&console.log("zxcz"),(Z=F.current)===null||Z===void 0||Z.setFields([{name:"name",value:T.name},{name:"normalizeName",value:T.normalizeName},{name:"description",value:T.description},{name:"parrentId",value:T.parrentId},{name:"status",value:T.status},{name:"thumbnail",value:T.thumbnail}]);case 5:case"end":return x.stop()}},W)}));return function(W){return P.apply(this,arguments)}}())},X=[{title:"T\xEAn",dataIndex:"name"},{title:"M\xF4 t\u1EA3",dataIndex:"description"},{title:(0,a.jsx)(v._H,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(E,P){return[(0,a.jsx)(t.Z,{type:"primary",icon:(0,a.jsx)(O.Z,{}),onClick:function(){return J(P.id)}}),(0,a.jsx)(i.Z,{title:"Are you sure to delete this?",onConfirm:function(){return Q(P.id)},okText:"Yes",cancelText:"No",children:(0,a.jsx)(t.Z,{type:"primary",danger:!0,icon:(0,a.jsx)(r.Z,{})})})]}}];return(0,a.jsxs)(M.ZP,{title:"Danh m\u1EE5c",children:[(0,a.jsx)(l.ZP,{headerTitle:L.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,a.jsx)(t.Z,{type:"primary",danger:!0,children:"Import"}),(0,a.jsx)(t.Z,{type:"primary",icon:(0,a.jsx)(I.Z,{}),onClick:function(){return j(!0)},children:"Th\xEAm m\u1EDBi"})]},request:c.CP,columns:X,rowSelection:{},actionRef:b}),(0,a.jsxs)(d.Z,{title:"Manager",formRef:F,onVisibleChange:j,visible:G,autoFocusFirstInput:!0,drawerProps:{forceRender:!0,destroyOnClose:!0},onFinish:H,children:[(0,a.jsxs)(s.ZP.Group,{children:[(0,a.jsx)(y.Z,{name:"name",width:"md",label:"T\xEAn danh m\u1EE5c"}),(0,a.jsx)(y.Z,{width:"md",name:"normalizeName",label:"Normalize name",tooltip:"Name without special character"})]}),(0,a.jsx)(R.Z,{name:"description",label:"Description"}),(0,a.jsxs)(s.ZP.Group,{children:[(0,a.jsx)(o.Z,{options:Y,width:"md",name:"parrentId",label:"Danh m\u1EE5c cha"}),(0,a.jsx)(o.Z,{width:"md",initialValue:1,options:[{value:0,label:"Draft"},{value:1,label:"Active"}],name:"status",label:"Tr\u1EA1ng th\xE1i"})]}),(0,a.jsx)(y.Z,{name:"thumbnail",label:"Thumbnail"})]})]})};g.default=B},51742:function(K,g,e){"use strict";e.d(g,{KQ:function(){return h},CP:function(){return p},i8:function(){return l},rB:function(){return O},uu:function(){return I},n3:function(){return y}});var C=e(11849),i=e(3182),f=e(94043),t=e.n(f),m=e(21010),u=e(61685),_="".concat(u.y,"/api/category");function h(){return D.apply(this,arguments)}function D(){return D=(0,i.Z)(t().mark(function o(){return t().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.WY)("".concat(_,"/all"),{method:"GET",headers:{authorization:u.o}}));case 1:case"end":return s.stop()}},o)})),D.apply(this,arguments)}function p(o){return M.apply(this,arguments)}function M(){return M=(0,i.Z)(t().mark(function o(d){return t().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)("".concat(_,"/list"),{method:"GET",params:(0,C.Z)({},d),headers:{authorization:u.o}}));case 1:case"end":return n.stop()}},o)})),M.apply(this,arguments)}function l(o){return v.apply(this,arguments)}function v(){return v=(0,i.Z)(t().mark(function o(d){return t().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)("".concat(_,"/add"),{method:"POST",headers:{authorization:u.o},data:d}));case 1:case"end":return n.stop()}},o)})),v.apply(this,arguments)}function O(){return r.apply(this,arguments)}function r(){return r=(0,i.Z)(t().mark(function o(){return t().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.WY)("".concat(_,"/list-parrent"),{method:"GET",headers:{authorization:u.o}}));case 1:case"end":return s.stop()}},o)})),r.apply(this,arguments)}function I(o){return c.apply(this,arguments)}function c(){return c=(0,i.Z)(t().mark(function o(d){return t().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)("".concat(_,"/delete/").concat(d),{method:"DELETE",headers:{authorization:u.o}}));case 1:case"end":return n.stop()}},o)})),c.apply(this,arguments)}function y(o){return R.apply(this,arguments)}function R(){return R=(0,i.Z)(t().mark(function o(d){return t().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)("".concat(_,"/").concat(d),{method:"GET",headers:{authorization:u.o}}));case 1:case"end":return n.stop()}},o)})),R.apply(this,arguments)}}}]);
