(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[844],{64335:function(oe,z,l){"use strict";var I=l(67294),$=(0,I.createContext)({});z.Z=$},21349:function(oe,z,l){"use strict";var I=l(84305),$=l(39559),E=l(53645),A=l.n(E),F=l(67294),Q=l(94184),P=l.n(Q),H=l(64335),D=function(N){var M=(0,F.useContext)(H.Z),q=N.children,j=N.contentWidth,Z=N.className,G=N.style,w=(0,F.useContext)($.ZP.ConfigContext),K=w.getPrefixCls,U=N.prefixCls||K("pro"),ie=j||M.contentWidth,X="".concat(U,"-grid-content");return F.createElement("div",{className:P()(X,Z,{wide:ie==="Fixed"}),style:G},F.createElement("div",{className:"".concat(U,"-grid-content-children")},q))};z.Z=D},70844:function(oe,z,l){"use strict";l.d(z,{ZP:function(){return Bt}});var I=l(38663),$=l(70883),E=l(22122),A=l(96156),F=l(6610),Q=l(5991),P=l(10379),H=l(44144),D=l(90484),a=l(67294),N=l(94184),M=l.n(N),q=l(98423),j=l(48717),Z=l(65632),G=l(85061),w=l(75164);function K(o){var e,r=function(i){return function(){e=null,o.apply(void 0,(0,G.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,d=new Array(i),c=0;c<i;c++)d[c]=arguments[c];e=(0,w.Z)(r(d))}};return t.cancel=function(){return w.Z.cancel(e)},t}function U(){return function(e,r,t){var n=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(r))return n;var c=K(n.bind(this));return i=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),i=!1,c}}}}var ie=l(64019);function X(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ue(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function ve(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var me=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Y=[];function jt(){return Y}function he(o,e){if(!!o){var r=Y.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},Y.push(r),me.forEach(function(t){r.eventHandlers[t]=(0,ie.Z)(o,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function ge(o){var e=Y.find(function(r){var t=r.affixList.some(function(n){return n===o});return t&&(r.affixList=r.affixList.filter(function(n){return n!==o})),t});e&&e.affixList.length===0&&(Y=Y.filter(function(r){return r!==e}),me.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var Ce=function(o,e,r,t){var n=arguments.length,i=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,d;if((typeof Reflect=="undefined"?"undefined":(0,D.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,r,t);else for(var c=o.length-1;c>=0;c--)(d=o[c])&&(i=(n<3?d(i):n>3?d(e,r,i):d(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};function Le(){return typeof window!="undefined"?window:null}var V;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(V||(V={}));var re=function(o){(0,P.Z)(r,o);var e=(0,H.Z)(r);function r(){var t;return(0,F.Z)(this,r),t=e.apply(this,arguments),t.state={status:V.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props,i=n.offsetBottom,d=n.offsetTop;return i===void 0&&d===void 0?0:d},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,i=n.status,d=n.lastAffix,c=t.props.onChange,f=t.getTargetFunc();if(!(i!==V.Prepare||!t.fixedNode||!t.placeholderNode||!f)){var m=t.getOffsetTop(),v=t.getOffsetBottom(),h=f();if(!!h){var s={status:V.None},u=X(h),g=X(t.placeholderNode),y=ue(g,u,m),b=ve(g,u,v);y!==void 0?(s.affixStyle={position:"fixed",top:y,width:g.width,height:g.height},s.placeholderStyle={width:g.width,height:g.height}):b!==void 0&&(s.affixStyle={position:"fixed",bottom:b,width:g.width,height:g.height},s.placeholderStyle={width:g.width,height:g.height}),s.lastAffix=!!s.affixStyle,c&&d!==s.lastAffix&&c(s.lastAffix),t.setState(s)}}},t.prepareMeasure=function(){if(t.setState({status:V.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t}return(0,Q.Z)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:n||Le}},{key:"componentDidMount",value:function(){var n=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){he(i(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var i=this.state.prevTarget,d=this.getTargetFunc(),c=(d==null?void 0:d())||null;i!==c&&(ge(this),c&&(he(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ge(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),i=this.state.affixStyle;if(n&&i){var d=this.getOffsetTop(),c=this.getOffsetBottom(),f=n();if(f&&this.placeholderNode){var m=X(f),v=X(this.placeholderNode),h=ue(v,m,d),s=ve(v,m,c);if(h!==void 0&&i.top===h||s!==void 0&&i.bottom===s)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,i=this.context.getPrefixCls,d=this.state,c=d.affixStyle,f=d.placeholderStyle,m=this.props,v=m.prefixCls,h=m.children,s=M()((0,A.Z)({},i("affix",v),!!c)),u=(0,q.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return a.createElement(j.Z,{onResize:function(){n.updatePosition()}},a.createElement("div",(0,E.Z)({},u,{ref:this.savePlaceholderNode}),c&&a.createElement("div",{style:f,"aria-hidden":"true"}),a.createElement("div",{className:s,ref:this.saveFixedNode,style:c},a.createElement(j.Z,{onResize:function(){n.updatePosition()}},h))))}}]),r}(a.Component);re.contextType=Z.E_,Ce([U()],re.prototype,"updatePosition",null),Ce([U()],re.prototype,"lazyUpdatePosition",null);var Ie=re,Kt=l(84305),le=l(39559),kt=l(59903),Gt=l(81262),Xt=l(30887),Yt=l(59250),Vt=l(94233),xe=l(28481),p=l(28991),Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},He=Fe,ye=l(27029),be=function(e,r){return a.createElement(ye.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:r,icon:He}))};be.displayName="ArrowLeftOutlined";var Ue=a.forwardRef(be),We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},ze=We,pe=function(e,r){return a.createElement(ye.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:r,icon:ze}))};pe.displayName="ArrowRightOutlined";var $e=a.forwardRef(pe),je=l(50344),Ke=l(57254),ke=l(81555),Ge=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r},Pe=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.children,d=e.overlay,c=e.dropdownProps,f=Ge(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=a.useContext(Z.E_),v=m.getPrefixCls,h=v("breadcrumb",r),s=function(y){return d?a.createElement(ke.Z,(0,E.Z)({overlay:d,placement:"bottomCenter"},c),a.createElement("span",{className:"".concat(h,"-overlay-link")},y,a.createElement(Ke.Z,null))):y},u;return"href"in f?u=a.createElement("a",(0,E.Z)({className:"".concat(h,"-link")},f),i):u=a.createElement("span",(0,E.Z)({className:"".concat(h,"-link")},f),i),u=s(u),i?a.createElement("span",null,u,n&&a.createElement("span",{className:"".concat(h,"-separator")},n)):null};Pe.__ANT_BREADCRUMB_ITEM=!0;var Ee=Pe,Ne=function(e){var r=e.children,t=a.useContext(Z.E_),n=t.getPrefixCls,i=n("breadcrumb");return a.createElement("span",{className:"".concat(i,"-separator")},r||"/")};Ne.__ANT_BREADCRUMB_SEPARATOR=!0;var Xe=Ne,Re=l(14289),Ye=l(21687),Ve=l(96159),Je=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function Qe(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,i){return e[i]||n});return t}function qe(o,e,r,t){var n=r.indexOf(o)===r.length-1,i=Qe(o,e);return n?a.createElement("span",null,i):a.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Ze=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},_e=function(e,r,t){var n=(0,G.Z)(e),i=Ze(r||"",t);return i&&n.push(i),n},se=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.style,d=e.className,c=e.routes,f=e.children,m=e.itemRender,v=m===void 0?qe:m,h=e.params,s=h===void 0?{}:h,u=Je(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),g=a.useContext(Z.E_),y=g.getPrefixCls,b=g.direction,C,O=y("breadcrumb",r);if(c&&c.length>0){var R=[];C=c.map(function(x){var B=Ze(x.path,s);B&&R.push(B);var S;return x.children&&x.children.length&&(S=a.createElement(Re.Z,null,x.children.map(function(L){return a.createElement(Re.Z.Item,{key:L.path||L.breadcrumbName},v(L,s,c,_e(R,L.path,s)))}))),a.createElement(Ee,{overlay:S,separator:n,key:B||x.breadcrumbName},v(x,s,c,R))})}else f&&(C=(0,je.Z)(f).map(function(x,B){return x&&((0,Ye.Z)(x.type&&(x.type.__ANT_BREADCRUMB_ITEM===!0||x.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,Ve.Tm)(x,{separator:n,key:B}))}));var T=M()(O,(0,A.Z)({},"".concat(O,"-rtl"),b==="rtl"),d);return a.createElement("div",(0,E.Z)({className:T,style:i},u),C)};se.Item=Ee,se.Separator=Xe;var et=se,tt=et,rt=l(51890),at=l(34952),nt=l(42051),ot=function(e,r,t){return!r||!t?null:a.createElement(nt.Z,{componentName:"PageHeader"},function(n){var i=n.back;return a.createElement("div",{className:"".concat(e,"-back")},a.createElement(at.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":i},r))})},it=function(e){return a.createElement(tt,e)},lt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?a.createElement($e,null):a.createElement(Ue,null)},st=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,i=r.avatar,d=r.subTitle,c=r.tags,f=r.extra,m=r.onBack,v="".concat(e,"-heading"),h=n||d||c||f;if(!h)return null;var s=lt(r,t),u=ot(e,s,m),g=u||i||h;return a.createElement("div",{className:v},g&&a.createElement("div",{className:"".concat(v,"-left")},u,i&&a.createElement(rt.C,i),n&&a.createElement("span",{className:"".concat(v,"-title"),title:typeof n=="string"?n:void 0},n),d&&a.createElement("span",{className:"".concat(v,"-sub-title"),title:typeof d=="string"?d:void 0},d),c&&a.createElement("span",{className:"".concat(v,"-tags")},c)),f&&a.createElement("span",{className:"".concat(v,"-extra")},f))},ct=function(e,r){return r?a.createElement("div",{className:"".concat(e,"-footer")},r):null},dt=function(e,r){return a.createElement("div",{className:"".concat(e,"-content")},r)},ft=function(e){var r=a.useState(!1),t=(0,xe.Z)(r,2),n=t[0],i=t[1],d=function(f){var m=f.width;i(m<768)};return a.createElement(Z.C,null,function(c){var f,m=c.getPrefixCls,v=c.pageHeader,h=c.direction,s,u=e.prefixCls,g=e.style,y=e.footer,b=e.children,C=e.breadcrumb,O=e.breadcrumbRender,R=e.className,T=!0;"ghost"in e?T=e.ghost:v&&"ghost"in v&&(T=v.ghost);var x=m("page-header",u),B=function(){var J;return((J=C)===null||J===void 0?void 0:J.routes)?it(C):null},S=B(),L=C&&"props"in C,ae=(s=O==null?void 0:O(e,S))!==null&&s!==void 0?s:S,_=L?C:ae,ne=M()(x,R,(f={"has-breadcrumb":!!_,"has-footer":!!y},(0,A.Z)(f,"".concat(x,"-ghost"),T),(0,A.Z)(f,"".concat(x,"-rtl"),h==="rtl"),(0,A.Z)(f,"".concat(x,"-compact"),n),f));return a.createElement(j.Z,{onResize:d},a.createElement("div",{className:ne,style:g},_,st(x,e,h),b&&dt(x,b),ct(x,y)))})},ut=ft,ce=l(81253),Jt=l(18106),Oe=l(51752),de=l(64335),vt=l(21349),mt=l(97435),Qt=l(56264),ht=["children","className","extra","style","renderContent"],gt=function(e){var r=e.children,t=e.className,n=e.extra,i=e.style,d=e.renderContent,c=(0,ce.Z)(e,ht),f=(0,a.useContext)(le.ZP.ConfigContext),m=f.getPrefixCls,v=e.prefixCls||m("pro"),h="".concat(v,"-footer-bar"),s=(0,a.useContext)(de.Z),u=(0,a.useMemo)(function(){var y=s.hasSiderMenu,b=s.isMobile,C=s.siderWidth;if(!!y)return C?b?"100%":"calc(100% - ".concat(C,"px)"):"100%"},[s.collapsed,s.hasSiderMenu,s.isMobile,s.siderWidth]),g=a.createElement(a.Fragment,null,a.createElement("div",{className:"".concat(h,"-left")},n),a.createElement("div",{className:"".concat(h,"-right")},r));return(0,a.useEffect)(function(){return!s||!(s==null?void 0:s.setHasFooterToolbar)?function(){}:(s==null||s.setHasFooterToolbar(!0),function(){var y;s==null||(y=s.setHasFooterToolbar)===null||y===void 0||y.call(s,!1)})},[]),a.createElement("div",(0,E.Z)({className:M()(t,"".concat(h)),style:(0,p.Z)({width:u},i)},(0,mt.Z)(c,["prefixCls"])),d?d((0,p.Z)((0,p.Z)((0,p.Z)({},e),s),{},{leftWidth:u}),g):g)},Ct=gt,qt=l(12395),xt=l(83832),yt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},bt=function(e){var r=e.children,t=e.style,n=e.className,i=e.markStyle,d=e.markClassName,c=e.zIndex,f=c===void 0?9:c,m=e.gapX,v=m===void 0?212:m,h=e.gapY,s=h===void 0?222:h,u=e.width,g=u===void 0?120:u,y=e.height,b=y===void 0?64:y,C=e.rotate,O=C===void 0?-22:C,R=e.image,T=e.content,x=e.offsetLeft,B=e.offsetTop,S=e.fontStyle,L=S===void 0?"normal":S,ae=e.fontWeight,_=ae===void 0?"normal":ae,ne=e.fontColor,fe=ne===void 0?"rgba(0,0,0,.15)":ne,J=e.fontSize,Te=J===void 0?16:J,Be=e.fontFamily,Se=Be===void 0?"sans-serif":Be,St=e.prefixCls,Mt=(0,a.useContext)(le.ZP.ConfigContext),At=Mt.getPrefixCls,Me=At("pro-layout-watermark",St),Dt=M()("".concat(Me,"-wrapper"),n),wt=M()(Me,d),Lt=(0,a.useState)(""),Ae=(0,xe.Z)(Lt,2),It=Ae[0],De=Ae[1];return(0,a.useEffect)(function(){var ee=document.createElement("canvas"),W=ee.getContext("2d"),k=yt(W),Ft="".concat((v+g)*k,"px"),Ht="".concat((s+b)*k,"px"),Ut=x||v/2,Wt=B||s/2;if(ee.setAttribute("width",Ft),ee.setAttribute("height",Ht),W){W.translate(Ut*k,Wt*k),W.rotate(Math.PI/180*Number(O));var zt=g*k,we=b*k;if(R){var te=new Image;te.crossOrigin="anonymous",te.referrerPolicy="no-referrer",te.src=R,te.onload=function(){W.drawImage(te,0,0,zt,we),De(ee.toDataURL())}}else if(T){var $t=Number(Te)*k;W.font="".concat(L," normal ").concat(_," ").concat($t,"px/").concat(we,"px ").concat(Se),W.fillStyle=fe,W.fillText(T,0,0),De(ee.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[v,s,x,B,O,L,_,g,b,Se,fe,R,T,Te]),a.createElement("div",{style:(0,p.Z)({position:"relative"},t),className:Dt},r,a.createElement("div",{className:wt,style:(0,p.Z)({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(v+g,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(It,"')")},i)}))},pt=bt,Pt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Et=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Nt(o){return(0,D.Z)(o)==="object"?o:{spinning:o}}var Rt=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,i=e.tabBarExtraContent,d=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||i?a.createElement(Oe.Z,(0,E.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(m){n&&n(m)},tabBarExtraContent:i},d),r==null?void 0:r.map(function(f,m){return a.createElement(Oe.Z.TabPane,(0,E.Z)({},f,{tab:f.tab,key:f.key||m}))})):null},Zt=function(e,r,t){return!e&&!r?null:a.createElement("div",{className:"".concat(t,"-detail")},a.createElement("div",{className:"".concat(t,"-main")},a.createElement("div",{className:"".concat(t,"-row")},e&&a.createElement("div",{className:"".concat(t,"-content")},e),r&&a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},_t=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Ot=function(e){var r,t=(0,a.useContext)(de.Z),n=e.title,i=e.content,d=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,m=e.extraContent,v=e.style,h=e.prefixCls,s=e.breadcrumbRender,u=(0,ce.Z)(e,Pt),g=(0,a.useMemo)(function(){if(!!s)return s},[s]);if(d===!1)return null;if(d)return a.createElement(a.Fragment,null," ",d((0,p.Z)((0,p.Z)({},e),t)));var y=n;!n&&n!==!1&&(y=t.title);var b=(0,p.Z)((0,p.Z)((0,p.Z)({},t),{},{title:y},u),{},{footer:Rt((0,p.Z)((0,p.Z)({},u),{},{breadcrumbRender:s,prefixedClassName:f}))},c),C=b.breadcrumb,O=(!C||!(C==null?void 0:C.itemRender)&&!(C==null||(r=C.routes)===null||r===void 0?void 0:r.length))&&!s;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(R){return!b[R]})&&O&&!i&&!m?null:a.createElement("div",{className:"".concat(f,"-warp")},a.createElement(ut,(0,E.Z)({},b,{breadcrumb:s===!1?void 0:(0,p.Z)((0,p.Z)({},b.breadcrumb),t.breadcrumbProps),breadcrumbRender:g,prefixCls:h}),(c==null?void 0:c.children)||Zt(i,m,f)))},Tt=function(e){var r,t=e.children,n=e.loading,i=n===void 0?!1:n,d=e.className,c=e.style,f=e.footer,m=e.affixProps,v=e.ghost,h=e.fixedHeader,s=(0,ce.Z)(e,Et),u=(0,a.useContext)(de.Z),g=(0,a.useContext)(le.ZP.ConfigContext),y=g.getPrefixCls,b=e.prefixCls||y("pro"),C="".concat(b,"-page-container"),O=M()(C,d,(r={},(0,A.Z)(r,"".concat(b,"-page-container-ghost"),v),(0,A.Z)(r,"".concat(b,"-page-container-with-footer"),f),r)),R=(0,a.useMemo)(function(){return t?a.createElement(a.Fragment,null,a.createElement("div",{className:"".concat(C,"-children-content")},t),u.hasFooterToolbar&&a.createElement("div",{style:{height:48,marginTop:24}})):null},[t,C,u.hasFooterToolbar]),T=a.createElement(Ot,(0,E.Z)({},s,{ghost:v,prefixCls:void 0,prefixedClassName:C})),x=(0,a.useMemo)(function(){if(a.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var S=Nt(i);return a.createElement(xt.Z,S)},[i]),B=(0,a.useMemo)(function(){var S=x||R;return e.waterMarkProps||u.waterMarkProps?a.createElement(pt,e.waterMarkProps||u.waterMarkProps,S):S},[e.waterMarkProps,u.waterMarkProps,x,R]);return a.createElement("div",{style:c,className:O},h&&T?a.createElement(Ie,(0,E.Z)({offsetTop:u.hasHeader&&u.fixedHeader?u.headerHeight:0},m),T):T,B&&a.createElement(vt.Z,null,B),f&&a.createElement(Ct,{prefixCls:b},f))},Bt=Tt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(oe,z,l){"use strict";var I=l(22122),$=l(67294),E=l(15105),A=function(P,H){var D={};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&H.indexOf(a)<0&&(D[a]=P[a]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,a=Object.getOwnPropertySymbols(P);N<a.length;N++)H.indexOf(a[N])<0&&Object.prototype.propertyIsEnumerable.call(P,a[N])&&(D[a[N]]=P[a[N]]);return D},F={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Q=$.forwardRef(function(P,H){var D=function(w){var K=w.keyCode;K===E.Z.ENTER&&w.preventDefault()},a=function(w){var K=w.keyCode,U=P.onClick;K===E.Z.ENTER&&U&&U()},N=P.style,M=P.noStyle,q=P.disabled,j=A(P,["style","noStyle","disabled"]),Z={};return M||(Z=(0,I.Z)({},F)),q&&(Z.pointerEvents="none"),Z=(0,I.Z)((0,I.Z)({},Z),N),$.createElement("div",(0,I.Z)({role:"button",tabIndex:0,ref:H},j,{onKeyDown:D,onKeyUp:a,style:Z}))});z.Z=Q}}]);