/*! For license information please see 9584.a2bf847d.chunk.js.LICENSE.txt */
(self.webpackChunkRK_Maxx=self.webpackChunkRK_Maxx||[]).push([[9584],{628:t=>{"use strict";t.exports=function(t,e,n,r,o,i,s,a){if(!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,a],l=0;(u=new Error(e.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},9584:(t,e,n)=>{"use strict";n.d(e,{A:()=>Et});var r=n(2483);const o=function(t){const e=(0,r.useRef)(t);return(0,r.useEffect)((()=>{e.current=t}),[t]),e};function i(t){const e=o(t);return(0,r.useCallback)((function(){return e.current&&e.current(...arguments)}),[e])}const s=function(t,e){const n=(0,r.useRef)(!0);(0,r.useEffect)((()=>{if(!n.current)return t();n.current=!1}),e)};function a(t){const e=function(t){const e=(0,r.useRef)(t);return e.current=t,e}(t);(0,r.useEffect)((()=>()=>e.current()),[])}const u=2**31-1;function c(t,e,n){const r=n-Date.now();t.current=r<=u?setTimeout(e,r):setTimeout((()=>c(t,e,n)),u)}function l(){const t=function(){const t=(0,r.useRef)(!0),e=(0,r.useRef)((()=>t.current));return(0,r.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]),e.current}(),e=(0,r.useRef)();return a((()=>clearTimeout(e.current))),(0,r.useMemo)((()=>{const n=()=>clearTimeout(e.current);return{set:function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t()&&(n(),o<=u?e.current=setTimeout(r,o):c(e,r,Date.now()+o))},clear:n,handleRef:e}}),[])}"undefined"!==typeof n.g&&n.g.navigator&&n.g.navigator.product,new WeakMap;var f=n(6723);const d=["as","disabled"];function p(t){let{tagName:e,disabled:n,href:r,target:o,rel:i,role:s,onClick:a,tabIndex:u=0,type:c}=t;e||(e=null!=r||null!=o||null!=i?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:n},l];const f=t=>{(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==a||a(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?o:void 0,"aria-disabled":n||void 0,rel:"a"===e?i:void 0,onClick:f,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),f(t))}},l]}const v=r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,o=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,d);const[i,{tagName:s}]=p(Object.assign({tagName:n,disabled:r},o));return(0,f.jsx)(s,Object.assign({},o,i,{ref:e}))}));v.displayName="Button";const h=["onKeyDown"];const m=r.forwardRef(((t,e)=>{let{onKeyDown:n}=t,r=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,h);const[o]=p(Object.assign({tagName:"a"},r)),s=i((t=>{o.onKeyDown(t),null==n||n(t)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,f.jsx)("a",Object.assign({ref:e},r,{onKeyDown:n})):(0,f.jsx)("a",Object.assign({ref:e},r,o,{onKeyDown:s}));var a}));m.displayName="Anchor";const x=m;var E=n(1097),b=n.n(E),g=n(8168),y=n(8587);n(628);function C(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function S(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}function k(t,e){return Object.keys(e).reduce((function(n,o){var i,s=n,a=s[C(o)],u=s[o],c=(0,y.A)(s,[C(o),o].map(S)),l=e[o],f=function(t,e,n){var o=(0,r.useRef)(void 0!==t),i=(0,r.useState)(e),s=i[0],a=i[1],u=void 0!==t,c=o.current;return o.current=u,!u&&c&&s!==e&&a(e),[u?t:s,(0,r.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),a(t)}),[n])]}(u,a,t[l]),d=f[0],p=f[1];return(0,g.A)({},c,((i={})[o]=d,i[l]=p,i))}),t)}function N(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function w(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function O(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}N.__suppressDeprecationWarning=!0,w.__suppressDeprecationWarning=!0,O.__suppressDeprecationWarning=!0;const R=["xxl","xl","lg","md","sm","xs"],D="xs",j=r.createContext({prefixes:{},breakpoints:R,minBreakpoint:D}),{Consumer:T,Provider:M}=j;function _(t,e){const{prefixes:n}=(0,r.useContext)(j);return t||n[e]||e}const P=r.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:o="div",...i}=t;return r=_(r,"carousel-caption"),(0,f.jsx)(o,{ref:e,className:b()(n,r),...i})}));P.displayName="CarouselCaption";const L=P,I=r.forwardRef(((t,e)=>{let{as:n="div",bsPrefix:r,className:o,...i}=t;const s=b()(o,_(r,"carousel-item"));return(0,f.jsx)(n,{ref:e,...i,className:s})}));I.displayName="CarouselItem";const A=I;function $(t,e){let n=0;return r.Children.map(t,(t=>r.isValidElement(t)?e(t,n++):t))}function K(t){var e=function(t){return t&&t.ownerDocument||document}(t);return e&&e.defaultView||window}var F=/([A-Z])/g;var U=/^ms-/;function V(t){return function(t){return t.replace(F,"-$1").toLowerCase()}(t).replace(U,"-ms-")}var X=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const W=function(t,e){var n="",r="";if("string"===typeof e)return t.style.getPropertyValue(V(e))||function(t,e){return K(t).getComputedStyle(t,e)}(t).getPropertyValue(V(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(t){return!(!t||!X.test(t))}(o)?n+=V(o)+": "+i+";":r+=o+"("+i+") ":t.style.removeProperty(V(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},B=!("undefined"===typeof window||!window.document||!window.document.createElement);var H=!1,G=!1;try{var Y={get passive(){return H=!0},get once(){return G=H=!0}};B&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(bt){}const Z=function(t,e,n,r){if(r&&"boolean"!==typeof r&&!G){var o=r.once,i=r.capture,s=n;!G&&o&&(s=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=s),t.addEventListener(e,s,H?r:i)}t.addEventListener(e,n,r)};const q=function(t,e,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)};const z=function(t,e,n,r){return Z(t,e,n,r),function(){q(t,e,n,r)}};function J(t,e,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),e+n),i=z(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function Q(t,e,n,r){null==n&&(n=function(t){var e=W(t,"transitionDuration")||"",n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}(t)||0);var o=J(t,n,r),i=z(t,"transitionend",e);return function(){o(),i()}}function tt(t,e){const n=W(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function et(t,e){const n=tt(t,"transitionDuration"),r=tt(t,"transitionDelay"),o=Q(t,(n=>{n.target===t&&(o(),e(n))}),n+r)}var nt=n(5540),rt=n(9998);const ot=!1,it=r.createContext(null);var st="unmounted",at="exited",ut="entering",ct="entered",lt="exiting",ft=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=at,r.appearStatus=ut):o=ct:o=e.unmountOnExit||e.mountOnEnter?st:at,r.state={status:o},r.nextCallback=null,r}(0,nt.A)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===st?{status:at}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==ut&&n!==ct&&(e=ut):n!==ut&&n!==ct||(e=lt)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===ut){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:rt.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===at&&this.setState({status:st})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[rt.findDOMNode(this),r],i=o[0],s=o[1],a=this.getTimeouts(),u=r?a.appear:a.enter;!t&&!n||ot?this.safeSetState({status:ct},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,s),this.safeSetState({status:ut},(function(){e.props.onEntering(i,s),e.onTransitionEnd(u,(function(){e.safeSetState({status:ct},(function(){e.props.onEntered(i,s)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:rt.findDOMNode(this);e&&!ot?(this.props.onExit(r),this.safeSetState({status:lt},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:at},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:at},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:rt.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===st)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,y.A)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(it.Provider,{value:null},"function"===typeof n?n(t,o):r.cloneElement(r.Children.only(n),o))},e}(r.Component);function dt(){}ft.contextType=it,ft.propTypes={},ft.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:dt,onEntering:dt,onEntered:dt,onExit:dt,onExiting:dt,onExited:dt},ft.UNMOUNTED=st,ft.EXITED=at,ft.ENTERING=ut,ft.ENTERED=ct,ft.EXITING=lt;const pt=ft,vt=t=>t&&"function"!==typeof t?e=>{t.current=e}:t;const ht=function(t,e){return(0,r.useMemo)((()=>function(t,e){const n=vt(t),r=vt(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])};const mt=r.forwardRef(((t,e)=>{let{onEnter:n,onEntering:o,onEntered:i,onExit:s,onExiting:a,onExited:u,addEndListener:c,children:l,childRef:d,...p}=t;const v=(0,r.useRef)(null),h=ht(v,d),m=t=>{var e;h((e=t)&&"setState"in e?rt.findDOMNode(e):null!=e?e:null)},x=t=>e=>{t&&v.current&&t(v.current,e)},E=(0,r.useCallback)(x(n),[n]),b=(0,r.useCallback)(x(o),[o]),g=(0,r.useCallback)(x(i),[i]),y=(0,r.useCallback)(x(s),[s]),C=(0,r.useCallback)(x(a),[a]),S=(0,r.useCallback)(x(u),[u]),k=(0,r.useCallback)(x(c),[c]);return(0,f.jsx)(pt,{ref:e,...p,onEnter:E,onEntered:g,onEntering:b,onExit:y,onExited:S,onExiting:C,addEndListener:k,nodeRef:v,children:"function"===typeof l?(t,e)=>l(t,{...e,ref:m}):r.cloneElement(l,{ref:m})})}));const xt=r.forwardRef(((t,e)=>{let{defaultActiveIndex:n=0,...a}=t;const{as:u="div",bsPrefix:c,slide:d=!0,fade:p=!1,controls:v=!0,indicators:h=!0,indicatorLabels:m=[],activeIndex:E,onSelect:g,onSlide:y,onSlid:C,interval:S=5e3,keyboard:N=!0,onKeyDown:w,pause:O="hover",onMouseOver:R,onMouseOut:D,wrap:T=!0,touch:M=!0,onTouchStart:P,onTouchMove:L,onTouchEnd:I,prevIcon:A=(0,f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:K="Previous",nextIcon:F=(0,f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:U="Next",variant:V,className:X,children:W,...B}=k({defaultActiveIndex:n,...a},{activeIndex:"onSelect"}),H=_(c,"carousel"),G=function(){const{dir:t}=(0,r.useContext)(j);return"rtl"===t}(),Y=(0,r.useRef)(null),[Z,q]=(0,r.useState)("next"),[z,J]=(0,r.useState)(!1),[Q,tt]=(0,r.useState)(!1),[nt,rt]=(0,r.useState)(E||0);(0,r.useEffect)((()=>{Q||E===nt||(Y.current?q(Y.current):q((E||0)>nt?"next":"prev"),d&&tt(!0),rt(E||0))}),[E,Q,nt,d]),(0,r.useEffect)((()=>{Y.current&&(Y.current=null)}));let ot,it=0;!function(t,e){let n=0;r.Children.forEach(t,(t=>{r.isValidElement(t)&&e(t,n++)}))}(W,((t,e)=>{++it,e===E&&(ot=t.props.interval)}));const st=o(ot),at=(0,r.useCallback)((t=>{if(Q)return;let e=nt-1;if(e<0){if(!T)return;e=it-1}Y.current="prev",null==g||g(e,t)}),[Q,nt,g,T,it]),ut=i((t=>{if(Q)return;let e=nt+1;if(e>=it){if(!T)return;e=0}Y.current="next",null==g||g(e,t)})),ct=(0,r.useRef)();(0,r.useImperativeHandle)(e,(()=>({element:ct.current,prev:at,next:ut})));const lt=i((()=>{!document.hidden&&function(t){if(!t||!t.style||!t.parentNode||!t.parentNode.style)return!1;const e=getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility&&"none"!==getComputedStyle(t.parentNode).display}(ct.current)&&(G?at():ut())})),ft="next"===Z?"start":"end";s((()=>{d||(null==y||y(nt,ft),null==C||C(nt,ft))}),[nt]);const dt=`${H}-item-${Z}`,pt=`${H}-item-${ft}`,vt=(0,r.useCallback)((t=>{!function(t){t.offsetHeight}(t),null==y||y(nt,ft)}),[y,nt,ft]),ht=(0,r.useCallback)((()=>{tt(!1),null==C||C(nt,ft)}),[C,nt,ft]),xt=(0,r.useCallback)((t=>{if(N&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":return t.preventDefault(),void(G?ut(t):at(t));case"ArrowRight":return t.preventDefault(),void(G?at(t):ut(t))}null==w||w(t)}),[N,w,at,ut,G]),Et=(0,r.useCallback)((t=>{"hover"===O&&J(!0),null==R||R(t)}),[O,R]),bt=(0,r.useCallback)((t=>{J(!1),null==D||D(t)}),[D]),gt=(0,r.useRef)(0),yt=(0,r.useRef)(0),Ct=l(),St=(0,r.useCallback)((t=>{gt.current=t.touches[0].clientX,yt.current=0,"hover"===O&&J(!0),null==P||P(t)}),[O,P]),kt=(0,r.useCallback)((t=>{t.touches&&t.touches.length>1?yt.current=0:yt.current=t.touches[0].clientX-gt.current,null==L||L(t)}),[L]),Nt=(0,r.useCallback)((t=>{if(M){const e=yt.current;Math.abs(e)>40&&(e>0?at(t):ut(t))}"hover"===O&&Ct.set((()=>{J(!1)}),S||void 0),null==I||I(t)}),[M,O,at,ut,Ct,S,I]),wt=null!=S&&!z&&!Q,Ot=(0,r.useRef)();(0,r.useEffect)((()=>{var t,e;if(!wt)return;const n=G?at:ut;return Ot.current=window.setInterval(document.visibilityState?lt:n,null!=(t=null!=(e=st.current)?e:S)?t:void 0),()=>{null!==Ot.current&&clearInterval(Ot.current)}}),[wt,at,ut,st,S,lt,G]);const Rt=(0,r.useMemo)((()=>h&&Array.from({length:it},((t,e)=>t=>{null==g||g(e,t)}))),[h,it,g]);return(0,f.jsxs)(u,{ref:ct,...B,onKeyDown:xt,onMouseOver:Et,onMouseOut:bt,onTouchStart:St,onTouchMove:kt,onTouchEnd:Nt,className:b()(X,H,d&&"slide",p&&`${H}-fade`,V&&`${H}-${V}`),children:[h&&(0,f.jsx)("div",{className:`${H}-indicators`,children:$(W,((t,e)=>(0,f.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[e]:`Slide ${e+1}`,className:e===nt?"active":void 0,onClick:Rt?Rt[e]:void 0,"aria-current":e===nt},e)))}),(0,f.jsx)("div",{className:`${H}-inner`,children:$(W,((t,e)=>{const n=e===nt;return d?(0,f.jsx)(mt,{in:n,onEnter:n?vt:void 0,onEntered:n?ht:void 0,addEndListener:et,children:(e,o)=>r.cloneElement(t,{...o,className:b()(t.props.className,n&&"entered"!==e&&dt,("entered"===e||"exiting"===e)&&"active",("entering"===e||"exiting"===e)&&pt)})}):r.cloneElement(t,{className:b()(t.props.className,n&&"active")})}))}),v&&(0,f.jsxs)(f.Fragment,{children:[(T||0!==E)&&(0,f.jsxs)(x,{className:`${H}-control-prev`,onClick:at,children:[A,K&&(0,f.jsx)("span",{className:"visually-hidden",children:K})]}),(T||E!==it-1)&&(0,f.jsxs)(x,{className:`${H}-control-next`,onClick:ut,children:[F,U&&(0,f.jsx)("span",{className:"visually-hidden",children:U})]})]})]})}));xt.displayName="Carousel";const Et=Object.assign(xt,{Caption:L,Item:A})},1097:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=s(t,i(n)))}return t}function i(t){if("string"===typeof t||"number"===typeof t)return t;if("object"!==typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=s(e,n));return e}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},5540:(t,e,n)=>{"use strict";function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}n.d(e,{A:()=>o})}}]);
//# sourceMappingURL=9584.a2bf847d.chunk.js.map