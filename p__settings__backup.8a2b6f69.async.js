(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[155],{44169:function(ae,C,e){"use strict";e.r(C),e.d(C,{default:function(){return G}});var O=e(11849),te=e(49111),D=e(19650),ne=e(34792),F=e(48086),se=e(57663),v=e(71577),f=e(3182),x=e(2824),R=e(94043),n=e.n(R),g=e(21010);function $(){return Z.apply(this,arguments)}function Z(){return Z=(0,f.Z)(n().mark(function o(){return n().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,g.WY)("file/backup/list"));case 1:case"end":return l.stop()}},o)})),Z.apply(this,arguments)}function E(o){return j.apply(this,arguments)}function j(){return j=(0,f.Z)(n().mark(function o(i){return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.WY)(i,{method:"POST"}));case 1:case"end":return u.stop()}},o)})),j.apply(this,arguments)}function N(o,i){return S.apply(this,arguments)}function S(){return S=(0,f.Z)(n().mark(function o(i,l){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,g.WY)(i,{method:"POST",data:l}));case 1:case"end":return p.stop()}},o)})),S.apply(this,arguments)}var P=e(21059),Y=e(26139),A=e(43347),W=e(67265),k=e(3224),L=e(37476),M=e(5966),y=e(67294),V=e(58602),r=e(85893),w=function(){var i=(0,y.useRef)(),l=(0,y.useState)(!1),u=(0,x.Z)(l,2),p=u[0],I=u[1],H=(0,y.useState)(!1),T=(0,x.Z)(H,2),K=T[0],U=T[1],z=(0,y.useState)(),B=(0,x.Z)(z,2),J=B[0],Q=B[1],X=function(){var c=(0,f.Z)(n().mark(function s(a){var d,m,b,t;return n().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return I(!0),h.next=3,E(a.exportUrl);case 3:d=h.sent,m=new Blob(d),b=URL.createObjectURL(m),t=document.createElement("a"),t.href=b,t.download="file.json",document.body.appendChild(t),t.click(),document.body.removeChild(t),I(!1);case 13:case"end":return h.stop()}},s)}));return function(a){return c.apply(this,arguments)}}(),q=function(s){var a;(a=i.current)===null||a===void 0||a.setFields([{name:"importUrl",value:s.importUrl}]),U(!0)},_=[{title:"#",valueType:"indexBorder"},{title:"Name",dataIndex:"name"},{title:(0,r.jsx)(g._H,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(s,a){return[(0,r.jsx)(v.Z,{icon:(0,r.jsx)(P.Z,{}),type:"primary",onClick:function(){return X(a)},disabled:p,children:"Export"},0),(0,r.jsx)(v.Z,{icon:(0,r.jsx)(Y.Z,{}),danger:!0,onClick:function(){return q(a)},disabled:p,children:"Import"},1)]}}],ee={name:"file",beforeUpload:function(s){return Q(s),!1}},re=function(){var c=(0,f.Z)(n().mark(function s(a){var d,m;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=new FormData,d.append("file",J),t.next=4,N(a.importUrl,d);case 4:m=t.sent,m.succeeded&&(F.default.success("Imported!"),U(!1));case 6:case"end":return t.stop()}},s)}));return function(a){return c.apply(this,arguments)}}();return(0,r.jsxs)(W.ZP,{title:"Backup",extra:(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(v.Z,{children:"Backup"}),(0,r.jsx)(v.Z,{danger:!0,type:"primary",children:"Restore"})]}),children:[(0,r.jsx)(k.Z,{request:$,columns:_,rowKey:"name"}),(0,r.jsxs)(L.Y,{onVisibleChange:U,visible:K,formRef:i,title:"Import",onFinish:re,children:[(0,r.jsx)(M.Z,{name:"importUrl",disabled:!0,label:"Import Url"}),(0,r.jsxs)(V.Z,(0,O.Z)((0,O.Z)({},ee),{},{children:[(0,r.jsx)("p",{className:"ant-upload-drag-icon",children:(0,r.jsx)(A.Z,{})}),(0,r.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,r.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]}))]})]})},G=w}}]);