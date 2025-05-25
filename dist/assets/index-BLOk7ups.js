(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const et={},mr=[],Pn=()=>{},hp=()=>!1,Ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ll=n=>n.startsWith("onUpdate:"),It=Object.assign,Il=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},pp=Object.prototype.hasOwnProperty,Ke=(n,e)=>pp.call(n,e),Ue=Array.isArray,gr=n=>Pa(n)==="[object Map]",$f=n=>Pa(n)==="[object Set]",Oe=n=>typeof n=="function",mt=n=>typeof n=="string",vi=n=>typeof n=="symbol",ot=n=>n!==null&&typeof n=="object",jf=n=>(ot(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),Yf=Object.prototype.toString,Pa=n=>Yf.call(n),mp=n=>Pa(n).slice(8,-1),Kf=n=>Pa(n)==="[object Object]",Dl=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},gp=/-(\w)/g,mn=La(n=>n.replace(gp,(e,t)=>t?t.toUpperCase():"")),_p=/\B([A-Z])/g,Gi=La(n=>n.replace(_p,"-$1").toLowerCase()),Ia=La(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=La(n=>n?`on${Ia(n)}`:""),fi=(n,e)=>!Object.is(n,e),na=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gc;const Da=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=mt(i)?yp(i):Ul(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(mt(n)||ot(n))return n}const vp=/;(?![^(]*\))/g,xp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function yp(n){const e={};return n.replace(Sp,"").split(vp).forEach(t=>{if(t){const i=t.split(xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function hs(n){let e="";if(mt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=hs(n[t]);i&&(e+=i+" ")}else if(ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ep="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mp=Pl(Ep);function Jf(n){return!!n||n===""}const Qf=n=>!!(n&&n.__v_isRef===!0),Ii=n=>mt(n)?n:n==null?"":Ue(n)||ot(n)&&(n.toString===Yf||!Oe(n.toString))?Qf(n)?Ii(n.value):JSON.stringify(n,ed,2):String(n),ed=(n,e)=>Qf(e)?ed(n,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ja(i,s)+" =>"]=r,t),{})}:$f(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ja(t))}:vi(e)?Ja(e):ot(e)&&!Ue(e)&&!Kf(e)?String(e):e,Ja=(n,e="")=>{var t;return vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class bp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tp(){return Ht}let rt;const Qa=new WeakSet;class td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qa.has(this)&&(Qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),rd(this);const e=rt,t=yn;rt=this,yn=!0;try{return this.fn()}finally{sd(this),rt=e,yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fl(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let nd=0,Yr,Kr;function id(n,e=!1){if(n.flags|=8,e){n.next=Kr,Kr=n;return}n.next=Yr,Yr=n}function Nl(){nd++}function Ol(){if(--nd>0)return;if(Kr){let e=Kr;for(Kr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Yr;){let e=Yr;for(Yr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Fl(i),wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ad(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===rs)||(n.globalVersion=rs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tl(n))))return;n.flags|=2;const e=n.dep,t=rt,i=yn;rt=n,yn=!0;try{rd(n);const r=n.fn(n._value);(e.version===0||fi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,yn=i,sd(n),n.flags&=-3}}function Fl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Fl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yn=!0;const od=[];function Yn(){od.push(yn),yn=!1}function Kn(){const n=od.pop();yn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let rs=0;class Ap{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!yn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new Ap(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,ld(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,rs++,this.notify(e)}notify(e){Nl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ol()}}}function ld(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ld(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nl=new WeakMap,Di=Symbol(""),il=Symbol(""),ss=Symbol("");function Ct(n,e,t){if(yn&&rt){let i=nl.get(n);i||nl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Bl),r.map=i,r.key=t),r.track()}}function Wn(n,e,t,i,r,s){const o=nl.get(n);if(!o){rs++;return}const a=l=>{l&&l.trigger()};if(Nl(),e==="clear")o.forEach(a);else{const l=Ue(n),c=l&&Dl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ss||!vi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ss)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Di)),gr(n)&&a(o.get(il)));break;case"delete":l||(a(o.get(Di)),gr(n)&&a(o.get(il)));break;case"set":gr(n)&&a(o.get(Di));break}}Ol()}function ki(n){const e=Ye(n);return e===n?e:(Ct(e,"iterate",ss),hn(n)?e:e.map(Mt))}function Ua(n){return Ct(n=Ye(n),"iterate",ss),n}const Cp={__proto__:null,[Symbol.iterator](){return eo(this,Symbol.iterator,Mt)},concat(...n){return ki(this).concat(...n.map(e=>Ue(e)?ki(e):e))},entries(){return eo(this,"entries",n=>(n[1]=Mt(n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(Mt),arguments)},find(n,e){return Un(this,"find",n,e,Mt,arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,Mt,arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return to(this,"includes",n)},indexOf(...n){return to(this,"indexOf",n)},join(n){return ki(this).join(n)},lastIndexOf(...n){return to(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return Nr(this,"pop")},push(...n){return Nr(this,"push",n)},reduce(n,...e){return vc(this,"reduce",n,e)},reduceRight(n,...e){return vc(this,"reduceRight",n,e)},shift(){return Nr(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return Nr(this,"splice",n)},toReversed(){return ki(this).toReversed()},toSorted(n){return ki(this).toSorted(n)},toSpliced(...n){return ki(this).toSpliced(...n)},unshift(...n){return Nr(this,"unshift",n)},values(){return eo(this,"values",Mt)}};function eo(n,e,t){const i=Ua(n),r=i[e]();return i!==n&&!hn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Rp=Array.prototype;function Un(n,e,t,i,r,s){const o=Ua(n),a=o!==n&&!hn(n),l=o[e];if(l!==Rp[e]){const f=l.apply(n,s);return a?Mt(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Mt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function vc(n,e,t,i){const r=Ua(n);let s=t;return r!==n&&(hn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Mt(a),l,n)}),r[e](s,...i)}function to(n,e,t){const i=Ye(n);Ct(i,"iterate",ss);const r=i[e](...t);return(r===-1||r===!1)&&Hl(t[0])?(t[0]=Ye(t[0]),i[e](...t)):r}function Nr(n,e,t=[]){Yn(),Nl();const i=Ye(n)[e].apply(n,t);return Ol(),Kn(),i}const Pp=Pl("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vi));function Lp(n){vi(n)||(n=String(n));const e=Ye(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class ud{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Hp:pd:s?hd:dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){let l;if(o&&(l=Cp[t]))return l;if(t==="hasOwnProperty")return Lp}const a=Reflect.get(e,t,Pt(e)?e:i);return(vi(t)?cd.has(t):Pp(t))||(r||Ct(e,"get",t),s)?a:Pt(a)?o&&Dl(t)?a:a.value:ot(a)?r?gd(a):Na(a):a}}class fd extends ud{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=gi(s);if(!hn(i)&&!gi(i)&&(s=Ye(s),i=Ye(i)),!Ue(e)&&Pt(s)&&!Pt(i))return l?!1:(s.value=i,!0)}const o=Ue(e)&&Dl(t)?Number(t)<e.length:Ke(e,t),a=Reflect.set(e,t,i,Pt(e)?e:r);return e===Ye(r)&&(o?fi(i,s)&&Wn(e,"set",t,i):Wn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!vi(t)||!cd.has(t))&&Ct(e,"has",t),i}ownKeys(e){return Ct(e,"iterate",Ue(e)?"length":Di),Reflect.ownKeys(e)}}class Ip extends ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Dp=new fd,Up=new Ip,Np=new fd(!0);const rl=n=>n,Es=n=>Reflect.getPrototypeOf(n);function Op(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),o=gr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?rl:e?ca:Mt;return!e&&Ct(s,"iterate",l?il:Di),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ms(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Fp(n,e){const t={get(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);n||(fi(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:l}=Es(o),c=e?rl:n?ca:Mt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(Ye(r),"iterate",Di),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ye(s),a=Ye(r);return n||(fi(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ye(a),c=e?rl:n?ca:Mt;return!n&&Ct(l,"iterate",Di),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return It(t,n?{add:Ms("add"),set:Ms("set"),delete:Ms("delete"),clear:Ms("clear")}:{add(r){!e&&!hn(r)&&!gi(r)&&(r=Ye(r));const s=Ye(this);return Es(s).has.call(s,r)||(s.add(r),Wn(s,"add",r,r)),this},set(r,s){!e&&!hn(s)&&!gi(s)&&(s=Ye(s));const o=Ye(this),{has:a,get:l}=Es(o);let c=a.call(o,r);c||(r=Ye(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?fi(s,u)&&Wn(o,"set",r,s):Wn(o,"add",r,s),this},delete(r){const s=Ye(this),{has:o,get:a}=Es(s);let l=o.call(s,r);l||(r=Ye(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Wn(s,"delete",r,void 0),c},clear(){const r=Ye(this),s=r.size!==0,o=r.clear();return s&&Wn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Op(r,n,e)}),t}function zl(n,e){const t=Fp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const Bp={get:zl(!1,!1)},zp={get:zl(!1,!0)},Gp={get:zl(!0,!1)};const dd=new WeakMap,hd=new WeakMap,pd=new WeakMap,Hp=new WeakMap;function Vp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kp(n){return n.__v_skip||!Object.isExtensible(n)?0:Vp(mp(n))}function Na(n){return gi(n)?n:Gl(n,!1,Dp,Bp,dd)}function md(n){return Gl(n,!1,Np,zp,hd)}function gd(n){return Gl(n,!0,Up,Gp,pd)}function Gl(n,e,t,i,r){if(!ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=kp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function _r(n){return gi(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function gi(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function Hl(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Wp(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&Zf(n,"__v_skip",!0),n}const Mt=n=>ot(n)?Na(n):n,ca=n=>ot(n)?gd(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function at(n){return _d(n,!1)}function Xp(n){return _d(n,!0)}function _d(n,e){return Pt(n)?n:new qp(n,e)}class qp{constructor(e,t){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||gi(e);e=i?e:Ye(e),fi(e,t)&&(this._rawValue=e,this._value=i?e:Mt(e),this.dep.trigger())}}function ln(n){return Pt(n)?n.value:n}const $p={get:(n,e,t)=>e==="__v_raw"?n:ln(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function vd(n){return _r(n)?n:new Proxy(n,$p)}class jp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return id(this,!0),!0}get value(){const e=this.dep.track();return ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yp(n,e,t=!1){let i,r;return Oe(n)?i=n:(i=n.get,r=n.set),new jp(i,r,t)}const bs={},ua=new WeakMap;let Ai;function Kp(n,e=!1,t=Ai){if(t){let i=ua.get(t);i||ua.set(t,i=[]),i.push(n)}}function Zp(n,e,t=et){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:hn(y)||r===!1||r===0?Xn(y,1):Xn(y);let u,f,d,p,g=!1,v=!1;if(Pt(n)?(f=()=>n.value,g=hn(n)):_r(n)?(f=()=>c(n),g=!0):Ue(n)?(v=!0,g=n.some(y=>_r(y)||hn(y)),f=()=>n.map(y=>{if(Pt(y))return y.value;if(_r(y))return c(y);if(Oe(y))return l?l(y,2):y()})):Oe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Yn();try{d()}finally{Kn()}}const y=Ai;Ai=u;try{return l?l(n,3,[p]):n(p)}finally{Ai=y}}:f=Pn,e&&r){const y=f,A=r===!0?1/0:r;f=()=>Xn(y(),A)}const m=Tp(),h=()=>{u.stop(),m&&m.active&&Il(m.effects,u)};if(s&&e){const y=e;e=(...A)=>{y(...A),h()}}let x=v?new Array(n.length).fill(bs):bs;const _=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(r||g||(v?A.some((R,C)=>fi(R,x[C])):fi(A,x))){d&&d();const R=Ai;Ai=u;try{const C=[A,x===bs?void 0:v&&x[0]===bs?[]:x,p];l?l(e,3,C):e(...C),x=A}finally{Ai=R}}}else u.run()};return a&&a(_),u=new td(f),u.scheduler=o?()=>o(_,!1):_,p=y=>Kp(y,!1,u),d=u.onStop=()=>{const y=ua.get(u);if(y){if(l)l(y,4);else for(const A of y)A();ua.delete(u)}},e?i?_(!0):x=u.run():o?o(_.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Xn(n,e=1/0,t){if(e<=0||!ot(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Pt(n))Xn(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)Xn(n[i],e,t);else if($f(n)||gr(n))n.forEach(i=>{Xn(i,e,t)});else if(Kf(n)){for(const i in n)Xn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(n,e,t,i){try{return i?n(...i):n()}catch(r){Oa(r,e,t)}}function In(n,e,t,i){if(Oe(n)){const r=ps(n,e,t,i);return r&&jf(r)&&r.catch(s=>{Oa(s,e,t)}),r}if(Ue(n)){const r=[];for(let s=0;s<n.length;s++)r.push(In(n[s],e,t,i));return r}}function Oa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Yn(),ps(s,null,10,[n,l,c]),Kn();return}}Jp(n,t,r,i,o)}function Jp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const zt=[];let Tn=-1;const vr=[];let si=null,ur=0;const xd=Promise.resolve();let fa=null;function Vl(n){const e=fa||xd;return n?e.then(this?n.bind(this):n):e}function Qp(n){let e=Tn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=as(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function kl(n){if(!(n.flags&1)){const e=as(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=as(t)?zt.push(n):zt.splice(Qp(e),0,n),n.flags|=1,Sd()}}function Sd(){fa||(fa=xd.then(Ed))}function em(n){Ue(n)?vr.push(...n):si&&n.id===-1?si.splice(ur+1,0,n):n.flags&1||(vr.push(n),n.flags|=1),Sd()}function xc(n,e,t=Tn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yd(n){if(vr.length){const e=[...new Set(vr)].sort((t,i)=>as(t)-as(i));if(vr.length=0,si){si.push(...e);return}for(si=e,ur=0;ur<si.length;ur++){const t=si[ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}si=null,ur=0}}const as=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(Tn=0;Tn<zt.length;Tn++){const e=zt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ps(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<zt.length;Tn++){const e=zt[Tn];e&&(e.flags&=-2)}Tn=-1,zt.length=0,yd(),fa=null,(zt.length||vr.length)&&Ed()}}let tn=null,Md=null;function da(n){const e=tn;return tn=n,Md=n&&n.type.__scopeId||null,e}function qr(n,e=tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Rc(-1);const s=da(e);let o;try{o=n(...r)}finally{da(s),i._d&&Rc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function no(n,e){if(tn===null)return n;const t=Ha(tn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=et]=e[r];s&&(Oe(s)&&(s={mounted:s,updated:s}),s.deep&&Xn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function yi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Yn(),In(l,t,8,[n.el,a,n,e]),Kn())}}const tm=Symbol("_vte"),nm=n=>n.__isTeleport;function Wl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function bd(n,e){return Oe(n)?It({name:n.name},e,{setup:n}):n}function Td(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ha(n,e,t,i,r=!1){if(Ue(n)){n.forEach((g,v)=>ha(g,e&&(Ue(e)?e[v]:e),t,i,r));return}if(Zr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ha(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ha(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,f=a.setupState,d=Ye(f),p=f===et?()=>!1:g=>Ke(d,g);if(c!=null&&c!==l&&(mt(c)?(u[c]=null,p(c)&&(f[c]=null)):Pt(c)&&(c.value=null)),Oe(l))ps(l,a,12,[o,u]);else{const g=mt(l),v=Pt(l);if(g||v){const m=()=>{if(n.f){const h=g?p(l)?f[l]:u[l]:l.value;r?Ue(h)&&Il(h,s):Ue(h)?h.includes(s)||h.push(s):g?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Kt(m,t)):m()}}}Da().requestIdleCallback;Da().cancelIdleCallback;const Zr=n=>!!n.type.__asyncLoader,wd=n=>n.type.__isKeepAlive;function im(n,e){Ad(n,"a",e)}function rm(n,e){Ad(n,"da",e)}function Ad(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)wd(r.parent.vnode)&&sm(i,e,t,r),r=r.parent}}function sm(n,e,t,i){const r=Fa(e,n,i,!0);Rd(()=>{Il(i[e],r)},t)}function Fa(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Yn();const a=ms(t),l=In(e,t,n,o);return a(),Kn(),l});return i?r.unshift(s):r.push(s),s}}const Jn=n=>(e,t=Rt)=>{(!ls||n==="sp")&&Fa(n,(...i)=>e(...i),t)},am=Jn("bm"),Ba=Jn("m"),Cd=Jn("bu"),Xl=Jn("u"),ql=Jn("bum"),Rd=Jn("um"),om=Jn("sp"),lm=Jn("rtg"),cm=Jn("rtc");function um(n,e=Rt){Fa("ec",n,e)}const fm="components";function dm(n,e){return pm(fm,n,!0,e)||n}const hm=Symbol.for("v-ndc");function pm(n,e,t=!0,i=!1){const r=tn||Rt;if(r){const s=r.type;{const a=ig(s,!1);if(a&&(a===e||a===mn(e)||a===Ia(mn(e))))return s}const o=Sc(r[n]||s[n],e)||Sc(r.appContext[n],e);return!o&&i?s:o}}function Sc(n,e){return n&&(n[e]||n[mn(e)]||n[Ia(mn(e))])}function ia(n,e,t,i){let r;const s=t,o=Ue(n);if(o||mt(n)){const a=o&&_r(n);let l=!1,c=!1;a&&(l=!hn(n),c=gi(n),n=Ua(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ca(Mt(n[u])):Mt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ot(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const sl=n=>n?Yd(n)?Ha(n):sl(n.parent):null,Jr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sl(n.parent),$root:n=>sl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ld(n),$forceUpdate:n=>n.f||(n.f=()=>{kl(n.update)}),$nextTick:n=>n.n||(n.n=Vl.bind(n.proxy)),$watch:n=>Nm.bind(n)}),io=(n,e)=>n!==et&&!n.__isScriptSetup&&Ke(n,e),mm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(io(i,e))return o[e]=1,i[e];if(r!==et&&Ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==et&&Ke(t,e))return o[e]=4,t[e];al&&(o[e]=0)}}const u=Jr[e];let f,d;if(u)return e==="$attrs"&&Ct(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==et&&Ke(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return io(r,e)?(r[e]=t,!0):i!==et&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==et&&Ke(n,o)||io(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(Jr,o)||Ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yc(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let al=!0;function gm(n){const e=Ld(n),t=n.proxy,i=n.ctx;al=!1,e.beforeCreate&&Ec(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:x,destroyed:_,unmounted:y,render:A,renderTracked:R,renderTriggered:C,errorCaptured:B,serverPrefetch:M,expose:T,inheritAttrs:U,components:H,directives:K,filters:L}=e;if(c&&_m(c,i,null),o)for(const $ in o){const W=o[$];Oe(W)&&(i[$]=W.bind(t))}if(r){const $=r.call(t,t);ot($)&&(n.data=Na($))}if(al=!0,s)for(const $ in s){const W=s[$],ne=Oe(W)?W.bind(t,t):Oe(W.get)?W.get.bind(t,t):Pn,ie=!Oe(W)&&Oe(W.set)?W.set.bind(t):Pn,he=en({get:ne,set:ie});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>he.value,set:de=>he.value=de})}if(a)for(const $ in a)Pd(a[$],i,t,$);if(l){const $=Oe(l)?l.call(t):l;Reflect.ownKeys($).forEach(W=>{Sr(W,$[W])})}u&&Ec(u,n,"c");function O($,W){Ue(W)?W.forEach(ne=>$(ne.bind(t))):W&&$(W.bind(t))}if(O(am,f),O(Ba,d),O(Cd,p),O(Xl,g),O(im,v),O(rm,m),O(um,B),O(cm,R),O(lm,C),O(ql,x),O(Rd,y),O(om,M),Ue(T))if(T.length){const $=n.exposed||(n.exposed={});T.forEach(W=>{Object.defineProperty($,W,{get:()=>t[W],set:ne=>t[W]=ne})})}else n.exposed||(n.exposed={});A&&n.render===Pn&&(n.render=A),U!=null&&(n.inheritAttrs=U),H&&(n.components=H),K&&(n.directives=K),M&&Td(n)}function _m(n,e,t=Pn){Ue(n)&&(n=ol(n));for(const i in n){const r=n[i];let s;ot(r)?"default"in r?s=Ln(r.from||i,r.default,!0):s=Ln(r.from||i):s=Ln(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ec(n,e,t){In(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pd(n,e,t,i){let r=i.includes(".")?Wd(t,i):()=>t[i];if(mt(n)){const s=e[n];Oe(s)&&Qr(r,s)}else if(Oe(n))Qr(r,n.bind(t));else if(ot(n))if(Ue(n))n.forEach(s=>Pd(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&Qr(r,s,n)}}function Ld(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),ot(e)&&s.set(e,l),l}function pa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&pa(n,s,t,!0),r&&r.forEach(o=>pa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vm={data:Mc,props:bc,emits:bc,methods:$r,computed:$r,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:$r,directives:$r,watch:Sm,provide:Mc,inject:xm};function Mc(n,e){return e?n?function(){return It(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function xm(n,e){return $r(ol(n),ol(e))}function ol(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function $r(n,e){return n?It(Object.create(null),n,e):e}function bc(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:It(Object.create(null),yc(n),yc(e??{})):e}function Sm(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Id(){return{app:null,config:{isNativeTag:hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ym=0;function Em(n,e){return function(i,r=null){Oe(i)||(i=It({},i)),r!=null&&!ot(r)&&(r=null);const s=Id(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ym++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:sg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Oe(u.install)?(o.add(u),u.install(c,...f)):Oe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||dt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ha(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(In(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=xr;xr=c;try{return u()}finally{xr=f}}};return c}}let xr=null;function Sr(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Ln(n,e,t=!1){const i=Rt||tn;if(i||xr){const r=xr?xr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i&&i.proxy):e}}const Dd={},Ud=()=>Object.create(Dd),Nd=n=>Object.getPrototypeOf(n)===Dd;function Mm(n,e,t,i=!1){const r={},s=Ud();n.propsDefaults=Object.create(null),Od(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:md(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(za(n.emitsOptions,d))continue;const p=e[d];if(l)if(Ke(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=mn(d);r[g]=ll(l,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Od(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Gi(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ll(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Wn(n.attrs,"set","")}function Od(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;r&&Ke(r,u=mn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ye(t),c=a||et;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ll(r,l,f,c[f],n,!Ke(c,f))}}return o}function ll(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ms(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}const Tm=new WeakMap;function Fd(n,e,t=!1){const i=t?Tm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[d,p]=Fd(f,e,!0);It(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ot(n)&&i.set(n,mr),mr;if(Ue(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);Tc(f)&&(o[f]=et)}else if(s)for(const u in s){const f=mn(u);if(Tc(f)){const d=s[u],p=o[f]=Ue(d)||Oe(d)?{type:d}:It({},d),g=p.type;let v=!1,m=!0;if(Ue(g))for(let h=0;h<g.length;++h){const x=g[h],_=Oe(x)&&x.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(m=!1)}else v=Oe(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||Ke(p,"default"))&&a.push(f)}}const c=[o,a];return ot(n)&&i.set(n,c),c}function Tc(n){return n[0]!=="$"&&!jr(n)}const $l=n=>n[0]==="_"||n==="$stable",jl=n=>Ue(n)?n.map(wn):[wn(n)],wm=(n,e,t)=>{if(e._n)return e;const i=qr((...r)=>jl(e(...r)),t);return i._c=!1,i},Bd=(n,e,t)=>{const i=n._ctx;for(const r in n){if($l(r))continue;const s=n[r];if(Oe(s))e[r]=wm(r,s,i);else if(s!=null){const o=jl(s);e[r]=()=>o}}},zd=(n,e)=>{const t=jl(e);n.slots.default=()=>t},Gd=(n,e,t)=>{for(const i in e)(t||!$l(i))&&(n[i]=e[i])},Am=(n,e,t)=>{const i=n.slots=Ud();if(n.vnode.shapeFlag&32){const r=e._;r?(Gd(i,e,t),t&&Zf(i,"_",r,!0)):Bd(e,i)}else e&&zd(n,e)},Cm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Gd(r,e,t):(s=!e.$stable,Bd(e,r)),o=e}else e&&(zd(n,e),o={default:1});if(s)for(const a in r)!$l(a)&&o[a]==null&&delete r[a]},Kt=Vm;function Rm(n){return Pm(n)}function Pm(n,e){const t=Da();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Pn,insertStaticContent:g}=n,v=(E,P,D,X=null,V=null,Q=null,se=void 0,b=null,S=!!P.dynamicChildren)=>{if(E===P)return;E&&!Or(E,P)&&(X=z(E),de(E,V,Q,!0),E=null),P.patchFlag===-2&&(S=!1,P.dynamicChildren=null);const{type:I,ref:Y,shapeFlag:G}=P;switch(I){case Ga:m(E,P,D,X);break;case br:h(E,P,D,X);break;case ra:E==null&&x(P,D,X,se);break;case Qt:H(E,P,D,X,V,Q,se,b,S);break;default:G&1?A(E,P,D,X,V,Q,se,b,S):G&6?K(E,P,D,X,V,Q,se,b,S):(G&64||G&128)&&I.process(E,P,D,X,V,Q,se,b,S,ue)}Y!=null&&V&&ha(Y,E&&E.ref,Q,P||E,!P)},m=(E,P,D,X)=>{if(E==null)i(P.el=a(P.children),D,X);else{const V=P.el=E.el;P.children!==E.children&&c(V,P.children)}},h=(E,P,D,X)=>{E==null?i(P.el=l(P.children||""),D,X):P.el=E.el},x=(E,P,D,X)=>{[E.el,E.anchor]=g(E.children,P,D,X,E.el,E.anchor)},_=({el:E,anchor:P},D,X)=>{let V;for(;E&&E!==P;)V=d(E),i(E,D,X),E=V;i(P,D,X)},y=({el:E,anchor:P})=>{let D;for(;E&&E!==P;)D=d(E),r(E),E=D;r(P)},A=(E,P,D,X,V,Q,se,b,S)=>{P.type==="svg"?se="svg":P.type==="math"&&(se="mathml"),E==null?R(P,D,X,V,Q,se,b,S):M(E,P,V,Q,se,b,S)},R=(E,P,D,X,V,Q,se,b)=>{let S,I;const{props:Y,shapeFlag:G,transition:j,dirs:fe}=E;if(S=E.el=o(E.type,Q,Y&&Y.is,Y),G&8?u(S,E.children):G&16&&B(E.children,S,null,X,V,ro(E,Q),se,b),fe&&yi(E,null,X,"created"),C(S,E,E.scopeId,se,X),Y){for(const pe in Y)pe!=="value"&&!jr(pe)&&s(S,pe,null,Y[pe],Q,X);"value"in Y&&s(S,"value",null,Y.value,Q),(I=Y.onVnodeBeforeMount)&&bn(I,X,E)}fe&&yi(E,null,X,"beforeMount");const le=Lm(V,j);le&&j.beforeEnter(S),i(S,P,D),((I=Y&&Y.onVnodeMounted)||le||fe)&&Kt(()=>{I&&bn(I,X,E),le&&j.enter(S),fe&&yi(E,null,X,"mounted")},V)},C=(E,P,D,X,V)=>{if(D&&p(E,D),X)for(let Q=0;Q<X.length;Q++)p(E,X[Q]);if(V){let Q=V.subTree;if(P===Q||qd(Q.type)&&(Q.ssContent===P||Q.ssFallback===P)){const se=V.vnode;C(E,se,se.scopeId,se.slotScopeIds,V.parent)}}},B=(E,P,D,X,V,Q,se,b,S=0)=>{for(let I=S;I<E.length;I++){const Y=E[I]=b?ai(E[I]):wn(E[I]);v(null,Y,P,D,X,V,Q,se,b)}},M=(E,P,D,X,V,Q,se)=>{const b=P.el=E.el;let{patchFlag:S,dynamicChildren:I,dirs:Y}=P;S|=E.patchFlag&16;const G=E.props||et,j=P.props||et;let fe;if(D&&Ei(D,!1),(fe=j.onVnodeBeforeUpdate)&&bn(fe,D,P,E),Y&&yi(P,E,D,"beforeUpdate"),D&&Ei(D,!0),(G.innerHTML&&j.innerHTML==null||G.textContent&&j.textContent==null)&&u(b,""),I?T(E.dynamicChildren,I,b,D,X,ro(P,V),Q):se||W(E,P,b,null,D,X,ro(P,V),Q,!1),S>0){if(S&16)U(b,G,j,D,V);else if(S&2&&G.class!==j.class&&s(b,"class",null,j.class,V),S&4&&s(b,"style",G.style,j.style,V),S&8){const le=P.dynamicProps;for(let pe=0;pe<le.length;pe++){const _e=le[pe],Ae=G[_e],ae=j[_e];(ae!==Ae||_e==="value")&&s(b,_e,Ae,ae,V,D)}}S&1&&E.children!==P.children&&u(b,P.children)}else!se&&I==null&&U(b,G,j,D,V);((fe=j.onVnodeUpdated)||Y)&&Kt(()=>{fe&&bn(fe,D,P,E),Y&&yi(P,E,D,"updated")},X)},T=(E,P,D,X,V,Q,se)=>{for(let b=0;b<P.length;b++){const S=E[b],I=P[b],Y=S.el&&(S.type===Qt||!Or(S,I)||S.shapeFlag&70)?f(S.el):D;v(S,I,Y,null,X,V,Q,se,!0)}},U=(E,P,D,X,V)=>{if(P!==D){if(P!==et)for(const Q in P)!jr(Q)&&!(Q in D)&&s(E,Q,P[Q],null,V,X);for(const Q in D){if(jr(Q))continue;const se=D[Q],b=P[Q];se!==b&&Q!=="value"&&s(E,Q,b,se,V,X)}"value"in D&&s(E,"value",P.value,D.value,V)}},H=(E,P,D,X,V,Q,se,b,S)=>{const I=P.el=E?E.el:a(""),Y=P.anchor=E?E.anchor:a("");let{patchFlag:G,dynamicChildren:j,slotScopeIds:fe}=P;fe&&(b=b?b.concat(fe):fe),E==null?(i(I,D,X),i(Y,D,X),B(P.children||[],D,Y,V,Q,se,b,S)):G>0&&G&64&&j&&E.dynamicChildren?(T(E.dynamicChildren,j,D,V,Q,se,b),(P.key!=null||V&&P===V.subTree)&&Hd(E,P,!0)):W(E,P,D,Y,V,Q,se,b,S)},K=(E,P,D,X,V,Q,se,b,S)=>{P.slotScopeIds=b,E==null?P.shapeFlag&512?V.ctx.activate(P,D,X,se,S):L(P,D,X,V,Q,se,S):F(E,P,S)},L=(E,P,D,X,V,Q,se)=>{const b=E.component=Jm(E,X,V);if(wd(E)&&(b.ctx.renderer=ue),Qm(b,!1,se),b.asyncDep){if(V&&V.registerDep(b,O,se),!E.el){const S=b.subTree=dt(br);h(null,S,P,D)}}else O(b,E,P,D,V,Q,se)},F=(E,P,D)=>{const X=P.component=E.component;if(Gm(E,P,D))if(X.asyncDep&&!X.asyncResolved){$(X,P,D);return}else X.next=P,X.update();else P.el=E.el,X.vnode=P},O=(E,P,D,X,V,Q,se)=>{const b=()=>{if(E.isMounted){let{next:G,bu:j,u:fe,parent:le,vnode:pe}=E;{const Le=Vd(E);if(Le){G&&(G.el=pe.el,$(E,G,se)),Le.asyncDep.then(()=>{E.isUnmounted||b()});return}}let _e=G,Ae;Ei(E,!1),G?(G.el=pe.el,$(E,G,se)):G=pe,j&&na(j),(Ae=G.props&&G.props.onVnodeBeforeUpdate)&&bn(Ae,le,G,pe),Ei(E,!0);const ae=Ac(E),Ge=E.subTree;E.subTree=ae,v(Ge,ae,f(Ge.el),z(Ge),E,V,Q),G.el=ae.el,_e===null&&Hm(E,ae.el),fe&&Kt(fe,V),(Ae=G.props&&G.props.onVnodeUpdated)&&Kt(()=>bn(Ae,le,G,pe),V)}else{let G;const{el:j,props:fe}=P,{bm:le,m:pe,parent:_e,root:Ae,type:ae}=E,Ge=Zr(P);Ei(E,!1),le&&na(le),!Ge&&(G=fe&&fe.onVnodeBeforeMount)&&bn(G,_e,P),Ei(E,!0);{Ae.ce&&Ae.ce._injectChildStyle(ae);const Le=E.subTree=Ac(E);v(null,Le,D,X,E,V,Q),P.el=Le.el}if(pe&&Kt(pe,V),!Ge&&(G=fe&&fe.onVnodeMounted)){const Le=P;Kt(()=>bn(G,_e,Le),V)}(P.shapeFlag&256||_e&&Zr(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&Kt(E.a,V),E.isMounted=!0,P=D=X=null}};E.scope.on();const S=E.effect=new td(b);E.scope.off();const I=E.update=S.run.bind(S),Y=E.job=S.runIfDirty.bind(S);Y.i=E,Y.id=E.uid,S.scheduler=()=>kl(Y),Ei(E,!0),I()},$=(E,P,D)=>{P.component=E;const X=E.vnode.props;E.vnode=P,E.next=null,bm(E,P.props,X,D),Cm(E,P.children,D),Yn(),xc(E),Kn()},W=(E,P,D,X,V,Q,se,b,S=!1)=>{const I=E&&E.children,Y=E?E.shapeFlag:0,G=P.children,{patchFlag:j,shapeFlag:fe}=P;if(j>0){if(j&128){ie(I,G,D,X,V,Q,se,b,S);return}else if(j&256){ne(I,G,D,X,V,Q,se,b,S);return}}fe&8?(Y&16&&Me(I,V,Q),G!==I&&u(D,G)):Y&16?fe&16?ie(I,G,D,X,V,Q,se,b,S):Me(I,V,Q,!0):(Y&8&&u(D,""),fe&16&&B(G,D,X,V,Q,se,b,S))},ne=(E,P,D,X,V,Q,se,b,S)=>{E=E||mr,P=P||mr;const I=E.length,Y=P.length,G=Math.min(I,Y);let j;for(j=0;j<G;j++){const fe=P[j]=S?ai(P[j]):wn(P[j]);v(E[j],fe,D,null,V,Q,se,b,S)}I>Y?Me(E,V,Q,!0,!1,G):B(P,D,X,V,Q,se,b,S,G)},ie=(E,P,D,X,V,Q,se,b,S)=>{let I=0;const Y=P.length;let G=E.length-1,j=Y-1;for(;I<=G&&I<=j;){const fe=E[I],le=P[I]=S?ai(P[I]):wn(P[I]);if(Or(fe,le))v(fe,le,D,null,V,Q,se,b,S);else break;I++}for(;I<=G&&I<=j;){const fe=E[G],le=P[j]=S?ai(P[j]):wn(P[j]);if(Or(fe,le))v(fe,le,D,null,V,Q,se,b,S);else break;G--,j--}if(I>G){if(I<=j){const fe=j+1,le=fe<Y?P[fe].el:X;for(;I<=j;)v(null,P[I]=S?ai(P[I]):wn(P[I]),D,le,V,Q,se,b,S),I++}}else if(I>j)for(;I<=G;)de(E[I],V,Q,!0),I++;else{const fe=I,le=I,pe=new Map;for(I=le;I<=j;I++){const ve=P[I]=S?ai(P[I]):wn(P[I]);ve.key!=null&&pe.set(ve.key,I)}let _e,Ae=0;const ae=j-le+1;let Ge=!1,Le=0;const Re=new Array(ae);for(I=0;I<ae;I++)Re[I]=0;for(I=fe;I<=G;I++){const ve=E[I];if(Ae>=ae){de(ve,V,Q,!0);continue}let Ce;if(ve.key!=null)Ce=pe.get(ve.key);else for(_e=le;_e<=j;_e++)if(Re[_e-le]===0&&Or(ve,P[_e])){Ce=_e;break}Ce===void 0?de(ve,V,Q,!0):(Re[Ce-le]=I+1,Ce>=Le?Le=Ce:Ge=!0,v(ve,P[Ce],D,null,V,Q,se,b,S),Ae++)}const we=Ge?Im(Re):mr;for(_e=we.length-1,I=ae-1;I>=0;I--){const ve=le+I,Ce=P[ve],qe=ve+1<Y?P[ve+1].el:X;Re[I]===0?v(null,Ce,D,qe,V,Q,se,b,S):Ge&&(_e<0||I!==we[_e]?he(Ce,D,qe,2):_e--)}}},he=(E,P,D,X,V=null)=>{const{el:Q,type:se,transition:b,children:S,shapeFlag:I}=E;if(I&6){he(E.component.subTree,P,D,X);return}if(I&128){E.suspense.move(P,D,X);return}if(I&64){se.move(E,P,D,ue);return}if(se===Qt){i(Q,P,D);for(let G=0;G<S.length;G++)he(S[G],P,D,X);i(E.anchor,P,D);return}if(se===ra){_(E,P,D);return}if(X!==2&&I&1&&b)if(X===0)b.beforeEnter(Q),i(Q,P,D),Kt(()=>b.enter(Q),V);else{const{leave:G,delayLeave:j,afterLeave:fe}=b,le=()=>{E.ctx.isUnmounted?r(Q):i(Q,P,D)},pe=()=>{G(Q,()=>{le(),fe&&fe()})};j?j(Q,le,pe):pe()}else i(Q,P,D)},de=(E,P,D,X=!1,V=!1)=>{const{type:Q,props:se,ref:b,children:S,dynamicChildren:I,shapeFlag:Y,patchFlag:G,dirs:j,cacheIndex:fe}=E;if(G===-2&&(V=!1),b!=null&&(Yn(),ha(b,null,D,E,!0),Kn()),fe!=null&&(P.renderCache[fe]=void 0),Y&256){P.ctx.deactivate(E);return}const le=Y&1&&j,pe=!Zr(E);let _e;if(pe&&(_e=se&&se.onVnodeBeforeUnmount)&&bn(_e,P,E),Y&6)xe(E.component,D,X);else{if(Y&128){E.suspense.unmount(D,X);return}le&&yi(E,null,P,"beforeUnmount"),Y&64?E.type.remove(E,P,D,ue,X):I&&!I.hasOnce&&(Q!==Qt||G>0&&G&64)?Me(I,P,D,!1,!0):(Q===Qt&&G&384||!V&&Y&16)&&Me(S,P,D),X&&te(E)}(pe&&(_e=se&&se.onVnodeUnmounted)||le)&&Kt(()=>{_e&&bn(_e,P,E),le&&yi(E,null,P,"unmounted")},D)},te=E=>{const{type:P,el:D,anchor:X,transition:V}=E;if(P===Qt){ce(D,X);return}if(P===ra){y(E);return}const Q=()=>{r(D),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:se,delayLeave:b}=V,S=()=>se(D,Q);b?b(E.el,Q,S):S()}else Q()},ce=(E,P)=>{let D;for(;E!==P;)D=d(E),r(E),E=D;r(P)},xe=(E,P,D)=>{const{bum:X,scope:V,job:Q,subTree:se,um:b,m:S,a:I,parent:Y,slots:{__:G}}=E;wc(S),wc(I),X&&na(X),Y&&Ue(G)&&G.forEach(j=>{Y.renderCache[j]=void 0}),V.stop(),Q&&(Q.flags|=8,de(se,E,P,D)),b&&Kt(b,P),Kt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Me=(E,P,D,X=!1,V=!1,Q=0)=>{for(let se=Q;se<E.length;se++)de(E[se],P,D,X,V)},z=E=>{if(E.shapeFlag&6)return z(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const P=d(E.anchor||E.el),D=P&&P[tm];return D?d(D):P};let oe=!1;const re=(E,P,D)=>{E==null?P._vnode&&de(P._vnode,null,null,!0):v(P._vnode||null,E,P,null,null,null,D),P._vnode=E,oe||(oe=!0,xc(),yd(),oe=!1)},ue={p:v,um:de,m:he,r:te,mt:L,mc:B,pc:W,pbc:T,n:z,o:n};return{render:re,hydrate:void 0,createApp:Em(re)}}function ro({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ei({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Lm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hd(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ai(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Hd(o,a)),a.type===Ga&&(a.el=o.el),a.type===br&&!a.el&&(a.el=o.el)}}function Im(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Vd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vd(e)}function wc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Dm=Symbol.for("v-scx"),Um=()=>Ln(Dm);function Qr(n,e,t){return kd(n,e,t)}function kd(n,e,t=et){const{immediate:i,deep:r,flush:s,once:o}=t,a=It({},t),l=e&&i||!e&&s!=="post";let c;if(ls){if(s==="sync"){const p=Um();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Pn,p.resume=Pn,p.pause=Pn,p}}const u=Rt;a.call=(p,g,v)=>In(p,u,g,v);let f=!1;s==="post"?a.scheduler=p=>{Kt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():kl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Zp(n,e,a);return ls&&(c?c.push(d):l&&d()),d}function Nm(n,e,t){const i=this.proxy,r=mt(n)?n.includes(".")?Wd(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=ms(this),a=kd(r,s.bind(i),t);return o(),a}function Wd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${mn(e)}Modifiers`]||n[`${Gi(e)}Modifiers`];function Fm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let r=t;const s=e.startsWith("update:"),o=s&&Om(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>mt(u)?u.trim():u)),o.number&&(r=t.map(el)));let a,l=i[a=Za(e)]||i[a=Za(mn(e))];!l&&s&&(l=i[a=Za(Gi(e))]),l&&In(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,In(c,n,6,r)}}function Xd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const u=Xd(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ot(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>o[l]=null):It(o,s),ot(n)&&i.set(n,o),o)}function za(n,e){return!n||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Gi(e))||Ke(n,e))}function Ac(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=da(n);let h,x;try{if(t.shapeFlag&4){const y=r||i,A=y;h=wn(c.call(A,y,u,f,p,d,g)),x=a}else{const y=e;h=wn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),x=e.props?a:Bm(a)}}catch(y){es.length=0,Oa(y,n,1),h=dt(br)}let _=h;if(x&&v!==!1){const y=Object.keys(x),{shapeFlag:A}=_;y.length&&A&7&&(s&&y.some(Ll)&&(x=zm(x,s)),_=Tr(_,x,!1,!0))}return t.dirs&&(_=Tr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&Wl(_,t.transition),h=_,da(m),h}const Bm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ra(t))&&((e||(e={}))[t]=n[t]);return e},zm=(n,e)=>{const t={};for(const i in n)(!Ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Cc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!za(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cc(i,o,c):!0:!!o;return!1}function Cc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!za(t,s))return!0}return!1}function Hm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const qd=n=>n.__isSuspense;function Vm(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):em(n)}const Qt=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),es=[];let nn=null;function Vt(n=!1){es.push(nn=n?null:[])}function km(){es.pop(),nn=es[es.length-1]||null}let os=1;function Rc(n,e=!1){os+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function $d(n){return n.dynamicChildren=os>0?nn||mr:null,km(),os>0&&nn&&nn.push(n),n}function Zt(n,e,t,i,r,s){return $d(Ze(n,e,t,i,r,s,!0))}function Wm(n,e,t,i,r){return $d(dt(n,e,t,i,r,!0))}function ma(n){return n?n.__v_isVNode===!0:!1}function Or(n,e){return n.type===e.type&&n.key===e.key}const jd=({key:n})=>n??null,sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||Pt(n)||Oe(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function Ze(n,e=null,t=null,i=0,r=null,s=n===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jd(e),ref:e&&sa(e),scopeId:Md,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(Yl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),os>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const dt=Xm;function Xm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===hm)&&(n=br),ma(n)){const a=Tr(n,e,!0);return t&&Yl(a,t),os>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(rg(n)&&(n=n.__vccOpts),e){e=qm(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=hs(a)),ot(l)&&(Hl(l)&&!Ue(l)&&(l=It({},l)),e.style=Ul(l))}const o=mt(n)?1:qd(n)?128:nm(n)?64:ot(n)?4:Oe(n)?2:0;return Ze(n,e,t,i,r,o,s,!0)}function qm(n){return n?Hl(n)||Nd(n)?It({},n):n:null}function Tr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Ym(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jd(c),ref:e&&e.ref?t&&s?Ue(s)?s.concat(sa(e)):[s,sa(e)]:sa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Tr(n.ssContent),ssFallback:n.ssFallback&&Tr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wl(u,l.clone(u)),u}function $m(n=" ",e=0){return dt(Ga,null,n,e)}function jm(n,e){const t=dt(ra,null,n);return t.staticCount=e,t}function wn(n){return n==null||typeof n=="boolean"?dt(br):Ue(n)?dt(Qt,null,n.slice()):ma(n)?ai(n):dt(Ga,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Tr(n)}function Yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Nd(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[$m(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ym(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=hs([e.class,i.class]));else if(r==="style")e.style=Ul([e.style,i.style]);else if(Ra(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function bn(n,e,t,i=null){In(n,e,7,[t,i])}const Km=Id();let Zm=0;function Jm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Km,s={uid:Zm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(i,r),emitsOptions:Xd(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fm.bind(null,s),n.ce&&n.ce(s),s}let Rt=null,ga,cl;{const n=Da(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ga=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),cl=e("__VUE_SSR_SETTERS__",t=>ls=t)}const ms=n=>{const e=Rt;return ga(n),n.scope.on(),()=>{n.scope.off(),ga(e)}},Pc=()=>{Rt&&Rt.scope.off(),ga(null)};function Yd(n){return n.vnode.shapeFlag&4}let ls=!1;function Qm(n,e=!1,t=!1){e&&cl(e);const{props:i,children:r}=n.vnode,s=Yd(n);Mm(n,i,s,e),Am(n,r,t||e);const o=s?eg(n,e):void 0;return e&&cl(!1),o}function eg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mm);const{setup:i}=t;if(i){Yn();const r=n.setupContext=i.length>1?ng(n):null,s=ms(n),o=ps(i,n,0,[n.props,r]),a=jf(o);if(Kn(),s(),(a||n.sp)&&!Zr(n)&&Td(n),a){if(o.then(Pc,Pc),e)return o.then(l=>{Lc(n,l)}).catch(l=>{Oa(l,n,0)});n.asyncDep=o}else Lc(n,o)}else Kd(n)}function Lc(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ot(e)&&(n.setupState=vd(e)),Kd(n)}function Kd(n,e,t){const i=n.type;n.render||(n.render=i.render||Pn);{const r=ms(n);Yn();try{gm(n)}finally{Kn(),r()}}}const tg={get(n,e){return Ct(n,"get",""),n[e]}};function ng(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tg),slots:n.slots,emit:n.emit,expose:e}}function Ha(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vd(Wp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Jr)return Jr[t](n)},has(e,t){return t in e||t in Jr}})):n.proxy}function ig(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function rg(n){return Oe(n)&&"__vccOpts"in n}const en=(n,e)=>Yp(n,e,ls);function kt(n,e,t){const i=arguments.length;return i===2?ot(e)&&!Ue(e)?ma(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ma(t)&&(t=[t]),dt(n,e,t))}const sg="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const Ic=typeof window<"u"&&window.trustedTypes;if(Ic)try{ul=Ic.createPolicy("vue",{createHTML:n=>n})}catch{}const Zd=ul?n=>ul.createHTML(n):n=>n,ag="http://www.w3.org/2000/svg",og="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Dc=kn&&kn.createElement("template"),lg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?kn.createElementNS(ag,n):e==="mathml"?kn.createElementNS(og,n):t?kn.createElement(n,{is:t}):kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>kn.createTextNode(n),createComment:n=>kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Dc.innerHTML=Zd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cg=Symbol("_vtc");function ug(n,e,t){const i=n[cg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uc=Symbol("_vod"),fg=Symbol("_vsh"),dg=Symbol(""),hg=/(^|;)\s*display\s*:/;function pg(n,e,t){const i=n.style,r=mt(t);let s=!1;if(t&&!r){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&aa(i,a,"")}else for(const o in e)t[o]==null&&aa(i,o,"");for(const o in t)o==="display"&&(s=!0),aa(i,o,t[o])}else if(r){if(e!==t){const o=i[dg];o&&(t+=";"+o),i.cssText=t,s=hg.test(t)}}else e&&n.removeAttribute("style");Uc in n&&(n[Uc]=s?i.display:"",n[fg]&&(i.display="none"))}const Nc=/\s*!important$/;function aa(n,e,t){if(Ue(t))t.forEach(i=>aa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mg(n,e);Nc.test(t)?n.setProperty(Gi(i),t.replace(Nc,""),"important"):n[i]=t}}const Oc=["Webkit","Moz","ms"],so={};function mg(n,e){const t=so[e];if(t)return t;let i=mn(e);if(i!=="filter"&&i in n)return so[e]=i;i=Ia(i);for(let r=0;r<Oc.length;r++){const s=Oc[r]+i;if(s in n)return so[e]=s}return e}const Fc="http://www.w3.org/1999/xlink";function Bc(n,e,t,i,r,s=Mp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fc,e.slice(6,e.length)):n.setAttributeNS(Fc,e,t):t==null||s&&!Jf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":vi(t)?String(t):t)}function zc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Jf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function fr(n,e,t,i){n.addEventListener(e,t,i)}function gg(n,e,t,i){n.removeEventListener(e,t,i)}const Gc=Symbol("_vei");function _g(n,e,t,i,r=null){const s=n[Gc]||(n[Gc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=vg(e);if(i){const c=s[e]=yg(i,r);fr(n,a,c,l)}else o&&(gg(n,a,o,l),s[e]=void 0)}}const Hc=/(?:Once|Passive|Capture)$/;function vg(n){let e;if(Hc.test(n)){e={};let i;for(;i=n.match(Hc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let ao=0;const xg=Promise.resolve(),Sg=()=>ao||(xg.then(()=>ao=0),ao=Date.now());function yg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;In(Eg(i,t.value),e,5,[i])};return t.value=n,t.attached=Sg(),t}function Eg(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Vc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?ug(n,i,o):e==="style"?pg(n,t,i):Ra(e)?Ll(e)||_g(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bg(n,e,i,o))?(zc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!mt(i))?zc(n,mn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bc(n,e,i,o))};function bg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vc(e)&&Oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vc(e)&&mt(t)?!1:e in n}const kc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ue(e)?t=>na(e,t):e};function Tg(n){n.target.composing=!0}function Wc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oo=Symbol("_assign"),lo={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[oo]=kc(r);const s=i||r.props&&r.props.type==="number";fr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=el(a)),n[oo](a)}),t&&fr(n,"change",()=>{n.value=n.value.trim()}),e||(fr(n,"compositionstart",Tg),fr(n,"compositionend",Wc),fr(n,"change",Wc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[oo]=kc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},wg=It({patchProp:Mg},lg);let Xc;function Ag(){return Xc||(Xc=Rm(wg))}const Cg=(...n)=>{const e=Ag().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Pg(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Rg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Rg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pg(n){return mt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const dr=typeof document<"u";function Jd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Lg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Jd(n.default)}const je=Object.assign;function co(n,e){const t={};for(const i in e){const r=e[i];t[i]=En(r)?r.map(n):n(r)}return t}const ts=()=>{},En=Array.isArray,Qd=/#/g,Ig=/&/g,Dg=/\//g,Ug=/=/g,Ng=/\?/g,eh=/\+/g,Og=/%5B/g,Fg=/%5D/g,th=/%5E/g,Bg=/%60/g,nh=/%7B/g,zg=/%7C/g,ih=/%7D/g,Gg=/%20/g;function Kl(n){return encodeURI(""+n).replace(zg,"|").replace(Og,"[").replace(Fg,"]")}function Hg(n){return Kl(n).replace(nh,"{").replace(ih,"}").replace(th,"^")}function fl(n){return Kl(n).replace(eh,"%2B").replace(Gg,"+").replace(Qd,"%23").replace(Ig,"%26").replace(Bg,"`").replace(nh,"{").replace(ih,"}").replace(th,"^")}function Vg(n){return fl(n).replace(Ug,"%3D")}function kg(n){return Kl(n).replace(Qd,"%23").replace(Ng,"%3F")}function Wg(n){return n==null?"":kg(n).replace(Dg,"%2F")}function cs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Xg=/\/$/,qg=n=>n.replace(Xg,"");function uo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Kg(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:cs(o)}}function $g(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function jg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&wr(e.matched[i],t.matched[r])&&rh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function wr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function rh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Yg(n[t],e[t]))return!1;return!0}function Yg(n,e){return En(n)?$c(n,e):En(e)?$c(e,n):n===e}function $c(n,e){return En(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Kg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var us;(function(n){n.pop="pop",n.push="push"})(us||(us={}));var ns;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ns||(ns={}));function Zg(n){if(!n)if(dr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),qg(n)}const Jg=/^[^#]+#/;function Qg(n,e){return n.replace(Jg,"#")+e}function e_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Va=()=>({left:window.scrollX,top:window.scrollY});function t_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=e_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jc(n,e){return(history.state?history.state.position-e:-1)+n}const dl=new Map;function n_(n,e){dl.set(n,e)}function i_(n){const e=dl.get(n);return dl.delete(n),e}let r_=()=>location.protocol+"//"+location.host;function sh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qc(l,"")}return qc(t,n)+i+r}function s_(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=sh(n,location),g=t.value,v=e.value;let m=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(t.value,g,{delta:m,type:us.pop,direction:m?m>0?ns.forward:ns.back:ns.unknown})})};function l(){o=t.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(je({},d.state,{scroll:Va()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Yc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Va():null}}function a_(n){const{history:e,location:t}=window,i={value:sh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:r_()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(l,c){const u=je({},e.state,Yc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=je({},r.value,e.state,{forward:l,scroll:Va()});s(u.current,u,!0);const f=je({},Yc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function o_(n){n=Zg(n);const e=a_(n),t=s_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=je({location:"",base:n,go:i,createHref:Qg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function l_(n){return typeof n=="string"||n&&typeof n=="object"}function ah(n){return typeof n=="string"||typeof n=="symbol"}const oh=Symbol("");var Kc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Kc||(Kc={}));function Ar(n,e){return je(new Error,{type:n,[oh]:!0},e)}function Nn(n,e){return n instanceof Error&&oh in n&&(e==null||!!(n.type&e))}const Zc="[^/]+?",c_={sensitive:!1,strict:!1,start:!0,end:!0},u_=/[.+*?^${}()[\]/\\]/g;function f_(n,e){const t=je({},c_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(u_,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:h}=d;s.push({name:g,repeatable:v,optional:m});const x=h||Zc;if(x!==Zc){p+=10;try{new RegExp(`(${x})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+y.message)}}let _=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,p+=20,m&&(p+=-8),v&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:m}=p,h=g in c?c[g]:"";if(En(h)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=En(h)?h.join("/"):h;if(!x)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function d_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=d_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Jc(i))return 1;if(Jc(r))return-1}return r.length-i.length}function Jc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const h_={type:0,value:""},p_=/[a-zA-Z0-9_]/;function m_(n){if(!n)return[[]];if(n==="/")return[[h_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:p_.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function g_(n,e,t){const i=f_(m_(n.path),t),r=je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function __(n,e){const t=[],i=new Map;e=nu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const g=!p,v=eu(f);v.aliasOf=p&&p.record;const m=nu(e,f),h=[v];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of y)h.push(eu(je({},v,{components:p?p.record.components:v.components,path:A,aliasOf:p?p.record:v})))}let x,_;for(const y of h){const{path:A}=y;if(d&&A[0]!=="/"){const R=d.record.path,C=R[R.length-1]==="/"?"":"/";y.path=d.record.path+(A&&C+A)}if(x=g_(y,d,m),p?p.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),g&&f.name&&!tu(x)&&o(f.name)),ch(x)&&l(x),v.children){const R=v.children;for(let C=0;C<R.length;C++)s(R[C],x,p&&p.children[C])}p=p||x}return _?()=>{o(_)}:ts}function o(f){if(ah(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=S_(f,t);t.splice(d,0,f),f.record.name&&!tu(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Ar(1,{location:f});m=p.record.name,g=je(Qc(d.params,p.keys.filter(_=>!_.optional).concat(p.parent?p.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Qc(f.params,p.keys.map(_=>_.name))),v=p.stringify(g)}else if(f.path!=null)v=f.path,p=t.find(_=>_.re.test(v)),p&&(g=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):t.find(_=>_.re.test(d.path)),!p)throw Ar(1,{location:f,currentLocation:d});m=p.record.name,g=je({},d.params,f.params),v=p.stringify(g)}const h=[];let x=p;for(;x;)h.unshift(x.record),x=x.parent;return{name:m,path:v,params:g,matched:h,meta:x_(h)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Qc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function eu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:v_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function v_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function tu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function x_(n){return n.reduce((e,t)=>je(e,t.meta),{})}function nu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function S_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;lh(n,e[s])<0?i=s:t=s+1}const r=y_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function y_(n){let e=n;for(;e=e.parent;)if(ch(e)&&lh(n,e)===0)return e}function ch({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function E_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(eh," "),o=s.indexOf("="),a=cs(o<0?s:s.slice(0,o)),l=o<0?null:cs(s.slice(o+1));if(a in e){let c=e[a];En(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function iu(n){let e="";for(let t in n){const i=n[t];if(t=Vg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(En(i)?i.map(s=>s&&fl(s)):[i&&fl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function M_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=En(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const b_=Symbol(""),ru=Symbol(""),Zl=Symbol(""),Jl=Symbol(""),hl=Symbol("");function Fr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function oi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ar(4,{from:t,to:e})):d instanceof Error?l(d):l_(d)?l(Ar(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function fo(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Jd(l)){const u=(l.__vccOpts||l)[e];u&&s.push(oi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Lg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&oi(p,t,i,o,a,r)()}))}}return s}function su(n){const e=Ln(Zl),t=Ln(Jl),i=en(()=>{const l=ln(n.to);return e.resolve(l)}),r=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(wr.bind(null,u));if(d>-1)return d;const p=au(l[c-2]);return c>1&&au(u)===p&&f[f.length-1].path!==p?f.findIndex(wr.bind(null,l[c-2])):d}),s=en(()=>r.value>-1&&R_(t.params,i.value.params)),o=en(()=>r.value>-1&&r.value===t.matched.length-1&&rh(t.params,i.value.params));function a(l={}){if(C_(l)){const c=e[ln(n.replace)?"replace":"push"](ln(n.to)).catch(ts);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function T_(n){return n.length===1?n[0]:n}const w_=bd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:su,setup(n,{slots:e}){const t=Na(su(n)),{options:i}=Ln(Zl),r=en(()=>({[ou(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ou(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&T_(e.default(t));return n.custom?s:kt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),A_=w_;function C_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function R_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!En(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function au(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ou=(n,e,t)=>n??e??t,P_=bd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ln(hl),r=en(()=>n.route||i.value),s=Ln(ru,0),o=en(()=>{let c=ln(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=en(()=>r.value.matched[o.value]);Sr(ru,en(()=>o.value+1)),Sr(b_,a),Sr(hl,r);const l=at();return Qr(()=>[l.value,a.value,n.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!wr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return lu(t.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=kt(d,je({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return lu(t.default,{Component:m,route:c})||m}}});function lu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const L_=P_;function I_(n){const e=__(n.routes,n),t=n.parseQuery||E_,i=n.stringifyQuery||iu,r=n.history,s=Fr(),o=Fr(),a=Fr(),l=Xp(Qn);let c=Qn;dr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=co.bind(null,z=>""+z),f=co.bind(null,Wg),d=co.bind(null,cs);function p(z,oe){let re,ue;return ah(z)?(re=e.getRecordMatcher(z),ue=oe):ue=z,e.addRoute(ue,re)}function g(z){const oe=e.getRecordMatcher(z);oe&&e.removeRoute(oe)}function v(){return e.getRoutes().map(z=>z.record)}function m(z){return!!e.getRecordMatcher(z)}function h(z,oe){if(oe=je({},oe||l.value),typeof z=="string"){const D=uo(t,z,oe.path),X=e.resolve({path:D.path},oe),V=r.createHref(D.fullPath);return je(D,X,{params:d(X.params),hash:cs(D.hash),redirectedFrom:void 0,href:V})}let re;if(z.path!=null)re=je({},z,{path:uo(t,z.path,oe.path).path});else{const D=je({},z.params);for(const X in D)D[X]==null&&delete D[X];re=je({},z,{params:f(D)}),oe.params=f(oe.params)}const ue=e.resolve(re,oe),be=z.hash||"";ue.params=u(d(ue.params));const E=$g(i,je({},z,{hash:Hg(be),path:ue.path})),P=r.createHref(E);return je({fullPath:E,hash:be,query:i===iu?M_(z.query):z.query||{}},ue,{redirectedFrom:void 0,href:P})}function x(z){return typeof z=="string"?uo(t,z,l.value.path):je({},z)}function _(z,oe){if(c!==z)return Ar(8,{from:oe,to:z})}function y(z){return C(z)}function A(z){return y(je(x(z),{replace:!0}))}function R(z){const oe=z.matched[z.matched.length-1];if(oe&&oe.redirect){const{redirect:re}=oe;let ue=typeof re=="function"?re(z):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=x(ue):{path:ue},ue.params={}),je({query:z.query,hash:z.hash,params:ue.path!=null?{}:z.params},ue)}}function C(z,oe){const re=c=h(z),ue=l.value,be=z.state,E=z.force,P=z.replace===!0,D=R(re);if(D)return C(je(x(D),{state:typeof D=="object"?je({},be,D.state):be,force:E,replace:P}),oe||re);const X=re;X.redirectedFrom=oe;let V;return!E&&jg(i,ue,re)&&(V=Ar(16,{to:X,from:ue}),he(ue,ue,!0,!1)),(V?Promise.resolve(V):T(X,ue)).catch(Q=>Nn(Q)?Nn(Q,2)?Q:ie(Q):W(Q,X,ue)).then(Q=>{if(Q){if(Nn(Q,2))return C(je({replace:P},x(Q.to),{state:typeof Q.to=="object"?je({},be,Q.to.state):be,force:E}),oe||X)}else Q=H(X,ue,!0,P,be);return U(X,ue,Q),Q})}function B(z,oe){const re=_(z,oe);return re?Promise.reject(re):Promise.resolve()}function M(z){const oe=ce.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(z):z()}function T(z,oe){let re;const[ue,be,E]=D_(z,oe);re=fo(ue.reverse(),"beforeRouteLeave",z,oe);for(const D of ue)D.leaveGuards.forEach(X=>{re.push(oi(X,z,oe))});const P=B.bind(null,z,oe);return re.push(P),Me(re).then(()=>{re=[];for(const D of s.list())re.push(oi(D,z,oe));return re.push(P),Me(re)}).then(()=>{re=fo(be,"beforeRouteUpdate",z,oe);for(const D of be)D.updateGuards.forEach(X=>{re.push(oi(X,z,oe))});return re.push(P),Me(re)}).then(()=>{re=[];for(const D of E)if(D.beforeEnter)if(En(D.beforeEnter))for(const X of D.beforeEnter)re.push(oi(X,z,oe));else re.push(oi(D.beforeEnter,z,oe));return re.push(P),Me(re)}).then(()=>(z.matched.forEach(D=>D.enterCallbacks={}),re=fo(E,"beforeRouteEnter",z,oe,M),re.push(P),Me(re))).then(()=>{re=[];for(const D of o.list())re.push(oi(D,z,oe));return re.push(P),Me(re)}).catch(D=>Nn(D,8)?D:Promise.reject(D))}function U(z,oe,re){a.list().forEach(ue=>M(()=>ue(z,oe,re)))}function H(z,oe,re,ue,be){const E=_(z,oe);if(E)return E;const P=oe===Qn,D=dr?history.state:{};re&&(ue||P?r.replace(z.fullPath,je({scroll:P&&D&&D.scroll},be)):r.push(z.fullPath,be)),l.value=z,he(z,oe,re,P),ie()}let K;function L(){K||(K=r.listen((z,oe,re)=>{if(!xe.listening)return;const ue=h(z),be=R(ue);if(be){C(je(be,{replace:!0,force:!0}),ue).catch(ts);return}c=ue;const E=l.value;dr&&n_(jc(E.fullPath,re.delta),Va()),T(ue,E).catch(P=>Nn(P,12)?P:Nn(P,2)?(C(je(x(P.to),{force:!0}),ue).then(D=>{Nn(D,20)&&!re.delta&&re.type===us.pop&&r.go(-1,!1)}).catch(ts),Promise.reject()):(re.delta&&r.go(-re.delta,!1),W(P,ue,E))).then(P=>{P=P||H(ue,E,!1),P&&(re.delta&&!Nn(P,8)?r.go(-re.delta,!1):re.type===us.pop&&Nn(P,20)&&r.go(-1,!1)),U(ue,E,P)}).catch(ts)}))}let F=Fr(),O=Fr(),$;function W(z,oe,re){ie(z);const ue=O.list();return ue.length?ue.forEach(be=>be(z,oe,re)):console.error(z),Promise.reject(z)}function ne(){return $&&l.value!==Qn?Promise.resolve():new Promise((z,oe)=>{F.add([z,oe])})}function ie(z){return $||($=!z,L(),F.list().forEach(([oe,re])=>z?re(z):oe()),F.reset()),z}function he(z,oe,re,ue){const{scrollBehavior:be}=n;if(!dr||!be)return Promise.resolve();const E=!re&&i_(jc(z.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return Vl().then(()=>be(z,oe,E)).then(P=>P&&t_(P)).catch(P=>W(P,z,oe))}const de=z=>r.go(z);let te;const ce=new Set,xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:n,push:y,replace:A,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:ne,install(z){const oe=this;z.component("RouterLink",A_),z.component("RouterView",L_),z.config.globalProperties.$router=oe,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(l)}),dr&&!te&&l.value===Qn&&(te=!0,y(r.location).catch(be=>{}));const re={};for(const be in Qn)Object.defineProperty(re,be,{get:()=>l.value[be],enumerable:!0});z.provide(Zl,oe),z.provide(Jl,md(re)),z.provide(hl,l);const ue=z.unmount;ce.add(z),z.unmount=function(){ce.delete(z),ce.size<1&&(c=Qn,K&&K(),K=null,l.value=Qn,te=!1,$=!1),ue()}}};function Me(z){return z.reduce((oe,re)=>oe.then(()=>M(re)),Promise.resolve())}return xe}function D_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>wr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>wr(c,l))||r.push(l))}return[t,i,r]}function U_(n){return Ln(Jl)}const Ql=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},N_={class:"bg-black bg-opacity-30 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur font-futuristic"},O_={class:"max-w-6xl mx-auto flex justify-between items-center px-6 py-4"},F_={class:"flex gap-8 text-lg font-light"},B_=["href"],z_={__name:"NavBar",setup(n){const e=[{label:"Home",href:"/"},{label:"Portfolio",href:"/portfolio"},{label:"Contact",href:"/Contact"}];return(t,i)=>(Vt(),Zt("header",N_,[Ze("nav",O_,[i[0]||(i[0]=Ze("div",{class:"text-2xl font-bold tracking-widest"},"SAXUM",-1)),Ze("ul",F_,[(Vt(),Zt(Qt,null,ia(e,r=>Ze("li",{key:r.label},[Ze("a",{href:r.href,class:"transition duration-300 ease-in-out neon-hover"},Ii(r.label),9,B_)])),64))])])]))}},uh=Ql(z_,[["__scopeId","data-v-804ae514"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="160",G_=0,cu=1,H_=2,fh=1,V_=2,Hn=3,_i=0,Xt=1,Cn=2,di=0,yr=1,uu=2,fu=3,du=4,k_=5,Pi=100,W_=101,X_=102,hu=103,pu=104,q_=200,$_=201,j_=202,Y_=203,pl=204,ml=205,K_=206,Z_=207,J_=208,Q_=209,ev=210,tv=211,nv=212,iv=213,rv=214,sv=0,av=1,ov=2,_a=3,lv=4,cv=5,uv=6,fv=7,dh=0,dv=1,hv=2,hi=0,pv=1,mv=2,gv=3,_v=4,vv=5,xv=6,hh=300,Cr=301,Rr=302,gl=303,_l=304,ka=306,vl=1e3,xn=1001,xl=1002,Bt=1003,mu=1004,ho=1005,cn=1006,Sv=1007,fs=1008,pi=1009,yv=1010,Ev=1011,tc=1012,ph=1013,li=1014,ci=1015,ds=1016,mh=1017,gh=1018,Ui=1020,Mv=1021,Sn=1023,bv=1024,Tv=1025,Ni=1026,Pr=1027,wv=1028,_h=1029,Av=1030,vh=1031,xh=1033,po=33776,mo=33777,go=33778,_o=33779,gu=35840,_u=35841,vu=35842,xu=35843,Sh=36196,Su=37492,yu=37496,Eu=37808,Mu=37809,bu=37810,Tu=37811,wu=37812,Au=37813,Cu=37814,Ru=37815,Pu=37816,Lu=37817,Iu=37818,Du=37819,Uu=37820,Nu=37821,vo=36492,Ou=36494,Fu=36495,Cv=36283,Bu=36284,zu=36285,Gu=36286,yh=3e3,Oi=3001,Rv=3200,Pv=3201,Lv=0,Iv=1,dn="",Et="srgb",Zn="srgb-linear",nc="display-p3",Wa="display-p3-linear",va="linear",st="srgb",xa="rec709",Sa="p3",Wi=7680,Hu=519,Dv=512,Uv=513,Nv=514,Eh=515,Ov=516,Fv=517,Bv=518,zv=519,Sl=35044,Vu="300 es",yl=1035,$n=2e3,ya=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,El=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Gv(n,e){return(n%e+e)%e}function So(n,e,t){return(1-t)*n+t*e}function ku(n){return(n&n-1)===0&&n!==0}function Ml(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],x=r[1],_=r[4],y=r[7],A=r[2],R=r[5],C=r[8];return s[0]=o*v+a*x+l*A,s[3]=o*m+a*_+l*R,s[6]=o*h+a*y+l*C,s[1]=c*v+u*x+f*A,s[4]=c*m+u*_+f*R,s[7]=c*h+u*y+f*C,s[2]=d*v+p*x+g*A,s[5]=d*m+p*_+g*R,s[8]=d*h+p*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new We;function Mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hv(){const n=Ea("canvas");return n.style.display="block",n}const Wu={};function is(n){n in Wu||(Wu[n]=!0,console.warn(n))}const Xu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[Zn]:{transfer:va,primaries:xa,toReference:n=>n,fromReference:n=>n},[Et]:{transfer:st,primaries:xa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wa]:{transfer:va,primaries:Sa,toReference:n=>n.applyMatrix3(qu),fromReference:n=>n.applyMatrix3(Xu)},[nc]:{transfer:st,primaries:Sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qu),fromReference:n=>n.applyMatrix3(Xu).convertLinearToSRGB()}},Vv=new Set([Zn,Wa]),Je={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ts[e].toReference,r=Ts[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ts[n].primaries},getTransfer:function(n){return n===dn?va:Ts[n].transfer}};function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class bh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Ea("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mo(r[o].image)):s.push(Mo(r[o]))}else s=Mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class qt extends Ir{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=xn,r=xn,s=cn,o=fs,a=Sn,l=pi,c=qt.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=mi(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Oi?Et:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vl:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vl:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Oi:yh}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?Et:dn}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=hh;qt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(h+1)/2,R=(u+d)/4,C=(f+v)/4,B=(g+m)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=B/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=B/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends Ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?Et:dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qv extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,x=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const A=Math.sqrt(_),R=Math.atan2(A,h*x);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const y=a*x;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new q,$u=new gs;class _s{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),As.subVectors(this.max,Br),qi.subVectors(e.a,Br),$i.subVectors(e.b,Br),ji.subVectors(e.c,Br),ei.subVectors($i,qi),ti.subVectors(ji,$i),Mi.subVectors(qi,ji);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!To(t,qi,$i,ji,As)||(t=[1,0,0,0,1,0,0,0,1],!To(t,qi,$i,ji,As))?!1:(Cs.crossVectors(ei,ti),t=[Cs.x,Cs.y,Cs.z],To(t,qi,$i,ji,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new q,new q,new q,new q,new q,new q,new q,new q],gn=new q,ws=new _s,qi=new q,$i=new q,ji=new q,ei=new q,ti=new q,Mi=new q,Br=new q,As=new q,Cs=new q,bi=new q;function To(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bi.fromArray(n,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $v=new _s,zr=new q,wo=new q;class vs{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$v.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(wo)),this.expandByPoint(zr.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new q,Ao=new q,Rs=new q,ni=new q,Co=new q,Ps=new q,Ro=new q;class ic{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ao.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=ni.dot(this.direction),l=-ni.dot(Rs),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ao).addScaledVector(Rs,d),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),Ps.subVectors(i,e),Ro.crossVectors(Co,Ps);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ps.crossVectors(ni,Ps));if(l<0)return null;const c=a*this.direction.dot(Co.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ii.crossVectors(i,jt),ii.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ii.crossVectors(i,jt)),ii.normalize(),Ls.crossVectors(jt,ii),r[0]=ii.x,r[4]=Ls.x,r[8]=jt.x,r[1]=ii.y,r[5]=Ls.y,r[9]=jt.y,r[2]=ii.z,r[6]=Ls.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],x=i[3],_=i[7],y=i[11],A=i[15],R=r[0],C=r[4],B=r[8],M=r[12],T=r[1],U=r[5],H=r[9],K=r[13],L=r[2],F=r[6],O=r[10],$=r[14],W=r[3],ne=r[7],ie=r[11],he=r[15];return s[0]=o*R+a*T+l*L+c*W,s[4]=o*C+a*U+l*F+c*ne,s[8]=o*B+a*H+l*O+c*ie,s[12]=o*M+a*K+l*$+c*he,s[1]=u*R+f*T+d*L+p*W,s[5]=u*C+f*U+d*F+p*ne,s[9]=u*B+f*H+d*O+p*ie,s[13]=u*M+f*K+d*$+p*he,s[2]=g*R+v*T+m*L+h*W,s[6]=g*C+v*U+m*F+h*ne,s[10]=g*B+v*H+m*O+h*ie,s[14]=g*M+v*K+m*$+h*he,s[3]=x*R+_*T+y*L+A*W,s[7]=x*C+_*U+y*F+A*ne,s[11]=x*B+_*H+y*O+A*ie,s[15]=x*M+_*K+y*$+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],x=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,_=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,A=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,R=t*x+i*_+r*y+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=x*C,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*C,e[8]=y*C,e[9]=(g*f*s-u*v*s-g*i*p+t*v*p+u*i*h-t*f*h)*C,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=A*C,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,x=l*c,_=l*u,y=l*f,A=i.x,R=i.y,C=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+y)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(d+h))*R,r[6]=(m+x)*R,r[7]=0,r[8]=(g+_)*C,r[9]=(m-x)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=$n){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===$n)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ya)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=$n){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,v;if(a===$n)g=(o+s)*f,v=-2*f;else if(a===ya)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new q,_n=new pt,jv=new q(0,0,0),Yv=new q(1,1,1),ii=new q,Ls=new q,jt=new q,ju=new pt,Yu=new gs;class Xa{constructor(e=0,t=0,i=0,r=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const Ku=new q,Ki=new gs,Bn=new pt,Is=new q,Gr=new q,Zv=new q,Jv=new gs,Zu=new q(1,0,0),Ju=new q(0,1,0),Qu=new q(0,0,1),Qv={type:"added"},ex={type:"removed"};class Lt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new q,t=new Xa,i=new gs,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis(Ju,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis(Ju,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Gr,Is,this.up):Bn.lookAt(Is,Gr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new q(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new q,zn=new q,Po=new q,Gn=new q,Zi=new q,Ji=new q,ef=new q,Lo=new q,Io=new q,Do=new q;let Ds=!1;class un{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),zn.subVectors(i,t),Po.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(zn),l=vn.dot(Po),c=zn.dot(zn),u=zn.dot(Po),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),zn.subVectors(e,t),vn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zi.subVectors(r,i),Ji.subVectors(s,i),Lo.subVectors(e,i);const l=Zi.dot(Lo),c=Ji.dot(Lo);if(l<=0&&c<=0)return t.copy(i);Io.subVectors(e,r);const u=Zi.dot(Io),f=Ji.dot(Io);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zi,o);Do.subVectors(e,s);const p=Zi.dot(Do),g=Ji.dot(Do);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ji,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ef.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(ef,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Gv(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Uo(o,s,e+1/3),this.g=Uo(o,s,e),this.b=Uo(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.fromWorkingColorSpace(At.copy(this),e),Math.round(Wt(At.r*255,0,255))*65536+Math.round(Wt(At.g*255,0,255))*256+Math.round(Wt(At.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Et){Je.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Us);const i=So(ri.h,Us.h,t),r=So(ri.s,Us.s,t),s=So(ri.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=Ch;let tx=0;class Hi extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=yr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pl&&(i.blendSrc=this.blendSrc),this.blendDst!==ml&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rc extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new q,Ns=new Xe;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class Rh extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ph extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nx=0;const on=new pt,No=new Lt,Qi=new q,Yt=new _s,Hr=new _s,St=new q;class sn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ph:Rh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,Hr.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Hr.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Hr.min),Yt.expandByPoint(Hr.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),St.add(Qi)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new q,u[T]=new q;const f=new q,d=new q,p=new q,g=new Xe,v=new Xe,m=new Xe,h=new q,x=new q;function _(T,U,H){f.fromArray(r,T*3),d.fromArray(r,U*3),p.fromArray(r,H*3),g.fromArray(o,T*2),v.fromArray(o,U*2),m.fromArray(o,H*2),d.sub(f),p.sub(f),v.sub(g),m.sub(g);const K=1/(v.x*m.y-m.x*v.y);isFinite(K)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(K),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(K),c[T].add(h),c[U].add(h),c[H].add(h),u[T].add(x),u[U].add(x),u[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,U=y.length;T<U;++T){const H=y[T],K=H.start,L=H.count;for(let F=K,O=K+L;F<O;F+=3)_(i[F+0],i[F+1],i[F+2])}const A=new q,R=new q,C=new q,B=new q;function M(T){C.fromArray(s,T*3),B.copy(C);const U=c[T];A.copy(U),A.sub(C.multiplyScalar(C.dot(U))).normalize(),R.crossVectors(B,U);const K=R.dot(u[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=K}for(let T=0,U=y.length;T<U;++T){const H=y[T],K=H.start,L=H.count;for(let F=K,O=K+L;F<O;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tf=new pt,Ti=new ic,Os=new vs,nf=new q,er=new q,tr=new q,nr=new q,Oo=new q,Fs=new q,Bs=new Xe,zs=new Xe,Gs=new Xe,rf=new q,sf=new q,af=new q,Hs=new q,Vs=new q;class jn extends Lt{constructor(e=new sn,t=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Oo.fromBufferAttribute(f,e),o?Fs.addScaledVector(Oo,u):Fs.addScaledVector(Oo.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Os.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Os,nf)===null||Ti.origin.distanceToSquared(nf)>(e.far-e.near)**2))&&(tf.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(tf),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,A=_;y<A;y+=3){const R=a.getX(y),C=a.getX(y+1),B=a.getX(y+2);r=ks(this,h,e,i,c,u,f,R,C,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=ks(this,o,e,i,c,u,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,A=_;y<A;y+=3){const R=y,C=y+1,B=y+2;r=ks(this,h,e,i,c,u,f,R,C,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=m,_=m+1,y=m+2;r=ks(this,o,e,i,c,u,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ix(n,e,t,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Vs.copy(a),Vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:n}}function ks(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,er),n.getVertexPosition(l,tr),n.getVertexPosition(c,nr);const u=ix(n,e,t,i,er,tr,nr,Hs);if(u){r&&(Bs.fromBufferAttribute(r,a),zs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),u.uv=un.getInterpolation(Hs,er,tr,nr,Bs,zs,Gs,new Xe)),s&&(Bs.fromBufferAttribute(s,a),zs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(Hs,er,tr,nr,Bs,zs,Gs,new Xe),u.uv2=u.uv1),o&&(rf.fromBufferAttribute(o,a),sf.fromBufferAttribute(o,l),af.fromBufferAttribute(o,c),u.normal=un.getInterpolation(Hs,er,tr,nr,rf,sf,af,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};un.getNormal(er,tr,nr,f.normal),u.face=f}return u}class xs extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function g(v,m,h,x,_,y,A,R,C,B,M){const T=y/C,U=A/B,H=y/2,K=A/2,L=R/2,F=C+1,O=B+1;let $=0,W=0;const ne=new q;for(let ie=0;ie<O;ie++){const he=ie*U-K;for(let de=0;de<F;de++){const te=de*T-H;ne[v]=te*x,ne[m]=he*_,ne[h]=L,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[h]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(de/C),f.push(1-ie/B),$+=1}}for(let ie=0;ie<B;ie++)for(let he=0;he<C;he++){const de=d+he+F*ie,te=d+he+F*(ie+1),ce=d+(he+1)+F*(ie+1),xe=d+(he+1)+F*ie;l.push(de,te,xe),l.push(te,ce,xe),W+=6}a.addGroup(p,W,M),p+=W,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Lr(n[t]);for(const r in i)e[r]=i[r]}return e}function rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const sx={clone:Lr,merge:Ft};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class lx extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new fn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new fn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new fn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new fn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new fn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dh extends qt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cx extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?Et:dn),this.texture=new Dh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xs(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:di});s.uniforms.tEquirect.value=t;const o=new jn(r,s),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=cn),new lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fo=new q,ux=new q,fx=new We;class Ci{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fo.subVectors(i,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fx.getNormalMatrix(e),r=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new vs,Ws=new q;class Uh{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+x).normalize(),i[3].setComponents(l-o,d-u,m-g,y-x).normalize(),i[4].setComponents(l-a,d-f,m-v,y-_).normalize(),t===$n)i[5].setComponents(l+a,d+f,m+v,y+_).normalize();else if(t===ya)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const d=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const h=g[v];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class sc extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let _=0;_<c;_++){const y=_*f-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const _=x+c*h,y=x+c*(h+1),A=x+1+c*(h+1),R=x+1+c*h;p.push(_,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,C0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,US=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:hx,alphahash_pars_fragment:px,alphamap_fragment:mx,alphamap_pars_fragment:gx,alphatest_fragment:_x,alphatest_pars_fragment:vx,aomap_fragment:xx,aomap_pars_fragment:Sx,batching_pars_vertex:yx,batching_vertex:Ex,begin_vertex:Mx,beginnormal_vertex:bx,bsdfs:Tx,iridescence_fragment:wx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Px,clipping_planes_vertex:Lx,color_fragment:Ix,color_pars_fragment:Dx,color_pars_vertex:Ux,color_vertex:Nx,common:Ox,cube_uv_reflection_fragment:Fx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:zx,displacementmap_vertex:Gx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Vx,colorspace_fragment:kx,colorspace_pars_fragment:Wx,envmap_fragment:Xx,envmap_common_pars_fragment:qx,envmap_pars_fragment:$x,envmap_pars_vertex:jx,envmap_physical_pars_fragment:a0,envmap_vertex:Yx,fog_vertex:Kx,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:Qx,gradientmap_pars_fragment:e0,lightmap_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:r0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:f0,lights_physical_pars_fragment:d0,lights_fragment_begin:h0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:S0,map_pars_fragment:y0,map_particle_fragment:E0,map_particle_pars_fragment:M0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:T0,morphcolor_vertex:w0,morphnormal_vertex:A0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:D0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:G0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:k0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Y0,shadowmap_vertex:K0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:Q0,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:fS,background_vert:dS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:SS,distanceRGBA_frag:yS,equirect_vert:ES,equirect_frag:MS,linedashed_vert:bS,linedashed_frag:TS,meshbasic_vert:wS,meshbasic_frag:AS,meshlambert_vert:CS,meshlambert_frag:RS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:IS,meshnormal_frag:DS,meshphong_vert:US,meshphong_frag:NS,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:GS,points_frag:HS,shadow_vert:VS,shadow_frag:kS,sprite_vert:WS,sprite_frag:XS},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},An={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};An.physical={uniforms:Ft([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Xs={r:0,b:0,g:0};function qS(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(m,h){let x=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ka)?(u===void 0&&(u=new jn(new xs(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Lr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new jn(new sc(2,2),new Bi({name:"BackgroundMaterial",uniforms:Lr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(Xs,Lh(n)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function $S(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(L,F,O,$,W){let ne=!1;if(o){const ie=v($,O,F);c!==ie&&(c=ie,p(c.object)),ne=h(L,$,O,W),ne&&x(L,$,O,W)}else{const ie=F.wireframe===!0;(c.geometry!==$.id||c.program!==O.id||c.wireframe!==ie)&&(c.geometry=$.id,c.program=O.id,c.wireframe=ie,ne=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,B(L,F,O,$),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,F,O){const $=O.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let ne=W[F.id];ne===void 0&&(ne={},W[F.id]=ne);let ie=ne[$];return ie===void 0&&(ie=m(d()),ne[$]=ie),ie}function m(L){const F=[],O=[],$=[];for(let W=0;W<r;W++)F[W]=0,O[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:$,object:L,attributes:{},index:null}}function h(L,F,O,$){const W=c.attributes,ne=F.attributes;let ie=0;const he=O.getAttributes();for(const de in he)if(he[de].location>=0){const ce=W[de];let xe=ne[de];if(xe===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;ie++}return c.attributesNum!==ie||c.index!==$}function x(L,F,O,$){const W={},ne=F.attributes;let ie=0;const he=O.getAttributes();for(const de in he)if(he[de].location>=0){let ce=ne[de];ce===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),W[de]=xe,ie++}c.attributes=W,c.attributesNum=ie,c.index=$}function _(){const L=c.newAttributes;for(let F=0,O=L.length;F<O;F++)L[F]=0}function y(L){A(L,0)}function A(L,F){const O=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;O[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),W[L]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),W[L]=F)}function R(){const L=c.newAttributes,F=c.enabledAttributes;for(let O=0,$=F.length;O<$;O++)F[O]!==L[O]&&(n.disableVertexAttribArray(O),F[O]=0)}function C(L,F,O,$,W,ne,ie){ie===!0?n.vertexAttribIPointer(L,F,O,W,ne):n.vertexAttribPointer(L,F,O,$,W,ne)}function B(L,F,O,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const W=$.attributes,ne=O.getAttributes(),ie=F.defaultAttributeValues;for(const he in ne){const de=ne[he];if(de.location>=0){let te=W[he];if(te===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){const ce=te.normalized,xe=te.itemSize,Me=t.get(te);if(Me===void 0)continue;const z=Me.buffer,oe=Me.type,re=Me.bytesPerElement,ue=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||te.gpuType===ph);if(te.isInterleavedBufferAttribute){const be=te.data,E=be.stride,P=te.offset;if(be.isInstancedInterleavedBuffer){for(let D=0;D<de.locationSize;D++)A(de.location+D,be.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let D=0;D<de.locationSize;D++)y(de.location+D);n.bindBuffer(n.ARRAY_BUFFER,z);for(let D=0;D<de.locationSize;D++)C(de.location+D,xe/de.locationSize,oe,ce,E*re,(P+xe/de.locationSize*D)*re,ue)}else{if(te.isInstancedBufferAttribute){for(let be=0;be<de.locationSize;be++)A(de.location+be,te.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<de.locationSize;be++)y(de.location+be);n.bindBuffer(n.ARRAY_BUFFER,z);for(let be=0;be<de.locationSize;be++)C(de.location+be,xe/de.locationSize,oe,ce,xe*re,xe/de.locationSize*be*re,ue)}}else if(ie!==void 0){const ce=ie[he];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(de.location,ce);break;case 3:n.vertexAttrib3fv(de.location,ce);break;case 4:n.vertexAttrib4fv(de.location,ce);break;default:n.vertexAttrib1fv(de.location,ce)}}}}R()}function M(){H();for(const L in a){const F=a[L];for(const O in F){const $=F[O];for(const W in $)g($[W].object),delete $[W];delete F[O]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const O in F){const $=F[O];for(const W in $)g($[W].object),delete $[W];delete F[O]}delete a[L.id]}function U(L){for(const F in a){const O=a[F];if(O[L.id]===void 0)continue;const $=O[L.id];for(const W in $)g($[W].object),delete $[W];delete O[L.id]}}function H(){K(),u=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:y,disableUnusedAttributes:R}}function jS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function YS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),A=_&&y,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:R}}function KS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ci,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,_=x*4;let y=h.clippingState||null;l.value=y,y=u(g,d,_,p);for(let A=0;A!==_;++A)y[A]=t[A];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ZS(n){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Cr:a===_l&&(o.mapping=Rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gl||a===_l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cx(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class JS extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,of=[.125,.215,.35,.446,.526,.582],Li=20,Bo=new JS,lf=new $e;let zo=null,Go=0,Ho=0;const Ri=(1+Math.sqrt(5))/2,sr=1/Ri,cf=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Ri,sr),new q(0,Ri,-sr),new q(sr,0,Ri),new q(-sr,0,Ri),new q(Ri,sr,0),new q(-Ri,sr,0)];class uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Go,Ho),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ds,format:Sn,colorSpace:Zn,depthBuffer:!1},r=ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QS(s)),this._blurMaterial=ey(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(lf),u.toneMapping=hi,u.autoClear=!1;const p=new rc({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new jn(new xs,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(lf),v=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;qs(r,x*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cr||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cf[(r-1)%cf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Li-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const h=[];let x=0;for(let C=0;C<Li;++C){const B=C/v,M=Math.exp(-B*B/2);h.push(M),C===0?x+=M:C<m&&(x+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-hr?r-_+hr:0),R=4*(this._cubeSize-y);qs(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Bo)}}function QS(n){const e=[],t=[],i=[];let r=n;const s=n-hr+1+of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-hr?l=of[o-n+hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,B=R>2?0:-1,M=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];x.set(M,v*g*R),_.set(d,m*g*R);const T=[R,R,R,R,R,R];y.set(T,h*g*R)}const A=new sn;A.setAttribute("position",new pn(x,v)),A.setAttribute("uv",new pn(_,m)),A.setAttribute("faceIndex",new pn(y,h)),e.push(A),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ff(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ey(n,e,t){const i=new Float32Array(Li),r=new q(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function df(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function hf(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ty(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gl||l===_l,u=l===Cr||l===Rr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new uf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new uf(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ny(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iy(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const A=x[_+0],R=x[_+1],C=x[_+2];d.push(A,R,R,C,C,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const A=_+0,R=_+1,C=_+2;d.push(A,R,R,C,C,A)}}else return;const m=new(Mh(d)?Ph:Rh)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ry(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,v){if(v===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,v),t.update(g,s,v)}function d(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,v);let h=0;for(let x=0;x<v;x++)h+=g[x];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function sy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ay(n,e){return n[0]-e[0]}function oy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ly(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let F=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),A===!0&&(M=3);let T=u.attributes.position.count*M,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*U*4*v),K=new wh(H,T,U,v);K.type=ci,K.needsUpdate=!0;const L=M*4;for(let O=0;O<v;O++){const $=R[O],W=C[O],ne=B[O],ie=T*U*4*O;for(let he=0;he<$.count;he++){const de=he*L;_===!0&&(o.fromBufferAttribute($,he),H[ie+de+0]=o.x,H[ie+de+1]=o.y,H[ie+de+2]=o.z,H[ie+de+3]=0),y===!0&&(o.fromBufferAttribute(W,he),H[ie+de+4]=o.x,H[ie+de+5]=o.y,H[ie+de+6]=o.z,H[ie+de+7]=0),A===!0&&(o.fromBufferAttribute(ne,he),H[ie+de+8]=o.x,H[ie+de+9]=o.y,H[ie+de+10]=o.z,H[ie+de+11]=ne.itemSize===4?o.w:1)}}m={count:v,texture:K,size:new Xe(T,U)},s.set(u,m),u.addEventListener("dispose",F)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];const x=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const A=v[y];A[0]=y,A[1]=d[y]}v.sort(oy);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ay);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const A=a[y],R=A[0],C=A[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+y)!==m[R]&&u.setAttribute("morphTarget"+y,m[R]),h&&u.getAttribute("morphNormal"+y)!==h[R]&&u.setAttribute("morphNormal"+y,h[R]),r[y]=C,x+=C):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cy(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends qt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ni&&(i=li),i===void 0&&u===Pr&&(i=Ui),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fh=new qt,Bh=new Oh(1,1);Bh.compareFunction=Eh;const zh=new wh,Gh=new qv,Hh=new Dh,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),_t(t,i)}}function my(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),_t(t,i)}}function gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),_t(t,i)}}function _y(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Ty(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Bh:Fh;t.setTexture2D(e||s,r)}function wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gh,r)}function Ay(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function Cy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zh,r)}function Ry(n){switch(n){case 5126:return uy;case 35664:return fy;case 35665:return dy;case 35666:return hy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return vy;case 35668:case 35672:return xy;case 35669:case 35673:return Sy;case 5125:return yy;case 36294:return Ey;case 36295:return My;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(n,e){n.uniform1fv(this.addr,e)}function Ly(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Iy(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dy(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Uy(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ny(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Oy(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fy(n,e){n.uniform1iv(this.addr,e)}function By(n,e){n.uniform2iv(this.addr,e)}function zy(n,e){n.uniform3iv(this.addr,e)}function Gy(n,e){n.uniform4iv(this.addr,e)}function Hy(n,e){n.uniform1uiv(this.addr,e)}function Vy(n,e){n.uniform2uiv(this.addr,e)}function ky(n,e){n.uniform3uiv(this.addr,e)}function Wy(n,e){n.uniform4uiv(this.addr,e)}function Xy(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fh,s[o])}function qy(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gh,s[o])}function $y(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function jy(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zh,s[o])}function Yy(n){switch(n){case 5126:return Py;case 35664:return Ly;case 35665:return Iy;case 35666:return Dy;case 35674:return Uy;case 35675:return Ny;case 35676:return Oy;case 5124:case 35670:return Fy;case 35667:case 35671:return By;case 35668:case 35672:return zy;case 35669:case 35673:return Gy;case 5125:return Hy;case 36294:return Vy;case 36295:return ky;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return jy}}class Ky{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ry(t.type)}}class Zy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yy(t.type)}}class Jy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function xf(n,e){n.seq.push(e),n.map[e.id]=e}function Qy(n,e,t){const i=n.name,r=i.length;for(Vo.lastIndex=0;;){const s=Vo.exec(i),o=Vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xf(t,c===void 0?new Ky(a,n,e):new Zy(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Jy(a),xf(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Qy(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eE=37297;let tE=0;function nE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iE(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Sa&&t===xa?i="LinearDisplayP3ToLinearSRGB":e===xa&&t===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case Zn:case Wa:return[i,"LinearTransferOETF"];case Et:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nE(n.getShaderSource(e),o)}else return r}function rE(n,e){const t=iE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sE(n,e){let t;switch(e){case pv:t="Linear";break;case mv:t="Reinhard";break;case gv:t="OptimizedCineon";break;case _v:t="ACESFilmic";break;case xv:t="AgX";break;case vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function oE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pr).join(`
`)}function lE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(uE,dE)}const fE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dE(n,e){let t=ze[e];if(t===void 0){const i=fE.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(hE,pE)}function pE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function gE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cr:case Rr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _E(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function vE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case dv:e="ENVMAP_BLENDING_MIX";break;case hv:e="ENVMAP_BLENDING_ADD";break}return e}function xE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mE(t),c=gE(t),u=_E(t),f=vE(t),d=xE(t),p=t.isWebGL2?"":aE(t),g=oE(t),v=lE(s),m=r.createProgram();let h,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pr).join(`
`),h.length>0&&(h+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pr).join(`
`),x.length>0&&(x+=`
`)):(h=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),x=[p,Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?ze.tonemapping_pars_fragment:"",t.toneMapping!==hi?sE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=bl(o),o=Ef(o,t),o=Mf(o,t),a=bl(a),a=Ef(a,t),a=Mf(a,t),o=bf(o),a=bf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+h+o,A=_+x+a,R=Sf(r,r.VERTEX_SHADER,y),C=Sf(r,r.FRAGMENT_SHADER,A);r.attachShader(m,R),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function B(H){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(C).trim();let O=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,C);else{const W=yf(r,R,"vertex"),ne=yf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+W+`
`+ne)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||F==="")&&($=!1);$&&(H.diagnostics={runnable:O,programLog:K,vertexShader:{log:L,prefix:h},fragmentShader:{log:F,prefix:x}})}r.deleteShader(R),r.deleteShader(C),M=new oa(r,m),T=cE(r,m)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,eE)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}let yE=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ME(e),t.set(e,i)),i}}class ME{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function bE(n,e,t,i,r,s,o){const a=new Ah,l=new EE,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,T,U,H,K){const L=H.fog,F=K.geometry,O=M.isMeshStandardMaterial?H.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),W=$&&$.mapping===ka?$.image.height:null,ne=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=ie!==void 0?ie.length:0;let de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let te,ce,xe,Me;if(ne){const Dt=An[ne];te=Dt.vertexShader,ce=Dt.fragmentShader}else te=M.vertexShader,ce=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const z=n.getRenderTarget(),oe=K.isInstancedMesh===!0,re=K.isBatchedMesh===!0,ue=!!M.map,be=!!M.matcap,E=!!$,P=!!M.aoMap,D=!!M.lightMap,X=!!M.bumpMap,V=!!M.normalMap,Q=!!M.displacementMap,se=!!M.emissiveMap,b=!!M.metalnessMap,S=!!M.roughnessMap,I=M.anisotropy>0,Y=M.clearcoat>0,G=M.iridescence>0,j=M.sheen>0,fe=M.transmission>0,le=I&&!!M.anisotropyMap,pe=Y&&!!M.clearcoatMap,_e=Y&&!!M.clearcoatNormalMap,Ae=Y&&!!M.clearcoatRoughnessMap,ae=G&&!!M.iridescenceMap,Ge=G&&!!M.iridescenceThicknessMap,Le=j&&!!M.sheenColorMap,Re=j&&!!M.sheenRoughnessMap,we=!!M.specularMap,ve=!!M.specularColorMap,Ce=!!M.specularIntensityMap,qe=fe&&!!M.transmissionMap,ct=fe&&!!M.thicknessMap,Ve=!!M.gradientMap,me=!!M.alphaMap,N=M.alphaTest>0,Se=!!M.alphaHash,ye=!!M.extensions,De=!!F.attributes.uv1,Pe=!!F.attributes.uv2,tt=!!F.attributes.uv3;let nt=hi;return M.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:ce,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:re,instancing:oe,instancingColor:oe&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Zn,map:ue,matcap:be,envMap:E,envMapMode:E&&$.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:D,bumpMap:X,normalMap:V,displacementMap:d&&Q,emissiveMap:se,normalMapObjectSpace:V&&M.normalMapType===Iv,normalMapTangentSpace:V&&M.normalMapType===Lv,metalnessMap:b,roughnessMap:S,anisotropy:I,anisotropyMap:le,clearcoat:Y,clearcoatMap:pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ae,iridescence:G,iridescenceMap:ae,iridescenceThicknessMap:Ge,sheen:j,sheenColorMap:Le,sheenRoughnessMap:Re,specularMap:we,specularColorMap:ve,specularIntensityMap:Ce,transmission:fe,transmissionMap:qe,thicknessMap:ct,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===yr,alphaMap:me,alphaTest:N,alphaHash:Se,combine:M.combine,mapUv:ue&&v(M.map.channel),aoMapUv:P&&v(M.aoMap.channel),lightMapUv:D&&v(M.lightMap.channel),bumpMapUv:X&&v(M.bumpMap.channel),normalMapUv:V&&v(M.normalMap.channel),displacementMapUv:Q&&v(M.displacementMap.channel),emissiveMapUv:se&&v(M.emissiveMap.channel),metalnessMapUv:b&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:le&&v(M.anisotropyMap.channel),clearcoatMapUv:pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(M.sheenRoughnessMap.channel),specularMapUv:we&&v(M.specularMap.channel),specularColorMapUv:ve&&v(M.specularColorMap.channel),specularIntensityMapUv:Ce&&v(M.specularIntensityMap.channel),transmissionMapUv:qe&&v(M.transmissionMap.channel),thicknessMapUv:ct&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(V||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:tt,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(ue||me),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ue&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ye&&M.extensions.derivatives===!0,extensionFragDepth:ye&&M.extensions.fragDepth===!0,extensionDrawBuffers:ye&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(T,M),_(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=g[M.type];let U;if(T){const H=An[T];U=sx.clone(H.uniforms)}else U=M.uniforms;return U}function A(M,T){let U;for(let H=0,K=c.length;H<K;H++){const L=c[H];if(L.cacheKey===T){U=L,++U.usedTimes;break}}return U===void 0&&(U=new SE(n,T,M,s),c.push(U)),U}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:B}}function TE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||wE),i.length>1&&i.sort(d||wf),r.length>1&&r.sort(d||wf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function AE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Af,n.set(i,[o])):r>=s.length?(o=new Af,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new $e};break;case"SpotLight":t={position:new q,direction:new q,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function RE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PE=0;function LE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IE(n,e){const t=new CE,i=RE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,o=new pt,a=new pt;function l(u,f){let d=0,p=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let v=0,m=0,h=0,x=0,_=0,y=0,A=0,R=0,C=0,B=0,M=0;u.sort(LE);const T=f===!0?Math.PI:1;for(let H=0,K=u.length;H<K;H++){const L=u[H],F=L.color,O=L.intensity,$=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*O*T,p+=F.g*O*T,g+=F.b*O*T;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(L.sh.coefficients[ne],O);M++}else if(L.isDirectionalLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const ie=L.shadow,he=i.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,r.directionalShadow[v]=he,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=L.shadow.matrix,y++}r.directional[v]=ne,v++}else if(L.isSpotLight){const ne=t.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(F).multiplyScalar(O*T),ne.distance=$,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,r.spot[h]=ne;const ie=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&B++),r.spotLightMatrix[h]=ie.matrix,L.castShadow){const he=i.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,r.spotShadow[h]=he,r.spotShadowMap[h]=W,R++}h++}else if(L.isRectAreaLight){const ne=t.get(L);ne.color.copy(F).multiplyScalar(O),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=ne,x++}else if(L.isPointLight){const ne=t.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity*T),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){const ie=L.shadow,he=i.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,he.shadowCameraNear=ie.camera.near,he.shadowCameraFar=ie.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=L.shadow.matrix,A++}r.point[m]=ne,m++}else if(L.isHemisphereLight){const ne=t.get(L);ne.skyColor.copy(L.color).multiplyScalar(O*T),ne.groundColor.copy(L.groundColor).multiplyScalar(O*T),r.hemi[_]=ne,_++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==x||U.hemiLength!==_||U.numDirectionalShadows!==y||U.numPointShadows!==A||U.numSpotShadows!==R||U.numSpotMaps!==C||U.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+C-B,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=M,U.directionalLength=v,U.pointLength=m,U.spotLength=h,U.rectAreaLength=x,U.hemiLength=_,U.numDirectionalShadows=y,U.numPointShadows=A,U.numSpotShadows=R,U.numSpotMaps=C,U.numLightProbes=M,r.version=PE++)}function c(u,f){let d=0,p=0,g=0,v=0,m=0;const h=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(y.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Cf(n,e){const t=new IE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DE(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Cf(n,e),t.set(s,[l])):o>=a.length?(l=new Cf(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class UE extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BE(n,e,t){let i=new Uh;const r=new Xe,s=new Xe,o=new bt,a=new UE({depthPacking:Pv}),l=new NE,c={},u=t.maxTextureSize,f={[_i]:Xt,[Xt]:_i,[Cn]:Cn},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let h=this.type;this.render=function(R,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=h!==Hn&&this.type===Hn,L=h===Hn&&this.type!==Hn;for(let F=0,O=R.length;F<O;F++){const $=R[F],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ne=W.getFrameExtents();if(r.multiply(ne),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,W.mapSize.y=s.y)),W.map===null||K===!0||L===!0){const he=this.type!==Hn?{minFilter:Bt,magFilter:Bt}:{};W.map!==null&&W.map.dispose(),W.map=new Fi(r.x,r.y,he),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ie=W.getViewportCount();for(let he=0;he<ie;he++){const de=W.getViewport(he);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),H.viewport(o),W.updateMatrices($,he),i=W.getFrustum(),y(C,B,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&x(W,B),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,U)};function x(R,C){const B=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,B,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,B,p,v,null)}function _(R,C,B,M){let T=null;const U=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)T=U;else if(T=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=T.uuid,K=C.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let F=L[K];F===void 0&&(F=T.clone(),L[K]=F,C.addEventListener("dispose",A)),T=F}if(T.visible=C.visible,T.wireframe=C.wireframe,M===Hn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=B}return T}function y(R,C,B,M,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const K=e.update(R),L=R.material;if(Array.isArray(L)){const F=K.groups;for(let O=0,$=F.length;O<$;O++){const W=F[O],ne=L[W.materialIndex];if(ne&&ne.visible){const ie=_(R,ne,M,T);R.onBeforeShadow(n,R,C,B,K,ie,W),n.renderBufferDirect(B,null,K,ie,R,W),R.onAfterShadow(n,R,C,B,K,ie,W)}}}else if(L.visible){const F=_(R,L,M,T);R.onBeforeShadow(n,R,C,B,K,F,null),n.renderBufferDirect(B,null,K,F,R,null),R.onAfterShadow(n,R,C,B,K,F,null)}}const H=R.children;for(let K=0,L=H.length;K<L;K++)y(H[K],C,B,M,T)}function A(R){R.target.removeEventListener("dispose",A);for(const B in c){const M=c[B],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function zE(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Se=new bt;let ye=null;const De=new bt(0,0,0,0);return{setMask:function(Pe){ye!==Pe&&!N&&(n.colorMask(Pe,Pe,Pe,Pe),ye=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,tt,nt,vt,Dt){Dt===!0&&(Pe*=vt,tt*=vt,nt*=vt),Se.set(Pe,tt,nt,vt),De.equals(Se)===!1&&(n.clearColor(Pe,tt,nt,vt),De.copy(Se))},reset:function(){N=!1,ye=null,De.set(-1,0,0,0)}}}function s(){let N=!1,Se=null,ye=null,De=null;return{setTest:function(Pe){Pe?re(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Pe){Se!==Pe&&!N&&(n.depthMask(Pe),Se=Pe)},setFunc:function(Pe){if(ye!==Pe){switch(Pe){case sv:n.depthFunc(n.NEVER);break;case av:n.depthFunc(n.ALWAYS);break;case ov:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case lv:n.depthFunc(n.EQUAL);break;case cv:n.depthFunc(n.GEQUAL);break;case uv:n.depthFunc(n.GREATER);break;case fv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){De!==Pe&&(n.clearDepth(Pe),De=Pe)},reset:function(){N=!1,Se=null,ye=null,De=null}}}function o(){let N=!1,Se=null,ye=null,De=null,Pe=null,tt=null,nt=null,vt=null,Dt=null;return{setTest:function(it){N||(it?re(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(it){Se!==it&&!N&&(n.stencilMask(it),Se=it)},setFunc:function(it,Ut,Mn){(ye!==it||De!==Ut||Pe!==Mn)&&(n.stencilFunc(it,Ut,Mn),ye=it,De=Ut,Pe=Mn)},setOp:function(it,Ut,Mn){(tt!==it||nt!==Ut||vt!==Mn)&&(n.stencilOp(it,Ut,Mn),tt=it,nt=Ut,vt=Mn)},setLocked:function(it){N=it},setClear:function(it){Dt!==it&&(n.clearStencil(it),Dt=it)},reset:function(){N=!1,Se=null,ye=null,De=null,Pe=null,tt=null,nt=null,vt=null,Dt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,h=!1,x=null,_=null,y=null,A=null,R=null,C=null,B=null,M=new $e(0,0,0),T=0,U=!1,H=null,K=null,L=null,F=null,O=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),W=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),W=ne>=2);let he=null,de={};const te=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),xe=new bt().fromArray(te),Me=new bt().fromArray(ce);function z(N,Se,ye,De){const Pe=new Uint8Array(4),tt=n.createTexture();n.bindTexture(N,tt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ye;nt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Se+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return tt}const oe={};oe[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(n.DEPTH_TEST),l.setFunc(_a),se(!1),b(cu),re(n.CULL_FACE),V(di);function re(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function ue(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function be(N,Se){return p[N]!==Se?(n.bindFramebuffer(N,Se),p[N]=Se,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function E(N,Se){let ye=v,De=!1;if(N)if(ye=g.get(Se),ye===void 0&&(ye=[],g.set(Se,ye)),N.isWebGLMultipleRenderTargets){const Pe=N.texture;if(ye.length!==Pe.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,nt=Pe.length;tt<nt;tt++)ye[tt]=n.COLOR_ATTACHMENT0+tt;ye.length=Pe.length,De=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,De=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function P(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const D={[Pi]:n.FUNC_ADD,[W_]:n.FUNC_SUBTRACT,[X_]:n.FUNC_REVERSE_SUBTRACT};if(i)D[hu]=n.MIN,D[pu]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(D[hu]=N.MIN_EXT,D[pu]=N.MAX_EXT)}const X={[q_]:n.ZERO,[$_]:n.ONE,[j_]:n.SRC_COLOR,[pl]:n.SRC_ALPHA,[ev]:n.SRC_ALPHA_SATURATE,[J_]:n.DST_COLOR,[K_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[ml]:n.ONE_MINUS_SRC_ALPHA,[Q_]:n.ONE_MINUS_DST_COLOR,[Z_]:n.ONE_MINUS_DST_ALPHA,[tv]:n.CONSTANT_COLOR,[nv]:n.ONE_MINUS_CONSTANT_COLOR,[iv]:n.CONSTANT_ALPHA,[rv]:n.ONE_MINUS_CONSTANT_ALPHA};function V(N,Se,ye,De,Pe,tt,nt,vt,Dt,it){if(N===di){h===!0&&(ue(n.BLEND),h=!1);return}if(h===!1&&(re(n.BLEND),h=!0),N!==k_){if(N!==x||it!==U){if((_!==Pi||R!==Pi)&&(n.blendEquation(n.FUNC_ADD),_=Pi,R=Pi),it)switch(N){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,A=null,C=null,B=null,M.set(0,0,0),T=0,x=N,U=it}return}Pe=Pe||Se,tt=tt||ye,nt=nt||De,(Se!==_||Pe!==R)&&(n.blendEquationSeparate(D[Se],D[Pe]),_=Se,R=Pe),(ye!==y||De!==A||tt!==C||nt!==B)&&(n.blendFuncSeparate(X[ye],X[De],X[tt],X[nt]),y=ye,A=De,C=tt,B=nt),(vt.equals(M)===!1||Dt!==T)&&(n.blendColor(vt.r,vt.g,vt.b,Dt),M.copy(vt),T=Dt),x=N,U=!1}function Q(N,Se){N.side===Cn?ue(n.CULL_FACE):re(n.CULL_FACE);let ye=N.side===Xt;Se&&(ye=!ye),se(ye),N.blending===yr&&N.transparent===!1?V(di):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const De=N.stencilWrite;c.setTest(De),De&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),I(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){H!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),H=N)}function b(N){N!==G_?(re(n.CULL_FACE),N!==K&&(N===cu?n.cullFace(n.BACK):N===H_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),K=N}function S(N){N!==L&&(W&&n.lineWidth(N),L=N)}function I(N,Se,ye){N?(re(n.POLYGON_OFFSET_FILL),(F!==Se||O!==ye)&&(n.polygonOffset(Se,ye),F=Se,O=ye)):ue(n.POLYGON_OFFSET_FILL)}function Y(N){N?re(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function G(N){N===void 0&&(N=n.TEXTURE0+$-1),he!==N&&(n.activeTexture(N),he=N)}function j(N,Se,ye){ye===void 0&&(he===null?ye=n.TEXTURE0+$-1:ye=he);let De=de[ye];De===void 0&&(De={type:void 0,texture:void 0},de[ye]=De),(De.type!==N||De.texture!==Se)&&(he!==ye&&(n.activeTexture(ye),he=ye),n.bindTexture(N,Se||oe[N]),De.type=N,De.texture=Se)}function fe(){const N=de[he];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){xe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function qe(N){Me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function ct(N,Se){let ye=f.get(Se);ye===void 0&&(ye=new WeakMap,f.set(Se,ye));let De=ye.get(N);De===void 0&&(De=n.getUniformBlockIndex(Se,N.name),ye.set(N,De))}function Ve(N,Se){const De=f.get(Se).get(N);u.get(Se)!==De&&(n.uniformBlockBinding(Se,De,N.__bindingPointIndex),u.set(Se,De))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,de={},p={},g=new WeakMap,v=[],m=null,h=!1,x=null,_=null,y=null,A=null,R=null,C=null,B=null,M=new $e(0,0,0),T=0,U=!1,H=null,K=null,L=null,F=null,O=null,xe.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ue,bindFramebuffer:be,drawBuffers:E,useProgram:P,setBlending:V,setMaterial:Q,setFlipSided:se,setCullFace:b,setLineWidth:S,setPolygonOffset:I,setScissorTest:Y,activeTexture:G,bindTexture:j,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:we,texImage3D:ve,updateUBOMapping:ct,uniformBlockBinding:Ve,texStorage2D:Le,texStorage3D:Re,texSubImage2D:_e,texSubImage3D:Ae,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ge,scissor:Ce,viewport:qe,reset:me}}function GE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):Ea("canvas")}function v(b,S,I,Y){let G=1;if((b.width>Y||b.height>Y)&&(G=Y/Math.max(b.width,b.height)),G<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const j=S?Ml:Math.floor,fe=j(G*b.width),le=j(G*b.height);f===void 0&&(f=g(fe,le));const pe=I?g(fe,le):f;return pe.width=fe,pe.height=le,pe.getContext("2d").drawImage(b,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+le+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ku(b.width)&&ku(b.height)}function h(b){return a?!1:b.wrapS!==xn||b.wrapT!==xn||b.minFilter!==Bt&&b.minFilter!==cn}function x(b,S){return b.generateMipmaps&&S&&b.minFilter!==Bt&&b.minFilter!==cn}function _(b){n.generateMipmap(b)}function y(b,S,I,Y,G=!1){if(a===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=S;if(S===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),S===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RGBA){const fe=G?va:Je.getTransfer(Y);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=fe===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(b,S,I){return x(b,I)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){return b===Bt||b===mu||b===ho?n.NEAREST:n.LINEAR}function C(b){const S=b.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&u.delete(S)}function B(b){const S=b.target;S.removeEventListener("dispose",B),U(S)}function M(b){const S=i.get(b);if(S.__webglInit===void 0)return;const I=b.source,Y=d.get(I);if(Y){const G=Y[S.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(b),Object.keys(Y).length===0&&d.delete(I)}i.remove(b)}function T(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const I=b.source,Y=d.get(I);delete Y[S.__cacheKey],o.memory.textures--}function U(b){const S=b.texture,I=i.get(b),Y=i.get(S);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(I.__webglFramebuffer[G]))for(let j=0;j<I.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(I.__webglFramebuffer[G][j]);else n.deleteFramebuffer(I.__webglFramebuffer[G]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[G])}else{if(Array.isArray(I.__webglFramebuffer))for(let G=0;G<I.__webglFramebuffer.length;G++)n.deleteFramebuffer(I.__webglFramebuffer[G]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let G=0;G<I.__webglColorRenderbuffer.length;G++)I.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[G]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let G=0,j=S.length;G<j;G++){const fe=i.get(S[G]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(S[G])}i.remove(S),i.remove(b)}let H=0;function K(){H=0}function L(){const b=H;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),H+=1,b}function F(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function O(b,S){const I=i.get(b);if(b.isVideoTexture&&Q(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(I,b,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function $(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){xe(I,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function W(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){xe(I,b,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function ne(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){Me(I,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const ie={[vl]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[xl]:n.MIRRORED_REPEAT},he={[Bt]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Sv]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},de={[Dv]:n.NEVER,[zv]:n.ALWAYS,[Uv]:n.LESS,[Eh]:n.LEQUAL,[Nv]:n.EQUAL,[Bv]:n.GEQUAL,[Ov]:n.GREATER,[Fv]:n.NOTEQUAL};function te(b,S,I){if(I?(n.texParameteri(b,n.TEXTURE_WRAP_S,ie[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ie[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ie[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,he[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,he[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==xn||S.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Bt&&S.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Bt||S.minFilter!==ho&&S.minFilter!==fs||S.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ce(b,S){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const Y=S.source;let G=d.get(Y);G===void 0&&(G={},d.set(Y,G));const j=F(S);if(j!==b.__cacheKey){G[j]===void 0&&(G[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),G[j].usedTimes++;const fe=G[b.__cacheKey];fe!==void 0&&(G[b.__cacheKey].usedTimes--,fe.usedTimes===0&&T(S)),b.__cacheKey=j,b.__webglTexture=G[j].texture}return I}function xe(b,S,I){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const G=ce(b,S),j=S.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+I);const fe=i.get(j);if(j.version!==fe.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const le=Je.getPrimaries(Je.workingColorSpace),pe=S.colorSpace===dn?null:Je.getPrimaries(S.colorSpace),_e=S.colorSpace===dn||le===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ae=h(S)&&m(S.image)===!1;let ae=v(S.image,Ae,!1,r.maxTextureSize);ae=se(S,ae);const Ge=m(ae)||a,Le=s.convert(S.format,S.colorSpace);let Re=s.convert(S.type),we=y(S.internalFormat,Le,Re,S.colorSpace,S.isVideoTexture);te(Y,S,Ge);let ve;const Ce=S.mipmaps,qe=a&&S.isVideoTexture!==!0&&we!==Sh,ct=fe.__version===void 0||G===!0,Ve=A(S,ae,Ge);if(S.isDepthTexture)we=n.DEPTH_COMPONENT,a?S.type===ci?we=n.DEPTH_COMPONENT32F:S.type===li?we=n.DEPTH_COMPONENT24:S.type===Ui?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:S.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ni&&we===n.DEPTH_COMPONENT&&S.type!==tc&&S.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=li,Re=s.convert(S.type)),S.format===Pr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ui,Re=s.convert(S.type))),ct&&(qe?t.texStorage2D(n.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,Le,Re,null));else if(S.isDataTexture)if(Ce.length>0&&Ge){qe&&ct&&t.texStorage2D(n.TEXTURE_2D,Ve,we,Ce[0].width,Ce[0].height);for(let me=0,N=Ce.length;me<N;me++)ve=Ce[me],qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Le,Re,ve.data):t.texImage2D(n.TEXTURE_2D,me,we,ve.width,ve.height,0,Le,Re,ve.data);S.generateMipmaps=!1}else qe?(ct&&t.texStorage2D(n.TEXTURE_2D,Ve,we,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Le,Re,ae.data)):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,Le,Re,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,we,Ce[0].width,Ce[0].height,ae.depth);for(let me=0,N=Ce.length;me<N;me++)ve=Ce[me],S.format!==Sn?Le!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,ae.depth,Le,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,we,ve.width,ve.height,ae.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,ae.depth,Le,Re,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,we,ve.width,ve.height,ae.depth,0,Le,Re,ve.data)}else{qe&&ct&&t.texStorage2D(n.TEXTURE_2D,Ve,we,Ce[0].width,Ce[0].height);for(let me=0,N=Ce.length;me<N;me++)ve=Ce[me],S.format!==Sn?Le!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Le,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,me,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve.width,ve.height,Le,Re,ve.data):t.texImage2D(n.TEXTURE_2D,me,we,ve.width,ve.height,0,Le,Re,ve.data)}else if(S.isDataArrayTexture)qe?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,we,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Le,Re,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,Le,Re,ae.data);else if(S.isData3DTexture)qe?(ct&&t.texStorage3D(n.TEXTURE_3D,Ve,we,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Le,Re,ae.data)):t.texImage3D(n.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,Le,Re,ae.data);else if(S.isFramebufferTexture){if(ct)if(qe)t.texStorage2D(n.TEXTURE_2D,Ve,we,ae.width,ae.height);else{let me=ae.width,N=ae.height;for(let Se=0;Se<Ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,we,me,N,0,Le,Re,null),me>>=1,N>>=1}}else if(Ce.length>0&&Ge){qe&&ct&&t.texStorage2D(n.TEXTURE_2D,Ve,we,Ce[0].width,Ce[0].height);for(let me=0,N=Ce.length;me<N;me++)ve=Ce[me],qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Le,Re,ve):t.texImage2D(n.TEXTURE_2D,me,we,Le,Re,ve);S.generateMipmaps=!1}else qe?(ct&&t.texStorage2D(n.TEXTURE_2D,Ve,we,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Re,ae)):t.texImage2D(n.TEXTURE_2D,0,we,Le,Re,ae);x(S,Ge)&&_(Y),fe.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Me(b,S,I){if(S.image.length!==6)return;const Y=ce(b,S),G=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const j=i.get(G);if(G.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+I);const fe=Je.getPrimaries(Je.workingColorSpace),le=S.colorSpace===dn?null:Je.getPrimaries(S.colorSpace),pe=S.colorSpace===dn||fe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let me=0;me<6;me++)!_e&&!Ae?ae[me]=v(S.image[me],!1,!0,r.maxCubemapSize):ae[me]=Ae?S.image[me].image:S.image[me],ae[me]=se(S,ae[me]);const Ge=ae[0],Le=m(Ge)||a,Re=s.convert(S.format,S.colorSpace),we=s.convert(S.type),ve=y(S.internalFormat,Re,we,S.colorSpace),Ce=a&&S.isVideoTexture!==!0,qe=j.__version===void 0||Y===!0;let ct=A(S,Ge,Le);te(n.TEXTURE_CUBE_MAP,S,Le);let Ve;if(_e){Ce&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ve,Ge.width,Ge.height);for(let me=0;me<6;me++){Ve=ae[me].mipmaps;for(let N=0;N<Ve.length;N++){const Se=Ve[N];S.format!==Sn?Re!==null?Ce?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,Se.width,Se.height,Re,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,0,0,Se.width,Se.height,Re,we,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N,ve,Se.width,Se.height,0,Re,we,Se.data)}}}else{Ve=S.mipmaps,Ce&&qe&&(Ve.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ve,ae[0].width,ae[0].height));for(let me=0;me<6;me++)if(Ae){Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ae[me].width,ae[me].height,Re,we,ae[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,ae[me].width,ae[me].height,0,Re,we,ae[me].data);for(let N=0;N<Ve.length;N++){const ye=Ve[N].image[me].image;Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,ye.width,ye.height,Re,we,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,ve,ye.width,ye.height,0,Re,we,ye.data)}}else{Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Re,we,ae[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,Re,we,ae[me]);for(let N=0;N<Ve.length;N++){const Se=Ve[N];Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,0,0,Re,we,Se.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,N+1,ve,Re,we,Se.image[me])}}}x(S,Le)&&_(n.TEXTURE_CUBE_MAP),j.__version=G.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function z(b,S,I,Y,G,j){const fe=s.convert(I.format,I.colorSpace),le=s.convert(I.type),pe=y(I.internalFormat,fe,le,I.colorSpace);if(!i.get(S).__hasExternalTextures){const Ae=Math.max(1,S.width>>j),ae=Math.max(1,S.height>>j);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,j,pe,Ae,ae,S.depth,0,fe,le,null):t.texImage2D(G,j,pe,Ae,ae,0,fe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),V(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,G,i.get(I).__webglTexture,0,X(S)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,G,i.get(I).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(b,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let Y=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||V(S)){const G=S.depthTexture;G&&G.isDepthTexture&&(G.type===ci?Y=n.DEPTH_COMPONENT32F:G.type===li&&(Y=n.DEPTH_COMPONENT24));const j=X(S);V(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,Y,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,Y,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const Y=X(S);I&&V(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):V(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Y=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let G=0;G<Y.length;G++){const j=Y[G],fe=s.convert(j.format,j.colorSpace),le=s.convert(j.type),pe=y(j.internalFormat,fe,le,j.colorSpace),_e=X(S);I&&V(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,pe,S.width,S.height):V(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,pe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,pe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,G=X(S);if(S.depthTexture.format===Ni)V(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Pr)V(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ue(b){const S=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");re(S.__webglFramebuffer,b)}else if(I){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,S,I){const Y=i.get(b);S!==void 0&&z(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ue(b)}function E(b){const S=b.texture,I=i.get(b),Y=i.get(S);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++);const G=b.isWebGLCubeRenderTarget===!0,j=b.isWebGLMultipleRenderTargets===!0,fe=m(b)||a;if(G){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)I.__webglFramebuffer[le][pe]=n.createFramebuffer()}else I.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)I.__webglFramebuffer[le]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(j)if(r.drawBuffers){const le=b.texture;for(let pe=0,_e=le.length;pe<_e;pe++){const Ae=i.get(le[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&V(b)===!1){const le=j?S:[S];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const _e=le[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Ae=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),Ge=y(_e.internalFormat,Ae,ae,_e.colorSpace,b.isXRRenderTarget===!0),Le=X(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,fe);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)z(I.__webglFramebuffer[le][pe],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else z(I.__webglFramebuffer[le],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(S,fe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){const le=b.texture;for(let pe=0,_e=le.length;pe<_e;pe++){const Ae=le[pe],ae=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),te(n.TEXTURE_2D,Ae,fe),z(I.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),x(Ae,fe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Y.__webglTexture),te(le,S,fe),a&&S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)z(I.__webglFramebuffer[pe],b,S,n.COLOR_ATTACHMENT0,le,pe);else z(I.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,le,0);x(S,fe)&&_(le),t.unbindTexture()}b.depthBuffer&&ue(b)}function P(b){const S=m(b)||a,I=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Y=0,G=I.length;Y<G;Y++){const j=I[Y];if(x(j,S)){const fe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(j).__webglTexture;t.bindTexture(fe,le),_(fe),t.unbindTexture()}}}function D(b){if(a&&b.samples>0&&V(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],I=b.width,Y=b.height;let G=n.COLOR_BUFFER_BIT;const j=[],fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){j.push(n.COLOR_ATTACHMENT0+_e),b.depthBuffer&&j.push(fe);const Ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ae===!1&&(b.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),Ae===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),pe){const ae=i.get(S[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,G,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Ae=i.get(S[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function X(b){return Math.min(r.maxSamples,b.samples)}function V(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Q(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function se(b,S){const I=b.colorSpace,Y=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===yl||I!==Zn&&I!==dn&&(Je.getTransfer(I)===st?a===!1?e.has("EXT_sRGB")===!0&&Y===Sn?(b.format=yl,b.minFilter=cn,b.generateMipmaps=!1):S=bh.sRGBToLinear(S):(Y!==Sn||G!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=be,this.setupRenderTarget=E,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=z,this.useMultisampledRTT=V}function HE(n,e,t){const i=t.isWebGL2;function r(s,o=dn){let a;const l=Je.getTransfer(o);if(s===pi)return n.UNSIGNED_BYTE;if(s===mh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===gh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===yv)return n.BYTE;if(s===Ev)return n.SHORT;if(s===tc)return n.UNSIGNED_SHORT;if(s===ph)return n.INT;if(s===li)return n.UNSIGNED_INT;if(s===ci)return n.FLOAT;if(s===ds)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mv)return n.ALPHA;if(s===Sn)return n.RGBA;if(s===bv)return n.LUMINANCE;if(s===Tv)return n.LUMINANCE_ALPHA;if(s===Ni)return n.DEPTH_COMPONENT;if(s===Pr)return n.DEPTH_STENCIL;if(s===yl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wv)return n.RED;if(s===_h)return n.RED_INTEGER;if(s===Av)return n.RG;if(s===vh)return n.RG_INTEGER;if(s===xh)return n.RGBA_INTEGER;if(s===po||s===mo||s===go||s===_o)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gu||s===_u||s===vu||s===xu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Su||s===yu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Su)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eu||s===Mu||s===bu||s===Tu||s===wu||s===Au||s===Cu||s===Ru||s===Pu||s===Lu||s===Iu||s===Du||s===Uu||s===Nu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Au)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ru)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Iu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Du)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo||s===Ou||s===Fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vo)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ou)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cv||s===Bu||s===zu||s===Gu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class VE extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class WE extends Ir{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const x=[],_=[],y=new Xe;let A=null;const R=new fn;R.layers.enable(1),R.viewport=new bt;const C=new fn;C.layers.enable(2),C.viewport=new bt;const B=[R,C],M=new VE;M.layers.enable(1),M.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=x[te];return ce===void 0&&(ce=new ko,x[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=x[te];return ce===void 0&&(ce=new ko,x[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=x[te];return ce===void 0&&(ce=new ko,x[te]=ce),ce.getHandSpace()};function H(te){const ce=_.indexOf(te.inputSource);if(ce===-1)return;const xe=x[ce];xe!==void 0&&(xe.update(te.inputSource,te.frame,c||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let te=0;te<x.length;te++){const ce=_[te];ce!==null&&(_[te]=null,x[te].disconnect(ce))}T=null,U=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,xe=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?Pr:Ni,xe=v.stencil?Ui:li);const z={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(z),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Fi(d.textureWidth,d.textureHeight,{format:Sn,type:pi,depthTexture:new Oh(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(te){for(let ce=0;ce<te.removed.length;ce++){const xe=te.removed[ce],Me=_.indexOf(xe);Me>=0&&(_[Me]=null,x[Me].disconnect(xe))}for(let ce=0;ce<te.added.length;ce++){const xe=te.added[ce];let Me=_.indexOf(xe);if(Me===-1){for(let oe=0;oe<x.length;oe++)if(oe>=_.length){_.push(xe),Me=oe;break}else if(_[oe]===null){_[oe]=xe,Me=oe;break}if(Me===-1)break}const z=x[Me];z&&z.connect(xe)}}const F=new q,O=new q;function $(te,ce,xe){F.setFromMatrixPosition(ce.matrixWorld),O.setFromMatrixPosition(xe.matrixWorld);const Me=F.distanceTo(O),z=ce.projectionMatrix.elements,oe=xe.projectionMatrix.elements,re=z[14]/(z[10]-1),ue=z[14]/(z[10]+1),be=(z[9]+1)/z[5],E=(z[9]-1)/z[5],P=(z[8]-1)/z[0],D=(oe[8]+1)/oe[0],X=re*P,V=re*D,Q=Me/(-P+D),se=Q*-P;ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(se),te.translateZ(Q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const b=re+Q,S=ue+Q,I=X-se,Y=V+(Me-se),G=be*ue/S*b,j=E*ue/S*b;te.projectionMatrix.makePerspective(I,Y,G,j,b,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function W(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;M.near=C.near=R.near=te.near,M.far=C.far=R.far=te.far,(T!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,U=M.far);const ce=te.parent,xe=M.cameras;W(M,ce);for(let Me=0;Me<xe.length;Me++)W(xe[Me],ce);xe.length===2?$(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),ne(te,M,ce)};function ne(te,ce,xe){xe===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=El*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)};let ie=null;function he(te,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Me=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let z=0;z<xe.length;z++){const oe=xe[z];let re=null;if(p!==null)re=p.getViewport(oe);else{const be=f.getViewSubImage(d,oe);re=be.viewport,z===0&&(e.setRenderTargetTextures(h,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(h))}let ue=B[z];ue===void 0&&(ue=new fn,ue.layers.enable(z),ue.viewport=new bt,B[z]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(re.x,re.y,re.width,re.height),z===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(ue)}}for(let xe=0;xe<x.length;xe++){const Me=_[xe],z=x[xe];Me!==null&&z!==void 0&&z.update(Me,ce,c||o)}ie&&ie(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const de=new Nh;de.setAnimationLoop(he),this.setAnimationLoop=function(te){ie=te},this.dispose=function(){}}}function XE(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Lh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Xt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Xt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(x,A);const R=e.render.frame;s[x.id]!==R&&(d(x),s[x.id]=R)}function u(x){const _=f();x.__bindingPointIndex=_;const y=n.createBuffer(),A=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,C=y.length;R<C;R++){const B=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=B.length;M<T;M++){const U=B[M];if(p(U,R,M,A)===!0){const H=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let F=0;F<K.length;F++){const O=K[F],$=v(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,H+L,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,y,A){const R=x.value,C=_+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const B=A[C];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return A[C]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(x){const _=x.uniforms;let y=0;const A=16;for(let C=0,B=_.length;C<B;C++){const M=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,U=M.length;T<U;T++){const H=M[T],K=Array.isArray(H.value)?H.value:[H.value];for(let L=0,F=K.length;L<F;L++){const O=K[L],$=v(O),W=y%A;W!==0&&A-W<$.boundary&&(y+=A-W),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=$.storage}}}const R=y%A;return R>0&&(y+=A-R),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Vh{constructor(e={}){const{canvas:t=Hv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const _=this;let y=!1,A=0,R=0,C=null,B=-1,M=null;const T=new bt,U=new bt;let H=null;const K=new $e(0);let L=0,F=t.width,O=t.height,$=1,W=null,ne=null;const ie=new bt(0,0,F,O),he=new bt(0,0,F,O);let de=!1;const te=new Uh;let ce=!1,xe=!1,Me=null;const z=new pt,oe=new Xe,re=new q,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return C===null?$:1}let E=i;function P(w,k){for(let J=0;J<w.length;J++){const ee=w[J],Z=t.getContext(ee,k);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Se,!1),E===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),E=P(k,w),E===null)throw P(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let D,X,V,Q,se,b,S,I,Y,G,j,fe,le,pe,_e,Ae,ae,Ge,Le,Re,we,ve,Ce,qe;function ct(){D=new ny(E),X=new YS(E,D,e),D.init(X),ve=new HE(E,D,X),V=new zE(E,D,X),Q=new sy(E),se=new TE,b=new GE(E,D,V,se,X,ve,Q),S=new ZS(_),I=new ty(_),Y=new dx(E,X),Ce=new $S(E,D,Y,X),G=new iy(E,Y,Q,Ce),j=new cy(E,G,Y,Q),Le=new ly(E,X,b),Ae=new KS(se),fe=new bE(_,S,I,D,X,Ce,Ae),le=new XE(_,se),pe=new AE,_e=new DE(D,X),Ge=new qS(_,S,I,V,j,d,l),ae=new BE(_,j,X),qe=new qE(E,Q,X,V),Re=new jS(E,D,Q,X),we=new ry(E,D,Q,X),Q.programs=fe.programs,_.capabilities=X,_.extensions=D,_.properties=se,_.renderLists=pe,_.shadowMap=ae,_.state=V,_.info=Q}ct();const Ve=new WE(_,E);this.xr=Ve,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const w=D.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=D.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(F,O,!1))},this.getSize=function(w){return w.set(F,O)},this.setSize=function(w,k,J=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,O=k,t.width=Math.floor(w*$),t.height=Math.floor(k*$),J===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(F*$,O*$).floor()},this.setDrawingBufferSize=function(w,k,J){F=w,O=k,$=J,t.width=Math.floor(w*J),t.height=Math.floor(k*J),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,k,J,ee){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,k,J,ee),V.viewport(T.copy(ie).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,k,J,ee){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,k,J,ee),V.scissor(U.copy(he).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){V.setScissorTest(de=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(w=!0,k=!0,J=!0){let ee=0;if(w){let Z=!1;if(C!==null){const Ee=C.texture.format;Z=Ee===xh||Ee===vh||Ee===_h}if(Z){const Ee=C.texture.type,Te=Ee===pi||Ee===li||Ee===tc||Ee===Ui||Ee===mh||Ee===gh,Ie=Ge.getClearColor(),Ne=Ge.getClearAlpha(),He=Ie.r,Fe=Ie.g,Be=Ie.b;Te?(p[0]=He,p[1]=Fe,p[2]=Be,p[3]=Ne,E.clearBufferuiv(E.COLOR,0,p)):(g[0]=He,g[1]=Fe,g[2]=Be,g[3]=Ne,E.clearBufferiv(E.COLOR,0,g))}else ee|=E.COLOR_BUFFER_BIT}k&&(ee|=E.DEPTH_BUFFER_BIT),J&&(ee|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),pe.dispose(),_e.dispose(),se.dispose(),S.dispose(),I.dispose(),j.dispose(),Ce.dispose(),qe.dispose(),fe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Dt),Ve.removeEventListener("sessionend",it),Me&&(Me.dispose(),Me=null),Ut.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Q.autoReset,k=ae.enabled,J=ae.autoUpdate,ee=ae.needsUpdate,Z=ae.type;ct(),Q.autoReset=w,ae.enabled=k,ae.autoUpdate=J,ae.needsUpdate=ee,ae.type=Z}function Se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){const k=w.target;k.removeEventListener("dispose",ye),De(k)}function De(w){Pe(w),se.remove(w)}function Pe(w){const k=se.get(w).programs;k!==void 0&&(k.forEach(function(J){fe.releaseProgram(J)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,J,ee,Z,Ee){k===null&&(k=ue);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=cp(w,k,J,ee,Z);V.setMaterial(ee,Te);let Ne=J.index,He=1;if(ee.wireframe===!0){if(Ne=G.getWireframeAttribute(J),Ne===void 0)return;He=2}const Fe=J.drawRange,Be=J.attributes.position;let ft=Fe.start*He,$t=(Fe.start+Fe.count)*He;Ee!==null&&(ft=Math.max(ft,Ee.start*He),$t=Math.min($t,(Ee.start+Ee.count)*He)),Ne!==null?(ft=Math.max(ft,0),$t=Math.min($t,Ne.count)):Be!=null&&(ft=Math.max(ft,0),$t=Math.min($t,Be.count));const xt=$t-ft;if(xt<0||xt===1/0)return;Ce.setup(Z,ee,Ie,J,Ne);let Dn,lt=Re;if(Ne!==null&&(Dn=Y.get(Ne),lt=we,lt.setIndex(Dn)),Z.isMesh)ee.wireframe===!0?(V.setLineWidth(ee.wireframeLinewidth*be()),lt.setMode(E.LINES)):lt.setMode(E.TRIANGLES);else if(Z.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),V.setLineWidth(ke*be()),Z.isLineSegments?lt.setMode(E.LINES):Z.isLineLoop?lt.setMode(E.LINE_LOOP):lt.setMode(E.LINE_STRIP)}else Z.isPoints?lt.setMode(E.POINTS):Z.isSprite&&lt.setMode(E.TRIANGLES);if(Z.isBatchedMesh)lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)lt.renderInstances(ft,xt,Z.count);else if(J.isInstancedBufferGeometry){const ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$a=Math.min(J.instanceCount,ke);lt.renderInstances(ft,xt,$a)}else lt.render(ft,xt)};function tt(w,k,J){w.transparent===!0&&w.side===Cn&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,ys(w,k,J),w.side=_i,w.needsUpdate=!0,ys(w,k,J),w.side=Cn):ys(w,k,J)}this.compile=function(w,k,J=null){J===null&&(J=w),m=_e.get(J),m.init(),x.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),w!==J&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(_._useLegacyLights);const ee=new Set;return w.traverse(function(Z){const Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){const Ie=Ee[Te];tt(Ie,J,Z),ee.add(Ie)}else tt(Ee,J,Z),ee.add(Ee)}),x.pop(),m=null,ee},this.compileAsync=function(w,k,J=null){const ee=this.compile(w,k,J);return new Promise(Z=>{function Ee(){if(ee.forEach(function(Te){se.get(Te).currentProgram.isReady()&&ee.delete(Te)}),ee.size===0){Z(w);return}setTimeout(Ee,10)}D.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let nt=null;function vt(w){nt&&nt(w)}function Dt(){Ut.stop()}function it(){Ut.start()}const Ut=new Nh;Ut.setAnimationLoop(vt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(w){nt=w,Ve.setAnimationLoop(w),w===null?Ut.stop():Ut.start()},Ve.addEventListener("sessionstart",Dt),Ve.addEventListener("sessionend",it),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(k),k=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,C),m=_e.get(w,x.length),m.init(),x.push(m),z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(z),xe=this.localClippingEnabled,ce=Ae.init(this.clippingPlanes,xe),v=pe.get(w,h.length),v.init(),h.push(v),Mn(w,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,ne),this.info.render.frame++,ce===!0&&Ae.beginShadows();const J=m.state.shadowsArray;if(ae.render(J,w,k),ce===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(v,w),m.setupLights(_._useLegacyLights),k.isArrayCamera){const ee=k.cameras;for(let Z=0,Ee=ee.length;Z<Ee;Z++){const Te=ee[Z];uc(v,w,Te,Te.viewport)}}else uc(v,w,k);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,k),Ce.resetDefaultState(),B=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Mn(w,k,J,ee){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){ee&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(z);const Te=j.update(w),Ie=w.material;Ie.visible&&v.push(w,Te,Ie,J,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Te=j.update(w),Ie=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),re.copy(Te.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(z)),Array.isArray(Ie)){const Ne=Te.groups;for(let He=0,Fe=Ne.length;He<Fe;He++){const Be=Ne[He],ft=Ie[Be.materialIndex];ft&&ft.visible&&v.push(w,Te,ft,J,re.z,Be)}}else Ie.visible&&v.push(w,Te,Ie,J,re.z,null)}}const Ee=w.children;for(let Te=0,Ie=Ee.length;Te<Ie;Te++)Mn(Ee[Te],k,J,ee)}function uc(w,k,J,ee){const Z=w.opaque,Ee=w.transmissive,Te=w.transparent;m.setupLightsView(J),ce===!0&&Ae.setGlobalState(_.clippingPlanes,J),Ee.length>0&&lp(Z,Ee,k,J),ee&&V.viewport(T.copy(ee)),Z.length>0&&Ss(Z,k,J),Ee.length>0&&Ss(Ee,k,J),Te.length>0&&Ss(Te,k,J),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function lp(w,k,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Ee=X.isWebGL2;Me===null&&(Me=new Fi(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?ds:pi,minFilter:fs,samples:Ee?4:0})),_.getDrawingBufferSize(oe),Ee?Me.setSize(oe.x,oe.y):Me.setSize(Ml(oe.x),Ml(oe.y));const Te=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=hi,Ss(w,J,ee),b.updateMultisampleRenderTarget(Me),b.updateRenderTargetMipmap(Me);let Ne=!1;for(let He=0,Fe=k.length;He<Fe;He++){const Be=k[He],ft=Be.object,$t=Be.geometry,xt=Be.material,Dn=Be.group;if(xt.side===Cn&&ft.layers.test(ee.layers)){const lt=xt.side;xt.side=Xt,xt.needsUpdate=!0,fc(ft,J,ee,$t,xt,Dn),xt.side=lt,xt.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(Me),b.updateRenderTargetMipmap(Me)),_.setRenderTarget(Te),_.setClearColor(K,L),_.toneMapping=Ie}function Ss(w,k,J){const ee=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Ee=w.length;Z<Ee;Z++){const Te=w[Z],Ie=Te.object,Ne=Te.geometry,He=ee===null?Te.material:ee,Fe=Te.group;Ie.layers.test(J.layers)&&fc(Ie,k,J,Ne,He,Fe)}}function fc(w,k,J,ee,Z,Ee){w.onBeforeRender(_,k,J,ee,Z,Ee),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(_,k,J,ee,w,Ee),Z.transparent===!0&&Z.side===Cn&&Z.forceSinglePass===!1?(Z.side=Xt,Z.needsUpdate=!0,_.renderBufferDirect(J,k,ee,Z,w,Ee),Z.side=_i,Z.needsUpdate=!0,_.renderBufferDirect(J,k,ee,Z,w,Ee),Z.side=Cn):_.renderBufferDirect(J,k,ee,Z,w,Ee),w.onAfterRender(_,k,J,ee,Z,Ee)}function ys(w,k,J){k.isScene!==!0&&(k=ue);const ee=se.get(w),Z=m.state.lights,Ee=m.state.shadowsArray,Te=Z.state.version,Ie=fe.getParameters(w,Z.state,Ee,k,J),Ne=fe.getProgramCacheKey(Ie);let He=ee.programs;ee.environment=w.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(w.isMeshStandardMaterial?I:S).get(w.envMap||ee.environment),He===void 0&&(w.addEventListener("dispose",ye),He=new Map,ee.programs=He);let Fe=He.get(Ne);if(Fe!==void 0){if(ee.currentProgram===Fe&&ee.lightsStateVersion===Te)return hc(w,Ie),Fe}else Ie.uniforms=fe.getUniforms(w),w.onBuild(J,Ie,_),w.onBeforeCompile(Ie,_),Fe=fe.acquireProgram(Ie,Ne),He.set(Ne,Fe),ee.uniforms=Ie.uniforms;const Be=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),hc(w,Ie),ee.needsLights=fp(w),ee.lightsStateVersion=Te,ee.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Fe,ee.uniformsList=null,Fe}function dc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=oa.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function hc(w,k){const J=se.get(w);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function cp(w,k,J,ee,Z){k.isScene!==!0&&(k=ue),b.resetTextureUnits();const Ee=k.fog,Te=ee.isMeshStandardMaterial?k.environment:null,Ie=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zn,Ne=(ee.isMeshStandardMaterial?I:S).get(ee.envMap||Te),He=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Fe=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Be=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,$t=!!J.morphAttributes.color;let xt=hi;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=_.toneMapping);const Dn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Dn!==void 0?Dn.length:0,ke=se.get(ee),$a=m.state.lights;if(ce===!0&&(xe===!0||w!==M)){const an=w===M&&ee.id===B;Ae.setState(ee,w,an)}let ut=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$a.state.version||ke.outputColorSpace!==Ie||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||ke.envMap!==Ne||ee.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ae.numPlanes||ke.numIntersection!==Ae.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Fe||ke.morphTargets!==Be||ke.morphNormals!==ft||ke.morphColors!==$t||ke.toneMapping!==xt||X.isWebGL2===!0&&ke.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,ke.__version=ee.version);let xi=ke.currentProgram;ut===!0&&(xi=ys(ee,k,Z));let pc=!1,Ur=!1,ja=!1;const Tt=xi.getUniforms(),Si=ke.uniforms;if(V.useProgram(xi.program)&&(pc=!0,Ur=!0,ja=!0),ee.id!==B&&(B=ee.id,Ur=!0),pc||M!==w){Tt.setValue(E,"projectionMatrix",w.projectionMatrix),Tt.setValue(E,"viewMatrix",w.matrixWorldInverse);const an=Tt.map.cameraPosition;an!==void 0&&an.setValue(E,re.setFromMatrixPosition(w.matrixWorld)),X.logarithmicDepthBuffer&&Tt.setValue(E,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Tt.setValue(E,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ur=!0,ja=!0)}if(Z.isSkinnedMesh){Tt.setOptional(E,Z,"bindMatrix"),Tt.setOptional(E,Z,"bindMatrixInverse");const an=Z.skeleton;an&&(X.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Tt.setValue(E,"boneTexture",an.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Tt.setOptional(E,Z,"batchingTexture"),Tt.setValue(E,"batchingTexture",Z._matricesTexture,b));const Ya=J.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&X.isWebGL2===!0)&&Le.update(Z,J,xi),(Ur||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Tt.setValue(E,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Si.envMap.value=Ne,Si.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ur&&(Tt.setValue(E,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&up(Si,ja),Ee&&ee.fog===!0&&le.refreshFogUniforms(Si,Ee),le.refreshMaterialUniforms(Si,ee,$,O,Me),oa.upload(E,dc(ke),Si,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(oa.upload(E,dc(ke),Si,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Tt.setValue(E,"center",Z.center),Tt.setValue(E,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(E,"normalMatrix",Z.normalMatrix),Tt.setValue(E,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const an=ee.uniformsGroups;for(let Ka=0,dp=an.length;Ka<dp;Ka++)if(X.isWebGL2){const mc=an[Ka];qe.update(mc,xi),qe.bind(mc,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function up(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function fp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,k,J){se.get(w.texture).__webglTexture=k,se.get(w.depthTexture).__webglTexture=J;const ee=se.get(w);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const J=se.get(w);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,J=0){C=w,A=k,R=J;let ee=!0,Z=null,Ee=!1,Te=!1;if(w){const Ne=se.get(w);Ne.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(E.FRAMEBUFFER,null),ee=!1):Ne.__webglFramebuffer===void 0?b.setupRenderTarget(w):Ne.__hasExternalTextures&&b.rebindTextures(w,se.get(w.texture).__webglTexture,se.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Fe=se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?Z=Fe[k][J]:Z=Fe[k],Ee=!0):X.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?Z=se.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?Z=Fe[J]:Z=Fe,T.copy(w.viewport),U.copy(w.scissor),H=w.scissorTest}else T.copy(ie).multiplyScalar($).floor(),U.copy(he).multiplyScalar($).floor(),H=de;if(V.bindFramebuffer(E.FRAMEBUFFER,Z)&&X.drawBuffers&&ee&&V.drawBuffers(w,Z),V.viewport(T),V.scissor(U),V.setScissorTest(H),Ee){const Ne=se.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,J)}else if(Te){const Ne=se.get(w.texture),He=k||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ne.__webglTexture,J||0,He)}B=-1},this.readRenderTargetPixels=function(w,k,J,ee,Z,Ee,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){V.bindFramebuffer(E.FRAMEBUFFER,Ie);try{const Ne=w.texture,He=Ne.format,Fe=Ne.type;if(He!==Sn&&ve.convert(He)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===ds&&(D.has("EXT_color_buffer_half_float")||X.isWebGL2&&D.has("EXT_color_buffer_float"));if(Fe!==pi&&ve.convert(Fe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===ci&&(X.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-ee&&J>=0&&J<=w.height-Z&&E.readPixels(k,J,ee,Z,ve.convert(He),ve.convert(Fe),Ee)}finally{const Ne=C!==null?se.get(C).__webglFramebuffer:null;V.bindFramebuffer(E.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,k,J=0){const ee=Math.pow(2,-J),Z=Math.floor(k.image.width*ee),Ee=Math.floor(k.image.height*ee);b.setTexture2D(k,0),E.copyTexSubImage2D(E.TEXTURE_2D,J,0,0,w.x,w.y,Z,Ee),V.unbindTexture()},this.copyTextureToTexture=function(w,k,J,ee=0){const Z=k.image.width,Ee=k.image.height,Te=ve.convert(J.format),Ie=ve.convert(J.type);b.setTexture2D(J,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,J.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,J.unpackAlignment),k.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ee,w.x,w.y,Z,Ee,Te,Ie,k.image.data):k.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ee,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,ee,w.x,w.y,Te,Ie,k.image),ee===0&&J.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(w,k,J,ee,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=w.max.x-w.min.x+1,Te=w.max.y-w.min.y+1,Ie=w.max.z-w.min.z+1,Ne=ve.convert(ee.format),He=ve.convert(ee.type);let Fe;if(ee.isData3DTexture)b.setTexture3D(ee,0),Fe=E.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),Fe=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ee.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ee.unpackAlignment);const Be=E.getParameter(E.UNPACK_ROW_LENGTH),ft=E.getParameter(E.UNPACK_IMAGE_HEIGHT),$t=E.getParameter(E.UNPACK_SKIP_PIXELS),xt=E.getParameter(E.UNPACK_SKIP_ROWS),Dn=E.getParameter(E.UNPACK_SKIP_IMAGES),lt=J.isCompressedTexture?J.mipmaps[Z]:J.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,lt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,lt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,w.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,w.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,w.min.z),J.isDataTexture||J.isData3DTexture?E.texSubImage3D(Fe,Z,k.x,k.y,k.z,Ee,Te,Ie,Ne,He,lt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Fe,Z,k.x,k.y,k.z,Ee,Te,Ie,Ne,lt.data)):E.texSubImage3D(Fe,Z,k.x,k.y,k.z,Ee,Te,Ie,Ne,He,lt),E.pixelStorei(E.UNPACK_ROW_LENGTH,Be),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ft),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(E.UNPACK_SKIP_ROWS,xt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Dn),Z===0&&ee.generateMipmaps&&E.generateMipmap(Fe),V.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),V.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,V.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Oi:yh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?Et:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $E extends Vh{}$E.prototype.isWebGL1Renderer=!0;class jE extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class YE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new q;class Ma{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ma(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kh extends Hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ar;const Vr=new q,or=new q,lr=new q,cr=new Xe,kr=new Xe,Wh=new pt,js=new q,Wr=new q,Ys=new q,Rf=new Xe,Wo=new Xe,Pf=new Xe;class KE extends Lt{constructor(e=new kh){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YE(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Ma(i,3,0,!1)),ar.setAttribute("uv",new Ma(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new Xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ks(js.set(-.5,-.5,0),lr,o,or,r,s),Ks(Wr.set(.5,-.5,0),lr,o,or,r,s),Ks(Ys.set(.5,.5,0),lr,o,or,r,s),Rf.set(0,0),Wo.set(1,0),Pf.set(1,1);let a=e.ray.intersectTriangle(js,Wr,Ys,!1,Vr);if(a===null&&(Ks(Wr.set(-.5,.5,0),lr,o,or,r,s),Wo.set(0,1),a=e.ray.intersectTriangle(js,Ys,Wr,!1,Vr),a===null))return;const l=e.ray.origin.distanceTo(Vr);l<e.near||l>e.far||t.push({distance:l,point:Vr.clone(),uv:un.getInterpolation(Vr,js,Wr,Ys,Rf,Wo,Pf,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ks(n,e,t,i,r,s){cr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(kr.x=s*cr.x-r*cr.y,kr.y=r*cr.x+s*cr.y):kr.copy(cr),n.copy(e),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(Wh)}class Xh extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lf=new q,If=new q,Df=new pt,Xo=new ic,Zs=new vs;class ZE extends Lt{constructor(e=new sn,t=new Xh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lf.fromBufferAttribute(t,r-1),If.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lf.distanceTo(If);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;Df.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new q,u=new q,f=new q,d=new q,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=h,y=x-1;_<y;_+=p){const A=g.getX(_),R=g.getX(_+1);if(c.fromBufferAttribute(m,A),u.fromBufferAttribute(m,R),Xo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=h,y=x-1;_<y;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Xo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Uf=new q,Nf=new q;class JE extends ZE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uf.fromBufferAttribute(t,r),Nf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uf.distanceTo(Nf);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qh extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Of=new pt,Tl=new ic,Js=new vs,Qs=new q;class QE extends Lt{constructor(e=new sn,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Of.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(Of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Qs.fromBufferAttribute(f,m),Ff(Qs,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Qs.fromBufferAttribute(f,g),Ff(Qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ff(n,e,t,i,r,s,o){const a=Tl.distanceSqToPoint(n);if(a<t){const l=new q;Tl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Bf extends qt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends sn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,p=new q,g=new Xe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let h=0;h<i;h++){const x=h+m,_=x,y=x+i+1,A=x+i+2,R=x+1;a.push(_,y,R),a.push(y,A,R)}}this.setIndex(a),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const $h={__name:"NeonBrain",props:{animated:{type:Boolean,default:!0}},setup(n){const e=n,t=at(null);return Ba(()=>{const i=new jE,r=new fn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Vh({canvas:t.value,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),r.position.z=5;const o=new Xe(0,0);window.addEventListener("mousemove",T=>{o.x=T.clientX/window.innerWidth*2-1,o.y=-(T.clientY/window.innerHeight)*2+1});const a=150,l=new sn,c=[],u=[];for(let T=0;T<a;T++){const U=(Math.random()-.5)*6,H=(Math.random()-.5)*6,K=(Math.random()-.5)*6;c.push(U,H,K),u.push((Math.random()-.5)*.01,(Math.random()-.5)*.01,(Math.random()-.5)*.01)}l.setAttribute("position",new rn(c,3));const f=document.createElement("canvas");f.width=f.height=64;const d=f.getContext("2d");d.beginPath(),d.arc(32,32,32,0,Math.PI*2),d.fillStyle="#00ff88",d.fill();const p=new Bf(f),g=new qh({map:p,alphaTest:.5,transparent:!0,size:.06,depthWrite:!1}),v=new QE(l,g);i.add(v);const m=a*6,h=new sn,x=new Float32Array(m*3);h.setAttribute("position",new pn(x,3));const _=new Xh({color:65416,transparent:!0,opacity:.3}),y=new JE(h,_);i.add(y);const A=[],R=new rc({color:65416,transparent:!0,opacity:.12,side:Cn,wireframe:!0});function C(){const T=new oc(.2,.3,64),U=new jn(T,R.clone());U.rotation.x=Math.PI/2,i.add(U),A.push({mesh:U,scale:.1})}setInterval(()=>{e.animated&&C()},1500),["Δ CODE","ÆON","0x3A7F","SYS-LOC","Φ-GATE"].forEach((T,U)=>{const H=document.createElement("canvas");H.width=256,H.height=64;const K=H.getContext("2d");K.font="28px monospace",K.fillStyle="#00ff88",K.fillText(T,10,40);const L=new Bf(H),F=new kh({map:L,transparent:!0,opacity:.4}),O=new KE(F);O.position.set(Math.cos(U*2)*3.5,Math.sin(U*2)*2,-1+Math.random()*2),O.scale.set(2,.5,1),O.userData.phase=Math.random()*Math.PI*2,i.add(O)});function M(T){requestAnimationFrame(M);const U=l.attributes.position.array,H=y.geometry.attributes.position.array;let K=0;if(e.animated){for(let L=0;L<a;L++){U[L*3+0]+=u[L*3+0],U[L*3+1]+=u[L*3+1],U[L*3+2]+=u[L*3+2];for(let F=0;F<3;F++)(U[L*3+F]>3||U[L*3+F]<-3)&&(u[L*3+F]*=-1)}for(let L of A)L.scale+=.06,L.mesh.scale.set(L.scale,L.scale,L.scale),L.mesh.material.opacity=.15*(1-L.scale/12);A.filter((L,F)=>{L.scale>12&&(i.remove(L.mesh),A.splice(F,1))}),i.children.forEach(L=>{if(L.type==="Sprite"&&L.material){const F=.4+.2*Math.sin(T*.001+L.userData.phase);L.material.opacity=F}})}for(let L=0;L<a;L++){const F=U[L*3+0],O=U[L*3+1],$=U[L*3+2];for(let W=L+1;W<a;W++){const ne=U[W*3+0],ie=U[W*3+1],he=U[W*3+2],de=F-ne,te=O-ie,ce=$-he;Math.sqrt(de*de+te*te+ce*ce)<1.3&&K<m&&(H[K*6+0]=F,H[K*6+1]=O,H[K*6+2]=$,H[K*6+3]=ne,H[K*6+4]=ie,H[K*6+5]=he,K++)}}i.scale.set(1.2,1.2,1.2),i.rotation.y=o.x*.1,i.rotation.x=o.y*.1,y.geometry.setDrawRange(0,K*2),l.attributes.position.needsUpdate=!0,y.geometry.attributes.position.needsUpdate=!0,s.render(i,r)}M()}),(i,r)=>(Vt(),Zt("canvas",{ref_key:"canvas",ref:t,class:"absolute top-0 left-0 w-full h-full z-0 pointer-events-none"},null,512))}},eM={class:"relative bg-black text-white font-futuristic overflow-hidden"},tM={__name:"App",setup(n){const e=U_(),t=en(()=>e.path==="/");return(i,r)=>{const s=dm("router-view");return Vt(),Zt("div",eM,[dt($h,{animated:t.value},null,8,["animated"]),dt(uh),dt(s)])}}},nM={class:"relative w-full min-h-screen bg-black text-white font-futuristic overflow-hidden"},iM={__name:"Home",setup(n){return(e,t)=>(Vt(),Zt("div",nM,[dt($h,{class:"fixed top-0 left-0 w-full h-full z-0"}),dt(uh),t[0]||(t[0]=jm('<section id="home" class="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 md:px-12" data-v-678ca2ec><div class="max-w-3xl text-gray-100 text-sm md:text-base" data-v-678ca2ec><h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" data-v-678ca2ec> Pierre Faivre </h1><p class="leading-relaxed mb-6" data-v-678ca2ec> Développeur web full-stack passionné par les interfaces immersives et interactives. Je conçois des expériences numériques modernes, performantes et sur mesure. </p><p class="mt-6 text-sm text-gray-400" data-v-678ca2ec>Technos maîtrisées :</p><ul class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-white text-sm tracking-wide" data-v-678ca2ec><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>PHP</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>Node.js</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>Three.js</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>Vue.js</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>Angular</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>Python</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>TailwindCSS</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>MongoDB</li><li class="bg-white/10 px-3 py-1 rounded shadow hover:shadow-md transition" data-v-678ca2ec>MySQL</li></ul><br data-v-678ca2ec><a href="/portfolio" class="inline-block px-6 py-2 bg-[#000000] text-white font-bold rounded custom-shadow hover:bg-[#00ff88] hover:text-black transition" data-v-678ca2ec> Voir mes projets </a></div><div class="mt-12 text-center" data-v-678ca2ec><p class="text-lg text-gray-300" data-v-678ca2ec> Envie de collaborer ou d’échanger ?<br data-v-678ca2ec><a href="/contact" class="text-[#ffffff] hover:underline" data-v-678ca2ec>Contactez-moi ici</a></p><p class="mt-4 text-sm text-gray-500" data-v-678ca2ec> Ou découvrez mes projets open source sur <a href="https://github.com/saxum-0" target="_blank" rel="noopener" class="text-[#00ff88] hover:text-white bold" data-v-678ca2ec> GitHub </a>. </p></div></section>',1))]))}},rM=Ql(iM,[["__scopeId","data-v-678ca2ec"]]),sM={id:"contact",class:"min-h-screen bg-[#0f172a] text-white py-20 px-4 font-futuristic"},aM={class:"max-w-3xl mx-auto"},oM={class:"text-center"},lM=["disabled"],cM={__name:"Contact",setup(n){const e=at(""),t=at(""),i=at(""),r=at("Envoyer"),s=at(!1),o=async l=>{if(l.preventDefault(),s.value)return;a(),s.value=!0,r.value="Envoi...";const c=new FormData;c.append("name",e.value),c.append("email",t.value),c.append("message",i.value);try{(await fetch("https://formspree.io/f/xkgrlobn",{method:"POST",body:c,headers:{Accept:"application/json"}})).ok?(r.value="Message envoyé ✔️",e.value="",t.value="",i.value=""):r.value="Erreur ❌"}catch{r.value="Erreur ❌"}finally{setTimeout(()=>{r.value="Envoyer",s.value=!1},3e3)}},a=()=>{const l=new Audio("/sounds/sound.wav");l.volume=.3,l.play()};return(l,c)=>(Vt(),Zt("section",sM,[Ze("div",aM,[c[6]||(c[6]=Ze("h2",{class:"text-4xl font-bold mb-8 text-center text-[#FFFFFF] font-futuristic"},"Me contacter",-1)),Ze("form",{onSubmit:o,class:"space-y-6"},[Ze("div",null,[c[3]||(c[3]=Ze("label",{for:"name",class:"block text-xl mb-1 font-futuristic"},"Nom",-1)),no(Ze("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",name:"name",id:"name",placeholder:"Votre nom",required:"",class:"w-full px-4 py-2 bg-white bg-opacity-70 border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"},null,512),[[lo,e.value]])]),Ze("div",null,[c[4]||(c[4]=Ze("label",{for:"email",class:"block text-xl mb-1 font-futuristic"},"Email",-1)),no(Ze("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u),type:"email",name:"email",id:"email",placeholder:"Votre email",required:"",class:"w-full px-4 py-2 bg-white bg-opacity-70 border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"},null,512),[[lo,t.value]])]),Ze("div",null,[c[5]||(c[5]=Ze("label",{for:"message",class:"block text-xl mb-1 font-futuristic"},"Message",-1)),no(Ze("textarea",{"onUpdate:modelValue":c[2]||(c[2]=u=>i.value=u),name:"message",id:"message",rows:"5",placeholder:"Votre message...",required:"",class:"w-full px-4 py-2 bg-opacity-70 bg-white border border-[#00ff88] text-black rounded shadow focus:outline-none focus:ring-2 focus:ring-[#00ff88]"},null,512),[[lo,i.value]])]),Ze("div",oM,[Ze("button",{type:"submit",disabled:s.value,class:hs(["px-6 py-2 bg-[#00ff88] text-black font-bold rounded transition duration-300 ease-in-out hover:bg-black hover:text-white",{"animate-pulse":s.value}])},Ii(r.value),11,lM)])],32)])]))}};function zf(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function lc(n,e){n===void 0&&(n={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:zf(e[i])&&zf(n[i])&&Object.keys(e[i]).length>0&&lc(n[i],e[i])})}const jh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Vi(){const n=typeof document<"u"?document:{};return lc(n,jh),n}const uM={document:jh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Gt(){const n=typeof window<"u"?window:{};return lc(n,uM),n}function fM(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function dM(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function wl(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function ba(){return Date.now()}function hM(n){const e=Gt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function pM(n,e){e===void 0&&(e="x");const t=Gt();let i,r,s;const o=hM(n);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function ea(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function mM(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Jt(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!mM(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(ea(n[a])&&ea(i[a])?i[a].__swiper__?n[a]=i[a]:Jt(n[a],i[a]):!ea(n[a])&&ea(i[a])?(n[a]={},i[a].__swiper__?n[a]=i[a]:Jt(n[a],i[a])):n[a]=i[a])}}}return n}function ta(n,e,t){n.style.setProperty(e,t)}function Yh(n){let{swiper:e,targetPosition:t,side:i}=n;const r=Gt(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(d,p)=>c==="next"&&d>=p||c==="prev"&&d<=p,f=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let g=s+p*(t-s);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[i]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function Rn(n,e){e===void 0&&(e="");const t=Gt(),i=[...n.children];return t.HTMLSlotElement&&n instanceof HTMLSlotElement&&i.push(...n.assignedElements()),e?i.filter(r=>r.matches(e)):i}function gM(n,e){const t=[e];for(;t.length>0;){const i=t.shift();if(n===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function _M(n,e){const t=Gt();let i=e.contains(n);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(n),i||(i=gM(n,e))),i}function Ta(n){try{console.warn(n);return}catch{}}function wa(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:fM(e)),t}function vM(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function xM(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function ui(n,e){return Gt().getComputedStyle(n,null).getPropertyValue(e)}function Aa(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Kh(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Al(n,e,t){const i=Gt();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function yt(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}function Ca(n,e){e===void 0&&(e=""),typeof trustedTypes<"u"?n.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):n.innerHTML=e}let qo;function SM(){const n=Gt(),e=Vi();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Zh(){return qo||(qo=SM()),qo}let $o;function yM(n){let{userAgent:e}=n===void 0?{}:n;const t=Zh(),i=Gt(),r=i.navigator.platform,s=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let g=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&v.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),c&&!p&&(o.os="android",o.android=!0),(u||d||f)&&(o.os="ios",o.ios=!0),o}function Jh(n){return n===void 0&&(n={}),$o||($o=yM(n)),$o}let jo;function EM(){const n=Gt(),e=Jh();let t=!1;function i(){const a=n.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(n.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),o=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:r}}function Qh(){return jo||(jo=EM()),jo}function MM(n){let{swiper:e,on:t,emit:i}=n;const r=Gt();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:d,height:p}=e;let g=d,v=p;f.forEach(m=>{let{contentBoxSize:h,contentRect:x,target:_}=m;_&&_!==e.el||(g=x?x.width:(h[0]||h).inlineSize,v=x?x.height:(h[0]||h).blockSize)}),(g!==d||v!==p)&&a()})}),s.observe(e.el))},c=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function bM(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s=[],o=Gt(),a=function(u,f){f===void 0&&(f={});const d=o.MutationObserver||o.WebkitMutationObserver,p=new d(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const v=function(){r("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});p.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Kh(e.hostEl);for(let f=0;f<u.length;f+=1)a(u[f])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var TM={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(i,o)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),i=n):(e=s[0].events,t=s[0].data,i=s[0].context||n),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),n}};function wM(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(ui(i,"padding-left")||0,10)-parseInt(ui(i,"padding-right")||0,10),t=t-parseInt(ui(i,"padding-top")||0,10)-parseInt(ui(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function AM(){const n=this;function e(T,U){return parseFloat(T.getPropertyValue(n.getDirectionLabel(U))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=n,l=n.virtual&&t.virtual.enabled,c=l?n.virtual.slides.length:n.slides.length,u=Rn(r,`.${n.params.slideClass}, swiper-slide`),f=l?n.virtual.slides.length:u.length;let d=[];const p=[],g=[];let v=t.slidesOffsetBefore;typeof v=="function"&&(v=t.slidesOffsetBefore.call(n));let m=t.slidesOffsetAfter;typeof m=="function"&&(m=t.slidesOffsetAfter.call(n));const h=n.snapGrid.length,x=n.slidesGrid.length;let _=t.spaceBetween,y=-v,A=0,R=0;if(typeof s>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*s:typeof _=="string"&&(_=parseFloat(_)),n.virtualSize=-_,u.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ta(i,"--swiper-centered-offset-before",""),ta(i,"--swiper-centered-offset-after",""));const C=t.grid&&t.grid.rows>1&&n.grid;C?n.grid.initSlides(u):n.grid&&n.grid.unsetSlides();let B;const M=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<f;T+=1){B=0;let U;if(u[T]&&(U=u[T]),C&&n.grid.updateSlide(T,U,u),!(u[T]&&ui(U,"display")==="none")){if(t.slidesPerView==="auto"){M&&(u[T].style[n.getDirectionLabel("width")]="");const H=getComputedStyle(U),K=U.style.transform,L=U.style.webkitTransform;if(K&&(U.style.transform="none"),L&&(U.style.webkitTransform="none"),t.roundLengths)B=n.isHorizontal()?Al(U,"width"):Al(U,"height");else{const F=e(H,"width"),O=e(H,"padding-left"),$=e(H,"padding-right"),W=e(H,"margin-left"),ne=e(H,"margin-right"),ie=H.getPropertyValue("box-sizing");if(ie&&ie==="border-box")B=F+W+ne;else{const{clientWidth:he,offsetWidth:de}=U;B=F+O+$+W+ne+(de-he)}}K&&(U.style.transform=K),L&&(U.style.webkitTransform=L),t.roundLengths&&(B=Math.floor(B))}else B=(s-(t.slidesPerView-1)*_)/t.slidesPerView,t.roundLengths&&(B=Math.floor(B)),u[T]&&(u[T].style[n.getDirectionLabel("width")]=`${B}px`);u[T]&&(u[T].swiperSlideSize=B),g.push(B),t.centeredSlides?(y=y+B/2+A/2+_,A===0&&T!==0&&(y=y-s/2-_),T===0&&(y=y-s/2-_),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),R%t.slidesPerGroup===0&&d.push(y),p.push(y)):(t.roundLengths&&(y=Math.floor(y)),(R-Math.min(n.params.slidesPerGroupSkip,R))%n.params.slidesPerGroup===0&&d.push(y),p.push(y),y=y+B+_),n.virtualSize+=B+_,A=B,R+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+m,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+_}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+_}px`),C&&n.grid.updateWrapperSize(B,d),!t.centeredSlides){const T=[];for(let U=0;U<d.length;U+=1){let H=d[U];t.roundLengths&&(H=Math.floor(H)),d[U]<=n.virtualSize-s&&T.push(H)}d=T,Math.floor(n.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(n.virtualSize-s)}if(l&&t.loop){const T=g[0]+_;if(t.slidesPerGroup>1){const U=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),H=T*t.slidesPerGroup;for(let K=0;K<U;K+=1)d.push(d[d.length-1]+H)}for(let U=0;U<n.virtual.slidesBefore+n.virtual.slidesAfter;U+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+T),p.push(p[p.length-1]+T),n.virtualSize+=T}if(d.length===0&&(d=[0]),_!==0){const T=n.isHorizontal()&&o?"marginLeft":n.getDirectionLabel("marginRight");u.filter((U,H)=>!t.cssMode||t.loop?!0:H!==u.length-1).forEach(U=>{U.style[T]=`${_}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;g.forEach(H=>{T+=H+(_||0)}),T-=_;const U=T>s?T-s:0;d=d.map(H=>H<=0?-v:H>U?U+m:H)}if(t.centerInsufficientSlides){let T=0;g.forEach(H=>{T+=H+(_||0)}),T-=_;const U=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(T+U<s){const H=(s-T-U)/2;d.forEach((K,L)=>{d[L]=K-H}),p.forEach((K,L)=>{p[L]=K+H})}}if(Object.assign(n,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:g}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ta(i,"--swiper-centered-offset-before",`${-d[0]}px`),ta(i,"--swiper-centered-offset-after",`${n.size/2-g[g.length-1]/2}px`);const T=-n.snapGrid[0],U=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(H=>H+T),n.slidesGrid=n.slidesGrid.map(H=>H+U)}if(f!==c&&n.emit("slidesLengthChange"),d.length!==h&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),p.length!==x&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,U=n.el.classList.contains(T);f<=t.maxBackfaceHiddenSlides?U||n.el.classList.add(T):U&&n.el.classList.remove(T)}}function CM(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function RM(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}const Gf=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function PM(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;r&&(o=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const f=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),d=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),p=-(o-u),g=p+e.slidesSizesGrid[l],v=p>=0&&p<=e.size-e.slidesSizesGrid[l],m=p>=0&&p<e.size-1||g>1&&g<=e.size||p<=0&&g>=e.size;m&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),Gf(c,m,t.slideVisibleClass),Gf(c,v,t.slideFullyVisibleClass),c.progress=r?-f:f,c.originalProgress=r?-d:d}}function LM(n){const e=this;if(typeof n>"u"){const u=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(i===0)r=0,s=!0,o=!0;else{r=(n-e.minTranslate())/i;const u=Math.abs(n-e.minTranslate())<1,f=Math.abs(n-e.maxTranslate())<1;s=u||r<=0,o=f||r>=1,u&&(r=0),f&&(r=1)}if(t.loop){const u=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[u],p=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(n);v>=d?a=(v-d)/g:a=(v+g-p)/g,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}const Yo=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function IM(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,a=f=>Rn(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let l,c,u;if(s)if(t.loop){let f=r-n.virtual.slidesBefore;f<0&&(f=n.virtual.slides.length+f),f>=n.virtual.slides.length&&(f-=n.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.find(f=>f.column===r),u=e.find(f=>f.column===r+1),c=e.find(f=>f.column===r-1)):l=e[r];l&&(o||(u=xM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=vM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{Yo(f,f===l,t.slideActiveClass),Yo(f,f===u,t.slideNextClass),Yo(f,f===c,t.slidePrevClass)}),n.emitSlidesClasses()}const la=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Ko=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Cl=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),n.slides.forEach((l,c)=>{a.includes(l.column)&&Ko(n,c)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<r||a>s)&&Ko(n,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,t-1);o+=1)o!==r&&(o>s||o<r)&&Ko(n,o)};function DM(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function UM(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=n,c;const u=p=>{let g=p-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=DM(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(r.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const f=e.grid&&r.grid&&r.grid.rows>1;let d;if(e.virtual&&r.virtual.enabled&&r.loop)d=u(l);else if(f){const p=e.slides.find(v=>v.column===l);let g=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(p),0)),d=Math.floor(g/r.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?d=parseInt(p,10):d=l}else d=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:l}),e.initialized&&Cl(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function NM(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){s=!0,o=a;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var OM={updateSize:wM,updateSlides:AM,updateAutoHeight:CM,updateSlidesOffset:RM,updateSlidesProgress:PM,updateProgress:LM,updateSlidesClasses:IM,updateActiveIndex:UM,updateClickedSlide:NM};function FM(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let o=pM(s,n);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function BM(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-n:n:l=n,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const f=t.maxTranslate()-t.minTranslate();f===0?u=0:u=(n-t.minTranslate())/f,u!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function zM(){return-this.snapGrid[0]}function GM(){return-this.snapGrid[this.snapGrid.length-1]}function HM(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(i&&n>l?u=l:i&&n<c?u=c:u=n,s.updateProgress(u),o.cssMode){const f=s.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return Yh({swiper:s,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(d){!s||s.destroyed||d.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var VM={getTranslate:FM,setTranslate:BM,minTranslate:zM,maxTranslate:GM,translateTo:HM};function kM(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function ep(n){let{swiper:e,runCallbacks:t,direction:i,step:r}=n;const{activeIndex:s,previousIndex:o}=e;let a=i;a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&s!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function WM(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),ep({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function XM(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),ep({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var qM={setTransition:kM,transitionStart:WM,transitionEnd:XM};function $M(n,e,t,i,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let o=n;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:d,wrapperEl:p,enabled:g}=s;if(!g&&!i&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const v=Math.min(s.params.slidesPerGroupSkip,o);let m=v+Math.floor((o-v)/s.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const h=-l[m];if(a.normalizeSlideIndex)for(let C=0;C<c.length;C+=1){const B=-Math.floor(h*100),M=Math.floor(c[C]*100),T=Math.floor(c[C+1]*100);typeof c[C+1]<"u"?B>=M&&B<T-(T-M)/2?o=C:B>=M&&B<T&&(o=C+1):B>=M&&(o=C)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&(d?h>s.translate&&h>s.minTranslate():h<s.translate&&h<s.minTranslate())||!s.allowSlidePrev&&h>s.translate&&h>s.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(h);let x;o>f?x="next":o<f?x="prev":x="reset";const _=s.virtual&&s.params.virtual.enabled;if(!(_&&r)&&(d&&-h===s.translate||!d&&h===s.translate))return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(h),x!=="reset"&&(s.transitionStart(t,x),s.transitionEnd(t,x)),!1;if(a.cssMode){const C=s.isHorizontal(),B=d?h:-h;if(e===0)_&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),_&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[C?"scrollLeft":"scrollTop"]=B})):p[C?"scrollLeft":"scrollTop"]=B,_&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return Yh({swiper:s,targetPosition:B,side:C?"left":"top"}),!0;p.scrollTo({[C?"left":"top"]:B,behavior:"smooth"})}return!0}const R=Qh().isSafari;return _&&!r&&R&&s.isElement&&s.virtual.update(!1,!1,o),s.setTransition(e),s.setTranslate(h),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,x),e===0?s.transitionEnd(t,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(B){!s||s.destroyed||B.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function jM(n,e,t,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const d=o*r.params.grid.rows;a=r.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===d).column}else a=r.getSlideIndexByData(o);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let u=r.params.slidesPerView;u==="auto"?u=r.slidesPerViewDynamic():(u=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let f=l-a<u;if(c&&(f=f||a<Math.ceil(u/2)),i&&c&&r.params.slidesPerView!=="auto"&&!s&&(f=!1),f){const d=c?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?a+1:a-l+1,slideRealIndex:d==="next"?r.realIndex:void 0})}if(s){const d=o*r.params.grid.rows;o=r.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===d).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,t,i)}),r}function YM(n,e,t){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function KM(n,e,t){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=a?i.translate:-i.translate;function d(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const p=d(f),g=s.map(x=>d(x)),v=r.freeMode&&r.freeMode.enabled;let m=s[g.indexOf(p)-1];if(typeof m>"u"&&(r.cssMode||v)){let x;s.forEach((_,y)=>{p>=_&&(x=y)}),typeof x<"u"&&(m=v?s[x]:s[x>0?x-1:x])}let h=0;if(typeof m<"u"&&(h=o.indexOf(m),h<0&&(h=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(h=h-i.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),r.rewind&&i.isBeginning){const x=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(x,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(h,n,e,t)}),!0;return i.slideTo(h,n,e,t)}function ZM(n,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function JM(n,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof n>"u"&&(n=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const c=r.snapGrid[a],u=r.snapGrid[a+1];l-c>(u-c)*i&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[a-1],u=r.snapGrid[a];l-c<=(u-c)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function QM(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.clickedIndex,s;const o=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<n.loopedSlides-i/2||r>n.slides.length-n.loopedSlides+i/2?(n.loopFix(),r=n.getSlideIndex(Rn(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),wl(()=>{n.slideTo(r)})):n.slideTo(r):r>n.slides.length-i?(n.loopFix(),r=n.getSlideIndex(Rn(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),wl(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var eb={slideTo:$M,slideToLoop:jM,slideNext:YM,slidePrev:KM,slideReset:ZM,slideToClosest:JM,slideToClickedSlide:QM};function tb(n,e){const t=this,{params:i,slidesEl:r}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const s=()=>{Rn(r,`.${i.slideClass}, swiper-slide`).forEach((d,p)=>{d.setAttribute("data-swiper-slide-index",p)})},o=t.grid&&i.grid&&i.grid.rows>1,a=i.slidesPerGroup*(o?i.grid.rows:1),l=t.slides.length%a!==0,c=o&&t.slides.length%i.grid.rows!==0,u=f=>{for(let d=0;d<f;d+=1){const p=t.isElement?wa("swiper-slide",[i.slideBlankClass]):wa("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(p)}};if(l){if(i.loopAddBlankSlides){const f=a-t.slides.length%a;u(f),t.recalcSlides(),t.updateSlides()}else Ta("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(c){if(i.loopAddBlankSlides){const f=i.grid.rows-t.slides.length%i.grid.rows;u(f),t.recalcSlides(),t.updateSlides()}else Ta("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();t.loopFix({slideRealIndex:n,direction:i.centeredSlides?void 0:"next",initial:e})}function nb(n){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:s,initial:o,byController:a,byMousewheel:l}=n===void 0?{}:n;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:u,allowSlidePrev:f,allowSlideNext:d,slidesEl:p,params:g}=c,{centeredSlides:v,initialSlide:m}=g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&g.virtual.enabled){t&&(!g.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):g.centeredSlides&&c.snapIndex<g.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=d,c.emit("loopFix");return}let h=g.slidesPerView;h==="auto"?h=c.slidesPerViewDynamic():(h=Math.ceil(parseFloat(g.slidesPerView,10)),v&&h%2===0&&(h=h+1));const x=g.slidesPerGroupAuto?h:g.slidesPerGroup;let _=x;_%x!==0&&(_+=x-_%x),_+=g.loopAdditionalSlides,c.loopedSlides=_;const y=c.grid&&g.grid&&g.grid.rows>1;u.length<h+_||c.params.effect==="cards"&&u.length<h+_*2?Ta("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&g.grid.fill==="row"&&Ta("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const A=[],R=[],C=y?Math.ceil(u.length/g.grid.rows):u.length,B=o&&C-m<h&&!v;let M=B?m:c.activeIndex;typeof s>"u"?s=c.getSlideIndex(u.find(O=>O.classList.contains(g.slideActiveClass))):M=s;const T=i==="next"||!i,U=i==="prev"||!i;let H=0,K=0;const F=(y?u[s].column:s)+(v&&typeof r>"u"?-h/2+.5:0);if(F<_){H=Math.max(_-F,x);for(let O=0;O<_-F;O+=1){const $=O-Math.floor(O/C)*C;if(y){const W=C-$-1;for(let ne=u.length-1;ne>=0;ne-=1)u[ne].column===W&&A.push(ne)}else A.push(C-$-1)}}else if(F+h>C-_){K=Math.max(F-(C-_*2),x),B&&(K=Math.max(K,h-C+m+1));for(let O=0;O<K;O+=1){const $=O-Math.floor(O/C)*C;y?u.forEach((W,ne)=>{W.column===$&&R.push(ne)}):R.push($)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&u.length<h+_*2&&(R.includes(s)&&R.splice(R.indexOf(s),1),A.includes(s)&&A.splice(A.indexOf(s),1)),U&&A.forEach(O=>{u[O].swiperLoopMoveDOM=!0,p.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),T&&R.forEach(O=>{u[O].swiperLoopMoveDOM=!0,p.append(u[O]),u[O].swiperLoopMoveDOM=!1}),c.recalcSlides(),g.slidesPerView==="auto"?c.updateSlides():y&&(A.length>0&&U||R.length>0&&T)&&c.slides.forEach((O,$)=>{c.grid.updateSlide($,O,c.slides)}),g.watchSlidesProgress&&c.updateSlidesOffset(),t){if(A.length>0&&U){if(typeof e>"u"){const O=c.slidesGrid[M],W=c.slidesGrid[M+H]-O;l?c.setTranslate(c.translate-W):(c.slideTo(M+Math.ceil(H),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-W,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-W))}else if(r){const O=y?A.length/g.grid.rows:A.length;c.slideTo(c.activeIndex+O,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(R.length>0&&T)if(typeof e>"u"){const O=c.slidesGrid[M],W=c.slidesGrid[M-K]-O;l?c.setTranslate(c.translate-W):(c.slideTo(M-K,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-W,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-W))}else{const O=y?R.length/g.grid.rows:R.length;c.slideTo(c.activeIndex-O,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=d,c.controller&&c.controller.control&&!a){const O={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...O,slideTo:$.params.slidesPerView===g.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...O,slideTo:c.controller.control.params.slidesPerView===g.slidesPerView?t:!1})}c.emit("loopFix")}function ib(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||!t||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var rb={loopCreate:tb,loopFix:nb,loopDestroy:ib};function sb(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ab(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var ob={setGrabCursor:sb,unsetGrabCursor:ab};function lb(n,e){e===void 0&&(e=this);function t(i){if(!i||i===Vi()||i===Gt())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function Hf(n,e,t){const i=Gt(),{params:r}=n,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(t<=o||t>=i.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function cb(n){const e=this,t=Vi();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Hf(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!_M(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,d=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(d?lb(f,l):l.closest(f))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const p=o.currentX,g=o.currentY;if(!Hf(e,i,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=g,r.touchStartTime=ba(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let v=!0;l.matches(r.focusableElements)&&(v=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&t.activeElement.blur();const m=v&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||m)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function ub(n){const e=Vi(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(A=>A.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:u,startY:f,currentX:u,currentY:f}),i.touchStartTime=ba());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(f<s.startY&&t.translate<=t.maxTranslate()||f>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(o&&(u>s.startX&&-t.translate<=t.maxTranslate()||u<s.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=f;const d=s.currentX-s.startX,p=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(d**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let A;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:d*d+p*p>=25&&(A=Math.atan2(Math.abs(p),Math.abs(d))*180/Math.PI,i.isScrolling=t.isHorizontal()?A>r.touchAngle:90-A>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let g=t.isHorizontal()?d:p,v=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),v=Math.abs(v)*(o?1:-1)),s.diff=g,g*=r.touchRatio,o&&(g=-g,v=-v);const m=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const h=t.params.loop&&!r.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(h&&x&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(A)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&m!==t.touchesDirection&&h&&x&&Math.abs(g)>=1){Object.assign(s,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let _=!0,y=r.resistanceRatio;if(r.touchReleaseOnEdges&&(y=0),g>0?(h&&x&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(_=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+g)**y))):g<0&&(h&&x&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(_=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-g)**y))),_&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function fb(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].find(A=>A.identifier===t.touchId),!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=ba(),d=f-t.touchStartTime;if(e.allowClick){const A=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(A&&A[0]||i.target,A),e.emit("tap click",i),d<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=ba(),wl(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(o.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const g=p>=-e.maxTranslate()&&!e.params.loop;let v=0,m=e.slidesSizesGrid[0];for(let A=0;A<c.length;A+=A<o.slidesPerGroupSkip?1:o.slidesPerGroup){const R=A<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[A+R]<"u"?(g||p>=c[A]&&p<c[A+R])&&(v=A,m=c[A+R]-c[A]):(g||p>=c[A])&&(v=A,m=c[c.length-1]-c[c.length-2])}let h=null,x=null;o.rewind&&(e.isBeginning?x=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const _=(p-c[v])/m,y=v<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(d>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(_>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?h:v+y):e.slideTo(v)),e.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?e.slideTo(v+y):x!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?e.slideTo(x):e.slideTo(v))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(v+y):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:v+y),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:v))}}function Vf(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!a?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function db(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function hb(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function pb(n){const e=this;la(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function mb(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const tp=(n,e)=>{const t=Vi(),{params:i,el:r,wrapperEl:s,device:o}=n,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Vf,!0):n[c]("observerUpdate",Vf,!0),r[l]("load",n.onLoad,{capture:!0}))};function gb(){const n=this,{params:e}=n;n.onTouchStart=cb.bind(n),n.onTouchMove=ub.bind(n),n.onTouchEnd=fb.bind(n),n.onDocumentTouchStart=mb.bind(n),e.cssMode&&(n.onScroll=hb.bind(n)),n.onClick=db.bind(n),n.onLoad=pb.bind(n),tp(n,"on")}function _b(){tp(this,"off")}var vb={attachEvents:gb,detachEvents:_b};const kf=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function xb(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=Vi(),a=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?n.el:o.querySelector(i.breakpointsBase),c=n.getBreakpoint(s,a,l);if(!c||n.currentBreakpoint===c)return;const f=(c in s?s[c]:void 0)||n.originalParams,d=kf(n,i),p=kf(n,f),g=n.params.grabCursor,v=f.grabCursor,m=i.enabled;d&&!p?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!d&&p&&(r.classList.add(`${i.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),g&&!v?n.unsetGrabCursor():!g&&v&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(R=>{if(typeof f[R]>"u")return;const C=i[R]&&i[R].enabled,B=f[R]&&f[R].enabled;C&&!B&&n[R].disable(),!C&&B&&n[R].enable()});const h=f.direction&&f.direction!==i.direction,x=i.loop&&(f.slidesPerView!==i.slidesPerView||h),_=i.loop;h&&t&&n.changeDirection(),Jt(n.params,f);const y=n.params.enabled,A=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),m&&!y?n.disable():!m&&y&&n.enable(),n.currentBreakpoint=c,n.emit("_beforeBreakpoint",f),t&&(x?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!_&&A?(n.loopCreate(e),n.updateSlides()):_&&!A&&n.loopDestroy()),n.emit("breakpoint",f)}function Sb(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let i=!1;const r=Gt(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(n).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var yb={setBreakpoint:xb,getBreakpoint:Sb};function Eb(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function Mb(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,o=Eb(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),n.emitContainerClasses()}function bb(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Tb={addClasses:Mb,removeClasses:bb};function wb(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Ab={checkOverflow:wb},Rl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Cb(n,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){Jt(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){Jt(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),Jt(e,i)}}const Zo={eventsEmitter:TM,update:OM,translate:VM,transition:qM,slide:eb,loop:rb,grabCursor:ob,events:vb,breakpoints:yb,checkOverflow:Ab,classes:Tb},Jo={};let cc=class Vn{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=Jt({},t),e&&!t.el&&(t.el=e);const o=Vi();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const u=[];return o.querySelectorAll(t.el).forEach(f=>{const d=Jt({},t,{el:f});u.push(new Vn(d))}),u}const a=this;a.__swiper__=!0,a.support=Zh(),a.device=Jh({userAgent:t.userAgent}),a.browser=Qh(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(u=>{u({params:t,swiper:a,extendParams:Cb(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Jt({},Rl,l);return a.params=Jt({},c,Jo,t),a.originalParams=Jt({},a.params),a.passedParams=Jt({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=Rn(t,`.${i.slideClass}, swiper-slide`),s=Aa(r[0]);return Aa(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Rn(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*e+r;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=s[c]?Math.ceil(s[c].swiperSlideSize):0,d;for(let p=c+1;p<s.length;p+=1)s[p]&&!d&&(f+=Math.ceil(s[p].swiperSlideSize),u+=1,f>l&&(d=!0));for(let p=c-1;p>=0;p-=1)s[p]&&!d&&(f+=s[p].swiperSlideSize,u+=1,f>l&&(d=!0))}else if(e==="current")for(let f=c+1;f<s.length;f+=1)(t?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&la(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Rn(i,r())[0];return!o&&t.params.createElements&&(o=wa("div",t.params.wrapperClass),i.append(o),Rn(i,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||ui(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||ui(i,"direction")==="rtl"),wrongRTL:ui(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?la(t,s):s.addEventListener("load",o=>{la(t,o.target)})}),Cl(t),t.initialized=!0,Cl(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:s,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),dM(i)),i.destroyed=!0),null}static extendDefaults(e){Jt(Jo,e)}static get extendedDefaults(){return Jo}static get defaults(){return Rl}static installModule(e){Vn.prototype.__modules__||(Vn.prototype.__modules__=[]);const t=Vn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Vn.installModule(t)),Vn):(Vn.installModule(e),Vn)}};Object.keys(Zo).forEach(n=>{Object.keys(Zo[n]).forEach(e=>{cc.prototype[e]=Zo[n][e]})});cc.use([MM,bM]);const np=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function zi(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"&&!n.__swiper__}function Mr(n,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:zi(e[i])&&zi(n[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?n[i]=e[i]:Mr(n[i],e[i]):n[i]=e[i]})}function ip(n){return n===void 0&&(n={}),n.navigation&&typeof n.navigation.nextEl>"u"&&typeof n.navigation.prevEl>"u"}function rp(n){return n===void 0&&(n={}),n.pagination&&typeof n.pagination.el>"u"}function sp(n){return n===void 0&&(n={}),n.scrollbar&&typeof n.scrollbar.el>"u"}function ap(n){n===void 0&&(n="");const e=n.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return e.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}function Rb(n){return n===void 0&&(n=""),n?n.includes("swiper-wrapper")?n:`swiper-wrapper ${n}`:"swiper-wrapper"}function Pb(n){let{swiper:e,slides:t,passedParams:i,changedParams:r,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=n;const c=r.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:u,pagination:f,navigation:d,scrollbar:p,virtual:g,thumbs:v}=e;let m,h,x,_,y,A,R,C;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&!i.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(m=!0),r.includes("controller")&&i.controller&&i.controller.control&&u.controller&&!u.controller.control&&(h=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(x=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&p&&!p.el&&(_=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||o)&&(i.navigation.nextEl||s)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);const B=M=>{e[M]&&(e[M].destroy(),M==="navigation"?(e.isElement&&(e[M].prevEl.remove(),e[M].nextEl.remove()),u[M].prevEl=void 0,u[M].nextEl=void 0,e[M].prevEl=void 0,e[M].nextEl=void 0):(e.isElement&&e[M].el.remove(),u[M].el=void 0,e[M].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!i.loop?A=!0:!u.loop&&i.loop?R=!0:C=!0),c.forEach(M=>{if(zi(u[M])&&zi(i[M]))Object.assign(u[M],i[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in i[M]&&!i[M].enabled&&B(M);else{const T=i[M];(T===!0||T===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?T===!1&&B(M):u[M]=i[M]}}),c.includes("controller")&&!h&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("virtual")&&g&&u.virtual.enabled&&(t&&(g.slides=t),g.update(!0)),r.includes("children")&&t&&u.loop&&(C=!0),m&&v.init()&&v.update(!0),h&&(e.controller.control=u.controller.control),x&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),_&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),p.init(),p.updateSize(),p.setTranslate()),y&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),Ca(s,e.hostEl.constructor.nextButtonSvg),s.part.add("button-next"),e.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Ca(o,e.hostEl.constructor.prevButtonSvg),o.part.add("button-prev"),e.el.appendChild(o))),s&&(u.navigation.nextEl=s),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&e.changeDirection(i.direction,!1),(A||C)&&e.loopDestroy(),(R||C)&&e.loopCreate(),e.update()}function Wf(n,e){n===void 0&&(n={});const t={on:{}},i={},r={};Mr(t,Rl),t._emitClasses=!0,t.init=!1;const s={},o=np.map(l=>l.replace(/_/,"")),a=Object.assign({},n);return Object.keys(a).forEach(l=>{typeof n[l]>"u"||(o.indexOf(l)>=0?zi(n[l])?(t[l]={},r[l]={},Mr(t[l],n[l]),Mr(r[l],n[l])):(t[l]=n[l],r[l]=n[l]):l.search(/on[A-Z]/)===0&&typeof n[l]=="function"?t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=n[l]:s[l]=n[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:r,rest:s,events:i}}function Lb(n,e){let{el:t,nextEl:i,prevEl:r,paginationEl:s,scrollbarEl:o,swiper:a}=n;ip(e)&&i&&r&&(a.params.navigation.nextEl=i,a.originalParams.navigation.nextEl=i,a.params.navigation.prevEl=r,a.originalParams.navigation.prevEl=r),rp(e)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),sp(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(t)}function Ib(n,e,t,i,r){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(t&&i){const l=i.map(r),c=t.map(r);l.join("")!==c.join("")&&o("children"),i.length!==t.length&&o("children")}return np.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in n&&l in e)if(zi(n[l])&&zi(e[l])){const c=Object.keys(n[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(f=>{n[l][f]!==e[l][f]&&o(l)}),u.forEach(f=>{n[l][f]!==e[l][f]&&o(l)}))}else n[l]!==e[l]&&o(l)}),s}const Db=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.emit("_virtualUpdated"),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())};function Qo(n,e,t){n===void 0&&(n={});const i=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(o,a)=>{Array.isArray(o)&&o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?s(l.children,a):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")||l.componentOptions&&l.componentOptions.tag==="SwiperSlide"?i.push(l):r[a]&&r[a].push(l)})};return Object.keys(n).forEach(o=>{if(typeof n[o]!="function")return;const a=n[o]();s(a,o)}),t.value=e.value,e.value=i,{slides:i,slots:r}}function Ub(n,e,t){if(!t)return null;const i=u=>{let f=u;return u<0?f=e.length+u:f>=e.length&&(f=f-e.length),f},r=n.value.isHorizontal()?{[n.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:o}=t,a=n.value.params.loop?-e.length:0,l=n.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=s&&u<=o&&c.length<e.length&&c.push(e[i(u)]);return c.map(u=>{if(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=n,u.props.style=r,u.type)return kt(u.type,{...u.props},u.children);if(u.componentOptions)return kt(u.componentOptions.Ctor,{...u.props},u.componentOptions.children)})}const Xf={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopAddBlankSlides:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(n,e){let{slots:t,emit:i}=e;const{tag:r,wrapperTag:s}=n,o=at("swiper"),a=at(null),l=at(!1),c=at(!1),u=at(null),f=at(null),d=at(null),p={value:[]},g={value:[]},v=at(null),m=at(null),h=at(null),x=at(null),{params:_,passedParams:y}=Wf(n);Qo(t,p,g),d.value=y,g.value=p.value;const A=()=>{Qo(t,p,g),l.value=!0};_.onAny=function(B){for(var M=arguments.length,T=new Array(M>1?M-1:0),U=1;U<M;U++)T[U-1]=arguments[U];i(B,...T)},Object.assign(_.on,{_beforeBreakpoint:A,_containerClasses(B,M){o.value=M}});const R={..._};if(delete R.wrapperClass,f.value=new cc(R),f.value.virtual&&f.value.params.virtual.enabled){f.value.virtual.slides=p.value;const B={cache:!1,slides:p.value,renderExternal:M=>{a.value=M},renderExternalUpdate:!1};Mr(f.value.params.virtual,B),Mr(f.value.originalParams.virtual,B)}Xl(()=>{!c.value&&f.value&&(f.value.emitSlidesClasses(),c.value=!0);const{passedParams:B}=Wf(n),M=Ib(B,d.value,p.value,g.value,T=>T.props&&T.props.key);d.value=B,(M.length||l.value)&&f.value&&!f.value.destroyed&&Pb({swiper:f.value,slides:p.value,passedParams:B,changedParams:M,nextEl:v.value,prevEl:m.value,scrollbarEl:x.value,paginationEl:h.value}),l.value=!1}),Sr("swiper",f),Qr(a,()=>{Vl(()=>{Db(f.value)})}),Ba(()=>{u.value&&(Lb({el:u.value,nextEl:v.value,prevEl:m.value,paginationEl:h.value,scrollbarEl:x.value,swiper:f.value},_),i("swiper",f.value))}),ql(()=>{f.value&&!f.value.destroyed&&f.value.destroy(!0,!1)});function C(B){return _.virtual?Ub(f,B,a.value):(B.forEach((M,T)=>{M.props||(M.props={}),M.props.swiperRef=f,M.props.swiperSlideIndex=T}),B)}return()=>{const{slides:B,slots:M}=Qo(t,p,g);return kt(r,{ref:u,class:ap(o.value)},[M["container-start"],kt(s,{class:Rb(_.wrapperClass)},[M["wrapper-start"],C(B),M["wrapper-end"]]),ip(n)&&[kt("div",{ref:m,class:"swiper-button-prev"}),kt("div",{ref:v,class:"swiper-button-next"})],sp(n)&&kt("div",{ref:x,class:"swiper-scrollbar"}),rp(n)&&kt("div",{ref:h,class:"swiper-pagination"}),M["container-end"]])}}},qf={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(n,e){let{slots:t}=e,i=!1;const{swiperRef:r}=n,s=at(null),o=at("swiper-slide"),a=at(!1);function l(f,d,p){d===s.value&&(o.value=p)}Ba(()=>{!r||!r.value||(r.value.on("_slideClass",l),i=!0)}),Cd(()=>{i||!r||!r.value||(r.value.on("_slideClass",l),i=!0)}),Xl(()=>{!s.value||!r||!r.value||(typeof n.swiperSlideIndex<"u"&&(s.value.swiperSlideIndex=n.swiperSlideIndex),r.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),ql(()=>{!r||!r.value||r.value.off("_slideClass",l)});const c=en(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));Sr("swiperSlide",c);const u=()=>{a.value=!0};return()=>kt(n.tag,{class:ap(`${o.value}`),ref:s,"data-swiper-slide-index":typeof n.virtualIndex>"u"&&r&&r.value&&r.value.params.loop?n.swiperSlideIndex:n.virtualIndex,onLoadCapture:u},n.zoom?kt("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof n.zoom=="number"?n.zoom:void 0},[t.default&&t.default(c.value),n.lazy&&!a.value&&kt("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(c.value),n.lazy&&!a.value&&kt("div",{class:"swiper-lazy-preloader"})])}};function op(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Rn(n.el,`.${i[r]}`)[0];s||(s=wa("div",i[r]),s.className=i[r],n.el.append(s)),t[r]=s,e[r]=s}}),t}function Nb(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(g){let v;return g&&typeof g=="string"&&e.isElement&&(v=e.el.querySelector(g)||e.hostEl.querySelector(g),v)?v:(g&&(typeof g=="string"&&(v=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&v&&v.length>1&&e.el.querySelectorAll(g).length===1?v=e.el.querySelector(g):v&&v.length===1&&(v=v[0])),g&&!v?g:v)}function o(g,v){const m=e.params.navigation;g=yt(g),g.forEach(h=>{h&&(h.classList[v?"add":"remove"](...m.disabledClass.split(" ")),h.tagName==="BUTTON"&&(h.disabled=v),e.params.watchOverflow&&e.enabled&&h.classList[e.isLocked?"add":"remove"](m.lockClass))})}function a(){const{nextEl:g,prevEl:v}=e.navigation;if(e.params.loop){o(v,!1),o(g,!1);return}o(v,e.isBeginning&&!e.params.rewind),o(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const g=e.params.navigation;if(e.params.navigation=op(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let v=s(g.nextEl),m=s(g.prevEl);Object.assign(e.navigation,{nextEl:v,prevEl:m}),v=yt(v),m=yt(m);const h=(x,_)=>{x&&x.addEventListener("click",_==="next"?c:l),!e.enabled&&x&&x.classList.add(...g.lockClass.split(" "))};v.forEach(x=>h(x,"next")),m.forEach(x=>h(x,"prev"))}function f(){let{nextEl:g,prevEl:v}=e.navigation;g=yt(g),v=yt(v);const m=(h,x)=>{h.removeEventListener("click",x==="next"?c:l),h.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(h=>m(h,"next")),v.forEach(h=>m(h,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?p():(u(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:g,prevEl:v}=e.navigation;if(g=yt(g),v=yt(v),e.enabled){a();return}[...g,...v].filter(m=>!!m).forEach(m=>m.classList.add(e.params.navigation.lockClass))}),i("click",(g,v)=>{let{nextEl:m,prevEl:h}=e.navigation;m=yt(m),h=yt(h);const x=v.target;let _=h.includes(x)||m.includes(x);if(e.isElement&&!_){const y=v.path||v.composedPath&&v.composedPath();y&&(_=y.find(A=>m.includes(A)||h.includes(A)))}if(e.params.navigation.hideOnClick&&!_){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let y;m.length?y=m[0].classList.contains(e.params.navigation.hiddenClass):h.length&&(y=h[0].classList.contains(e.params.navigation.hiddenClass)),r(y===!0?"navigationShow":"navigationHide"),[...m,...h].filter(A=>!!A).forEach(A=>A.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:d,disable:p,update:a,init:u,destroy:f})}function Xr(n){return n===void 0&&(n=""),`.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ob(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(x,_){const{bulletActiveClass:y}=e.params.pagination;x&&(x=x[`${_==="prev"?"previous":"next"}ElementSibling`],x&&(x.classList.add(`${y}-${_}`),x=x[`${_==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${y}-${_}-${_}`)))}function u(x,_,y){if(x=x%y,_=_%y,_===x+1)return"next";if(_===x-1)return"previous"}function f(x){const _=x.target.closest(Xr(e.params.pagination.bulletClass));if(!_)return;x.preventDefault();const y=Aa(_)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===y)return;const A=u(e.realIndex,y,e.slides.length);A==="next"?e.slideNext():A==="previous"?e.slidePrev():e.slideToLoop(y)}else e.slideTo(y)}function d(){const x=e.rtl,_=e.params.pagination;if(l())return;let y=e.pagination.el;y=yt(y);let A,R;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,B=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(R=e.previousRealIndex||0,A=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(A=e.snapIndex,R=e.previousSnapIndex):(R=e.previousIndex||0,A=e.activeIndex||0),_.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const M=e.pagination.bullets;let T,U,H;if(_.dynamicBullets&&(o=Al(M[0],e.isHorizontal()?"width":"height"),y.forEach(K=>{K.style[e.isHorizontal()?"width":"height"]=`${o*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&R!==void 0&&(a+=A-(R||0),a>_.dynamicMainBullets-1?a=_.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(A-a,0),U=T+(Math.min(M.length,_.dynamicMainBullets)-1),H=(U+T)/2),M.forEach(K=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${_.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();K.classList.remove(...L)}),y.length>1)M.forEach(K=>{const L=Aa(K);L===A?K.classList.add(..._.bulletActiveClass.split(" ")):e.isElement&&K.setAttribute("part","bullet"),_.dynamicBullets&&(L>=T&&L<=U&&K.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),L===T&&c(K,"prev"),L===U&&c(K,"next"))});else{const K=M[A];if(K&&K.classList.add(..._.bulletActiveClass.split(" ")),e.isElement&&M.forEach((L,F)=>{L.setAttribute("part",F===A?"bullet-active":"bullet")}),_.dynamicBullets){const L=M[T],F=M[U];for(let O=T;O<=U;O+=1)M[O]&&M[O].classList.add(...`${_.bulletActiveClass}-main`.split(" "));c(L,"prev"),c(F,"next")}}if(_.dynamicBullets){const K=Math.min(M.length,_.dynamicMainBullets+4),L=(o*K-o)/2-H*o,F=x?"right":"left";M.forEach(O=>{O.style[e.isHorizontal()?F:"top"]=`${L}px`})}}y.forEach((M,T)=>{if(_.type==="fraction"&&(M.querySelectorAll(Xr(_.currentClass)).forEach(U=>{U.textContent=_.formatFractionCurrent(A+1)}),M.querySelectorAll(Xr(_.totalClass)).forEach(U=>{U.textContent=_.formatFractionTotal(B)})),_.type==="progressbar"){let U;_.progressbarOpposite?U=e.isHorizontal()?"vertical":"horizontal":U=e.isHorizontal()?"horizontal":"vertical";const H=(A+1)/B;let K=1,L=1;U==="horizontal"?K=H:L=H,M.querySelectorAll(Xr(_.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${K}) scaleY(${L})`,F.style.transitionDuration=`${e.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(Ca(M,_.renderCustom(e,A+1,B)),T===0&&r("paginationRender",M)):(T===0&&r("paginationRender",M),r("paginationUpdate",M)),e.params.watchOverflow&&e.enabled&&M.classList[e.isLocked?"add":"remove"](_.lockClass)})}function p(){const x=e.params.pagination;if(l())return;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let y=e.pagination.el;y=yt(y);let A="";if(x.type==="bullets"){let R=e.params.loop?Math.ceil(_/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&R>_&&(R=_);for(let C=0;C<R;C+=1)x.renderBullet?A+=x.renderBullet.call(e,C,x.bulletClass):A+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(x.renderFraction?A=x.renderFraction.call(e,x.currentClass,x.totalClass):A=`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(x.renderProgressbar?A=x.renderProgressbar.call(e,x.progressbarFillClass):A=`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],y.forEach(R=>{x.type!=="custom"&&Ca(R,A||""),x.type==="bullets"&&e.pagination.bullets.push(...R.querySelectorAll(Xr(x.bulletClass)))}),x.type!=="custom"&&r("paginationRender",y[0])}function g(){e.params.pagination=op(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const x=e.params.pagination;if(!x.el)return;let _;typeof x.el=="string"&&e.isElement&&(_=e.el.querySelector(x.el)),!_&&typeof x.el=="string"&&(_=[...document.querySelectorAll(x.el)]),_||(_=x.el),!(!_||_.length===0)&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...e.el.querySelectorAll(x.el)],_.length>1&&(_=_.find(y=>Kh(y,".swiper")[0]===e.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(e.pagination,{el:_}),_=yt(_),_.forEach(y=>{x.type==="bullets"&&x.clickable&&y.classList.add(...(x.clickableClass||"").split(" ")),y.classList.add(x.modifierClass+x.type),y.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(y.classList.add(`${x.modifierClass}${x.type}-dynamic`),a=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&y.classList.add(x.progressbarOppositeClass),x.clickable&&y.addEventListener("click",f),e.enabled||y.classList.add(x.lockClass)}))}function v(){const x=e.params.pagination;if(l())return;let _=e.pagination.el;_&&(_=yt(_),_.forEach(y=>{y.classList.remove(x.hiddenClass),y.classList.remove(x.modifierClass+x.type),y.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(y.classList.remove(...(x.clickableClass||"").split(" ")),y.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(y=>y.classList.remove(...x.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const x=e.params.pagination;let{el:_}=e.pagination;_=yt(_),_.forEach(y=>{y.classList.remove(x.horizontalClass,x.verticalClass),y.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?h():(g(),p(),d())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),i("snapIndexChange",()=>{d()}),i("snapGridLengthChange",()=>{p(),d()}),i("destroy",()=>{v()}),i("enable disable",()=>{let{el:x}=e.pagination;x&&(x=yt(x),x.forEach(_=>_.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{d()}),i("click",(x,_)=>{const y=_.target,A=yt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&A&&A.length>0&&!y.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&y===e.navigation.nextEl||e.navigation.prevEl&&y===e.navigation.prevEl))return;const R=A[0].classList.contains(e.params.pagination.hiddenClass);r(R===!0?"paginationShow":"paginationHide"),A.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=yt(x),x.forEach(_=>_.classList.remove(e.params.pagination.paginationDisabledClass))),g(),p(),d()},h=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=yt(x),x.forEach(_=>_.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:m,disable:h,render:p,update:d,init:g,destroy:v})}const Fb={class:"min-h-screen bg-black text-white py-20 px-4 font-futuristic"},Bb={class:"max-w-5xl mx-auto"},zb={class:"relative w-full h-[70vh] rounded-lg overflow-hidden shadow-lg"},Gb=["src"],Hb={key:1,class:"relative w-full h-full"},Vb=["src"],kb={class:"absolute top-2 right-4 bg-black/60 text-[#00ff88] text-sm px-3 py-1 rounded z-20"},Wb={class:"absolute bottom-0 bg-black/70 w-full p-4 z-10"},Xb={class:"text-2xl font-bold"},qb={class:"text-sm"},$b={class:"main-pagination mt-8 flex justify-center gap-4"},jb={__name:"Portfolio",setup(n){const e=[{title:"Port de Plaisance Russell",description:"API Rest/CRUD Catways, Réservations et utilisateurs",video:"/CAPITAINERIEbackfront/demo.mov"},{title:"Stubborn Shop",description:"PHP/Symfony/Stripe - Site e-commerce de sweats",images:["/STUBBORN/1.png","/STUBBORN/2.png","/STUBBORN/3.png","/STUBBORN/4.png","/STUBBORN/5.png","/STUBBORN/6.png","/STUBBORN/7.png","/STUBBORN/8.png"]},{title:"La Vie des Plantes",description:"WordPress/WooCommerce - Vente de kits de graines",images:["/PLANTES/About1.png","/PLANTES/About2.png","/PLANTES/contact1.png","/PLANTES/contact2.png","/PLANTES/Home1.png","/PLANTES/Home2.png","/PLANTES/Home3.png","/PLANTES/Panier1.png","/PLANTES/Panier2.png","/PLANTES/Shop.png"]}],t=at([]),i=at(e.map(()=>0)),r=at(0);let s=null;const o=l=>{s=l},a=()=>{s&&(r.value=s.realIndex)};return(l,c)=>(Vt(),Zt("section",Fb,[Ze("div",Bb,[dt(ln(Xf),{modules:[ln(Nb)],"slides-per-view":1,navigation:"",class:"mySwiper",onSlideChange:a,onSwiper:o},{default:qr(()=>[(Vt(),Zt(Qt,null,ia(e,(u,f)=>dt(ln(qf),{key:f},{default:qr(()=>[Ze("div",zb,[u.video?(Vt(),Zt("video",{key:0,src:u.video,autoplay:"",muted:"",loop:"",playsinline:"",class:"w-full h-full object-contain"},null,8,Gb)):(Vt(),Zt("div",Hb,[dt(ln(Xf),{modules:[ln(Ob)],pagination:!1,class:"h-full",onSwiper:d=>t.value[f]=d,onSlideChange:()=>{var d;return i.value[f]=((d=t.value[f])==null?void 0:d.realIndex)||0}},{default:qr(()=>[(Vt(!0),Zt(Qt,null,ia(u.images,(d,p)=>(Vt(),Wm(ln(qf),{key:p},{default:qr(()=>[Ze("img",{src:d,class:"w-full h-full object-cover"},null,8,Vb)]),_:2},1024))),128))]),_:2},1032,["modules","onSwiper","onSlideChange"]),Ze("div",kb,Ii(i.value[f]+1)+" / "+Ii(u.images.length),1)])),Ze("div",Wb,[Ze("h3",Xb,Ii(u.title),1),Ze("p",qb,Ii(u.description),1)])])]),_:2},1024)),64))]),_:1},8,["modules"]),Ze("div",$b,[(Vt(!0),Zt(Qt,null,ia(e.length,(u,f)=>(Vt(),Zt("span",{key:f,class:hs(["w-4 h-4 rounded-full transition duration-300",{"bg-[#ffffff] shadow-lg shadow-[#00ff88]/50":f===r.value,"bg-white/20":f!==r.value}])},null,2))),128))])])]))}},Yb=Ql(jb,[["__scopeId","data-v-50d1738e"]]),Kb=[{path:"/",name:"Home",component:rM},{path:"/contact",name:"Conatct",component:cM},{path:"/portfolio",name:"portfolio",component:Yb}],Zb=I_({history:o_(),routes:Kb});Cg(tM).use(Zb).mount("#app");
