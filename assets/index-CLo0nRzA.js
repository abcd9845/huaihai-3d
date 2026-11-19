(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,te=1033,M=33776,N=33777,P=33778,ne=33779,F=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,I=37496,L=37488,ce=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,R=2300,Me=2301,Ne=2302,Pe=2303,z=2400,Fe=2401,B=2402,V=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in qe||(qe[t]=!0,H(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*nt}function vt(e){return e*rt}function yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Tt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Et={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:W,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:Tt,denormalize:wt},G=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new K,kt=new Dt,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new q,jt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var J=Nt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=Ge(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new K,Ut=class e extends $e{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=it(),this.name=``,this.source=new zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ut({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Yt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xt.set(r[0],r[1],r[2]).length(),o=Xt.set(r[4],r[5],r[6]).length(),s=Xt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zt.copy(this);let c=1/a,l=1/o,u=1/s;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xt=new K,Zt=new Yt,Qt=new K(0,0,0),$t=new K(1,1,1),en=new K,tn=new K,nn=new K,rn=new Yt,an=new Dt,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},cn=0,ln=new K,un=new Dt,dn=new Yt,fn=new K,pn=new K,mn=new K,hn=new Dt,gn=new K(1,0,0),_n=new K(0,1,0),vn=new K(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new on,r=new Dt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new q}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Cn.DEFAULT_UP=new K(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=at(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=Dn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return J.workingToColorSpace(jn.copy(this),e),Math.round(W(jn.r*255,0,255))*65536+Math.round(W(jn.g*255,0,255))*256+Math.round(W(jn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Ie){J.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=ct(On.h,kn.h,t),r=ct(On.s,kn.s,t),i=ct(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new Y;Y.NAMES=Dn;var Mn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new K,Pn=new K,Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new Wt,Wn=new Wt,Gn=new Wt,Kn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Nn.subVectors(r,t),Pn.subVectors(n,t),Fn.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(Pn),s=Nn.dot(Fn),c=Pn.dot(Pn),l=Pn.dot(Fn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)!==null&&In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,In)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,In.x),s.addScaledVector(a,In.y),s.addScaledVector(o,In.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Un.setScalar(0),Wn.setScalar(0),Gn.setScalar(0),Un.fromBufferAttribute(e,t),Wn.fromBufferAttribute(e,n),Gn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Un,i.x),a.addScaledVector(Wn,i.y),a.addScaledVector(Gn,i.z),a}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),Pn.subVectors(e,t),Nn.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),Nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ln.subVectors(r,n),Rn.subVectors(i,n),Bn.subVectors(e,n);let s=Ln.dot(Bn),c=Rn.dot(Bn);if(s<=0&&c<=0)return t.copy(n);Vn.subVectors(e,r);let l=Ln.dot(Vn),u=Rn.dot(Vn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Ln,a);Hn.subVectors(e,i);let f=Ln.dot(Hn),p=Rn.dot(Hn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ln,a).addScaledVector(Rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Yn):Yn.fromBufferAttribute(r,t),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox)),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),ir.subVectors(this.max,rr),Zn.subVectors(e.a,rr),Qn.subVectors(e.b,rr),$n.subVectors(e.c,rr),er.subVectors(Qn,Zn),tr.subVectors($n,Qn),nr.subVectors(Zn,$n);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-nr.z,nr.y,er.z,0,-er.x,tr.z,0,-tr.x,nr.z,0,-nr.x,-er.y,er.x,0,-tr.y,tr.x,0,-nr.y,nr.x,0];return!sr(t,Zn,Qn,$n,ir)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,Zn,Qn,$n,ir))?!1:(ar.crossVectors(er,tr),t=[ar.x,ar.y,ar.z],sr(t,Zn,Qn,$n,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new K,new K,new K,new K,new K,new K,new K,new K],Yn=new K,Xn=new qn,Zn=new K,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K;function sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){or.fromArray(e,a);let o=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),s=t.dot(or),c=n.dot(or),l=r.dot(or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var cr=new K,lr=new G,ur=0,dr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ur++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=_,this.version=0,this._normalizationScale=e===void 0?void 0:Ct(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix4(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyNormalMatrix(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.transformDirection(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.array):Math.round(e*t)}},fr=class extends dr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},pr=class extends dr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},mr=class extends dr{constructor(e,t,n){super(new Float32Array(e),t,n)}},hr=new qn,gr=new K,_r=new K,vr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?hr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(gr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(_r)),this.expandByPoint(gr.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yr=0,br=new Yt,xr=new Cn,Sr=new K,Cr=new qn,wr=new qn,Tr=new K,Er=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?pr:fr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return br.makeRotationFromQuaternion(e),this.applyMatrix4(br),this}rotateX(e){return br.makeRotationX(e),this.applyMatrix4(br),this}rotateY(e){return br.makeRotationY(e),this.applyMatrix4(br),this}rotateZ(e){return br.makeRotationZ(e),this.applyMatrix4(br),this}translate(e,t,n){return br.makeTranslation(e,t,n),this.applyMatrix4(br),this}scale(e,t,n){return br.makeScale(e,t,n),this.applyMatrix4(br),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new mr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(this.boundingBox.min,Cr.min),this.boundingBox.expandByPoint(Tr),Tr.addVectors(this.boundingBox.max,Cr.max),this.boundingBox.expandByPoint(Tr)):(this.boundingBox.expandByPoint(Cr.min),this.boundingBox.expandByPoint(Cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(Cr.min,wr.min),Cr.expandByPoint(Tr),Tr.addVectors(Cr.max,wr.max),Cr.expandByPoint(Tr)):(Cr.expandByPoint(wr.min),Cr.expandByPoint(wr.max))}Cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Tr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Tr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Tr.fromBufferAttribute(a,t),o&&(Sr.fromBufferAttribute(e,t),Tr.add(Sr)),r=Math.max(r,n.distanceToSquared(Tr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new dr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new dr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tr.fromBufferAttribute(e,t),Tr.normalize(),e.setXYZ(t,Tr.x,Tr.y,Tr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new dr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=new K,Or=new K,kr=new q,Ar=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Dr.subVectors(n,t).cross(Or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Dr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kr.getNormalMatrix(e),r=this.coplanarPoint(Dr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jr=0,Mr=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ar().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=new K,Pr=new K,Fr=new K,Ir=new K,Lr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pr.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Pr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Ir.dot(this.direction),s=-Ir.dot(Fr),c=Ir.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pr).addScaledVector(Fr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Nr.subVectors(e.center,this.origin);let n=Nr.dot(this.direction),r=Nr.dot(Nr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,F=E-N*D,re=O-M*A,ie=k-N*A,ae=j-M*te,oe=ee-N*te,se=ae*ie-oe*re,I=ne*oe-F*ae,L=re*F-ie*ne;if(r){if(se<0||I<0||L<0)return null}else if((se<0||I<0||L<0)&&(se>0||I>0||L>0))return null;let ce=se+I+L;if(ce===0)return null;let le=P*(se*D+I*A+L*te);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rr=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zr=new Yt,Br=new Lr,Vr=new vr,Hr=new K,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,X=class extends Cn{constructor(e=new Er,t=new Rr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Kr.fromBufferAttribute(s,e),a?qr.addScaledVector(Kr,r):qr.addScaledVector(Kr.sub(t),r))}t.add(qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Br.copy(e.ray).recast(e.near),Vr.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Vr,Hr)===null||Br.origin.distanceToSquared(Hr)>(e.far-e.near)**2)||(zr.copy(i).invert(),Br.copy(e.ray).applyMatrix4(zr),(n.boundingBox===null||Br.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Zr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Zr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Zr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Zr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Xr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Yr.copy(s),Yr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Yr);return l<n.near||l>n.far?null:{distance:l,point:Yr.clone(),object:e}}function Zr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ur),e.getVertexPosition(c,Wr),e.getVertexPosition(l,Gr);let u=Xr(e,t,n,r,Ur,Wr,Gr,Jr);if(u){let e=new K;Kn.getBarycoord(Jr,Ur,Wr,Gr,e),i&&(u.uv=Kn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Kn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Kn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Kn.getNormal(Ur,Wr,Gr,t.normal),u.face=t,u.barycoord=e}return u}var Qr=class extends Ut{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$r=new vr,ei=new G(.5,.5),ti=new K,ni=class{constructor(e=new Ar,t=new Ar,n=new Ar,r=new Ar,i=new Ar,a=new Ar){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476+ei.distanceTo(e.center),$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ti.x=r.normal.x>0?e.max.x:e.min.x,ti.y=r.normal.y>0?e.max.y:e.min.y,ti.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ti)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ri=new Yt,ii=class e{constructor(){this.coordinateSystem=He,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ri.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ni),n[e].setFromProjectionMatrix(ri,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ni),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ai=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oi=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class extends Ut{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ci=class extends si{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},li=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ui=class e extends Er{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new mr(c,3)),this.setAttribute(`normal`,new mr(l,3)),this.setAttribute(`uv`,new mr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},di=class e extends Er{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new mr(a,3)),this.setAttribute(`normal`,new mr(o,3)),this.setAttribute(`uv`,new mr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fi=class e extends Er{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new mr(u,3)),this.setAttribute(`normal`,new mr(d,3)),this.setAttribute(`uv`,new mr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new Yt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},mi=class extends pi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hi=class extends mi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function gi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var _i=new K,vi=new K,yi=new gi,bi=new gi,xi=new gi,Si=class extends pi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(vi.subVectors(r[0],r[1]).add(r[0]),c=vi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(_i.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=_i),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),yi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),bi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),xi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(yi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),bi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),xi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(yi.calc(s),bi.calc(s),xi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ci(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function wi(e,t){let n=1-e;return n*n*t}function Ti(e,t){return 2*(1-e)*e*t}function Ei(e,t){return e*e*t}function Di(e,t,n,r){return wi(e,t)+Ti(e,n)+Ei(e,r)}function Oi(e,t){let n=1-e;return n*n*n*t}function ki(e,t){let n=1-e;return 3*n*n*e*t}function Ai(e,t){return 3*(1-e)*e*e*t}function ji(e,t){return e*e*e*t}function Mi(e,t,n,r,i){return Oi(e,t)+ki(e,n)+Ai(e,r)+ji(e,i)}var Ni=class extends pi{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Mi(e,r.x,i.x,a.x,o.x),Mi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pi=class extends pi{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Mi(e,r.x,i.x,a.x,o.x),Mi(e,r.y,i.y,a.y,o.y),Mi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fi=class extends pi{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ii=class extends pi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Li=class extends pi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Di(e,r.x,i.x,a.x),Di(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ri=class extends pi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Di(e,r.x,i.x,a.x),Di(e,r.y,i.y,a.y),Di(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zi=class extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ci(o,s.x,c.x,l.x,u.x),Ci(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Bi=Object.freeze({__proto__:null,ArcCurve:hi,CatmullRomCurve3:Si,CubicBezierCurve:Ni,CubicBezierCurve3:Pi,EllipseCurve:mi,LineCurve:Fi,LineCurve3:Ii,QuadraticBezierCurve:Li,QuadraticBezierCurve3:Ri,SplineCurve:zi}),Vi=class extends pi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Bi[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Bi[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Hi=class extends Vi{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fi(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Li(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ni(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new zi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new mi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ui=class extends Hi{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Hi().fromJSON(n))}return this}};function Wi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Gi(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Qi(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return qi(a,o,n,s,c,l,0),o}function Gi(e,t,n,r,i){let a;if(i===Sa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ya(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ya(i/r|0,e[i],e[i+1],a);return a&&da(a,a.next)&&(ba(a),a=a.next),a}function Ki(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(da(n,n.next)||ua(n.prev,n,n.next)===0)){if(ba(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function qi(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ra(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Yi(e,r,i,a):Ji(e))t.push(c.i,e.i,l.i),ba(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Xi(Ki(e),t),qi(e,t,n,r,i,a,2)):o===2&&Zi(e,t,n,r,i,a):qi(Ki(e),t,n,r,i,a,1);break}}}function Ji(e){let t=e.prev,n=e,r=e.next;if(ua(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ca(i,s,a,c,o,l,m.x,m.y)&&ua(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yi(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ua(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=aa(p,m,t,n,r),v=aa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ca(s,u,c,d,l,f,y.x,y.y)&&ua(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ca(s,u,c,d,l,f,b.x,b.y)&&ua(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ca(s,u,c,d,l,f,y.x,y.y)&&ua(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ca(s,u,c,d,l,f,b.x,b.y)&&ua(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Xi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!da(r,i)&&fa(r,n,n.next,i)&&ga(r,i)&&ga(i,r)&&(t.push(r.i,n.i,i.i),ba(n),ba(n.next),n=e=i),n=n.next}while(n!==e);return Ki(n)}function Zi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&la(o,e)){let s=va(o,e);o=Ki(o,o.next),s=Ki(s,s.next),qi(o,t,n,r,i,a,0),qi(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Qi(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Gi(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(oa(o))}i.sort($i);for(let e=0;e<i.length;e++)n=ea(i[e],n);return n}function $i(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ea(e,t){let n=ta(e,t);if(!n)return t;let r=va(n,e);return Ki(r,r.next),Ki(n,n.next)}function ta(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(da(e,n))return n;do{if(da(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&sa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ga(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&na(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function na(e,t){return ua(e.prev,e,t.prev)<0&&ua(t.next,e,e.next)<0}function ra(e,t,n,r){let i=e;do i.z===0&&(i.z=aa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ia(i)}function ia(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function aa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function oa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function sa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ca(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&sa(e,t,n,r,i,a,o,s)}function la(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ha(e,t)&&(ga(e,t)&&ga(t,e)&&_a(e,t)&&(ua(e.prev,e,t.prev)||ua(e,t.prev,t))||da(e,t)&&ua(e.prev,e,e.next)>0&&ua(t.prev,t,t.next)>0)}function ua(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function da(e,t){return e.x===t.x&&e.y===t.y}function fa(e,t,n,r){let i=ma(ua(e,t,n)),a=ma(ua(e,t,r)),o=ma(ua(n,r,e)),s=ma(ua(n,r,t));return!!(i!==a&&o!==s||i===0&&pa(e,n,t)||a===0&&pa(e,r,t)||o===0&&pa(n,e,r)||s===0&&pa(n,t,r))}function pa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ma(e){return e>0?1:e<0?-1:0}function ha(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&fa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ga(e,t){return ua(e.prev,e,e.next)<0?ua(e,t,e.next)>=0&&ua(e,e.prev,t)>=0:ua(e,t,e.prev)<0||ua(e,e.next,t)<0}function _a(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function va(e,t){let n=xa(e.i,e.x,e.y),r=xa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ya(e,t,n,r){let i=xa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function xa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ca=class{static triangulate(e,t,n=2){return Wi(e,t,n)}},wa=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ta(e),Ea(n,e);let a=e.length;t.forEach(Ta);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ea(n,t[e]);let o=Ca.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ta(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ea(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Da=class e extends Er{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new mr(p,3)),this.setAttribute(`normal`,new mr(m,3)),this.setAttribute(`uv`,new mr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class e extends Er{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new mr(s,3)),this.setAttribute(`normal`,new mr(c,3)),this.setAttribute(`uv`,new mr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ka=class e extends Er{constructor(e=new Ui([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new mr(r,3)),this.setAttribute(`normal`,new mr(i,3)),this.setAttribute(`uv`,new mr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;wa.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];wa.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=wa.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Aa(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Aa(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function ja(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Na(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ma(e){let t={};for(let n=0;n<e.length;n++){let r=ja(e[n]);for(let e in r)t[e]=r[e]}return t}function Na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var Ia={clone:ja,merge:Ma},La=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ra=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,za=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=La,this.fragmentShader=Ra,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=Pa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ba=class extends za{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Va=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ha=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=V,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ga(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ka=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},qa=class extends Ka{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:z,endingEnd:z}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ja=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ya=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xa=class extends Ka{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=$a(n,t,g,y,r);i[p]=Za(x,o,_,b,m)}return i}};function Za(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Qa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function $a(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Za(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Qa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var eo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ga(e.settings)&&(n.settings={inTangents:Wa(e.settings.inTangents,Array),outTangents:Wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case R:t=this.InterpolantFactoryMethodDiscrete;break;case Me:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return R;case this.InterpolantFactoryMethodLinear:return Me;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ga(this.settings)&&(to(this.settings.inTangents,e),to(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ga(this.settings)&&(no(this.settings.inTangents,e),no(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ga(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function to(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function no(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}eo.prototype.ValueTypeName=``,eo.prototype.TimeBufferType=Float32Array,eo.prototype.ValueBufferType=Float32Array,eo.prototype.DefaultInterpolation=Me;var ro=class extends eo{constructor(e,t,n){super(e,t,n)}};ro.prototype.ValueTypeName=`bool`,ro.prototype.ValueBufferType=Array,ro.prototype.DefaultInterpolation=R,ro.prototype.InterpolantFactoryMethodLinear=void 0,ro.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName=`color`;var ao=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};ao.prototype.ValueTypeName=`number`;var oo=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},so=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName=`quaternion`,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends eo{constructor(e,t,n){super(e,t,n)}};co.prototype.ValueTypeName=`string`,co.prototype.ValueBufferType=Array,co.prototype.DefaultInterpolation=R,co.prototype.InterpolantFactoryMethodLinear=void 0,co.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};lo.prototype.ValueTypeName=`vector`;var uo=class extends Cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},po=new Yt,mo=new K,ho=new K,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ni,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new K,vo=new Dt,yo=new K,bo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xo=new K,So=new G,Co=new G,wo=class extends bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xo.x,xo.y).multiplyScalar(-e/xo.z),xo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xo.x,xo.y).multiplyScalar(-e/xo.z)}getViewSize(e,t){return this.getViewBounds(e,So,Co),t.subVectors(Co,So)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},To=class extends bo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eo=class extends go{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Eo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oo=-90,ko=1,Ao=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wo(Oo,ko,e,t);r.layers=this.layers,this.add(r);let i=new wo(Oo,ko,e,t);i.layers=this.layers,this.add(i);let a=new wo(Oo,ko,e,t);a.layers=this.layers,this.add(a);let o=new wo(Oo,ko,e,t);o.layers=this.layers,this.add(o);let s=new wo(Oo,ko,e,t);s.layers=this.layers,this.add(s);let c=new wo(Oo,ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jo=class extends wo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Mo=`\\[\\]\\.:\\/`,No=RegExp(`[\\[\\]\\.:\\/]`,`g`),Po=`[^\\[\\]\\.:\\/]`,Fo=`[^`+Mo.replace(`\\.`,``)+`]`,Io=`((?:WC+[\\/:])*)`.replace(`WC`,Po),Lo=`(WCOD+)?`.replace(`WCOD`,Fo),Ro=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Po),zo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Po),Bo=RegExp(`^`+Io+Lo+Ro+zo+`$`),Vo=[`material`,`materials`,`bones`,`map`],Ho=class{constructor(e,t,n){let r=n||Uo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Uo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(No,``)}static parseTrackName(e){let t=Bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Vo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Uo.Composite=Ho,Uo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Uo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Uo.prototype.GetterByBindingType=[Uo.prototype._getValue_direct,Uo.prototype._getValue_array,Uo.prototype._getValue_arrayElement,Uo.prototype._getValue_toArray],Uo.prototype.SetterByBindingTypeAndVersioning=[[Uo.prototype._setValue_direct,Uo.prototype._setValue_direct_setNeedsUpdate,Uo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_array,Uo.prototype._setValue_array_setNeedsUpdate,Uo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_arrayElement,Uo.prototype._setValue_arrayElement_setNeedsUpdate,Uo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_fromArray,Uo.prototype._setValue_fromArray_setNeedsUpdate,Uo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wo=new Yt,Go=class{constructor(e,t,n=0,r=1/0){this.ray=new Lr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(e,t=!0,n=[]){return qo(e,this,n,t),n.sort(Ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)qo(e[r],this,n,t);return n.sort(Ko),n}};function Ko(e,t){return e.distance-t.distance}function qo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)qo(r[e],t,n,!0)}}var Jo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=W(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(W(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Yo=class extends $e{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xo(e,t,n,r){let i=Zo(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case F:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case L:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zo(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Qo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $o(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},es={basic:{uniforms:Ma([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ma([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ma([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ma([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Ma([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Ma([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Ma([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ma([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ma([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ma([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Ma([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Ma([Q.common,Q.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Ma([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};es.physical={uniforms:Ma([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var ts={r:0,b:0,g:0},ns=new Yt,rs=new q;rs.set(-1,0,0,0,1,0,0,0,1);function is(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new X(new ui(1,1,1),new za({name:`BackgroundCubeMaterial`,uniforms:ja(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ns.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rs),l.material.toneMapped=J.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new X(new Da(2,2),new za({name:`BackgroundMaterial`,uniforms:ja(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ts,Fa(e)),n.buffers.color.setClear(ts.r,ts.g,ts.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function as(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function os(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ss(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function cs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ar,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ls=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ai(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ui(5,5,5),i=new za({name:`CubemapFromEquirect`,uniforms:ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new X(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},us=256,ds=3,fs=20,ps=256,ms=16,hs=3,gs=new K,_s=new Y,vs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new X(new ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=gs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(_s));let h=new Ao(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ts(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ws(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(us,xt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?us:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ys(e,!1,!1),n=Math.log2(e)-ds;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ys(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ts()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ws()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xs(),this._integrationMaterial=Ss());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/ms);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-hs)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ps*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function ys(e,t,n){return new ls(e,{minFilter:u,generateMipmaps:t,type:v,colorSpace:Le,depthBuffer:n})}function bs(e,t,n){return new za({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function xs(){return bs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ps}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ss(){return bs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ms}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cs(){return bs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fs}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ws(){return bs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ts(){return bs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Es(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ls(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new vs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new vs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ds(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Os(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?pr:fr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ks(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function As(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function js(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new qt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ms(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ns={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ps(e,t,n,r,i,a){let o=new Kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Er;u.setAttribute(`position`,new mr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new mr([0,2,0,0,2,0],2));let d=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new X(u,d),p=new To(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new Kt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new si(t,n),a===!0&&(l.format=O,l.type=x)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},J.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ns[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Fs=new Ut,Is=new si(1,1),Ls=new ci(1),Rs=new qt,zs=new Jt,Bs=new ai,Vs=[],Hs=[],Us=new Float32Array(16),Ws=new Float32Array(9),Gs=new Float32Array(4);function Ks(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vs[i];if(a===void 0&&(a=new Float32Array(i),Vs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Js(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ys(e,t){let n=Hs[t];n===void 0&&(n=new Int32Array(t),Hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2fv(this.addr,t),Js(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qs(n,t))return;e.uniform3fv(this.addr,t),Js(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4fv(this.addr,t),Js(n,t)}}function ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Gs.set(r),e.uniformMatrix2fv(this.addr,!1,Gs),Js(n,r)}}function tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Ws.set(r),e.uniformMatrix3fv(this.addr,!1,Ws),Js(n,r)}}function nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Us.set(r),e.uniformMatrix4fv(this.addr,!1,Us),Js(n,r)}}function rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2iv(this.addr,t),Js(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qs(n,t))return;e.uniform3iv(this.addr,t),Js(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4iv(this.addr,t),Js(n,t)}}function sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2uiv(this.addr,t),Js(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qs(n,t))return;e.uniform3uiv(this.addr,t),Js(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4uiv(this.addr,t),Js(n,t)}}function dc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?dc(Is):Fs,n.setTexture2D(t||a,i)}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zs,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?dc(Ls):Bs,n.setTextureCube(t||a,i)}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Rs,i)}function gc(e){switch(e){case 5126:return Xs;case 35664:return Zs;case 35665:return Qs;case 35666:return $s;case 35674:return ec;case 35675:return tc;case 35676:return nc;case 5124:case 35670:return rc;case 35667:case 35671:return ic;case 35668:case 35672:return ac;case 35669:case 35673:return oc;case 5125:return sc;case 36294:return cc;case 36295:return lc;case 36296:return uc;case 35678:case 36198:case 36298:case 36306:case 35682:return fc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return hc}}function _c(e,t){e.uniform1fv(this.addr,t)}function vc(e,t){let n=Ks(t,this.size,2);e.uniform2fv(this.addr,n)}function yc(e,t){let n=Ks(t,this.size,3);e.uniform3fv(this.addr,n)}function bc(e,t){let n=Ks(t,this.size,4);e.uniform4fv(this.addr,n)}function xc(e,t){let n=Ks(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Sc(e,t){let n=Ks(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cc(e,t){let n=Ks(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wc(e,t){e.uniform1iv(this.addr,t)}function Tc(e,t){e.uniform2iv(this.addr,t)}function Ec(e,t){e.uniform3iv(this.addr,t)}function Dc(e,t){e.uniform4iv(this.addr,t)}function Oc(e,t){e.uniform1uiv(this.addr,t)}function kc(e,t){e.uniform2uiv(this.addr,t)}function Ac(e,t){e.uniform3uiv(this.addr,t)}function jc(e,t){e.uniform4uiv(this.addr,t)}function Mc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dc(Is):Fs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Nc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zs,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?dc(Ls):Bs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Fc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Rs,a[e])}function Ic(e){switch(e){case 5126:return _c;case 35664:return vc;case 35665:return yc;case 35666:return bc;case 35674:return xc;case 35675:return Sc;case 35676:return Cc;case 5124:case 35670:return wc;case 35667:case 35671:return Tc;case 35668:case 35672:return Ec;case 35669:case 35673:return Dc;case 5125:return Oc;case 36294:return kc;case 36295:return Ac;case 36296:return jc;case 35678:case 36198:case 36298:case 36306:case 35682:return Mc;case 35679:case 36299:case 36307:return Nc;case 35680:case 36300:case 36308:case 36293:return Pc;case 36289:case 36303:case 36311:case 36292:return Fc}}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gc(t.type)}},Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ic(t.type)}},zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function Vc(e,t){e.seq.push(t),e.map[t.id]=t}function Hc(e,t,n){let r=e.name,i=r.length;for(Bc.lastIndex=0;;){let a=Bc.exec(r),o=Bc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vc(n,l===void 0?new Lc(s,e,t):new Rc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new zc(s),Vc(n,e)),n=e}}}var Uc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Wc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Gc=37297,Kc=0;function qc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Jc=new q;function Yc(e){J._getMatrix(Jc,J.workingColorSpace,e);let t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+qc(e.getShaderSource(t),r)}return i}function Zc(e,t){let n=Yc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Qc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $c(e,t){let n=Qc[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var el=new K;function tl(){return J.getLuminanceCoefficients(el),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${el.x.toFixed(4)}, ${el.y.toFixed(4)}, ${el.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function nl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(al).join(`
`)}function rl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function il(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function al(e){return e!==``}function ol(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cl=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(e){return e.replace(cl,ul)}function ul(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ll(n)}var dl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(e){return e.replace(dl,pl)}function pl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ml(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gl(e){return hl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _l={302:`ENVMAP_MODE_REFRACTION`};function vl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_l[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yl[e.combine]||`ENVMAP_BLENDING_NONE`}function xl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=vl(n),d=bl(n),f=nl(n),p=rl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(al).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(al).join(`
`),g.length>0&&(g+=`
`)):(h=[ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(al).join(`
`),g=[ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:$c(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Zc(`linearToOutputTexel`,n.outputColorSpace),tl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(al).join(`
`)),o=ll(o),o=ol(o,n),o=sl(o,n),s=ll(s),s=ol(s,n),s=sl(s,n),o=fl(o),s=fl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Wc(i,i.VERTEX_SHADER,v),x=Wc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Xc(i,b,`vertex`),n=Xc(i,x,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Uc(i,m),w=il(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Gc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Sl=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wl(e),t.set(e,n)),n}},wl=class{constructor(e){this.id=Sl++,this.code=e,this.usedTimes=0}};function Tl(e){return e===1030||e===37490||e===36285}function El(e,t,n,r,i,a){let o=new sn,s=new Cl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=es[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,N=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,F=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,L=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,ye=le&&!!i.clearcoatRoughnessMap,be=ue&&!!i.diffuseRoughnessMap,xe=pe&&!!i.iridescenceMap,Se=pe&&!!i.iridescenceThicknessMap,Ce=me&&!!i.sheenColorMap,we=me&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=he&&!!i.transmissionMap,ke=he&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,R=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let z=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:N,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?z.length-1:null,envMapSize:ne?z[0].width:null,aoMap:F,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Tl(i.normalMap.format),metalnessMap:I,roughnessMap:L,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:ue,diffuseRoughnessMap:be,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:he,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:R,alphaHash:Me,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:F&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:se&&p(i.emissiveMap.channel),metalnessMapUv:I&&p(i.metalnessMap.channel),roughnessMapUv:L&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:Te&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:De&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=es[t];n=Ia.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new xl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Dl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ol(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Al(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ol),r.length>1&&r.sort(t||kl),i.length>1&&i.sort(t||kl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function jl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Al,e.set(t,[i])):n>=r.length?(i=new Al,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Y};break;case`SpotLight`:n={position:new K,direction:new K,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pl=0;function Fl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Il(e){let t=new Ml,n=Nl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Yt,o=new Yt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ll(e){let t=new Il(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Rl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ll(e),t.set(n,[a])):r>=i.length?(a=new Ll(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var zl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vl=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Hl=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Ul=new Yt,Wl=new K,Gl=new K;function Kl(e,t,n){let r=new ni,i=new G,o=new G,s=new Wt,l=new Ha,u=new Ua,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:zl,fragmentShader:Bl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Er;y.setAttribute(`position`,new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new X(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Kt(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new si(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new ls(i.x),p.map.depthTexture=new ci(i.x,g)):(p.map=new Kt(i.x,i.y),p.map.depthTexture=new si(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Wl),Gl.copy(e.position),Gl.add(Vl[t]),e.up.copy(Hl[t]),e.lookAt(Gl),e.updateMatrixWorld(),n.makeTranslation(-Wl.x,-Wl.y,-Wl.z),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Ul,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Kt(i.x,i.y,{format:j,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ql(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,ne={},F=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Wt().fromArray(F),ae=new Wt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),I(e.CULL_FACE),pe(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(L(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(te&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ye(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function R(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function z(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function B(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:L,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:R,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:B,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:z,reset:V}}function Jl(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Ge(`canvas`)}function D(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Re:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){re(e.target)}function F(e){ie(e.target)}function re(e){e.removeEventListener(`dispose`,ne),P(e),oe(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ie(e){e.removeEventListener(`dispose`,F),P(e),I(e)}function ae(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ie(t):re(t))}C.clear(),b.clear()}function oe(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&se(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function se(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function I(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&re(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let L=0;function ce(){L=0}function le(){return L}function ue(e){L=e}function de(){let e=L;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),L+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(t,n){let r=f.get(t);if(t.isVideoTexture&&Fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?we(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function he(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?we(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?Te(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let _e={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ve={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne),N(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=fe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=Se(r.start,n.width,4),c=Se(t.start,n.width,4);r.start<=i+1&&s===c&&Se(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function we(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=xe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=n.colorSpace===``?null:J.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=D(n.image,!1,p.maxTextureSize);t=B(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=ee(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);be(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=te(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Ce(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Xo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Xo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=V(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=V(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Te(t,n,r){if(n.image.length!==6)return;let i=xe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=J.getPrimaries(J.workingColorSpace),s=n.colorSpace===``?null:J.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=B(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=ee(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);be(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=te(n.format===O,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=V(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ee(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=ee(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=ee(a.internalFormat,o,s,a.normalized,a.colorSpace);z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?ge(n.depthTexture,0):pe(n.depthTexture,0);let s=a.__webglTexture,c=Pe(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Oe(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Oe(n.__webglFramebuffer[0],t,0):Oe(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),De(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),De(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){let i=f.get(t);n!==void 0&&Ee(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&ke(t)}function je(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,F),N(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&z(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=ee(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),De(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),be(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Ee(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Ee(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),be(s,i),Ee(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),be(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Ee(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Ee(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&ke(t)}function R(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Me=[];function Ne(t){if(t.samples>0){if(z(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Me.length=0,Me.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Me.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function z(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function B(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=z,this.dispose=ae}function Yl(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new li(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new za({vertexShader:Xl,fragmentShader:Zl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Ql,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new G,k=null,A=null,j=new wo;j.viewport=new Wt;let ee=new wo;ee.viewport=new Wt;let te=[j,ee],M=new jo,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function ne(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,re),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new si(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=ee.near=j.near=t,M.far=ee.far=j.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,j.layers.mask=M.layers.mask&-5,ee.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ie(M,i);for(let e=0;e<a.length;e++)ie(a[e],i);M.projectionMatrix.copy(j.projectionMatrix),M.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,M,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new wo,o.layers.enable(n),o.viewport=new Wt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new li,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let I=new Qo;I.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},eu=new Yt,tu=new q;tu.set(-1,0,0,0,1,0,0,0,1);function nu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(eu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(tu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ru(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var iu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),au=null;function ou(){return au===null&&(au=new Qr(iu,16,16,j,v),au.name=`DFG_LUT`,au.minFilter=c,au.magFilter=c,au.wrapS=r,au.wrapT=r,au.generateMipmaps=!1,au.needsUpdate=!0),au}var su=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([te,ee,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,j=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,F=null,re=null,ie=null,ae=null;this._outputColorSpace=Ie;let oe=0,se=0,I=null,L=-1,ce=null,le=new Wt,ue=new Wt,de=null,fe=new Y(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Wt(0,0,me,he),be=new Wt(0,0,me,he),xe=!1,Se=new ni,Ce=new ii,we=!1,Te=!1,Ee=new Yt,De=new K,Oe=new Wt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?ge:1}let R=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,z,Fe,B,V,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),R===null){let t=`webgl2`;if(R=Me(t,e),R===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),U(`WebGLRenderer: `+e.message),e}function it(){Ne=new Ds(R),Ne.init(),tt=new Yl(R,Ne),Pe=new ss(R,Ne,e,tt),z=new ql(R,Ne),Pe.reversedDepthBuffer&&p&&z.buffers.depth.setReversed(!0),re=R.createFramebuffer(),ie=R.createFramebuffer(),ae=R.createFramebuffer(),Fe=new As(R),B=new Dl,V=new Jl(R,Ne,z,B,Pe,tt,Fe),Le=new Es(P),Re=new $o(R),nt=new as(R,Re),ze=new Os(R,Re,Fe,nt),Be=new Ms(R,ze,Re,nt,Fe),Qe=new js(R,Pe,V),qe=new cs(B),Ve=new El(P,Le,Ne,Pe,nt,qe),Ue=new nu(P,B),We=new jl,Ge=new Rl(Ne),Xe=new is(P,Le,z,Be,_,s),Ye=new Kl(P,Be,Pe),rt=new ru(R,Fe,Pe,z),$e=new os(R,Ne,Fe),et=new ks(R,Ne,Fe),Fe.programs=Ve.programs,P.capabilities=Pe,P.extensions=Ne,P.properties=B,P.renderLists=We,P.shadowMap=Ye,P.state=z,P.info=Fe}S!==1009&&(N=new Ps(S,t.width,t.height,o,r,i));let W=new $l(P,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){W.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(le.copy(ye).multiplyScalar(je()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(ue.copy(be).multiplyScalar(je()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),We.dispose(),Ge.dispose(),V.dispose(),B.dispose(),Le.dispose(),Be.dispose(),ze.dispose(),nt.dispose(),rt.dispose(),Ve.dispose(),W.dispose(),W.removeEventListener(`sessionstart`,mt),W.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),ne=!0}function ot(){Je(`WebGLRenderer: Context Restored.`),ne=!1;let e=Fe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;it(),Fe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),B.remove(e)}function ut(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=G(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*je()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*je()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),we===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),k=Ge.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),F!==null&&F.updateLights(k.state.lightsArray),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),we===!0&&qe.setGlobalState(this.clippingPlanes,t),F!==null&&Ye.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),k=M.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Qo;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,W.setAnimationLoop(e),e===null?gt.stop():gt.start()},W.addEventListener(`sessionstart`,mt),W.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;F!==null&&F.renderStart(e,t);let n=W.enabled===!0&&W.isPresenting===!0,r=N!==null&&(I===null||n)&&N.begin(P,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(t),t=W.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,I),k=Ge.get(e,M.length),k.init(t),k.state.textureUnits=V.getTextureUnits(),M.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(Ee,He,t.reversedDepth),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),O=We.get(e,j.length),O.init(),j.push(O),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,P.sortObjects)}_t(e,t,0,P.sortObjects),O.finish(),F!==null&&F.updateLights(k.state.lightsArray),P.sortObjects===!0&&O.sort(_e,ve),Ae=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ae&&Xe.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Ye.render(i,e,t),we===!0&&qe.endShadows(),(r&&N.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ae&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(O,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ae&&Xe.render(e),vt(O,e,t)}I!==null&&se===0&&(V.updateMultisampleRenderTarget(I),V.updateRenderTargetMipmap(I)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),nt.resetDefaultState(),L=-1,ce=null,M.pop(),M.length>0?(k=M[M.length-1],V.setTextureUnits(k.state.textureUnits),we===!0&&qe.setGlobalState(P.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,F!==null&&F.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Be.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&qe.setGlobalState(P.clippingPlanes,n),r&&z.viewport(le.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(fe),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Xe.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&qe.setGlobalState(P.clippingPlanes,r),bt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}P.setRenderTarget(s,c,l),P.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),P.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=ke);let r=B.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ve.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,P),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Et(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Uc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function G(e,t,n,r,i){t.isScene!==!0&&(t=ke),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==ce)){let t=e===ce&&r.id===L;qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?wt(r,t,i,s,h):Ct(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==L&&(L=r.id,w=!0),C||ce!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,V),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,V),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=ou()),w){if(E.setValue(R,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Dt(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,ge,he,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Uc.upload(R,Tt(v),O,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Uc.upload(R,Tt(v),O,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,S),rt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(le),z.scissor(ue),z.setScissorTest(de),L=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=re),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(le),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}L=-1};function kt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ze(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,ie),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,z.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}},cu={lonMin:114.8,lonMax:119.8,latMin:32.2,latMax:35.3,step:.0125,nx:401,ny:249,min:-78,max:501},lu={lonMin:cu.lonMin,lonMax:cu.lonMax,latMin:cu.latMin,latMax:cu.latMax},uu=117,du=33.75,fu=9.24,pu=11.1,mu=.002,hu=(lu.lonMax-lu.lonMin)*fu,gu=(lu.latMax-lu.latMin)*pu;function _u(e,t){return new G((e-uu)*fu,-(t-du)*pu)}function vu(e,t){return[e/fu+uu,-t/pu+du]}var yu={LON0:uu,LAT0:du,KX:fu,KZ:pu},bu=null,{nx:xu,ny:Su,step:Cu}=cu;async function wu(e){try{let t=await fetch(e);if(!t.ok)throw Error(t.status);bu=new Int16Array(await t.arrayBuffer()),bu.length!==xu*Su&&(bu=null)}catch(e){console.warn(`高程数据加载失败，使用平地`,e),bu=null}return!!bu}function Tu(e,t){if(!bu)return 30;let n=(e-lu.lonMin)/Cu,r=(lu.latMax-t)/Cu;if(n<0||r<0||n>xu-1||r>Su-1)return null;let i=Math.min(xu-2,Math.floor(n)),a=Math.min(Su-2,Math.floor(r)),o=n-i,s=r-a,c=a*xu+i;return bu[c]*(1-o)*(1-s)+bu[c+1]*o*(1-s)+bu[c+xu]*(1-o)*s+bu[c+xu+1]*o*s}var Eu=null;function Du(e){Eu=e}function Ou(e,t){let[n,r]=vu(e,t),i=Tu(n,r);i===null&&(i=0);let a=i>0?i*mu:Math.max(i,-40)*.003;return Eu&&(a-=Eu(e,t)*.05),a}function ku(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Er;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Au(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Au(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Au(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new dr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function ju(e,{closed:t=!1,step:n=.08,tension:r=.5}={}){let i=new Si(e.map(e=>new K(e.x,0,e.y)),t,`catmullrom`,r),a=Math.max(8,Math.ceil(i.getLength()/n));return i.getSpacedPoints(a).map(e=>new G(e.x,e.z))}function Mu(e,t,n,r,i=160){let a=[];for(let o=0;o<=i;o++){let s=-Math.PI/2+o/i*Math.PI*2;a.push(new G(e+Math.cos(s)*n,t+Math.sin(s)*r))}return a}function Nu(e,t,{lift:n=.04,breaks:r=[]}={}){let i=[0];for(let t=1;t<e.length;t++)i.push(i[t-1]+e[t].distanceTo(e[t-1]));let a=i[i.length-1],o=[];for(let n=0;n<e.length;n++){let s=i[n]/a;for(let c of r){let r=n>0?i[n-1]/a:0;if(n>0&&r<c&&s>=c){let i=(c-r)/(s-r),l=e[n-1].clone().lerp(e[n],i);o.push({p:l,i:n-1+i,t:c,s:c*a,w:t(c-1e-4)}),o.push({p:l,i:n-1+i,t:c,s:c*a,w:t(c+1e-4)})}}o.push({p:e[n],i:n,t:s,s:i[n],w:t(s)})}let s=[],c=[],l=[],u=new G,d=new G;o.forEach((t,r)=>{let i=Math.min(e.length-1,Math.max(0,Math.round(t.i))),a=e[Math.max(0,i-1)],o=e[Math.min(e.length-1,i+1)];u.subVectors(o,a).normalize(),d.set(-u.y,u.x);for(let e of[-1,1]){let r=t.p.x+d.x*t.w*.5*e,i=t.p.y+d.y*t.w*.5*e;s.push(r,Ou(r,i)+n,i),c.push(t.s,e)}if(r>0){let e=(r-1)*2;l.push(e,e+2,e+1,e+1,e+2,e+3)}});let f=new Er;return f.setAttribute(`position`,new mr(s,3)),f.setAttribute(`uv`,new mr(c,2)),f.setIndex(l),f.userData.length=a,f}var Pu=Date.UTC(1948,10,6);function Fu(e){let t=Pu+Math.round(Math.max(0,Math.min(65,e)))*864e5,n=new Date(t);return`${n.getUTCFullYear()}年${n.getUTCMonth()+1}月${n.getUTCDate()}日`}var Iu=[0,.16,.32,.5,.68,.88,1],Lu=[0,0,0,16,39,65,65];function Ru(e){let t=Math.max(0,Math.min(1,e));for(let e=1;e<Iu.length;e++)if(t<=Iu[e]||e===Iu.length-1){let n=(t-Iu[e-1])/(Iu[e]-Iu[e-1]);return Lu[e-1]+(Lu[e]-Lu[e-1])*n}return 0}var zu=[{id:`xuzhou`,name:`徐州`,lon:117.18,lat:34.26,rank:0,fact:{title:`徐州`,sub:`战场中心`,body:[`陇海、津浦两条铁路在此交汇。`,`国民党军徐州“剿总”驻地，总司令刘峙，副总司令杜聿明。`]}},{id:`suxian`,name:`宿县`,lon:116.98,lat:33.64,rank:1,fact:{title:`宿县`,sub:`津浦铁路`,body:[`位于徐州以南的津浦铁路上（今安徽宿州）。`,`是徐州与蚌埠之间的交通要地。`]}},{id:`bengbu`,name:`蚌埠`,lon:117.38,lat:32.93,rank:1,fact:{title:`蚌埠`,sub:`津浦铁路南段`,body:[`津浦铁路南段重镇，紧靠淮河。`]}},{id:`shangqiu`,name:`商丘`,lon:115.65,lat:34.41,rank:1,fact:{title:`商丘`,sub:`陇海铁路西段`,body:[`位于徐州以西的陇海铁路上，是战场的西缘。`]}},{id:`yongcheng`,name:`永城`,lon:116.45,lat:33.93,rank:1,fact:{title:`永城`,sub:`徐州西南`,body:[`陈官庄、青龙集一带位于永城东北。`]}},{id:`lincheng`,name:`临城`,lon:117.26,lat:34.8,rank:1,fact:{title:`临城`,sub:`津浦铁路北段`,body:[`位于徐州以北（今山东枣庄薛城），是战场的北缘。`]}},{id:`xinanzhen`,name:`新安镇`,lon:118.35,lat:34.37,rank:1,fact:{title:`新安镇`,sub:`陇海铁路东段`,body:[`今江苏新沂。`,`战役开始时，黄百韬第7兵团位于新安镇一带。`]}},{id:`haizhou`,name:`海州`,lon:119.17,lat:34.59,rank:1,fact:{title:`海州（今连云港）`,sub:`陇海铁路东端`,body:[`陇海铁路通向海边的东端。`,`战场东起海州，西至商丘。`]}}],Bu=[{name:`南京`,lon:118.78,lat:32.06,note:`国民政府所在地`},{name:`北平`,lon:116.4,lat:39.9},{name:`沈阳`,lon:123.43,lat:41.8,note:`辽沈战役 1948.9—11`}],Vu=[{name:`山 东`,lon:117.75,lat:35.12},{name:`江 苏`,lon:118.75,lat:33.85},{name:`安 徽`,lon:116.3,lat:32.95},{name:`河 南`,lon:115.35,lat:34.05}],Hu=[{id:`nianzhuang`,name:`碾庄圩`,lon:117.776,lat:34.299,appear:3,peak:[4,16],fact:{title:`碾庄圩`,sub:`第一阶段`,body:[`位于徐州以东的陇海铁路旁（今江苏邳州碾庄镇）。`,`黄百韬第7兵团在这里被包围并全歼。`]}},{id:`shuangduiji`,name:`双堆集`,lon:116.896,lat:33.425,appear:16,peak:[18,39],fact:{title:`双堆集`,sub:`第二阶段`,body:[`位于宿县西南（今安徽濉溪县双堆集镇）。`,`黄维第12兵团在这里被包围并全歼。`]}},{id:`chenguanzhuang`,name:`陈官庄`,lon:116.578,lat:34.007,appear:25,peak:[27,65],fact:{title:`陈官庄`,sub:`第三阶段`,body:[`位于永城东北（今河南永城陈官庄镇）。`,`杜聿明集团在陈官庄、青龙集一带被包围，最终被歼灭。`]}},{id:`qinglongji`,name:`青龙集`,lon:116.633,lat:34.037,appear:25,peak:[27,65],fact:{title:`青龙集`,sub:`第三阶段`,body:[`与陈官庄相邻（今安徽萧县青龙集镇），同属杜聿明集团的被围地区。`]}}],Uu=[{id:`feihuanghe`,name:`废黄河`,label:[116.05,34.52],pts:[[114.8,34.82],[115.2,34.7],[115.65,34.55],[116.1,34.52],[116.45,34.5],[116.75,34.4],[117,34.32],[117.18,34.27],[117.45,34.1],[117.75,33.98],[118,33.92],[118.28,33.97],[118.6,33.8],[119,33.6],[119.3,33.62],[119.8,33.98]]},{id:`yunhe`,name:`运河`,label:[117.92,34.2],pts:[[117.1,34.85],[117.37,34.6],[117.72,34.56],[117.95,34.38],[118,34.28],[118.12,34.15],[118.28,33.96],[118.6,33.73],[119.02,33.6]]}],Wu={淮河:[117.05,32.78],沂河:[118.48,34.92],颍河:[116,32.84],黄河:[115.6,35.12]},Gu={微山湖:[116.98,34.72],洪泽湖:[118.62,33.3],骆马湖:[118.2,34.15],高邮湖:[119.35,32.86]},Ku=[{id:`longhai`,name:`陇海铁路`,label:[116,34.36],pts:[[114.8,34.45],[115.65,34.41],[116.35,34.43],[116.62,34.41],[116.95,34.3],[117.18,34.26],[117.47,34.28],[117.78,34.31],[117.96,34.32],[118.35,34.37],[118.77,34.53],[119.17,34.59],[119.45,34.74]]},{id:`jinpu`,name:`津浦铁路`,label:[117.18,33.9],pts:[[117.23,35.3],[117.26,34.8],[117.37,34.6],[117.35,34.47],[117.25,34.38],[117.18,34.26],[117.12,34],[117.02,33.78],[116.98,33.64],[117.19,33.4],[117.32,33.32],[117.38,32.93],[117.4,32.2]]}],qu={inf:`步兵`,armor:`装甲 / 坦克`,art:`炮兵`,cav:`骑兵`,hq:`指挥部`},Ju=[{id:`u7`,side:`kmt`,name:`第7兵团`,who:`黄百韬`,comp:[`inf`],compText:`步兵为主`,path:[[0,118.35,34.37],[3,118.1,34.34],[5,117.86,34.31],[6,117.78,34.3],[16,117.78,34.3]],destroyed:16,downText:`被全歼`,fact:{title:`第7兵团`,sub:`国民党军 · 司令官 黄百韬`,comp:`步兵为主`,body:[`战役开始时位于徐州以东的新安镇一带。`,`沿陇海铁路向徐州方向西撤，在碾庄圩被华东野战军包围。`,`11月22日被全歼，黄百韬毙命。`]}},{id:`u12`,side:`kmt`,name:`第12兵团`,who:`黄维`,comp:[`inf`,`armor`,`art`],compText:`步兵为主 · 含快速纵队（坦克、炮兵）`,path:[[8,114.95,32.85],[13,115.8,32.9],[16,116.4,33.2],[18,116.75,33.36],[20,116.896,33.425],[39,116.896,33.425]],appear:8,destroyed:39,downText:`被全歼 · 黄维被俘`,fact:{title:`第12兵团`,sub:`国民党军 · 司令官 黄维`,comp:`辖第10、14、18、85军和第4快速纵队，大部为美械装备；快速纵队配有坦克、装甲车和榴弹炮。`,src:`出处：央视网《淮海战役双堆集地区歼灭战》；维基百科「快速纵队」`,body:[`由河南南部向东赶来增援徐州。`,`在双堆集被中原野战军为主的部队包围。`,`12月15日被全歼，黄维被俘。`]}},{id:`u2`,side:`kmt`,name:`第2兵团`,who:`邱清泉`,comp:[`inf`,`armor`],compText:`机械化 · 配属坦克`,path:[[0,116.62,34.41],[5,117.05,34.28],[8,117.4,34.28],[11,117.44,34.28],[17,117.4,34.28],[20,117.22,34.24],[24,117.12,34.2],[26,116.85,34.1],[28,116.55,34.02],[65,116.55,34.02]],destroyed:65,downText:`被全歼 · 邱清泉毙命`,fact:{title:`第2兵团`,sub:`国民党军 · 司令官 邱清泉`,comp:`以第5军为骨干（第5军抗战时为国军第一支机械化部队），配属坦克部队；淮海战役最后阶段仍有坦克随兵团突围。`,src:`出处：凤凰网历史《国民党抗日王牌军的成名与被解放军歼灭始末》；人民政协网《解放军骑兵追歼敌人坦克》`,body:[`徐州方面的主力之一。`,`第一阶段东援碾庄圩，被阻于徐州以东。`,`11月30日随杜聿明撤离徐州，在陈官庄被围，1949年1月10日被歼，邱清泉毙命。`]}},{id:`u13`,side:`kmt`,name:`第13兵团`,who:`李弥`,comp:[`inf`],compText:`步兵为主`,path:[[0,117.55,34.33],[4,117.3,34.26],[8,117.44,34.22],[17,117.42,34.22],[20,117.25,34.2],[24,117.1,34.14],[26,116.85,34.05],[28,116.65,34.045],[65,116.65,34.045]],destroyed:65,downText:`被全歼`,fact:{title:`第13兵团`,sub:`国民党军 · 司令官 李弥`,comp:`步兵为主`,body:[`第一阶段与第2兵团一起东援，被阻。`,`随杜聿明撤离徐州，在陈官庄、青龙集一带被围。`,`1949年1月10日兵团被歼。`]}},{id:`u16`,side:`kmt`,name:`第16兵团`,who:`孙元良`,comp:[`inf`],compText:`步兵为主`,path:[[0,116.56,33.3],[5,116.98,33.66],[9,117.12,34.16],[24,117.12,34.18],[26,116.88,34],[28,116.6,33.95],[30,116.45,33.93]],destroyed:30,downText:`突围时被歼`,fact:{title:`第16兵团`,sub:`国民党军 · 司令官 孙元良`,comp:`步兵为主`,body:[`战役初期由宿县方向退至徐州。`,`11月30日随杜聿明撤离徐州，12月4日在陈官庄一带被围。`,`12月6日起突围，在突围中被歼。`]}},{id:`du`,side:`kmt`,name:`杜聿明`,who:`指挥部`,hq:!0,comp:[`hq`],compText:`徐州“剿总”前进指挥部`,path:[[0,117.18,34.29],[24,117.18,34.29],[26,116.9,34.08],[28,116.578,34.007],[65,116.578,34.007]],destroyed:65,downText:`被俘`,fact:{title:`杜聿明`,sub:`国民党军 · 徐州“剿总”副总司令`,body:[`11月30日率邱清泉、李弥、孙元良三个兵团撤离徐州。`,`12月4日在陈官庄一带被包围。`,`1949年1月10日被俘。`]}},{id:`ecf-n`,side:`pla`,name:`华野`,who:`北路`,comp:[`inf`],compText:`步兵为主`,path:[[0,117.78,34.88],[3,117.76,34.55],[5,117.78,34.42],[16,117.78,34.42],[24,117.1,34.38],[26,116.75,34.22],[28,116.6,34.13],[65,116.6,34.13]],fact:{title:`华东野战军`,sub:`北路（示意）`,comp:`步兵为主`,body:[`从北面逼近碾庄圩，参加对黄百韬第7兵团的包围。`,`杜聿明集团撤离徐州后，转至陈官庄以北参加包围。`]}},{id:`ecf-e`,side:`pla`,name:`华野`,who:`东路`,comp:[`inf`],compText:`步兵为主`,path:[[0,118.6,34.52],[3,118.15,34.38],[5,117.92,34.31],[16,117.92,34.31],[24,117.3,34],[27,116.85,34.02],[28,116.75,34.03],[65,116.75,34.03]],fact:{title:`华东野战军`,sub:`东路（示意）`,comp:`步兵为主`,body:[`切断陇海铁路，从东面封闭碾庄圩。`,`随后西进，参加对陈官庄的包围。`]}},{id:`ecf-s`,side:`pla`,name:`华野`,who:`南路`,comp:[`inf`],compText:`步兵为主`,path:[[0,118.22,33.9],[3,117.95,34.1],[5,117.8,34.2],[16,117.8,34.2],[24,117.2,33.82],[27,116.72,33.86],[28,116.6,33.9],[65,116.6,33.9]],fact:{title:`华东野战军`,sub:`南路（示意）`,comp:`步兵为主`,body:[`从南面参加对碾庄圩的包围。`,`其后进至陈官庄以南。`]}},{id:`ecf-b`,side:`pla`,name:`华野`,who:`阻援`,comp:[`inf`],compText:`步兵为主`,path:[[0,117.4,34.55],[4,117.5,34.38],[7,117.52,34.27],[20,117.52,34.27],[24,117.1,33.92],[27,116.6,33.9],[28,116.44,34],[65,116.44,34]],fact:{title:`阻援部队`,sub:`华东野战军（示意）`,comp:`步兵为主`,body:[`在徐州以东阻击前来增援碾庄圩的邱清泉、李弥两个兵团。`,`其后转至陈官庄以西，参加包围。`]}},{id:`cpf-w`,side:`pla`,name:`中野`,who:`西路`,comp:[`inf`],compText:`步兵为主`,path:[[0,115.85,33.8],[10,116.05,33.62],[16,116.5,33.46],[20,116.76,33.43],[65,116.76,33.43]],fact:{title:`中原野战军`,sub:`西路（示意）`,comp:`步兵为主`,body:[`从西面参加对黄维第12兵团的包围。`,`作战地区在宿县西南的双堆集一带。`]}},{id:`cpf-n`,side:`pla`,name:`中野`,who:`北路`,comp:[`inf`],compText:`步兵为主`,path:[[0,116.7,33.95],[10,116.98,33.66],[16,116.95,33.58],[20,116.9,33.53],[65,116.9,33.53]],fact:{title:`中原野战军`,sub:`北路（示意）`,comp:`步兵为主`,body:[`11月16日攻克宿县，切断徐州与蚌埠之间的津浦铁路。`,`随后从北面封闭双堆集。`]}},{id:`cpf-s`,side:`pla`,name:`中野`,who:`南路`,comp:[`inf`],compText:`步兵为主`,path:[[0,116.4,32.95],[10,116.62,33.1],[16,116.85,33.22],[20,116.92,33.32],[65,116.92,33.32]],fact:{title:`中原野战军`,sub:`南路（示意）`,comp:`步兵为主`,body:[`从南面进逼双堆集，参加对第12兵团的围歼。`]}}],Yu=[{side:`pla`,t0:1,t1:5,pts:[[117.8,34.85],[117.78,34.58],[117.77,34.4]]},{side:`pla`,t0:1,t1:5,pts:[[118.45,34.62],[118.1,34.45],[117.88,34.34]]},{side:`pla`,t0:2,t1:6,pts:[[118.3,33.92],[118.02,34.1],[117.84,34.23]]},{side:`pla`,t0:2,t1:6,pts:[[117.6,33.9],[117.7,34.08],[117.75,34.22]]},{side:`pla`,t0:16,t1:20,pts:[[117,33.78],[116.95,33.6],[116.91,33.5]]},{side:`pla`,t0:16,t1:20,pts:[[116.25,33.55],[116.58,33.47],[116.8,33.43]]},{side:`pla`,t0:17,t1:21,pts:[[117.35,33.2],[117.1,33.32],[116.97,33.39]]},{side:`pla`,t0:17,t1:21,pts:[[116.7,33.02],[116.82,33.2],[116.88,33.34]]},{side:`pla`,t0:24,t1:28,pts:[[116.95,34.55],[116.7,34.32],[116.6,34.12]]},{side:`pla`,t0:24,t1:28,pts:[[117.2,34.05],[116.92,34.03],[116.72,34.03]]},{side:`pla`,t0:25,t1:28,pts:[[116.85,33.72],[116.68,33.82],[116.6,33.92]]},{side:`pla`,t0:25,t1:28,pts:[[116.05,34.12],[116.28,34.05],[116.46,34.01]]},{side:`pla`,t0:64.2,t1:65,pts:[[117.4,32.98],[117.62,32.6],[117.9,32.25]],muted:!0}],Xu=[{side:`pla`,t0:3,t1:5,hold:16,center:[117.776,34.299],rx:.95,rz:.8},{side:`pla`,t0:18,t1:20,hold:39,center:[116.896,33.425],rx:.95,rz:.8},{side:`pla`,t0:26,t1:28,hold:65,center:[116.6,34.02],rx:1.15,rz:.8}],Zu=[{side:`pla`,t0:5,t1:8,hold:17,pts:[[117.53,34.13],[117.51,34.27],[117.53,34.42]]}],Qu=[{name:`华东野战军`,lon:118.3,lat:34.8,from:0,to:18,sides:[`both`,`pla`],comp:[`inf`,`art`,`armor`]},{name:`中原野战军`,lon:116.05,lat:33.88,from:0,to:17,sides:[`both`,`pla`],comp:[`inf`]},{name:`中原野战军`,lon:116.3,lat:33.18,from:17,to:40,sides:[`both`,`pla`],comp:[`inf`]},{name:`华东野战军`,lon:116.95,lat:34.42,from:24,to:66,sides:[`both`,`pla`],comp:[`inf`,`art`,`armor`,`cav`]},{name:`渡江方向`,lon:117.75,lat:32.4,from:65,to:80,sides:[`both`,`pla`],muted:!0}],$u={华东野战军:{title:`华东野战军`,sub:`解放军`,comp:`步兵为主；另有特种兵纵队参战，含炮兵、坦克大队和骑兵团。`,src:`出处：央视网（特纵炮兵参加双堆集作战）；人民网党史频道（特纵坦克大队参加碾庄作战）；人民政协网（特纵骑兵团在陈官庄追歼坦克）`,body:[`在碾庄圩围歼黄百韬第7兵团。`,`在陈官庄一带围歼杜聿明集团。`]},中原野战军:{title:`中原野战军`,sub:`解放军`,comp:`步兵为主`,body:[`11月16日攻克宿县。`,`在双堆集围歼黄维第12兵团（华东野战军一部参战）。`,`与华东野战军由总前委统一指挥。`]},渡江方向:{title:`向长江`,sub:`战役之后`,body:[`长江以北的华东、中原大部地区获得解放。`,`为随后的渡江战役创造了条件。`]}},ed={china:{china:!0,target:[104.8,35],phi:.3,theta:0},open:{target:[117.25,33.8],r:62,phi:.62,theta:-.08},nz:{target:[117.66,34.32],r:15,phi:.86,theta:.26},nzP:{target:[117.74,34.36],r:15.5,phi:.84,theta:.32},nzK:{target:[117.58,34.29],r:14.5,phi:.88,theta:.2},sd:{target:[116.86,33.62],r:19,phi:.8,theta:-.3},sdP:{target:[116.84,33.56],r:19,phi:.8,theta:-.36},sdK:{target:[116.88,33.66],r:19,phi:.82,theta:-.24},cg:{target:[116.64,34.05],r:13,phi:.88,theta:.12},cgP:{target:[116.62,34.03],r:13.5,phi:.86,theta:.08},cgK:{target:[116.62,34.03],r:11.5,phi:.9,theta:.16},end:{target:[117.25,33.7],r:62,phi:.5,theta:0}},td=[{key:`cause`,kind:`cause`,num:`起因`,short:`起因`,t:Iu[0],date:`1948年秋`,cam:{both:ed.china,pla:ed.china,kmt:ed.china},both:{title:`战役起因`,lead:`淮海战场在哪里？——以徐州为中心，江苏、山东、河南、安徽四省交界一带（地图上红框）。`,list:[[`形势`,`1948年秋辽沈战役结束后，国共双方的力量对比发生重大变化。`],[`国民党军`,`在以徐州为中心的地区集结重兵，由徐州“剿总”总司令刘峙、副总司令杜聿明指挥，保卫南京的北大门。`],[`解放军`,`中共中央决定由华东野战军、中原野战军联合发起淮海战役。`],[`指挥`,`两大野战军由总前委统一指挥：刘伯承、陈毅、邓小平、粟裕、谭震林。`]]}},{key:`open`,num:`01`,short:`开局`,t:Iu[1],date:`1948.11.6 — 1949.1.10`,cam:{both:ed.open,pla:ed.open,kmt:ed.open},both:{title:`战场与双方`,body:[`淮海战役是解放战争三大战役之一，与辽沈、平津战役并称。`,`战场以徐州为中心，东起海州，西至商丘，北起临城，南达淮河。`,`地势以平原为主：徐州周围有低山，北面是鲁南山地，废黄河故道斜穿而过。`],meta:[[`解放军`,`华东野战军 · 中原野战军`],[`总前委`,`邓小平（书记）、刘伯承、陈毅、粟裕、谭震林`],[`国民党军`,`徐州“剿总” 总司令刘峙 · 副总司令杜聿明`]]},pla:{title:`解放军的部署`,body:[`总前委书记邓小平，委员刘伯承、陈毅、粟裕、谭震林，统一指挥中原、华东两野战军。`,`华东野战军主要在徐州以东、以北展开，中原野战军主要在徐州以南、西南方向。`,`两军都以步兵为主；华东野战军另有特种兵纵队（炮兵、坦克等）。`]},kmt:{title:`国民党军的部署`,body:[`徐州“剿总”总司令刘峙，副总司令杜聿明，统一指挥徐州一带的主力。`,`黄百韬第7兵团位于徐州以东的新安镇一带，邱清泉、李弥、孙元良等兵团在徐州附近。`,`邱清泉第2兵团以第5军为骨干，配属坦克；黄维第12兵团此时尚在河南南部，稍后东来增援。`]}},{key:`nianzhuang`,num:`02`,short:`碾庄`,t:Iu[2],date:`1948.11.6 — 11.22`,cam:{both:ed.nz,pla:ed.nzP,kmt:ed.nzK},both:{title:`第一阶段 · 碾庄圩`,body:[`黄百韬第7兵团沿陇海铁路向徐州方向西撤。`,`华东野战军切断陇海线，把它包围在碾庄圩一带。`,`同时在徐州以东阻击东援的邱清泉、李弥两个兵团。`,`11月22日，第7兵团被全歼，黄百韬毙命。`]},pla:{title:`华东野战军围歼碾庄`,body:[`华东野战军切断陇海铁路，从几路逼近碾庄圩，包围黄百韬第7兵团。`,`另以部队在徐州以东阻击东援的邱清泉、李弥两个兵团。`,`11月22日，第7兵团被全歼，黄百韬毙命。`]},kmt:{title:`第7兵团在碾庄圩`,body:[`黄百韬第7兵团沿陇海铁路向徐州方向西撤，在碾庄圩一带陷入包围。`,`邱清泉第2兵团、李弥第13兵团从徐州东援，但被阻于徐州以东。`,`11月22日第7兵团被全歼，黄百韬毙命。`]}},{key:`shuangduiji`,num:`03`,short:`双堆集`,t:Iu[3],date:`1948.11.23 — 12.15`,cam:{both:ed.sd,pla:ed.sdP,kmt:ed.sdK},both:{title:`第二阶段 · 双堆集`,body:[`黄维第12兵团由河南南部东来增援徐州，11月下旬在宿县西南的双堆集被包围。`,`11月30日，杜聿明率邱清泉、李弥、孙元良三个兵团撤离徐州，12月4日在陈官庄一带被华东野战军包围。`,`12月15日，第12兵团被全歼，黄维被俘。`]},pla:{title:`围歼双堆集`,body:[`中原野战军全部和华东野战军一部，把黄维第12兵团包围在宿县西南的双堆集。`,`华东野战军主力追击撤离徐州的杜聿明集团，12月4日将其包围在陈官庄一带。`,`12月15日第12兵团被全歼，黄维被俘。`]},kmt:{title:`增援受挫，放弃徐州`,body:[`黄维第12兵团东来增援徐州，在双堆集陷入包围。`,`11月30日杜聿明率三个兵团放弃徐州，向西南转移，12月4日在陈官庄一带被围。`,`12月15日第12兵团被全歼，黄维被俘。`]}},{key:`chenguanzhuang`,num:`04`,short:`陈官庄`,t:Iu[4],date:`1948.12.16 — 1949.1.10`,cam:{both:ed.cg,pla:ed.cgP,kmt:ed.cgK},both:{title:`第三阶段 · 陈官庄`,body:[`杜聿明集团被围在永城东北的陈官庄、青龙集一带；12月6日起孙元良第16兵团突围，被歼。`,`华东野战军边围困、边休整，并展开政治攻势。`,`1949年1月6日发起总攻，1月10日战斗结束：杜聿明被俘，邱清泉毙命。`]},pla:{title:`包围陈官庄`,body:[`华东野战军把杜聿明集团包围在陈官庄、青龙集一带，边围困、边休整，并展开政治攻势。`,`1949年1月6日发起总攻。`,`1月10日结束：杜聿明被俘，邱清泉毙命。`]},kmt:{title:`杜聿明集团被围`,body:[`邱清泉、李弥两个兵团在陈官庄、青龙集一带被围，补给中断；孙元良第16兵团突围时被歼。`,`1949年1月6日解放军发起总攻。`,`1月10日战斗结束：杜聿明被俘，邱清泉毙命。`]}},{key:`end`,kind:`result`,num:`05`,short:`结果`,t:Iu[5],date:`1948.11.6 — 1949.1.10 · 历时 66 天`,cam:{both:ed.end,pla:ed.end,kmt:ed.end},both:{title:`战役结果`,stats:[[`约 55.5 万`,`国民党军被歼灭及改编`],[`66`,`天`]],list:[[`碾庄圩`,`黄百韬第7兵团被歼。`],[`双堆集`,`黄维第12兵团被歼。`],[`陈官庄`,`杜聿明集团（邱清泉第2兵团、李弥第13兵团）被歼，杜聿明被俘；孙元良第16兵团突围时被歼。`],[`意义`,`长江以北的华东、中原大部地区获得解放，为渡江战役创造了条件。`]]}}];function nd(e){let t=0;for(let n=0;n<td.length;n++)e+1e-6>=td[n].t&&(t=n);return t}var rd=[{id:`both`,label:`双方`},{id:`pla`,label:`只看解放军`},{id:`kmt`,label:`只看国民党军`}],id={provinces:[{name:`北京`,full:`北京市`,hl:!1,center:[116.41995,40.18994],rings:[[[117.349,40.581],[117.43,40.576],[117.413,40.605],[117.501,40.637],[117.494,40.675],[116.965,40.71],[116.714,40.91],[116.699,41.021],[116.648,41.059],[116.598,40.975],[116.455,40.981],[116.477,40.9],[116.34,40.929],[116.454,40.766],[116.247,40.792],[116.163,40.662],[115.982,40.579],[115.908,40.617],[115.755,40.54],[115.772,40.444],[115.918,40.354],[115.969,40.264],[115.848,40.147],[115.774,40.176],[115.455,40.03],[115.426,39.951],[115.567,39.816],[115.444,39.786],[115.487,39.742],[115.479,39.651],[115.518,39.597],[115.668,39.615],[115.806,39.51],[115.91,39.6],[115.957,39.561],[115.978,39.596],[116.199,39.589],[116.258,39.5],[116.435,39.443],[116.402,39.528],[116.444,39.51],[116.524,39.596],[116.791,39.596],[116.906,39.677],[116.902,39.764],[116.949,39.779],[116.918,39.846],[116.784,39.891],[116.781,40.035],[117.025,40.03],[117.349,40.137],[117.39,40.228],[117.226,40.369],[117.264,40.442],[117.209,40.502],[117.349,40.581]]]},{name:`天津`,full:`天津市`,hl:!1,center:[117.347043,39.288036],rings:[[[117.766,39.401],[117.872,39.412],[117.934,39.574],[117.767,39.599],[117.716,39.53],[117.707,39.576],[117.654,39.575],[117.669,39.667],[117.578,39.727],[117.508,39.902],[117.546,39.999],[117.782,39.967],[117.793,40.006],[117.744,40.018],[117.776,40.06],[117.675,40.082],[117.549,40.233],[117.416,40.249],[117.349,40.137],[117.192,40.066],[117.163,39.877],[117.252,39.834],[117.156,39.817],[117.206,39.764],[117.162,39.749],[117.178,39.645],[116.964,39.643],[116.932,39.706],[116.812,39.616],[116.821,39.482],[116.785,39.466],[116.876,39.435],[116.818,39.374],[116.89,39.338],[116.856,39.216],[116.913,39.111],[116.872,39.055],[116.754,39.035],[116.708,38.932],[116.746,38.754],[116.859,38.741],[116.877,38.681],[117.068,38.681],[117.11,38.585],[117.213,38.64],[117.253,38.556],[117.729,38.68],[117.741,38.754],[117.647,38.789],[117.646,38.829],[117.848,38.856],[117.898,38.949],[117.856,38.957],[117.838,39.057],[117.872,39.123],[118.065,39.231],[118.024,39.289],[117.805,39.373],[117.671,39.358],[117.67,39.323],[117.536,39.338],[117.601,39.419],[117.766,39.401]]]},{name:`河北`,full:`河北省`,hl:!1,center:[114.502461,38.045474],rings:[[[117.467,40.65],[117.43,40.576],[117.27,40.561],[117.209,40.502],[117.264,40.442],[117.226,40.369],[117.351,40.23],[117.549,40.233],[117.675,40.082],[117.776,40.06],[117.744,40.018],[117.793,40.006],[117.782,39.967],[117.546,39.999],[117.515,39.947],[117.546,39.776],[117.669,39.667],[117.637,39.603],[117.716,39.53],[117.767,39.599],[117.934,39.574],[117.811,39.355],[118.024,39.289],[118.065,39.256],[118.026,39.202],[118.125,39.183],[118.225,39.035],[118.366,39.016],[118.491,38.909],[118.605,38.971],[118.533,39.091],[118.579,39.131],[118.951,39.179],[118.896,39.14],[118.926,39.123],[119.185,39.342],[119.273,39.364],[119.317,39.411],[119.27,39.498],[119.366,39.735],[119.536,39.809],[119.541,39.888],[119.872,39.961],[119.854,40.033],[119.737,40.105],[119.746,40.208],[119.639,40.232],[119.559,40.548],[119.256,40.543],[119.231,40.604],[119.145,40.632],[119.185,40.68],[119.055,40.665],[118.846,40.822],[118.902,40.961],[119.001,40.967],[119.013,41.007],[118.937,41.053],[119.081,41.096],[119.24,41.314],[118.891,41.301],[118.843,41.375],[118.742,41.324],[118.349,41.343],[118.349,41.428],[118.272,41.471],[118.303,41.553],[118.215,41.596],[118.133,41.733],[118.178,41.815],[118.292,41.773],[118.335,41.845],[118.269,41.93],[118.314,41.988],[118.24,42.025],[118.297,42.058],[118.239,42.093],[118.194,42.031],[118.117,42.037],[118.155,42.081],[118.098,42.105],[118.106,42.172],[117.977,42.23],[118.06,42.298],[118.024,42.385],[117.801,42.613],[117.475,42.603],[117.387,42.518],[117.39,42.462],[117.095,42.484],[116.922,42.404],[116.887,42.366],[116.903,42.191],[116.789,42.2],[116.89,42.093],[116.88,42.018],[116.796,41.978],[116.553,41.929],[116.511,41.974],[116.393,41.943],[116.414,41.982],[116.374,42.01],[116.31,41.997],[116.194,41.862],[116.123,41.862],[116.099,41.777],[116.007,41.798],[115.917,41.945],[115.835,41.938],[115.347,41.712],[115.319,41.692],[115.378,41.603],[115.29,41.623],[115.204,41.571],[115.099,41.624],[114.861,41.601],[114.903,41.696],[114.869,41.814],[114.939,41.846],[114.902,42.016],[114.794,42.149],[114.511,42.111],[114.468,42.026],[114.512,41.982],[114.352,41.953],[114.201,41.79],[114.259,41.623],[114.231,41.514],[114.101,41.538],[113.933,41.487],[113.871,41.413],[113.945,41.392],[113.899,41.316],[114.016,41.232],[113.819,41.098],[114.058,40.925],[114.045,40.831],[114.283,40.591],[114.267,40.474],[114.312,40.373],[114.531,40.345],[114.47,40.268],[114.098,40.194],[114.087,40.072],[113.989,40.112],[113.91,40.016],[114.029,39.986],[114.047,39.916],[114.212,39.919],[114.216,39.862],[114.395,39.867],[114.408,39.652],[114.515,39.565],[114.569,39.574],[114.431,39.308],[114.416,39.243],[114.476,39.216],[114.388,39.177],[114.346,39.075],[114.109,39.052],[114.051,39.136],[113.898,39.068],[113.768,38.96],[113.776,38.886],[113.856,38.829],[113.84,38.758],[113.721,38.713],[113.702,38.652],[113.613,38.646],[113.562,38.558],[113.545,38.271],[113.721,38.175],[113.832,38.169],[113.811,38.118],[113.877,38.055],[113.872,37.99],[114.045,37.762],[113.994,37.707],[114.14,37.676],[113.886,37.239],[113.773,37.152],[113.773,36.855],[113.697,36.882],[113.681,36.79],[113.465,36.708],[113.507,36.705],[113.487,36.635],[113.589,36.548],[113.554,36.495],[113.587,36.461],[113.813,36.332],[113.882,36.354],[113.911,36.315],[113.963,36.354],[114.17,36.246],[114.345,36.256],[114.589,36.118],[114.913,36.141],[114.914,36.052],[114.998,36.07],[115.063,36.178],[115.201,36.21],[115.313,36.088],[115.366,36.099],[115.484,36.149],[115.475,36.248],[115.423,36.322],[115.367,36.309],[115.273,36.497],[115.48,36.76],[115.684,36.808],[115.91,37.207],[115.97,37.24],[115.976,37.337],[116.236,37.361],[116.285,37.404],[116.226,37.428],[116.225,37.48],[116.276,37.467],[116.336,37.581],[116.434,37.473],[116.805,37.849],[117.439,37.854],[117.587,38.072],[117.705,38.076],[117.771,38.135],[117.958,38.376],[117.781,38.374],[117.645,38.528],[117.686,38.539],[117.638,38.545],[117.639,38.627],[117.253,38.556],[117.213,38.64],[117.11,38.585],[117.068,38.681],[116.877,38.681],[116.859,38.741],[116.746,38.754],[116.708,38.932],[116.754,39.035],[116.872,39.055],[116.913,39.111],[116.856,39.216],[116.89,39.338],[116.818,39.374],[116.876,39.435],[116.785,39.466],[116.821,39.482],[116.812,39.616],[116.524,39.596],[116.444,39.51],[116.402,39.528],[116.435,39.443],[116.258,39.5],[116.199,39.589],[115.978,39.596],[115.957,39.561],[115.91,39.6],[115.806,39.51],[115.753,39.516],[115.668,39.615],[115.518,39.597],[115.487,39.742],[115.44,39.752],[115.567,39.816],[115.426,39.951],[115.455,40.03],[115.774,40.176],[115.848,40.147],[115.969,40.264],[115.918,40.354],[115.772,40.444],[115.755,40.54],[115.908,40.617],[115.982,40.579],[116.163,40.662],[116.247,40.792],[116.454,40.766],[116.34,40.929],[116.477,40.9],[116.455,40.981],[116.598,40.975],[116.616,41.053],[116.688,41.045],[116.714,40.91],[116.965,40.71],[117.32,40.658],[117.409,40.687],[117.494,40.675],[117.501,40.637],[117.467,40.65]],[[117.21,40.082],[117.025,40.03],[116.781,40.035],[116.784,39.891],[116.918,39.846],[116.949,39.779],[116.902,39.764],[116.89,39.688],[116.932,39.706],[116.983,39.639],[117.178,39.645],[117.162,39.749],[117.206,39.764],[117.156,39.817],[117.252,39.834],[117.163,39.877],[117.151,39.945],[117.21,40.082]],[[117.785,39.377],[117.601,39.419],[117.521,39.357],[117.67,39.323],[117.671,39.358],[117.785,39.377]]]},{name:`山西`,full:`山西省`,hl:!1,center:[112.304436,37.618179],rings:[[[110.379,34.601],[110.71,34.605],[110.749,34.652],[110.825,34.616],[110.92,34.73],[110.976,34.706],[111.149,34.808],[111.57,34.843],[111.682,34.951],[111.664,34.984],[111.81,35.062],[112.062,35.056],[112.059,35.28],[112.305,35.252],[112.288,35.22],[112.637,35.226],[112.628,35.263],[112.773,35.208],[112.992,35.296],[112.996,35.362],[113.126,35.332],[113.19,35.449],[113.304,35.427],[113.312,35.481],[113.499,35.532],[113.548,35.657],[113.625,35.633],[113.583,35.818],[113.661,35.837],[113.649,35.994],[113.695,36.027],[113.655,36.125],[113.713,36.13],[113.651,36.174],[113.698,36.182],[113.731,36.363],[113.708,36.423],[113.554,36.495],[113.589,36.548],[113.487,36.635],[113.507,36.705],[113.465,36.708],[113.681,36.79],[113.697,36.882],[113.773,36.855],[113.773,37.152],[113.886,37.239],[114.14,37.676],[113.994,37.707],[114.045,37.762],[113.872,37.99],[113.877,38.055],[113.811,38.118],[113.832,38.169],[113.721,38.175],[113.545,38.271],[113.562,38.558],[113.613,38.646],[113.702,38.652],[113.721,38.713],[113.84,38.758],[113.856,38.829],[113.776,38.886],[113.768,38.96],[113.898,39.068],[114.051,39.136],[114.109,39.052],[114.346,39.075],[114.388,39.177],[114.476,39.216],[114.416,39.243],[114.431,39.308],[114.569,39.574],[114.515,39.565],[114.408,39.652],[114.395,39.867],[114.216,39.862],[114.212,39.919],[114.047,39.916],[114.029,39.986],[113.91,40.016],[113.989,40.112],[114.087,40.072],[114.098,40.194],[114.47,40.268],[114.531,40.345],[114.312,40.373],[114.267,40.474],[114.283,40.591],[114.135,40.737],[114.064,40.707],[114.062,40.529],[113.851,40.461],[113.795,40.518],[113.56,40.348],[113.317,40.32],[113.251,40.413],[113.033,40.369],[112.898,40.329],[112.849,40.207],[112.744,40.167],[112.456,40.3],[112.31,40.256],[111.97,39.797],[111.938,39.623],[111.784,39.589],[111.497,39.662],[111.445,39.64],[111.431,39.509],[111.359,39.432],[111.143,39.408],[111.126,39.366],[111.248,39.302],[111.138,39.064],[110.98,38.97],[111.009,38.848],[110.881,38.627],[110.92,38.582],[110.874,38.454],[110.778,38.441],[110.747,38.366],[110.578,38.297],[110.566,38.215],[110.509,38.192],[110.523,37.955],[110.736,37.77],[110.706,37.706],[110.775,37.681],[110.795,37.559],[110.74,37.449],[110.644,37.435],[110.631,37.373],[110.695,37.35],[110.69,37.287],[110.427,37.009],[110.383,37.022],[110.424,36.964],[110.376,36.882],[110.424,36.856],[110.408,36.776],[110.447,36.738],[110.395,36.677],[110.497,36.582],[110.447,36.164],[110.61,35.632],[110.375,35.252],[110.374,35.134],[110.231,34.881],[110.23,34.693],[110.295,34.611],[110.379,34.601]]]},{name:`内蒙古`,full:`内蒙古自治区`,hl:!1,center:[114.077429,44.331087],rings:[[[97.173,42.795],[97.847,41.656],[97.614,41.477],[97.629,41.44],[97.972,41.098],[98.333,40.919],[98.344,40.568],[98.628,40.678],[98.57,40.747],[98.668,40.773],[98.689,40.692],[98.803,40.607],[98.791,40.706],[98.985,40.783],[99.102,40.677],[99.173,40.747],[99.175,40.858],[99.566,40.847],[99.673,40.933],[100.108,40.875],[100.237,40.717],[100.243,40.619],[100.169,40.541],[100.169,40.278],[100.007,40.2],[99.927,40.064],[99.841,40.013],[99.441,39.886],[99.822,39.86],[99.905,39.786],[100.25,39.685],[100.327,39.509],[100.501,39.481],[100.499,39.401],[100.842,39.406],[100.835,39.026],[100.962,39.006],[100.97,38.947],[101.229,39.021],[101.199,38.943],[101.243,38.861],[101.335,38.847],[101.331,38.777],[101.563,38.713],[101.602,38.655],[101.673,38.691],[101.777,38.66],[102.075,38.891],[101.834,39.089],[101.903,39.112],[102.453,39.255],[102.617,39.172],[103.008,39.1],[103.345,39.332],[103.853,39.462],[104.09,39.42],[104.047,39.298],[104.171,39.161],[104.196,38.988],[104.044,38.895],[103.86,38.645],[103.416,38.405],[103.535,38.157],[103.369,38.089],[103.362,38.038],[103.407,37.861],[103.683,37.778],[104.184,37.407],[104.408,37.465],[104.434,37.515],[105.028,37.581],[105.315,37.702],[105.599,37.699],[105.622,37.778],[105.761,37.8],[105.84,38.004],[105.768,38.121],[105.866,38.296],[105.821,38.367],[105.853,38.642],[105.909,38.791],[105.993,38.857],[105.971,38.909],[106.061,38.969],[106.146,39.153],[106.285,39.146],[106.28,39.262],[106.512,39.272],[106.602,39.376],[106.782,39.372],[106.796,39.214],[106.972,39.026],[106.954,38.941],[106.709,38.719],[106.6,38.39],[106.482,38.319],[106.942,38.132],[107.191,38.154],[107.441,37.996],[107.412,37.948],[107.982,37.787],[108.025,37.65],[108.134,37.622],[108.246,37.666],[108.778,37.684],[108.827,37.989],[108.798,38.048],[108.883,38.014],[108.935,37.923],[109.07,38.023],[109.069,38.091],[108.939,38.208],[109.054,38.434],[109.277,38.623],[109.367,38.628],[109.339,38.702],[109.511,38.834],[109.55,38.806],[109.624,38.855],[109.665,38.982],[109.762,39.057],[109.851,39.123],[109.922,39.107],[109.894,39.141],[109.961,39.192],[109.872,39.244],[109.903,39.272],[109.962,39.212],[110.218,39.281],[110.137,39.392],[110.153,39.454],[110.385,39.31],[110.435,39.381],[110.524,39.383],[110.626,39.267],[110.703,39.274],[110.891,39.509],[111.137,39.587],[111.149,39.531],[111.059,39.448],[111.088,39.376],[111.172,39.423],[111.337,39.421],[111.431,39.509],[111.445,39.64],[111.497,39.662],[111.784,39.589],[111.938,39.623],[111.97,39.797],[112.31,40.256],[112.456,40.3],[112.744,40.167],[112.849,40.207],[112.898,40.329],[113.033,40.369],[113.251,40.413],[113.317,40.32],[113.5,40.334],[113.795,40.518],[113.851,40.461],[114.062,40.529],[114.064,40.707],[114.135,40.737],[114.045,40.831],[114.058,40.925],[113.819,41.098],[114.016,41.232],[113.899,41.316],[113.945,41.392],[113.871,41.413],[114.032,41.53],[114.231,41.514],[114.259,41.623],[114.201,41.79],[114.352,41.953],[114.512,41.982],[114.48,42.065],[114.56,42.133],[114.755,42.116],[114.794,42.149],[114.863,42.098],[114.939,41.846],[114.869,41.814],[114.903,41.696],[114.861,41.601],[115.099,41.624],[115.204,41.571],[115.29,41.623],[115.378,41.603],[115.319,41.692],[115.347,41.712],[115.835,41.938],[115.917,41.945],[116.007,41.798],[116.099,41.777],[116.123,41.862],[116.194,41.862],[116.31,41.997],[116.374,42.01],[116.414,41.982],[116.393,41.943],[116.511,41.974],[116.553,41.929],[116.796,41.978],[116.88,42.018],[116.89,42.093],[116.789,42.2],[116.903,42.191],[116.887,42.366],[116.922,42.404],[117.095,42.484],[117.39,42.462],[117.387,42.518],[117.475,42.603],[117.667,42.582],[117.78,42.618],[118.024,42.385],[118.06,42.298],[117.977,42.23],[118.106,42.172],[118.098,42.105],[118.155,42.081],[118.117,42.037],[118.194,42.031],[118.239,42.093],[118.297,42.058],[118.24,42.025],[118.314,41.988],[118.269,41.93],[118.335,41.845],[118.292,41.773],[118.178,41.815],[118.133,41.733],[118.215,41.596],[118.303,41.553],[118.272,41.471],[118.349,41.428],[118.38,41.312],[118.528,41.355],[118.742,41.324],[118.843,41.375],[118.891,41.301],[119.198,41.283],[119.376,41.422],[119.406,41.503],[119.362,41.566],[119.42,41.568],[119.308,41.657],[119.293,41.791],[119.385,42.09],[119.238,42.201],[119.503,42.388],[119.572,42.359],[119.54,42.298],[119.617,42.253],[119.842,42.216],[119.846,42.097],[120.041,41.819],[120.036,41.708],[120.096,41.697],[120.189,41.848],[120.287,41.88],[120.272,41.925],[120.457,42.016],[120.494,42.074],[120.466,42.106],[120.883,42.27],[121.071,42.254],[121.386,42.474],[121.608,42.516],[121.699,42.439],[121.89,42.557],[121.939,42.688],[122.062,42.724],[122.205,42.685],[122.205,42.733],[122.396,42.684],[122.461,42.755],[122.372,42.776],[122.351,42.83],[122.437,42.843],[122.625,42.773],[122.733,42.786],[122.849,42.712],[122.887,42.77],[123.058,42.769],[123.228,42.832],[123.17,42.86],[123.259,42.993],[123.475,43.042],[123.573,43.003],[123.704,43.37],[123.608,43.366],[123.486,43.445],[123.42,43.41],[123.316,43.492],[123.305,43.551],[123.453,43.546],[123.421,43.598],[123.512,43.593],[123.537,43.634],[123.468,43.854],[123.331,44.029],[123.387,44.162],[123.129,44.367],[123.125,44.51],[122.761,44.37],[122.675,44.286],[122.483,44.237],[122.271,44.256],[122.286,44.478],[122.131,44.578],[122.103,44.674],[122.162,44.728],[122.102,44.736],[122.169,44.77],[122.1,44.782],[122.049,44.913],[122.11,45.142],[122.23,45.207],[122.239,45.276],[122.147,45.296],[122.168,45.44],[122.003,45.508],[121.97,45.693],[121.714,45.702],[121.644,45.752],[121.817,45.875],[121.762,45.999],[121.844,46.024],[122.04,45.959],[122.091,45.882],[122.254,45.798],[122.373,45.856],[122.362,45.917],[122.446,45.917],[122.505,45.787],[122.556,45.822],[122.672,45.7],[122.742,45.705],[122.792,45.766],[122.752,45.835],[122.829,45.912],[122.793,46.073],[123.046,46.1],[123.178,46.248],[123.012,46.435],[123.002,46.575],[123.053,46.58],[123.046,46.618],[123.228,46.588],[123.276,46.661],[123.603,46.689],[123.605,46.891],[123.563,46.826],[123.507,46.827],[123.528,46.945],[123.424,46.934],[123.302,47],[123.405,46.935],[123.374,46.838],[123.222,46.85],[123.164,46.74],[123.004,46.731],[122.907,46.807],[122.895,46.96],[122.791,46.942],[122.774,46.974],[122.853,47.072],[122.616,47.124],[122.418,47.351],[122.507,47.401],[122.594,47.547],[123.162,47.782],[123.3,47.954],[123.579,48.045],[124.259,48.536],[124.314,48.504],[124.318,48.351],[124.422,48.246],[124.419,48.182],[124.475,48.174],[124.416,48.088],[124.53,48.147],[124.58,48.297],[124.519,48.378],[124.508,48.446],[124.556,48.468],[124.521,48.556],[124.602,48.633],[124.654,48.834],[124.808,49.021],[124.809,49.116],[124.907,49.184],[125.117,49.126],[125.22,49.189],[125.271,49.454],[125.211,49.54],[125.23,49.595],[125.127,49.655],[125.22,49.669],[125.223,49.799],[125.178,49.83],[125.246,49.872],[125.19,49.96],[125.328,50.066],[125.259,50.104],[125.376,50.137],[125.335,50.161],[125.449,50.216],[125.464,50.296],[125.547,50.359],[125.536,50.42],[125.829,50.562],[125.789,50.68],[125.826,50.704],[125.759,50.747],[125.847,50.77],[125.962,50.901],[125.998,50.873],[126.068,50.967],[126.059,51.044],[125.976,51.084],[125.994,51.119],[125.865,51.146],[125.85,51.214],[125.762,51.226],[125.352,51.624],[125.129,51.659],[125.047,51.53],[124.929,51.498],[124.943,51.447],[124.864,51.38],[124.627,51.327],[124.49,51.381],[124.407,51.272],[124.239,51.345],[123.926,51.301],[123.711,51.398],[123.662,51.319],[123.44,51.271],[123.294,51.254],[123.003,51.312],[122.854,51.478],[122.874,51.561],[122.706,51.89],[122.726,51.979],[122.684,51.975],[122.625,52.067],[122.629,52.137],[122.738,52.153],[122.787,52.252],[122.478,52.296],[122.447,52.394],[122.169,52.514],[121.948,52.298],[121.714,52.318],[121.64,52.444],[121.182,52.599],[121.591,52.825],[121.716,52.998],[121.786,53.018],[121.818,53.062],[121.753,53.148],[121.665,53.17],[121.68,53.241],[121.499,53.337],[120.821,53.269],[120.839,53.24],[120.297,52.87],[120.032,52.774],[120.076,52.586],[120.462,52.645],[120.734,52.537],[120.687,52.511],[120.627,52.324],[120.755,52.258],[120.787,52.158],[120.657,51.926],[120.481,51.886],[120.173,51.68],[120.087,51.678],[119.971,51.4],[119.911,51.391],[119.947,51.361],[119.811,51.281],[119.822,51.214],[119.761,51.213],[119.764,51.092],[119.491,50.879],[119.507,50.764],[119.281,50.602],[119.217,50.415],[119.126,50.389],[119.188,50.348],[119.358,50.359],[119.382,50.324],[119.319,50.221],[119.35,50.166],[119.09,49.986],[118.575,49.931],[118.484,49.831],[118.386,49.827],[118.384,49.784],[118.221,49.73],[118.083,49.617],[117.866,49.592],[117.809,49.521],[117.485,49.633],[117.069,49.695],[116.718,49.847],[116.048,48.873],[116.078,48.822],[115.8,48.515],[115.823,48.259],[115.529,48.155],[115.58,47.922],[115.939,47.683],[116.266,47.877],[116.453,47.837],[116.791,47.898],[117.095,47.824],[117.384,47.641],[117.814,48.016],[118.125,48.047],[118.568,47.992],[118.773,47.771],[119.134,47.664],[119.152,47.54],[119.366,47.477],[119.322,47.427],[119.716,47.196],[119.86,46.917],[119.927,46.904],[119.912,46.67],[119.804,46.682],[119.783,46.626],[119.677,46.585],[119.558,46.634],[119.374,46.603],[119.123,46.643],[119.012,46.746],[118.912,46.733],[118.914,46.775],[118.845,46.772],[118.788,46.687],[118.316,46.739],[117.748,46.522],[117.596,46.603],[117.42,46.582],[117.448,46.528],[117.372,46.36],[116.834,46.384],[116.585,46.293],[116.272,45.967],[116.243,45.876],[116.287,45.775],[116.175,45.689],[116.035,45.685],[115.7,45.46],[115.365,45.392],[114.983,45.379],[114.745,45.438],[114.551,45.387],[114.46,45.214],[114.117,44.957],[113.907,44.915],[113.631,44.745],[112.85,44.84],[112.6,44.931],[112.439,45.072],[112.071,45.096],[111.904,45.052],[111.765,44.969],[111.625,44.778],[111.57,44.576],[111.416,44.357],[111.663,44.061],[111.87,43.94],[111.96,43.823],[111.951,43.693],[111.794,43.672],[111.564,43.49],[111.457,43.494],[111.02,43.33],[110.437,42.781],[110.108,42.643],[109.734,42.579],[109.544,42.473],[109.026,42.458],[108.846,42.396],[108.238,42.46],[107.94,42.404],[107.574,42.413],[107.466,42.459],[107.272,42.364],[106.786,42.291],[105.742,41.949],[105.231,41.751],[105.009,41.583],[104.923,41.654],[104.524,41.662],[104.53,41.875],[103.869,41.802],[103.419,41.882],[102.712,42.153],[102.449,42.144],[102.07,42.232],[101.804,42.504],[100.863,42.671],[100.325,42.69],[100.272,42.637],[99.969,42.648],[99.512,42.568],[98.195,42.653],[97.173,42.795]]]},{name:`辽宁`,full:`辽宁省`,hl:!1,center:[122.604994,41.299712],rings:[[[123.534,39.788],[123.547,39.756],[123.645,39.824],[124.103,39.823],[124.151,39.746],[124.242,39.928],[124.372,40.022],[124.347,40.08],[124.723,40.322],[124.739,40.372],[124.914,40.482],[125.044,40.467],[125.016,40.534],[125.279,40.655],[125.422,40.636],[125.419,40.673],[125.586,40.789],[125.685,40.769],[125.641,40.799],[125.708,40.867],[125.652,40.916],[125.584,40.892],[125.589,40.931],[125.675,40.975],[125.712,41.095],[125.791,41.168],[125.738,41.178],[125.749,41.245],[125.647,41.264],[125.637,41.344],[125.548,41.401],[125.447,41.676],[125.317,41.677],[125.336,41.768],[125.295,41.823],[125.308,41.925],[125.352,41.928],[125.299,41.974],[125.49,42.136],[125.368,42.183],[125.306,42.146],[125.299,42.29],[125.175,42.308],[125.186,42.428],[125.069,42.499],[125.097,42.622],[125.011,42.632],[124.975,42.803],[124.874,42.79],[124.841,43.032],[124.883,43.134],[124.687,43.051],[124.587,42.905],[124.466,42.847],[124.372,42.881],[124.442,42.959],[124.333,42.997],[124.426,43.076],[124.274,43.179],[124.276,43.233],[124.033,43.281],[123.896,43.361],[123.797,43.49],[123.71,43.417],[123.698,43.272],[123.573,43.003],[123.475,43.042],[123.259,42.993],[123.17,42.86],[123.228,42.832],[123.058,42.769],[122.887,42.77],[122.849,42.712],[122.733,42.786],[122.625,42.773],[122.437,42.843],[122.351,42.83],[122.372,42.776],[122.461,42.755],[122.396,42.684],[122.205,42.733],[122.205,42.685],[122.062,42.724],[121.939,42.688],[121.89,42.557],[121.699,42.439],[121.608,42.516],[121.386,42.474],[121.071,42.254],[120.883,42.27],[120.466,42.106],[120.494,42.074],[120.457,42.016],[120.272,41.925],[120.287,41.88],[120.189,41.848],[120.096,41.697],[120.036,41.708],[120.041,41.819],[119.846,42.097],[119.842,42.216],[119.617,42.253],[119.54,42.298],[119.572,42.359],[119.503,42.388],[119.238,42.201],[119.385,42.09],[119.293,41.791],[119.308,41.657],[119.416,41.59],[119.362,41.566],[119.402,41.472],[119.081,41.096],[118.937,41.053],[119.013,41.007],[119.001,40.967],[118.902,40.961],[118.846,40.822],[119.055,40.665],[119.185,40.68],[119.145,40.632],[119.231,40.604],[119.256,40.543],[119.559,40.548],[119.639,40.232],[119.746,40.208],[119.737,40.105],[119.854,40.033],[119.854,39.989],[120.492,40.2],[120.619,40.46],[120.823,40.594],[120.83,40.671],[121.033,40.709],[120.972,40.806],[121.087,40.798],[121.126,40.869],[121.439,40.83],[121.44,40.882],[121.499,40.88],[121.553,40.818],[121.816,40.895],[121.843,40.832],[121.934,40.798],[121.952,40.681],[122.149,40.672],[122.134,40.614],[122.246,40.52],[122.265,40.48],[122.222,40.481],[122.251,40.446],[122.187,40.423],[122.199,40.382],[122.136,40.375],[122.11,40.316],[122.04,40.322],[122.027,40.245],[121.94,40.242],[121.995,40.128],[121.825,40.026],[121.764,39.934],[121.542,39.874],[121.472,39.802],[121.503,39.703],[121.45,39.625],[121.227,39.555],[121.302,39.476],[121.246,39.457],[121.27,39.374],[121.433,39.358],[121.515,39.287],[121.725,39.364],[121.673,39.276],[121.589,39.263],[121.631,39.226],[121.591,39.229],[121.604,39.166],[121.682,39.118],[121.632,39.078],[121.591,39.155],[121.562,39.127],[121.599,39.099],[121.508,39.034],[121.371,39.06],[121.317,39.012],[121.341,38.981],[121.089,38.922],[121.138,38.723],[121.36,38.822],[121.709,38.873],[121.719,38.92],[121.619,38.95],[121.671,39.01],[121.79,39.023],[121.863,38.943],[121.921,38.97],[121.853,39.036],[122.062,39.06],[122.048,39.101],[122.167,39.159],[122.117,39.214],[122.413,39.412],[122.533,39.42],[122.861,39.605],[122.973,39.595],[123.011,39.655],[123.213,39.666],[123.287,39.704],[123.275,39.754],[123.393,39.724],[123.534,39.788]]]},{name:`吉林`,full:`吉林省`,hl:!1,center:[126.171208,43.703954],rings:[[[129.601,42.415],[129.627,42.463],[129.704,42.427],[129.749,42.471],[129.746,42.585],[129.787,42.615],[129.754,42.646],[129.797,42.682],[129.767,42.708],[129.897,43.002],[130.108,42.99],[130.144,42.976],[130.102,42.923],[130.278,42.892],[130.257,42.711],[130.388,42.603],[130.447,42.607],[130.435,42.553],[130.523,42.622],[130.581,42.435],[130.646,42.427],[130.565,42.507],[130.634,42.603],[130.593,42.671],[130.407,42.732],[130.802,42.88],[131.043,42.863],[131.034,42.929],[131.146,42.937],[131.103,43.021],[131.208,43.132],[131.206,43.237],[131.314,43.393],[131.319,43.5],[131.143,43.426],[131.027,43.509],[130.864,43.438],[130.823,43.503],[130.623,43.59],[130.631,43.622],[130.413,43.653],[130.423,43.745],[130.338,43.964],[130.365,44.044],[130.079,43.835],[130.028,43.852],[130.018,43.962],[129.951,44.027],[129.868,44.013],[129.743,43.876],[129.468,43.875],[129.348,43.798],[129.255,43.819],[129.212,43.785],[129.23,43.593],[129.014,43.523],[128.878,43.54],[128.729,43.737],[128.761,43.857],[128.636,43.891],[128.64,43.948],[128.472,44.158],[128.447,44.34],[128.482,44.376],[128.373,44.514],[128.211,44.432],[128.173,44.347],[128.05,44.35],[128.102,44.293],[128.064,44.251],[128.104,44.23],[128.06,44.169],[128.091,44.133],[127.913,44.065],[127.783,44.072],[127.729,44.099],[127.712,44.199],[127.682,44.167],[127.59,44.228],[127.624,44.278],[127.486,44.41],[127.465,44.517],[127.536,44.522],[127.557,44.575],[127.182,44.645],[127.05,44.567],[126.984,44.824],[127.093,44.947],[126.964,45.132],[126.793,45.135],[126.569,45.253],[126.235,45.14],[125.998,45.162],[125.695,45.352],[125.688,45.514],[125.425,45.486],[125.362,45.393],[125.319,45.423],[125.097,45.383],[125.026,45.493],[124.911,45.536],[124.886,45.443],[124.399,45.441],[124.349,45.547],[124.264,45.555],[124.227,45.634],[124.162,45.616],[124.135,45.69],[124.002,45.771],[124.064,45.802],[124.061,45.886],[123.996,45.907],[123.974,45.974],[124.04,46.02],[123.96,46.288],[123.918,46.257],[123.896,46.304],[123.57,46.224],[123.248,46.273],[123.129,46.211],[123.113,46.13],[123.046,46.1],[122.793,46.073],[122.829,45.912],[122.752,45.835],[122.792,45.766],[122.742,45.705],[122.672,45.7],[122.556,45.822],[122.505,45.787],[122.446,45.917],[122.362,45.917],[122.373,45.856],[122.254,45.798],[122.091,45.882],[122.04,45.959],[121.844,46.024],[121.762,45.999],[121.817,45.875],[121.644,45.752],[121.714,45.702],[121.97,45.693],[122.003,45.508],[122.168,45.44],[122.147,45.296],[122.239,45.276],[122.23,45.207],[122.11,45.142],[122.049,44.913],[122.1,44.782],[122.169,44.77],[122.102,44.736],[122.162,44.728],[122.103,44.674],[122.131,44.578],[122.286,44.478],[122.271,44.256],[122.483,44.237],[122.675,44.286],[122.761,44.37],[123.125,44.51],[123.129,44.367],[123.387,44.162],[123.331,44.029],[123.401,43.979],[123.371,43.97],[123.52,43.708],[123.512,43.593],[123.421,43.598],[123.453,43.546],[123.305,43.551],[123.42,43.41],[123.486,43.445],[123.608,43.366],[123.704,43.37],[123.748,43.472],[123.858,43.459],[123.896,43.361],[124.033,43.281],[124.276,43.233],[124.274,43.179],[124.426,43.076],[124.333,42.997],[124.442,42.959],[124.372,42.881],[124.466,42.847],[124.587,42.905],[124.687,43.051],[124.883,43.134],[124.841,43.032],[124.874,42.79],[124.975,42.803],[125.011,42.632],[125.097,42.622],[125.069,42.499],[125.186,42.428],[125.175,42.308],[125.299,42.29],[125.306,42.146],[125.368,42.183],[125.49,42.136],[125.292,41.959],[125.352,41.928],[125.308,41.925],[125.317,41.677],[125.447,41.676],[125.548,41.401],[125.637,41.344],[125.647,41.264],[125.749,41.245],[125.738,41.178],[125.791,41.168],[125.584,40.892],[125.652,40.916],[125.708,40.867],[125.778,40.898],[125.817,40.867],[126.041,40.929],[126.125,41.092],[126.295,41.172],[126.437,41.353],[126.539,41.367],[126.497,41.407],[126.608,41.669],[126.688,41.674],[126.724,41.711],[126.695,41.751],[126.8,41.703],[126.931,41.813],[127.051,41.745],[127.038,41.677],[127.178,41.6],[127.119,41.54],[127.254,41.487],[127.547,41.477],[127.637,41.414],[128,41.443],[128.115,41.364],[128.204,41.411],[128.318,41.576],[128.113,41.794],[128.107,41.95],[128.034,42],[128.598,42.007],[128.738,42.05],[128.953,42.026],[128.971,42.097],[129.216,42.208],[129.183,42.262],[129.26,42.336],[129.241,42.376],[129.326,42.39],[129.368,42.459],[129.546,42.362],[129.601,42.415]]]},{name:`黑龙江`,full:`黑龙江省`,hl:!1,center:[127.693027,48.040465],rings:[[[123.57,46.224],[123.85,46.302],[123.918,46.257],[123.96,46.288],[124.04,46.02],[123.989,46.012],[123.969,45.937],[124.067,45.84],[124.002,45.771],[124.135,45.69],[124.162,45.616],[124.227,45.634],[124.264,45.555],[124.349,45.547],[124.399,45.441],[124.886,45.443],[124.911,45.536],[125.026,45.493],[125.097,45.383],[125.319,45.423],[125.362,45.393],[125.425,45.486],[125.688,45.514],[125.695,45.352],[125.998,45.162],[126.235,45.14],[126.569,45.253],[126.793,45.135],[126.964,45.132],[127.093,44.947],[126.984,44.824],[127.05,44.567],[127.182,44.645],[127.557,44.575],[127.536,44.522],[127.465,44.517],[127.486,44.41],[127.624,44.278],[127.59,44.228],[127.682,44.167],[127.712,44.199],[127.729,44.099],[127.783,44.072],[127.913,44.065],[128.091,44.133],[128.06,44.169],[128.104,44.23],[128.064,44.251],[128.102,44.293],[128.05,44.35],[128.173,44.347],[128.211,44.432],[128.373,44.514],[128.482,44.376],[128.447,44.34],[128.472,44.158],[128.64,43.948],[128.636,43.891],[128.761,43.857],[128.729,43.737],[128.878,43.54],[129.014,43.523],[129.23,43.593],[129.212,43.785],[129.255,43.819],[129.348,43.798],[129.468,43.875],[129.743,43.876],[129.868,44.013],[129.951,44.027],[130.018,43.962],[130.028,43.852],[130.079,43.835],[130.365,44.044],[130.338,43.964],[130.423,43.745],[130.413,43.653],[130.631,43.622],[130.623,43.59],[130.823,43.503],[130.864,43.438],[131.027,43.509],[131.143,43.426],[131.305,43.502],[131.2,43.532],[131.239,43.67],[131.217,43.836],[131.266,44.035],[131.311,44.047],[131.112,44.71],[130.965,44.851],[131.161,44.948],[131.208,44.914],[131.355,44.99],[131.502,44.978],[131.696,45.132],[131.651,45.16],[131.682,45.215],[131.794,45.212],[131.888,45.342],[132.004,45.254],[132.954,45.023],[133.139,45.127],[133.096,45.247],[133.144,45.431],[133.204,45.517],[133.471,45.631],[133.485,45.692],[133.446,45.705],[133.505,45.786],[133.468,45.835],[133.677,45.943],[133.746,46.075],[133.706,46.163],[133.91,46.254],[133.923,46.331],[133.869,46.338],[133.949,46.401],[133.85,46.475],[133.92,46.596],[134.011,46.638],[134.064,46.98],[134.143,47.093],[134.222,47.105],[134.23,47.182],[134.157,47.248],[134.177,47.326],[134.307,47.429],[134.568,47.478],[134.78,47.716],[134.679,47.819],[134.677,47.885],[134.554,47.982],[134.679,48.256],[135.009,48.366],[135.096,48.438],[134.928,48.452],[134.764,48.37],[134.502,48.419],[134.204,48.382],[133.741,48.255],[133.693,48.187],[133.573,48.182],[133.546,48.121],[133.13,48.135],[132.819,47.937],[132.661,47.945],[132.687,47.885],[132.558,47.718],[132.372,47.765],[132.243,47.71],[132.001,47.712],[131.977,47.673],[131.69,47.707],[131.59,47.661],[131.544,47.736],[131.456,47.747],[131.03,47.695],[130.966,47.733],[130.891,47.927],[130.666,48.105],[130.845,48.296],[130.748,48.404],[130.767,48.508],[130.621,48.496],[130.605,48.594],[130.538,48.612],[130.681,48.881],[130.502,48.866],[130.412,48.905],[130.238,48.869],[129.937,49.04],[129.848,49.181],[129.754,49.209],[129.73,49.288],[129.563,49.3],[129.518,49.424],[129.39,49.433],[129.358,49.356],[129.215,49.399],[129.085,49.36],[129.014,49.457],[128.761,49.482],[128.813,49.558],[128.744,49.595],[128.185,49.54],[127.815,49.594],[127.678,49.698],[127.675,49.764],[127.532,49.826],[127.502,50.057],[127.587,50.138],[127.603,50.239],[127.332,50.341],[127.364,50.438],[127.294,50.466],[127.371,50.581],[127.295,50.663],[127.295,50.755],[126.923,51.062],[126.9,51.201],[126.984,51.319],[126.887,51.322],[126.909,51.247],[126.821,51.281],[126.837,51.345],[126.93,51.359],[126.909,51.407],[126.792,51.432],[126.837,51.536],[126.679,51.602],[126.741,51.642],[126.734,51.711],[126.463,51.948],[126.451,52.028],[126.514,52.037],[126.556,52.136],[126.307,52.206],[126.433,52.299],[126.328,52.31],[126.354,52.389],[126.269,52.475],[126.205,52.466],[126.213,52.525],[126.147,52.573],[126.031,52.576],[125.969,52.63],[126.062,52.673],[126.044,52.74],[126.117,52.768],[126.052,52.8],[125.967,52.76],[125.828,52.899],[125.679,52.861],[125.665,52.914],[125.737,52.944],[125.743,52.994],[125.614,53.084],[125.531,53.051],[125.504,53.095],[125.142,53.204],[124.888,53.164],[124.909,53.118],[124.872,53.099],[124.679,53.207],[124.436,53.224],[124.239,53.38],[124.126,53.348],[123.865,53.49],[123.698,53.499],[123.621,53.55],[123.531,53.507],[123.558,53.532],[123.517,53.558],[123.499,53.498],[123.275,53.563],[122.895,53.463],[122.435,53.445],[122.35,53.506],[122.111,53.427],[121.698,53.393],[121.499,53.337],[121.68,53.241],[121.665,53.17],[121.753,53.148],[121.818,53.062],[121.61,52.892],[121.591,52.825],[121.182,52.599],[121.64,52.444],[121.714,52.318],[121.841,52.283],[121.948,52.298],[122.169,52.514],[122.447,52.394],[122.478,52.296],[122.787,52.252],[122.738,52.153],[122.629,52.137],[122.625,52.067],[122.684,51.975],[122.726,51.979],[122.706,51.89],[122.874,51.561],[122.854,51.478],[123.003,51.312],[123.294,51.254],[123.44,51.271],[123.662,51.319],[123.711,51.398],[123.926,51.301],[124.239,51.345],[124.407,51.272],[124.49,51.381],[124.627,51.327],[124.864,51.38],[124.943,51.447],[124.929,51.498],[125.047,51.53],[125.129,51.659],[125.352,51.624],[125.762,51.226],[125.85,51.214],[125.865,51.146],[125.994,51.119],[125.976,51.084],[126.059,51.044],[126.068,50.967],[125.998,50.873],[125.962,50.901],[125.847,50.77],[125.759,50.747],[125.826,50.704],[125.789,50.68],[125.829,50.562],[125.536,50.42],[125.547,50.359],[125.464,50.296],[125.449,50.216],[125.335,50.161],[125.376,50.137],[125.259,50.104],[125.328,50.066],[125.19,49.96],[125.246,49.872],[125.178,49.83],[125.223,49.799],[125.22,49.669],[125.127,49.655],[125.23,49.595],[125.211,49.54],[125.271,49.454],[125.22,49.189],[125.117,49.126],[124.907,49.184],[124.809,49.116],[124.808,49.021],[124.654,48.834],[124.602,48.633],[124.521,48.556],[124.556,48.468],[124.508,48.446],[124.519,48.378],[124.58,48.297],[124.53,48.147],[124.416,48.088],[124.475,48.174],[124.419,48.182],[124.422,48.246],[124.318,48.351],[124.314,48.504],[124.259,48.536],[123.579,48.045],[123.3,47.954],[123.162,47.782],[122.594,47.547],[122.507,47.401],[122.418,47.351],[122.616,47.124],[122.853,47.072],[122.774,46.974],[122.791,46.942],[122.895,46.96],[122.907,46.807],[123.026,46.719],[123.164,46.74],[123.222,46.85],[123.374,46.838],[123.405,46.935],[123.302,47],[123.424,46.934],[123.528,46.945],[123.507,46.827],[123.563,46.826],[123.605,46.891],[123.603,46.689],[123.276,46.661],[123.228,46.588],[123.046,46.618],[123.053,46.58],[123.002,46.575],[123.012,46.435],[123.178,46.248],[123.499,46.26],[123.57,46.224]]]},{name:`上海`,full:`上海市`,hl:!1,center:[121.438737,31.072559],rings:[[[120.901,31.017],[120.989,31.014],[120.992,30.837],[121.038,30.814],[121.098,30.857],[121.123,30.779],[121.217,30.786],[121.275,30.677],[121.681,30.819],[121.905,30.814],[121.944,30.777],[121.994,30.863],[121.977,31.016],[121.722,31.304],[121.344,31.512],[121.242,31.493],[121.114,31.375],[121.143,31.275],[121.09,31.292],[121.06,31.245],[121.077,31.158],[120.881,31.135],[120.901,31.017]],[[121.975,31.617],[121.6,31.703],[121.323,31.868],[121.119,31.759],[121.372,31.553],[121.434,31.591],[121.819,31.438],[121.982,31.464],[121.975,31.617]],[[121.796,31.33],[121.742,31.407],[121.51,31.482],[121.796,31.33]],[[121.802,31.357],[121.841,31.295],[122.098,31.256],[122.123,31.307],[121.802,31.357]]]},{name:`江苏`,full:`江苏省`,hl:!0,center:[119.486506,32.983991],rings:[[[117.312,34.562],[117.273,34.557],[117.304,34.542],[117.268,34.533],[117.273,34.5],[117.253,34.487],[117.248,34.451],[117.166,34.434],[117.139,34.527],[117.152,34.559],[117.104,34.649],[117.073,34.639],[117.062,34.676],[117.07,34.714],[117.022,34.759],[116.969,34.772],[116.951,34.811],[116.979,34.815],[116.966,34.845],[116.929,34.843],[116.922,34.895],[116.858,34.929],[116.822,34.93],[116.816,34.965],[116.789,34.975],[116.781,34.917],[116.678,34.939],[116.622,34.94],[116.614,34.923],[116.558,34.909],[116.445,34.896],[116.408,34.851],[116.403,34.756],[116.369,34.749],[116.364,34.715],[116.392,34.71],[116.374,34.64],[116.43,34.651],[116.433,34.63],[116.477,34.615],[116.491,34.574],[116.594,34.512],[116.592,34.494],[116.662,34.473],[116.723,34.472],[116.774,34.454],[116.783,34.43],[116.828,34.389],[116.909,34.408],[116.969,34.389],[116.961,34.364],[116.983,34.348],[116.969,34.284],[117.051,34.221],[117.025,34.167],[117.047,34.152],[117.124,34.128],[117.131,34.102],[117.192,34.069],[117.257,34.066],[117.277,34.079],[117.312,34.068],[117.357,34.088],[117.404,34.032],[117.435,34.028],[117.515,34.061],[117.543,34.039],[117.569,33.985],[117.613,34],[117.629,34.029],[117.671,33.992],[117.673,33.935],[117.715,33.879],[117.754,33.891],[117.759,33.874],[117.74,33.758],[117.725,33.75],[117.75,33.711],[117.791,33.734],[117.844,33.736],[117.902,33.72],[117.973,33.75],[118.02,33.739],[118.066,33.766],[118.118,33.766],[118.161,33.736],[118.168,33.663],[118.112,33.617],[118.118,33.595],[118.107,33.475],[118.051,33.492],[118.027,33.455],[118.017,33.403],[118.029,33.375],[117.993,33.333],[117.974,33.279],[117.939,33.262],[117.942,33.225],[117.977,33.226],[117.989,33.181],[118.037,33.152],[118.038,33.135],[118.149,33.169],[118.178,33.218],[118.217,33.192],[118.22,33.114],[118.244,33.028],[118.245,32.998],[118.269,32.969],[118.304,32.969],[118.292,32.946],[118.252,32.937],[118.233,32.914],[118.25,32.848],[118.301,32.846],[118.3,32.783],[118.334,32.762],[118.363,32.771],[118.375,32.719],[118.411,32.716],[118.451,32.744],[118.484,32.721],[118.56,32.73],[118.572,32.72],[118.643,32.745],[118.707,32.72],[118.757,32.737],[118.738,32.773],[118.743,32.853],[118.81,32.854],[118.821,32.921],[118.847,32.922],[118.849,32.957],[118.896,32.958],[118.893,32.941],[118.934,32.939],[118.993,32.958],[119.021,32.956],[119.055,32.875],[119.113,32.823],[119.185,32.826],[119.212,32.708],[119.209,32.641],[119.231,32.607],[119.22,32.577],[119.153,32.558],[119.168,32.536],[119.142,32.5],[119.085,32.453],[119.041,32.515],[118.976,32.505],[118.922,32.557],[118.891,32.553],[118.908,32.592],[118.843,32.568],[118.821,32.604],[118.785,32.582],[118.757,32.604],[118.735,32.589],[118.719,32.614],[118.689,32.588],[118.659,32.594],[118.633,32.578],[118.597,32.601],[118.569,32.586],[118.564,32.562],[118.609,32.537],[118.592,32.481],[118.629,32.468],[118.691,32.472],[118.685,32.404],[118.703,32.329],[118.657,32.301],[118.675,32.25],[118.644,32.21],[118.511,32.194],[118.495,32.165],[118.501,32.122],[118.434,32.087],[118.394,32.076],[118.39,31.985],[118.364,31.93],[118.472,31.88],[118.467,31.858],[118.505,31.842],[118.482,31.778],[118.534,31.767],[118.522,31.743],[118.558,31.73],[118.572,31.746],[118.641,31.759],[118.654,31.73],[118.698,31.71],[118.643,31.672],[118.643,31.65],[118.736,31.633],[118.748,31.676],[118.774,31.683],[118.803,31.619],[118.859,31.624],[118.882,31.564],[118.886,31.519],[118.852,31.394],[118.824,31.376],[118.768,31.364],[118.746,31.373],[118.721,31.323],[118.726,31.282],[118.757,31.28],[118.795,31.229],[118.871,31.242],[119.105,31.235],[119.107,31.251],[119.158,31.295],[119.198,31.295],[119.198,31.27],[119.267,31.25],[119.294,31.263],[119.338,31.259],[119.35,31.301],[119.374,31.259],[119.36,31.213],[119.392,31.174],[119.439,31.177],[119.461,31.156],[119.533,31.159],[119.6,31.109],[119.678,31.168],[119.706,31.153],[119.716,31.17],[119.78,31.179],[119.81,31.149],[119.827,31.174],[119.878,31.161],[119.921,31.17],[119.946,31.106],[119.989,31.059],[120.001,31.027],[120.053,31.006],[120.111,30.956],[120.15,30.937],[120.224,30.927],[120.316,30.934],[120.371,30.949],[120.358,30.887],[120.423,30.903],[120.435,30.921],[120.442,30.861],[120.46,30.84],[120.489,30.764],[120.505,30.758],[120.564,30.836],[120.59,30.854],[120.655,30.847],[120.683,30.882],[120.713,30.885],[120.709,30.933],[120.685,30.955],[120.698,30.971],[120.746,30.962],[120.77,30.997],[120.821,31.007],[120.866,30.99],[120.901,31.017],[120.891,31.094],[120.859,31.1],[120.881,31.135],[120.93,31.141],[121.018,31.134],[121.077,31.158],[121.06,31.245],[121.09,31.292],[121.143,31.275],[121.13,31.344],[121.114,31.375],[121.143,31.392],[121.175,31.449],[121.242,31.493],[121.248,31.477],[121.344,31.512],[121.372,31.553],[121.289,31.617],[121.145,31.754],[121.119,31.759],[121.2,31.835],[121.265,31.864],[121.323,31.868],[121.385,31.833],[121.432,31.769],[121.499,31.753],[121.6,31.703],[121.643,31.698],[121.715,31.674],[121.975,31.617],[121.97,31.719],[121.889,31.866],[121.856,31.955],[121.772,32.033],[121.759,32.059],[121.525,32.136],[121.543,32.152],[121.459,32.177],[121.499,32.211],[121.494,32.264],[121.45,32.282],[121.426,32.431],[121.39,32.461],[121.352,32.474],[121.27,32.483],[121.153,32.529],[121.122,32.569],[121.077,32.576],[121.02,32.605],[120.962,32.612],[120.98,32.636],[120.964,32.683],[120.916,32.701],[120.953,32.714],[120.972,32.761],[120.981,32.86],[120.957,32.893],[120.933,33.006],[120.918,33.026],[120.872,33.047],[120.874,33.094],[120.843,33.21],[120.819,33.238],[120.834,33.275],[120.814,33.303],[120.77,33.307],[120.741,33.338],[120.717,33.437],[120.68,33.52],[120.584,33.668],[120.534,33.782],[120.486,33.859],[120.367,34.092],[120.348,34.179],[120.314,34.256],[120.312,34.307],[120.104,34.391],[119.963,34.459],[119.812,34.486],[119.782,34.516],[119.641,34.569],[119.611,34.593],[119.466,34.673],[119.526,34.734],[119.457,34.748],[119.382,34.752],[119.497,34.754],[119.44,34.785],[119.441,34.769],[119.379,34.764],[119.313,34.775],[119.272,34.798],[119.238,34.799],[119.217,34.828],[119.203,34.89],[119.215,34.926],[119.211,34.982],[119.238,35.049],[119.285,35.068],[119.292,35.029],[119.307,35.033],[119.293,35.069],[119.306,35.077],[119.287,35.115],[119.25,35.125],[119.217,35.107],[119.138,35.096],[119.115,35.055],[119.027,35.056],[118.943,35.041],[118.928,35.051],[118.863,35.026],[118.861,34.944],[118.805,34.873],[118.8,34.843],[118.772,34.794],[118.739,34.793],[118.719,34.745],[118.764,34.74],[118.784,34.723],[118.739,34.694],[118.69,34.678],[118.664,34.694],[118.608,34.694],[118.601,34.714],[118.546,34.706],[118.461,34.656],[118.474,34.623],[118.439,34.626],[118.425,34.595],[118.439,34.508],[118.416,34.474],[118.405,34.428],[118.38,34.415],[118.29,34.425],[118.277,34.405],[118.22,34.406],[118.218,34.379],[118.18,34.38],[118.178,34.453],[118.133,34.483],[118.165,34.505],[118.185,34.544],[118.079,34.57],[118.115,34.614],[118.084,34.656],[118.054,34.651],[117.952,34.678],[117.91,34.671],[117.903,34.644],[117.794,34.652],[117.791,34.583],[117.802,34.519],[117.684,34.547],[117.659,34.501],[117.61,34.491],[117.593,34.463],[117.538,34.467],[117.465,34.485],[117.403,34.551],[117.403,34.57],[117.371,34.585],[117.325,34.573],[117.312,34.562]]]},{name:`浙江`,full:`浙江省`,hl:!1,center:[120.109913,29.181466],rings:[[[118.434,28.288],[118.491,28.238],[118.72,28.312],[118.802,28.24],[118.771,28.189],[118.802,28.117],[118.719,28.064],[118.73,27.971],[118.818,27.917],[118.914,27.62],[118.869,27.54],[118.908,27.461],[119.021,27.498],[119.13,27.475],[119.148,27.425],[119.269,27.422],[119.36,27.525],[119.467,27.526],[119.501,27.65],[119.606,27.675],[119.644,27.664],[119.631,27.582],[119.709,27.514],[119.685,27.439],[119.769,27.308],[120.008,27.375],[120.053,27.339],[120.135,27.42],[120.263,27.433],[120.273,27.389],[120.341,27.4],[120.462,27.142],[120.546,27.157],[120.58,27.321],[120.665,27.358],[120.703,27.478],[120.635,27.577],[120.778,27.775],[120.84,27.759],[120.942,27.897],[121.152,27.816],[121.134,27.787],[121.192,27.823],[121.163,27.907],[121.056,27.9],[120.992,27.95],[121.059,28.096],[121.108,28.139],[121.141,28.031],[121.261,28.035],[121.489,28.302],[121.628,28.252],[121.669,28.333],[121.634,28.348],[121.693,28.407],[121.634,28.563],[121.541,28.656],[121.689,28.719],[121.687,28.863],[121.775,28.864],[121.608,29.169],[121.716,29.125],[121.768,29.167],[121.78,29.11],[121.966,29.053],[121.987,29.155],[121.948,29.193],[122.002,29.26],[121.945,29.284],[121.938,29.384],[121.993,29.452],[122,29.582],[121.966,29.636],[121.833,29.653],[122.14,29.902],[122.007,29.892],[121.971,29.955],[121.919,29.921],[121.721,29.993],[121.372,30.371],[121.225,30.405],[121.093,30.516],[121.058,30.564],[121.239,30.649],[121.272,30.724],[121.217,30.786],[121.123,30.779],[121.098,30.857],[121.038,30.814],[120.992,30.837],[120.989,31.014],[120.698,30.971],[120.713,30.885],[120.59,30.854],[120.505,30.758],[120.435,30.921],[120.358,30.887],[120.371,30.949],[120.111,30.956],[120.001,31.027],[119.921,31.17],[119.678,31.168],[119.624,31.13],[119.576,30.83],[119.48,30.772],[119.445,30.65],[119.39,30.686],[119.239,30.609],[119.237,30.547],[119.272,30.51],[119.326,30.533],[119.403,30.375],[119.201,30.291],[118.954,30.36],[118.88,30.315],[118.93,30.203],[118.853,30.167],[118.895,30.149],[118.895,29.938],[118.839,29.935],[118.741,29.815],[118.745,29.739],[118.5,29.576],[118.496,29.519],[118.33,29.495],[118.316,29.423],[118.193,29.395],[118.178,29.298],[118.078,29.291],[118.042,29.21],[118.038,29.102],[118.098,28.999],[118.228,28.942],[118.196,28.904],[118.27,28.919],[118.428,28.681],[118.415,28.497],[118.475,28.479],[118.432,28.402],[118.48,28.327],[118.434,28.288]],[[122.163,29.988],[122.322,29.94],[122.344,30.02],[122.294,30.101],[121.935,30.162],[122.028,29.991],[122.163,29.988]],[[122.163,30.33],[122.058,30.292],[122.232,30.235],[122.228,30.33],[122.163,30.33]],[[122.317,30.25],[122.417,30.239],[122.407,30.273],[122.317,30.25]],[[122.372,29.893],[122.416,29.829],[122.412,29.952],[122.331,29.938],[122.372,29.893]],[[122.43,30.409],[122.433,30.445],[122.278,30.472],[122.282,30.418],[122.43,30.409]],[[121.944,30.777],[121.997,30.659],[122.133,30.595],[122.011,30.669],[121.944,30.777]],[[122.183,29.651],[122.2,29.713],[122.084,29.783],[122.048,29.72],[122.183,29.651]],[[121.851,29.977],[121.933,29.995],[121.849,30.101],[121.851,29.977]]]},{name:`安徽`,full:`安徽省`,hl:!0,center:[117.226884,31.849254],rings:[[[116.6,34.014],[116.642,33.978],[116.643,33.897],[116.631,33.888],[116.567,33.908],[116.558,33.881],[116.486,33.87],[116.438,33.846],[116.437,33.801],[116.408,33.806],[116.394,33.783],[116.317,33.771],[116.263,33.73],[116.23,33.735],[116.156,33.71],[116.133,33.752],[116.1,33.783],[116.074,33.781],[116.056,33.805],[116.059,33.861],[115.982,33.917],[116,33.965],[115.958,34.008],[115.904,34.01],[115.877,34.029],[115.877,34.003],[115.85,34.005],[115.846,34.029],[115.809,34.062],[115.769,34.062],[115.736,34.077],[115.706,34.06],[115.658,34.061],[115.642,34.032],[115.607,34.03],[115.579,33.974],[115.578,33.95],[115.548,33.875],[115.632,33.87],[115.614,33.776],[115.577,33.788],[115.563,33.773],[115.602,33.719],[115.601,33.659],[115.64,33.585],[115.565,33.576],[115.511,33.553],[115.464,33.567],[115.423,33.557],[115.395,33.506],[115.367,33.523],[115.346,33.503],[115.346,33.45],[115.325,33.457],[115.315,33.431],[115.329,33.403],[115.314,33.377],[115.342,33.371],[115.365,33.336],[115.362,33.298],[115.335,33.298],[115.34,33.261],[115.301,33.204],[115.304,33.15],[115.29,33.132],[115.245,33.136],[115.195,33.121],[115.168,33.089],[115.041,33.087],[114.991,33.102],[114.966,33.147],[114.933,33.154],[114.903,33.13],[114.897,33.087],[114.913,33.083],[114.926,33.017],[114.892,33.02],[114.883,32.99],[114.916,32.971],[114.943,32.935],[115.009,32.94],[115.035,32.933],[115.03,32.907],[115.139,32.898],[115.156,32.865],[115.197,32.856],[115.19,32.812],[115.211,32.786],[115.19,32.771],[115.179,32.726],[115.183,32.667],[115.201,32.592],[115.243,32.593],[115.267,32.578],[115.306,32.583],[115.305,32.553],[115.411,32.575],[115.409,32.549],[115.498,32.492],[115.523,32.442],[115.571,32.419],[115.604,32.426],[115.626,32.405],[115.658,32.429],[115.668,32.41],[115.705,32.495],[115.742,32.476],[115.772,32.505],[115.789,32.469],[115.861,32.537],[115.891,32.576],[115.91,32.567],[115.876,32.542],[115.846,32.502],[115.883,32.488],[115.865,32.459],[115.899,32.391],[115.913,32.228],[115.942,32.166],[115.922,32.05],[115.929,32.003],[115.909,31.943],[115.92,31.92],[115.895,31.865],[115.894,31.832],[115.915,31.815],[115.886,31.776],[115.852,31.787],[115.808,31.77],[115.767,31.788],[115.731,31.767],[115.676,31.778],[115.554,31.695],[115.534,31.699],[115.495,31.673],[115.477,31.643],[115.485,31.609],[115.44,31.588],[115.416,31.526],[115.371,31.496],[115.39,31.45],[115.374,31.406],[115.393,31.39],[115.372,31.349],[115.407,31.338],[115.444,31.344],[115.473,31.265],[115.508,31.268],[115.54,31.232],[115.54,31.195],[115.586,31.144],[115.604,31.174],[115.655,31.211],[115.701,31.201],[115.779,31.112],[115.798,31.128],[115.838,31.127],[115.867,31.148],[115.888,31.109],[115.94,31.072],[115.939,31.047],[116.006,31.035],[116.015,31.012],[116.059,31.013],[116.072,30.957],[116.04,30.958],[115.976,30.932],[115.933,30.89],[115.865,30.864],[115.849,30.828],[115.864,30.816],[115.851,30.757],[115.783,30.752],[115.763,30.685],[115.814,30.637],[115.819,30.598],[115.849,30.602],[115.877,30.582],[115.888,30.543],[115.91,30.519],[115.895,30.453],[115.921,30.416],[115.885,30.38],[115.915,30.338],[115.903,30.314],[115.986,30.291],[115.998,30.253],[116.066,30.205],[116.056,30.181],[116.088,30.11],[116.079,30.062],[116.091,30.036],[116.074,29.97],[116.128,29.898],[116.135,29.82],[116.173,29.828],[116.228,29.817],[116.25,29.786],[116.281,29.789],[116.343,29.836],[116.468,29.896],[116.526,29.897],[116.552,29.91],[116.585,30.046],[116.621,30.073],[116.667,30.077],[116.72,30.054],[116.747,30.057],[116.784,30.031],[116.803,29.996],[116.831,30.005],[116.833,29.958],[116.869,29.98],[116.9,29.949],[116.883,29.894],[116.781,29.793],[116.762,29.802],[116.674,29.71],[116.699,29.708],[116.707,29.696],[116.705,29.689],[116.68,29.681],[116.652,29.637],[116.717,29.591],[116.722,29.565],[116.76,29.599],[116.781,29.57],[116.849,29.576],[116.874,29.61],[116.94,29.649],[116.975,29.657],[116.996,29.683],[117.042,29.681],[117.113,29.712],[117.108,29.752],[117.137,29.775],[117.123,29.799],[117.073,29.832],[117.127,29.862],[117.13,29.899],[117.172,29.921],[117.217,29.927],[117.246,29.915],[117.262,29.881],[117.253,29.835],[117.293,29.823],[117.339,29.848],[117.359,29.813],[117.382,29.841],[117.415,29.851],[117.409,29.802],[117.455,29.749],[117.454,29.688],[117.49,29.66],[117.53,29.654],[117.524,29.63],[117.543,29.589],[117.609,29.591],[117.648,29.615],[117.679,29.595],[117.69,29.556],[117.73,29.55],[117.795,29.571],[117.873,29.548],[117.934,29.549],[118.004,29.578],[118.043,29.566],[118.051,29.543],[118.095,29.534],[118.144,29.49],[118.128,29.472],[118.136,29.419],[118.193,29.395],[118.248,29.431],[118.316,29.423],[118.306,29.479],[118.33,29.495],[118.348,29.474],[118.382,29.505],[118.496,29.519],[118.5,29.576],[118.532,29.589],[118.574,29.638],[118.62,29.654],[118.647,29.643],[118.701,29.706],[118.745,29.739],[118.741,29.815],[118.841,29.891],[118.839,29.935],[118.895,29.938],[118.903,30.029],[118.879,30.065],[118.874,30.115],[118.895,30.149],[118.852,30.15],[118.853,30.167],[118.93,30.203],[118.905,30.216],[118.878,30.283],[118.88,30.315],[118.954,30.36],[118.989,30.332],[119.063,30.305],[119.092,30.324],[119.127,30.305],[119.201,30.291],[119.236,30.297],[119.247,30.341],[119.277,30.341],[119.326,30.372],[119.349,30.349],[119.403,30.375],[119.368,30.385],[119.335,30.448],[119.336,30.509],[119.326,30.533],[119.272,30.51],[119.237,30.547],[119.265,30.575],[119.239,30.609],[119.323,30.63],[119.343,30.664],[119.39,30.686],[119.408,30.645],[119.445,30.65],[119.483,30.704],[119.48,30.772],[119.527,30.779],[119.554,30.826],[119.576,30.83],[119.557,30.874],[119.564,30.919],[119.582,30.932],[119.58,30.967],[119.634,31.019],[119.629,31.086],[119.649,31.105],[119.624,31.13],[119.6,31.109],[119.533,31.159],[119.461,31.156],[119.439,31.177],[119.392,31.174],[119.36,31.213],[119.374,31.259],[119.35,31.301],[119.338,31.259],[119.294,31.263],[119.267,31.25],[119.198,31.27],[119.198,31.295],[119.158,31.295],[119.107,31.251],[119.105,31.235],[118.871,31.242],[118.795,31.229],[118.757,31.28],[118.726,31.282],[118.721,31.323],[118.746,31.373],[118.768,31.364],[118.824,31.376],[118.852,31.394],[118.884,31.5],[118.857,31.506],[118.866,31.519],[118.886,31.519],[118.882,31.564],[118.859,31.624],[118.803,31.619],[118.774,31.683],[118.748,31.676],[118.736,31.633],[118.643,31.65],[118.643,31.672],[118.698,31.71],[118.654,31.73],[118.641,31.759],[118.572,31.746],[118.558,31.73],[118.522,31.743],[118.534,31.767],[118.482,31.778],[118.505,31.842],[118.467,31.858],[118.472,31.88],[118.364,31.93],[118.39,31.985],[118.394,32.076],[118.434,32.087],[118.501,32.122],[118.495,32.165],[118.511,32.194],[118.644,32.21],[118.675,32.25],[118.657,32.301],[118.703,32.329],[118.685,32.404],[118.691,32.472],[118.629,32.468],[118.592,32.481],[118.609,32.537],[118.564,32.562],[118.569,32.586],[118.597,32.601],[118.633,32.578],[118.659,32.594],[118.689,32.588],[118.719,32.614],[118.735,32.589],[118.757,32.604],[118.785,32.582],[118.821,32.604],[118.843,32.568],[118.908,32.592],[118.891,32.553],[118.922,32.557],[118.976,32.505],[119.041,32.515],[119.085,32.453],[119.142,32.5],[119.168,32.536],[119.153,32.558],[119.22,32.577],[119.231,32.607],[119.209,32.641],[119.212,32.708],[119.185,32.826],[119.113,32.823],[119.055,32.875],[119.021,32.956],[118.993,32.958],[118.934,32.939],[118.893,32.941],[118.896,32.958],[118.849,32.957],[118.847,32.922],[118.821,32.921],[118.81,32.854],[118.743,32.853],[118.738,32.773],[118.757,32.737],[118.707,32.72],[118.643,32.745],[118.572,32.72],[118.56,32.73],[118.484,32.721],[118.451,32.744],[118.411,32.716],[118.375,32.719],[118.363,32.771],[118.334,32.762],[118.3,32.783],[118.301,32.846],[118.25,32.848],[118.233,32.914],[118.252,32.937],[118.292,32.946],[118.304,32.969],[118.269,32.969],[118.245,32.998],[118.244,33.028],[118.22,33.114],[118.217,33.192],[118.178,33.218],[118.149,33.169],[118.038,33.135],[118.037,33.152],[117.989,33.181],[117.977,33.226],[117.942,33.225],[117.939,33.262],[117.974,33.279],[117.993,33.333],[118.029,33.375],[118.017,33.403],[118.027,33.455],[118.051,33.492],[118.107,33.475],[118.118,33.595],[118.112,33.617],[118.168,33.663],[118.161,33.736],[118.118,33.766],[118.066,33.766],[118.02,33.739],[117.973,33.75],[117.902,33.72],[117.844,33.736],[117.791,33.734],[117.75,33.711],[117.725,33.75],[117.74,33.758],[117.759,33.874],[117.754,33.891],[117.715,33.879],[117.673,33.935],[117.671,33.992],[117.629,34.029],[117.613,34],[117.569,33.985],[117.543,34.039],[117.515,34.061],[117.435,34.028],[117.404,34.032],[117.357,34.088],[117.312,34.068],[117.277,34.079],[117.257,34.066],[117.192,34.069],[117.131,34.102],[117.124,34.128],[117.047,34.152],[117.025,34.167],[117.051,34.221],[116.969,34.284],[116.983,34.348],[116.961,34.364],[116.969,34.389],[116.909,34.408],[116.828,34.389],[116.783,34.43],[116.774,34.454],[116.723,34.472],[116.662,34.473],[116.592,34.494],[116.594,34.512],[116.491,34.574],[116.477,34.615],[116.433,34.63],[116.43,34.651],[116.374,34.64],[116.334,34.621],[116.325,34.601],[116.286,34.609],[116.248,34.552],[116.197,34.576],[116.191,34.536],[116.204,34.508],[116.178,34.496],[116.162,34.46],[116.179,34.43],[116.216,34.403],[116.213,34.382],[116.256,34.377],[116.302,34.342],[116.358,34.32],[116.372,34.266],[116.409,34.274],[116.457,34.269],[116.516,34.296],[116.562,34.286],[116.582,34.266],[116.545,34.242],[116.543,34.204],[116.566,34.169],[116.536,34.151],[116.528,34.123],[116.576,34.069],[116.6,34.014]],[[118.866,31.519],[118.857,31.506],[118.884,31.5],[118.886,31.519],[118.866,31.519]],[[116.699,29.708],[116.674,29.71],[116.654,29.695],[116.68,29.681],[116.705,29.689],[116.707,29.696],[116.699,29.708]]]},{name:`福建`,full:`福建省`,hl:!1,center:[118.006468,26.069925],rings:[[[119.005,24.97],[119.017,25.058],[118.945,25.029],[118.892,25.093],[118.975,25.115],[118.985,25.169],[118.916,25.257],[118.997,25.266],[118.99,25.202],[119.074,25.211],[119.029,25.14],[119.134,25.106],[119.119,25.013],[119.166,25.146],[119.108,25.194],[119.132,25.223],[119.269,25.16],[119.315,25.19],[119.295,25.237],[119.381,25.25],[119.145,25.388],[119.22,25.469],[119.256,25.489],[119.263,25.428],[119.353,25.412],[119.359,25.522],[119.453,25.494],[119.438,25.412],[119.491,25.443],[119.487,25.37],[119.549,25.366],[119.578,25.446],[119.597,25.335],[119.649,25.343],[119.67,25.436],[119.623,25.434],[119.675,25.468],[119.774,25.396],[119.764,25.434],[119.867,25.455],[119.811,25.507],[119.884,25.546],[119.79,25.614],[119.786,25.668],[119.684,25.593],[119.716,25.512],[119.675,25.475],[119.634,25.475],[119.587,25.592],[119.479,25.632],[119.473,25.662],[119.603,25.685],[119.628,25.872],[119.695,25.904],[119.724,26.012],[119.669,26.026],[119.604,26.169],[119.676,26.263],[119.803,26.269],[119.807,26.307],[119.955,26.353],[119.894,26.356],[119.836,26.434],[119.788,26.583],[119.578,26.622],[119.665,26.726],[119.874,26.643],[119.943,26.784],[120.062,26.769],[119.949,26.625],[119.852,26.595],[119.828,26.524],[120.138,26.638],[120.11,26.693],[120.162,26.718],[120.107,26.753],[120.136,26.798],[120.054,26.864],[120.126,26.921],[120.233,26.908],[120.283,27.09],[120.392,27.081],[120.462,27.142],[120.404,27.204],[120.43,27.259],[120.341,27.4],[120.273,27.389],[120.263,27.433],[120.135,27.42],[120.053,27.339],[120.008,27.375],[119.769,27.308],[119.685,27.439],[119.709,27.514],[119.631,27.582],[119.644,27.664],[119.606,27.675],[119.501,27.65],[119.467,27.526],[119.36,27.525],[119.269,27.422],[119.148,27.425],[119.13,27.475],[119.021,27.498],[118.908,27.461],[118.869,27.54],[118.914,27.62],[118.818,27.917],[118.73,27.971],[118.719,28.064],[118.802,28.117],[118.771,28.189],[118.802,28.24],[118.72,28.312],[118.491,28.238],[118.424,28.291],[118.314,28.222],[118.375,28.187],[118.356,28.092],[118.154,28.062],[118.097,27.971],[117.999,27.991],[117.856,27.946],[117.74,27.8],[117.61,27.863],[117.522,27.982],[117.342,27.856],[117.28,27.871],[117.296,27.764],[117.204,27.684],[117.115,27.692],[117.094,27.628],[117.041,27.67],[117.004,27.625],[117.017,27.563],[117.103,27.533],[117.105,27.331],[117.172,27.29],[117.045,27.147],[117.053,27.1],[116.937,27.019],[116.679,26.978],[116.549,26.84],[116.539,26.559],[116.638,26.477],[116.601,26.373],[116.52,26.41],[116.413,26.298],[116.392,26.171],[116.476,26.173],[116.489,26.114],[116.385,26.031],[116.37,25.963],[116.132,25.86],[116.181,25.779],[116.067,25.704],[116.008,25.319],[115.856,25.21],[115.928,25.05],[115.873,25.02],[115.925,24.961],[115.87,24.96],[116.068,24.85],[116.192,24.877],[116.244,24.794],[116.395,24.878],[116.418,24.841],[116.375,24.804],[116.485,24.72],[116.53,24.605],[116.601,24.654],[116.815,24.655],[116.759,24.546],[116.861,24.46],[116.933,24.22],[116.999,24.179],[116.93,24.065],[116.982,23.999],[116.982,23.856],[117.055,23.694],[117.193,23.629],[117.193,23.562],[117.302,23.55],[117.464,23.585],[117.501,23.704],[117.602,23.702],[117.672,23.878],[117.793,23.906],[118.019,24.197],[118.159,24.27],[118.049,24.418],[118.122,24.57],[118.243,24.512],[118.513,24.608],[118.558,24.512],[118.614,24.522],[118.68,24.582],[118.653,24.654],[118.786,24.777],[118.648,24.844],[118.989,24.879],[118.919,24.933],[119.014,24.941],[119.005,24.97]],[[118.412,24.515],[118.375,24.459],[118.298,24.478],[118.282,24.413],[118.33,24.382],[118.458,24.412],[118.452,24.507],[118.412,24.515]],[[119.471,25.197],[119.525,25.158],[119.567,25.21],[119.474,25.26],[119.471,25.197]],[[118.204,24.505],[118.145,24.561],[118.069,24.463],[118.143,24.421],[118.204,24.505]]]},{name:`江西`,full:`江西省`,hl:!1,center:[115.732975,27.636112],rings:[[[118.193,29.395],[118.136,29.419],[118.144,29.49],[118.004,29.578],[117.73,29.55],[117.648,29.615],[117.543,29.589],[117.53,29.654],[117.454,29.688],[117.415,29.851],[117.359,29.813],[117.339,29.848],[117.253,29.835],[117.217,29.927],[117.073,29.832],[117.137,29.775],[117.113,29.712],[116.849,29.576],[116.76,29.599],[116.722,29.565],[116.654,29.695],[116.9,29.949],[116.667,30.077],[116.585,30.046],[116.552,29.91],[116.281,29.789],[116.173,29.828],[115.91,29.724],[115.668,29.85],[115.512,29.84],[115.471,29.74],[115.286,29.618],[115.113,29.685],[115.154,29.51],[115.001,29.572],[114.94,29.494],[114.86,29.476],[114.889,29.436],[114.947,29.465],[114.895,29.398],[114.76,29.363],[114.673,29.396],[114.52,29.326],[114.342,29.328],[114.307,29.365],[114.259,29.344],[114.252,29.235],[114.063,29.205],[113.952,29.093],[113.974,28.938],[114.009,28.955],[114.077,28.834],[114.154,28.829],[114.132,28.607],[114.086,28.558],[114.218,28.485],[114.172,28.433],[114.252,28.396],[114.253,28.319],[114.108,28.183],[113.992,28.161],[114.026,28.031],[113.752,27.934],[113.763,27.799],[113.579,27.545],[113.627,27.5],[113.591,27.468],[113.617,27.346],[113.873,27.385],[113.873,27.29],[113.772,27.097],[113.927,26.949],[113.836,26.806],[113.861,26.664],[114.109,26.57],[114.085,26.406],[114.031,26.377],[114.029,26.266],[113.949,26.193],[113.963,26.151],[114.181,26.215],[114.238,26.152],[114.044,26.077],[114.008,26.016],[114.028,25.893],[113.914,25.701],[113.983,25.599],[113.945,25.442],[114.003,25.443],[113.983,25.415],[114.05,25.364],[114.04,25.251],[114.19,25.317],[114.383,25.317],[114.541,25.417],[114.743,25.275],[114.686,25.173],[114.736,25.122],[114.561,25.077],[114.396,24.951],[114.336,24.749],[114.169,24.69],[114.191,24.657],[114.391,24.564],[114.429,24.486],[114.665,24.584],[114.705,24.526],[114.73,24.609],[114.847,24.603],[114.869,24.562],[114.909,24.661],[115.057,24.703],[115.105,24.668],[115.27,24.75],[115.359,24.735],[115.413,24.793],[115.556,24.684],[115.57,24.622],[115.671,24.605],[115.689,24.545],[115.844,24.562],[115.756,24.749],[115.824,24.909],[115.862,24.864],[115.907,24.88],[115.87,24.96],[115.925,24.961],[115.873,25.02],[115.928,25.05],[115.856,25.21],[116.008,25.319],[116.067,25.704],[116.181,25.779],[116.132,25.86],[116.37,25.963],[116.385,26.031],[116.489,26.114],[116.476,26.173],[116.392,26.171],[116.413,26.298],[116.52,26.41],[116.601,26.373],[116.638,26.477],[116.539,26.559],[116.549,26.84],[116.679,26.978],[116.937,27.019],[117.053,27.1],[117.045,27.147],[117.172,27.29],[117.105,27.331],[117.103,27.533],[117.017,27.563],[117.004,27.625],[117.041,27.67],[117.094,27.628],[117.115,27.692],[117.204,27.684],[117.296,27.764],[117.28,27.871],[117.342,27.856],[117.522,27.982],[117.61,27.863],[117.74,27.8],[117.856,27.946],[117.999,27.991],[118.097,27.971],[118.154,28.062],[118.356,28.092],[118.375,28.187],[118.314,28.222],[118.48,28.327],[118.432,28.402],[118.475,28.479],[118.415,28.497],[118.428,28.681],[118.364,28.813],[118.3,28.826],[118.27,28.919],[118.196,28.904],[118.228,28.942],[118.098,28.999],[118.038,29.102],[118.078,29.291],[118.178,29.298],[118.193,29.395]]]},{name:`山东`,full:`山东省`,hl:!0,center:[118.187759,36.376092],rings:[[[116.374,34.64],[116.392,34.71],[116.364,34.715],[116.369,34.749],[116.403,34.756],[116.408,34.851],[116.445,34.896],[116.558,34.909],[116.614,34.923],[116.622,34.94],[116.678,34.939],[116.781,34.917],[116.789,34.975],[116.816,34.965],[116.822,34.93],[116.858,34.929],[116.922,34.895],[116.929,34.843],[116.966,34.845],[116.979,34.815],[116.951,34.811],[116.969,34.772],[117.022,34.759],[117.07,34.714],[117.062,34.676],[117.073,34.639],[117.104,34.649],[117.152,34.559],[117.139,34.527],[117.166,34.434],[117.248,34.451],[117.253,34.487],[117.273,34.5],[117.268,34.533],[117.304,34.542],[117.273,34.557],[117.312,34.562],[117.325,34.573],[117.371,34.585],[117.403,34.57],[117.403,34.551],[117.465,34.485],[117.538,34.467],[117.593,34.463],[117.61,34.491],[117.659,34.501],[117.684,34.547],[117.802,34.519],[117.791,34.583],[117.794,34.652],[117.903,34.644],[117.91,34.671],[117.952,34.678],[118.054,34.651],[118.084,34.656],[118.115,34.614],[118.079,34.57],[118.185,34.544],[118.165,34.505],[118.133,34.483],[118.178,34.453],[118.18,34.38],[118.218,34.379],[118.22,34.406],[118.277,34.405],[118.29,34.425],[118.38,34.415],[118.405,34.428],[118.416,34.474],[118.439,34.508],[118.425,34.595],[118.439,34.626],[118.474,34.623],[118.461,34.656],[118.546,34.706],[118.601,34.714],[118.608,34.694],[118.664,34.694],[118.69,34.678],[118.739,34.694],[118.784,34.723],[118.764,34.74],[118.719,34.745],[118.739,34.793],[118.772,34.794],[118.8,34.843],[118.805,34.873],[118.861,34.944],[118.863,35.026],[118.928,35.051],[118.943,35.041],[119.027,35.056],[119.115,35.055],[119.138,35.096],[119.217,35.107],[119.25,35.125],[119.287,35.115],[119.306,35.077],[119.374,35.079],[119.428,35.121],[119.398,35.138],[119.411,35.232],[119.451,35.285],[119.493,35.319],[119.538,35.297],[119.544,35.348],[119.59,35.373],[119.58,35.407],[119.619,35.46],[119.663,35.563],[119.662,35.589],[119.718,35.615],[119.751,35.618],[119.772,35.579],[119.78,35.585],[119.793,35.615],[119.824,35.646],[119.83,35.62],[119.868,35.609],[119.925,35.637],[119.912,35.661],[119.95,35.73],[119.92,35.74],[119.926,35.76],[119.958,35.76],[120.014,35.714],[120.05,35.787],[120.032,35.812],[120.064,35.873],[120.112,35.885],[120.125,35.907],[120.153,35.907],[120.208,35.948],[120.17,35.888],[120.202,35.892],[120.209,35.918],[120.266,35.966],[120.305,35.972],[120.316,36.002],[120.29,36.017],[120.249,35.992],[120.257,36.025],[120.199,35.996],[120.235,36.031],[120.239,36.062],[120.181,36.067],[120.152,36.095],[120.117,36.103],[120.109,36.128],[120.143,36.144],[120.141,36.174],[120.181,36.204],[120.22,36.209],[120.224,36.191],[120.261,36.199],[120.263,36.182],[120.31,36.185],[120.297,36.226],[120.32,36.232],[120.362,36.196],[120.358,36.175],[120.286,36.047],[120.338,36.055],[120.43,36.057],[120.469,36.088],[120.547,36.092],[120.547,36.108],[120.594,36.101],[120.616,36.12],[120.643,36.115],[120.673,36.13],[120.712,36.127],[120.697,36.156],[120.697,36.204],[120.681,36.239],[120.686,36.279],[120.657,36.276],[120.663,36.332],[120.744,36.328],[120.694,36.39],[120.76,36.463],[120.829,36.467],[120.859,36.425],[120.849,36.403],[120.872,36.367],[120.918,36.418],[120.909,36.45],[120.938,36.448],[120.965,36.466],[120.954,36.508],[120.983,36.546],[120.962,36.563],[120.91,36.569],[120.885,36.601],[120.847,36.619],[120.882,36.627],[120.927,36.612],[120.956,36.576],[121.029,36.573],[121.078,36.608],[121.161,36.651],[121.252,36.671],[121.299,36.702],[121.358,36.713],[121.401,36.701],[121.394,36.738],[121.454,36.753],[121.507,36.804],[121.565,36.831],[121.549,36.808],[121.485,36.786],[121.532,36.736],[121.575,36.74],[121.556,36.765],[121.652,36.724],[121.632,36.801],[121.676,36.819],[121.726,36.826],[121.762,36.846],[121.768,36.875],[121.928,36.933],[121.965,36.938],[122.009,36.962],[122.043,36.872],[122.052,36.905],[122.093,36.914],[122.125,36.944],[122.141,36.938],[122.12,36.892],[122.176,36.894],[122.189,36.866],[122.174,36.843],[122.221,36.849],[122.344,36.828],[122.378,36.845],[122.384,36.866],[122.416,36.859],[122.455,36.879],[122.434,36.914],[122.483,36.914],[122.489,36.887],[122.532,36.901],[122.558,36.968],[122.545,37.005],[122.583,37.037],[122.575,37.054],[122.494,37.034],[122.467,37.037],[122.479,37.059],[122.484,37.129],[122.534,37.153],[122.581,37.148],[122.574,37.176],[122.624,37.191],[122.593,37.261],[122.567,37.26],[122.574,37.296],[122.611,37.34],[122.608,37.364],[122.651,37.389],[122.692,37.374],[122.714,37.392],[122.702,37.419],[122.676,37.413],[122.641,37.428],[122.554,37.407],[122.495,37.414],[122.487,37.435],[122.417,37.415],[122.337,37.414],[122.281,37.431],[122.287,37.445],[122.253,37.468],[122.194,37.456],[122.166,37.439],[122.132,37.499],[122.163,37.519],[122.15,37.557],[122.089,37.554],[122.075,37.541],[122.017,37.531],[121.998,37.495],[121.924,37.473],[121.773,37.466],[121.666,37.474],[121.636,37.494],[121.576,37.46],[121.571,37.441],[121.477,37.476],[121.46,37.523],[121.401,37.558],[121.396,37.59],[121.435,37.593],[121.391,37.625],[121.349,37.635],[121.358,37.597],[121.305,37.583],[121.217,37.583],[121.174,37.597],[121.149,37.626],[121.162,37.646],[121.143,37.661],[121.16,37.699],[121.136,37.724],[121.037,37.719],[120.994,37.759],[120.943,37.785],[120.941,37.82],[120.875,37.833],[120.839,37.824],[120.733,37.834],[120.657,37.793],[120.634,37.796],[120.591,37.764],[120.518,37.75],[120.455,37.758],[120.368,37.698],[120.228,37.694],[120.22,37.672],[120.269,37.659],[120.272,37.637],[120.215,37.621],[120.208,37.588],[120.247,37.557],[120.223,37.533],[120.144,37.482],[120.086,37.465],[120.065,37.449],[120.01,37.442],[119.95,37.42],[119.927,37.387],[119.844,37.377],[119.837,37.347],[119.883,37.311],[119.892,37.264],[119.865,37.234],[119.83,37.226],[119.808,37.196],[119.74,37.134],[119.687,37.144],[119.679,37.158],[119.576,37.128],[119.49,37.135],[119.428,37.126],[119.362,37.126],[119.328,37.116],[119.301,37.139],[119.299,37.197],[119.207,37.223],[119.191,37.26],[119.204,37.28],[119.137,37.231],[119.128,37.255],[119.091,37.258],[119.084,37.24],[119.054,37.255],[119.04,37.304],[119.001,37.319],[118.943,37.497],[118.94,37.527],[118.989,37.621],[119.024,37.642],[119.153,37.655],[119.236,37.652],[119.262,37.661],[119.28,37.693],[119.309,37.805],[119.292,37.87],[119.24,37.878],[119.212,37.839],[119.161,37.819],[119.128,37.848],[119.111,37.922],[119.002,37.996],[118.974,38.094],[118.908,38.139],[118.811,38.158],[118.704,38.151],[118.626,38.138],[118.608,38.129],[118.598,38.079],[118.552,38.056],[118.534,38.064],[118.505,38.114],[118.45,38.124],[118.431,38.106],[118.404,38.121],[118.331,38.125],[118.217,38.147],[118.178,38.186],[118.112,38.21],[118.045,38.214],[118.019,38.202],[117.897,38.279],[117.896,38.302],[117.849,38.255],[117.809,38.228],[117.789,38.181],[117.767,38.159],[117.771,38.135],[117.747,38.125],[117.705,38.076],[117.587,38.072],[117.557,38.046],[117.524,37.99],[117.513,37.943],[117.481,37.915],[117.439,37.854],[117.401,37.845],[117.32,37.862],[117.272,37.84],[117.185,37.85],[117.15,37.839],[117.075,37.849],[117.027,37.832],[116.919,37.846],[116.838,37.835],[116.805,37.849],[116.754,37.793],[116.754,37.77],[116.725,37.744],[116.679,37.729],[116.663,37.686],[116.605,37.625],[116.576,37.611],[116.483,37.522],[116.448,37.503],[116.434,37.473],[116.38,37.522],[116.367,37.566],[116.336,37.581],[116.295,37.554],[116.279,37.525],[116.29,37.484],[116.276,37.467],[116.241,37.49],[116.225,37.48],[116.243,37.448],[116.226,37.428],[116.285,37.404],[116.236,37.361],[116.193,37.366],[116.169,37.384],[116.106,37.369],[116.086,37.374],[116.024,37.36],[115.976,37.337],[115.97,37.24],[115.91,37.207],[115.912,37.177],[115.88,37.151],[115.888,37.112],[115.856,37.061],[115.777,36.993],[115.797,36.969],[115.758,36.902],[115.712,36.883],[115.684,36.808],[115.525,36.764],[115.48,36.76],[115.452,36.702],[115.42,36.687],[115.366,36.622],[115.355,36.627],[115.331,36.55],[115.273,36.497],[115.291,36.46],[115.317,36.454],[115.298,36.413],[115.34,36.398],[115.369,36.342],[115.367,36.309],[115.423,36.322],[115.417,36.293],[115.463,36.276],[115.475,36.248],[115.484,36.126],[115.449,36.047],[115.448,36.012],[115.363,35.972],[115.354,35.939],[115.364,35.894],[115.335,35.797],[115.363,35.78],[115.408,35.809],[115.46,35.868],[115.488,35.881],[115.495,35.896],[115.505,35.899],[115.513,35.89],[115.584,35.922],[115.649,35.923],[115.699,35.966],[115.775,35.975],[115.78,35.994],[115.817,36.013],[115.86,36.004],[115.899,36.027],[115.99,36.045],[116.058,36.105],[116.099,36.112],[116.063,36.029],[116.049,35.97],[115.985,35.974],[115.912,35.96],[115.908,35.927],[115.873,35.919],[115.883,35.88],[115.86,35.858],[115.817,35.844],[115.774,35.854],[115.735,35.833],[115.696,35.789],[115.694,35.754],[115.623,35.739],[115.529,35.734],[115.486,35.71],[115.383,35.569],[115.345,35.554],[115.356,35.49],[115.307,35.48],[115.237,35.423],[115.172,35.427],[115.126,35.418],[115.118,35.4],[115.092,35.416],[115.074,35.374],[115.043,35.377],[114.958,35.261],[114.929,35.245],[114.932,35.198],[114.861,35.182],[114.842,35.151],[114.883,35.099],[114.836,35.077],[114.819,35.052],[114.852,35.042],[114.824,35.012],[114.881,35.004],[114.924,34.969],[114.951,34.99],[115.008,34.988],[115.029,34.972],[115.075,35.001],[115.128,35.005],[115.157,34.958],[115.219,34.96],[115.205,34.914],[115.252,34.906],[115.239,34.878],[115.256,34.845],[115.317,34.859],[115.427,34.805],[115.449,34.744],[115.434,34.725],[115.461,34.637],[115.516,34.582],[115.553,34.569],[115.623,34.574],[115.686,34.556],[115.697,34.594],[115.788,34.581],[115.827,34.558],[115.838,34.568],[115.984,34.589],[115.991,34.615],[116.037,34.593],[116.101,34.606],[116.135,34.56],[116.157,34.554],[116.197,34.576],[116.248,34.552],[116.286,34.609],[116.325,34.601],[116.334,34.621],[116.374,34.64]],[[120.73,37.947],[120.721,37.917],[120.765,37.895],[120.765,37.924],[120.73,37.947]],[[120.693,37.984],[120.733,37.962],[120.725,37.988],[120.693,37.984]],[[120.99,36.413],[120.978,36.429],[120.951,36.415],[120.99,36.413]],[[120.75,38.15],[120.787,38.159],[120.742,38.199],[120.75,38.15]],[[120.919,38.345],[120.915,38.373],[120.895,38.363],[120.919,38.345]],[[120.159,35.765],[120.17,35.74],[120.193,35.757],[120.172,35.786],[120.159,35.765]],[[120.627,37.946],[120.632,37.981],[120.602,37.979],[120.627,37.946]],[[120.802,38.284],[120.848,38.306],[120.816,38.318],[120.802,38.284]],[[115.495,35.896],[115.488,35.881],[115.513,35.89],[115.505,35.899],[115.495,35.896]]]},{name:`河南`,full:`河南省`,hl:!0,center:[113.619717,33.902648],rings:[[[112.717,32.358],[112.776,32.359],[112.861,32.396],[112.889,32.377],[112.912,32.391],[112.992,32.378],[113.001,32.417],[113.026,32.425],[113.079,32.395],[113.108,32.399],[113.119,32.376],[113.156,32.381],[113.159,32.411],[113.212,32.432],[113.237,32.407],[113.334,32.336],[113.318,32.327],[113.354,32.295],[113.376,32.298],[113.429,32.271],[113.512,32.317],[113.625,32.361],[113.651,32.413],[113.7,32.421],[113.736,32.411],[113.768,32.37],[113.754,32.328],[113.769,32.301],[113.768,32.284],[113.749,32.273],[113.739,32.256],[113.753,32.216],[113.782,32.185],[113.75,32.116],[113.723,32.124],[113.729,32.083],[113.792,32.036],[113.758,31.99],[113.817,31.964],[113.806,31.929],[113.832,31.919],[113.831,31.879],[113.854,31.843],[113.894,31.847],[113.915,31.877],[113.958,31.853],[113.952,31.794],[113.989,31.75],[114.018,31.771],[114.087,31.782],[114.122,31.809],[114.134,31.843],[114.192,31.852],[114.236,31.833],[114.293,31.753],[114.35,31.756],[114.403,31.747],[114.444,31.728],[114.531,31.743],[114.55,31.767],[114.586,31.762],[114.571,31.661],[114.548,31.624],[114.561,31.561],[114.573,31.554],[114.617,31.585],[114.642,31.582],[114.696,31.526],[114.779,31.521],[114.789,31.48],[114.83,31.459],[114.87,31.479],[114.884,31.469],[114.962,31.495],[114.995,31.471],[115.023,31.528],[115.096,31.508],[115.115,31.53],[115.107,31.568],[115.125,31.599],[115.164,31.605],[115.213,31.555],[115.236,31.555],[115.218,31.515],[115.211,31.442],[115.253,31.422],[115.251,31.392],[115.301,31.384],[115.339,31.404],[115.374,31.406],[115.39,31.45],[115.371,31.496],[115.416,31.526],[115.44,31.588],[115.485,31.609],[115.477,31.643],[115.495,31.673],[115.534,31.699],[115.554,31.695],[115.676,31.778],[115.731,31.767],[115.767,31.788],[115.808,31.77],[115.852,31.787],[115.886,31.776],[115.915,31.815],[115.894,31.832],[115.895,31.865],[115.92,31.92],[115.909,31.943],[115.929,32.003],[115.922,32.05],[115.942,32.166],[115.913,32.228],[115.899,32.391],[115.865,32.459],[115.883,32.488],[115.846,32.502],[115.876,32.542],[115.91,32.567],[115.891,32.576],[115.861,32.537],[115.789,32.469],[115.772,32.505],[115.742,32.476],[115.705,32.495],[115.668,32.41],[115.658,32.429],[115.626,32.405],[115.604,32.426],[115.571,32.419],[115.523,32.442],[115.498,32.492],[115.409,32.549],[115.411,32.575],[115.305,32.553],[115.306,32.583],[115.267,32.578],[115.243,32.593],[115.201,32.592],[115.183,32.667],[115.179,32.726],[115.19,32.771],[115.211,32.786],[115.19,32.812],[115.197,32.856],[115.156,32.865],[115.139,32.898],[115.03,32.907],[115.035,32.933],[115.009,32.94],[114.943,32.935],[114.916,32.971],[114.883,32.99],[114.892,33.02],[114.926,33.017],[114.913,33.083],[114.897,33.087],[114.903,33.13],[114.933,33.154],[114.966,33.147],[114.991,33.102],[115.041,33.087],[115.168,33.089],[115.195,33.121],[115.245,33.136],[115.29,33.132],[115.304,33.15],[115.301,33.204],[115.34,33.261],[115.335,33.298],[115.362,33.298],[115.365,33.336],[115.342,33.371],[115.314,33.377],[115.329,33.403],[115.315,33.431],[115.325,33.457],[115.346,33.45],[115.346,33.503],[115.367,33.523],[115.395,33.506],[115.423,33.557],[115.464,33.567],[115.511,33.553],[115.565,33.576],[115.64,33.585],[115.601,33.659],[115.602,33.719],[115.563,33.773],[115.577,33.788],[115.614,33.776],[115.632,33.87],[115.548,33.875],[115.578,33.95],[115.579,33.974],[115.607,34.03],[115.642,34.032],[115.658,34.061],[115.706,34.06],[115.736,34.077],[115.769,34.062],[115.809,34.062],[115.846,34.029],[115.85,34.005],[115.877,34.003],[115.877,34.029],[115.904,34.01],[115.958,34.008],[116,33.965],[115.982,33.917],[116.059,33.861],[116.056,33.805],[116.074,33.781],[116.1,33.783],[116.133,33.752],[116.156,33.71],[116.23,33.735],[116.263,33.73],[116.317,33.771],[116.394,33.783],[116.408,33.806],[116.437,33.801],[116.438,33.846],[116.486,33.87],[116.558,33.881],[116.567,33.908],[116.631,33.888],[116.643,33.897],[116.642,33.978],[116.6,34.014],[116.576,34.069],[116.528,34.123],[116.536,34.151],[116.566,34.169],[116.543,34.204],[116.545,34.242],[116.582,34.266],[116.562,34.286],[116.516,34.296],[116.457,34.269],[116.409,34.274],[116.372,34.266],[116.358,34.32],[116.302,34.342],[116.256,34.377],[116.213,34.382],[116.216,34.403],[116.179,34.43],[116.162,34.46],[116.178,34.496],[116.204,34.508],[116.191,34.536],[116.197,34.576],[116.157,34.554],[116.135,34.56],[116.101,34.606],[116.037,34.593],[115.991,34.615],[115.984,34.589],[115.838,34.568],[115.827,34.558],[115.788,34.581],[115.697,34.594],[115.686,34.556],[115.623,34.574],[115.553,34.569],[115.516,34.582],[115.461,34.637],[115.434,34.725],[115.449,34.744],[115.427,34.805],[115.317,34.859],[115.256,34.845],[115.239,34.878],[115.252,34.906],[115.205,34.914],[115.219,34.96],[115.157,34.958],[115.128,35.005],[115.075,35.001],[115.029,34.972],[115.008,34.988],[114.951,34.99],[114.924,34.969],[114.881,35.004],[114.824,35.012],[114.852,35.042],[114.819,35.052],[114.836,35.077],[114.883,35.099],[114.842,35.151],[114.861,35.182],[114.932,35.198],[114.929,35.245],[114.958,35.261],[115.043,35.377],[115.074,35.374],[115.092,35.416],[115.118,35.4],[115.126,35.418],[115.172,35.427],[115.237,35.423],[115.307,35.48],[115.356,35.49],[115.345,35.554],[115.383,35.569],[115.486,35.71],[115.529,35.734],[115.623,35.739],[115.694,35.754],[115.696,35.789],[115.735,35.833],[115.774,35.854],[115.817,35.844],[115.86,35.858],[115.883,35.88],[115.873,35.919],[115.908,35.927],[115.912,35.96],[115.985,35.974],[116.049,35.97],[116.063,36.029],[116.099,36.112],[116.058,36.105],[115.99,36.045],[115.899,36.027],[115.86,36.004],[115.817,36.013],[115.78,35.994],[115.775,35.975],[115.699,35.966],[115.649,35.923],[115.584,35.922],[115.488,35.881],[115.46,35.868],[115.408,35.809],[115.363,35.78],[115.335,35.797],[115.364,35.894],[115.354,35.939],[115.363,35.972],[115.448,36.012],[115.449,36.047],[115.484,36.126],[115.484,36.149],[115.465,36.17],[115.451,36.152],[115.377,36.128],[115.366,36.099],[115.313,36.088],[115.302,36.128],[115.279,36.138],[115.242,36.191],[115.201,36.21],[115.184,36.193],[115.125,36.21],[115.105,36.172],[115.063,36.178],[115.049,36.162],[115.046,36.113],[114.998,36.07],[114.914,36.052],[114.927,36.089],[114.913,36.141],[114.858,36.145],[114.858,36.128],[114.772,36.125],[114.735,36.156],[114.72,36.14],[114.64,36.137],[114.589,36.118],[114.587,36.141],[114.533,36.172],[114.48,36.178],[114.466,36.198],[114.417,36.206],[114.408,36.225],[114.356,36.23],[114.345,36.256],[114.299,36.246],[114.258,36.264],[114.241,36.251],[114.21,36.273],[114.203,36.245],[114.17,36.246],[114.176,36.265],[114.129,36.28],[114.08,36.27],[114.043,36.303],[114.056,36.329],[114.003,36.334],[113.982,36.318],[113.963,36.354],[113.911,36.315],[113.882,36.354],[113.849,36.348],[113.857,36.329],[113.813,36.332],[113.755,36.366],[113.731,36.363],[113.736,36.325],[113.712,36.303],[113.716,36.262],[113.682,36.216],[113.698,36.182],[113.651,36.174],[113.706,36.149],[113.713,36.13],[113.655,36.125],[113.671,36.116],[113.686,36.056],[113.66,36.035],[113.695,36.027],[113.679,35.986],[113.649,35.994],[113.654,35.932],[113.638,35.87],[113.661,35.837],[113.583,35.818],[113.605,35.798],[113.588,35.737],[113.593,35.692],[113.623,35.675],[113.625,35.633],[113.578,35.633],[113.548,35.657],[113.558,35.622],[113.514,35.574],[113.499,35.532],[113.439,35.507],[113.392,35.507],[113.348,35.468],[113.312,35.481],[113.304,35.427],[113.243,35.449],[113.19,35.449],[113.185,35.409],[113.165,35.413],[113.149,35.351],[113.126,35.332],[113.067,35.354],[112.996,35.362],[112.986,35.34],[112.992,35.296],[112.936,35.284],[112.934,35.263],[112.884,35.244],[112.822,35.258],[112.773,35.208],[112.72,35.206],[112.628,35.263],[112.637,35.226],[112.513,35.218],[112.391,35.239],[112.368,35.22],[112.288,35.22],[112.305,35.252],[112.242,35.235],[112.217,35.253],[112.138,35.271],[112.059,35.28],[112.079,35.219],[112.04,35.194],[112.066,35.153],[112.056,35.099],[112.062,35.056],[112.039,35.046],[112.019,35.069],[111.978,35.067],[111.933,35.083],[111.81,35.062],[111.807,35.033],[111.74,35.005],[111.664,34.984],[111.682,34.951],[111.647,34.939],[111.618,34.895],[111.592,34.881],[111.57,34.843],[111.544,34.853],[111.503,34.83],[111.439,34.838],[111.389,34.815],[111.346,34.832],[111.292,34.807],[111.255,34.82],[111.233,34.79],[111.149,34.808],[111.118,34.757],[111.035,34.741],[110.976,34.706],[110.92,34.73],[110.903,34.669],[110.884,34.644],[110.825,34.616],[110.792,34.65],[110.749,34.652],[110.71,34.605],[110.611,34.608],[110.533,34.583],[110.488,34.611],[110.425,34.588],[110.379,34.601],[110.367,34.567],[110.405,34.558],[110.372,34.544],[110.361,34.517],[110.403,34.433],[110.473,34.393],[110.504,34.337],[110.452,34.293],[110.429,34.288],[110.44,34.243],[110.508,34.217],[110.552,34.213],[110.558,34.193],[110.622,34.177],[110.642,34.161],[110.614,34.113],[110.592,34.102],[110.587,34.023],[110.621,34.036],[110.671,33.966],[110.666,33.938],[110.627,33.925],[110.629,33.91],[110.587,33.888],[110.612,33.852],[110.663,33.853],[110.712,33.834],[110.741,33.799],[110.782,33.796],[110.817,33.751],[110.832,33.714],[110.824,33.686],[110.879,33.634],[110.967,33.609],[111.004,33.579],[111.003,33.536],[111.027,33.468],[110.996,33.436],[111.026,33.375],[111.026,33.331],[110.985,33.255],[111.047,33.203],[111.046,33.17],[111.089,33.182],[111.128,33.155],[111.146,33.124],[111.179,33.115],[111.193,33.072],[111.153,33.04],[111.222,33.043],[111.259,33.006],[111.274,32.972],[111.243,32.931],[111.255,32.884],[111.276,32.903],[111.293,32.859],[111.38,32.829],[111.413,32.757],[111.476,32.76],[111.458,32.726],[111.513,32.674],[111.53,32.628],[111.578,32.593],[111.641,32.635],[111.646,32.606],[111.713,32.606],[111.809,32.537],[111.858,32.529],[111.89,32.503],[111.949,32.517],[111.976,32.472],[112.015,32.45],[112.064,32.474],[112.081,32.426],[112.156,32.377],[112.15,32.412],[112.173,32.385],[112.206,32.393],[112.328,32.322],[112.36,32.366],[112.391,32.371],[112.449,32.343],[112.477,32.381],[112.531,32.377],[112.546,32.404],[112.589,32.381],[112.612,32.387],[112.645,32.368],[112.717,32.358]],[[113.768,32.284],[113.769,32.301],[113.749,32.273],[113.768,32.284]]]},{name:`湖北`,full:`湖北省`,hl:!1,center:[112.271301,30.987527],rings:[[[111.046,33.17],[110.961,33.254],[110.703,33.097],[110.594,33.168],[110.578,33.25],[110.471,33.171],[110.218,33.163],[110.165,33.209],[110.031,33.192],[109.62,33.275],[109.439,33.152],[109.795,33.067],[109.79,32.882],[109.989,32.886],[110.159,32.767],[110.157,32.683],[110.206,32.633],[110.154,32.593],[110.09,32.617],[110.018,32.547],[109.911,32.593],[109.632,32.6],[109.495,32.3],[109.593,32.219],[109.622,32.107],[109.591,32.013],[109.632,31.962],[109.585,31.9],[109.634,31.804],[109.586,31.727],[109.731,31.701],[109.765,31.603],[109.728,31.548],[109.97,31.509],[109.945,31.471],[110.119,31.41],[110.2,31.159],[110.12,31.089],[110.173,30.979],[110.082,30.8],[110.008,30.883],[109.895,30.9],[109.657,30.761],[109.574,30.647],[109.535,30.665],[109.436,30.596],[109.355,30.487],[109.3,30.63],[109.144,30.521],[109.093,30.579],[109.112,30.646],[109.043,30.656],[108.809,30.491],[108.744,30.495],[108.689,30.588],[108.568,30.469],[108.427,30.492],[108.402,30.377],[108.582,30.256],[108.514,30.058],[108.516,29.885],[108.371,29.841],[108.504,29.708],[108.601,29.864],[108.659,29.855],[108.691,29.69],[108.753,29.649],[108.786,29.692],[108.782,29.636],[108.844,29.658],[108.901,29.605],[108.867,29.471],[108.927,29.436],[108.919,29.326],[109.061,29.403],[109.112,29.361],[109.139,29.169],[109.274,29.122],[109.258,29.223],[109.352,29.285],[109.344,29.369],[109.391,29.372],[109.369,29.414],[109.434,29.531],[109.458,29.513],[109.516,29.626],[109.718,29.615],[109.779,29.758],[110.114,29.79],[110.372,29.633],[110.467,29.713],[110.563,29.713],[110.643,29.776],[110.499,29.912],[110.557,29.988],[110.498,30.055],[110.651,30.078],[110.712,30.033],[110.756,30.054],[110.747,30.113],[110.851,30.126],[110.924,30.111],[110.93,30.063],[111.242,30.04],[111.394,29.913],[111.811,29.901],[112.076,29.744],[112.066,29.681],[112.202,29.634],[112.244,29.659],[112.234,29.616],[112.303,29.586],[112.291,29.517],[112.44,29.634],[112.694,29.602],[112.794,29.736],[112.902,29.791],[112.945,29.683],[113.026,29.773],[112.912,29.607],[112.95,29.473],[113.057,29.523],[113.078,29.438],[113.145,29.449],[113.572,29.849],[113.547,29.676],[113.663,29.684],[113.739,29.579],[113.631,29.523],[113.755,29.447],[113.61,29.251],[113.693,29.226],[113.663,29.169],[113.696,29.077],[113.816,29.105],[113.898,29.029],[114.063,29.205],[114.252,29.235],[114.259,29.344],[114.307,29.365],[114.342,29.328],[114.52,29.326],[114.673,29.396],[114.76,29.363],[114.895,29.398],[114.947,29.465],[114.889,29.436],[114.86,29.476],[114.94,29.494],[115.001,29.572],[115.154,29.51],[115.113,29.685],[115.286,29.618],[115.471,29.74],[115.512,29.84],[115.668,29.85],[115.91,29.724],[116.135,29.82],[116.074,29.97],[116.066,30.205],[115.903,30.314],[115.91,30.519],[115.763,30.685],[115.783,30.752],[115.851,30.757],[115.865,30.864],[116.072,30.957],[116.059,31.013],[115.939,31.047],[115.867,31.148],[115.779,31.112],[115.655,31.211],[115.586,31.144],[115.444,31.344],[115.372,31.349],[115.374,31.406],[115.251,31.392],[115.211,31.442],[115.236,31.555],[115.164,31.605],[115.096,31.508],[115.023,31.528],[114.995,31.471],[114.83,31.459],[114.642,31.582],[114.561,31.561],[114.586,31.762],[114.293,31.753],[114.192,31.852],[113.989,31.75],[113.958,31.853],[113.854,31.843],[113.817,31.964],[113.758,31.99],[113.792,32.036],[113.723,32.124],[113.782,32.185],[113.736,32.411],[113.651,32.413],[113.429,32.271],[113.212,32.432],[113.156,32.381],[113.026,32.425],[112.992,32.378],[112.736,32.356],[112.546,32.404],[112.328,32.322],[111.641,32.635],[111.578,32.593],[111.458,32.726],[111.476,32.76],[111.413,32.757],[111.38,32.829],[111.255,32.884],[111.259,33.006],[111.153,33.04],[111.179,33.115],[111.046,33.17]]]},{name:`湖南`,full:`湖南省`,hl:!1,center:[111.711649,27.629216],rings:[[[112.024,24.74],[112.167,24.86],[112.175,24.928],[112.12,24.963],[112.187,25.182],[112.303,25.157],[112.365,25.192],[112.415,25.142],[112.443,25.186],[112.563,25.125],[112.66,25.133],[112.781,24.897],[112.874,24.897],[112.995,24.927],[112.968,25.142],[113.035,25.198],[112.993,25.247],[112.867,25.25],[112.855,25.338],[112.924,25.297],[113.249,25.514],[113.585,25.306],[113.753,25.363],[113.815,25.329],[113.887,25.437],[113.945,25.442],[113.983,25.599],[113.914,25.701],[114.028,25.893],[114.008,26.016],[114.044,26.077],[114.238,26.152],[114.181,26.215],[113.963,26.151],[113.949,26.193],[114.029,26.266],[114.031,26.377],[114.085,26.406],[114.109,26.57],[113.861,26.664],[113.836,26.806],[113.927,26.949],[113.772,27.097],[113.873,27.29],[113.873,27.385],[113.617,27.346],[113.591,27.468],[113.627,27.5],[113.579,27.545],[113.763,27.799],[113.752,27.934],[114.026,28.031],[113.992,28.161],[114.108,28.183],[114.253,28.319],[114.252,28.396],[114.172,28.433],[114.218,28.485],[114.086,28.558],[114.132,28.607],[114.154,28.829],[114.077,28.834],[114.009,28.955],[113.974,28.938],[113.942,29.047],[113.877,29.038],[113.816,29.105],[113.696,29.077],[113.663,29.169],[113.693,29.226],[113.61,29.251],[113.755,29.447],[113.631,29.523],[113.739,29.579],[113.663,29.684],[113.547,29.676],[113.572,29.849],[113.145,29.449],[113.078,29.438],[113.057,29.523],[112.95,29.473],[112.912,29.607],[113.026,29.773],[112.945,29.683],[112.924,29.767],[112.861,29.783],[112.694,29.602],[112.44,29.634],[112.291,29.517],[112.303,29.586],[112.234,29.616],[112.244,29.659],[112.202,29.634],[112.066,29.681],[112.076,29.744],[111.955,29.797],[111.966,29.833],[111.758,29.92],[111.394,29.913],[111.242,30.04],[110.93,30.063],[110.924,30.111],[110.851,30.126],[110.747,30.113],[110.756,30.054],[110.712,30.033],[110.651,30.078],[110.498,30.055],[110.557,29.988],[110.499,29.912],[110.643,29.776],[110.563,29.713],[110.467,29.713],[110.372,29.633],[110.114,29.79],[109.87,29.775],[109.755,29.733],[109.718,29.615],[109.516,29.626],[109.458,29.513],[109.434,29.531],[109.369,29.414],[109.391,29.372],[109.344,29.369],[109.352,29.285],[109.258,29.223],[109.24,29.086],[109.32,29.042],[109.235,28.882],[109.241,28.777],[109.299,28.747],[109.271,28.672],[109.193,28.636],[109.202,28.598],[109.307,28.621],[109.32,28.58],[109.274,28.538],[109.269,28.338],[109.388,28.268],[109.298,28.036],[109.379,28.035],[109.302,27.956],[109.367,27.722],[109.471,27.68],[109.462,27.568],[109.303,27.476],[109.3,27.424],[109.142,27.448],[109.104,27.337],[108.908,27.205],[108.927,27.161],[108.879,27.106],[108.791,27.084],[108.943,27.017],[109.033,27.104],[109.129,27.123],[109.101,27.069],[109.166,27.067],[109.239,27.149],[109.473,27.135],[109.455,27.069],[109.52,27.059],[109.555,26.947],[109.436,26.892],[109.51,26.878],[109.529,26.744],[109.597,26.756],[109.568,26.726],[109.448,26.76],[109.355,26.693],[109.284,26.698],[109.355,26.659],[109.407,26.533],[109.271,26.328],[109.351,26.264],[109.467,26.314],[109.439,26.239],[109.514,26.128],[109.45,26.102],[109.453,26.056],[109.513,25.998],[109.635,26.048],[109.73,25.99],[109.685,25.88],[109.811,25.878],[109.782,25.997],[109.814,26.041],[109.864,26.028],[109.97,26.195],[110.099,26.169],[110.065,26.05],[110.101,26.02],[110.182,26.06],[110.257,25.961],[110.326,25.975],[110.373,26.089],[110.495,26.166],[110.612,26.334],[110.742,26.314],[110.759,26.248],[110.836,26.256],[110.94,26.287],[110.974,26.386],[111.008,26.337],[111.278,26.272],[111.267,26.059],[111.19,25.953],[111.251,25.865],[111.376,25.906],[111.486,25.859],[111.433,25.846],[111.442,25.772],[111.309,25.72],[111.328,25.522],[111.279,25.423],[111.104,25.285],[111.113,25.217],[110.999,25.161],[110.969,24.975],[111.009,24.921],[111.101,24.946],[111.102,25.035],[111.275,25.151],[111.436,25.094],[111.416,25.048],[111.468,25.022],[111.433,24.98],[111.479,24.797],[111.452,24.666],[111.57,24.645],[111.708,24.789],[112.024,24.74]]]},{name:`广东`,full:`广东省`,hl:!1,center:[113.429919,23.334643],rings:[[[113.559,22.212],[113.67,22.417],[113.574,22.412],[113.74,22.534],[113.678,22.726],[113.734,22.736],[113.894,22.443],[113.976,22.511],[114.382,22.602],[114.507,22.439],[114.629,22.514],[114.559,22.584],[114.603,22.639],[114.515,22.655],[114.71,22.788],[114.75,22.764],[114.746,22.582],[114.866,22.592],[114.885,22.539],[115.076,22.788],[115.191,22.773],[115.19,22.819],[115.338,22.777],[115.381,22.684],[115.575,22.651],[115.609,22.753],[115.541,22.755],[115.654,22.866],[115.76,22.835],[115.829,22.735],[116.056,22.845],[116.104,22.817],[116.303,22.952],[116.505,22.931],[116.577,23.014],[116.566,23.134],[116.745,23.215],[116.807,23.201],[116.783,23.314],[116.889,23.502],[117.193,23.562],[117.193,23.629],[117.055,23.694],[116.956,23.922],[116.982,23.999],[116.935,24.127],[116.999,24.179],[116.933,24.22],[116.861,24.46],[116.759,24.546],[116.815,24.655],[116.601,24.654],[116.53,24.605],[116.485,24.72],[116.375,24.804],[116.418,24.841],[116.395,24.878],[116.244,24.794],[116.192,24.877],[116.068,24.85],[115.893,24.937],[115.907,24.88],[115.862,24.864],[115.824,24.909],[115.756,24.749],[115.844,24.562],[115.689,24.545],[115.671,24.605],[115.57,24.622],[115.556,24.684],[115.413,24.793],[115.359,24.735],[115.27,24.75],[115.105,24.668],[115.057,24.703],[114.909,24.661],[114.869,24.562],[114.847,24.603],[114.73,24.609],[114.705,24.526],[114.665,24.584],[114.429,24.486],[114.391,24.564],[114.301,24.579],[114.169,24.69],[114.336,24.749],[114.396,24.951],[114.561,25.077],[114.736,25.122],[114.686,25.173],[114.743,25.275],[114.541,25.417],[114.383,25.317],[114.19,25.317],[114.04,25.251],[114.05,25.364],[113.983,25.415],[114.003,25.443],[113.887,25.437],[113.815,25.329],[113.753,25.363],[113.585,25.306],[113.579,25.344],[113.45,25.359],[113.314,25.443],[113.311,25.49],[113.226,25.51],[112.924,25.297],[112.855,25.338],[112.867,25.25],[112.993,25.247],[113.035,25.198],[112.968,25.142],[112.995,24.927],[112.874,24.897],[112.781,24.897],[112.66,25.133],[112.563,25.125],[112.443,25.186],[112.415,25.142],[112.365,25.192],[112.303,25.157],[112.187,25.182],[112.12,24.963],[112.175,24.928],[112.167,24.86],[111.939,24.686],[111.937,24.596],[112.007,24.535],[111.985,24.468],[112.06,24.34],[111.986,24.257],[111.877,24.227],[111.941,23.988],[111.854,23.948],[111.811,23.807],[111.655,23.833],[111.622,23.726],[111.667,23.719],[111.615,23.639],[111.487,23.627],[111.48,23.533],[111.4,23.469],[111.353,23.285],[111.378,23.082],[111.434,23.036],[111.363,22.968],[111.359,22.889],[111.218,22.748],[111.058,22.73],[111.089,22.696],[111.056,22.649],[110.749,22.557],[110.741,22.464],[110.688,22.478],[110.787,22.283],[110.725,22.296],[110.647,22.221],[110.679,22.173],[110.629,22.149],[110.558,22.196],[110.506,22.143],[110.414,22.208],[110.378,22.165],[110.348,22.196],[110.392,21.894],[110,21.882],[109.945,21.844],[109.916,21.669],[109.84,21.637],[109.778,21.67],[109.743,21.616],[109.785,21.457],[109.904,21.43],[109.869,21.366],[109.758,21.347],[109.764,21.227],[109.675,21.137],[109.656,20.929],[109.745,20.621],[109.793,20.616],[109.84,20.489],[109.888,20.475],[109.861,20.377],[109.916,20.317],[109.909,20.237],[110.082,20.259],[110.169,20.22],[110.349,20.259],[110.541,20.42],[110.466,20.68],[110.392,20.683],[110.393,20.816],[110.184,20.892],[110.209,21.051],[110.242,21.016],[110.422,21.191],[110.626,21.216],[110.769,21.365],[110.929,21.376],[111.035,21.439],[111.283,21.486],[111.25,21.451],[111.286,21.419],[111.444,21.514],[111.651,21.512],[111.737,21.61],[111.795,21.611],[111.81,21.555],[111.973,21.603],[112.027,21.634],[111.954,21.668],[111.956,21.71],[112.137,21.794],[112.193,21.789],[112.239,21.702],[112.353,21.707],[112.446,21.803],[112.647,21.758],[112.793,21.921],[112.93,21.839],[113.048,21.957],[113.032,22.046],[113.087,22.126],[113.152,21.98],[113.267,21.872],[113.33,21.962],[113.567,22.075],[113.559,22.212]],[[117.025,23.438],[116.983,23.461],[116.952,23.42],[117.143,23.401],[117.129,23.483],[117.025,23.438]],[[112.853,21.741],[112.876,21.773],[112.841,21.777],[112.706,21.679],[112.78,21.672],[112.731,21.614],[112.775,21.564],[112.853,21.741]],[[112.531,21.584],[112.666,21.643],[112.664,21.714],[112.56,21.667],[112.531,21.584]],[[110.433,21.171],[110.545,21.084],[110.632,21.211],[110.433,21.171]],[[110.518,21.079],[110.306,21.088],[110.201,20.938],[110.408,20.99],[110.536,20.923],[110.56,21.061],[110.518,21.079]],[[116.77,20.772],[116.872,20.738],[116.89,20.683],[116.749,20.601],[116.863,20.589],[116.925,20.727],[116.886,20.776],[116.77,20.772]],[[115.943,21.098],[115.989,21.036],[116.067,21.041],[116.024,21.124],[115.943,21.098]]]},{name:`广西`,full:`广西壮族自治区`,hl:!1,center:[108.7944,23.833381],rings:[[[109.482,26.03],[109.34,25.834],[109.34,25.731],[109.207,25.74],[109.207,25.788],[109.148,25.742],[109.144,25.795],[109.095,25.805],[108.896,25.714],[108.9,25.682],[109.079,25.721],[109.031,25.63],[109.088,25.551],[109.025,25.512],[108.949,25.557],[108.815,25.527],[108.784,25.628],[108.689,25.623],[108.658,25.55],[108.689,25.533],[108.607,25.492],[108.625,25.308],[108.349,25.536],[108.252,25.43],[108.162,25.445],[108.193,25.405],[108.143,25.391],[108.115,25.21],[107.763,25.125],[107.762,25.229],[107.701,25.194],[107.66,25.316],[107.472,25.214],[107.49,25.277],[107.433,25.289],[107.421,25.393],[107.318,25.402],[107.337,25.461],[107.205,25.608],[107.064,25.559],[107.067,25.509],[106.964,25.438],[107.013,25.353],[106.976,25.233],[106.933,25.251],[106.888,25.182],[106.645,25.165],[106.591,25.088],[106.442,25.019],[106.145,24.954],[106.206,24.851],[106.173,24.76],[106.025,24.633],[105.942,24.725],[105.827,24.703],[105.497,24.809],[105.428,24.931],[105.268,24.929],[105.213,24.996],[105.078,24.918],[105.034,24.788],[104.899,24.753],[104.729,24.618],[104.53,24.732],[104.49,24.653],[104.52,24.535],[104.611,24.377],[104.709,24.321],[104.703,24.42],[104.766,24.46],[105.107,24.415],[105.188,24.347],[105.165,24.288],[105.243,24.209],[105.183,24.167],[105.26,24.061],[105.321,24.116],[105.493,24.017],[105.534,24.13],[105.595,24.138],[105.649,24.033],[105.765,24.074],[105.797,24.024],[105.892,24.04],[105.919,24.122],[106.05,24.09],[106.193,23.879],[106.137,23.795],[106.142,23.57],[106,23.448],[105.986,23.489],[105.852,23.527],[105.7,23.402],[105.638,23.404],[105.7,23.327],[105.649,23.346],[105.526,23.235],[105.575,23.066],[105.725,23.062],[105.879,22.917],[105.994,22.938],[106.02,22.991],[106.154,22.989],[106.287,22.867],[106.366,22.858],[106.526,22.947],[106.839,22.803],[106.769,22.739],[106.712,22.575],[106.614,22.602],[106.56,22.456],[106.563,22.346],[106.663,22.331],[106.689,22.26],[106.698,21.96],[106.738,22.008],[107,21.948],[107.06,21.915],[107.018,21.819],[107.242,21.703],[107.311,21.734],[107.388,21.594],[107.478,21.66],[107.487,21.596],[107.547,21.586],[107.864,21.651],[107.958,21.534],[108.108,21.509],[108.194,21.52],[108.156,21.551],[108.241,21.6],[108.23,21.491],[108.493,21.555],[108.626,21.68],[108.746,21.603],[108.881,21.627],[109.139,21.568],[109.142,21.512],[109.04,21.458],[109.139,21.389],[109.53,21.437],[109.612,21.557],[109.704,21.463],[109.785,21.457],[109.743,21.616],[109.778,21.67],[109.84,21.637],[109.916,21.669],[109.945,21.844],[110.129,21.903],[110.392,21.894],[110.348,22.196],[110.378,22.165],[110.414,22.208],[110.506,22.143],[110.558,22.196],[110.629,22.149],[110.679,22.173],[110.647,22.221],[110.725,22.296],[110.787,22.283],[110.688,22.478],[110.741,22.464],[110.749,22.557],[111.056,22.649],[111.089,22.696],[111.058,22.73],[111.218,22.748],[111.359,22.889],[111.363,22.968],[111.434,23.036],[111.378,23.082],[111.353,23.285],[111.4,23.469],[111.48,23.533],[111.487,23.627],[111.615,23.639],[111.667,23.719],[111.622,23.726],[111.655,23.833],[111.811,23.807],[111.854,23.948],[111.912,23.944],[111.941,23.988],[111.877,24.227],[111.986,24.257],[112.058,24.387],[111.928,24.629],[111.962,24.721],[112.024,24.74],[111.708,24.789],[111.57,24.645],[111.431,24.688],[111.479,24.797],[111.433,24.98],[111.468,25.022],[111.375,25.128],[111.322,25.105],[111.275,25.151],[111.102,25.035],[111.101,24.946],[111.009,24.921],[110.969,24.975],[110.999,25.161],[111.113,25.217],[111.104,25.285],[111.279,25.423],[111.328,25.522],[111.309,25.72],[111.442,25.772],[111.433,25.846],[111.486,25.859],[111.376,25.906],[111.251,25.865],[111.19,25.953],[111.267,26.059],[111.278,26.272],[111.008,26.337],[110.974,26.386],[110.94,26.287],[110.836,26.256],[110.759,26.248],[110.742,26.314],[110.612,26.334],[110.495,26.166],[110.373,26.089],[110.326,25.975],[110.257,25.961],[110.182,26.06],[110.101,26.02],[110.065,26.05],[110.099,26.169],[109.97,26.195],[109.864,26.028],[109.814,26.041],[109.782,25.997],[109.826,25.911],[109.779,25.866],[109.685,25.88],[109.73,25.99],[109.635,26.048],[109.513,25.998],[109.482,26.03]]]},{name:`海南`,full:`海南省`,hl:!1,center:[109.754859,19.189767],rings:[[[110.106,20.027],[109.997,19.98],[109.658,20.012],[109.527,19.944],[109.498,19.873],[109.301,19.918],[109.159,19.79],[109.147,19.705],[108.645,19.35],[108.591,19.142],[108.638,18.924],[108.593,18.809],[108.664,18.673],[108.645,18.487],[108.881,18.416],[108.945,18.314],[109.109,18.324],[109.139,18.268],[109.288,18.265],[109.585,18.144],[109.75,18.194],[109.785,18.34],[110.071,18.376],[110.117,18.507],[110.246,18.61],[110.499,18.652],[110.499,18.752],[110.578,18.784],[110.619,19.152],[110.677,19.286],[110.921,19.553],[111.062,19.612],[111.044,19.763],[110.966,20.018],[110.809,20.036],[110.688,20.164],[110.526,20.075],[110.318,20.109],[110.289,20.056],[110.145,20.075],[110.106,20.027]],[[113.266,8.126],[113.35,8.172],[113.386,8.289],[113.354,8.304],[113.266,8.126]],[[117.708,15.183],[117.727,15.105],[117.828,15.112],[117.725,15.131],[117.745,15.218],[117.839,15.159],[117.748,15.23],[117.708,15.183]],[[111.649,16.256],[111.568,16.163],[111.691,16.211],[111.607,16.178],[111.649,16.256]],[[113.897,7.607],[114.059,7.538],[114.369,7.639],[114.42,7.766],[114.541,7.862],[114.541,7.946],[114.415,7.953],[113.897,7.607]],[[115.838,9.71],[115.867,9.65],[115.901,9.671],[115.926,9.782],[115.871,9.779],[115.838,9.71]],[[109.464,7.344],[109.513,7.32],[109.709,7.511],[109.949,7.523],[109.816,7.573],[109.653,7.56],[109.464,7.344]],[[112.477,16.001],[112.612,16.039],[112.588,16.071],[112.462,16.044],[112.477,16.001]],[[114.469,10.836],[114.565,10.836],[114.587,10.909],[114.469,10.836]],[[112.409,16.295],[112.411,16.263],[112.537,16.312],[112.409,16.295]],[[116.489,10.396],[116.467,10.309],[116.645,10.335],[116.515,10.349],[116.526,10.427],[116.489,10.396]],[[115.168,8.387],[115.236,8.322],[115.315,8.356],[115.168,8.387]],[[109.936,7.849],[109.988,7.812],[110.05,7.846],[110.078,7.949],[109.936,7.849]],[[110.46,8.116],[110.471,8.072],[110.554,8.094],[110.6,8.157],[110.46,8.116]],[[117.267,10.692],[117.405,10.671],[117.418,10.703],[117.37,10.742],[117.267,10.692]],[[113.832,19.159],[113.915,19.172],[113.92,19.224],[113.807,19.223],[113.832,19.159]]]},{name:`重庆`,full:`重庆市`,hl:!1,center:[107.8839,30.067297],rings:[[[106.374,28.526],[106.403,28.57],[106.505,28.545],[106.467,28.586],[106.528,28.678],[106.462,28.761],[106.474,28.833],[106.652,28.649],[106.565,28.485],[106.632,28.504],[106.708,28.451],[106.778,28.563],[106.757,28.607],[106.867,28.625],[106.889,28.696],[106.824,28.756],[106.923,28.81],[106.989,28.776],[107.016,28.883],[107.207,28.869],[107.247,28.762],[107.384,28.849],[107.441,28.944],[107.364,29.009],[107.37,29.092],[107.428,29.129],[107.402,29.185],[107.571,29.218],[107.589,29.15],[107.701,29.141],[107.749,29.2],[107.811,29.139],[107.81,28.984],[107.867,28.96],[107.883,29.006],[108.071,29.086],[108.256,29.04],[108.307,29.079],[108.386,28.803],[108.332,28.679],[108.636,28.621],[108.574,28.531],[108.61,28.436],[108.58,28.343],[108.668,28.334],[108.697,28.401],[108.64,28.457],[108.709,28.501],[108.78,28.426],[108.738,28.228],[108.822,28.245],[109.006,28.163],[109.027,28.22],[109.086,28.184],[109.154,28.417],[109.32,28.58],[109.307,28.621],[109.202,28.598],[109.193,28.636],[109.295,28.722],[109.241,28.777],[109.235,28.882],[109.32,29.042],[109.139,29.169],[109.112,29.361],[109.061,29.403],[108.919,29.326],[108.927,29.436],[108.867,29.471],[108.901,29.605],[108.844,29.658],[108.782,29.636],[108.786,29.692],[108.753,29.649],[108.691,29.69],[108.659,29.855],[108.601,29.864],[108.504,29.708],[108.371,29.841],[108.516,29.885],[108.514,30.058],[108.582,30.256],[108.402,30.377],[108.427,30.492],[108.568,30.469],[108.689,30.588],[108.744,30.495],[108.809,30.491],[109.043,30.656],[109.112,30.646],[109.144,30.521],[109.3,30.63],[109.355,30.487],[109.436,30.596],[109.535,30.665],[109.574,30.647],[109.657,30.761],[109.895,30.9],[110.008,30.883],[110.082,30.8],[110.173,30.979],[110.12,31.089],[110.2,31.159],[110.119,31.41],[109.945,31.471],[109.97,31.509],[109.728,31.548],[109.765,31.603],[109.731,31.701],[109.282,31.717],[109.276,31.799],[109.195,31.818],[109.086,31.929],[108.51,32.201],[108.399,32.194],[108.379,32.154],[108.453,32.09],[108.344,32.067],[108.352,31.972],[108.259,31.967],[108.344,31.861],[108.535,31.758],[108.506,31.734],[108.547,31.665],[108.443,31.634],[108.344,31.513],[108.191,31.492],[108.224,31.464],[108.154,31.371],[108.186,31.337],[108.039,31.253],[108.031,31.217],[108.09,31.205],[108.009,31.11],[108.06,31.052],[107.943,30.989],[107.948,30.919],[107.995,30.909],[107.851,30.793],[107.764,30.817],[107.74,30.884],[107.645,30.821],[107.483,30.839],[107.425,30.74],[107.517,30.645],[107.056,30.04],[106.982,30.085],[106.913,30.025],[106.732,30.027],[106.612,30.236],[106.642,30.246],[106.56,30.315],[106.44,30.308],[106.429,30.255],[106.233,30.186],[106.132,30.324],[105.792,30.427],[105.715,30.323],[105.72,30.253],[105.625,30.276],[105.662,30.21],[105.536,30.153],[105.596,30.159],[105.574,30.131],[105.754,30.018],[105.702,29.925],[105.739,29.891],[105.708,29.841],[105.583,29.819],[105.529,29.708],[105.42,29.688],[105.297,29.571],[105.305,29.532],[105.334,29.441],[105.387,29.455],[105.373,29.421],[105.442,29.401],[105.42,29.311],[105.648,29.253],[105.695,29.287],[105.797,28.936],[105.91,28.92],[106.001,28.974],[106.049,28.906],[106.207,28.905],[106.374,28.526]]]},{name:`四川`,full:`四川省`,hl:!1,center:[102.693453,30.674545],rings:[[[101.168,27.198],[101.136,27.024],[101.265,26.955],[101.268,26.903],[101.366,26.884],[101.39,26.723],[101.459,26.731],[101.466,26.787],[101.513,26.768],[101.453,26.693],[101.462,26.606],[101.396,26.592],[101.459,26.496],[101.638,26.389],[101.661,26.347],[101.586,26.28],[101.63,26.225],[101.737,26.219],[101.808,26.156],[101.836,26.046],[101.929,26.106],[102.108,26.069],[102.245,26.212],[102.571,26.363],[102.639,26.307],[102.601,26.251],[102.71,26.21],[102.879,26.364],[102.998,26.372],[102.99,26.483],[103.053,26.556],[102.966,26.838],[102.896,26.913],[102.884,27.299],[102.941,27.406],[102.99,27.368],[103.141,27.421],[103.233,27.57],[103.286,27.562],[103.292,27.633],[103.488,27.795],[103.555,27.979],[103.431,28.045],[103.573,28.231],[103.644,28.26],[103.702,28.199],[103.877,28.316],[103.782,28.525],[103.851,28.667],[103.954,28.601],[104.253,28.661],[104.315,28.616],[104.426,28.627],[104.261,28.536],[104.282,28.343],[104.314,28.307],[104.385,28.33],[104.463,28.241],[104.402,28.203],[104.449,28.114],[104.304,28.051],[104.573,27.841],[104.888,27.915],[104.981,28.063],[105.062,28.097],[105.168,28.072],[105.186,27.995],[105.271,27.997],[105.285,27.936],[105.233,27.896],[105.313,27.811],[105.274,27.795],[105.308,27.705],[105.508,27.769],[105.624,27.666],[106.064,27.777],[106.193,27.754],[106.307,27.809],[106.328,27.953],[106.246,28.012],[106.267,28.067],[106.207,28.134],[106.094,28.163],[105.895,28.12],[105.861,28.16],[105.89,28.238],[105.824,28.306],[105.787,28.336],[105.73,28.272],[105.64,28.324],[105.624,28.518],[105.745,28.617],[105.885,28.595],[105.967,28.761],[106.379,28.48],[106.265,28.846],[106.207,28.905],[106.049,28.906],[106.001,28.974],[105.91,28.92],[105.797,28.936],[105.695,29.287],[105.648,29.253],[105.459,29.289],[105.465,29.323],[105.42,29.311],[105.442,29.401],[105.373,29.421],[105.387,29.455],[105.334,29.441],[105.297,29.571],[105.42,29.688],[105.477,29.675],[105.482,29.718],[105.575,29.744],[105.583,29.819],[105.708,29.841],[105.739,29.891],[105.702,29.925],[105.754,30.018],[105.574,30.131],[105.596,30.159],[105.536,30.153],[105.662,30.21],[105.625,30.276],[105.72,30.253],[105.715,30.323],[105.826,30.436],[106.169,30.304],[106.233,30.186],[106.429,30.255],[106.44,30.308],[106.56,30.315],[106.642,30.246],[106.612,30.236],[106.732,30.027],[106.913,30.025],[106.976,30.088],[107.058,30.043],[107.517,30.645],[107.425,30.74],[107.483,30.839],[107.645,30.821],[107.74,30.884],[107.764,30.817],[107.851,30.793],[107.995,30.909],[107.948,30.919],[107.943,30.989],[108.06,31.052],[108.009,31.11],[108.09,31.205],[108.031,31.217],[108.039,31.253],[108.186,31.337],[108.154,31.371],[108.224,31.464],[108.191,31.492],[108.344,31.513],[108.443,31.634],[108.547,31.665],[108.506,31.734],[108.535,31.758],[108.344,31.861],[108.259,31.967],[108.37,31.989],[108.344,32.067],[108.453,32.09],[108.37,32.172],[108.48,32.183],[108.507,32.246],[108.311,32.232],[108.241,32.275],[108.18,32.222],[108.018,32.212],[107.98,32.146],[107.864,32.201],[107.754,32.338],[107.708,32.332],[107.681,32.397],[107.457,32.418],[107.436,32.53],[107.382,32.54],[107.264,32.403],[107.212,32.429],[107.08,32.542],[107.108,32.601],[107.067,32.709],[106.734,32.739],[106.421,32.617],[106.12,32.72],[106.044,32.865],[105.825,32.825],[105.823,32.77],[105.596,32.699],[105.468,32.93],[105.381,32.876],[105.449,32.733],[105.298,32.657],[105.22,32.666],[105.185,32.618],[105.111,32.594],[105.027,32.65],[104.882,32.601],[104.82,32.663],[104.643,32.662],[104.294,32.836],[104.288,32.943],[104.378,32.953],[104.426,33.011],[104.338,33.038],[104.378,33.109],[104.304,33.304],[104.42,33.327],[104.293,33.337],[104.22,33.404],[104.155,33.543],[104.177,33.6],[104.046,33.686],[103.778,33.659],[103.593,33.716],[103.52,33.678],[103.518,33.807],[103.354,33.744],[103.25,33.814],[103.165,33.806],[103.181,33.901],[103.12,33.953],[103.157,33.999],[103.12,34.035],[103.179,34.08],[103.1,34.182],[102.973,34.206],[102.912,34.313],[102.599,34.148],[102.649,34.08],[102.437,34.087],[102.392,33.972],[102.136,33.965],[102.253,33.861],[102.243,33.787],[102.325,33.754],[102.285,33.719],[102.342,33.726],[102.347,33.606],[102.478,33.543],[102.463,33.449],[102.393,33.404],[102.258,33.409],[102.192,33.337],[102.201,33.223],[102.117,33.288],[102.089,33.205],[101.935,33.187],[101.866,33.103],[101.826,33.119],[101.842,33.185],[101.77,33.269],[101.877,33.315],[101.946,33.443],[101.844,33.603],[101.769,33.539],[101.769,33.456],[101.664,33.384],[101.65,33.323],[101.736,33.28],[101.634,33.101],[101.488,33.227],[101.403,33.225],[101.382,33.153],[101.297,33.262],[101.183,33.269],[101.125,33.221],[101.146,33.057],[101.185,33.042],[101.124,32.91],[101.237,32.825],[101.223,32.726],[101.157,32.661],[101.077,32.683],[100.932,32.6],[100.691,32.678],[100.71,32.61],[100.662,32.616],[100.646,32.526],[100.545,32.57],[100.42,32.732],[100.378,32.699],[100.399,32.756],[100.339,32.719],[100.259,32.743],[100.208,32.606],[100.11,32.64],[100.123,32.837],[99.877,33.046],[99.851,32.942],[99.764,32.925],[99.792,32.883],[99.718,32.732],[99.376,32.9],[99.269,32.878],[99.196,33.035],[98.859,33.151],[98.76,33.277],[98.78,33.37],[98.726,33.503],[98.648,33.549],[98.617,33.637],[98.657,33.647],[98.407,33.867],[98.441,33.982],[98.4,34.085],[98.028,34.123],[97.898,34.21],[97.666,34.127],[97.703,34.037],[97.629,33.92],[97.395,33.889],[97.373,33.818],[97.423,33.755],[97.416,33.606],[97.523,33.577],[97.552,33.466],[97.754,33.41],[97.623,33.337],[97.608,33.264],[97.488,33.168],[97.524,32.989],[97.376,32.957],[97.348,32.896],[97.483,32.654],[98.219,32.342],[98.219,32.235],[98.435,32.008],[98.415,31.832],[98.619,31.592],[98.887,31.375],[98.773,31.249],[98.644,31.339],[98.602,31.192],[98.806,30.996],[98.797,30.879],[98.958,30.765],[98.907,30.698],[98.981,30.183],[99.068,29.932],[98.992,29.677],[99.114,29.244],[99.104,28.842],[99.184,28.589],[99.165,28.425],[99.375,28.182],[99.437,28.398],[99.403,28.546],[99.541,28.623],[99.626,28.815],[99.718,28.847],[99.756,28.701],[99.985,28.529],[99.99,28.477],[100.074,28.426],[100.057,28.369],[100.176,28.325],[100.153,28.208],[100.021,28.147],[100.197,27.936],[100.17,27.908],[100.309,27.861],[100.312,27.724],[100.443,27.866],[100.545,27.809],[100.681,27.923],[100.707,27.801],[100.848,27.672],[100.828,27.616],[100.912,27.521],[100.901,27.454],[100.937,27.469],[101.022,27.333],[101.042,27.222],[101.168,27.198]]]},{name:`贵州`,full:`贵州省`,hl:!1,center:[106.880455,26.826368],rings:[[[109.274,28.495],[109.154,28.417],[109.086,28.184],[109.027,28.22],[109.006,28.163],[108.822,28.245],[108.773,28.213],[108.727,28.282],[108.78,28.426],[108.709,28.501],[108.64,28.457],[108.697,28.401],[108.668,28.334],[108.58,28.343],[108.61,28.436],[108.574,28.531],[108.636,28.621],[108.332,28.679],[108.386,28.803],[108.307,29.079],[108.256,29.04],[108.071,29.086],[107.883,29.006],[107.867,28.96],[107.81,28.984],[107.811,29.139],[107.749,29.2],[107.701,29.141],[107.589,29.15],[107.571,29.218],[107.487,29.174],[107.441,29.204],[107.402,29.185],[107.412,29.095],[107.37,29.092],[107.364,29.009],[107.441,28.944],[107.384,28.849],[107.247,28.762],[107.207,28.869],[107.016,28.883],[106.989,28.776],[106.923,28.81],[106.824,28.756],[106.889,28.696],[106.867,28.625],[106.757,28.607],[106.778,28.563],[106.708,28.451],[106.632,28.504],[106.565,28.485],[106.652,28.649],[106.474,28.833],[106.462,28.761],[106.528,28.678],[106.467,28.586],[106.505,28.545],[106.403,28.57],[106.379,28.48],[105.967,28.761],[105.885,28.595],[105.745,28.617],[105.624,28.518],[105.64,28.324],[105.73,28.272],[105.787,28.336],[105.824,28.306],[105.89,28.238],[105.861,28.16],[105.895,28.12],[106.145,28.163],[106.267,28.067],[106.246,28.012],[106.328,27.953],[106.337,27.859],[106.243,27.767],[106.064,27.777],[105.624,27.666],[105.508,27.769],[105.354,27.749],[105.183,27.367],[105.068,27.418],[104.872,27.291],[104.825,27.353],[104.771,27.317],[104.54,27.328],[104.497,27.415],[104.363,27.468],[104.249,27.292],[104.173,27.263],[104.015,27.429],[103.932,27.444],[103.866,27.282],[103.8,27.265],[103.696,27.126],[103.633,27.121],[103.66,27.066],[103.601,27.062],[103.623,27.007],[103.705,27.049],[103.775,26.951],[103.779,26.874],[103.706,26.795],[103.773,26.717],[103.763,26.585],[103.866,26.512],[104.068,26.515],[104.121,26.638],[104.354,26.621],[104.424,26.709],[104.459,26.603],[104.58,26.568],[104.684,26.377],[104.543,26.253],[104.528,26.114],[104.46,26.086],[104.415,25.91],[104.442,25.869],[104.371,25.73],[104.329,25.761],[104.31,25.648],[104.333,25.599],[104.429,25.576],[104.435,25.472],[104.557,25.525],[104.543,25.401],[104.646,25.357],[104.64,25.296],[104.827,25.236],[104.823,25.17],[104.754,25.214],[104.686,25.078],[104.62,25.061],[104.685,25.054],[104.713,24.996],[104.54,24.814],[104.53,24.732],[104.729,24.618],[104.899,24.753],[105.034,24.788],[105.078,24.918],[105.213,24.996],[105.268,24.929],[105.428,24.931],[105.497,24.809],[105.827,24.703],[105.942,24.725],[106.025,24.633],[106.173,24.76],[106.206,24.851],[106.145,24.954],[106.442,25.019],[106.591,25.088],[106.645,25.165],[106.888,25.182],[106.933,25.251],[106.976,25.233],[107.013,25.353],[106.964,25.438],[107.067,25.509],[107.064,25.559],[107.205,25.608],[107.337,25.461],[107.318,25.402],[107.421,25.393],[107.433,25.289],[107.49,25.277],[107.472,25.214],[107.66,25.316],[107.701,25.194],[107.762,25.229],[107.763,25.125],[107.839,25.116],[108.115,25.21],[108.143,25.391],[108.193,25.405],[108.162,25.445],[108.252,25.43],[108.308,25.526],[108.349,25.536],[108.419,25.443],[108.472,25.459],[108.625,25.308],[108.607,25.492],[108.689,25.533],[108.658,25.55],[108.689,25.623],[108.784,25.628],[108.815,25.527],[108.949,25.557],[109.025,25.512],[109.088,25.551],[109.031,25.63],[109.079,25.721],[108.9,25.682],[108.896,25.714],[109.095,25.805],[109.144,25.795],[109.148,25.742],[109.207,25.788],[109.207,25.74],[109.34,25.731],[109.34,25.834],[109.482,26.03],[109.45,26.102],[109.514,26.128],[109.439,26.239],[109.467,26.314],[109.351,26.264],[109.271,26.328],[109.407,26.533],[109.355,26.659],[109.284,26.698],[109.487,26.76],[109.436,26.892],[109.555,26.947],[109.52,27.059],[109.455,27.069],[109.473,27.135],[109.415,27.154],[109.239,27.149],[109.166,27.067],[109.101,27.069],[109.129,27.123],[109.033,27.104],[108.943,27.017],[108.791,27.084],[108.879,27.106],[108.927,27.161],[108.908,27.205],[109.104,27.337],[109.142,27.448],[109.3,27.424],[109.303,27.476],[109.462,27.568],[109.471,27.68],[109.333,27.783],[109.302,27.956],[109.379,28.035],[109.298,28.036],[109.388,28.268],[109.275,28.313],[109.274,28.495]],[[109.476,26.83],[109.522,26.749],[109.51,26.878],[109.453,26.862],[109.476,26.83]]]},{name:`云南`,full:`云南省`,hl:!1,center:[101.485106,25.008643],rings:[[[105.308,27.705],[105.274,27.795],[105.313,27.811],[105.233,27.896],[105.285,27.936],[105.271,27.997],[105.186,27.995],[105.168,28.072],[105.062,28.097],[104.981,28.063],[104.888,27.915],[104.573,27.841],[104.508,27.878],[104.304,28.051],[104.449,28.114],[104.402,28.203],[104.45,28.27],[104.385,28.33],[104.314,28.307],[104.254,28.404],[104.261,28.536],[104.426,28.627],[104.315,28.616],[104.253,28.661],[103.954,28.601],[103.851,28.667],[103.782,28.525],[103.877,28.316],[103.702,28.199],[103.644,28.26],[103.573,28.231],[103.431,28.045],[103.555,27.979],[103.488,27.795],[103.292,27.633],[103.286,27.562],[103.233,27.57],[103.141,27.421],[102.99,27.368],[102.941,27.406],[102.884,27.299],[102.896,26.913],[102.966,26.838],[103.053,26.556],[102.99,26.483],[102.976,26.341],[102.879,26.364],[102.71,26.21],[102.601,26.251],[102.639,26.307],[102.571,26.363],[102.245,26.212],[102.108,26.069],[101.929,26.106],[101.836,26.046],[101.808,26.156],[101.586,26.28],[101.661,26.347],[101.638,26.389],[101.459,26.496],[101.396,26.592],[101.462,26.606],[101.453,26.693],[101.513,26.768],[101.466,26.787],[101.459,26.731],[101.39,26.723],[101.366,26.884],[101.268,26.903],[101.265,26.955],[101.136,27.024],[101.168,27.198],[101.042,27.222],[101.022,27.333],[100.937,27.469],[100.901,27.454],[100.912,27.521],[100.828,27.616],[100.848,27.672],[100.707,27.801],[100.681,27.923],[100.545,27.809],[100.443,27.866],[100.312,27.724],[100.309,27.861],[100.17,27.908],[100.197,27.936],[100.021,28.147],[100.153,28.208],[100.176,28.325],[100.057,28.369],[100.074,28.426],[99.99,28.477],[99.985,28.529],[99.756,28.701],[99.718,28.847],[99.626,28.815],[99.541,28.623],[99.403,28.546],[99.412,28.295],[99.375,28.182],[99.307,28.228],[99.165,28.425],[99.184,28.589],[99.104,28.842],[99.114,29.221],[98.981,29.205],[99.013,29.037],[98.926,28.979],[98.918,28.887],[98.973,28.832],[98.853,28.798],[98.786,28.999],[98.624,28.959],[98.684,28.74],[98.594,28.668],[98.626,28.489],[98.674,28.479],[98.74,28.348],[98.712,28.229],[98.626,28.165],[98.559,28.183],[98.389,28.115],[98.301,28.384],[98.209,28.358],[98.267,28.242],[98.169,28.206],[98.139,28.142],[98.143,27.949],[98.205,27.89],[98.169,27.851],[98.317,27.519],[98.429,27.549],[98.444,27.665],[98.554,27.646],[98.583,27.571],[98.707,27.553],[98.687,27.425],[98.741,27.33],[98.696,27.211],[98.713,27.076],[98.766,27.051],[98.731,26.851],[98.782,26.621],[98.673,26.24],[98.736,26.185],[98.72,26.127],[98.661,26.088],[98.656,26.14],[98.575,26.118],[98.614,25.968],[98.706,25.855],[98.641,25.799],[98.529,25.841],[98.402,25.594],[98.315,25.543],[98.171,25.62],[98.137,25.382],[97.94,25.215],[97.839,25.271],[97.72,25.081],[97.73,24.909],[97.797,24.846],[97.547,24.739],[97.571,24.603],[97.53,24.443],[97.67,24.453],[97.716,24.359],[97.665,24.297],[97.767,24.258],[97.73,24.227],[97.754,24.164],[97.528,23.927],[97.647,23.841],[98.091,24.086],[98.547,24.128],[98.594,24.08],[98.877,24.151],[98.895,24.099],[98.673,23.961],[98.702,23.834],[98.669,23.801],[98.785,23.782],[98.882,23.62],[98.804,23.541],[98.826,23.47],[98.875,23.483],[98.912,23.426],[98.921,23.361],[98.873,23.33],[98.937,23.31],[98.89,23.209],[99.058,23.165],[99.048,23.115],[99.106,23.087],[99.255,23.078],[99.348,23.129],[99.528,23.066],[99.563,22.926],[99.531,22.897],[99.447,22.935],[99.463,22.845],[99.315,22.738],[99.382,22.493],[99.252,22.393],[99.278,22.346],[99.156,22.16],[99.22,22.111],[99.487,22.129],[99.87,22.029],[99.871,22.067],[99.972,22.053],[100,21.973],[99.944,21.821],[99.991,21.704],[100.049,21.67],[100.132,21.7],[100.169,21.663],[100.108,21.585],[100.131,21.504],[100.206,21.51],[100.235,21.467],[100.437,21.533],[100.483,21.459],[100.579,21.452],[100.731,21.519],[100.87,21.673],[101.124,21.772],[101.147,21.56],[101.209,21.558],[101.225,21.499],[101.143,21.409],[101.245,21.302],[101.222,21.234],[101.29,21.179],[101.533,21.252],[101.602,21.233],[101.606,21.172],[101.672,21.195],[101.765,21.148],[101.834,21.253],[101.73,21.337],[101.755,21.585],[101.829,21.617],[101.747,21.73],[101.772,21.833],[101.701,21.939],[101.606,21.968],[101.597,22.161],[101.547,22.238],[101.626,22.283],[101.672,22.475],[101.775,22.506],[101.901,22.384],[101.908,22.437],[102.046,22.458],[102.145,22.398],[102.27,22.42],[102.256,22.457],[102.405,22.63],[102.384,22.68],[102.511,22.775],[102.57,22.701],[102.607,22.731],[102.824,22.623],[102.931,22.482],[103.03,22.441],[103.183,22.559],[103.196,22.648],[103.283,22.679],[103.323,22.808],[103.441,22.753],[103.436,22.697],[103.529,22.593],[103.642,22.795],[103.965,22.502],[104.009,22.518],[104.046,22.728],[104.118,22.809],[104.262,22.842],[104.273,22.738],[104.376,22.69],[104.596,22.846],[104.738,22.826],[104.846,22.926],[104.804,23.11],[104.883,23.164],[104.949,23.152],[105.093,23.261],[105.238,23.264],[105.325,23.39],[105.543,23.184],[105.526,23.235],[105.593,23.313],[105.7,23.327],[105.638,23.404],[105.7,23.402],[105.852,23.527],[105.986,23.489],[106,23.448],[106.142,23.57],[106.137,23.795],[106.193,23.879],[105.998,24.121],[105.919,24.122],[105.892,24.04],[105.797,24.024],[105.765,24.074],[105.649,24.033],[105.595,24.138],[105.534,24.13],[105.493,24.017],[105.321,24.116],[105.26,24.061],[105.183,24.167],[105.243,24.209],[105.165,24.288],[105.188,24.347],[105.107,24.415],[104.766,24.46],[104.703,24.42],[104.709,24.321],[104.576,24.425],[104.49,24.653],[104.54,24.814],[104.713,24.996],[104.685,25.054],[104.62,25.061],[104.686,25.078],[104.754,25.214],[104.823,25.17],[104.827,25.236],[104.64,25.296],[104.646,25.357],[104.543,25.401],[104.557,25.525],[104.435,25.472],[104.429,25.576],[104.333,25.599],[104.31,25.648],[104.329,25.761],[104.371,25.73],[104.442,25.869],[104.415,25.91],[104.46,26.086],[104.528,26.114],[104.593,26.318],[104.66,26.335],[104.666,26.434],[104.557,26.59],[104.459,26.603],[104.424,26.709],[104.354,26.621],[104.121,26.638],[104.068,26.515],[103.82,26.53],[103.749,26.624],[103.773,26.717],[103.706,26.795],[103.779,26.874],[103.775,26.951],[103.705,27.049],[103.623,27.007],[103.601,27.062],[103.66,27.066],[103.633,27.121],[103.696,27.126],[103.8,27.265],[103.866,27.282],[103.932,27.444],[104.015,27.429],[104.173,27.263],[104.249,27.292],[104.363,27.468],[104.612,27.307],[104.825,27.353],[104.872,27.291],[105.068,27.418],[105.183,27.367],[105.308,27.705]]]},{name:`西藏`,full:`西藏自治区`,hl:!1,center:[88.388277,31.56375],rings:[[[89.711,36.093],[89.293,36.231],[89.232,36.296],[89.127,36.255],[88.926,36.365],[88.767,36.292],[88.573,36.461],[88.471,36.482],[87.983,36.438],[87.57,36.342],[87.471,36.354],[87.427,36.426],[87.149,36.298],[86.996,36.309],[86.887,36.263],[86.863,36.3],[86.746,36.292],[86.699,36.244],[86.279,36.171],[86.188,36.131],[86.2,36.048],[86.053,35.843],[85.949,35.779],[85.691,35.751],[85.613,35.651],[85.374,35.7],[85.271,35.789],[85.053,35.752],[84.449,35.55],[84.453,35.473],[84.161,35.36],[84.006,35.423],[83.622,35.335],[83.251,35.418],[83.127,35.399],[82.999,35.485],[82.967,35.668],[82.795,35.688],[82.732,35.638],[82.469,35.718],[82.336,35.651],[82.328,35.56],[82.034,35.452],[82.03,35.322],[81.686,35.236],[81.513,35.235],[81.441,35.333],[81.364,35.355],[81.219,35.319],[81.099,35.407],[81.032,35.381],[81.026,35.311],[80.964,35.311],[80.689,35.339],[80.656,35.394],[80.515,35.392],[80.433,35.449],[80.321,35.387],[80.268,35.296],[80.363,35.209],[80.258,35.203],[80.031,35.034],[80.034,34.902],[79.927,34.849],[79.861,34.528],[79.802,34.479],[79.039,34.422],[79.011,34.4],[79.049,34.349],[78.982,34.318],[78.926,34.156],[78.661,34.087],[78.657,34.03],[78.745,33.981],[78.78,33.733],[78.685,33.654],[78.755,33.623],[78.742,33.553],[78.85,33.42],[79.152,33.184],[79.163,33.012],[79.256,32.943],[79.225,32.784],[79.301,32.729],[79.273,32.678],[79.308,32.597],[79.252,32.517],[79.136,32.472],[79.103,32.37],[79.006,32.375],[78.971,32.332],[78.782,32.48],[78.742,32.704],[78.395,32.53],[78.509,32.298],[78.43,32.212],[78.47,32.128],[78.51,32.147],[78.607,32.024],[78.762,31.947],[78.655,31.819],[78.846,31.61],[78.74,31.533],[78.73,31.478],[78.792,31.436],[78.755,31.356],[78.795,31.301],[78.865,31.313],[78.998,31.159],[79.01,31.044],[79.097,30.992],[79.182,31.016],[79.228,30.949],[79.332,30.969],[79.316,31.018],[79.405,31.072],[79.598,30.926],[79.669,30.98],[79.913,30.833],[80.044,30.604],[80.633,30.459],[80.817,30.321],[81.035,30.247],[81.132,30.016],[81.256,30.012],[81.269,30.153],[81.394,30.199],[81.418,30.421],[81.556,30.369],[81.566,30.429],[81.63,30.447],[81.991,30.323],[82.105,30.346],[82.114,30.227],[82.207,30.144],[82.178,30.068],[82.561,29.955],[82.644,29.869],[82.624,29.835],[82.704,29.848],[82.738,29.807],[82.692,29.766],[82.831,29.688],[82.948,29.705],[83.089,29.605],[83.267,29.571],[83.276,29.506],[83.416,29.42],[83.464,29.286],[83.596,29.174],[83.656,29.167],[83.912,29.323],[84.117,29.286],[84.13,29.24],[84.203,29.24],[84.171,29.195],[84.194,29.045],[84.249,29.03],[84.234,28.889],[84.408,28.854],[84.483,28.735],[84.62,28.732],[84.698,28.633],[84.857,28.568],[85.126,28.676],[85.196,28.624],[85.19,28.545],[85.108,28.461],[85.113,28.345],[85.38,28.274],[85.416,28.321],[85.521,28.327],[85.602,28.296],[85.601,28.254],[85.721,28.372],[85.753,28.228],[85.854,28.172],[85.98,27.984],[85.949,27.937],[86.002,27.907],[86.125,27.923],[86.087,28.09],[86.191,28.167],[86.232,27.974],[86.415,27.905],[86.515,27.955],[86.569,28.103],[86.648,28.069],[86.7,28.102],[86.768,28.069],[86.757,28.033],[87.035,27.946],[87.118,27.841],[87.228,27.813],[87.581,27.86],[87.598,27.815],[87.727,27.803],[87.827,27.928],[88.112,27.865],[88.157,27.958],[88.401,27.977],[88.645,28.111],[88.764,28.068],[88.843,28.006],[88.889,27.847],[88.852,27.671],[88.771,27.564],[88.783,27.467],[88.985,27.209],[89.183,27.374],[89.095,27.472],[89.163,27.575],[89.132,27.633],[89.239,27.797],[89.376,27.876],[89.511,28.086],[89.605,28.162],[89.779,28.197],[89.79,28.241],[90.034,28.137],[90.103,28.142],[90.125,28.191],[90.297,28.154],[90.384,28.061],[90.592,28.021],[90.702,28.076],[90.896,27.946],[90.962,27.954],[91.026,27.857],[91.113,27.846],[91.163,27.969],[91.252,27.971],[91.31,28.058],[91.465,28.003],[91.487,27.937],[91.612,27.891],[91.544,27.82],[91.61,27.819],[91.642,27.766],[91.562,27.628],[91.585,27.541],[91.719,27.467],[92.011,27.475],[92.065,27.391],[92.126,27.273],[92.027,27.108],[92.125,26.96],[92.109,26.855],[92.647,26.953],[92.803,26.895],[93.111,26.88],[93.568,26.938],[93.817,27.025],[93.849,27.168],[94.277,27.581],[94.525,27.596],[94.886,27.743],[95.286,27.94],[95.397,28.142],[95.832,28.295],[95.989,28.198],[96.275,28.228],[96.298,28.14],[96.399,28.119],[96.426,28.162],[96.5,28.067],[96.81,27.89],[96.973,27.861],[97.098,27.741],[97.254,27.892],[97.387,27.883],[97.413,28.013],[97.306,28.072],[97.35,28.236],[97.518,28.328],[97.485,28.386],[97.57,28.542],[97.686,28.52],[97.801,28.327],[97.908,28.363],[98.033,28.187],[98.139,28.142],[98.169,28.206],[98.267,28.242],[98.209,28.358],[98.301,28.384],[98.389,28.115],[98.559,28.183],[98.626,28.165],[98.712,28.229],[98.74,28.348],[98.674,28.479],[98.626,28.489],[98.594,28.668],[98.684,28.74],[98.624,28.959],[98.786,28.999],[98.853,28.798],[98.973,28.832],[98.918,28.887],[98.926,28.979],[99.013,29.037],[98.961,29.166],[99.114,29.221],[98.992,29.677],[99.068,29.932],[98.981,30.183],[98.907,30.698],[98.958,30.765],[98.797,30.879],[98.806,30.996],[98.602,31.192],[98.644,31.339],[98.773,31.249],[98.887,31.375],[98.619,31.592],[98.415,31.832],[98.435,32.008],[98.219,32.235],[98.219,32.342],[97.796,32.521],[97.502,32.531],[97.449,32.587],[97.358,32.564],[97.335,32.514],[97.388,32.502],[97.341,32.441],[97.388,32.427],[97.425,32.323],[97.371,32.273],[97.3,32.295],[97.264,32.183],[97.308,32.077],[97.22,32.109],[97.234,32.064],[97.17,32.033],[97.007,32.068],[96.869,31.965],[96.723,32.013],[96.811,31.894],[96.766,31.819],[96.84,31.72],[96.779,31.676],[96.469,31.77],[96.389,31.92],[96.189,31.904],[96.178,31.775],[96.252,31.698],[96.208,31.599],[96.157,31.603],[96.149,31.686],[95.984,31.817],[95.899,31.817],[95.824,31.682],[95.78,31.749],[95.634,31.783],[95.512,31.75],[95.361,31.959],[95.454,32.008],[95.421,32.034],[95.44,32.158],[95.315,32.149],[95.241,32.321],[95.079,32.28],[95.097,32.322],[95.262,32.348],[95.219,32.397],[94.912,32.416],[94.614,32.674],[94.463,32.572],[94.395,32.594],[94.372,32.525],[94.197,32.516],[94.138,32.434],[93.96,32.485],[93.862,32.466],[93.82,32.55],[93.722,32.578],[93.517,32.476],[93.463,32.556],[93.385,32.525],[93.24,32.662],[93.07,32.626],[93.02,32.737],[92.867,32.698],[92.686,32.765],[92.635,32.721],[92.356,32.765],[92.255,32.721],[92.199,32.755],[92.205,32.866],[92.146,32.886],[91.956,32.821],[91.839,32.948],[91.583,33.038],[91.536,33.1],[91.436,33.066],[91.227,33.142],[91.148,33.072],[90.928,33.12],[90.902,33.083],[90.883,33.12],[90.704,33.136],[90.491,33.265],[90.406,33.26],[90.247,33.424],[90.107,33.461],[90.011,33.554],[90.008,33.688],[89.902,33.758],[89.942,33.801],[89.795,33.865],[89.635,34.05],[89.817,34.169],[89.867,34.325],[89.799,34.396],[89.799,34.629],[89.726,34.661],[89.732,34.732],[89.868,34.811],[89.788,34.922],[89.579,34.895],[89.593,35.104],[89.45,35.224],[89.532,35.276],[89.497,35.361],[89.765,35.483],[89.7,35.545],[89.766,35.6],[89.726,35.648],[89.802,35.848],[89.551,35.857],[89.428,35.918],[89.405,36.017],[89.711,36.093]]]},{name:`陕西`,full:`陕西省`,hl:!1,center:[108.887114,35.263661],rings:[[[110.379,34.601],[110.295,34.611],[110.23,34.693],[110.231,34.881],[110.374,35.134],[110.375,35.252],[110.61,35.632],[110.447,36.164],[110.497,36.582],[110.395,36.677],[110.447,36.738],[110.408,36.776],[110.424,36.856],[110.376,36.882],[110.424,36.964],[110.383,37.022],[110.427,37.009],[110.69,37.287],[110.695,37.35],[110.631,37.373],[110.644,37.435],[110.74,37.449],[110.795,37.559],[110.775,37.681],[110.706,37.706],[110.736,37.77],[110.523,37.955],[110.509,38.192],[110.566,38.215],[110.578,38.297],[110.747,38.366],[110.778,38.441],[110.874,38.454],[110.92,38.582],[110.881,38.627],[111.009,38.848],[110.98,38.97],[111.138,39.064],[111.248,39.302],[111.064,39.401],[111.059,39.448],[111.149,39.531],[111.137,39.587],[110.87,39.494],[110.703,39.274],[110.597,39.283],[110.524,39.383],[110.435,39.381],[110.385,39.31],[110.153,39.454],[110.137,39.392],[110.218,39.281],[109.962,39.212],[109.903,39.272],[109.872,39.244],[109.961,39.192],[109.894,39.141],[109.922,39.107],[109.851,39.123],[109.762,39.057],[109.665,38.982],[109.624,38.855],[109.55,38.806],[109.511,38.834],[109.339,38.702],[109.367,38.628],[109.277,38.623],[109.054,38.434],[108.939,38.208],[109.069,38.091],[109.07,38.023],[108.935,37.923],[108.883,38.014],[108.798,38.048],[108.827,37.989],[108.778,37.684],[108.246,37.666],[108.134,37.622],[108.025,37.65],[107.982,37.787],[107.685,37.889],[107.62,37.776],[107.499,37.766],[107.485,37.706],[107.387,37.691],[107.422,37.665],[107.311,37.61],[107.369,37.588],[107.284,37.482],[107.258,37.337],[107.309,37.239],[107.271,37.229],[107.337,37.166],[107.269,37.099],[107.31,36.913],[107.478,36.908],[107.54,36.829],[107.67,36.833],[107.907,36.75],[107.939,36.656],[108.007,36.683],[108.061,36.592],[108.164,36.564],[108.223,36.631],[108.211,36.577],[108.34,36.559],[108.461,36.423],[108.51,36.474],[108.652,36.385],[108.646,36.254],[108.713,36.139],[108.689,36.021],[108.652,35.948],[108.499,35.872],[108.539,35.606],[108.626,35.537],[108.615,35.329],[108.489,35.275],[108.345,35.301],[108.239,35.256],[108.175,35.305],[107.95,35.245],[107.746,35.312],[107.737,35.267],[107.652,35.245],[107.863,34.999],[107.639,34.935],[107.564,34.969],[107.524,34.91],[107.287,34.932],[107.253,34.881],[107.12,34.95],[107.083,35.024],[106.902,35.095],[106.542,35.084],[106.485,34.984],[106.575,34.77],[106.457,34.704],[106.471,34.634],[106.314,34.579],[106.334,34.518],[106.514,34.512],[106.717,34.369],[106.653,34.244],[106.527,34.292],[106.496,34.238],[106.558,34.23],[106.585,34.15],[106.502,34.105],[106.474,33.971],[106.411,33.909],[106.428,33.866],[106.475,33.876],[106.483,33.707],[106.535,33.695],[106.581,33.576],[106.54,33.513],[106.457,33.533],[106.447,33.613],[106.187,33.547],[106.087,33.617],[105.972,33.613],[105.842,33.49],[105.827,33.38],[105.71,33.383],[105.799,33.258],[105.965,33.204],[105.969,33.154],[105.897,33.147],[105.935,33.112],[105.917,32.994],[105.862,32.939],[105.638,32.879],[105.528,32.919],[105.495,32.873],[105.596,32.699],[105.823,32.77],[105.825,32.825],[106.044,32.865],[106.12,32.72],[106.421,32.617],[106.734,32.739],[107.067,32.709],[107.108,32.601],[107.08,32.542],[107.264,32.403],[107.382,32.54],[107.436,32.53],[107.457,32.418],[107.681,32.397],[107.708,32.332],[107.754,32.338],[107.864,32.201],[107.98,32.146],[108.018,32.212],[108.18,32.222],[108.241,32.275],[108.311,32.232],[108.47,32.271],[108.677,32.103],[109.086,31.929],[109.195,31.818],[109.276,31.799],[109.282,31.717],[109.586,31.727],[109.634,31.804],[109.585,31.9],[109.632,31.962],[109.591,32.013],[109.622,32.107],[109.593,32.219],[109.495,32.3],[109.632,32.6],[109.911,32.593],[110.018,32.547],[110.09,32.617],[110.154,32.593],[110.206,32.633],[110.105,32.833],[109.907,32.904],[109.79,32.882],[109.795,33.067],[109.439,33.152],[109.514,33.238],[109.607,33.236],[109.62,33.275],[110.338,33.16],[110.471,33.171],[110.541,33.255],[110.703,33.097],[110.825,33.158],[110.829,33.201],[110.922,33.204],[111.026,33.331],[111.004,33.579],[110.824,33.686],[110.782,33.796],[110.587,33.888],[110.666,33.938],[110.621,34.036],[110.587,34.023],[110.642,34.161],[110.44,34.243],[110.429,34.288],[110.504,34.337],[110.361,34.517],[110.405,34.558],[110.379,34.601]]]},{name:`甘肃`,full:`甘肃省`,hl:!1,center:[103.823557,36.058039],rings:[[[106.506,35.738],[106.435,35.688],[106.501,35.364],[106.363,35.239],[106.173,35.438],[106.113,35.362],[106.072,35.464],[105.895,35.414],[105.898,35.451],[106.047,35.498],[105.9,35.547],[105.847,35.49],[105.691,35.699],[105.759,35.725],[105.482,35.727],[105.429,35.819],[105.381,35.793],[105.398,35.857],[105.325,35.942],[105.344,36.034],[105.515,36.147],[105.362,36.497],[105.252,36.553],[105.201,36.701],[105.32,36.743],[105.335,36.801],[105.245,36.895],[105.179,36.892],[105.165,36.995],[104.955,37.04],[104.856,37.212],[104.777,37.247],[104.638,37.202],[104.601,37.243],[104.625,37.299],[104.714,37.33],[104.662,37.368],[104.68,37.408],[104.438,37.446],[104.184,37.407],[103.683,37.778],[103.407,37.861],[103.369,38.089],[103.535,38.157],[103.416,38.405],[103.86,38.645],[104.044,38.895],[104.196,38.988],[104.171,39.161],[104.047,39.298],[104.09,39.42],[103.853,39.462],[103.345,39.332],[103.008,39.1],[102.617,39.172],[102.453,39.255],[101.903,39.112],[101.834,39.089],[102.075,38.891],[101.777,38.66],[101.673,38.691],[101.602,38.655],[101.563,38.713],[101.331,38.777],[101.335,38.847],[101.243,38.861],[101.199,38.943],[101.229,39.021],[100.97,38.947],[100.962,39.006],[100.835,39.026],[100.842,39.406],[100.499,39.401],[100.501,39.481],[100.327,39.509],[100.25,39.685],[99.905,39.786],[99.822,39.86],[99.441,39.886],[99.841,40.013],[99.927,40.064],[100.007,40.2],[100.169,40.278],[100.169,40.541],[100.243,40.619],[100.237,40.717],[100.108,40.875],[99.673,40.933],[99.566,40.847],[99.175,40.858],[99.173,40.747],[99.102,40.677],[98.985,40.783],[98.791,40.706],[98.803,40.607],[98.689,40.692],[98.668,40.773],[98.57,40.747],[98.628,40.678],[98.344,40.568],[98.333,40.919],[97.972,41.098],[97.629,41.44],[97.614,41.477],[97.847,41.656],[97.173,42.795],[96.386,42.728],[96.104,42.604],[95.979,42.437],[96.066,42.415],[96.041,42.327],[96.178,42.218],[96.077,42.149],[96.138,42.02],[96.055,41.936],[95.571,41.796],[95.336,41.644],[95.3,41.566],[95.136,41.773],[94.862,41.668],[94.75,41.538],[94.534,41.506],[94.011,41.115],[93.81,40.88],[93.821,40.794],[93.761,40.665],[92.928,40.573],[92.907,40.311],[92.797,40.154],[92.64,39.514],[92.339,39.237],[92.367,39.059],[92.41,39.038],[92.546,39.111],[93.115,39.18],[93.198,39.046],[93.179,38.924],[93.729,38.924],[93.884,38.868],[93.884,38.826],[93.756,38.807],[93.885,38.721],[94.37,38.763],[94.561,38.352],[94.974,38.43],[95.122,38.417],[95.259,38.303],[95.456,38.292],[95.704,38.4],[96.066,38.173],[96.264,38.146],[96.378,38.277],[96.665,38.23],[96.627,38.356],[96.708,38.459],[96.667,38.484],[96.781,38.504],[96.794,38.608],[96.961,38.558],[97.056,38.595],[96.941,38.908],[97.012,39.142],[96.962,39.198],[97.347,39.168],[98.092,38.786],[98.242,38.881],[98.281,39.027],[98.384,39.03],[98.458,38.953],[98.585,38.93],[98.744,39.087],[98.817,39.086],[98.952,38.988],[99.108,38.952],[99.069,38.897],[99.362,38.718],[99.659,38.449],[100.126,38.232],[100.183,38.222],[100.164,38.328],[100.001,38.467],[100.064,38.519],[100.24,38.442],[100.259,38.366],[100.302,38.388],[100.319,38.329],[100.432,38.275],[100.715,38.254],[100.861,38.148],[100.914,38.179],[100.895,38.013],[101.103,37.947],[101.203,37.847],[101.363,37.791],[101.459,37.866],[101.598,37.828],[101.659,37.733],[101.816,37.654],[101.999,37.725],[102.131,37.546],[102.103,37.483],[102.428,37.309],[102.642,37.1],[102.488,37.078],[102.506,37.019],[102.45,36.968],[102.72,36.768],[102.601,36.71],[102.762,36.569],[102.846,36.332],[103.067,36.217],[102.882,36.083],[102.968,36.044],[102.945,35.83],[102.787,35.863],[102.686,35.772],[102.809,35.56],[102.747,35.545],[102.783,35.528],[102.743,35.495],[102.503,35.585],[102.448,35.437],[102.294,35.424],[102.318,35.343],[102.281,35.303],[102.37,35.264],[102.404,35.179],[102.31,35.129],[102.296,35.072],[102.095,34.987],[102.068,34.888],[101.917,34.874],[101.935,34.587],[102.156,34.507],[102.259,34.356],[102.187,34.353],[102.15,34.272],[102.068,34.294],[101.955,34.11],[101.852,34.153],[101.719,34.083],[101.539,34.212],[100.951,34.384],[100.822,34.317],[100.764,34.179],[100.995,33.892],[101.154,33.844],[101.191,33.792],[101.167,33.66],[101.237,33.686],[101.385,33.645],[101.502,33.703],[101.584,33.674],[101.622,33.502],[101.749,33.505],[101.844,33.603],[101.884,33.578],[101.946,33.443],[101.877,33.315],[101.77,33.269],[101.866,33.103],[101.935,33.187],[102.089,33.205],[102.117,33.288],[102.201,33.223],[102.192,33.337],[102.258,33.409],[102.393,33.404],[102.463,33.449],[102.478,33.543],[102.347,33.606],[102.342,33.726],[102.285,33.719],[102.325,33.754],[102.243,33.787],[102.253,33.861],[102.136,33.965],[102.392,33.972],[102.437,34.087],[102.649,34.08],[102.599,34.148],[102.912,34.313],[102.973,34.206],[103.1,34.182],[103.179,34.08],[103.12,34.035],[103.157,33.999],[103.12,33.953],[103.181,33.901],[103.165,33.806],[103.25,33.814],[103.354,33.744],[103.518,33.807],[103.52,33.678],[103.593,33.716],[103.778,33.659],[104.046,33.686],[104.177,33.6],[104.155,33.543],[104.22,33.404],[104.293,33.337],[104.42,33.327],[104.304,33.304],[104.378,33.109],[104.338,33.038],[104.426,33.011],[104.378,32.953],[104.288,32.943],[104.294,32.836],[104.643,32.662],[104.82,32.663],[104.882,32.601],[105.027,32.65],[105.111,32.594],[105.449,32.733],[105.381,32.876],[105.414,32.922],[105.59,32.877],[105.862,32.939],[105.927,33.043],[105.897,33.147],[105.969,33.154],[105.965,33.204],[105.799,33.258],[105.71,33.383],[105.827,33.38],[105.903,33.556],[105.972,33.613],[106.087,33.617],[106.187,33.547],[106.447,33.613],[106.457,33.533],[106.54,33.513],[106.581,33.576],[106.535,33.695],[106.483,33.707],[106.475,33.876],[106.428,33.866],[106.411,33.909],[106.474,33.971],[106.502,34.105],[106.585,34.15],[106.558,34.23],[106.496,34.238],[106.527,34.292],[106.653,34.244],[106.717,34.369],[106.514,34.512],[106.334,34.518],[106.314,34.579],[106.471,34.634],[106.457,34.704],[106.575,34.77],[106.485,34.984],[106.542,35.084],[106.902,35.095],[107.083,35.024],[107.12,34.95],[107.253,34.881],[107.287,34.932],[107.524,34.91],[107.564,34.969],[107.639,34.935],[107.863,34.999],[107.652,35.245],[107.737,35.267],[107.746,35.312],[107.95,35.245],[108.175,35.305],[108.239,35.256],[108.345,35.301],[108.489,35.275],[108.615,35.329],[108.626,35.537],[108.539,35.606],[108.499,35.872],[108.652,35.948],[108.689,36.021],[108.713,36.139],[108.619,36.434],[108.51,36.474],[108.461,36.423],[108.34,36.559],[108.211,36.577],[108.223,36.631],[108.164,36.564],[108.061,36.592],[108.007,36.683],[107.939,36.656],[107.907,36.75],[107.67,36.833],[107.54,36.829],[107.478,36.908],[107.31,36.913],[107.269,37.099],[107.182,37.143],[106.998,37.107],[106.906,37.151],[106.891,37.098],[106.776,37.158],[106.75,37.099],[106.605,37.128],[106.667,37.017],[106.643,36.963],[106.596,36.94],[106.54,36.984],[106.658,36.821],[106.645,36.723],[106.594,36.75],[106.514,36.716],[106.445,36.557],[106.371,36.549],[106.523,36.469],[106.471,36.306],[106.504,36.266],[106.559,36.292],[106.833,36.229],[106.958,36.091],[106.902,35.944],[106.94,35.931],[106.85,35.887],[106.928,35.81],[106.897,35.76],[106.751,35.725],[106.751,35.689],[106.506,35.738]]]},{name:`青海`,full:`青海省`,hl:!1,center:[96.043533,35.726403],rings:[[[102.83,36.366],[102.762,36.569],[102.601,36.71],[102.72,36.768],[102.45,36.968],[102.506,37.019],[102.488,37.078],[102.642,37.1],[102.6,37.175],[102.103,37.483],[102.131,37.546],[101.999,37.725],[101.816,37.654],[101.659,37.733],[101.598,37.828],[101.459,37.866],[101.363,37.791],[101.203,37.847],[101.103,37.947],[100.895,38.013],[100.914,38.179],[100.861,38.148],[100.715,38.254],[100.432,38.275],[100.319,38.329],[100.302,38.388],[100.259,38.366],[100.24,38.442],[100.064,38.519],[100.001,38.467],[100.164,38.328],[100.183,38.222],[100.126,38.232],[99.659,38.449],[99.362,38.718],[99.069,38.897],[99.108,38.952],[98.952,38.988],[98.817,39.086],[98.744,39.087],[98.585,38.93],[98.458,38.953],[98.384,39.03],[98.281,39.027],[98.242,38.881],[98.092,38.786],[97.347,39.168],[96.962,39.198],[97.012,39.142],[96.941,38.908],[97.056,38.595],[96.961,38.558],[96.794,38.608],[96.781,38.504],[96.667,38.484],[96.708,38.459],[96.627,38.356],[96.665,38.23],[96.378,38.277],[96.264,38.146],[96.066,38.173],[95.704,38.4],[95.456,38.292],[95.259,38.303],[95.122,38.417],[94.974,38.43],[94.561,38.352],[94.37,38.763],[93.885,38.721],[93.756,38.807],[93.884,38.826],[93.884,38.868],[93.729,38.924],[93.179,38.924],[93.198,39.046],[93.115,39.18],[92.49,39.1],[92.38,39],[91.447,38.814],[91.299,38.746],[90.619,38.665],[90.646,38.635],[90.609,38.595],[90.463,38.557],[90.427,38.494],[90.131,38.494],[90.112,38.419],[90.18,38.397],[90.138,38.341],[90.281,38.238],[90.353,38.233],[90.362,38.3],[90.531,38.32],[90.52,37.731],[90.778,37.649],[90.958,37.478],[91.073,37.476],[91.195,37.274],[91.191,37.206],[91.28,37.164],[91.304,37.012],[91.181,37.025],[91.037,36.93],[90.854,36.915],[90.732,36.826],[90.755,36.721],[90.706,36.659],[90.741,36.586],[91.036,36.53],[91.026,36.324],[91.073,36.299],[91.052,36.238],[91.125,36.116],[90.979,36.107],[90.923,36.029],[90.85,36.017],[90.659,36.135],[90.237,36.16],[90.003,36.279],[90.02,36.214],[89.945,36.141],[89.941,36.068],[89.689,36.091],[89.605,36.038],[89.405,36.017],[89.428,35.918],[89.551,35.857],[89.802,35.848],[89.726,35.648],[89.766,35.6],[89.7,35.545],[89.765,35.483],[89.497,35.361],[89.532,35.276],[89.45,35.224],[89.593,35.104],[89.579,34.895],[89.788,34.922],[89.868,34.811],[89.732,34.732],[89.726,34.661],[89.799,34.629],[89.799,34.396],[89.867,34.325],[89.817,34.169],[89.635,34.05],[89.795,33.865],[89.942,33.801],[89.902,33.758],[90.008,33.688],[90.011,33.554],[90.107,33.461],[90.247,33.424],[90.363,33.279],[90.491,33.265],[90.704,33.136],[90.883,33.12],[90.902,33.083],[90.928,33.12],[91.148,33.072],[91.227,33.142],[91.436,33.066],[91.536,33.1],[91.583,33.038],[91.839,32.948],[91.956,32.821],[92.146,32.886],[92.205,32.866],[92.199,32.755],[92.255,32.721],[92.356,32.765],[92.635,32.721],[92.686,32.765],[92.867,32.698],[93.02,32.737],[93.07,32.626],[93.24,32.662],[93.385,32.525],[93.463,32.556],[93.517,32.476],[93.722,32.578],[93.82,32.55],[93.862,32.466],[93.96,32.485],[94.138,32.434],[94.197,32.516],[94.372,32.525],[94.395,32.594],[94.463,32.572],[94.614,32.674],[94.912,32.416],[95.219,32.397],[95.262,32.348],[95.097,32.322],[95.079,32.28],[95.241,32.321],[95.315,32.149],[95.44,32.158],[95.421,32.034],[95.454,32.008],[95.361,31.959],[95.512,31.75],[95.634,31.783],[95.78,31.749],[95.824,31.682],[95.899,31.817],[95.984,31.817],[96.149,31.686],[96.157,31.603],[96.208,31.599],[96.252,31.698],[96.178,31.775],[96.189,31.904],[96.389,31.92],[96.469,31.77],[96.779,31.676],[96.84,31.72],[96.766,31.819],[96.811,31.894],[96.723,32.013],[96.869,31.965],[97.007,32.068],[97.17,32.033],[97.234,32.064],[97.22,32.109],[97.308,32.077],[97.264,32.183],[97.3,32.295],[97.371,32.273],[97.425,32.323],[97.388,32.427],[97.341,32.441],[97.388,32.502],[97.332,32.542],[97.449,32.587],[97.502,32.531],[97.731,32.527],[97.424,32.705],[97.348,32.896],[97.376,32.957],[97.524,32.989],[97.488,33.168],[97.608,33.264],[97.623,33.337],[97.754,33.41],[97.552,33.466],[97.523,33.577],[97.416,33.606],[97.423,33.755],[97.372,33.842],[97.395,33.889],[97.629,33.92],[97.703,34.037],[97.666,34.127],[97.81,34.208],[98.206,34.084],[98.4,34.085],[98.441,33.982],[98.407,33.867],[98.657,33.647],[98.617,33.637],[98.648,33.549],[98.726,33.503],[98.78,33.37],[98.76,33.277],[98.859,33.151],[99.196,33.035],[99.269,32.878],[99.376,32.9],[99.718,32.732],[99.792,32.883],[99.764,32.925],[99.851,32.942],[99.877,33.046],[100.123,32.837],[100.139,32.724],[100.088,32.669],[100.208,32.606],[100.259,32.743],[100.339,32.719],[100.399,32.756],[100.378,32.699],[100.42,32.732],[100.545,32.57],[100.646,32.526],[100.662,32.616],[100.71,32.61],[100.691,32.678],[100.932,32.6],[101.077,32.683],[101.157,32.661],[101.223,32.726],[101.237,32.825],[101.124,32.91],[101.185,33.042],[101.146,33.057],[101.125,33.221],[101.183,33.269],[101.297,33.262],[101.382,33.153],[101.403,33.225],[101.488,33.227],[101.634,33.101],[101.736,33.28],[101.65,33.323],[101.664,33.384],[101.769,33.456],[101.778,33.534],[101.622,33.502],[101.584,33.674],[101.502,33.703],[101.385,33.645],[101.237,33.686],[101.167,33.66],[101.191,33.792],[101.154,33.844],[100.995,33.892],[100.764,34.179],[100.822,34.317],[100.951,34.384],[101.055,34.323],[101.194,34.337],[101.327,34.245],[101.621,34.179],[101.736,34.08],[101.852,34.153],[101.955,34.11],[102.068,34.294],[102.15,34.272],[102.187,34.353],[102.259,34.356],[102.156,34.507],[101.935,34.587],[101.917,34.874],[102.068,34.888],[102.095,34.987],[102.296,35.072],[102.31,35.129],[102.404,35.179],[102.37,35.264],[102.281,35.303],[102.318,35.343],[102.294,35.424],[102.448,35.437],[102.503,35.585],[102.743,35.495],[102.783,35.528],[102.747,35.545],[102.809,35.56],[102.686,35.772],[102.787,35.863],[102.945,35.83],[102.968,36.044],[102.882,36.083],[103.067,36.217],[102.83,36.366]]]},{name:`宁夏`,full:`宁夏回族自治区`,hl:!1,center:[106.169866,37.291332],rings:[[[107.269,37.099],[107.335,37.139],[107.258,37.337],[107.284,37.482],[107.369,37.588],[107.311,37.61],[107.422,37.665],[107.387,37.691],[107.485,37.706],[107.499,37.766],[107.62,37.776],[107.659,37.844],[107.412,37.948],[107.441,37.996],[107.191,38.154],[106.942,38.132],[106.482,38.319],[106.648,38.471],[106.709,38.719],[106.954,38.941],[106.968,39.055],[106.859,39.108],[106.751,39.382],[106.602,39.376],[106.512,39.272],[106.28,39.262],[106.285,39.146],[106.146,39.153],[106.061,38.969],[105.971,38.909],[105.993,38.857],[105.909,38.791],[105.853,38.642],[105.821,38.367],[105.866,38.296],[105.768,38.121],[105.84,38.004],[105.761,37.8],[105.622,37.778],[105.599,37.699],[105.315,37.702],[105.028,37.581],[104.434,37.515],[104.408,37.465],[104.287,37.428],[104.68,37.408],[104.662,37.368],[104.714,37.33],[104.625,37.299],[104.601,37.243],[104.638,37.202],[104.777,37.247],[104.856,37.212],[104.955,37.04],[105.165,36.995],[105.179,36.892],[105.245,36.895],[105.335,36.801],[105.32,36.743],[105.201,36.701],[105.252,36.553],[105.362,36.497],[105.515,36.147],[105.344,36.034],[105.325,35.942],[105.398,35.857],[105.381,35.793],[105.429,35.819],[105.482,35.727],[105.759,35.725],[105.691,35.699],[105.847,35.49],[105.9,35.547],[106.079,35.51],[106.113,35.362],[106.173,35.438],[106.238,35.409],[106.363,35.239],[106.501,35.364],[106.435,35.688],[106.621,35.744],[106.751,35.689],[106.928,35.81],[106.85,35.887],[106.94,35.931],[106.902,35.944],[106.948,35.988],[106.931,36.139],[106.833,36.229],[106.773,36.213],[106.685,36.273],[106.504,36.266],[106.471,36.306],[106.523,36.469],[106.364,36.577],[106.445,36.557],[106.514,36.716],[106.594,36.75],[106.645,36.723],[106.658,36.821],[106.54,36.984],[106.596,36.94],[106.643,36.963],[106.667,37.017],[106.605,37.128],[106.75,37.099],[106.776,37.158],[106.891,37.098],[106.906,37.151],[106.998,37.107],[107.182,37.143],[107.269,37.099]],[[106.049,35.489],[105.898,35.451],[105.895,35.414],[106.054,35.455],[106.049,35.489]]]},{name:`新疆`,full:`新疆维吾尔自治区`,hl:!1,center:[85.294711,41.371801],rings:[[[96.386,42.728],[96.364,42.901],[95.88,43.28],[95.858,43.417],[95.527,44.007],[95.327,44.029],[95.414,44.299],[94.999,44.253],[94.723,44.341],[94.606,44.448],[94.359,44.516],[94.215,44.668],[93.509,44.968],[92.884,45.047],[92.24,45.016],[92.057,45.087],[91.562,45.076],[91.449,45.157],[91.378,45.111],[91.13,45.216],[90.882,45.192],[90.898,45.25],[90.805,45.295],[90.773,45.432],[90.671,45.488],[90.677,45.582],[90.715,45.729],[91.028,46.023],[91.022,46.121],[90.9,46.312],[90.983,46.375],[91.079,46.559],[91.018,46.582],[91.054,46.718],[90.943,46.826],[90.958,46.879],[90.901,46.961],[90.767,46.993],[90.561,47.207],[90.488,47.317],[90.526,47.379],[90.468,47.405],[90.468,47.498],[90.346,47.637],[90.385,47.644],[90.135,47.723],[90.076,47.777],[90.066,47.884],[89.762,47.836],[89.569,48.038],[89.078,47.987],[88.939,48.115],[88.824,48.107],[88.638,48.184],[88.575,48.278],[88.606,48.338],[88.523,48.403],[88.438,48.394],[88.318,48.478],[87.973,48.576],[88.091,48.72],[87.827,48.801],[87.742,48.881],[87.912,48.98],[87.835,49.054],[87.867,49.109],[87.821,49.174],[87.517,49.146],[87.437,49.075],[87.113,49.155],[86.888,49.132],[86.732,48.995],[86.758,48.895],[86.821,48.85],[86.754,48.785],[86.781,48.731],[86.58,48.539],[86.305,48.492],[86.226,48.432],[85.792,48.419],[85.587,48.192],[85.532,48.046],[85.615,47.498],[85.685,47.429],[85.701,47.289],[85.546,47.058],[85.277,47.069],[84.987,46.918],[84.955,46.861],[84.748,47.01],[83.933,46.97],[83.576,47.059],[83.37,47.178],[83.258,47.173],[83.155,47.236],[83.027,47.215],[82.878,46.797],[82.83,46.773],[82.462,45.98],[82.343,45.935],[82.34,45.773],[82.267,45.62],[82.282,45.539],[82.547,45.426],[82.601,45.346],[82.563,45.205],[82.487,45.181],[82.294,45.248],[81.921,45.233],[81.788,45.384],[80.898,45.127],[80.732,45.156],[80.599,45.106],[80.494,45.127],[80.358,45.041],[80.112,45.053],[79.888,44.909],[79.969,44.878],[79.999,44.794],[80.17,44.845],[80.201,44.757],[80.4,44.629],[80.35,44.485],[80.413,44.265],[80.394,44.127],[80.45,44.078],[80.522,43.816],[80.755,43.494],[80.686,43.334],[80.777,43.308],[80.804,43.178],[80.794,43.137],[80.593,43.133],[80.379,43.032],[80.603,42.894],[80.262,42.829],[80.164,42.63],[80.265,42.502],[80.206,42.431],[80.292,42.26],[80.169,42.2],[80.14,42.151],[80.193,42.082],[80.142,42.035],[79.924,42.042],[79.853,42.015],[79.776,41.892],[79.326,41.81],[79.217,41.726],[78.697,41.542],[78.65,41.467],[78.164,41.383],[78.129,41.228],[77.836,41.153],[77.829,41.059],[77.781,41.023],[77.169,41.009],[77.002,41.073],[76.886,41.027],[76.762,40.954],[76.732,40.819],[76.647,40.76],[76.657,40.62],[76.557,40.542],[76.54,40.464],[76.333,40.343],[76.28,40.439],[76.176,40.381],[75.986,40.382],[75.922,40.291],[75.831,40.327],[75.709,40.281],[75.67,40.364],[75.733,40.474],[75.646,40.517],[75.6,40.66],[75.242,40.449],[74.995,40.455],[74.844,40.521],[74.795,40.443],[74.909,40.339],[74.7,40.346],[74.673,40.279],[74.577,40.26],[74.357,40.089],[74.263,40.125],[74.023,40.085],[73.845,39.831],[73.842,39.756],[73.924,39.722],[73.954,39.6],[73.868,39.483],[73.611,39.466],[73.593,39.412],[73.502,39.384],[73.554,39.35],[73.542,39.27],[73.64,39.22],[73.743,39.03],[73.84,39.008],[73.826,38.917],[73.743,38.934],[73.699,38.858],[73.769,38.776],[73.799,38.611],[74.012,38.525],[74.091,38.542],[74.068,38.586],[74.148,38.677],[74.422,38.648],[74.64,38.6],[74.863,38.484],[74.869,38.404],[74.79,38.325],[74.804,38.167],[74.88,38.021],[74.926,38.017],[74.917,37.845],[75.006,37.771],[74.892,37.668],[74.941,37.559],[75.13,37.459],[75.14,37.355],[74.927,37.278],[74.911,37.233],[74.816,37.217],[74.727,37.283],[74.666,37.236],[74.511,37.24],[74.465,37.147],[74.499,37.072],[74.568,37.033],[74.709,37.085],[74.739,37.028],[74.847,37.057],[74.894,36.94],[75.032,37.017],[75.414,36.955],[75.459,36.721],[75.634,36.772],[75.871,36.667],[76.035,36.409],[75.991,36.352],[76.061,36.225],[76.012,36.229],[76.017,36.165],[75.937,36.135],[75.949,36.07],[76.097,36.023],[76.165,35.909],[76.16,35.824],[76.366,35.824],[76.37,35.863],[76.558,35.923],[76.597,35.896],[76.594,35.772],[76.693,35.748],[76.769,35.654],[76.849,35.668],[77.196,35.519],[77.308,35.541],[77.397,35.468],[77.691,35.448],[77.816,35.519],[77.915,35.465],[78.14,35.495],[78.013,35.366],[78.017,35.228],[78.238,34.882],[78.213,34.718],[78.267,34.705],[78.281,34.623],[78.427,34.594],[78.436,34.544],[78.543,34.574],[78.581,34.505],[78.708,34.522],[78.9,34.355],[78.959,34.386],[79.04,34.335],[79.011,34.4],[79.162,34.441],[79.242,34.415],[79.802,34.479],[79.861,34.528],[79.927,34.849],[80.034,34.902],[80.031,35.034],[80.258,35.203],[80.363,35.209],[80.268,35.296],[80.321,35.387],[80.433,35.449],[80.515,35.392],[80.656,35.394],[80.689,35.339],[80.964,35.311],[81.026,35.311],[81.032,35.381],[81.099,35.407],[81.219,35.319],[81.364,35.355],[81.441,35.333],[81.513,35.235],[81.686,35.236],[82.03,35.322],[82.034,35.452],[82.328,35.56],[82.336,35.651],[82.469,35.718],[82.732,35.638],[82.795,35.688],[82.967,35.668],[82.999,35.485],[83.127,35.399],[83.251,35.418],[83.622,35.335],[84.006,35.423],[84.161,35.36],[84.453,35.473],[84.449,35.55],[85.053,35.752],[85.271,35.789],[85.374,35.7],[85.613,35.651],[85.691,35.751],[85.949,35.779],[86.053,35.843],[86.2,36.048],[86.188,36.131],[86.455,36.221],[86.699,36.244],[86.746,36.292],[86.863,36.3],[86.887,36.263],[86.996,36.309],[87.149,36.298],[87.363,36.42],[87.57,36.342],[87.983,36.438],[88.471,36.482],[88.573,36.461],[88.767,36.292],[88.926,36.365],[89.127,36.255],[89.232,36.296],[89.293,36.231],[89.767,36.074],[89.941,36.068],[89.945,36.141],[90.02,36.214],[90.003,36.279],[90.043,36.277],[90.237,36.16],[90.659,36.135],[90.85,36.017],[90.923,36.029],[90.979,36.107],[91.125,36.116],[91.052,36.238],[91.073,36.299],[91.026,36.324],[91.036,36.53],[90.741,36.586],[90.706,36.659],[90.755,36.721],[90.732,36.826],[90.854,36.915],[91.037,36.93],[91.181,37.025],[91.304,37.012],[91.28,37.164],[91.191,37.206],[91.195,37.274],[91.073,37.476],[90.958,37.478],[90.778,37.649],[90.52,37.731],[90.531,38.32],[90.362,38.3],[90.353,38.233],[90.281,38.238],[90.138,38.341],[90.18,38.397],[90.112,38.419],[90.112,38.478],[90.427,38.494],[90.463,38.557],[90.609,38.595],[90.66,38.674],[91.299,38.746],[91.447,38.814],[92.416,39.011],[92.367,39.059],[92.339,39.237],[92.64,39.514],[92.797,40.154],[92.907,40.311],[92.928,40.573],[93.761,40.665],[93.821,40.794],[93.81,40.88],[94.011,41.115],[94.534,41.506],[94.75,41.538],[94.862,41.668],[95.136,41.773],[95.3,41.566],[95.336,41.644],[95.571,41.796],[96.055,41.936],[96.138,42.02],[96.077,42.149],[96.178,42.218],[96.041,42.327],[96.066,42.415],[95.979,42.437],[96.104,42.604],[96.386,42.728]]]},{name:`台湾`,full:`台湾省`,hl:!1,center:[120.971485,23.749452],rings:[[[120.444,22.441],[120.57,22.362],[120.641,22.242],[120.702,21.927],[120.855,21.883],[120.908,22.033],[120.915,22.303],[121.033,22.651],[121.211,22.771],[121.43,23.137],[121.66,24.007],[121.644,24.098],[121.886,24.53],[121.845,24.836],[122.013,25.001],[121.947,25.032],[121.917,25.138],[121.745,25.162],[121.623,25.295],[121.445,25.271],[121.372,25.16],[121.025,25.041],[120.892,24.767],[120.689,24.601],[120.246,23.84],[120.102,23.701],[120.108,23.341],[120.019,23.073],[120.133,23.001],[120.274,22.56],[120.444,22.441]],[[119.646,23.551],[119.691,23.547],[119.678,23.6],[119.567,23.585],[119.579,23.503],[119.646,23.551]]]},{name:`香港`,full:`香港特别行政区`,hl:!1,center:[114.134357,22.377366],rings:[[[114.032,22.504],[113.918,22.418],[113.92,22.368],[114.026,22.348],[113.898,22.309],[113.849,22.191],[113.997,22.206],[114.07,22.327],[114.146,22.301],[114.12,22.272],[114.165,22.227],[114.266,22.201],[114.262,22.295],[114.313,22.264],[114.283,22.387],[114.395,22.362],[114.406,22.434],[114.326,22.479],[114.22,22.428],[114.341,22.503],[114.26,22.548],[114.032,22.504]]]},{name:`澳门`,full:`澳门特别行政区`,hl:!1,center:[113.566988,22.159307],rings:[]}],jd:[[[122.519,23.461],[122.799,24.574],[122.799,24.577],[122.798,24.58],[122.797,24.583],[122.794,24.585],[122.791,24.586],[122.788,24.586],[122.785,24.585],[122.783,24.584],[122.78,24.581],[122.779,24.579],[122.499,23.466],[122.499,23.463],[122.5,23.459],[122.501,23.457],[122.504,23.455],[122.507,23.454],[122.51,23.453],[122.513,23.454],[122.515,23.456],[122.517,23.458],[122.519,23.461]],[[121.172,20.805],[121.909,21.687],[121.911,21.69],[121.912,21.693],[121.911,21.696],[121.91,21.699],[121.908,21.702],[121.905,21.703],[121.902,21.704],[121.899,21.704],[121.896,21.702],[121.894,21.7],[121.157,20.818],[121.155,20.816],[121.154,20.813],[121.155,20.809],[121.156,20.807],[121.158,20.804],[121.161,20.803],[121.164,20.802],[121.167,20.802],[121.17,20.803],[121.172,20.805]],[[119.474,18.007],[120.026,19.024],[120.027,19.027],[120.027,19.03],[120.026,19.033],[120.024,19.036],[120.022,19.038],[120.019,19.039],[120.016,19.039],[120.013,19.038],[120.01,19.036],[120.008,19.034],[119.456,18.017],[119.455,18.014],[119.455,18.011],[119.456,18.008],[119.458,18.005],[119.46,18.003],[119.463,18.002],[119.466,18.002],[119.469,18.003],[119.472,18.005],[119.474,18.007]],[[119.073,15.041],[119.073,16.044],[119.072,16.047],[119.071,16.05],[119.069,16.052],[119.066,16.053],[119.063,16.054],[119.06,16.053],[119.057,16.052],[119.055,16.05],[119.053,16.047],[119.053,16.044],[119.053,15.041],[119.052,15.008],[119.053,15.005],[119.054,15.002],[119.056,15],[119.059,14.998],[119.062,14.998],[119.065,14.998],[119.068,14.999],[119.07,15.002],[119.072,15.004],[119.072,15.008],[119.073,15.041],[119.073,15.041]],[[118.686,11.19],[118.525,10.915],[118.524,10.913],[118.524,10.909],[118.525,10.906],[118.526,10.904],[118.529,10.902],[118.532,10.901],[118.535,10.9],[118.538,10.901],[118.54,10.903],[118.542,10.905],[118.704,11.18],[118.705,11.181],[118.874,11.607],[118.875,11.607],[118.989,11.986],[118.989,11.989],[118.989,11.992],[118.987,11.995],[118.985,11.997],[118.982,11.998],[118.979,11.999],[118.976,11.998],[118.973,11.997],[118.971,11.994],[118.97,11.992],[118.856,11.614],[118.686,11.19]],[[115.545,7.147],[116.25,7.979],[116.252,7.982],[116.253,7.985],[116.253,7.988],[116.251,7.991],[116.249,7.993],[116.247,7.995],[116.244,7.996],[116.24,7.995],[116.238,7.994],[116.235,7.992],[115.529,7.16],[115.528,7.157],[115.527,7.154],[115.527,7.151],[115.529,7.148],[115.531,7.146],[115.533,7.144],[115.536,7.143],[115.539,7.143],[115.542,7.145],[115.545,7.147]],[[112.307,3.535],[111.787,3.417],[111.784,3.416],[111.782,3.414],[111.78,3.411],[111.779,3.408],[111.779,3.405],[111.781,3.402],[111.783,3.4],[111.785,3.398],[111.788,3.397],[111.791,3.397],[112.312,3.515],[112.312,3.516],[112.521,3.579],[112.523,3.579],[112.852,3.733],[112.855,3.734],[112.857,3.737],[112.858,3.74],[112.858,3.743],[112.857,3.746],[112.855,3.748],[112.853,3.75],[112.85,3.751],[112.847,3.752],[112.844,3.751],[112.515,3.598],[112.307,3.535]],[[108.261,6.089],[108.29,6.013],[108.292,6.01],[108.294,6.008],[108.297,6.007],[108.3,6.006],[108.303,6.007],[108.306,6.009],[108.308,6.011],[108.309,6.014],[108.309,6.017],[108.309,6.02],[108.28,6.095],[108.256,6.228],[108.217,6.538],[108.219,6.95],[108.244,7.074],[108.244,7.077],[108.244,7.08],[108.242,7.083],[108.239,7.085],[108.236,7.086],[108.233,7.086],[108.23,7.085],[108.228,7.083],[108.226,7.081],[108.225,7.078],[108.199,6.953],[108.199,6.951],[108.197,6.538],[108.197,6.536],[108.236,6.225],[108.236,6.224],[108.26,6.091],[108.261,6.089]],[[110.128,11.369],[110.056,11.253],[110.054,11.25],[110.054,11.247],[110.055,11.244],[110.056,11.242],[110.059,11.24],[110.062,11.238],[110.065,11.238],[110.068,11.239],[110.07,11.24],[110.072,11.243],[110.145,11.359],[110.146,11.36],[110.207,11.481],[110.207,11.482],[110.259,11.604],[110.259,11.605],[110.304,11.783],[110.305,11.784],[110.328,11.946],[110.328,11.947],[110.334,12.142],[110.334,12.142],[110.332,12.24],[110.332,12.243],[110.33,12.246],[110.328,12.248],[110.325,12.25],[110.322,12.25],[110.319,12.25],[110.316,12.248],[110.314,12.246],[110.313,12.243],[110.312,12.24],[110.314,12.142],[110.308,11.948],[110.285,11.787],[110.24,11.611],[110.189,11.49],[110.128,11.369]],[[109.83,15.229],[109.845,15.153],[109.846,15.15],[109.848,15.148],[109.851,15.146],[109.854,15.145],[109.857,15.145],[109.86,15.147],[109.862,15.148],[109.864,15.151],[109.865,15.154],[109.865,15.157],[109.849,15.233],[109.849,15.234],[109.79,15.451],[109.789,15.452],[109.691,15.674],[109.69,15.675],[109.591,15.837],[109.591,15.837],[109.532,15.923],[109.532,15.923],[109.309,16.207],[109.307,16.209],[109.304,16.211],[109.301,16.211],[109.298,16.21],[109.295,16.209],[109.293,16.207],[109.291,16.204],[109.291,16.201],[109.292,16.198],[109.293,16.195],[109.516,15.911],[109.575,15.826],[109.673,15.666],[109.771,15.445],[109.83,15.229]]],rivers:{沂河:[[[118.74,35.983],[118.752,35.968],[118.761,35.923],[118.771,35.905],[118.835,35.849],[118.84,35.805],[118.871,35.77],[118.874,35.746],[118.86,35.712],[118.874,35.612],[118.854,35.548],[118.824,35.529],[118.815,35.508],[118.785,35.479],[118.778,35.455],[118.76,35.449],[118.753,35.434],[118.734,35.42],[118.725,35.384],[118.678,35.332],[118.666,35.309],[118.668,35.294],[118.643,35.239],[118.645,35.178],[118.616,35.123],[118.575,35.072],[118.548,35.06],[118.542,35.045],[118.523,35.03],[118.531,35.014],[118.538,34.849],[118.531,34.815],[118.554,34.797],[118.568,34.771],[118.591,34.767],[118.641,34.773],[118.668,34.76],[118.685,34.767],[118.801,34.77],[118.837,34.765],[118.874,34.746],[118.888,34.718],[118.94,34.701],[119.141,34.683],[119.179,34.693],[119.2,34.714]]],泉河:[[[115.556,33.198],[115.407,33.22],[115.382,33.229],[115.3,33.284],[115.193,33.339],[115.138,33.353],[114.982,33.411],[114.949,33.435],[114.908,33.448],[114.865,33.501],[114.81,33.54],[114.657,33.605],[114.593,33.615],[114.552,33.596],[114.525,33.603],[114.453,33.643],[114.38,33.656],[114.329,33.687],[114.267,33.708],[114.253,33.709],[114.153,33.658],[114.096,33.637],[114.068,33.614],[114.041,33.569],[114.019,33.563]]],颍河:[[[116.522,32.499],[116.48,32.498],[116.419,32.534],[116.385,32.53],[116.341,32.557],[116.318,32.608],[116.261,32.639],[116.241,32.728],[116.222,32.757],[116.203,32.772],[116.181,32.774],[116.127,32.76],[116.117,32.763],[116.094,32.793],[116.067,32.812],[115.995,32.818],[115.93,32.839],[115.871,32.872],[115.807,32.94],[115.767,33.008],[115.722,33.019],[115.698,33.072],[115.684,33.086],[115.604,33.126],[115.59,33.142],[115.574,33.189],[115.556,33.198]]],淮河:[[[118.742,33.095],[118.73,33.096],[118.721,33.115],[118.712,33.202],[118.687,33.223],[118.59,33.243],[118.559,33.225],[118.537,33.199],[118.499,33.074],[118.468,33.023],[118.428,32.992],[118.389,32.976],[118.351,32.968],[118.314,32.971],[118.289,32.978],[118.253,33.005],[118.217,33.105],[118.218,33.18],[118.197,33.205],[118.177,33.212],[118.16,33.207],[118.151,33.178],[118.034,33.161],[117.947,33.169],[117.914,33.162],[117.898,33.147],[117.896,33.062],[117.889,33.05],[117.869,33.041],[117.826,33.036],[117.784,33.054],[117.763,33.053]],[[119.284,32.718],[119.278,32.779],[119.285,32.801],[119.326,32.87],[119.327,32.899],[119.313,32.94],[119.29,32.975],[119.289,32.994],[119.326,33.019],[119.337,33.052],[119.309,33.119],[119.294,33.137],[119.256,33.162],[119.251,33.184],[119.231,33.19],[119.168,33.162],[119.155,33.147],[119.141,33.075],[119.133,33.063],[119.101,33.047],[119.038,33.037],[118.975,33.057],[118.945,33.06],[118.917,33.055],[118.895,33.062],[118.86,33.095],[118.846,33.095]],[[118.744,33.095],[118.846,33.095]],[[116.521,32.501],[116.558,32.533],[116.635,32.542],[116.656,32.562],[116.731,32.609],[116.736,32.628],[116.73,32.639],[116.691,32.67],[116.7,32.682],[116.726,32.685],[116.726,32.735],[116.748,32.736],[116.76,32.708],[116.808,32.69],[116.855,32.649],[116.883,32.633],[116.918,32.658],[117.011,32.668],[117.068,32.69],[117.078,32.699],[117.086,32.766],[117.104,32.822],[117.116,32.838],[117.138,32.848],[117.17,32.851],[117.175,32.876],[117.168,32.916],[117.195,32.94],[117.311,32.944],[117.408,32.963],[117.527,32.971],[117.542,32.965],[117.577,32.933],[117.647,32.903],[117.661,32.92],[117.688,32.985],[117.74,33.016],[117.752,33.045],[117.764,33.054]],[[119.616,32.354],[119.591,32.358],[119.534,32.348],[119.514,32.355],[119.51,32.411],[119.47,32.475],[119.472,32.532],[119.434,32.589],[119.424,32.628],[119.389,32.653],[119.367,32.657],[119.331,32.653],[119.307,32.662],[119.284,32.718]],[[114.004,32.242],[114.021,32.25],[114.034,32.281],[114.062,32.31],[114.072,32.366],[114.085,32.397],[114.104,32.41],[114.103,32.426],[114.113,32.442],[114.13,32.45],[114.182,32.411],[114.205,32.406],[114.214,32.41],[114.238,32.389],[114.31,32.361],[114.341,32.33],[114.365,32.286],[114.382,32.292],[114.44,32.279],[114.49,32.3],[114.522,32.288],[114.553,32.302],[114.574,32.307],[114.604,32.303],[114.623,32.313],[114.659,32.314],[114.66,32.287],[114.678,32.293],[114.717,32.32],[114.788,32.297],[114.823,32.306],[114.88,32.293],[114.931,32.271],[114.948,32.273],[114.982,32.3],[115.005,32.293],[115.033,32.293],[115.077,32.307],[115.109,32.369],[115.126,32.355],[115.165,32.356],[115.194,32.334],[115.211,32.342],[115.225,32.334],[115.245,32.347],[115.289,32.351],[115.349,32.382],[115.367,32.398],[115.351,32.41],[115.351,32.416],[115.361,32.422],[115.371,32.423],[115.393,32.41],[115.426,32.434],[115.53,32.401],[115.564,32.41]],[[115.564,32.402],[115.609,32.416],[115.631,32.413],[115.646,32.402],[115.687,32.467],[115.694,32.492],[115.742,32.479],[115.754,32.498],[115.79,32.471],[115.808,32.503],[115.843,32.542],[115.884,32.572],[115.92,32.574],[115.989,32.611],[116.002,32.605],[116.027,32.575],[116.107,32.524],[116.112,32.5],[116.137,32.458],[116.151,32.439],[116.174,32.43],[116.243,32.461],[116.257,32.496],[116.272,32.512],[116.289,32.519],[116.314,32.513],[116.346,32.479],[116.441,32.436],[116.481,32.445],[116.521,32.501]]],黄河:[[[114.838,35.02],[114.847,35.038],[114.847,35.081],[114.865,35.12],[114.851,35.178],[114.864,35.189],[114.941,35.219],[115.002,35.285],[115.026,35.332],[115.068,35.38],[115.132,35.398],[115.15,35.416],[115.226,35.416],[115.249,35.425],[115.307,35.476],[115.34,35.485],[115.345,35.496],[115.33,35.534],[115.341,35.555],[115.383,35.557],[115.393,35.572],[115.395,35.616],[115.403,35.63],[115.492,35.678],[115.502,35.695],[115.504,35.723],[115.576,35.722],[115.618,35.731],[115.655,35.746],[115.681,35.768],[115.73,35.83],[115.761,35.849],[115.874,35.866],[115.886,35.878],[115.884,35.888],[115.858,35.904],[115.858,35.916],[115.92,35.968],[115.944,35.98],[115.954,35.977],[115.965,35.986],[116.033,35.966],[116.039,35.976]],[[114.022,34.945],[114.062,34.932],[114.179,34.936],[114.303,34.898],[114.344,34.901],[114.379,34.918],[114.422,34.925],[114.509,34.902],[114.556,34.917],[114.577,34.918],[114.609,34.903],[114.646,34.898],[114.666,34.91],[114.707,34.91],[114.73,34.921],[114.782,34.986],[114.831,35.02]]]},riversChina:{长江:[[[119.606,32.197],[119.505,32.24],[118.774,32.187],[118.426,31.724],[118.302,31.438],[118.315,31.308],[118.014,31.238],[117.953,31.094],[117.793,31.124],[117.697,30.804],[117.226,30.673],[117.21,30.514],[116.893,30.423],[116.907,30.271],[116.809,30.102],[116.265,29.789],[115.889,29.732],[115.705,29.861],[115.463,29.871],[115.19,30.209],[115.072,30.236],[115.053,30.369],[114.829,30.441],[114.845,30.606],[114.601,30.574],[114.429,30.69],[114.296,30.587]],[[116.198,29.751],[116.208,29.779]],[[113.128,29.463],[113.664,29.955],[113.792,29.933],[114.062,30.089],[113.858,30.231],[113.968,30.291],[114.054,30.24],[114.303,30.593]]],黄河:[[[97.763,35.088],[97.697,34.92],[97.546,34.876]],[[97.288,34.835],[97.234,34.907],[97.072,34.931]],[[96.164,35.13],[96.811,35.061],[97.072,34.931]],[[97.763,35.088],[97.992,35.081],[98.137,34.893],[98.378,34.815],[98.401,34.649],[98.33,34.575],[98.515,34.401],[98.71,34.355],[98.724,34.455],[98.837,34.479],[99.056,34.41],[99.062,33.971],[99.306,33.747],[99.377,33.753],[99.395,33.827],[99.569,33.766],[99.771,33.8],[100.159,33.574],[100.289,33.692],[100.246,33.76],[100.766,33.928],[101.001,33.727],[101.035,33.877],[101.39,33.677],[101.754,33.68],[101.975,33.404],[102.097,33.34],[102.386,33.41],[102.482,33.465],[102.482,33.54],[102.356,33.609],[102.343,33.725],[102.29,33.725],[102.324,33.752],[102.167,33.946],[101.913,33.999],[101.611,34.191],[101.234,34.301],[101.14,34.5],[100.929,34.552],[100.861,34.718],[100.675,34.676],[100.495,34.805],[100.336,34.834],[100.22,35.241],[100.271,35.295],[100.131,35.467],[100.296,35.772],[100.447,35.779],[100.842,36.14],[101.064,36.146],[101.392,36.051],[101.697,36.184],[101.958,36.053],[102.099,35.83],[102.441,35.888],[103.116,35.778],[103.359,35.912],[103.189,35.99],[103.455,36.189],[103.876,36.065],[104.035,36.078],[104.019,36.182],[104.233,36.368],[104.71,36.606],[104.723,36.692],[104.592,36.833],[104.336,36.901],[104.299,37.08],[104.36,37.135],[104.311,37.168],[104.997,37.473],[105.573,37.501],[105.876,37.586],[105.993,37.885],[106.169,38.008],[106.278,38.233],[106.517,38.427],[106.573,38.71],[106.882,39.105],[106.75,39.419],[106.785,39.675],[106.71,39.899],[106.727,40.063],[107.152,40.376],[107.142,40.454],[107.271,40.638],[107.707,40.771],[107.758,40.859],[108.173,40.88],[108.241,40.814],[108.438,40.817],[108.591,40.662],[108.9,40.53],[109.047,40.557],[109.397,40.468],[109.608,40.551],[109.713,40.475],[110.203,40.54],[110.606,40.317],[110.88,40.255],[111.035,40.297],[111.303,40.156],[111.405,40.026],[111.435,39.906],[111.359,39.75],[111.463,39.62],[111.421,39.522],[111.317,39.429],[111.11,39.385],[111.227,39.297],[111.118,39.067],[110.973,38.974],[111.003,38.903],[110.872,38.621],[110.897,38.535],[110.5,38.166],[110.515,37.955],[110.743,37.765],[110.705,37.714],[110.794,37.658],[110.789,37.561],[110.637,37.418],[110.665,37.282],[110.445,37.022],[110.373,37.018],[110.418,36.967],[110.377,36.775],[110.441,36.726],[110.39,36.689],[110.499,36.524],[110.447,36.142],[110.62,35.597],[110.335,35.198],[110.237,34.801],[110.27,34.637]],[[97.288,34.835],[97.547,34.876]],[[114.838,35.02],[114.851,35.178],[115.068,35.38],[115.34,35.485],[115.504,35.723],[115.874,35.866],[115.944,35.98],[116.033,35.966],[116.078,36.11],[116.575,36.415],[116.781,36.703],[117.106,36.796],[117.238,37.031],[117.552,37.149],[117.627,37.254],[117.891,37.262],[118.207,37.375],[118.329,37.596],[118.554,37.626],[118.917,37.831],[119.033,37.803]],[[110.27,34.637],[110.53,34.584],[110.883,34.666],[110.911,34.732],[111.138,34.819],[111.557,34.863],[111.683,35.008],[111.897,35.096],[112.779,34.798],[113.09,34.842],[113.354,34.972],[113.534,34.98],[113.868,34.876],[113.998,34.949],[114.632,34.897],[114.831,35.02]]]},lakes:[{name:`洪泽湖`,ring:[[118.669,33.181],[118.652,33.191],[118.614,33.173],[118.593,33.186],[118.579,33.184],[118.558,33.153],[118.565,33.119],[118.563,33.108],[118.544,33.088],[118.55,33.059],[118.544,33.047],[118.525,33.057],[118.514,33.045],[118.5,33.009],[118.481,32.985],[118.47,32.979],[118.41,32.971],[118.334,32.938],[118.319,32.937],[118.323,32.953],[118.315,32.956],[118.295,32.95],[118.288,32.933],[118.281,32.93],[118.266,32.937],[118.261,32.933],[118.25,32.882],[118.238,32.879],[118.229,32.887],[118.223,32.909],[118.206,32.901],[118.191,32.871],[118.175,32.862],[118.174,32.878],[118.161,32.906],[118.168,32.918],[118.191,32.934],[118.189,32.95],[118.211,32.95],[118.229,32.958],[118.205,32.972],[118.151,33.023],[118.135,33.03],[118.129,33.017],[118.127,32.985],[118.116,32.972],[118.082,32.961],[118.055,32.927],[118.003,32.896],[117.986,32.86],[117.976,32.895],[117.983,32.903],[117.975,32.896],[117.99,32.919],[118.051,32.971],[118.1,33.037],[118.127,33.047],[118.173,33.034],[118.243,32.972],[118.291,32.971],[118.291,32.978],[118.255,32.989],[118.231,33.026],[118.199,33.155],[118.184,33.161],[118.158,33.163],[118.135,33.161],[118.062,33.136],[117.924,33.141],[117.907,33.136],[117.903,33.121],[117.907,33.05],[117.897,33.038],[117.844,33.021],[117.826,33.019],[117.807,33.024],[117.768,33.047],[117.757,33.06],[117.838,33.045],[117.877,33.05],[117.894,33.088],[117.878,33.148],[117.884,33.167],[117.902,33.184],[117.92,33.193],[117.966,33.197],[118.051,33.184],[118.071,33.191],[118.1,33.218],[118.116,33.224],[118.173,33.227],[118.211,33.206],[118.237,33.163],[118.229,33.118],[118.238,33.065],[118.26,33.018],[118.291,32.991],[118.343,32.979],[118.37,32.979],[118.394,32.985],[118.415,33],[118.456,33.06],[118.434,33.045],[118.403,33.031],[118.369,33.026],[118.339,33.032],[118.383,33.059],[118.457,33.081],[118.472,33.096],[118.47,33.106],[118.443,33.101],[118.485,33.138],[118.491,33.15],[118.483,33.166],[118.468,33.172],[118.432,33.17],[118.414,33.158],[118.394,33.157],[118.314,33.179],[118.287,33.195],[118.233,33.208],[118.222,33.224],[118.229,33.28],[118.209,33.314],[118.209,33.352],[118.198,33.405],[118.209,33.423],[118.21,33.395],[118.231,33.348],[118.242,33.291],[118.255,33.269],[118.305,33.239],[118.331,33.276],[118.36,33.285],[118.38,33.308],[118.398,33.314],[118.409,33.327],[118.397,33.39],[118.412,33.403],[118.446,33.394],[118.456,33.397],[118.467,33.408],[118.477,33.445],[118.489,33.446],[118.495,33.434],[118.497,33.403],[118.487,33.38],[118.49,33.373],[118.51,33.369],[118.518,33.385],[118.537,33.392],[118.557,33.388],[118.575,33.358],[118.596,33.351],[118.619,33.354],[118.634,33.369],[118.615,33.37],[118.586,33.403],[118.542,33.413],[118.541,33.434],[118.497,33.488],[118.48,33.521],[118.47,33.554],[118.462,33.619],[118.462,33.63],[118.469,33.639],[118.548,33.65],[118.565,33.658],[118.572,33.65],[118.579,33.623],[118.558,33.602],[118.577,33.604],[118.583,33.596],[118.579,33.567],[118.607,33.578],[118.616,33.563],[118.607,33.513],[118.622,33.508],[118.607,33.451],[118.613,33.451],[118.618,33.474],[118.633,33.478],[118.668,33.465],[118.782,33.446],[118.794,33.439],[118.82,33.4],[118.877,33.367],[118.881,33.359],[118.861,33.329],[118.836,33.307],[118.816,33.235],[118.788,33.215],[118.775,33.167],[118.744,33.13],[118.738,33.11],[118.744,33.088],[118.686,33.08],[118.688,33.06],[118.668,33.077],[118.661,33.106],[118.669,33.133],[118.696,33.142],[118.696,33.15],[118.669,33.181]]},{name:`高邮湖`,ring:[[119.405,32.847],[119.415,32.793],[119.408,32.766],[119.392,32.74],[119.38,32.732],[119.367,32.731],[119.352,32.741],[119.332,32.77],[119.319,32.779],[119.317,32.761],[119.307,32.741],[119.294,32.725],[119.281,32.718],[119.25,32.747],[119.227,32.759],[119.216,32.749],[119.214,32.708],[119.208,32.69],[119.196,32.677],[119.177,32.667],[119.173,32.692],[119.155,32.704],[119.175,32.711],[119.175,32.718],[119.156,32.725],[119.142,32.738],[119.121,32.786],[119.133,32.801],[119.129,32.818],[119.099,32.821],[119.082,32.832],[119.064,32.865],[119.045,32.876],[119.045,32.882],[119.067,32.884],[119.113,32.848],[119.129,32.895],[119.145,32.91],[119.15,32.907],[119.161,32.881],[119.212,32.864],[119.226,32.851],[119.285,32.876],[119.266,32.875],[119.251,32.869],[119.239,32.877],[119.237,32.888],[119.243,32.909],[119.235,32.931],[119.237,32.937],[119.264,32.93],[119.275,32.942],[119.276,32.951],[119.224,32.999],[119.264,33.019],[119.268,33.046],[119.278,33.054],[119.307,33.024],[119.316,33.019],[119.327,33.024],[119.328,33.034],[119.301,33.097],[119.299,33.112],[119.251,33.136],[119.234,33.137],[119.231,33.147],[119.243,33.167],[119.236,33.176],[119.196,33.17],[119.171,33.156],[119.158,33.134],[119.155,33.074],[119.173,33.085],[119.196,33.088],[119.158,33.057],[119.076,33.019],[118.97,33.047],[118.922,33.04],[118.897,33.05],[118.862,33.088],[118.84,33.101],[118.874,33.101],[118.889,33.097],[118.9,33.07],[118.915,33.068],[118.946,33.074],[119.052,33.047],[119.095,33.064],[119.122,33.069],[119.134,33.081],[119.139,33.094],[119.157,33.166],[119.237,33.205],[119.235,33.221],[119.245,33.228],[119.258,33.222],[119.269,33.169],[119.316,33.139],[119.329,33.086],[119.347,33.06],[119.349,33.038],[119.342,33.019],[119.305,32.991],[119.332,32.994],[119.38,33.02],[119.388,33.002],[119.405,32.847]]},{name:`微山湖`,ring:[[117.328,34.627],[117.339,34.612],[117.34,34.58],[117.306,34.559],[117.26,34.5],[117.229,34.49],[117.202,34.473],[117.197,34.486],[117.202,34.513],[117.195,34.528],[117.18,34.524],[117.169,34.536],[117.129,34.637],[117.126,34.66],[117.134,34.724],[117.118,34.738],[117.135,34.756],[117.148,34.734],[117.234,34.699],[117.328,34.627]]},{name:`骆马湖`,ring:[[118.25,34.109],[118.265,34.098],[118.268,34.091],[118.237,34.023],[118.221,34.018],[118.195,34.027],[118.156,34.05],[118.127,34.088],[118.14,34.095],[118.161,34.137],[118.174,34.138],[118.202,34.116],[118.25,34.109]]},{name:``,ring:[[116.929,32.4],[116.968,32.389],[116.968,32.382],[116.927,32.375],[116.921,32.364],[116.936,32.354],[116.941,32.344],[116.938,32.335],[116.914,32.327],[116.906,32.316],[116.899,32.262],[116.864,32.254],[116.829,32.211],[116.824,32.221],[116.831,32.24],[116.88,32.307],[116.873,32.323],[116.876,32.341],[116.893,32.375],[116.87,32.392],[116.862,32.405],[116.859,32.423],[116.89,32.481],[116.867,32.508],[116.812,32.47],[116.777,32.464],[116.816,32.489],[116.859,32.533],[116.869,32.534],[116.912,32.483],[116.914,32.468],[116.905,32.443],[116.907,32.43],[116.915,32.411],[116.929,32.4]]},{name:``,ring:[[116.31,32.217],[116.299,32.236],[116.296,32.25],[116.3,32.262],[116.321,32.276],[116.326,32.284],[116.325,32.3],[116.337,32.289],[116.348,32.288],[116.356,32.295],[116.365,32.334],[116.401,32.372],[116.415,32.378],[116.431,32.372],[116.439,32.36],[116.435,32.353],[116.414,32.334],[116.376,32.271],[116.335,32.229],[116.357,32.218],[116.357,32.204],[116.349,32.188],[116.338,32.176],[116.338,32.193],[116.31,32.217]]},{name:``,ring:[[114.233,33.002],[114.204,33.037],[114.214,33.054],[114.246,33.07],[114.269,33.056],[114.281,33.023],[114.273,32.964],[114.268,32.956],[114.258,32.961],[114.233,33.002]]}]},ad={bg:new Y(`#0b0e11`),ink:new Y(`#3c464e`),paper:new Y(`#e8e2d4`),river:new Y(`#6fb3cc`),pla:new Y(`#d0453a`),kmt:new Y(`#4f8fe0`),prov:new Y(`#304754`),provHL:new Y(`#633e31`),border:new Y(`#56646c`)},od=-.35,sd=new Y(`#151c21`),cd=new Y(`#241a17`),ld=([e,t])=>_u(e,t),ud=([e,t],n=0)=>e>=lu.lonMin+n&&e<=lu.lonMax-n&&t>=lu.latMin+n&&t<=lu.latMax-n;function dd(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];o.y>t!=s.y>t&&e<(s.x-o.x)*(t-o.y)/(s.y-o.y)+o.x&&(r=!r)}return r}function fd(e,t=.02){let n=[],r=[];for(let i of e)ud(i,t)?r.push(i):r.length&&(n.push(r),r=[]);return r.length&&n.push(r),n.filter(e=>e.length>=2)}function pd(e,t=.12){let n=[e[0].clone()];for(let r=1;r<e.length;r++){let i=e[r-1],a=e[r],o=Math.max(1,Math.ceil(i.distanceTo(a)/t));for(let e=1;e<=o;e++)n.push(i.clone().lerp(a,e/o))}return n}var md=[];function hd(){md=id.lakes.map(e=>{let t=e.ring.map(ld),n=t.map(e=>e.x),r=t.map(e=>e.y);return{...e,poly:t,box:[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)]}}).filter(e=>e.ring.some(e=>ud(e))),Du(null);for(let e of md){let t=e.poly.map(e=>Ou(e.x,e.y)).sort((e,t)=>e-t);e.level=t[Math.floor(t.length*.15)]+.008}Du((e,t)=>{for(let n of md)if(!(e<n.box[0]||e>n.box[1]||t<n.box[2]||t>n.box[3])&&dd(e,t,n.poly))return 1;return 0})}function gd(e,t){let n=[],r=[],i=[],a=0;for(let o of e){let e=o.map(ld);if(t&&e.length>2&&e[0].distanceTo(e[e.length-1])>1e-6&&e.push(e[0].clone()),!(e.length<2)){for(let t=0;t<e.length;t++){let o=e[Math.max(0,t-1)],s=e[Math.min(e.length-1,t+1)],c=new G().subVectors(s,o);c.lengthSq()<1e-12&&c.set(1,0),c.normalize();let l=new G(-c.y,c.x);for(let i of[-1,1])n.push(e[t].x,0,e[t].y),r.push(l.x*i,l.y*i);if(t>0){let e=a+(t-1)*2;i.push(e,e+2,e+1,e+1,e+2,e+3)}}a+=e.length*2}}let o=new Er;return o.setAttribute(`position`,new mr(n,3)),o.setAttribute(`aSide`,new mr(r,2)),o.setIndex(i),o}function _d(e,t,n=1){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Y(e)},uPx:{value:t},uWpp:{value:1},uOpacity:{value:n}},vertexShader:`attribute vec2 aSide; uniform float uPx, uWpp;
      void main(){ vec3 p = position; p.xz += aSide * uPx * uWpp * 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity;
      void main(){ gl_FragColor = vec4(uColor, uOpacity);
        #include <colorspace_fragment>
      }`})}function vd(e){let t=[];for(let n of e){if(n.length<4)continue;let e=new ka(new Ui(n.map(([e,t])=>{let n=_u(e,t);return new G(n.x,-n.y)})));e.rotateX(-Math.PI/2),t.push(e)}return t.length?ku(t):null}var yd=`
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vH;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vH = position.y;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,bd=`
  uniform vec3 uInk, uBg, uPla;
  uniform vec3 uLight;
  uniform vec4 uRect;      // xmin, xmax, zmin, zmax
  uniform vec4 uGeo;       // LON0, LAT0, KX, KZ
  uniform vec3 uFocus;     // x, z, radius
  uniform float uFocusAmt;
  uniform float uFogDensity;
  uniform float uVex;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vH;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5453); }
  float lineAA(float v, float w) {
    float d = abs(fract(v - 0.5) - 0.5);
    float fw = fwidth(v) * w;
    return 1.0 - smoothstep(0.0, fw, d);
  }
  vec3 hyps(float m) {
    vec3 c0 = vec3(0.105, 0.145, 0.118);  // 0 m  平原
    vec3 c1 = vec3(0.140, 0.185, 0.135);  // 40 m
    vec3 c2 = vec3(0.230, 0.235, 0.160);  // 100 m 丘陵
    vec3 c3 = vec3(0.330, 0.300, 0.200);  // 200 m
    vec3 c4 = vec3(0.450, 0.390, 0.270);  // 400 m 低山
    vec3 c = mix(c0, c1, smoothstep(0.0, 40.0, m));
    c = mix(c, c2, smoothstep(40.0, 100.0, m));
    c = mix(c, c3, smoothstep(100.0, 200.0, m));
    c = mix(c, c4, smoothstep(200.0, 400.0, m));
    return c;
  }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 L = normalize(uLight);
    float hs = clamp(dot(n, L) / L.y, 0.25, 1.8);
    float m = vH / uVex;
    vec3 col;
    if (vH < 0.0) {
      col = mix(vec3(0.06, 0.11, 0.15), vec3(0.04, 0.07, 0.10), smoothstep(0.0, -0.12, vH));
    } else {
      col = hyps(m);
      col *= 0.62 + 0.42 * hs;
      // 等高线：25 米细线、100 米粗线（平原上不画）
      float c25 = lineAA(m / 25.0, 1.0) * smoothstep(45.0, 70.0, m);
      float c100 = lineAA(m / 100.0, 1.3) * smoothstep(60.0, 100.0, m);
      col = mix(col, uInk * 1.6, c25 * 0.35 + c100 * 0.45);
    }
    col *= 0.97 + 0.05 * hash(floor(vWorld.xz * 60.0));

    // 经纬网（0.5° 细线，1° 粗线）
    float lon = vWorld.x / uGeo.z + uGeo.x;
    float lat = -vWorld.z / uGeo.w + uGeo.y;
    float g1 = max(lineAA(lon * 2.0, 0.8), lineAA(lat * 2.0, 0.8));
    float g2 = max(lineAA(lon, 1.2), lineAA(lat, 1.2));
    col = mix(col, uInk * 1.2, g1 * 0.16 + g2 * 0.30);

    // 当前战场聚光
    float fd = length(vWorld.xz - uFocus.xy);
    float spot = 1.0 - smoothstep(uFocus.z * 0.35, uFocus.z, fd);
    col *= 1.0 + uFocusAmt * (spot * 0.25 - (1.0 - spot) * 0.25);
    col = mix(col, col + uPla * 0.05, uFocusAmt * spot);

    // 雾
    float dist = length(vWorld - cameraPosition);
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
    col = mix(col, uBg, clamp(fog, 0.0, 1.0) * 0.85);

    // 边缘渐隐到下面的中国底图
    float e = min(min(vWorld.x - uRect.x, uRect.y - vWorld.x), min(vWorld.z - uRect.z, uRect.w - vWorld.z));
    float a = smoothstep(0.0, 2.5, e);
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }
`;function xd(e){let t=new wn;e.add(t);let n=[],r=[];hd();let i=new wn;i.position.y=od,t.add(i);let a=vd(id.provinces.filter(e=>!e.hl).flatMap(e=>e.rings)),o=vd(id.provinces.filter(e=>e.hl).flatMap(e=>e.rings)),s=new Rr({color:ad.prov}),c=new Rr({color:ad.provHL});if(a){let e=new X(a,s);e.renderOrder=-10,i.add(e)}if(o){let e=new X(o,c);e.position.y=.002,e.renderOrder=-10,i.add(e)}let l=vd(id.jd);if(l){let e=new X(l,new Rr({color:ad.border}));e.renderOrder=-10,i.add(e)}let u=(e,t,n,a,o,s=.01)=>{let c=_d(n,a,o),l=new X(gd(e,t),c);return l.position.y=s,l.renderOrder=-8,i.add(l),r.push(c),l};u(id.provinces.filter(e=>!e.hl).flatMap(e=>e.rings),!0,`#8a9ea8`,1.2,.9),u(Object.values(id.riversChina).flat(),!1,`#3f7f97`,1.4,.85,.012),u(id.provinces.filter(e=>e.hl).flatMap(e=>e.rings),!0,`#c9665a`,1.8,1,.014),u(id.jd,!0,`#8a9ea8`,1.2,.9);let d=[115.5,119.4,32.75,35.05],f=_d(`#ff5a48`,3.5,0),p=new X(gd([[[d[0],d[2]],[d[1],d[2]],[d[1],d[3]],[d[0],d[3]]]],!0),f);p.position.y=.6,p.renderOrder=8,t.add(p),r.push(f);let m=_u(lu.lonMin,lu.latMax),h=_u(lu.lonMax,lu.latMin),g=new Da(hu,gu,Math.round(hu*5),Math.round(gu*5));g.rotateX(-Math.PI/2),g.translate((m.x+h.x)/2,0,(m.y+h.y)/2);let _=g.attributes.position;for(let e=0;e<_.count;e++)_.setY(e,Ou(_.getX(e),_.getZ(e)));g.computeVertexNormals();let v={uInk:{value:ad.ink},uBg:{value:ad.bg},uPla:{value:ad.pla},uLight:{value:new K(-.6,.7,-.5)},uRect:{value:new Wt(m.x,h.x,m.y,h.y)},uGeo:{value:new Wt(yu.LON0,yu.LAT0,yu.KX,yu.KZ)},uFocus:{value:new K(0,0,4)},uFocusAmt:{value:0},uFogDensity:{value:.01},uVex:{value:mu}},y=new X(g,new za({uniforms:v,vertexShader:yd,fragmentShader:bd,transparent:!0}));y.renderOrder=-1,t.add(y);let b=[];for(let e of id.provinces)for(let t of e.rings)for(let e of fd(t))b.push(e);let x=Sd(new Y(`#d8c7a0`),.55);for(let e of b){let n=pd(e.map(ld),.12);if(n.length<2)continue;let r=new X(Nu(n,()=>.075,{lift:.03}),x);r.renderOrder=1,t.add(r)}for(let e of md){let n=new ka(new Ui(e.poly.map(e=>new G(e.x,-e.y))));n.rotateX(-Math.PI/2);let r=new X(n,new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:ad.river},uTime:{value:0}},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 uColor; uniform float uTime; varying vec3 vW;
        void main(){ float l = abs(fract(vW.z*3.0 + vW.x*0.4 + uTime*0.03)-0.5);
          float hatch = 1.0 - smoothstep(0.0, fwidth(vW.z*3.0)*1.2, l);
          vec3 c = mix(vec3(0.10,0.22,0.28), uColor*0.75, hatch*0.35);
          gl_FragColor = vec4(c, 0.95);
          #include <colorspace_fragment>
        }`}));r.position.y=e.level,r.renderOrder=1,t.add(r);let i=pd(e.poly.concat([e.poly[0]]),.1);t.add(new X(Nu(i,()=>.05,{lift:.01}),Cd(.7)))}let S=[];for(let[e,t]of Object.entries(id.rivers))for(let n of t)for(let t of fd(n))S.push({name:e,pts:t});for(let e of Uu)for(let t of fd(e.pts))S.push({name:e.name,pts:t,hand:!0});for(let e of S){let n=e.hand?ju(e.pts.map(ld),{step:.12}):pd(e.pts.map(ld),.12),r=e.name===`淮河`||e.name===`黄河`,i=r?.2:e.name===`废黄河`?.09:.11,a=new X(Nu(n,()=>i,{lift:.03}),Cd(r?1.1:e.name===`废黄河`?.45:.75));a.renderOrder=2,t.add(a)}for(let e of Ku)for(let n of fd(e.pts,.01)){let e=new X(Nu(ju(n.map(ld),{step:.08,tension:.2}),()=>.1,{lift:.045}),wd());e.renderOrder=3,t.add(e)}let C=[],w=new Oa(.1,.15,40).rotateX(-Math.PI/2),T=new di(.06,24).rotateX(-Math.PI/2),E=new Oa(.16,.23,4,1).rotateX(-Math.PI/2).rotateY(Math.PI/4),D=new fi(.35,.35,.3,12),O=new Rr({visible:!1}),k=(e,r)=>{let i=_u(e.lon,e.lat),a=new wn;a.position.set(i.x,Ou(i.x,i.y)+.06,i.y);let o=new Rr({color:r===`site`?ad.pla.clone().lerp(ad.paper,.3):ad.paper,transparent:!0,opacity:.95,depthWrite:!1}),s=o.clone();a.add(new X(r===`site`?E:w,o)),a.add(new X(T,s)),e.rank===0&&a.add(new X(new Oa(.21,.25,48).rotateX(-Math.PI/2),o));let c=new X(D,O);c.userData.fact=e.fact,a.add(c),a.renderOrder=7,n.push(c),t.add(a),C.push({item:e,kind:r,group:a,mats:[o,s]})};return zu.forEach(e=>k(e,`city`)),Hu.forEach(e=>k(e,`site`)),{group:t,terrain:y,terrainUniforms:v,markers:C,clickables:n,tick(e,{wpp:n,chinaAmt:i}){for(let e of r)e.uniforms.uWpp.value=n;f.uniforms.uOpacity.value=i*(.75+.25*Math.sin(e*2.4)),p.visible=i>.01;let a=.25+.75*i;s.color.copy(sd).lerp(ad.prov,a),c.color.copy(cd).lerp(ad.provHL,a),t.traverse(t=>{t.material?.uniforms?.uTime&&(t.material.uniforms.uTime.value=e)})}}}function Sd(e,t){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:e},uOpacity:{value:t}},vertexShader:`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv;
      void main(){
        float dash = step(0.38, fract(vUv.x / 0.34));
        float aa = 1.0 - smoothstep(0.55, 1.0, abs(vUv.y));
        gl_FragColor = vec4(uColor, uOpacity * dash * aa);
        #include <colorspace_fragment>
      }`})}function Cd(e){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:ad.river},uStrength:{value:e},uTime:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uStrength; uniform float uTime; varying vec2 vUv;
      void main(){
        float d = abs(vUv.y);
        float core = 1.0 - smoothstep(0.3, 0.75, d);
        float halo = 1.0 - smoothstep(0.5, 1.0, d);
        float shimmer = 0.9 + 0.1 * sin(vUv.x * 3.0 - uTime * 0.8);
        vec3 c = uColor * shimmer;
        gl_FragColor = vec4(c, clamp((core * 0.95 + halo * 0.3) * uStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }`})}function wd(){return new za({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec2 vUv;
      void main(){
        float d = abs(vUv.y);
        float edge = smoothstep(0.55, 0.7, d) * (1.0 - smoothstep(0.85, 1.0, d));
        float dash = step(0.5, fract(vUv.x / 0.42));
        vec3 light = vec3(0.86, 0.83, 0.76), dark = vec3(0.08, 0.09, 0.10);
        vec3 c = mix(mix(dark, light, dash), light * 0.95, edge);
        float a = (1.0 - smoothstep(0.85, 1.0, d)) * 0.92;
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
      }`})}var Td={linear:e=>e,inOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,outCubic:e=>1-(1-e)**3,inOutQuint:e=>e<.5?16*e**5:1-(-2*e+2)**5/2,inOutSine:e=>-(Math.cos(Math.PI*e)-1)/2},Ed=new Set;function Dd(e){let t={t:-(e.delay||0),dur:Math.max(.001,e.dur??1),ease:e.ease||Td.inOutCubic,...e};return Ed.add(t),t}function Od(e){for(let t of Ed)t.group===e&&Ed.delete(t)}function kd(e){for(let t of Ed){if(t.t+=e,t.t<0)continue;let n=Math.min(1,t.t/t.dur);t.started||(t.started=!0,t.start?.()),t.update?.(t.ease(n)),n>=1&&(Ed.delete(t),t.done?.())}}var Ad=(e,t,n)=>e+(t-e)*n,jd={pla:`#b8352b`,kmt:`#2c68c0`},Md=`#f6f1e6`;function Nd(e){switch(e){case`inf`:return`<path d="M2 2 34 22M34 2 2 22" stroke="${Md}" stroke-width="2.2"/>`;case`armor`:return`<rect x="8" y="6.5" width="20" height="11" rx="5.5" fill="none" stroke="${Md}" stroke-width="2.2"/>`;case`art`:return`<circle cx="18" cy="12" r="4.4" fill="${Md}"/>`;case`cav`:return`<path d="M2 22 34 2" stroke="${Md}" stroke-width="2.2"/>`;case`hq`:return`<path d="M9 12h18" stroke="${Md}" stroke-width="2.2"/>`;default:return``}}function Pd(e,t,n=18){let r=e===`hq`,i=r?34:24;return`<svg class="arm" viewBox="0 0 36 ${i}" width="${(36*n/24).toFixed(1)}" height="${(i*n/24).toFixed(1)}" aria-hidden="true"><rect x="1" y="1" width="34" height="22" fill="${jd[t]}" stroke="${Md}" stroke-width="1.6"/>`+Nd(e)+(r?`<path d="M1.8 23v10" stroke="${Md}" stroke-width="2.2"/>`:``)+`</svg>`}function Fd(e,t,n=20){let r=e.includes(`hq`),i=r?34:24,a=e.map(Nd).join(``);return`<svg class="arm" viewBox="0 0 36 ${i}" width="${(36*n/24).toFixed(1)}" height="${(i*n/24).toFixed(1)}" aria-hidden="true"><rect x="1" y="1" width="34" height="22" fill="${jd[t]}" stroke="${Md}" stroke-width="1.6"/>`+a+(r?`<path d="M1.8 23v10" stroke="${Md}" stroke-width="2.2"/>`:``)+`</svg>`}function Id(e,t,n,r){let i=n/36,a=r/24;e.save(),e.scale(i,a),e.strokeStyle=Md,e.fillStyle=Md,e.lineWidth=2.4,e.strokeRect(1.5,1.5,33,21);for(let n of t)e.beginPath(),n===`inf`&&(e.moveTo(2,2),e.lineTo(34,22),e.moveTo(34,2),e.lineTo(2,22),e.stroke()),n===`cav`&&(e.moveTo(2,22),e.lineTo(34,2),e.stroke()),n===`armor`&&(e.roundRect?e.roundRect(8,6.5,20,11,5.5):e.rect(8,6.5,20,11),e.stroke()),n===`art`&&(e.arc(18,12,4.4,0,Math.PI*2),e.fill()),n===`hq`&&(e.moveTo(9,12),e.lineTo(27,12),e.stroke());e.restore()}var Ld=([e,t])=>_u(e,t),Rd=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;function zd(e){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:e},uProgress:{value:0},uOpacity:{value:0},uLen:{value:1}},vertexShader:Rd,fragmentShader:`uniform vec3 uColor; uniform float uProgress, uOpacity, uLen; varying vec2 vUv;
      void main(){
        float s = vUv.x / uLen;
        if (s > uProgress) discard;
        float d = abs(vUv.y);
        float aa = 1.0 - smoothstep(0.82, 1.0, d);
        float rim = smoothstep(0.55, 0.85, d) * aa;
        float tail = 0.35 + 0.65 * smoothstep(0.0, 0.55, s);
        float tip = 1.0 - smoothstep(uProgress - 0.015, uProgress, s) * step(uProgress, 0.999);
        vec3 c = mix(uColor, uColor * 1.35 + 0.06, rim * 0.6);
        gl_FragColor = vec4(c, uOpacity * aa * tail * max(tip, 0.0));
        #include <colorspace_fragment>
      }`})}function Bd(e,t){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:e},uProgress:{value:0},uOpacity:{value:0},uLen:{value:1},uInner:{value:t}},vertexShader:Rd,fragmentShader:`uniform vec3 uColor; uniform float uProgress, uOpacity, uLen, uInner; varying vec2 vUv;
      void main(){
        float s = vUv.x / uLen;
        if (s > uProgress) discard;
        float y = vUv.y * uInner;          // + 朝向被围一侧
        float stroke = 1.0 - smoothstep(0.62, 1.0, abs(y));
        float f = fract(vUv.x / 0.28);
        float tri = 1.0 - abs(f - 0.5) * 2.0;
        float inward = (0.35 - y) / 1.15;  // 从外沿向内的齿
        float tooth = step(y, 0.55) * (1.0 - smoothstep(tri - 0.08, tri + 0.02, inward));
        float a = max(stroke * 0.95, tooth * 0.9);
        gl_FragColor = vec4(uColor * 1.15, a * uOpacity);
        #include <colorspace_fragment>
      }`})}function Vd(e){return new za({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:e},uProgress:{value:0},uOpacity:{value:0},uLen:{value:1}},vertexShader:Rd,fragmentShader:`uniform vec3 uColor; uniform float uProgress, uOpacity, uLen; varying vec2 vUv;
      void main(){
        float s = vUv.x / uLen;
        if (s > uProgress) discard;
        float dash = step(0.45, fract(vUv.x / 0.22));
        float aa = 1.0 - smoothstep(0.5, 1.0, abs(vUv.y));
        gl_FragColor = vec4(uColor, uOpacity * aa * dash);
        #include <colorspace_fragment>
      }`})}function Hd(e){return new za({transparent:!0,depthWrite:!1,blending:2,uniforms:{uColor:{value:e},uOpacity:{value:0},uTime:{value:0}},vertexShader:Rd,fragmentShader:`uniform vec3 uColor; uniform float uOpacity, uTime; varying vec2 vUv;
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float g = (1.0 - smoothstep(0.0, 1.0, d)) * (0.75 + 0.25 * sin(uTime * 1.6));
        gl_FragColor = vec4(uColor * g * 0.28 * uOpacity, 1.0);
        #include <colorspace_fragment>
      }`})}function Ud(e,t){let n=document.createElement(`canvas`);n.width=216,n.height=144;let r=n.getContext(`2d`);r.fillStyle=jd[t],r.fillRect(0,0,n.width,n.height),Id(r,e,n.width,n.height);let i=new oi(n);return i.colorSpace=Ie,i.anisotropy=4,i}function Wd(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,`rgba(0,0,0,0.65)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new oi(e)}function Gd(e){let t=e.map(([e,t,n])=>({d:e,p:Ld([t,n])})),n=[],r=0;n.push({p:t[0].p.clone(),d:t[0].d,s:0});for(let e=1;e<t.length;e++){let i=t[e-1],a=t[e],o=i.p.distanceTo(a.p)<.04?[i.p,a.p]:ju([i.p,a.p],{step:.05}),s=0,c=[0];for(let e=1;e<o.length;e++)s+=o[e].distanceTo(o[e-1]),c.push(s);for(let e=1;e<o.length;e++){let t=s>1e-6?c[e]/s:1;r+=o[e].distanceTo(o[e-1]),n.push({p:o[e].clone(),d:i.d+(a.d-i.d)*t,s:r})}}return{samples:n,length:r,at(e){if(e<=n[0].d)return{p:n[0].p.clone(),s:0,i:0};let t=n[n.length-1];if(e>=t.d)return{p:t.p.clone(),s:t.s,i:n.length-1};for(let t=1;t<n.length;t++)if(e<=n[t].d){let r=(e-n[t-1].d)/Math.max(1e-6,n[t].d-n[t-1].d);return{p:n[t-1].p.clone().lerp(n[t].p,r),s:Ad(n[t-1].s,n[t].s,r),i:t}}return{p:t.p.clone(),s:t.s,i:n.length-1}}}}function Kd(e,t,n){return e<=t?0:e>=n?1:(e-t)/Math.max(1e-6,n-t)}function qd(e,t){let n=new wn;e.add(n);let r=[],i={sh:Wd()},a=Ju.map(e=>{let r=Gd(e.path),a=e.side===`pla`,o=a?ad.pla:ad.kmt,s=e.hq?.54:a?.66:.84,c=s*2/3,l=new wn,u=new Va({color:o.clone().multiplyScalar(.5),roughness:.65,metalness:.1,transparent:!0}),d=new X(new ui(s,.08,c),u);d.position.y=.04;let f=new Rr({map:Ud(e.comp||[`inf`],e.side),transparent:!0}),p=new X(new Da(s*.94,c*.94).rotateX(-Math.PI/2),f);p.position.y=.081;let m=new Rr({map:i.sh,transparent:!0,depthWrite:!1}),h=new X(new Da(s*1.9,c*2.2).rotateX(-Math.PI/2),m);if(h.position.set(.05,.005,.06),l.add(h,d,p),e.hq){let e=new X(new fi(.012,.012,.42),u);e.position.set(-s/2+.03,.25,0);let t=new X(new Da(.2,.12),f);t.position.set(-s/2+.13,.4,0),l.add(e,t)}let g=new X(new ui(s*1.3,.4,c*1.6),new Rr({visible:!1}));g.userData.fact=e.fact,l.add(g),n.add(l);let _=new K,v=t.add({html:`<span class="ic">${Fd(e.comp||[`inf`],e.side,20)}</span><span class="t">${e.name}</span><span class="s">${e.who}</span><span class="c">${e.compText||``}</span>`,kind:a?`pla`:e.hq?`kmt hq`:`kmt`,pos:_,fact:e.fact,priority:a?5:6,offset:24});v.el.dataset.down=e.downText||`被全歼`;let y=new X(Nu(r.samples.map(e=>e.p),()=>a?.05:.06,{lift:.05}),Vd(o));y.material.uniforms.uLen.value=Math.max(.001,r.length),y.renderOrder=2,n.add(y);let b={opacity:1,dim:0};return{u:e,g:l,hit:g,label:v,timed:r,trace:y,state:b,place:(e,t)=>{let n=Ou(e.x,e.y);l.position.set(e.x,n+.02,e.y),_.set(e.x,n+.12,e.y),t&&t.lengthSq()>1e-6&&(l.rotation.y=Math.atan2(-t.y,t.x)*.15)},applyLook:()=>{let e=b.opacity;u.opacity=e*(1-b.dim*.55),f.opacity=e*(1-b.dim*.6),m.opacity=e*(1-b.dim*.7),u.color.copy(o).multiplyScalar(.5*(1-b.dim*.5)),l.visible=e>.01,g.visible=l.visible,v.setAlpha(e),v.el.classList.toggle(`down`,b.dim>.5)},color:o}}),o=Yu.map(e=>{let t=ju(e.pts.map(Ld),{step:.05}),r=.84,i=Nu(t,e=>e<r?Ad(.11,.3,e/r):.66*(1-(e-r)/.16000000000000003)+.001,{lift:.07,breaks:[r]}),a=new X(i,zd(e.muted?ad.paper.clone().multiplyScalar(.7):ad.pla));return a.material.uniforms.uLen.value=i.userData.length,a.renderOrder=4,n.add(a),{a:e,m:a}}),s=Xu.map(e=>{let t=Ld(e.center),i=Nu(Mu(t.x,t.y,e.rx,e.rz),()=>.42,{lift:.1}),a=new X(i,Bd(ad.pla,1));a.material.uniforms.uLen.value=i.userData.length,a.renderOrder=5,n.add(a);let o=new X(new Da(e.rx*2.6,e.rz*2.6).rotateX(-Math.PI/2),Hd(ad.pla));o.position.set(t.x,Ou(t.x,t.y)+.18,t.y),o.renderOrder=1,n.add(o),r.push(o);let s=new Oa(.86,1.02,96);s.rotateX(-Math.PI/2);let c=new X(s,new Rr({color:ad.pla,transparent:!0,opacity:0,side:2,depthWrite:!1}));return c.position.set(t.x,Ou(t.x,t.y)+.11,t.y),c.scale.set(e.rx,1,e.rz),c.renderOrder=6,n.add(c),{r:e,m:a,glow:o,solid:c}}),c=Zu.map(e=>{let t=Nu(ju(e.pts.map(Ld),{step:.05}),()=>.36,{lift:.1}),r=new X(t,Bd(ad.pla,-1));return r.material.uniforms.uLen.value=t.userData.length,r.renderOrder=5,n.add(r),{bk:e,m:r}}),l={pla:1,kmt:1},u=e=>e.material.uniforms;function d(e){l.pla=e.pla,l.kmt=e.kmt}function f(e){for(let t of a){let{u:n,timed:r,trace:i,state:a,label:o}=t,s=n.appear??n.path[0][0],c=e<s-.8,d=Kd(e,s-.8,s+.4),f=l[n.side]*(c?0:d),p=r.at(Math.max(s,e)),m=r.at(Math.max(s,e)-.35);t.place(p.p,p.p.clone().sub(m.p));let h=f;a.opacity=f,a.dim=+(n.destroyed!==void 0&&e>=n.destroyed),t.applyLook(),o.setAlpha(h),o.priority=n.side===`pla`?l.kmt<.3?8:5:6;let g=u(i),_=p.s/Math.max(.001,r.length);g.uProgress.value=_;let v=_>.02&&_<.98&&!a.dim;g.uOpacity.value=f*(a.dim?.32:v?.85:.4)}for(let t of o){let n=u(t.m),r=Kd(e,t.a.t0,t.a.t1);n.uProgress.value=r;let i=0;r>0&&r<1?i=.92:e>=t.a.t1&&(i=e>64?.34:.42),n.uOpacity.value=i*l[t.a.side||`pla`]}for(let t of s){let n=u(t.m),r=u(t.glow),i=Kd(e,t.r.t0,t.r.t1);n.uProgress.value=i||+(e>=t.r.t1);let a=0,o=0;i>0&&e<t.r.hold?(a=.95,o=i):e>=t.r.hold&&(a=e>64?.62:.28,o=e>64?.6:0);let s=l[t.r.side||`pla`];n.uOpacity.value=a*s,r.uOpacity.value=o*s*.7,t.solid.material.opacity=a*s*.88,t.solid.visible=a*s>.02}for(let t of c){let n=u(t.m),r=Kd(e,t.bk.t0,t.bk.t1);n.uProgress.value=r||+(e>=t.bk.t1);let i=0;r>0&&e<t.bk.hold?i=.95:e>=t.bk.hold&&e<t.bk.hold+8&&(i=.28),n.uOpacity.value=i*l[t.bk.side||`pla`]}}return{group:n,clickables:a.map(e=>e.hit),units:a,setTime:f,setSideWeights:d,tick(e){for(let t of r)t.material.uniforms.uTime.value=e}}}var Jd={type:`change`},Yd={type:`start`},Xd={type:`end`},Zd=new Lr,Qd=new Ar,$d=Math.cos(70*Et.DEG2RAD),ef=new K,tf=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6,rf=class extends Yo{constructor(n,r=null){super(n,r),this.state=$.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Dt,this._lastTargetPosition=new K,this._quat=new Dt().setFromUnitVectors(n.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jo,this._sphericalDelta=new Jo,this._scale=1,this._panOffset=new K,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new K,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=of.bind(this),this._onPointerDown=af.bind(this),this._onPointerUp=sf.bind(this),this._onContextMenu=mf.bind(this),this._onMouseWheel=uf.bind(this),this._onKeyDown=df.bind(this),this._onTouchStart=ff.bind(this),this._onTouchMove=pf.bind(this),this._onMouseDown=cf.bind(this),this._onMouseMove=lf.bind(this),this._interceptControlDown=hf.bind(this),this._interceptControlUp=gf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=$.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jd),this.update(),this.state=$.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ef.copy(t).sub(this.target),ef.applyQuaternion(this._quat),this._spherical.setFromVector3(ef),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=tf:n>Math.PI&&(n-=tf),r<-Math.PI?r+=tf:r>Math.PI&&(r-=tf),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(ef.setFromSpherical(this._spherical),ef.applyQuaternion(this._quatInverse),t.copy(this.target).add(ef),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=ef.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=ef.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Zd.origin.copy(this.object.position),Zd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zd.direction))<$d?this.object.lookAt(this.target):(Qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zd.intersectPlane(Qd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(Jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?tf/60/60*this.autoRotateSpeed:tf/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ef.setFromMatrixColumn(t,0),ef.multiplyScalar(-e),this._panOffset.add(ef)}_panUp(e,t){this.screenSpacePanning===!0?ef.setFromMatrixColumn(t,1):(ef.setFromMatrixColumn(t,0),ef.crossVectors(this.object.up,ef)),ef.multiplyScalar(e),this._panOffset.add(ef)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ef.copy(r).sub(this.target);let i=ef.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tf*this._rotateDelta.x/t.clientHeight),this._rotateUp(tf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tf*this._rotateDelta.x/t.clientHeight),this._rotateUp(tf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function af(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function of(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function sf(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Xd),this.state=$.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function cf(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=$.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=$.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Yd)}function lf(e){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function uf(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===$.NONE&&(e.preventDefault(),this.dispatchEvent(Yd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Xd))}function df(e){this.enabled!==!1&&this._handleKeyDown(e)}function ff(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1){this.state=$.NONE;break}this._handleTouchStartRotate(e),this.state=$.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1){this.state=$.NONE;break}this._handleTouchStartPan(e),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Yd)}function pf(e){switch(this._trackPointer(e),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$.NONE}}function mf(e){this.enabled!==!1&&e.preventDefault()}function hf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function gf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function _f(e){let t=new wo(34,innerWidth/innerHeight,.5,6e3);t.position.set(0,40,30);let n=new rf(t,e.domElement);n.enableDamping=!0,n.dampingFactor=.07,n.rotateSpeed=.55,n.zoomSpeed=.8,n.minDistance=6,n.maxDistance=2600,n.minPolarAngle=.12,n.maxPolarAngle=1.12,n.enablePan=!0,n.screenSpacePanning=!1,n.panSpeed=.6,n.addEventListener(`change`,()=>{n.target.x=Et.clamp(n.target.x,-420,190),n.target.z=Et.clamp(n.target.z,-240,200),n.target.y=0});let r=!1;n.addEventListener(`start`,()=>{r&&=(Od(`cam`),!1)});let i=new Jo;function a(){let e=t.position.clone().sub(n.target);return i.setFromVector3(e),{target:n.target.clone(),r:i.radius,phi:i.phi,theta:i.theta}}let o={w:innerWidth,h:innerHeight};function s(e){o.w/Math.max(1,o.h);let n=Et.degToRad(t.fov);if(e.china){let e=2*Math.atan(Math.tan(n/2)*innerWidth/innerHeight),t=205/Math.tan(n/2)*(innerHeight/Math.max(1,o.h)),r=295/Math.tan(e/2)*(innerWidth/Math.max(1,o.w));return Math.max(t,r)*1.04}let r=(e,t,r)=>2*Math.tan(Math.atan(Math.tan(n/2)*e/t))*r/e,i=(e,t)=>2*Math.tan(n/2)*t/e,a=r(1440,900,930)/r(innerWidth,innerHeight,o.w),s=i(900,760)/i(innerHeight,o.h),c=Math.max(1,a*.8,s);return e.r*c}function c(e,t){o={w:e,h:t}}function l(e,{instant:o=!1,dur:c=2.6}={}){Od(`cam`);let l=_u(e.target[0],e.target[1]),u={target:new K(l.x,0,l.y),r:s(e),phi:e.phi,theta:e.theta},d=a(),f=u.theta-d.theta;f=Math.atan2(Math.sin(f),Math.cos(f));let p=d.target.distanceTo(u.target),m=Math.min(.35,p/40)*(Math.max(d.r,u.r)>200?0:1),h=e=>{n.target.lerpVectors(d.target,u.target,e);let r=Math.exp(Ad(Math.log(d.r),Math.log(u.r),e))*(1+m*Math.sin(Math.PI*e)),a=Ad(d.phi,u.phi,e)-m*.4*Math.sin(Math.PI*e);i.set(r,a,d.theta+f*e),t.position.setFromSpherical(i).add(n.target),t.lookAt(n.target)};o?(h(1),n.update()):(r=!0,n.enabled=!0,Dd({group:`cam`,dur:c,ease:Td.inOutQuint,update:h,done:()=>{r=!1}}))}function u(e,n=0){t.aspect=innerWidth/innerHeight,e||n?t.setViewOffset(innerWidth,innerHeight,e/2,n/2,innerWidth,innerHeight):t.clearViewOffset(),t.updateProjectionMatrix()}function d(){let e=t.position.distanceTo(n.target),r=Math.max(.2,e*.02),i=e*4+200;return(Math.abs(t.near-r)/r>.05||Math.abs(t.far-i)/i>.05)&&(t.near=r,t.far=i,t.updateProjectionMatrix()),e}return{camera:t,controls:n,flyTo:l,setViewOffset:u,setView:c,updateClip:d,isFlying:()=>r}}var vf=new K;function yf(e,t,n){let r=document.createElement(`div`);r.className=`labels`,e.appendChild(r);let i=[],a=[],o={l:0,t:0,r:innerWidth,b:innerHeight},s={local:1,china:0};function c(e){Object.assign(s,e)}function l({text:e=``,sub:t=``,html:a=``,kind:o=`city`,pos:s,fact:c=null,priority:l=1,offset:u=16,clamp:d=!0,layer:f=`local`}){let p=document.createElement(c?`button`:`div`);p.className=`lbl lbl-${o}`,p.innerHTML=a||`<span class="t">${e}</span>${t?`<span class="s">${t}</span>`:``}`,c&&(p.type=`button`,p.addEventListener(`click`,e=>{e.stopPropagation(),n(c,p)})),r.appendChild(p);let m={el:p,pos:s,priority:l,offset:u,clamp:d,layer:f,alpha:0,target:1,w:0,h:0,emph:0,setAlpha(e){m.target=e},measure(){m.w=p.offsetWidth,m.h=p.offsetHeight}};return i.push(m),m}function u(){let e=document.querySelector(`.card`)?.getBoundingClientRect(),t=document.querySelector(`.dock`)?.getBoundingClientRect(),n=document.querySelector(`.brand`)?.getBoundingClientRect(),r=document.querySelector(`.fact.open`)?.getBoundingClientRect(),s=document.querySelector(`.legend`)?.getBoundingClientRect();o={l:14,t:14,r:innerWidth-14,b:innerHeight-14},t&&(o.b=Math.min(o.b,t.top-8)),a=[],e&&e.width&&(e.left>innerWidth*.5?o.r=Math.min(o.r,e.left-12):a.push(e)),n&&a.push(n),r&&a.push(r),s&&s.width&&a.push(s);for(let e of i)e.measure()}let d=(e,t,n=4)=>e.l<t.r+n&&e.r>t.l-n&&e.t<t.b+n&&e.b>t.t-n;function f(e){let n=a.map(e=>({l:e.left,r:e.right,t:e.top,b:e.bottom})),r=i.slice().sort((e,t)=>t.priority+t.emph*10-(e.priority+e.emph*10)),c=innerWidth,l=innerHeight;for(let i of r){let r=i.target*(s[i.layer]??1);if(i.alpha+=(r-i.alpha)*Math.min(1,e*6),i.alpha<.02&&r<.02||(i.w||i.measure(),vf.copy(i.pos).project(t),vf.z>1||vf.z<-1)){i.el.style.visibility=`hidden`;continue}let a=(vf.x*.5+.5)*c,u=(-vf.y*.5+.5)*l;if(a<o.l-4||a>o.r+4||u<o.t-4||u>o.b+4){i.el.style.visibility=`hidden`;continue}let f=i.offset,p=[[a-i.w/2,u-f-i.h],[a-i.w/2,u+f*.7],[a+f*.8,u-i.h/2],[a-f*.8-i.w,u-i.h/2]];f>0&&p.push([a+f*.6,u-f-i.h],[a-f*.6-i.w,u-f-i.h],[a+f*.6,u+f*.7],[a-f*.6-i.w,u+f*.7],[a-i.w/2,u-f*1.9-i.h],[a-i.w/2,u+f*1.6]);let m=null,h=!1;for(let[e,t]of p){let r=e,a=t,s=!1;if(r<o.l||r+i.w>o.r||a<o.t||a+i.h>o.b){if(!i.clamp)continue;r=Math.min(Math.max(r,o.l),o.r-i.w),a=Math.min(Math.max(a,o.t),o.b-i.h),s=!0}let c={l:r,r:r+i.w,t:a,b:a+i.h};if(!n.some(e=>d(c,e))){m=c,h=s;break}}m?(n.push(m),i.el.style.visibility=`visible`,i.el.style.opacity=i.alpha.toFixed(3),i.el.style.transform=`translate3d(${m.l.toFixed(1)}px, ${m.t.toFixed(1)}px, 0)`,i.el.classList.toggle(`edge`,h)):i.el.style.visibility=`hidden`}}return addEventListener(`resize`,()=>requestAnimationFrame(u)),document.fonts?.ready.then(u),{add:l,update:f,layout:u,list:i,setLayers:c}}var bf=(e,t=document)=>t.querySelector(e);function xf(e,{onSeek:t,onToggle:n,onSide:r,onChapter:i,onLayout:a}){let o=e=>e.kind===`cause`?`起因`:e.kind===`result`?`结果`:e.short;e.insertAdjacentHTML(`beforeend`,`
    <header class="brand">
      <div class="brand-kicker">解放战争 · 三大战役</div>
      <h1 class="brand-title">淮海战役</h1>
      <div class="brand-date">1948.11.6 — 1949.1.10</div>
    </header>

    <aside class="card" aria-live="polite">
      <button class="card-handle" type="button" aria-expanded="false"><span class="bar"></span><span class="txt">展开</span></button>
      <div class="card-inner"></div>
    </aside>

    <div class="dock">
      <div class="filter" role="radiogroup" aria-label="观察对象">
        ${rd.map(e=>`<button type="button" role="radio" data-side="${e.id}" aria-checked="false">${e.label}</button>`).join(``)}
        <button class="legend-toggle" type="button" aria-expanded="false">图例</button>
      </div>
      <div class="transport">
        <button class="play" type="button" aria-label="播放">
          <svg class="ic-play" viewBox="0 0 24 24"><path d="M7 4.8v14.4L19 12z"/></svg>
          <svg class="ic-pause" viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
        </button>
        <div class="clock">
          <div class="clock-date">1948年秋</div>
          <div class="clock-sub"></div>
        </div>
        <div class="timeline" role="slider" aria-label="战役进程" aria-valuemin="0" aria-valuemax="100" tabindex="0">
          <div class="tl-track">
            <div class="tl-fill"></div>
            <div class="tl-thumb"></div>
          </div>
          <ol class="tl-marks">${td.map((e,t)=>`
            <li class="${e.kind||``}" style="left:${(e.t*100).toFixed(2)}%"><button type="button" data-i="${t}" title="${e.short}"><span class="dot"></span><span class="lab">${o(e)}</span></button></li>`).join(``)}
          </ol>
        </div>
      </div>
      <p class="hint">空格播放 · 拖动时间轴 · 点击地名或部队看说明</p>
    </div>

    <section class="fact" role="dialog" aria-modal="false">
      <button class="fact-close" type="button" aria-label="关闭"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <div class="fact-sub"></div>
      <h3 class="fact-title"></h3>
      <div class="fact-comp"></div>
      <div class="fact-body"></div>
      <div class="fact-src"></div>
    </section>

    <div class="legend" aria-label="图例">
      <div class="lg-row lg-sides"><span><i class="sw pla"></i>红：解放军</span><span><i class="sw kmt"></i>蓝：国民党军</span></div>
      <div class="lg-row">${[`inf`,`armor`,`art`,`cav`,`hq`].map(e=>`<span>${Pd(e,`kmt`,15)}${qu[e]}</span>`).join(``)}</div>
      <div class="lg-row"><span><i class="lg-arrow"></i>进攻</span><span><i class="lg-ring"></i>包围圈</span><span><i class="lg-rail"></i>铁路</span><span><i class="lg-river"></i>河湖</span><span><i class="lg-prov"></i>省界</span></div>
    </div>
  `);let s=bf(`.card`,e),c=bf(`.card-inner`,e),l=bf(`.card-handle`,e),u=bf(`.fact`,e),d=bf(`.tl-fill`,e),f=bf(`.tl-thumb`,e),p=bf(`.clock-date`,e),m=bf(`.clock-sub`,e),h=bf(`.play`,e),g=[...e.querySelectorAll(`.filter button[data-side]`)],_=[...e.querySelectorAll(`.tl-marks button`)],v=bf(`.timeline`,e),y=bf(`.legend-toggle`,e),b=-1,x=`both`;h.addEventListener(`click`,()=>n()),g.forEach(e=>e.addEventListener(`click`,()=>r(e.dataset.side))),_.forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),i(+e.dataset.i)})),bf(`.fact-close`,e).addEventListener(`click`,()=>A()),l.addEventListener(`click`,()=>{let e=!s.classList.contains(`expanded`);s.classList.toggle(`expanded`,e),l.setAttribute(`aria-expanded`,String(e)),l.querySelector(`.txt`).textContent=e?`收起`:`展开`,setTimeout(()=>a?.(),320)}),y.addEventListener(`click`,()=>{let t=!e.classList.contains(`legend-open`);e.classList.toggle(`legend-open`,t),y.setAttribute(`aria-expanded`,String(t))});let S=t=>{let n=bf(`.tl-track`,e).getBoundingClientRect();return Math.max(0,Math.min(1,(t.clientX-n.left)/n.width))},C=!1;v.addEventListener(`pointerdown`,e=>{e.target.closest(`.tl-marks button`)||(C=!0,v.setPointerCapture?.(e.pointerId),t(S(e),{scrub:!0}))}),v.addEventListener(`pointermove`,e=>{C&&t(S(e),{scrub:!0})}),addEventListener(`pointerup`,()=>{C&&(C=!1,t(null,{release:!0}))}),v.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&(e.preventDefault(),t(null,{nudge:2/100})),e.key===`ArrowLeft`&&(e.preventDefault(),t(null,{nudge:-2/100}))}),addEventListener(`keydown`,e=>{e.target.matches(`input, textarea, [contenteditable]`)||((e.key===` `||e.code===`Space`)&&(e.preventDefault(),n()),e.key===`Escape`&&A(),e.key===`Home`&&t(0),e.key===`End`&&t(1),e.key===`ArrowRight`&&!e.target.closest(`.timeline`)&&i(Math.min(td.length-1,b+1)),e.key===`ArrowLeft`&&!e.target.closest(`.timeline`)&&i(Math.max(0,b-1)))});function w(e,t,n){let r=td[e],i=r[t]||r.both,o=r.kind||`chapter`,l=o===`cause`?`<div class="badge cause">战役起因</div>`:o===`result`?`<div class="badge result">战役结果</div>`:`<div class="card-num"><span>${r.num}</span><span class="of">/ 05</span></div>`,u=i.stats?`<div class="stats">${i.stats.map(([e,t])=>`<div class="stat"><div class="v">${e}</div><div class="k">${t}</div></div>`).join(``)}</div>`:``,d=i.lead?`<p class="lead">${i.lead}</p>`:``,f=i.list?`<dl class="points">${i.list.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`:``,p=i.body?`<div class="card-body">${i.body.map(e=>`<p>${e}</p>`).join(``)}</div>`:``,m=i.meta?`<dl class="meta">${i.meta.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`:``,h=`
      ${l}
      <h2 class="card-title">${i.title}</h2>
      <div class="card-date">${r.date}</div>
      ${d}${u}${f}${p}${m}`,g=()=>{c.innerHTML=h,c.scrollTop=0,s.dataset.kind=o,a?.()};n?(c.classList.add(`swap`),setTimeout(()=>{g(),c.classList.remove(`swap`)},220)):g()}function T(e,t,{animateCard:n=!0}={}){if(d.style.transform=`scaleX(${e})`,f.style.left=`${e*100}%`,p.textContent=td[t].kind===`cause`?`1948年秋`:Fu(Ru(e)),m.textContent=td[t].kind?o(td[t]):td[t].short,v.setAttribute(`aria-valuenow`,String(Math.round(e*100))),_.forEach((e,n)=>{e.classList.toggle(`on`,n===t),e.classList.toggle(`done`,n<t)}),t!==b||E){let e=t===b;b=t,w(t,x,n&&!e)}}let E=!1;function D(t){x=t,E=!0,g.forEach(e=>{let n=e.dataset.side===t;e.classList.toggle(`on`,n),e.setAttribute(`aria-checked`,String(n))}),e.dataset.side=t,b>=0&&w(b,t,!0),E=!1}function O(e){h.classList.toggle(`on`,e),h.setAttribute(`aria-label`,e?`暂停`:`播放`)}function k(e){u.querySelector(`.fact-sub`).textContent=e.sub||``,u.querySelector(`.fact-title`).textContent=e.title,u.querySelector(`.fact-comp`).innerHTML=e.comp?`<span class="k">主力构成</span>${e.comp}`:``,u.querySelector(`.fact-body`).innerHTML=e.body.map(e=>`<p>${e}</p>`).join(``),u.querySelector(`.fact-src`).textContent=e.src||``,u.classList.add(`open`),a?.()}function A(){u.classList.remove(`open`),a?.()}return D(`both`),{setTime:T,setSide:D,setPlaying:O,openFact:k,closeFact:A,card:s,dock:bf(`.dock`,e)}}var Sf=document.getElementById(`app`),Cf=new URLSearchParams(location.search),wf=Cf.has(`shot`)||Cf.get(`play`)===`0`;await wu(new URL(`./data/dem.bin`,document.baseURI).href);var Tf=new su({antialias:!0,powerPreference:`high-performance`});Tf.setPixelRatio(Math.min(devicePixelRatio,2)),Tf.setSize(innerWidth,innerHeight),Tf.outputColorSpace=Ie,Tf.toneMapping=4,Tf.toneMappingExposure=1.1,Sf.appendChild(Tf.domElement);var Ef=new Mn;Ef.background=ad.bg,Ef.add(new fo(`#c9d4dc`,`#0b0e11`,.9));var Df=new Do(`#f1e6d2`,1.6);Df.position.set(-12,22,-8),Ef.add(Df);var{camera:Of,controls:kf,flyTo:Af,setViewOffset:jf,setView:Mf,updateClip:Nf}=_f(Tf),Pf=xf(Sf,{onSeek:(e,t={})=>{t.release?ep&&(ep=!1,op(!0)):t.nudge?ap(Yf+t.nudge,{fromUser:!0}):ap(e,{fromUser:!0,scrub:t.scrub})},onToggle:()=>sp(),onSide:e=>cp(e),onChapter:e=>ap(td[e].t,{fromUser:!0,chapter:!0}),onLayout:()=>requestAnimationFrame(()=>{up()})}),Ff=yf(Sf,Of,e=>Pf.openFact(e)),If=xd(Ef),Lf=qd(Ef,Ff),Rf=(e,t,n=.1)=>{let r=_u(e,t);return new K(r.x,Ou(r.x,r.y)+n,r.y)},zf=(e,t)=>{let n=_u(e,t);return new K(n.x,0,n.y)},Bf=zu.map(e=>({p:e,lb:Ff.add({text:e.name,kind:e.rank===0?`city major`:`city`,pos:Rf(e.lon,e.lat),fact:e.fact,priority:e.rank===0?8:4,offset:13})})),Vf=Hu.map(e=>({s:e,lb:Ff.add({text:e.name,kind:`site`,pos:Rf(e.lon,e.lat),fact:e.fact,priority:7,offset:15})}));for(let[e,[t,n]]of Object.entries({...Wu,...Gu}))Ff.add({text:e,kind:`water`,pos:Rf(t,n,.05),priority:2,offset:0,clamp:!1});for(let e of Uu)Ff.add({text:e.name,kind:`water`,pos:Rf(e.label[0],e.label[1],.05),priority:2,offset:0,clamp:!1});for(let e of Ku)Ff.add({text:e.name,kind:`rail`,pos:Rf(e.label[0],e.label[1],.05),priority:2,offset:0,clamp:!1});for(let e of Vu)Ff.add({text:e.name,kind:`prov`,pos:Rf(e.lon,e.lat,.05),priority:1,offset:0,clamp:!1});var Hf=Qu.map(e=>({f:e,lb:Ff.add({html:`${e.comp?`<span class="ic">${e.comp.map(e=>Fd([e],`pla`,18)).join(``)}</span>`:``}<span class="t">${e.name}</span>`,kind:e.muted?`force muted`:`force`,pos:Rf(e.lon,e.lat,.2),fact:$u[e.name],priority:9,offset:0})}));for(let e of[115,116,117,118,119])Ff.add({text:`${e}°E`,kind:`tick`,pos:Rf(e,32.32,0),priority:0,offset:0,clamp:!1});for(let e of[33,34,35])Ff.add({text:`${e}°N`,kind:`tick`,pos:Rf(114.92,e,0),priority:0,offset:0,clamp:!1});var Uf=new Set([`香港`,`澳门`]);for(let e of id.provinces)!Uf.has(e.name)&&e.center&&Ff.add({text:e.name,kind:e.hl?`cprov hl`:`cprov`,pos:zf(e.center[0],e.center[1]),priority:e.hl?6:1,offset:0,clamp:!1,layer:`china`});for(let e of Bu)Ff.add({text:e.name,sub:e.note||``,kind:`cplace`,pos:zf(e.lon,e.lat),priority:7,offset:10,layer:`china`});Ff.add({text:`淮海战场`,sub:`苏 · 鲁 · 豫 · 皖 交界`,kind:`callout`,pos:zf(117.45,35.05),priority:10,offset:14,layer:`china`});var Wf=new Go,Gf=new G,Kf=null;Tf.domElement.addEventListener(`pointerdown`,e=>{Kf=[e.clientX,e.clientY]}),Tf.domElement.addEventListener(`pointerup`,e=>{if(!Kf||Math.hypot(e.clientX-Kf[0],e.clientY-Kf[1])>5)return;let t=Jf(e);t?Pf.openFact(t.userData.fact):Pf.closeFact()}),Tf.domElement.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(Tf.domElement.style.cursor=Jf(e)?`pointer`:``)});var qf=e=>{for(let t=e.parent;t;t=t.parent)if(!t.visible)return!1;return!0};function Jf(e){return Gf.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),Wf.setFromCamera(Gf,Of),Wf.intersectObjects([...Lf.clickables,...If.clickables],!1).filter(e=>qf(e.object))[0]?.object||null}var Yf=0,Xf=!1,Zf=[`both`,`pla`,`kmt`].includes(Cf.get(`side`))?Cf.get(`side`):`both`,Qf=-1,$f=!1,ep=!1,tp={pla:1,kmt:1},np={nianzhuang:[117.776,34.3,3.8],shuangduiji:[116.85,33.6,5.2],chenguanzhuang:[116.6,34.03,3.8]};function rp(e,{instant:t=!1,fly:n=!0}={}){Yf=Math.max(0,Math.min(1,e));let r=Ru(Yf),i=nd(Yf);Lf.setTime(r),Pf.setTime(Yf,i,{animateCard:!t&&i!==Qf}),Sf.dataset.beat=td[i].key;for(let{s:e,lb:t}of Vf){let n=td[i].key===e.id||r>=e.peak[0]&&r<=e.peak[1]+.5,a=n||r>=e.appear-1;t.el.classList.toggle(`on`,n),t.el.classList.toggle(`past`,a&&!n),t.emph=+!!n,t.setAlpha(a||td[i].kind===`result`?1:0)}ip(r);for(let{p:e,lb:t}of Bf)t.setAlpha(e.rank===0||i<=1||td[i].kind===`result`?1:.85);let a=If.terrainUniforms,o=np[td[i].key];if(o){let e=_u(o[0],o[1]);a.uFocus.value.set(e.x,e.y,o[2])}if(Xf&&td[i].kind===`cause`&&Yf>=.05&&!$f&&($f=!0,Af(td[1].cam.both,{dur:4.5})),i!==Qf){td[i].kind===`cause`&&($f=!1);let e=t?+!!o:a.uFocusAmt.value;Od(`focus`),Dd({group:`focus`,dur:t?.01:1.4,update:t=>{a.uFocusAmt.value=Ad(e,+!!o,t)}}),n&&Af(td[i].cam[Zf]||td[i].cam.both,{instant:t,dur:t?.01:td[i].key===`open`?4.2:Qf<0?3.2:2.6}),location.hash!==`#/${i+1}`&&history.replaceState(null,``,`${location.search}#/${i+1}`),Qf=i,requestAnimationFrame(()=>Ff.layout())}}function ip(e){for(let{f:t,lb:n}of Hf){let r=e>=t.from&&e<=t.to&&(t.sides||[`both`,`pla`,`kmt`]).includes(Zf);n.setAlpha(+!!r)}}function ap(e,{fromUser:t=!1,scrub:n=!1,chapter:r=!1}={}){t&&n?(ep||=Xf,op(!1)):t&&ep&&(op(!0),ep=!1),t&&!n&&(ep=!1),rp(e,{instant:n||wf,fly:!n||r})}function op(e){e&&Yf>=.999&&(Yf=0),Xf=e,Pf.setPlaying(e),e&&(ep=!1)}function sp(){op(!Xf)}function cp(e){Zf=e,Pf.setSide(e);let t={both:{pla:1,kmt:1},pla:{pla:1,kmt:0},kmt:{pla:0,kmt:1}}[e],n={...tp};Od(`side`),Dd({group:`side`,dur:wf?.01:.45,update:e=>{tp.pla=Ad(n.pla,t.pla,e),tp.kmt=Ad(n.kmt,t.kmt,e),Lf.setSideWeights(tp),Lf.setTime(Ru(Yf))}});let r=td[nd(Yf)];Af(r.cam[e]||r.cam.both,{instant:wf,dur:1.4}),ip(Ru(Yf)),requestAnimationFrame(()=>Ff.layout())}addEventListener(`hashchange`,()=>{let e=location.hash.match(/#\/(\d)/);e&&ap(td[e[1]-1]?.t??0,{fromUser:!0,chapter:!0})});function lp(){if(Cf.has(`t`))return+Cf.get(`t`);let e=location.hash.match(/#\/(\d)/);return e?td[e[1]-1]?.t??0:0}function up(){Tf.setSize(innerWidth,innerHeight);let e=innerWidth>900,t=Pf.card.getBoundingClientRect(),n=Pf.dock.getBoundingClientRect();if(Sf.style.setProperty(`--dock-h`,`${n.height.toFixed(1)}px`),t=Pf.card.getBoundingClientRect(),e){let e=t.width+40;jf(e,0),Mf(innerWidth-e,innerHeight-(innerHeight-n.top))}else{let e=n.top-innerHeight*.34-34,t=Math.max(160,e-96);jf(0,innerHeight-e-96),Mf(innerWidth,t)}Ff.layout()}addEventListener(`resize`,()=>{up(),Af(td[nd(Yf)].cam[Zf]||td[nd(Yf)].cam.both,{instant:!0})});var dp=performance.now(),fp=0,pp=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function mp(){let e=performance.now(),t=Math.min((e-dp)/1e3,.05);dp=e,fp+=t;let n=fp;if(Xf){let e=Yf+t/100;e>=1?(rp(1,{fly:!0}),op(!1)):rp(e,{fly:!0})}kd(t),Lf.setSideWeights(tp),Xf||Lf.setTime(Ru(Yf)),kf.update();let r=Nf(),i=2*r*Math.tan(Et.degToRad(Of.fov/2))/innerHeight,a=i*900,o=pp(120,240,a);Ff.setLayers({china:o,local:1-pp(100,170,a)}),If.terrainUniforms.uFogDensity.value=.42/Math.max(10,r),If.tick(n,{wpp:i,chinaAmt:o}),Lf.tick(n),Tf.render(Ef,Of),Ff.update(t),requestAnimationFrame(mp)}if(up(),Zf!==`both`){let e={pla:+(Zf===`pla`),kmt:+(Zf===`kmt`)};tp.pla=e.pla,tp.kmt=e.kmt,Lf.setSideWeights(tp),Pf.setSide(Zf)}if(rp(lp(),{instant:!0,fly:!0}),!wf&&Cf.get(`play`)!==`0`){let e=()=>{!wf&&!Xf&&Yf<.001&&op(!0)};document.fonts?.ready.then(()=>setTimeout(e,900)),setTimeout(e,1800)}document.fonts?.ready.then(()=>{up(),document.body.classList.add(`ready`)}),setTimeout(()=>document.body.classList.add(`ready`),1500),window.__hh={seek:e=>ap(e,{fromUser:!0}),chapter:e=>ap(td[e].t,{fromUser:!0,chapter:!0}),setSide:cp,play:()=>op(!0),pause:()=>op(!1),state:()=>({t:Yf,day:Ru(Yf),chapter:Qf,side:Zf,playing:Xf})},mp();