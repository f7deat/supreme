(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[633,142],{8212:function(U,x,r){"use strict";r.d(x,{Z:function(){return C}});var u=r(28991),m=r(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},X=n,D=r(27029),b=function(k,ae){return m.createElement(D.Z,(0,u.Z)((0,u.Z)({},k),{},{ref:ae,icon:X}))};b.displayName="EditOutlined";var C=m.forwardRef(b)},70347:function(){},47828:function(){},39144:function(U,x,r){"use strict";r.d(x,{Z:function(){return Te}});var u=r(96156),m=r(22122),n=r(67294),X=r(94184),D=r.n(X),b=r(98423),C=r(65632),P=function(h,d){var S={};for(var s in h)Object.prototype.hasOwnProperty.call(h,s)&&d.indexOf(s)<0&&(S[s]=h[s]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(h);g<s.length;g++)d.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(h,s[g])&&(S[s[g]]=h[s[g]]);return S},k=function(d){var S=d.prefixCls,s=d.className,g=d.hoverable,fe=g===void 0?!0:g,ce=P(d,["prefixCls","className","hoverable"]);return n.createElement(C.C,null,function(de){var le=de.getPrefixCls,te=le("card",S),H=D()("".concat(te,"-grid"),s,(0,u.Z)({},"".concat(te,"-grid-hoverable"),fe));return n.createElement("div",(0,m.Z)({},ce,{className:H}))})},ae=k,ie=function(h,d){var S={};for(var s in h)Object.prototype.hasOwnProperty.call(h,s)&&d.indexOf(s)<0&&(S[s]=h[s]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(h);g<s.length;g++)d.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(h,s[g])&&(S[s[g]]=h[s[g]]);return S},q=function(d){return n.createElement(C.C,null,function(S){var s=S.getPrefixCls,g=d.prefixCls,fe=d.className,ce=d.avatar,de=d.title,le=d.description,te=ie(d,["prefixCls","className","avatar","title","description"]),H=s("card",g),ve=D()("".concat(H,"-meta"),fe),ye=ce?n.createElement("div",{className:"".concat(H,"-meta-avatar")},ce):null,ue=de?n.createElement("div",{className:"".concat(H,"-meta-title")},de):null,me=le?n.createElement("div",{className:"".concat(H,"-meta-description")},le):null,be=ue||me?n.createElement("div",{className:"".concat(H,"-meta-detail")},ue,me):null;return n.createElement("div",(0,m.Z)({},te,{className:ve}),ye,be)})},T=q,_=r(51752),ee=r(71230),Z=r(15746),pe=r(97647),ke=function(h,d){var S={};for(var s in h)Object.prototype.hasOwnProperty.call(h,s)&&d.indexOf(s)<0&&(S[s]=h[s]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(h);g<s.length;g++)d.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(h,s[g])&&(S[s[g]]=h[s[g]]);return S};function He(h){var d=h.map(function(S,s){return n.createElement("li",{style:{width:"".concat(100/h.length,"%")},key:"action-".concat(s)},n.createElement("span",null,S))});return d}var Ze=function(d){var S,s,g=n.useContext(C.E_),fe=g.getPrefixCls,ce=g.direction,de=n.useContext(pe.Z),le=function(Pe){var oe;(oe=d.onTabChange)===null||oe===void 0||oe.call(d,Pe)},te=function(){var Pe;return n.Children.forEach(d.children,function(oe){oe&&oe.type&&oe.type===ae&&(Pe=!0)}),Pe},H=d.prefixCls,ve=d.className,ye=d.extra,ue=d.headStyle,me=ue===void 0?{}:ue,be=d.bodyStyle,Ne=be===void 0?{}:be,De=d.title,Re=d.loading,Ke=d.bordered,Ge=Ke===void 0?!0:Ke,Fe=d.size,we=d.type,Be=d.cover,he=d.actions,Ee=d.tabList,Ve=d.children,je=d.activeTabKey,M=d.defaultActiveTabKey,Le=d.tabBarExtraContent,Xe=d.hoverable,Ue=d.tabProps,_e=Ue===void 0?{}:Ue,Qe=ke(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=fe("card",H),Je=Ne.padding===0||Ne.padding==="0px"?{padding:24}:void 0,G=n.createElement("div",{className:"".concat(N,"-loading-block")}),Ye=n.createElement("div",{className:"".concat(N,"-loading-content"),style:Je},n.createElement(ee.Z,{gutter:8},n.createElement(Z.Z,{span:22},G)),n.createElement(ee.Z,{gutter:8},n.createElement(Z.Z,{span:8},G),n.createElement(Z.Z,{span:15},G)),n.createElement(ee.Z,{gutter:8},n.createElement(Z.Z,{span:6},G),n.createElement(Z.Z,{span:18},G)),n.createElement(ee.Z,{gutter:8},n.createElement(Z.Z,{span:13},G),n.createElement(Z.Z,{span:9},G)),n.createElement(ee.Z,{gutter:8},n.createElement(Z.Z,{span:4},G),n.createElement(Z.Z,{span:3},G),n.createElement(Z.Z,{span:16},G))),ze=je!==void 0,xe=(0,m.Z)((0,m.Z)({},_e),(S={},(0,u.Z)(S,ze?"activeKey":"defaultActiveKey",ze?je:M),(0,u.Z)(S,"tabBarExtraContent",Le),S)),Me,Oe=Ee&&Ee.length?n.createElement(_.Z,(0,m.Z)({size:"large"},xe,{className:"".concat(N,"-head-tabs"),onChange:le}),Ee.map(function(ge){return n.createElement(_.Z.TabPane,{tab:ge.tab,disabled:ge.disabled,key:ge.key})})):null;(De||ye||Oe)&&(Me=n.createElement("div",{className:"".concat(N,"-head"),style:me},n.createElement("div",{className:"".concat(N,"-head-wrapper")},De&&n.createElement("div",{className:"".concat(N,"-head-title")},De),ye&&n.createElement("div",{className:"".concat(N,"-extra")},ye)),Oe));var Se=Be?n.createElement("div",{className:"".concat(N,"-cover")},Be):null,qe=n.createElement("div",{className:"".concat(N,"-body"),style:Ne},Re?Ye:Ve),et=he&&he.length?n.createElement("ul",{className:"".concat(N,"-actions")},He(he)):null,tt=(0,b.Z)(Qe,["onTabChange"]),$e=Fe||de,nt=D()(N,(s={},(0,u.Z)(s,"".concat(N,"-loading"),Re),(0,u.Z)(s,"".concat(N,"-bordered"),Ge),(0,u.Z)(s,"".concat(N,"-hoverable"),Xe),(0,u.Z)(s,"".concat(N,"-contain-grid"),te()),(0,u.Z)(s,"".concat(N,"-contain-tabs"),Ee&&Ee.length),(0,u.Z)(s,"".concat(N,"-").concat($e),$e),(0,u.Z)(s,"".concat(N,"-type-").concat(we),!!we),(0,u.Z)(s,"".concat(N,"-rtl"),ce==="rtl"),s),ve);return n.createElement("div",(0,m.Z)({},tt,{className:nt}),Me,Se,qe,et)};Ze.Grid=ae,Ze.Meta=T;var Te=Ze},58024:function(U,x,r){"use strict";var u=r(38663),m=r.n(u),n=r(70347),X=r.n(n),D=r(18106),b=r(13062),C=r(89032)},15746:function(U,x,r){"use strict";var u=r(21584);x.Z=u.Z},89032:function(U,x,r){"use strict";var u=r(38663),m=r.n(u),n=r(6999)},71230:function(U,x,r){"use strict";var u=r(92820);x.Z=u.Z},13062:function(U,x,r){"use strict";var u=r(38663),m=r.n(u),n=r(6999)},59289:function(U,x,r){"use strict";r.d(x,{Z:function(){return ut}});var u=r(22122),m=r(96156),n=r(67294),X=r(94184),D=r.n(X),b=r(42550),C=r(65632),P=r(21687),k=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},ae=function(i,l){var e=i.prefixCls,t=i.component,o=t===void 0?"article":t,c=i.className,f=i["aria-label"],p=i.setContentRef,v=i.children,E=k(i,["prefixCls","component","className","aria-label","setContentRef","children"]),y=l;return p&&((0,P.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),y=(0,b.sQ)(l,p)),n.createElement(C.C,null,function(A){var R=A.getPrefixCls,Q=A.direction,B=o,I=R("typography",e),z=D()(I,(0,m.Z)({},"".concat(I,"-rtl"),Q==="rtl"),c);return n.createElement(B,(0,u.Z)({className:z,"aria-label":f,ref:y},E),v)})},ie=n.forwardRef(ae);ie.displayName="Typography";var q=ie,T=q,_=r(90484),ee=r(98423),Z=r(85061),pe=r(6610),ke=r(5991),He=r(10379),Ze=r(44144),Te=r(50344),h=r(20640),d=r.n(h),S=r(8212),s=r(79508),g=r(99165),fe=r(48717),ce=r(39559),de=r(42051),le=r(34952),te=r(32637),H=r(79370),ve=r(69713),ye=r(28481),ue=r(15105),me=r(28991),be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ne=be,De=r(27029),Re=function(i,l){return n.createElement(De.Z,(0,me.Z)((0,me.Z)({},i),{},{ref:l,icon:Ne}))};Re.displayName="EnterOutlined";var Ke=n.forwardRef(Re),Ge=r(45839),Fe=r(96159),we=function(i){var l=i.prefixCls,e=i["aria-label"],t=i.className,o=i.style,c=i.direction,f=i.maxLength,p=i.autoSize,v=p===void 0?!0:p,E=i.value,y=i.onSave,A=i.onCancel,R=i.onEnd,Q=i.enterIcon,B=Q===void 0?n.createElement(Ke,null):Q,I=n.useRef(),z=n.useRef(!1),ne=n.useRef(),J=n.useState(E),O=(0,ye.Z)(J,2),L=O[0],w=O[1];n.useEffect(function(){w(E)},[E]),n.useEffect(function(){if(I.current&&I.current.resizableTextArea){var W=I.current.resizableTextArea.textArea;W.focus();var K=W.value.length;W.setSelectionRange(K,K)}},[]);var j=function(K){var V=K.target;w(V.value.replace(/[\n\r]/g,""))},Y=function(){z.current=!0},$=function(){z.current=!1},Ie=function(K){var V=K.keyCode;z.current||(ne.current=V)},F=function(){y(L.trim())},Ce=function(K){var V=K.keyCode,re=K.ctrlKey,rt=K.altKey,at=K.metaKey,it=K.shiftKey;ne.current===V&&!z.current&&!re&&!rt&&!at&&!it&&(V===ue.Z.ENTER?(F(),R==null||R()):V===ue.Z.ESC&&A())},We=function(){F()},se=D()(l,"".concat(l,"-edit-content"),(0,m.Z)({},"".concat(l,"-rtl"),c==="rtl"),t);return n.createElement("div",{className:se,style:o},n.createElement(Ge.Z,{ref:I,maxLength:f,value:L,onChange:j,onKeyDown:Ie,onKeyUp:Ce,onCompositionStart:Y,onCompositionEnd:$,onBlur:We,"aria-label":e,autoSize:v}),B!==null?(0,Fe.Tm)(B,{className:"".concat(l,"-edit-content-confirm")}):null)},Be=we,he=r(73935),Ee=1,Ve=3,je=8,M,Le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Xe(a){var i=Array.prototype.slice.apply(a);return i.map(function(l){return"".concat(l,": ").concat(a.getPropertyValue(l),";")}).join("")}function Ue(a){var i=[];return a.forEach(function(l){var e=i[i.length-1];typeof l=="string"&&typeof e=="string"?i[i.length-1]+=l:i.push(l)}),i}function _e(a,i){a.setAttribute("aria-hidden","true");var l=window.getComputedStyle(i),e=Xe(l);a.setAttribute("style",e),a.style.position="fixed",a.style.left="0",a.style.height="auto",a.style.minHeight="auto",a.style.maxHeight="auto",a.style.paddingTop="0",a.style.paddingBottom="0",a.style.borderTopWidth="0",a.style.borderBottomWidth="0",a.style.top="-999999px",a.style.zIndex="-1000",a.style.textOverflow="clip",a.style.whiteSpace="normal",a.style.webkitLineClamp="none"}function Qe(a){var i=document.createElement("div");_e(i,a),i.appendChild(document.createTextNode("text")),document.body.appendChild(i);var l=i.getBoundingClientRect().height;return document.body.removeChild(i),l}var N=function(a,i,l,e,t){M||(M=document.createElement("div"),M.setAttribute("aria-hidden","true")),M.parentNode||document.body.appendChild(M);var o=i.rows,c=i.suffix,f=c===void 0?"":c,p=Qe(a),v=Math.round(p*o*100)/100;_e(M,a);var E=Ue((0,Te.Z)(l));(0,he.render)(n.createElement("div",{style:Le},n.createElement("span",{style:Le},E,f),n.createElement("span",{style:Le},e)),M);function y(){var O=Math.round(M.getBoundingClientRect().height*100)/100;return O-.1<=v}if(y())return(0,he.unmountComponentAtNode)(M),{content:l,text:M.innerHTML,ellipsis:!1};var A=Array.prototype.slice.apply(M.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(O){var L=O.nodeType;return L!==je}),R=Array.prototype.slice.apply(M.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,he.unmountComponentAtNode)(M);var Q=[];M.innerHTML="";var B=document.createElement("span");M.appendChild(B);var I=document.createTextNode(t+f);B.appendChild(I),R.forEach(function(O){M.appendChild(O)});function z(O){B.insertBefore(O,I)}function ne(O,L){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:L.length,Y=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,$=Math.floor((w+j)/2),Ie=L.slice(0,$);if(O.textContent=Ie,w>=j-1)for(var F=j;F>=w;F-=1){var Ce=L.slice(0,F);if(O.textContent=Ce,y()||!Ce)return F===L.length?{finished:!1,reactNode:L}:{finished:!0,reactNode:Ce}}return y()?ne(O,L,$,j,$):ne(O,L,w,$,Y)}function J(O,L){var w=O.nodeType;if(w===Ee)return z(O),y()?{finished:!1,reactNode:E[L]}:(B.removeChild(O),{finished:!0,reactNode:null});if(w===Ve){var j=O.textContent||"",Y=document.createTextNode(j);return z(Y),ne(Y,j)}return{finished:!1,reactNode:null}}return A.some(function(O,L){var w=J(O,L),j=w.finished,Y=w.reactNode;return Y&&Q.push(Y),j}),{content:Q,text:M.innerHTML,ellipsis:!0}},Je=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},G=(0,H.G)("webkitLineClamp"),Ye=(0,H.G)("textOverflow");function ze(a,i){var l=a.mark,e=a.code,t=a.underline,o=a.delete,c=a.strong,f=a.keyboard,p=a.italic,v=i;function E(y,A){!y||(v=n.createElement(A,{},v))}return E(c,"strong"),E(t,"u"),E(o,"del"),E(e,"code"),E(l,"mark"),E(f,"kbd"),E(p,"i"),v}function xe(a,i,l){return a===!0||a===void 0?i:a||l&&i}var Me="...",Oe=function(a){(0,He.Z)(l,a);var i=(0,Ze.Z)(l);function l(){var e;return(0,pe.Z)(this,l),e=i.apply(this,arguments),e.contentRef=n.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",t)},e.onExpandClick=function(t){var o,c=e.getEllipsis(),f=c.onExpand;e.setState({expanded:!0}),(o=f)===null||o===void 0||o(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var o=e.getEditable(),c=o.onChange;c==null||c(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,o;(o=(t=e.getEditable()).onCancel)===null||o===void 0||o.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var o=e.props,c=o.children,f=o.copyable,p=(0,u.Z)({},(0,_.Z)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),d()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var o=e.getEditable(),c=o.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){te.Z.cancel(e.rafId),e.rafId=(0,te.Z)(function(){e.syncEllipsis()})},e}return(0,ke.Z)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var o=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(t);(o!==t.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),te.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var o=this.state.edit,c=t||this.props,f=c.editable;return f?(0,u.Z)({editing:o},(0,_.Z)(f)==="object"?f:null):{editing:o}}},{key:"getEllipsis",value:function(t){var o=t||this.props,c=o.ellipsis;return c?(0,u.Z)({rows:1,expandable:!1},(0,_.Z)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,o=this.props,c=o.editable,f=o.copyable,p=this.getEllipsis(),v=p.rows,E=p.expandable,y=p.suffix,A=p.onEllipsis,R=p.tooltip;return y||R||c||f||E||!t||A?!1:v===1?Ye:G}},{key:"syncEllipsis",value:function(){var t=this.state,o=t.ellipsisText,c=t.isEllipsis,f=t.expanded,p=this.getEllipsis(),v=p.rows,E=p.suffix,y=p.onEllipsis,A=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){(0,P.Z)((0,Te.Z)(A).every(function(z){return typeof z=="string"}),"Typography","`ellipsis` should use string as children only.");var R=N(this.contentRef.current,{rows:v,suffix:E},A,this.renderOperations(!0),Me),Q=R.content,B=R.text,I=R.ellipsis;(o!==B||c!==I)&&(this.setState({ellipsisText:B,ellipsisContent:Q,isEllipsis:I}),c!==I&&y&&y(I))}}},{key:"renderExpand",value:function(t){var o=this.getEllipsis(),c=o.expandable,f=o.symbol,p=this.state,v=p.expanded,E=p.isEllipsis;if(!c||!t&&(v||!E))return null;var y;return f?y=f:y=this.expandStr,n.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},y)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var o=t.icon,c=t.tooltip,f=t.triggerType,p=f===void 0?["icon"]:f,v=(0,Te.Z)(c)[0]||this.editStr,E=typeof v=="string"?v:"";return p.indexOf("icon")!==-1?n.createElement(ve.Z,{key:"edit",title:c===!1?"":v},n.createElement(le.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":E},o||n.createElement(S.Z,{role:"button"}))):null}}},{key:"renderCopy",value:function(){var t=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),f=o.tooltips,p=o.icon,v=Array.isArray(f)?f:[f],E=Array.isArray(p)?p:[p],y=t?xe(v[1],this.copiedStr):xe(v[0],this.copyStr),A=t?this.copiedStr:this.copyStr,R=typeof y=="string"?y:A;return n.createElement(ve.Z,{key:"copy",title:y},n.createElement(le.Z,{className:D()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":R},t?xe(E[1],n.createElement(s.Z,null),!0):xe(E[0],n.createElement(g.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,o=t.children,c=t.className,f=t.style,p=this.context.direction,v=this.getEditable(),E=v.maxLength,y=v.autoSize,A=v.onEnd,R=v.enterIcon;return n.createElement(Be,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:A,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:E,autoSize:y,enterIcon:R})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var t=this,o=this.state,c=o.ellipsisContent,f=o.isEllipsis,p=o.expanded,v=this.props,E=v.component,y=v.children,A=v.className,R=v.type,Q=v.disabled,B=v.style,I=Je(v,["component","children","className","type","disabled","style"]),z=this.context.direction,ne=this.getEllipsis(),J=ne.rows,O=ne.suffix,L=ne.tooltip,w=this.getEditable(),j=w.triggerType,Y=j===void 0?["icon"]:j,$=this.getPrefixCls(),Ie=(0,ee.Z)(I,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,Z.Z)(ce.nf))),F=this.canUseCSSEllipsis(),Ce=J===1&&F,We=J&&J>1&&F,se=y;if(J&&f&&!p&&!F){var W=I.title,K=W||"";!W&&(typeof y=="string"||typeof y=="number")&&(K=String(y)),K=K.slice(String(c||"").length),se=n.createElement(n.Fragment,null,c,n.createElement("span",{title:K,"aria-hidden":"true"},Me),O),L&&(se=n.createElement(ve.Z,{title:L===!0?y:L},n.createElement("span",null,se)))}else se=n.createElement(n.Fragment,null,y,O);return se=ze(this.props,se),n.createElement(de.Z,{componentName:"Text"},function(V){var re,rt=V.edit,at=V.copy,it=V.copied,pt=V.expand;return t.editStr=rt,t.copyStr=at,t.copiedStr=it,t.expandStr=pt,n.createElement(fe.Z,{onResize:t.resizeOnNextFrame,disabled:F},n.createElement(T,(0,u.Z)({className:D()((re={},(0,m.Z)(re,"".concat($,"-").concat(R),R),(0,m.Z)(re,"".concat($,"-disabled"),Q),(0,m.Z)(re,"".concat($,"-ellipsis"),J),(0,m.Z)(re,"".concat($,"-single-line"),J===1&&!f),(0,m.Z)(re,"".concat($,"-ellipsis-single-line"),Ce),(0,m.Z)(re,"".concat($,"-ellipsis-multiple-line"),We),re),A),style:(0,u.Z)((0,u.Z)({},B),{WebkitLineClamp:We?J:void 0}),component:E,ref:t.contentRef,direction:z,onClick:Y.indexOf("text")!==-1?t.onEditClick:function(){}},Ie),se,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),o=t.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var o=t.children,c=t.editable;return(0,P.Z)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(n.Component);Oe.contextType=C.E_,Oe.defaultProps={children:""};var Se=Oe,qe=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},et=function(i){var l=i.ellipsis,e=qe(i,["ellipsis"]),t=n.useMemo(function(){return l&&(0,_.Z)(l)==="object"?(0,ee.Z)(l,["expandable","rows"]):l},[l]);return(0,P.Z)((0,_.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),n.createElement(Se,(0,u.Z)({},e,{ellipsis:t,component:"span"}))},tt=et,$e=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},nt=function(i,l){var e=i.ellipsis,t=i.rel,o=$e(i,["ellipsis","rel"]);(0,P.Z)((0,_.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=n.useRef(null);n.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=(0,u.Z)((0,u.Z)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete f.navigate,n.createElement(Se,(0,u.Z)({},f,{ref:c,ellipsis:!!e,component:"a"}))},ge=n.forwardRef(nt),Pe=r(93355),oe=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},lt=(0,Pe.a)(1,2,3,4,5),ot=function(i){var l=i.level,e=l===void 0?1:l,t=oe(i,["level"]),o;return lt.indexOf(e)!==-1?o="h".concat(e):((0,P.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),n.createElement(Se,(0,u.Z)({},t,{component:o}))},st=ot,ct=function(i){return n.createElement(Se,(0,u.Z)({},i,{component:"div"}))},dt=ct,Ae=T;Ae.Text=tt,Ae.Link=ge,Ae.Title=st,Ae.Paragraph=dt;var ut=Ae},402:function(U,x,r){"use strict";var u=r(38663),m=r.n(u),n=r(47828),X=r.n(n),D=r(22385),b=r(47673)},20640:function(U,x,r){"use strict";var u=r(11742),m={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function X(b){var C=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return b.replace(/#{\s*key\s*}/g,C)}function D(b,C){var P,k,ae,ie,q,T,_=!1;C||(C={}),P=C.debug||!1;try{ae=u(),ie=document.createRange(),q=document.getSelection(),T=document.createElement("span"),T.textContent=b,T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(Z){if(Z.stopPropagation(),C.format)if(Z.preventDefault(),typeof Z.clipboardData=="undefined"){P&&console.warn("unable to use e.clipboardData"),P&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var pe=m[C.format]||m.default;window.clipboardData.setData(pe,b)}else Z.clipboardData.clearData(),Z.clipboardData.setData(C.format,b);C.onCopy&&(Z.preventDefault(),C.onCopy(Z.clipboardData))}),document.body.appendChild(T),ie.selectNodeContents(T),q.addRange(ie);var ee=document.execCommand("copy");if(!ee)throw new Error("copy command was unsuccessful");_=!0}catch(Z){P&&console.error("unable to copy using execCommand: ",Z),P&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(C.format||"text",b),C.onCopy&&C.onCopy(window.clipboardData),_=!0}catch(pe){P&&console.error("unable to copy using clipboardData: ",pe),P&&console.error("falling back to prompt"),k=X("message"in C?C.message:n),window.prompt(k,b)}}finally{q&&(typeof q.removeRange=="function"?q.removeRange(ie):q.removeAllRanges()),T&&document.body.removeChild(T),ae()}return _}U.exports=D},79370:function(U,x,r){"use strict";r.d(x,{G:function(){return X}});var u=r(98924),m=function(b){if((0,u.Z)()&&window.document.documentElement){var C=Array.isArray(b)?b:[b],P=window.document.documentElement;return C.some(function(k){return k in P.style})}return!1},n=function(b,C){if(!m(b))return!1;var P=document.createElement("div"),k=P.style[b];return P.style[b]=C,P.style[b]!==k};function X(D,b){return!Array.isArray(D)&&b!==void 0?n(D,b):m(D)}},11742:function(U){U.exports=function(){var x=document.getSelection();if(!x.rangeCount)return function(){};for(var r=document.activeElement,u=[],m=0;m<x.rangeCount;m++)u.push(x.getRangeAt(m));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return x.removeAllRanges(),function(){x.type==="Caret"&&x.removeAllRanges(),x.rangeCount||u.forEach(function(n){x.addRange(n)}),r&&r.focus()}}}}]);