(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[642],{34442:function(){},86835:function(_e,Se,i){"use strict";i.d(Se,{Z:function(){return Ur}});var h=i(22122),ce=i(90484),H=i(28481),O=i(96156),a=i(67294),we=i(94184),ae=i.n(we),le=i(48526),he=i(65632),W=i(65223);function Me(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Pe(e,r){return(!r||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Ze(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return Pe(n.overflowY,r)||Pe(n.overflowX,r)||function(t){var l=function(o){if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch(s){return null}}(t);return!!l&&(l.clientHeight<t.scrollHeight||l.clientWidth<t.scrollWidth)}(e)}return!1}function Ce(e,r,n,t,l,o,s,c){return o<e&&s>r||o>e&&s<r?0:o<=e&&c<=n||s>=r&&c>=n?o-e-t:s>r&&c<n||o<e&&c>n?s-r+l:0}function Le(e,r){var n=window,t=r.scrollMode,l=r.block,o=r.inline,s=r.boundary,c=r.skipOverflowHiddenElements,d=typeof s=="function"?s:function(be){return be!==s};if(!Me(e))throw new TypeError("Invalid target");for(var g=document.scrollingElement||document.documentElement,C=[],m=e;Me(m)&&d(m);){if((m=m.parentElement)===g){C.push(m);break}m!=null&&m===document.body&&Ze(m)&&!Ze(document.documentElement)||m!=null&&Ze(m,c)&&C.push(m)}for(var u=n.visualViewport?n.visualViewport.width:innerWidth,p=n.visualViewport?n.visualViewport.height:innerHeight,x=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),M=v.height,b=v.width,w=v.top,D=v.right,T=v.bottom,V=v.left,E=l==="start"||l==="nearest"?w:l==="end"?T:w+M/2,I=o==="center"?V+b/2:o==="end"?D:V,Y=[],R=0;R<C.length;R++){var Z=C[R],$=Z.getBoundingClientRect(),B=$.height,A=$.width,j=$.top,N=$.right,Q=$.bottom,P=$.left;if(t==="if-needed"&&w>=0&&V>=0&&T<=p&&D<=u&&w>=j&&T<=Q&&V>=P&&D<=N)return Y;var ee=getComputedStyle(Z),re=parseInt(ee.borderLeftWidth,10),te=parseInt(ee.borderTopWidth,10),oe=parseInt(ee.borderRightWidth,10),J=parseInt(ee.borderBottomWidth,10),U=0,S=0,ie="offsetWidth"in Z?Z.offsetWidth-Z.clientWidth-re-oe:0,se="offsetHeight"in Z?Z.offsetHeight-Z.clientHeight-te-J:0;if(g===Z)U=l==="start"?E:l==="end"?E-p:l==="nearest"?Ce(f,f+p,p,te,J,f+E,f+E+M,M):E-p/2,S=o==="start"?I:o==="center"?I-u/2:o==="end"?I-u:Ce(x,x+u,u,re,oe,x+I,x+I+b,b),U=Math.max(0,U+f),S=Math.max(0,S+x);else{U=l==="start"?E-j-te:l==="end"?E-Q+J+se:l==="nearest"?Ce(j,Q,B,te,J+se,E,E+M,M):E-(j+B/2)+se/2,S=o==="start"?I-P-re:o==="center"?I-(P+A/2)+ie/2:o==="end"?I-N+oe+ie:Ce(P,N,A,re,oe+ie,I,I+b,b);var ye=Z.scrollLeft,pe=Z.scrollTop;E+=pe-(U=Math.max(0,Math.min(pe+U,Z.scrollHeight-B+se))),I+=ye-(S=Math.max(0,Math.min(ye+S,Z.scrollWidth-A+ie)))}Y.push({el:Z,top:U,left:S})}return Y}function Te(e){return e===Object(e)&&Object.keys(e).length!==0}function er(e,r){r===void 0&&(r="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(t){var l=t.el,o=t.top,s=t.left;l.scroll&&n?l.scroll({top:o,left:s,behavior:r}):(l.scrollTop=o,l.scrollLeft=s)})}function rr(e){return e===!1?{block:"end",inline:"nearest"}:Te(e)?e:{block:"start",inline:"nearest"}}function tr(e,r){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Te(r)&&typeof r.behavior=="function")return r.behavior(n?Le(e,r):[]);if(!!n){var t=rr(r);return er(Le(e,t),t.behavior)}}var nr=tr,ar=["parentNode"],lr="form_item";function me(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ve(e,r){if(!!e.length){var n=e.join("_");if(r)return"".concat(r,"_").concat(n);var t=ar.indexOf(n)>=0;return t?"".concat(lr,"_").concat(n):n}}function Ae(e){var r=me(e);return r.join("_")}function je(e){var r=(0,le.cI)(),n=(0,H.Z)(r,1),t=n[0],l=a.useRef({}),o=a.useMemo(function(){return e!=null?e:(0,h.Z)((0,h.Z)({},t),{__INTERNAL__:{itemRef:function(c){return function(d){var g=Ae(c);d?l.current[g]=d:delete l.current[g]}}},scrollToField:function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=me(c),C=Ve(g,o.__INTERNAL__.name),m=C?document.getElementById(C):null;m&&nr(m,(0,h.Z)({scrollMode:"if-needed",block:"nearest"},d))},getFieldInstance:function(c){var d=Ae(c);return l.current[d]}})},[e,t]);return[o]}var We=i(97647),or=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n},ir=function(r,n){var t,l=a.useContext(We.Z),o=a.useContext(he.E_),s=o.getPrefixCls,c=o.direction,d=o.form,g=r.prefixCls,C=r.className,m=C===void 0?"":C,u=r.size,p=u===void 0?l:u,x=r.form,f=r.colon,v=r.labelAlign,M=r.labelWrap,b=r.labelCol,w=r.wrapperCol,D=r.hideRequiredMark,T=r.layout,V=T===void 0?"horizontal":T,E=r.scrollToFirstError,I=r.requiredMark,Y=r.onFinishFailed,R=r.name,Z=or(r,["prefixCls","className","size","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),$=(0,a.useMemo)(function(){return I!==void 0?I:d&&d.requiredMark!==void 0?d.requiredMark:!D},[D,I,d]),B=f!=null?f:d==null?void 0:d.colon,A=s("form",g),j=ae()(A,(t={},(0,O.Z)(t,"".concat(A,"-").concat(V),!0),(0,O.Z)(t,"".concat(A,"-hide-required-mark"),$===!1),(0,O.Z)(t,"".concat(A,"-rtl"),c==="rtl"),(0,O.Z)(t,"".concat(A,"-").concat(p),p),t),m),N=je(x),Q=(0,H.Z)(N,1),P=Q[0],ee=P.__INTERNAL__;ee.name=R;var re=(0,a.useMemo)(function(){return{name:R,labelAlign:v,labelCol:b,labelWrap:M,wrapperCol:w,vertical:V==="vertical",colon:B,requiredMark:$,itemRef:ee.itemRef,form:P}},[R,v,b,w,V,B,$,P]);a.useImperativeHandle(n,function(){return P});var te=function(J){Y==null||Y(J);var U={block:"nearest"};E&&J.errorFields.length&&((0,ce.Z)(E)==="object"&&(U=E),P.scrollToField(J.errorFields[0].name,U))};return a.createElement(We.q,{size:p},a.createElement(W.q3.Provider,{value:re},a.createElement(le.ZP,(0,h.Z)({id:R},Z,{name:R,onFinishFailed:te,form:P,className:j}))))},sr=a.forwardRef(ir),ur=sr,k=i(85061),De=i(42550),cr=i(30470),mr=i(98423),dr=i(38819),fr=i(68855),vr=i(43061),gr=i(7085),hr=i(92820),Cr=i(93355),q=i(21687),yr=i(1870),$e=i(21584),pr=i(42051),br=i(85636),Er=i(61580),Zr=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n};function Fr(e){return e?(0,ce.Z)(e)==="object"&&!a.isValidElement(e)?e:{title:e}:null}var xr=function(r){var n=r.prefixCls,t=r.label,l=r.htmlFor,o=r.labelCol,s=r.labelAlign,c=r.colon,d=r.required,g=r.requiredMark,C=r.tooltip,m=(0,pr.E)("Form"),u=(0,H.Z)(m,1),p=u[0];return t?a.createElement(W.q3.Consumer,{key:"label"},function(x){var f,v=x.vertical,M=x.labelAlign,b=x.labelCol,w=x.labelWrap,D=x.colon,T,V=o||b||{},E=s||M,I="".concat(n,"-item-label"),Y=ae()(I,E==="left"&&"".concat(I,"-left"),V.className,(0,O.Z)({},"".concat(I,"-wrap"),!!w)),R=t,Z=c===!0||D!==!1&&c!==!1,$=Z&&!v;$&&typeof t=="string"&&t.trim()!==""&&(R=t.replace(/[:|：]\s*$/,""));var B=Fr(C);if(B){var A=B.icon,j=A===void 0?a.createElement(yr.Z,null):A,N=Zr(B,["icon"]),Q=a.createElement(Er.Z,N,a.cloneElement(j,{className:"".concat(n,"-item-tooltip"),title:""}));R=a.createElement(a.Fragment,null,R,Q)}g==="optional"&&!d&&(R=a.createElement(a.Fragment,null,R,a.createElement("span",{className:"".concat(n,"-item-optional"),title:""},(p==null?void 0:p.optional)||((T=br.Z.Form)===null||T===void 0?void 0:T.optional))));var P=ae()((f={},(0,O.Z)(f,"".concat(n,"-item-required"),d),(0,O.Z)(f,"".concat(n,"-item-required-mark-optional"),g==="optional"),(0,O.Z)(f,"".concat(n,"-item-no-colon"),!Z),f));return a.createElement($e.Z,(0,h.Z)({},V,{className:Y}),a.createElement("label",{htmlFor:l,className:P,title:typeof t=="string"?t:""},R))}):null},Ir=xr,Ue=i(63441),ze=i(33603),Be=[];function Fe(e,r,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(n,"-").concat(t),error:e,errorStatus:r}}function Ke(e){var r=e.help,n=e.helpStatus,t=e.errors,l=t===void 0?Be:t,o=e.warnings,s=o===void 0?Be:o,c=e.className,d=a.useContext(W.Rk),g=d.prefixCls,C=a.useContext(he.E_),m=C.getPrefixCls,u="".concat(g,"-item-explain"),p=m(),x=a.useMemo(function(){return r!=null?[Fe(r,n,"help")]:[].concat((0,k.Z)(l.map(function(f,v){return Fe(f,"error","error",v)})),(0,k.Z)(s.map(function(f,v){return Fe(f,"warning","warning",v)})))},[r,n,l,s]);return a.createElement(Ue.Z,(0,h.Z)({},ze.ZP,{motionName:"".concat(p,"-show-help"),motionAppear:!1,motionEnter:!1,visible:!!x.length,onLeaveStart:function(v){return v.style.height="auto",{height:v.offsetHeight}}}),function(f){var v=f.className,M=f.style;return a.createElement("div",{className:ae()(u,v,c),style:M},a.createElement(Ue.V,(0,h.Z)({keys:x},ze.ZP,{motionName:"".concat(p,"-show-help-item"),component:!1}),function(b){var w=b.key,D=b.error,T=b.errorStatus,V=b.className,E=b.style;return a.createElement("div",{key:w,role:"alert",className:ae()(V,(0,O.Z)({},"".concat(u,"-").concat(T),T)),style:E},D)}))})}var Rr=function(r){var n=r.prefixCls,t=r.status,l=r.wrapperCol,o=r.children,s=r.errors,c=r.warnings,d=r._internalItemRender,g=r.extra,C=r.help,m="".concat(n,"-item"),u=a.useContext(W.q3),p=l||u.wrapperCol||{},x=ae()("".concat(m,"-control"),p.className),f=a.useMemo(function(){return(0,h.Z)({},u)},[u]);delete f.labelCol,delete f.wrapperCol;var v=a.createElement("div",{className:"".concat(m,"-control-input")},a.createElement("div",{className:"".concat(m,"-control-input-content")},o)),M=a.useMemo(function(){return{prefixCls:n,status:t}},[n,t]),b=a.createElement(W.Rk.Provider,{value:M},a.createElement(Ke,{errors:s,warnings:c,help:C,helpStatus:t,className:"".concat(m,"-explain-connected")})),w=g?a.createElement("div",{className:"".concat(m,"-extra")},g):null,D=d&&d.mark==="pro_table_render"&&d.render?d.render(r,{input:v,errorList:b,extra:w}):a.createElement(a.Fragment,null,v,b,w);return a.createElement(W.q3.Provider,{value:f},a.createElement($e.Z,(0,h.Z)({},p,{className:x}),D))},Nr=Rr,He=i(96159),ke=i(75164);function Or(e){var r=a.useState(e),n=(0,H.Z)(r,2),t=n[0],l=n[1],o=(0,a.useRef)(null),s=(0,a.useRef)([]),c=(0,a.useRef)(!1);a.useEffect(function(){return c.current=!1,function(){c.current=!0,ke.Z.cancel(o.current),o.current=null}},[]);function d(g){c.current||(o.current===null&&(s.current=[],o.current=(0,ke.Z)(function(){o.current=null,l(function(C){var m=C;return s.current.forEach(function(u){m=u(m)}),m})})),s.current.push(g))}return[t,d]}function Ye(e){var r=a.useState(e),n=(0,H.Z)(r,2),t=n[0],l=n[1];return a.useEffect(function(){var o=setTimeout(function(){l(e)},e.length?0:10);return function(){clearTimeout(o)}},[e]),t}function Sr(){var e=a.useContext(W.q3),r=e.itemRef,n=a.useRef({});function t(l,o){var s=o&&(0,ce.Z)(o)==="object"&&o.ref,c=l.join("_");return(n.current.name!==c||n.current.originRef!==s)&&(n.current.name=c,n.current.originRef=s,n.current.ref=(0,De.sQ)(r(l),s)),n.current.ref}return t}var wr=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n},Mr="__SPLIT__",Yr=(0,Cr.b)("success","warning","error","validating",""),Pr=a.memo(function(e){var r=e.children;return r},function(e,r){return e.value===r.value&&e.update===r.update});function Lr(e){return e===null&&(0,q.Z)(!1,"Form.Item","`null` is passed as `name` property"),e!=null}function Qe(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}}var Tr={success:dr.Z,warning:fr.Z,error:vr.Z,validating:gr.Z};function Vr(e){var r=e.name,n=e.noStyle,t=e.dependencies,l=e.prefixCls,o=e.style,s=e.className,c=e.shouldUpdate,d=e.hasFeedback,g=e.help,C=e.rules,m=e.validateStatus,u=e.children,p=e.required,x=e.label,f=e.messageVariables,v=e.trigger,M=v===void 0?"onChange":v,b=e.validateTrigger,w=e.hidden,D=wr(e,["name","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),T=(0,a.useContext)(he.E_),V=T.getPrefixCls,E=(0,a.useContext)(W.q3),I=E.name,Y=E.requiredMark,R=typeof u=="function",Z=(0,a.useContext)(W.qI),$=(0,a.useContext)(le.zb),B=$.validateTrigger,A=b!==void 0?b:B,j=Lr(r),N=V("form",l),Q=a.useContext(le.ZM),P=a.useRef(),ee=Or({}),re=(0,H.Z)(ee,2),te=re[0],oe=re[1],J=(0,cr.Z)(function(){return Qe()}),U=(0,H.Z)(J,2),S=U[0],ie=U[1],se=function(F){var K=Q==null?void 0:Q.getKey(F.name);if(ie(F.destroy?Qe():F,!0),n&&Z){var y=F.name;if(F.destroy)y=P.current||y;else if(K!==void 0){var X=(0,H.Z)(K,2),fe=X[0],ne=X[1];y=[fe].concat((0,k.Z)(ne)),P.current=y}Z(F,y)}},ye=function(F,K){oe(function(y){var X=(0,h.Z)({},y),fe=[].concat((0,k.Z)(F.name.slice(0,-1)),(0,k.Z)(K)),ne=fe.join(Mr);return F.destroy?delete X[ne]:X[ne]=F,X})},pe=a.useMemo(function(){var z=(0,k.Z)(S.errors),F=(0,k.Z)(S.warnings);return Object.values(te).forEach(function(K){z.push.apply(z,(0,k.Z)(K.errors||[])),F.push.apply(F,(0,k.Z)(K.warnings||[]))}),[z,F]},[te,S.errors,S.warnings]),be=(0,H.Z)(pe,2),zr=be[0],Br=be[1],xe=Ye(zr),Ie=Ye(Br),Kr=Sr(),L="";m!==void 0?L=m:(S==null?void 0:S.validating)?L="validating":xe.length?L="error":Ie.length?L="warning":(S==null?void 0:S.touched)&&(L="success");var Hr=(0,a.useMemo)(function(){var z;if(d){var F=L&&Tr[L];z=F?a.createElement("span",{className:ae()("".concat(N,"-item-feedback-icon"),"".concat(N,"-item-feedback-icon-").concat(L))},a.createElement(F,null)):null}return{status:L,hasFeedback:d,feedbackIcon:z,isFormItemInput:!0}},[L,d]);function Xe(z,F,K){var y;if(n&&!w)return z;var X=(y={},(0,O.Z)(y,"".concat(N,"-item"),!0),(0,O.Z)(y,"".concat(N,"-item-with-help"),g!=null||xe.length||Ie.length),(0,O.Z)(y,"".concat(s),!!s),(0,O.Z)(y,"".concat(N,"-item-has-feedback"),L&&d),(0,O.Z)(y,"".concat(N,"-item-has-success"),L==="success"),(0,O.Z)(y,"".concat(N,"-item-has-warning"),L==="warning"),(0,O.Z)(y,"".concat(N,"-item-has-error"),L==="error"),(0,O.Z)(y,"".concat(N,"-item-is-validating"),L==="validating"),(0,O.Z)(y,"".concat(N,"-item-hidden"),w),y);return a.createElement(hr.Z,(0,h.Z)({className:ae()(X),style:o,key:"row"},(0,mr.Z)(D,["colon","extra","fieldKey","requiredMark","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelWrap","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),a.createElement(Ir,(0,h.Z)({htmlFor:F,required:K,requiredMark:Y},e,{prefixCls:N})),a.createElement(Nr,(0,h.Z)({},e,S,{errors:xe,warnings:Ie,prefixCls:N,status:L,help:g}),a.createElement(W.qI.Provider,{value:ye},a.createElement(W.aM.Provider,{value:Hr},z))))}if(!j&&!R&&!t)return Xe(u);var de={};return typeof x=="string"?de.label=x:r&&(de.label=String(r)),f&&(de=(0,h.Z)((0,h.Z)({},de),f)),a.createElement(le.gN,(0,h.Z)({},e,{messageVariables:de,trigger:M,validateTrigger:A,onMetaChange:se}),function(z,F,K){var y=me(r).length&&F?F.name:[],X=Ve(y,I),fe=p!==void 0?p:!!(C&&C.some(function(G){if(G&&(0,ce.Z)(G)==="object"&&G.required&&!G.warningOnly)return!0;if(typeof G=="function"){var ue=G(K);return ue&&ue.required&&!ue.warningOnly}return!1})),ne=(0,h.Z)({},z),ve=null;if((0,q.Z)(!(c&&t),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(u)&&j)(0,q.Z)(!1,"Form.Item","`children` is array of render props cannot have `name`."),ve=u;else if(R&&(!(c||t)||j))(0,q.Z)(!!(c||t),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),(0,q.Z)(!j,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(t&&!R&&!j)(0,q.Z)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");else if((0,He.l$)(u)){(0,q.Z)(u.props.defaultValue===void 0,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var ge=(0,h.Z)((0,h.Z)({},u.props),ne);ge.id||(ge.id=X),(0,De.Yr)(u)&&(ge.ref=Kr(y,u));var kr=new Set([].concat((0,k.Z)(me(M)),(0,k.Z)(me(A))));kr.forEach(function(G){ge[G]=function(){for(var ue,qe,Re,Je,Ne,Ge=arguments.length,Oe=new Array(Ge),Ee=0;Ee<Ge;Ee++)Oe[Ee]=arguments[Ee];(Re=ne[G])===null||Re===void 0||(ue=Re).call.apply(ue,[ne].concat(Oe)),(Ne=(Je=u.props)[G])===null||Ne===void 0||(qe=Ne).call.apply(qe,[Je].concat(Oe))}}),ve=a.createElement(Pr,{value:ne[e.valuePropName||"value"],update:u},(0,He.Tm)(u,ge))}else R&&(c||t)&&!j?ve=u(K):((0,q.Z)(!y.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),ve=u);return Xe(ve,X,fe)})}var Ar=Vr,jr=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n},Wr=function(r){var n=r.prefixCls,t=r.children,l=jr(r,["prefixCls","children"]);(0,q.Z)(!!l.name,"Form.List","Miss `name` prop.");var o=a.useContext(he.E_),s=o.getPrefixCls,c=s("form",n),d=a.useMemo(function(){return{prefixCls:c,status:"error"}},[c]);return a.createElement(le.aV,l,function(g,C,m){return a.createElement(W.Rk.Provider,{value:d},t(g.map(function(u){return(0,h.Z)((0,h.Z)({},u),{fieldKey:u.key})}),C,{errors:m.errors,warnings:m.warnings}))})},Dr=Wr;function $r(){var e=(0,a.useContext)(W.q3),r=e.form;return r}var _=ur;_.Item=Ar,_.List=Dr,_.ErrorList=Ke,_.useForm=je,_.useFormInstance=$r,_.useWatch=le.qo,_.Provider=W.RV,_.create=function(){(0,q.Z)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};var Ur=_},9715:function(_e,Se,i){"use strict";var h=i(38663),ce=i.n(h),H=i(34442),O=i.n(H),a=i(6999),we=i(22385)}}]);
