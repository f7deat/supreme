(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[872],{99950:function(C,E,t){"use strict";t.r(E);var c=t(62350),M=t(75443),s=t(57663),u=t(71577),O=t(49111),l=t(19650),v=t(94233),i=t(51890),f=t(34792),d=t(48086),r=t(9602),o=t(36571),a=t(29151),n=t(8212),T=t(73171),U=t(70844),A=t(27019),I=t(30381),R=t.n(I),W=t(67294),y=t(21010),h=t(73727),e=t(85893),K=function(){var p=(0,W.useRef)(),B=function(P){(0,o.fR)(P).then(function(_){if(_.succeeded){var D;d.default.success("deleted!"),(D=p.current)===null||D===void 0||D.reload()}else d.default.error("error!")})},L=[{title:"Name",dataIndex:"title",render:function(P,_){return(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(i.C,{src:_.thumbnail}),(0,e.jsx)("a",{href:"".concat(r.Z.domain,"/shop/product/").concat(_.url,"-").concat(_.id),target:"_blank",children:_.title})]})}},{title:"Created",render:function(P,_){return R()(_.modifiedDate).format("DD/MM/YYYY hh:mm:ss")},search:!1},{title:"View",dataIndex:"view",search:!1},{title:(0,e.jsx)(y._H,{id:"global.status",defaultMessage:"Status"}),dataIndex:"status",valueEnum:{0:{text:"Draft",status:"Default"},1:{text:"Active",status:"Processing"}}},{valueType:"option",render:function(P,_){return[(0,e.jsx)(h.rU,{to:"/commerce/products/center/".concat(_.id),children:(0,e.jsx)(u.Z,{type:"primary",icon:(0,e.jsx)(n.Z,{})})},0),(0,e.jsx)(M.Z,{title:"Are you sure to delete this?",onConfirm:function(){return B(_.id)},okText:"Yes",cancelText:"No",children:(0,e.jsx)(u.Z,{type:"primary",danger:!0,icon:(0,e.jsx)(T.Z,{})})},1)]}}],g=function(){return(0,e.jsx)(h.rU,{to:"/commerce/products/center",children:(0,e.jsx)(u.Z,{type:"primary",children:"Add new"})})};return(0,e.jsx)(U.ZP,{extra:(0,e.jsx)(g,{}),children:(0,e.jsx)(A.ZP,{headerTitle:"Danh s\xE1ch",rowKey:"id",search:{layout:"vertical"},request:a.iS,columns:L,rowSelection:{},actionRef:p})})};E.default=K},29151:function(C,E,t){"use strict";t.d(E,{iS:function(){return O},IY:function(){return v},k$:function(){return f}});var c=t(3182),M=t(94043),s=t.n(M),u=t(21010);function O(){return l.apply(this,arguments)}function l(){return l=(0,c.Z)(s().mark(function r(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.WY)("/product/list"));case 1:case"end":return a.stop()}},r)})),l.apply(this,arguments)}function v(r){return i.apply(this,arguments)}function i(){return i=(0,c.Z)(s().mark(function r(o){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.WY)("/product/add-new",{method:"POST",data:o}));case 1:case"end":return n.stop()}},r)})),i.apply(this,arguments)}function f(r){return d.apply(this,arguments)}function d(){return d=(0,c.Z)(s().mark(function r(o){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.WY)("/product/update-new",{method:"POST",data:o}));case 1:case"end":return n.stop()}},r)})),d.apply(this,arguments)}}}]);
