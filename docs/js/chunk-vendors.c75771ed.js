(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,c){var n=c("b622"),r=n("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,c){var n=c("59ed");e.exports=function(e,t,c){if(n(e),void 0===t)return e;switch(c){case 0:return function(){return e.call(t)};case 1:return function(c){return e.call(t,c)};case 2:return function(c,n){return e.call(t,c,n)};case 3:return function(c,n,r){return e.call(t,c,n,r)}}return function(){return e.apply(t,arguments)}}},"057f":function(e,t,c){var n=c("fc6a"),r=c("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return r(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==s.call(e)?a(e):r(n(e))}},"06cf":function(e,t,c){var n=c("83ab"),r=c("d1e7"),s=c("5c6c"),i=c("fc6a"),a=c("a04b"),o=c("1a2d"),l=c("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=n?h:function(e,t){if(e=i(e),t=a(t),l)try{return h(e,t)}catch(c){}if(o(e,t))return s(!r.f.call(e,t),e[t])}},"07fa":function(e,t,c){var n=c("50c4");e.exports=function(e){return n(e.length)}},"0829":function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return Ni})),c.d(t,"b",(function(){return $s})),c.d(t,"c",(function(){return Di})),c.d(t,"d",(function(){return Ws})),c.d(t,"e",(function(){return xi})),c.d(t,"f",(function(){return Xs})),c.d(t,"g",(function(){return ji}));var n=c("5606"),r=c("ffa6"),s=c("4fc1"),i=c("1fd5"),a=c("8f6b");const o="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new s["b"]("@firebase/firestore");function f(){return u.logLevel}function v(e,...t){if(u.logLevel<=s["a"].DEBUG){const c=t.map(p);u.debug(`Firestore (${h}): ${e}`,...c)}}function d(e,...t){if(u.logLevel<=s["a"].ERROR){const c=t.map(p);u.error(`Firestore (${h}): ${e}`,...c)}}function m(e,...t){if(u.logLevel<=s["a"].WARN){const c=t.map(p);u.warn(`Firestore (${h}): ${e}`,...c)}}function p(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw d(t),new Error(t)}function g(e,t){e||z()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class H{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class L{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let c=this.i;const n=e=>this.i!==c?(c=this.i,t(e)):Promise.resolve();let r=new C;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new C,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},i=e=>{v("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>i(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?i(e):(v("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new C)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(v("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(g("string"==typeof t.accessToken),new V(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return g(null===e||"string"==typeof e),new l(e)}}class w{constructor(e,t,c){this.h=e,this.l=t,this.m=c,this.type="FirstParty",this.user=l.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class _{constructor(e,t,c){this.h=e,this.l=t,this.m=c}getToken(){return Promise.resolve(new w(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(c);else for(let n=0;n<e;n++)c[n]=Math.floor(256*Math.random());return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.T=-1;class E{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const n=S(40);for(let r=0;r<n.length;++r)c.length<20&&n[r]<t&&(c+=e.charAt(n[r]%e.length))}return c}}function O(e,t){return e<t?-1:e>t?1:0}function k(e,t,c){return e.length===t.length&&e.every((e,n)=>c(e,t[n]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return T.fromMillis(Date.now())}static fromDate(e){return T.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*t));return new T(t,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.timestamp=e}static fromTimestamp(e){return new I(e)}static min(){return new I(new T(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){let t=0;for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t++;return t}function j(e,t){for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t(c,e[c])}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t,c){void 0===t?t=0:t>e.length&&z(),void 0===c?c=e.length-t:c>e.length-t&&z(),this.segments=e,this.offset=t,this.len=c}get length(){return this.len}isEqual(e){return 0===N.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof N?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,c=this.limit();t<c;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const c=Math.min(e.length,t.length);for(let n=0;n<c;n++){const c=e.get(n),r=t.get(n);if(c<r)return-1;if(c>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class P extends N{construct(e,t,c){return new P(e,t,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const c of e){if(c.indexOf("//")>=0)throw new y(M.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);t.push(...c.split("/").filter(e=>e.length>0))}return new P(t)}static emptyPath(){return new P([])}}const R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class F extends N{construct(e,t,c){return new F(e,t,c)}static isValidIdentifier(e){return R.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),F.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new F(["__name__"])}static fromServerFormat(e){const t=[];let c="",n=0;const r=()=>{if(0===c.length)throw new y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(c),c=""};let s=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(c+=t,n++):(r(),n++)}if(r(),s)throw new y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new F(t)}static emptyPath(){return new F([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.fields=e,e.sort(F.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return k(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new q(t)}static fromUint8Array(e){const t=function(e){let t="";for(let c=0;c<e.length;++c)t+=String.fromCharCode(e[c]);return t}(e);return new q(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let c=0;c<e.length;c++)t[c]=e.charCodeAt(c);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}q.EMPTY_BYTE_STRING=new q("");const B=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Z(e){if(g(!!e),"string"==typeof e){let t=0;const c=B.exec(e);if(g(!!c),c[1]){let e=c[1];e=(e+"000000000").substr(0,9),t=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function W(e){return"string"==typeof e?q.fromBase64String(e):q.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){var t,c;return"server_timestamp"===(null===(c=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===c?void 0:c.stringValue)}function G(e){const t=e.mapValue.fields.__previous_value__;return K(t)?G(t):t}function X(e){const t=Z(e.mapValue.fields.__local_write_time__.timestampValue);return new T(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return null==e}function Q(e){return 0===e&&1/e==-1/0}function J(e){return"number"==typeof e&&Number.isInteger(e)&&!Q(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(P.fromString(e))}static fromName(e){return new ee(P.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===P.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return P.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new P(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?K(e)?4:10:z()}function ce(e,t){const c=te(e);if(c!==te(t))return!1;switch(c){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return X(e).isEqual(X(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const c=Z(e.timestampValue),n=Z(t.timestampValue);return c.seconds===n.seconds&&c.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return W(e.bytesValue).isEqual(W(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return $(e.geoPointValue.latitude)===$(t.geoPointValue.latitude)&&$(e.geoPointValue.longitude)===$(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return $(e.integerValue)===$(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const c=$(e.doubleValue),n=$(t.doubleValue);return c===n?Q(c)===Q(n):isNaN(c)&&isNaN(n)}return!1}(e,t);case 9:return k(e.arrayValue.values||[],t.arrayValue.values||[],ce);case 10:return function(e,t){const c=e.mapValue.fields||{},n=t.mapValue.fields||{};if(x(c)!==x(n))return!1;for(const r in c)if(c.hasOwnProperty(r)&&(void 0===n[r]||!ce(c[r],n[r])))return!1;return!0}(e,t);default:return z()}}function ne(e,t){return void 0!==(e.values||[]).find(e=>ce(e,t))}function re(e,t){const c=te(e),n=te(t);if(c!==n)return O(c,n);switch(c){case 0:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){const c=$(e.integerValue||e.doubleValue),n=$(t.integerValue||t.doubleValue);return c<n?-1:c>n?1:c===n?0:isNaN(c)?isNaN(n)?0:-1:1}(e,t);case 3:return se(e.timestampValue,t.timestampValue);case 4:return se(X(e),X(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){const c=W(e),n=W(t);return c.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const c=e.split("/"),n=t.split("/");for(let r=0;r<c.length&&r<n.length;r++){const e=O(c[r],n[r]);if(0!==e)return e}return O(c.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const c=O($(e.latitude),$(t.latitude));return 0!==c?c:O($(e.longitude),$(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const c=e.values||[],n=t.values||[];for(let r=0;r<c.length&&r<n.length;++r){const e=re(c[r],n[r]);if(e)return e}return O(c.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const c=e.fields||{},n=Object.keys(c),r=t.fields||{},s=Object.keys(r);n.sort(),s.sort();for(let i=0;i<n.length&&i<s.length;++i){const e=O(n[i],s[i]);if(0!==e)return e;const t=re(c[n[i]],r[s[i]]);if(0!==t)return t}return O(n.length,s.length)}(e.mapValue,t.mapValue);default:throw z()}}function se(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);const c=Z(e),n=Z(t),r=O(c.seconds,n.seconds);return 0!==r?r:O(c.nanos,n.nanos)}function ie(e){return ae(e)}function ae(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Z(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?W(e.bytesValue).toBase64():"referenceValue"in e?(c=e.referenceValue,ee.fromName(c).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",c=!0;for(const n of e.values||[])c?c=!1:t+=",",t+=ae(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let c="{",n=!0;for(const r of t)n?n=!1:c+=",",c+=`${r}:${ae(e.fields[r])}`;return c+"}"}(e.mapValue):z();var t,c}function oe(e){return!!e&&"integerValue"in e}function le(e){return!!e&&"arrayValue"in e}function he(e){return!!e&&"nullValue"in e}function ue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fe(e){return!!e&&"mapValue"in e}function ve(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return j(e.mapValue.fields,(e,c)=>t.mapValue.fields[e]=ve(c)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let c=0;c<(e.arrayValue.values||[]).length;++c)t.arrayValue.values[c]=ve(e.arrayValue.values[c]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let c=0;c<e.length-1;++c)if(t=(t.mapValue.fields||{})[e.get(c)],!fe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ve(t)}setAll(e){let t=F.emptyPath(),c={},n=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,c,n),c={},n=[],t=r.popLast()}e?c[r.lastSegment()]=ve(e):n.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,c,n)}delete(e){const t=this.field(e.popLast());fe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let c=0;c<e.length;++c){let n=t.mapValue.fields[e.get(c)];fe(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(c)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,c){j(t,(t,c)=>e[t]=c);for(const n of c)delete e[n]}clone(){return new de(ve(this.value))}}function me(e){const t=[];return j(e.fields,(e,c)=>{const n=new F([e]);if(fe(c)){const e=me(c.mapValue).fields;if(0===e.length)t.push(n);else for(const c of e)t.push(n.child(c))}else t.push(n)}),new U(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pe{constructor(e,t,c,n,r){this.key=e,this.documentType=t,this.version=c,this.data=n,this.documentState=r}static newInvalidDocument(e){return new pe(e,0,I.min(),de.empty(),0)}static newFoundDocument(e,t,c){return new pe(e,1,t,c,0)}static newNoDocument(e,t){return new pe(e,2,t,de.empty(),0)}static newUnknownDocument(e,t){return new pe(e,3,t,de.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new pe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t=null,c=[],n=[],r=null,s=null,i=null){this.path=e,this.collectionGroup=t,this.orderBy=c,this.filters=n,this.limit=r,this.startAt=s,this.endAt=i,this.A=null}}function ge(e,t=null,c=[],n=[],r=null,s=null,i=null){return new ze(e,t,c,n,r,s,i)}function be(e){const t=b(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>He(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Y(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ie(t.startAt)),t.endAt&&(e+="|ub:",e+=Ie(t.endAt)),t.A=e}return t.A}function Me(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ie(t.value)}`;var t}).join(", ")}]`),Y(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ie(e.startAt)),e.endAt&&(t+=", endAt: "+Ie(e.endAt)),`Target(${t})`}function ye(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!je(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(c=e.filters[r],n=t.filters[r],c.op!==n.op||!c.field.isEqual(n.field)||!ce(c.value,n.value))return!1;var c,n;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ne(e.startAt,t.startAt)&&Ne(e.endAt,t.endAt)}function Ce(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ve extends class{}{constructor(e,t,c){super(),this.field=e,this.op=t,this.value=c}static create(e,t,c){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,c):new Le(e,t,c):"array-contains"===t?new Se(e,c):"in"===t?new Ee(e,c):"not-in"===t?new Oe(e,c):"array-contains-any"===t?new ke(e,c):new Ve(e,t,c)}static R(e,t,c){return"in"===t?new we(e,c):new _e(e,c)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(re(t,this.value)):null!==t&&te(this.value)===te(t)&&this.P(re(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return z()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function He(e){return e.field.canonicalString()+e.op.toString()+ie(e.value)}class Le extends Ve{constructor(e,t,c){super(e,t,c),this.key=ee.fromName(c.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.P(t)}}class we extends Ve{constructor(e,t){super(e,"in",t),this.keys=Ae("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _e extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=Ae("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ae(e,t){var c;return((null===(c=t.arrayValue)||void 0===c?void 0:c.values)||[]).map(e=>ee.fromName(e.referenceValue))}class Se extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return le(t)&&ne(t.arrayValue,this.value)}}class Ee extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ne(this.value.arrayValue,t)}}class Oe extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ne(this.value.arrayValue,t)}}class ke extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!le(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ne(this.value.arrayValue,e))}}class Te{constructor(e,t){this.position=e,this.before=t}}function Ie(e){return`${e.before?"b":"a"}:${e.position.map(e=>ie(e)).join(",")}`}class xe{constructor(e,t="asc"){this.field=e,this.dir=t}}function je(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function De(e,t,c){let n=0;for(let r=0;r<e.position.length;r++){const s=t[r],i=e.position[r];if(n=s.field.isKeyField()?ee.comparator(ee.fromName(i.referenceValue),c.key):re(i,c.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return e.before?n<=0:n<0}function Ne(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let c=0;c<e.position.length;c++)if(!ce(e.position[c],t.position[c]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t=null,c=[],n=[],r=null,s="F",i=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=c,this.filters=n,this.limit=r,this.limitType=s,this.startAt=i,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Re(e,t,c,n,r,s,i,a){return new Pe(e,t,c,n,r,s,i,a)}function Fe(e){return new Pe(e)}function Ue(e){return!Y(e.limit)&&"F"===e.limitType}function qe(e){return!Y(e.limit)&&"L"===e.limitType}function Be(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ze(e){for(const t of e.filters)if(t.v())return t.field;return null}function $e(e){return null!==e.collectionGroup}function We(e){const t=b(e);if(null===t.V){t.V=[];const e=Ze(t),c=Be(t);if(null!==e&&null===c)e.isKeyField()||t.V.push(new xe(e)),t.V.push(new xe(F.keyField(),"asc"));else{let e=!1;for(const c of t.explicitOrderBy)t.V.push(c),c.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new xe(F.keyField(),e))}}}return t.V}function Ke(e){const t=b(e);if(!t.S)if("F"===t.limitType)t.S=ge(t.path,t.collectionGroup,We(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of We(t)){const t="desc"===r.dir?"asc":"desc";e.push(new xe(r.field,t))}const c=t.endAt?new Te(t.endAt.position,!t.endAt.before):null,n=t.startAt?new Te(t.startAt.position,!t.startAt.before):null;t.S=ge(t.path,t.collectionGroup,e,t.filters,t.limit,c,n)}return t.S}function Ge(e,t,c){return new Pe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,c,e.startAt,e.endAt)}function Xe(e,t){return ye(Ke(e),Ke(t))&&e.limitType===t.limitType}function Ye(e){return`${be(Ke(e))}|lt:${e.limitType}`}function Qe(e){return`Query(target=${Me(Ke(e))}; limitType=${e.limitType})`}function Je(e,t){return t.isFoundDocument()&&function(e,t){const c=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(c):ee.isDocumentKey(e.path)?e.path.isEqual(c):e.path.isImmediateParentOf(c)}(e,t)&&function(e,t){for(const c of e.explicitOrderBy)if(!c.field.isKeyField()&&null===t.data.field(c.field))return!1;return!0}(e,t)&&function(e,t){for(const c of e.filters)if(!c.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!De(e.startAt,We(e),t))&&(!e.endAt||!De(e.endAt,We(e),t))}(e,t)}function et(e){return(t,c)=>{let n=!1;for(const r of We(e)){const e=tt(r,t,c);if(0!==e)return e;n=n||r.field.isKeyField()}return 0}}function tt(e,t,c){const n=e.field.isKeyField()?ee.comparator(t.key,c.key):function(e,t,c){const n=t.data.field(e),r=c.data.field(e);return null!==n&&null!==r?re(n,r):z()}(e.field,t,c);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return z()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(t)?"-0":t}}function nt(e){return{integerValue:""+e}}function rt(e,t){return J(t)?nt(t):ct(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this._=void 0}}function it(e,t,c){return e instanceof lt?function(e,t){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(c.fields.__previous_value__=t),{mapValue:c}}(c,t):e instanceof ht?ut(e,t):e instanceof ft?vt(e,t):function(e,t){const c=ot(e,t),n=mt(c)+mt(e.C);return oe(c)&&oe(e.C)?nt(n):ct(e.N,n)}(e,t)}function at(e,t,c){return e instanceof ht?ut(e,t):e instanceof ft?vt(e,t):c}function ot(e,t){return e instanceof dt?oe(c=t)||function(e){return!!e&&"doubleValue"in e}(c)?t:{integerValue:0}:null;var c}class lt extends st{}class ht extends st{constructor(e){super(),this.elements=e}}function ut(e,t){const c=pt(t);for(const n of e.elements)c.some(e=>ce(e,n))||c.push(n);return{arrayValue:{values:c}}}class ft extends st{constructor(e){super(),this.elements=e}}function vt(e,t){let c=pt(t);for(const n of e.elements)c=c.filter(e=>!ce(e,n));return{arrayValue:{values:c}}}class dt extends st{constructor(e,t){super(),this.N=e,this.C=t}}function mt(e){return $(e.integerValue||e.doubleValue)}function pt(e){return le(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ht&&t instanceof ht||e instanceof ft&&t instanceof ft?k(e.elements,t.elements,ce):e instanceof dt&&t instanceof dt?ce(e.C,t.C):e instanceof lt&&t instanceof lt}(e.transform,t.transform)}class gt{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yt{}function Ct(e,t,c){e instanceof _t?function(e,t,c){const n=e.value.clone(),r=Et(e.fieldTransforms,t,c.transformResults);n.setAll(r),t.convertToFoundDocument(c.version,n).setHasCommittedMutations()}(e,t,c):e instanceof At?function(e,t,c){if(!Mt(e.precondition,t))return void t.convertToUnknownDocument(c.version);const n=Et(e.fieldTransforms,t,c.transformResults),r=t.data;r.setAll(St(e)),r.setAll(n),t.convertToFoundDocument(c.version,r).setHasCommittedMutations()}(e,t,c):function(e,t,c){t.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,c)}function Vt(e,t,c){e instanceof _t?function(e,t,c){if(!Mt(e.precondition,t))return;const n=e.value.clone(),r=Ot(e.fieldTransforms,c,t);n.setAll(r),t.convertToFoundDocument(wt(t),n).setHasLocalMutations()}(e,t,c):e instanceof At?function(e,t,c){if(!Mt(e.precondition,t))return;const n=Ot(e.fieldTransforms,c,t),r=t.data;r.setAll(St(e)),r.setAll(n),t.convertToFoundDocument(wt(t),r).setHasLocalMutations()}(e,t,c):function(e,t){Mt(e.precondition,t)&&t.convertToNoDocument(I.min())}(e,t)}function Ht(e,t){let c=null;for(const n of e.fieldTransforms){const e=t.data.field(n.field),r=ot(n.transform,e||null);null!=r&&(null==c&&(c=de.empty()),c.set(n.field,r))}return c||null}function Lt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&k(e,t,(e,t)=>zt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function wt(e){return e.isFoundDocument()?e.version:I.min()}class _t extends yt{constructor(e,t,c,n=[]){super(),this.key=e,this.value=t,this.precondition=c,this.fieldTransforms=n,this.type=0}}class At extends yt{constructor(e,t,c,n,r=[]){super(),this.key=e,this.data=t,this.fieldMask=c,this.precondition=n,this.fieldTransforms=r,this.type=1}}function St(e){const t=new Map;return e.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const n=e.data.field(c);t.set(c,n)}}),t}function Et(e,t,c){const n=new Map;g(e.length===c.length);for(let r=0;r<c.length;r++){const s=e[r],i=s.transform,a=t.data.field(s.field);n.set(s.field,at(i,a,c[r]))}return n}function Ot(e,t,c){const n=new Map;for(const r of e){const e=r.transform,s=c.data.field(r.field);n.set(r.field,it(e,s,t))}return n}class kt extends yt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Tt extends yt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,jt;function Dt(e){switch(e){default:return z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Nt(e){if(void 0===e)return d("GRPC error has no .code"),M.UNKNOWN;switch(e){case xt.OK:return M.OK;case xt.CANCELLED:return M.CANCELLED;case xt.UNKNOWN:return M.UNKNOWN;case xt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case xt.INTERNAL:return M.INTERNAL;case xt.UNAVAILABLE:return M.UNAVAILABLE;case xt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case xt.NOT_FOUND:return M.NOT_FOUND;case xt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case xt.ABORTED:return M.ABORTED;case xt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case xt.DATA_LOSS:return M.DATA_LOSS;default:return z()}}(jt=xt||(xt={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new Pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const c=this.comparator(e,t.key);if(0===c)return t.value;c<0?t=t.left:c>0&&(t=t.right)}return null}indexOf(e){let t=0,c=this.root;for(;!c.isEmpty();){const n=this.comparator(e,c.key);if(0===n)return t+c.left.size;n<0?c=c.left:(t+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,c)=>(e(t,c),!1))}toString(){const e=[];return this.inorderTraversal((t,c)=>(e.push(`${t}:${c}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rt(this.root,e,this.comparator,!0)}}class Rt{constructor(e,t,c,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?c(e.key,t):1,n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,c,n,r){this.key=e,this.value=t,this.color=null!=c?c:Ft.RED,this.left=null!=n?n:Ft.EMPTY,this.right=null!=r?r:Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,c,n,r){return new Ft(null!=e?e:this.key,null!=t?t:this.value,null!=c?c:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,c){let n=this;const r=c(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,t,c),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,c)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let c,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Ft.EMPTY;c=n.right.min(),n=n.copy(c.key,c.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z();if(this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1,Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,c,n,r){return this}insert(e,t,c){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,c)=>(e(t),!1))}forEachInRange(e,t){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const n=c.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let c;for(c=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qt(this.data.getIterator())}getIteratorFrom(e){return new qt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ut))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),c=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ut(this.comparator);return t.data=e,t}}class qt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Pt(ee.comparator);function Zt(){return Bt}const $t=new Pt(ee.comparator);function Wt(){return $t}const Kt=new Pt(ee.comparator);function Gt(){return Kt}const Xt=new Ut(ee.comparator);function Yt(...e){let t=Xt;for(const c of e)t=t.add(c);return t}const Qt=new Ut(O);function Jt(){return Qt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,c,n,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=c,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const c=new Map;return c.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,t)),new ec(I.min(),c,Jt(),Zt(),Yt())}}class tc{constructor(e,t,c,n,r){this.resumeToken=e,this.current=t,this.addedDocuments=c,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new tc(q.EMPTY_BYTE_STRING,t,Yt(),Yt(),Yt())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,c,n){this.k=e,this.removedTargetIds=t,this.key=c,this.$=n}}class nc{constructor(e,t){this.targetId=e,this.O=t}}class rc{constructor(e,t,c=q.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=c,this.cause=n}}class sc{constructor(){this.F=0,this.M=oc(),this.L=q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Yt(),t=Yt(),c=Yt();return this.M.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:c=c.add(n);break;default:z()}}),new tc(this.L,this.B,e,t,c)}G(){this.U=!1,this.M=oc()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class ic{constructor(e){this.tt=e,this.et=new Map,this.nt=Zt(),this.st=ac(),this.it=new Ut(O)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,t=>{const c=this.ut(t);switch(e.state){case 0:this.ht(t)&&c.j(e.resumeToken);break;case 1:c.X(),c.q||c.G(),c.j(e.resumeToken);break;case 2:c.X(),c.q||this.removeTarget(t);break;case 3:this.ht(t)&&(c.Z(),c.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),c.j(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,c)=>{this.ht(c)&&t(c)})}ft(e){const t=e.targetId,c=e.O.count,n=this.dt(t);if(n){const e=n.target;if(Ce(e))if(0===c){const c=new ee(e.path);this.at(t,c,pe.newNoDocument(c,I.min()))}else g(1===c);else this.wt(t)!==c&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((c,n)=>{const r=this.dt(n);if(r){if(c.current&&Ce(r.target)){const t=new ee(r.target.path);null!==this.nt.get(t)||this.gt(n,t)||this.at(n,t,pe.newNoDocument(t,e))}c.K&&(t.set(n,c.W()),c.G())}});let c=Yt();this.st.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{const t=this.dt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(c=c.add(e))});const n=new ec(e,t,this.it,this.nt,c);return this.nt=Zt(),this.st=ac(),this.it=new Ut(O),n}ot(e,t){if(!this.ht(e))return;const c=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,c),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,c){if(!this.ht(e))return;const n=this.ut(e);this.gt(e,t)?n.H(t,1):n.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),c&&(this.nt=this.nt.insert(t,c))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new sc,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Ut(O),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||v("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new sc),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function ac(){return new Pt(ee.comparator)}function oc(){return new Pt(ee.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),hc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class uc{constructor(e,t){this.databaseId=e,this.D=t}}function fc(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vc(e,t){return e.D?t.toBase64():t.toUint8Array()}function dc(e,t){return fc(e,t.toTimestamp())}function mc(e){return g(!!e),I.fromTimestamp(function(e){const t=Z(e);return new T(t.seconds,t.nanos)}(e))}function pc(e,t){return function(e){return new P(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function zc(e){const t=P.fromString(e);return g(Uc(t)),t}function gc(e,t){return pc(e.databaseId,t.path)}function bc(e,t){const c=zc(t);if(c.get(1)!==e.databaseId.projectId)throw new y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+e.databaseId.projectId);if(c.get(3)!==e.databaseId.database)throw new y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+e.databaseId.database);return new ee(Vc(c))}function Mc(e,t){return pc(e.databaseId,t)}function yc(e){const t=zc(e);return 4===t.length?P.emptyPath():Vc(t)}function Cc(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vc(e){return g(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Hc(e,t,c){return{name:gc(e,t),fields:c.value.mapValue.fields}}function Lc(e,t){let c;if("targetChange"in t){t.targetChange;const n=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.D?(g(void 0===t||"string"==typeof t),q.fromBase64String(t||"")):(g(void 0===t||t instanceof Uint8Array),q.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),i=t.targetChange.cause,a=i&&function(e){const t=void 0===e.code?M.UNKNOWN:Nt(e.code);return new y(t,e.message||"")}(i);c=new rc(n,r,s,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=bc(e,n.document.name),s=mc(n.document.updateTime),i=new de({mapValue:{fields:n.document.fields}}),a=pe.newFoundDocument(r,s,i),o=n.targetIds||[],l=n.removedTargetIds||[];c=new cc(o,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=bc(e,n.document),s=n.readTime?mc(n.readTime):I.min(),i=pe.newNoDocument(r,s),a=n.removedTargetIds||[];c=new cc([],a,i.key,i)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=bc(e,n.document),s=n.removedTargetIds||[];c=new cc([],s,r,null)}else{if(!("filter"in t))return z();{t.filter;const e=t.filter;e.targetId;const n=e.count||0,r=new It(n),s=e.targetId;c=new nc(s,r)}}return c}function wc(e,t){let c;if(t instanceof _t)c={update:Hc(e,t.key,t.value)};else if(t instanceof kt)c={delete:gc(e,t.key)};else if(t instanceof At)c={update:Hc(e,t.key,t.data),updateMask:Fc(t.fieldMask)};else{if(!(t instanceof Tt))return z();c={verify:gc(e,t.key)}}return t.fieldTransforms.length>0&&(c.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const c=t.transform;if(c instanceof lt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ht)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ft)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof dt)return{fieldPath:t.field.canonicalString(),increment:c.C};throw z()}(0,e))),t.precondition.isNone||(c.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:dc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:z()}(e,t.precondition)),c}function _c(e,t){return e&&e.length>0?(g(void 0!==t),e.map(e=>function(e,t){let c=e.updateTime?mc(e.updateTime):mc(t);return c.isEqual(I.min())&&(c=mc(t)),new gt(c,e.transformResults||[])}(e,t))):[]}function Ac(e,t){return{documents:[Mc(e,t.path)]}}function Sc(e,t){const c={structuredQuery:{}},n=t.path;null!==t.collectionGroup?(c.parent=Mc(e,n),c.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(c.parent=Mc(e,n.popLast()),c.structuredQuery.from=[{collectionId:n.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(ue(e.value))return{unaryFilter:{field:Dc(e.field),op:"IS_NAN"}};if(he(e.value))return{unaryFilter:{field:Dc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ue(e.value))return{unaryFilter:{field:Dc(e.field),op:"IS_NOT_NAN"}};if(he(e.value))return{unaryFilter:{field:Dc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dc(e.field),op:jc(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(c.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Dc(e.field),direction:xc(e.dir)}}(e))}(t.orderBy);s&&(c.structuredQuery.orderBy=s);const i=function(e,t){return e.D||Y(t)?t:{value:t}}(e,t.limit);return null!==i&&(c.structuredQuery.limit=i),t.startAt&&(c.structuredQuery.startAt=Tc(t.startAt)),t.endAt&&(c.structuredQuery.endAt=Tc(t.endAt)),c}function Ec(e){let t=yc(e.parent);const c=e.structuredQuery,n=c.from?c.from.length:0;let r=null;if(n>0){g(1===n);const e=c.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];c.where&&(s=kc(c.where));let i=[];c.orderBy&&(i=c.orderBy.map(e=>function(e){return new xe(Nc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;c.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Y(t)?null:t}(c.limit));let o=null;c.startAt&&(o=Ic(c.startAt));let l=null;return c.endAt&&(l=Ic(c.endAt)),Re(t,r,i,s,a,"F",o,l)}function Oc(e,t){const c=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,t.purpose);return null==c?null:{"goog-listen-tags":c}}function kc(e){return e?void 0!==e.unaryFilter?[Rc(e)]:void 0!==e.fieldFilter?[Pc(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>kc(e)).reduce((e,t)=>e.concat(t)):z():[]}function Tc(e){return{before:e.before,values:e.position}}function Ic(e){const t=!!e.before,c=e.values||[];return new Te(c,t)}function xc(e){return lc[e]}function jc(e){return hc[e]}function Dc(e){return{fieldPath:e.canonicalString()}}function Nc(e){return F.fromServerFormat(e.fieldPath)}function Pc(e){return Ve.create(Nc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}function Rc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Nc(e.unaryFilter.field);return Ve.create(t,"==",{doubleValue:NaN});case"IS_NULL":const c=Nc(e.unaryFilter.field);return Ve.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Nc(e.unaryFilter.field);return Ve.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Nc(e.unaryFilter.field);return Ve.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function Fc(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e){let t="";for(let c=0;c<e.length;c++)t.length>0&&(t=Zc(t)),t=Bc(e.get(c),t);return Zc(t)}function Bc(e,t){let c=t;const n=e.length;for(let r=0;r<n;r++){const t=e.charAt(r);switch(t){case"\0":c+="";break;case"":c+="";break;default:c+=t}}return c}function Zc(e){return e+""}class $c{constructor(e,t,c){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=c}}$c.store="owner",$c.key="owner";class Wc{constructor(e,t,c){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=c}}Wc.store="mutationQueues",Wc.keyPath="userId";class Kc{constructor(e,t,c,n,r){this.userId=e,this.batchId=t,this.localWriteTimeMs=c,this.baseMutations=n,this.mutations=r}}Kc.store="mutations",Kc.keyPath="batchId",Kc.userMutationsIndex="userMutationsIndex",Kc.userMutationsKeyPath=["userId","batchId"];class Gc{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,qc(t)]}static key(e,t,c){return[e,qc(t),c]}}Gc.store="documentMutations",Gc.PLACEHOLDER=new Gc;class Xc{constructor(e,t,c,n,r,s){this.unknownDocument=e,this.noDocument=t,this.document=c,this.hasCommittedMutations=n,this.readTime=r,this.parentPath=s}}Xc.store="remoteDocuments",Xc.readTimeIndex="readTimeIndex",Xc.readTimeIndexPath="readTime",Xc.collectionReadTimeIndex="collectionReadTimeIndex",Xc.collectionReadTimeIndexPath=["parentPath","readTime"];class Yc{constructor(e){this.byteSize=e}}Yc.store="remoteDocumentGlobal",Yc.key="remoteDocumentGlobalKey";class Qc{constructor(e,t,c,n,r,s,i){this.targetId=e,this.canonicalId=t,this.readTime=c,this.resumeToken=n,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=i}}Qc.store="targets",Qc.keyPath="targetId",Qc.queryTargetsIndexName="queryTargetsIndex",Qc.queryTargetsKeyPath=["canonicalId","targetId"];class Jc{constructor(e,t,c){this.targetId=e,this.path=t,this.sequenceNumber=c}}Jc.store="targetDocuments",Jc.keyPath=["targetId","path"],Jc.documentTargetsIndex="documentTargetsIndex",Jc.documentTargetsKeyPath=["path","targetId"];class en{constructor(e,t,c,n){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=c,this.targetCount=n}}en.key="targetGlobalKey",en.store="targetGlobal";class tn{constructor(e,t){this.collectionId=e,this.parent=t}}tn.store="collectionParents",tn.keyPath=["collectionId","parent"];class cn{constructor(e,t,c,n){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=c,this.inForeground=n}}cn.store="clientMetadata",cn.keyPath="clientId";class nn{constructor(e,t,c){this.bundleId=e,this.createTime=t,this.version=c}}nn.store="bundles",nn.keyPath="bundleId";class rn{constructor(e,t,c){this.name=e,this.readTime=t,this.bundledQuery=c}}rn.store="namedQueries",rn.keyPath="name";Wc.store,Kc.store,Gc.store,Xc.store,Qc.store,$c.store,en.store,Jc.store,cn.store,Yc.store,tn.store,nn.store,rn.store;const sn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class an{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new on((c,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(c,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(c,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof on?t:on.resolve(t)}catch(e){return on.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):on.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):on.reject(t)}static resolve(e){return new on((t,c)=>{t(e)})}static reject(e){return new on((t,c)=>{c(e)})}static waitFor(e){return new on((t,c)=>{let n=0,r=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++r,s&&r===n&&t()},e=>c(e))}),s=!0,r===n&&t()})}static or(e){let t=on.resolve(!1);for(const c of e)t=t.next(e=>e?on.resolve(e):c());return t}static forEach(e,t){const c=[];return e.forEach((e,n)=>{c.push(t.call(this,e,n))}),this.waitFor(c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e,t,c,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=c,this.mutations=n}applyToRemoteDocument(e,t){const c=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const t=this.mutations[n];t.key.isEqual(e.key)&&Ct(t,e,c[n])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Vt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Vt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const c=e.get(t.key),n=c;this.applyToLocalView(n),c.isValidDocument()||n.convertToNoDocument(I.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Yt())}isEqual(e){return this.batchId===e.batchId&&k(this.mutations,e.mutations,(e,t)=>Lt(e,t))&&k(this.baseMutations,e.baseMutations,(e,t)=>Lt(e,t))}}class un{constructor(e,t,c,n){this.batch=e,this.commitVersion=t,this.mutationResults=c,this.docVersions=n}static from(e,t,c){g(e.mutations.length===c.length);let n=Gt();const r=e.mutations;for(let s=0;s<r.length;s++)n=n.insert(r[s].key,c[s].version);return new un(e,t,c,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,c,n,r=I.min(),s=I.min(),i=q.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=c,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=i}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.Wt=e}}function dn(e){const t=Ec({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ge(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(){this.Gt=new pn}addToCollectionParentIndex(e,t){return this.Gt.add(t),on.resolve()}getCollectionParents(e,t){return on.resolve(this.Gt.getEntries(t))}}class pn{constructor(){this.index={}}add(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t]||new Ut(P.comparator),r=!n.has(c);return this.index[t]=n.add(c),r}has(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t];return n&&n.has(c)}getEntries(e){return(this.index[e]||new Ut(P.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,c){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=c}static withCacheSize(e){return new zn(e,zn.DEFAULT_COLLECTION_PERCENTILE,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.DEFAULT_COLLECTION_PERCENTILE=10,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zn.DEFAULT=new zn(41943040,zn.DEFAULT_COLLECTION_PERCENTILE,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zn.DISABLED=new zn(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new gn(0)}static ie(){return new gn(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bn(e){if(e.code!==M.FAILED_PRECONDITION||e.message!==sn)throw e;v("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0!==c)for(const[n,r]of c)if(this.equalsFn(n,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const c=this.mapKeyFn(e),n=this.inner[c];if(void 0!==n){for(let c=0;c<n.length;c++)if(this.equalsFn(n[c][0],e))return void(n[c]=[e,t]);n.push([e,t])}else this.inner[c]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0===c)return!1;for(let n=0;n<c.length;n++)if(this.equalsFn(c[n][0],e))return 1===c.length?delete this.inner[t]:c.splice(n,1),!0;return!1}forEach(e){j(this.inner,(t,c)=>{for(const[n,r]of c)e(n,r)})}isEmpty(){return D(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:I.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:pe.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const c=this.changes.get(t);return void 0!==c?on.resolve(c.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{constructor(e,t,c){this.He=e,this.In=t,this.Ht=c}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(c=>this.Rn(e,t,c))}Rn(e,t,c){return this.He.getEntry(e,t).next(e=>{for(const t of c)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,c)=>{for(const n of t)n.applyToLocalView(c)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,c){return function(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):$e(t)?this.Sn(e,t,c):this.Dn(e,t,c)}Vn(e,t){return this.An(e,new ee(t)).next(e=>{let t=Wt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,c){const n=t.collectionGroup;let r=Wt();return this.Ht.getCollectionParents(e,n).next(s=>on.forEach(s,s=>{const i=function(e,t){return new Pe(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(n));return this.Dn(e,i,c).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}Dn(e,t,c){let n,r;return this.He.getDocumentsMatchingQuery(e,t,c).next(c=>(n=c,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(r=t,this.Cn(e,r,n).next(e=>{n=e;for(const t of r)for(const e of t.mutations){const c=e.key;let r=n.get(c);null==r&&(r=pe.newInvalidDocument(c),n=n.insert(c,r)),Vt(e,r,t.localWriteTime),r.isFoundDocument()||(n=n.remove(c))}}))).next(()=>(n.forEach((e,c)=>{Je(t,c)||(n=n.remove(e))}),n))}Cn(e,t,c){let n=Yt();for(const s of t)for(const e of s.mutations)e instanceof At&&null===c.get(e.key)&&(n=n.add(e.key));let r=c;return this.He.getEntries(e,n).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,c,n){this.targetId=e,this.fromCache=t,this.Nn=c,this.xn=n}static kn(e,t){let c=Yt(),n=Yt();for(const r of t.docChanges)switch(r.type){case 0:c=c.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new Vn(e,t.fromCache,c,n)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,c,n){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||c.isEqual(I.min())?this.Fn(e,t):this.On.Pn(e,n).next(r=>{const i=this.Mn(t,r);return(Ue(t)||qe(t))&&this.Ln(t.limitType,i,n,c)?this.Fn(e,t):(f()<=s["a"].DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",c.toString(),Qe(t)),this.On.getDocumentsMatchingQuery(e,t,c).next(e=>(i.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let c=new Ut(et(e));return t.forEach((t,n)=>{Je(e,n)&&(c=c.add(n))}),c}Ln(e,t,c,n){if(c.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Fn(e,t){return f()<=s["a"].DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Qe(t)),this.On.getDocumentsMatchingQuery(e,t,I.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,c,n){this.persistence=e,this.Bn=t,this.N=n,this.Un=new Pt(O),this.qn=new Mn(e=>be(e),ye),this.Kn=I.min(),this.In=e.getMutationQueue(c),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Cn(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function wn(e,t,c,n){return new Ln(e,t,c,n)}async function _n(e,t){const c=b(e);let n=c.In,r=c.Qn;const s=await c.persistence.runTransaction("Handle user change","readonly",e=>{let s;return c.In.getAllMutationBatches(e).next(i=>(s=i,n=c.persistence.getMutationQueue(t),r=new Cn(c.jn,n,c.persistence.getIndexManager()),n.getAllMutationBatches(e))).next(t=>{const c=[],n=[];let i=Yt();for(const e of s){c.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}for(const e of t){n.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}return r.Pn(e,i).next(e=>({Wn:e,removedBatchIds:c,addedBatchIds:n}))})});return c.In=n,c.Qn=r,c.Bn.$n(c.Qn),s}function An(e,t){const c=b(e);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const n=t.batch.keys(),r=c.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,c,n){const r=c.batch,s=r.keys();let i=on.resolve();return s.forEach(e=>{i=i.next(()=>n.getEntry(t,e)).next(t=>{const s=c.docVersions.get(e);g(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,c),t.isValidDocument()&&n.addEntry(t,c.commitVersion))})}),i.next(()=>e.In.removeMutationBatch(t,r))}(c,e,t,r).next(()=>r.apply(e)).next(()=>c.In.performConsistencyCheck(e)).next(()=>c.Qn.Pn(e,n))})}function Sn(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ze.getLastRemoteSnapshotVersion(e))}function En(e,t){const c=b(e),n=t.snapshotVersion;let r=c.Un;return c.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=c.jn.newChangeBuffer({trackRemovals:!0});r=c.Un;const i=[];t.targetChanges.forEach((t,s)=>{const a=r.get(s);if(!a)return;i.push(c.ze.removeMatchingKeys(e,t.removedDocuments,s).next(()=>c.ze.addMatchingKeys(e,t.addedDocuments,s)));const o=t.resumeToken;if(o.approximateByteSize()>0){const l=a.withResumeToken(o,n).withSequenceNumber(e.currentSequenceNumber);r=r.insert(s,l),function(e,t,c){return g(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)}(a,l,t)&&i.push(c.ze.updateTargetData(e,l))}});let a=Zt();if(t.documentUpdates.forEach((n,r)=>{t.resolvedLimboDocuments.has(n)&&i.push(c.persistence.referenceDelegate.updateLimboDocument(e,n))}),i.push(On(e,s,t.documentUpdates,n,void 0).next(e=>{a=e})),!n.isEqual(I.min())){const t=c.ze.getLastRemoteSnapshotVersion(e).next(t=>c.ze.setTargetsMetadata(e,e.currentSequenceNumber,n));i.push(t)}return on.waitFor(i).next(()=>s.apply(e)).next(()=>c.Qn.vn(e,a)).next(()=>a)}).then(e=>(c.Un=r,e))}function On(e,t,c,n,r){let s=Yt();return c.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Zt();return c.forEach((c,i)=>{const a=e.get(c),o=(null==r?void 0:r.get(c))||n;i.isNoDocument()&&i.version.isEqual(I.min())?(t.removeEntry(c,o),s=s.insert(c,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i,o),s=s.insert(c,i)):v("LocalStore","Ignoring outdated watch update for ",c,". Current version:",a.version," Watch version:",i.version)}),s})}function kn(e,t){const c=b(e);return c.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),c.In.getNextMutationBatchAfterBatchId(e,t)))}function Tn(e,t){const c=b(e);return c.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return c.ze.getTargetData(e,t).next(r=>r?(n=r,on.resolve(n)):c.ze.allocateTargetId(e).next(r=>(n=new fn(t,r,0,e.currentSequenceNumber),c.ze.addTargetData(e,n).next(()=>n))))}).then(e=>{const n=c.Un.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.Un=c.Un.insert(e.targetId,e),c.qn.set(t,e.targetId)),e})}async function In(e,t,c){const n=b(e),r=n.Un.get(t),s=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",s,e=>n.persistence.referenceDelegate.removeTarget(e,r))}catch(e){if(!ln(e))throw e;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.Un=n.Un.remove(t),n.qn.delete(r.target)}function xn(e,t,c){const n=b(e);let r=I.min(),s=Yt();return n.persistence.runTransaction("Execute query","readonly",e=>function(e,t,c){const n=b(e),r=n.qn.get(c);return void 0!==r?on.resolve(n.Un.get(r)):n.ze.getTargetData(t,c)}(n,e,Ke(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,n.ze.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>n.Bn.getDocumentsMatchingQuery(e,t,c?r:I.min(),c?s:Yt())).next(e=>({documents:e,Gn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return on.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var c;return this.Yn.set(t.id,{id:(c=t).id,version:c.version,createTime:mc(c.createTime)}),on.resolve()}getNamedQuery(e,t){return on.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:dn(e.bundledQuery),readTime:mc(e.readTime)}}(t)),on.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.Zn=new Ut(Nn.ts),this.es=new Ut(Nn.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const c=new Nn(e,t);this.Zn=this.Zn.add(c),this.es=this.es.add(c)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new Nn(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){const t=new ee(new P([])),c=new Nn(t,e),n=new Nn(t,e+1),r=[];return this.es.forEachInRange([c,n],e=>{this.rs(e),r.push(e.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new ee(new P([])),c=new Nn(t,e),n=new Nn(t,e+1);let r=Yt();return this.es.forEachInRange([c,n],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new Nn(e,0),c=this.Zn.firstAfterOrEqual(t);return null!==c&&e.isEqual(c.key)}}class Nn{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return ee.comparator(e.key,t.key)||O(e.ls,t.ls)}static ns(e,t){return O(e.ls,t.ls)||ee.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Ut(Nn.ts)}checkEmpty(e){return on.resolve(0===this.In.length)}addMutationBatch(e,t,c,n){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new hn(r,t,c,n);this.In.push(s);for(const i of n)this.ds=this.ds.add(new Nn(i.key,r)),this.Ht.addToCollectionParentIndex(e,i.key.path.popLast());return on.resolve(s)}lookupMutationBatch(e,t){return on.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const c=t+1,n=this._s(c),r=n<0?0:n;return on.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return on.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return on.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const c=new Nn(t,0),n=new Nn(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([c,n],e=>{const t=this.ws(e.ls);r.push(t)}),on.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let c=new Ut(O);return t.forEach(e=>{const t=new Nn(e,0),n=new Nn(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,n],e=>{c=c.add(e.ls)})}),on.resolve(this.gs(c))}getAllMutationBatchesAffectingQuery(e,t){const c=t.path,n=c.length+1;let r=c;ee.isDocumentKey(r)||(r=r.child(""));const s=new Nn(new ee(r),0);let i=new Ut(O);return this.ds.forEachWhile(e=>{const t=e.key.path;return!!c.isPrefixOf(t)&&(t.length===n&&(i=i.add(e.ls)),!0)},s),on.resolve(this.gs(i))}gs(e){const t=[];return e.forEach(e=>{const c=this.ws(e);null!==c&&t.push(c)}),t}removeMutationBatch(e,t){g(0===this.ys(t.batchId,"removed")),this.In.shift();let c=this.ds;return on.forEach(t.mutations,n=>{const r=new Nn(n.key,t.batchId);return c=c.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.ds=c})}te(e){}containsKey(e,t){const c=new Nn(t,0),n=this.ds.firstAfterOrEqual(c);return on.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.In.length,on.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Pt(ee.comparator),this.size=0}addEntry(e,t,c){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.clone(),size:i,readTime:c}),this.size+=i-s,this.Ht.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const c=this.docs.get(t);return on.resolve(c?c.document.clone():pe.newInvalidDocument(t))}getEntries(e,t){let c=Zt();return t.forEach(e=>{const t=this.docs.get(e);c=c.insert(e,t?t.document.clone():pe.newInvalidDocument(e))}),on.resolve(c)}getDocumentsMatchingQuery(e,t,c){let n=Zt();const r=new ee(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:i}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;i.compareTo(c)<=0||Je(t,r)&&(n=n.insert(r.key,r.clone()))}return on.resolve(n)}Ts(e,t){return on.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Fn(this)}getSize(e){return on.resolve(this.size)}}class Fn extends yn{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((c,n)=>{n.document.isValidDocument()?t.push(this.Se.addEntry(e,n.document,this.getReadTime(c))):this.Se.removeEntry(c)}),on.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.persistence=e,this.Es=new Mn(e=>be(e),ye),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Is=0,this.As=new Dn,this.targetCount=0,this.Rs=gn.se()}forEachTarget(e,t){return this.Es.forEach((e,c)=>t(c)),on.resolve()}getLastRemoteSnapshotVersion(e){return on.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return on.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),on.resolve(this.highestTargetId)}setTargetsMetadata(e,t,c){return c&&(this.lastRemoteSnapshotVersion=c),t>this.Is&&(this.Is=t),on.resolve()}ae(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new gn(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,on.resolve()}updateTargetData(e,t){return this.ae(t),on.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,on.resolve()}removeTargets(e,t,c){let n=0;const r=[];return this.Es.forEach((s,i)=>{i.sequenceNumber<=t&&null===c.get(i.targetId)&&(this.Es.delete(s),r.push(this.removeMatchingKeysForTargetId(e,i.targetId)),n++)}),on.waitFor(r).next(()=>n)}getTargetCount(e){return on.resolve(this.targetCount)}getTargetData(e,t){const c=this.Es.get(t)||null;return on.resolve(c)}addMatchingKeys(e,t,c){return this.As.ss(t,c),on.resolve()}removeMatchingKeys(e,t,c){this.As.os(t,c);const n=this.persistence.referenceDelegate,r=[];return n&&t.forEach(t=>{r.push(n.markPotentiallyOrphaned(e,t))}),on.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),on.resolve()}getMatchingKeysForTargetId(e,t){const c=this.As.hs(t);return on.resolve(c)}containsKey(e,t){return on.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.bs={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Un(this),this.Ht=new mn,this.He=function(e,t){return new Rn(e,t)}(this.Ht,e=>this.referenceDelegate.Ps(e)),this.N=new vn(t),this.Je=new jn(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Pn(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,c){v("MemoryPersistence","Starting transaction:",e);const n=new Bn(this.Le.next());return this.referenceDelegate.vs(),c(n).next(e=>this.referenceDelegate.Vs(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ss(e,t){return on.or(Object.values(this.bs).map(c=>()=>c.containsKey(e,t)))}}class Bn extends an{constructor(e){super(),this.currentSequenceNumber=e}}class Zn{constructor(e){this.persistence=e,this.Ds=new Dn,this.Cs=null}static Ns(e){return new Zn(e)}get xs(){if(this.Cs)return this.Cs;throw z()}addReference(e,t,c){return this.Ds.addReference(c,t),this.xs.delete(c.toString()),on.resolve()}removeReference(e,t,c){return this.Ds.removeReference(c,t),this.xs.add(c.toString()),on.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),on.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>c.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return on.forEach(this.xs,c=>{const n=ee.fromPath(c);return this.ks(e,n).next(e=>{e||t.removeEntry(n)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return on.or([()=>on.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.activeTargetIds=Jt()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wn{constructor(){this.yi=new $n,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,c){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,c){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new $n,Promise.resolve()}handleUserChange(e,t,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{Ti(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,c,n){const r=this.Bi(e,t);v("RestConnection","Sending: ",r,c);const s={};return this.Ui(s,n),this.qi(e,r,s,c).then(e=>(v("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",r,"request:",c),t})}Ki(e,t,c,n){return this.Li(e,t,c,n)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const c in t.authHeaders)t.authHeaders.hasOwnProperty(c)&&(e[c]=t.authHeaders[c])}Bi(e,t){const c=Xn[e];return`${this.Fi}/v1/${t}:${c}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,c,n){return new Promise((r,s)=>{const i=new a["g"];i.listenOnce(a["c"].COMPLETE,()=>{try{switch(i.getLastErrorCode()){case a["a"].NO_ERROR:const t=i.getResponseJson();v("Connection","XHR received:",JSON.stringify(t)),r(t);break;case a["a"].TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),s(new y(M.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const c=i.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',c,"response text:",i.getResponseText()),c>0){const e=i.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(t)>=0?t:M.UNKNOWN}(e.status);s(new y(t,e.message))}else s(new y(M.UNKNOWN,"Server responded with status "+i.getStatus()))}else s(new y(M.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const o=JSON.stringify(n);i.send(t,"POST",o,c,15)})}ji(e,t){const c=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],n=Object(a["h"])(),r=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,t),Object(i["p"])()||Object(i["q"])()||Object(i["l"])()||Object(i["n"])()||Object(i["s"])()||Object(i["k"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=c.join("");v("Connection","Creating WebChannel: "+o,s);const l=n.createWebChannel(o,s);let h=!1,u=!1;const f=new Yn({vi:e=>{u?v("Connection","Not sending because WebChannel is closed:",e):(h||(v("Connection","Opening WebChannel transport."),l.open(),h=!0),v("Connection","WebChannel sending:",e),l.send(e))},Vi:()=>l.close()}),d=(e,t,c)=>{e.listen(t,e=>{try{c(e)}catch(e){setTimeout(()=>{throw e},0)}})};return d(l,a["f"].EventType.OPEN,()=>{u||v("Connection","WebChannel transport opened.")}),d(l,a["f"].EventType.CLOSE,()=>{u||(u=!0,v("Connection","WebChannel transport closed"),f.$i())}),d(l,a["f"].EventType.ERROR,e=>{u||(u=!0,m("Connection","WebChannel transport errored:",e),f.$i(new y(M.UNAVAILABLE,"The operation could not be completed")))}),d(l,a["f"].EventType.MESSAGE,e=>{var t;if(!u){const c=e.data[0];g(!!c);const n=c,r=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(r){v("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=xt[e];if(void 0!==t)return Nt(t)}(e),c=r.message;void 0===t&&(t=M.INTERNAL,c="Unknown error status: "+e+" with message "+r.message),u=!0,f.$i(new y(t,c)),l.close()}else v("Connection","WebChannel received:",c),f.Oi(c)}}),d(r,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?v("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return new uc(e,!0)}class tr{constructor(e,t,c=1e3,n=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=c,this.Wi=n,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),c=Math.max(0,Date.now()-this.Ji),n=Math.max(0,t-c);n>0&&v("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${c} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,n,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,c,n,r,s){this.Oe=e,this.er=c,this.nr=n,this.credentialsProvider=r,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new tr(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(d(t.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===M.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then(e=>{this.sr===t&&this.yr(e)},t=>{e(()=>{const e=new y(M.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)})})}yr(e){const t=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{t(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.pr(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return v("PersistentStream","close with error: "+e),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget(()=>this.sr===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nr extends cr{constructor(e,t,c,n,r){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,c,r),this.N=n}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=Lc(this.N,e),c=function(e){if(!("targetChange"in e))return I.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?I.min():t.readTime?mc(t.readTime):I.min()}(e);return this.listener.Er(t,c)}Ir(e){const t={};t.database=Cc(this.N),t.addTarget=function(e,t){let c;const n=t.target;return c=Ce(n)?{documents:Ac(e,n)}:{query:Sc(e,n)},c.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?c.resumeToken=vc(e,t.resumeToken):t.snapshotVersion.compareTo(I.min())>0&&(c.readTime=fc(e,t.snapshotVersion.toTimestamp())),c}(this.N,e);const c=Oc(this.N,e);c&&(t.labels=c),this.wr(t)}Ar(e){const t={};t.database=Cc(this.N),t.removeTarget=e,this.wr(t)}}class rr extends cr{constructor(e,t,c,n,r){super(e,"write_stream_connection_backoff","write_stream_idle",t,c,r),this.N=n,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(g(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=_c(e.writeResults,e.commitTime),c=mc(e.commitTime);return this.listener.vr(c,t)}return g(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Cc(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>wc(this.N,e))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends class{}{constructor(e,t,c){super(),this.credentials=e,this.nr=t,this.N=c,this.Dr=!1}Cr(){if(this.Dr)throw new y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,c){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Li(e,t,c,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===M.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new y(M.UNKNOWN,e.toString())})}Ki(e,t,c){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Ki(e,t,c,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===M.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new y(M.UNKNOWN,e.toString())})}terminate(){this.Dr=!0}}class ir{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+e.toString()),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(t),this.$r=!1):v("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,c,n,r){this.localStore=e,this.datastore=t,this.asyncQueue=c,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ti(e=>{c.enqueueAndForget(async()=>{pr(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.Kr.add(4),await lr(t),t.Wr.set("Unknown"),t.Kr.delete(4),await or(t)}(this))})}),this.Wr=new ir(c,n)}}async function or(e){if(pr(e))for(const t of e.jr)await t(!0)}async function lr(e){for(const t of e.jr)await t(!1)}function hr(e,t){const c=b(e);c.qr.has(t.targetId)||(c.qr.set(t.targetId,t),mr(c)?dr(c):Tr(c).cr()&&fr(c,t))}function ur(e,t){const c=b(e),n=Tr(c);c.qr.delete(t),n.cr()&&vr(c,t),0===c.qr.size&&(n.cr()?n.lr():pr(c)&&c.Wr.set("Unknown"))}function fr(e,t){e.Gr.Y(t.targetId),Tr(e).Ir(t)}function vr(e,t){e.Gr.Y(t),Tr(e).Ar(t)}function dr(e){e.Gr=new ic({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qr.get(t)||null}),Tr(e).start(),e.Wr.Or()}function mr(e){return pr(e)&&!Tr(e).ar()&&e.qr.size>0}function pr(e){return 0===b(e).Kr.size}function zr(e){e.Gr=void 0}async function gr(e){e.qr.forEach((t,c)=>{fr(e,t)})}async function br(e,t){zr(e),mr(e)?(e.Wr.Lr(t),dr(e)):e.Wr.set("Unknown")}async function Mr(e,t,c){if(e.Wr.set("Online"),t instanceof rc&&2===t.state&&t.cause)try{await async function(e,t){const c=t.cause;for(const n of t.targetIds)e.qr.has(n)&&(await e.remoteSyncer.rejectListen(n,c),e.qr.delete(n),e.Gr.removeTarget(n))}(e,t)}catch(c){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),c),await yr(e,c)}else if(t instanceof cc?e.Gr.rt(t):t instanceof nc?e.Gr.ft(t):e.Gr.ct(t),!c.isEqual(I.min()))try{const t=await Sn(e.localStore);c.compareTo(t)>=0&&await function(e,t){const c=e.Gr._t(t);return c.targetChanges.forEach((c,n)=>{if(c.resumeToken.approximateByteSize()>0){const r=e.qr.get(n);r&&e.qr.set(n,r.withResumeToken(c.resumeToken,t))}}),c.targetMismatches.forEach(t=>{const c=e.qr.get(t);if(!c)return;e.qr.set(t,c.withResumeToken(q.EMPTY_BYTE_STRING,c.snapshotVersion)),vr(e,t);const n=new fn(c.target,t,1,c.sequenceNumber);fr(e,n)}),e.remoteSyncer.applyRemoteEvent(c)}(e,c)}catch(t){v("RemoteStore","Failed to raise snapshot:",t),await yr(e,t)}}async function yr(e,t,c){if(!ln(t))throw t;e.Kr.add(1),await lr(e),e.Wr.set("Offline"),c||(c=()=>Sn(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await c(),e.Kr.delete(1),await or(e)})}function Cr(e,t){return t().catch(c=>yr(e,c,t))}async function Vr(e){const t=b(e),c=Ir(t);let n=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Hr(t);)try{const e=await kn(t.localStore,n);if(null===e){0===t.Ur.length&&c.lr();break}n=e.batchId,Lr(t,e)}catch(e){await yr(t,e)}wr(t)&&_r(t)}function Hr(e){return pr(e)&&e.Ur.length<10}function Lr(e,t){e.Ur.push(t);const c=Ir(e);c.cr()&&c.br&&c.Pr(t.mutations)}function wr(e){return pr(e)&&!Ir(e).ar()&&e.Ur.length>0}function _r(e){Ir(e).start()}async function Ar(e){Ir(e).Sr()}async function Sr(e){const t=Ir(e);for(const c of e.Ur)t.Pr(c.mutations)}async function Er(e,t,c){const n=e.Ur.shift(),r=un.from(n,t,c);await Cr(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Vr(e)}async function Or(e,t){t&&Ir(e).br&&await async function(e,t){if(c=t.code,Dt(c)&&c!==M.ABORTED){const c=e.Ur.shift();Ir(e).hr(),await Cr(e,()=>e.remoteSyncer.rejectFailedWrite(c.batchId,t)),await Vr(e)}var c}(e,t),wr(e)&&_r(e)}async function kr(e,t){const c=b(e);t?(c.Kr.delete(2),await or(c)):t||(c.Kr.add(2),await lr(c),c.Wr.set("Unknown"))}function Tr(e){return e.zr||(e.zr=function(e,t,c){const n=b(e);return n.Cr(),new nr(t,n.nr,n.credentials,n.N,c)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:gr.bind(null,e),Ci:br.bind(null,e),Er:Mr.bind(null,e)}),e.jr.push(async t=>{t?(e.zr.hr(),mr(e)?dr(e):e.Wr.set("Unknown")):(await e.zr.stop(),zr(e))})),e.zr}function Ir(e){return e.Hr||(e.Hr=function(e,t,c){const n=b(e);return n.Cr(),new rr(t,n.nr,n.credentials,n.N,c)}(e.datastore,e.asyncQueue,{Si:Ar.bind(null,e),Ci:Or.bind(null,e),Vr:Sr.bind(null,e),vr:Er.bind(null,e)}),e.jr.push(async t=>{t?(e.Hr.hr(),await Vr(e)):(await e.Hr.stop(),e.Ur.length>0&&(v("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))})),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xr{constructor(e,t,c,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=c,this.op=n,this.removalCallback=r,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,c,n,r){const s=Date.now()+c,i=new xr(e,t,s,n,r);return i.start(c),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jr(e,t){if(d("AsyncQueue",`${t}: ${e}`),ln(e))return new y(M.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.comparator=e?(t,c)=>e(t,c)||ee.comparator(t.key,c.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=Wt(),this.sortedSet=new Pt(this.comparator)}static emptySet(e){return new Dr(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,c)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dr))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const c=new Dr;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=t,c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.Jr=new Pt(ee.comparator)}track(e){const t=e.doc.key,c=this.Jr.get(t);c?0!==e.type&&3===c.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==c.type?this.Jr=this.Jr.insert(t,{type:c.type,doc:e.doc}):2===e.type&&2===c.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===c.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===c.type?this.Jr=this.Jr.remove(t):1===e.type&&2===c.type?this.Jr=this.Jr.insert(t,{type:1,doc:c.doc}):0===e.type&&1===c.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):z():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal((t,c)=>{e.push(c)}),e}}class Pr{constructor(e,t,c,n,r,s,i,a){this.query=e,this.docs=t,this.oldDocs=c,this.docChanges=n,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=i,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,c,n){const r=[];return t.forEach(e=>{r.push({type:0,doc:e})}),new Pr(e,t,Dr.emptySet(t),r,c,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xe(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,c=e.docChanges;if(t.length!==c.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==c[n].type||!t[n].doc.isEqual(c[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.Xr=void 0,this.listeners=[]}}class Fr{constructor(){this.queries=new Mn(e=>Ye(e),Xe),this.onlineState="Unknown",this.Zr=new Set}}async function Ur(e,t){const c=b(e),n=t.query;let r=!1,s=c.queries.get(n);if(s||(r=!0,s=new Rr),r)try{s.Xr=await c.onListen(n)}catch(e){const c=jr(e,`Initialization of query '${Qe(t.query)}' failed`);return void t.onError(c)}c.queries.set(n,s),s.listeners.push(t),t.eo(c.onlineState),s.Xr&&t.no(s.Xr)&&$r(c)}async function qr(e,t){const c=b(e),n=t.query;let r=!1;const s=c.queries.get(n);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return c.queries.delete(n),c.onUnlisten(n)}function Br(e,t){const c=b(e);let n=!1;for(const r of t){const e=r.query,t=c.queries.get(e);if(t){for(const e of t.listeners)e.no(r)&&(n=!0);t.Xr=r}}n&&$r(c)}function Zr(e,t,c){const n=b(e),r=n.queries.get(t);if(r)for(const s of r.listeners)s.onError(c);n.queries.delete(t)}function $r(e){e.Zr.forEach(e=>{e.next()})}class Wr{constructor(e,t,c){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=c||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const c of e.docChanges)3!==c.type&&t.push(c);e=new Pr(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const c="Offline"!==t;return(!this.options.uo||!c)&&(!e.docs.isEmpty()||"Offline"===t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e){this.key=e}}class Gr{constructor(e){this.key=e}}class Xr{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=Yt(),this.mutatedKeys=Yt(),this.po=et(e),this.To=new Dr(this.po)}get Eo(){return this._o}Io(e,t){const c=t?t.Ao:new Nr,n=t?t.To:this.To;let r=t?t.mutatedKeys:this.mutatedKeys,s=n,i=!1;const a=Ue(this.query)&&n.size===this.query.limit?n.last():null,o=qe(this.query)&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{const l=n.get(e),h=Je(this.query,t)?t:null,u=!!l&&this.mutatedKeys.has(l.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let v=!1;l&&h?l.data.isEqual(h.data)?u!==f&&(c.track({type:3,doc:h}),v=!0):this.Ro(l,h)||(c.track({type:2,doc:h}),v=!0,(a&&this.po(h,a)>0||o&&this.po(h,o)<0)&&(i=!0)):!l&&h?(c.track({type:0,doc:h}),v=!0):l&&!h&&(c.track({type:1,doc:l}),v=!0,(a||o)&&(i=!0)),v&&(h?(s=s.add(h),r=f?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),Ue(this.query)||qe(this.query))for(;s.size>this.query.limit;){const e=Ue(this.query)?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),c.track({type:1,doc:e})}return{To:s,Ao:c,Ln:i,mutatedKeys:r}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,c){const n=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const r=e.Ao.Yr();r.sort((e,t)=>function(e,t){const c=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return c(e)-c(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.po(e.doc,t.doc)),this.bo(c);const s=t?this.Po():[],i=0===this.yo.size&&this.current?1:0,a=i!==this.mo;return this.mo=i,0!==r.length||a?{snapshot:new Pr(this.query,e.To,n,r,e.mutatedKeys,0===i,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({To:this.To,Ao:new Nr,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(e=>this._o=this._o.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this._o=this._o.delete(e)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=Yt(),this.To.forEach(e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))});const t=[];return e.forEach(e=>{this.yo.has(e)||t.push(new Gr(e))}),this.yo.forEach(c=>{e.has(c)||t.push(new Kr(c))}),t}So(e){this._o=e.Gn,this.yo=Yt();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return Pr.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class Yr{constructor(e,t,c){this.query=e,this.targetId=t,this.view=c}}class Qr{constructor(e){this.key=e,this.Co=!1}}class Jr{constructor(e,t,c,n,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=c,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Mn(e=>Ye(e),Xe),this.ko=new Map,this.$o=new Set,this.Oo=new Pt(ee.comparator),this.Fo=new Map,this.Mo=new Dn,this.Lo={},this.Bo=new Map,this.Uo=gn.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function es(e,t){const c=bs(e);let n,r;const s=c.xo.get(t);if(s)n=s.targetId,c.sharedClientState.addLocalQueryTarget(n),r=s.view.Do();else{const e=await Tn(c.localStore,Ke(t)),s=c.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await ts(c,t,n,"current"===s),c.isPrimaryClient&&hr(c.remoteStore,e)}return r}async function ts(e,t,c,n){e.Ko=(t,c,n)=>async function(e,t,c,n){let r=t.view.Io(c);r.Ln&&(r=await xn(e.localStore,t.query,!1).then(({documents:e})=>t.view.Io(e,r)));const s=n&&n.targetChanges.get(t.targetId),i=t.view.applyChanges(r,e.isPrimaryClient,s);return vs(e,t.targetId,i.vo),i.snapshot}(e,t,c,n);const r=await xn(e.localStore,t,!0),s=new Xr(t,r.Gn),i=s.Io(r.documents),a=tc.createSynthesizedTargetChangeForCurrentChange(c,n&&"Offline"!==e.onlineState),o=s.applyChanges(i,e.isPrimaryClient,a);vs(e,c,o.vo);const l=new Yr(t,c,s);return e.xo.set(t,l),e.ko.has(c)?e.ko.get(c).push(t):e.ko.set(c,[t]),o.snapshot}async function cs(e,t){const c=b(e),n=c.xo.get(t),r=c.ko.get(n.targetId);if(r.length>1)return c.ko.set(n.targetId,r.filter(e=>!Xe(e,t))),void c.xo.delete(t);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(n.targetId),c.sharedClientState.isActiveQueryTarget(n.targetId)||await In(c.localStore,n.targetId,!1).then(()=>{c.sharedClientState.clearQueryState(n.targetId),ur(c.remoteStore,n.targetId),us(c,n.targetId)}).catch(bn)):(us(c,n.targetId),await In(c.localStore,n.targetId,!0))}async function ns(e,t,c){const n=Ms(e);try{const e=await function(e,t){const c=b(e),n=T.now(),r=t.reduce((e,t)=>e.add(t.key),Yt());let s;return c.persistence.runTransaction("Locally write mutations","readwrite",e=>c.Qn.Pn(e,r).next(r=>{s=r;const i=[];for(const e of t){const t=Ht(e,s.get(e.key));null!=t&&i.push(new At(e.key,t,me(t.value.mapValue),bt.exists(!0)))}return c.In.addMutationBatch(e,n,i,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(n.localStore,t);n.sharedClientState.addPendingMutation(e.batchId),function(e,t,c){let n=e.Lo[e.currentUser.toKey()];n||(n=new Pt(O)),n=n.insert(t,c),e.Lo[e.currentUser.toKey()]=n}(n,e.batchId,c),await ps(n,e.changes),await Vr(n.remoteStore)}catch(e){const t=jr(e,"Failed to persist write");c.reject(t)}}async function rs(e,t){const c=b(e);try{const e=await En(c.localStore,t);t.targetChanges.forEach((e,t)=>{const n=c.Fo.get(t);n&&(g(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.Co=!0:e.modifiedDocuments.size>0?g(n.Co):e.removedDocuments.size>0&&(g(n.Co),n.Co=!1))}),await ps(c,e,t)}catch(e){await bn(e)}}function ss(e,t,c){const n=b(e);if(n.isPrimaryClient&&0===c||!n.isPrimaryClient&&1===c){const e=[];n.xo.forEach((c,n)=>{const r=n.view.eo(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const c=b(e);c.onlineState=t;let n=!1;c.queries.forEach((e,c)=>{for(const r of c.listeners)r.eo(t)&&(n=!0)}),n&&$r(c)}(n.eventManager,t),e.length&&n.No.Er(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function is(e,t,c){const n=b(e);n.sharedClientState.updateQueryState(t,"rejected",c);const r=n.Fo.get(t),s=r&&r.key;if(s){let e=new Pt(ee.comparator);e=e.insert(s,pe.newNoDocument(s,I.min()));const c=Yt().add(s),r=new ec(I.min(),new Map,new Ut(O),e,c);await rs(n,r),n.Oo=n.Oo.remove(s),n.Fo.delete(t),ms(n)}else await In(n.localStore,t,!1).then(()=>us(n,t,c)).catch(bn)}async function as(e,t){const c=b(e),n=t.batch.batchId;try{const e=await An(c.localStore,t);hs(c,n,null),ls(c,n),c.sharedClientState.updateMutationState(n,"acknowledged"),await ps(c,e)}catch(e){await bn(e)}}async function os(e,t,c){const n=b(e);try{const e=await function(e,t){const c=b(e);return c.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return c.In.lookupMutationBatch(e,t).next(t=>(g(null!==t),n=t.keys(),c.In.removeMutationBatch(e,t))).next(()=>c.In.performConsistencyCheck(e)).next(()=>c.Qn.Pn(e,n))})}(n.localStore,t);hs(n,t,c),ls(n,t),n.sharedClientState.updateMutationState(t,"rejected",c),await ps(n,e)}catch(c){await bn(c)}}function ls(e,t){(e.Bo.get(t)||[]).forEach(e=>{e.resolve()}),e.Bo.delete(t)}function hs(e,t,c){const n=b(e);let r=n.Lo[n.currentUser.toKey()];if(r){const e=r.get(t);e&&(c?e.reject(c):e.resolve(),r=r.remove(t)),n.Lo[n.currentUser.toKey()]=r}}function us(e,t,c=null){e.sharedClientState.removeLocalQueryTarget(t);for(const n of e.ko.get(t))e.xo.delete(n),c&&e.No.jo(n,c);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach(t=>{e.Mo.containsKey(t)||fs(e,t)})}function fs(e,t){e.$o.delete(t.path.canonicalString());const c=e.Oo.get(t);null!==c&&(ur(e.remoteStore,c),e.Oo=e.Oo.remove(t),e.Fo.delete(c),ms(e))}function vs(e,t,c){for(const n of c)n instanceof Kr?(e.Mo.addReference(n.key,t),ds(e,n)):n instanceof Gr?(v("SyncEngine","Document no longer in limbo: "+n.key),e.Mo.removeReference(n.key,t),e.Mo.containsKey(n.key)||fs(e,n.key)):z()}function ds(e,t){const c=t.key,n=c.path.canonicalString();e.Oo.get(c)||e.$o.has(n)||(v("SyncEngine","New document in limbo: "+c),e.$o.add(n),ms(e))}function ms(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const c=new ee(P.fromString(t)),n=e.Uo.next();e.Fo.set(n,new Qr(c)),e.Oo=e.Oo.insert(c,n),hr(e.remoteStore,new fn(Ke(Fe(c.path)),n,2,A.T))}}async function ps(e,t,c){const n=b(e),r=[],s=[],i=[];n.xo.isEmpty()||(n.xo.forEach((e,a)=>{i.push(n.Ko(a,t,c).then(e=>{if(e){n.isPrimaryClient&&n.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=Vn.kn(a.targetId,e);s.push(t)}}))}),await Promise.all(i),n.No.Er(r),await async function(e,t){const c=b(e);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>on.forEach(t,t=>on.forEach(t.Nn,n=>c.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>on.forEach(t.xn,n=>c.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(e){if(!ln(e))throw e;v("LocalStore","Failed to update sequence numbers: "+e)}for(const n of t){const e=n.targetId;if(!n.fromCache){const t=c.Un.get(e),n=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(n);c.Un=c.Un.insert(e,r)}}}(n.localStore,s))}async function zs(e,t){const c=b(e);if(!c.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const e=await _n(c.localStore,t);c.currentUser=t,function(e,t){e.Bo.forEach(e=>{e.forEach(e=>{e.reject(new y(M.CANCELLED,t))})}),e.Bo.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ps(c,e.Wn)}}function gs(e,t){const c=b(e),n=c.Fo.get(t);if(n&&n.Co)return Yt().add(n.key);{let e=Yt();const n=c.ko.get(t);if(!n)return e;for(const t of n){const n=c.xo.get(t);e=e.unionWith(n.view.Eo)}return e}}function bs(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rs.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gs.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=is.bind(null,t),t.No.Er=Br.bind(null,t.eventManager),t.No.jo=Zr.bind(null,t.eventManager),t}function Ms(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=as.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=os.bind(null,t),t}class ys{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=er(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return wn(this.persistence,new Hn,e.initialUser,this.N)}Go(e){return new qn(Zn.Ns,this.N)}Wo(e){return new Wn}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ss(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=zs.bind(null,this.syncEngine),await kr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fr}createDatastore(e){const t=er(e.databaseInfo.databaseId),c=(n=e.databaseInfo,new Qn(n));var n;return function(e,t,c){return new sr(e,t,c)}(e.credentials,c,t)}createRemoteStore(e){return t=this.localStore,c=this.datastore,n=e.asyncQueue,r=e=>ss(this.syncEngine,e,0),s=Gn.bt()?new Gn:new Kn,new ar(t,c,n,r,s);var t,c,n,r,s}createSyncEngine(e,t){return function(e,t,c,n,r,s,i){const a=new Jr(e,t,c,n,r,s);return i&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);v("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await lr(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{constructor(e,t,c){this.credentials=e,this.asyncQueue=t,this.databaseInfo=c,this.user=l.UNAUTHENTICATED,this.clientId=E.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{v("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const c=jr(t,"Failed to shutdown persistence");e.reject(c)}}),e.promise}}async function Ls(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const c=await e.getConfiguration();await t.initialize(c);let n=c.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await _n(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ws(e,t){e.asyncQueue.verifyOperationInProgress();const c=await _s(e);v("FirestoreClient","Initializing OnlineComponentProvider");const n=await e.getConfiguration();await t.initialize(c,n),e.setCredentialChangeListener(e=>async function(e,t){const c=b(e);c.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const n=pr(c);c.Kr.add(3),await lr(c),n&&c.Wr.set("Unknown"),await c.remoteSyncer.handleCredentialChange(t),c.Kr.delete(3),await or(c)}(t.remoteStore,e)),e.onlineComponents=t}async function _s(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Ls(e,new ys)),e.offlineComponents}async function As(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await ws(e,new Cs)),e.onlineComponents}function Ss(e){return As(e).then(e=>e.syncEngine)}async function Es(e){const t=await As(e),c=t.eventManager;return c.onListen=es.bind(null,t.syncEngine),c.onUnlisten=cs.bind(null,t.syncEngine),c}function Os(e,t,c={}){const n=new C;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,c,n,r){const s=new Vs({next:c=>{t.enqueueAndForget(()=>qr(e,i)),c.fromCache&&"server"===n.source?r.reject(new y(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(c)},error:e=>r.reject(e)}),i=new Wr(c,s,{includeMetadataChanges:!0,uo:!0});return Ur(e,i)}(await Es(e),e.asyncQueue,t,c,n)),n.promise}class ks{constructor(e,t,c,n,r,s,i,a){this.databaseId=e,this.appId=t,this.persistenceKey=c,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=i,this.useFetchStreams=a}}class Ts{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t,c){if(!c)throw new y(M.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function js(e,t,c,n){if(!0===t&&!0===n)throw new y(M.INVALID_ARGUMENT,`${e} and ${c} cannot be used together.`)}function Ds(e){if(!ee.isDocumentKey(e))throw new y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ns(e){if(ee.isDocumentKey(e))throw new y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ps(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":z()}function Rs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=Ps(e);throw new y(M.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${c}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,js("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fs({}),this._settingsFrozen=!1,e instanceof Ts?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(e.options.projectId)}(e))}get app(){if(!this._app)throw new y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fs(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new H;switch(e.type){case"gapi":const t=e.client;return g(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new _(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new y(M.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Is.get(e);t&&(v("ComponentProvider","Removing Datastore"),Is.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(e,t,c){this.converter=t,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qs(this.firestore,e,this._key)}}class Bs{constructor(e,t,c){this.converter=t,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class Zs extends Bs{constructor(e,t,c){super(e,t,Fe(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qs(this.firestore,null,new ee(e))}withConverter(e){return new Zs(this.firestore,e,this._path)}}function $s(e,t,...c){if(e=Object(i["i"])(e),xs("collection","path",t),e instanceof Us){const n=P.fromString(t,...c);return Ns(n),new Zs(e,null,n)}{if(!(e instanceof qs||e instanceof Zs))throw new y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(P.fromString(t,...c));return Ns(n),new Zs(e.firestore,null,n)}}function Ws(e,t,...c){if(e=Object(i["i"])(e),1===arguments.length&&(t=E.I()),xs("doc","path",t),e instanceof Us){const n=P.fromString(t,...c);return Ds(n),new qs(e,null,new ee(n))}{if(!(e instanceof qs||e instanceof Zs))throw new y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(P.fromString(t,...c));return Ds(n),new qs(e.firestore,e instanceof Zs?e.converter:null,new ee(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new tr(this,"async_queue_retry"),this.Ta=()=>{const e=Jn();e&&v("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=Jn();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=Jn();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const t=new C;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!ln(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const t=this.fa.then(()=>(this.ga=!0,e().catch(e=>{this.ma=e,this.ga=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw d("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.ga=!1,e))));return this.fa=t,t}enqueueAfterDelay(e,t,c){this.Ea(),this.pa.indexOf(e)>-1&&(t=0);const n=xr.createAndSchedule(this,e,t,c,e=>this.Ra(e));return this._a.push(n),n}Ea(){this.ma&&z()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}class Gs extends Us{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Ks,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Qs(this),this._firestoreClient.terminate()}}function Xs(e=Object(n["e"])()){return Object(n["b"])(e,"firestore").getImmediate()}function Ys(e){return e._firestoreClient||Qs(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qs(e){var t;const c=e._freezeSettings(),n=function(e,t,c,n){return new ks(e,t,c,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,c);e._firestoreClient=new Hs(e._credentials,e._queue,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new F(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ei(q.fromBase64String(e))}catch(e){throw new y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ei(q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=/^__.*__$/;class ri{constructor(e,t,c){this.data=e,this.fieldMask=t,this.fieldTransforms=c}toMutation(e,t){return null!==this.fieldMask?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new _t(e,this.data,t,this.fieldTransforms)}}class si{constructor(e,t,c){this.data=e,this.fieldMask=t,this.fieldTransforms=c}toMutation(e,t){return new At(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ii(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ai{constructor(e,t,c,n,r,s){this.settings=e,this.databaseId=t,this.N=c,this.ignoreUndefinedProperties=n,void 0===r&&this.Sa(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new ai(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Ca({path:c,xa:!1});return n.ka(e),n}$a(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Ca({path:c,xa:!1});return n.Sa(),n}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return yi(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(ii(this.Da)&&ni.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class oi{constructor(e,t,c){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=c||er(e)}Ba(e,t,c,n=!1){return new ai({Da:e,methodName:t,La:c,path:F.emptyPath(),xa:!1,Ma:n},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function li(e){const t=e._freezeSettings(),c=er(e._databaseId);return new oi(e._databaseId,!!t.ignoreUndefinedProperties,c)}function hi(e,t,c,n,r,s={}){const i=e.Ba(s.merge||s.mergeFields?2:0,t,c,r);zi("Data must be an object, but it was:",i,n);const a=mi(n,i);let o,l;if(s.merge)o=new U(i.fieldMask),l=i.fieldTransforms;else if(s.mergeFields){const e=[];for(const n of s.mergeFields){const r=gi(t,n,c);if(!i.contains(r))throw new y(M.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ci(e,r)||e.push(r)}o=new U(e),l=i.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,l=i.fieldTransforms;return new ri(new de(a),o,l)}class ui extends ti{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(this._methodName+"() can only appear at the top level of your update data"):e.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ui}}function fi(e,t,c,n){const r=e.Ba(1,t,c);zi("Data must be an object, but it was:",r,n);const s=[],a=de.empty();j(n,(e,n)=>{const o=Mi(t,e,c);n=Object(i["i"])(n);const l=r.$a(o);if(n instanceof ui)s.push(o);else{const e=di(n,l);null!=e&&(s.push(o),a.set(o,e))}});const o=new U(s);return new si(a,o,r.fieldTransforms)}function vi(e,t,c,n,r,s){const a=e.Ba(1,t,c),o=[gi(t,n,c)],l=[r];if(s.length%2!=0)throw new y(M.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let i=0;i<s.length;i+=2)o.push(gi(t,s[i])),l.push(s[i+1]);const h=[],u=de.empty();for(let v=o.length-1;v>=0;--v)if(!Ci(h,o[v])){const e=o[v];let t=l[v];t=Object(i["i"])(t);const c=a.$a(e);if(t instanceof ui)h.push(e);else{const n=di(t,c);null!=n&&(h.push(e),u.set(e,n))}}const f=new U(h);return new si(u,f,a.fieldTransforms)}function di(e,t){if(pi(e=Object(i["i"])(e)))return zi("Unsupported field value:",t,e),mi(e,t);if(e instanceof ti)return function(e,t){if(!ii(t.Da))throw t.Fa(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Fa(e._methodName+"() is not currently supported inside arrays");const c=e._toFieldTransform(t);c&&t.fieldTransforms.push(c)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const c=[];let n=0;for(const r of e){let e=di(r,t.Oa(n));null==e&&(e={nullValue:"NULL_VALUE"}),c.push(e),n++}return{arrayValue:{values:c}}}(e,t)}return function(e,t){if(null===(e=Object(i["i"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return rt(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const c=T.fromDate(e);return{timestampValue:fc(t.N,c)}}if(e instanceof T){const c=new T(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:fc(t.N,c)}}if(e instanceof ci)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ei)return{bytesValue:vc(t.N,e._byteString)};if(e instanceof qs){const c=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(c))throw t.Fa(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:pc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa("Unsupported field value: "+Ps(e))}(e,t)}function mi(e,t){const c={};return D(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):j(e,(e,n)=>{const r=di(n,t.Na(e));null!=r&&(c[e]=r)}),{mapValue:{fields:c}}}function pi(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof T||e instanceof ci||e instanceof ei||e instanceof qs||e instanceof ti)}function zi(e,t,c){if(!pi(c)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(c)){const n=Ps(c);throw"an object"===n?t.Fa(e+" a custom object"):t.Fa(e+" "+n)}}function gi(e,t,c){if((t=Object(i["i"])(t))instanceof Js)return t._internalPath;if("string"==typeof t)return Mi(e,t);throw yi("Field path arguments must be of type string or FieldPath.",e,!1,void 0,c)}const bi=new RegExp("[~\\*/\\[\\]]");function Mi(e,t,c){if(t.search(bi)>=0)throw yi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,c);try{return new Js(...t.split("."))._internalPath}catch(n){throw yi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,c)}}function yi(e,t,c,n,r){const s=n&&!n.isEmpty(),i=void 0!==r;let a=`Function ${t}() called with invalid data`;c&&(a+=" (via `toFirestore()`)"),a+=". ";let o="";return(s||i)&&(o+=" (found",s&&(o+=" in field "+n),i&&(o+=" in document "+r),o+=")"),new y(M.INVALID_ARGUMENT,a+e+o)}function Ci(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,c,n,r){this._firestore=e,this._userDataWriter=t,this._key=c,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hi(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Li("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Hi extends Vi{data(){return super.data()}}function Li(e,t){return"string"==typeof t?Mi(e,t):t instanceof Js?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _i extends Vi{constructor(e,t,c,n,r,s){super(e,t,c,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const c=this._document.data.field(Li("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c,t.serverTimestamps)}}}class Ai extends _i{data(e={}){return super.data(e)}}class Si{constructor(e,t,c,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new wi(n.hasPendingWrites,n.fromCache),this.query=c}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(c=>{e.call(t,new Ai(this._firestore,this._userDataWriter,c.key,c,new wi(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(c=>({type:"added",doc:new Ai(e._firestore,e._userDataWriter,c.doc.key,c.doc,new wi(e._snapshot.mutatedKeys.has(c.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let c=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const n=new Ai(e._firestore,e._userDataWriter,t.doc.key,t.doc,new wi(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=c.indexOf(t.doc.key),c=c.delete(t.doc.key)),1!==t.type&&(c=c.add(t.doc),s=c.indexOf(t.doc.key)),{type:Ei(t.type),doc:n,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ei(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oi(e){if(qe(e)&&0===e.explicitOrderBy.length)throw new y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{convertValue(e,t="none"){switch(te(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(W(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){const c={};return j(e.fields,(e,n)=>{c[e]=this.convertValue(n,t)}),c}convertGeoPoint(e){return new ci($(e.latitude),$(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const c=G(e);return null==c?null:this.convertValue(c,t);case"estimate":return this.convertTimestamp(X(e));default:return null}}convertTimestamp(e){const t=Z(e);return new T(t.seconds,t.nanos)}convertDocumentKey(e,t){const c=P.fromString(e);g(Uc(c));const n=new Ts(c.get(1),c.get(3)),r=new ee(c.popFirst(5));return n.isEqual(t)||d(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e,t,c){let n;return n=e?c&&(c.merge||c.mergeFields)?e.toFirestore(t,c):e.toFirestore(t):t,n}class Ii extends ki{constructor(e){super(),this.firestore=e}convertBytes(e){return new ei(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qs(this.firestore,null,t)}}function xi(e){e=Rs(e,Bs);const t=Rs(e.firestore,Gs),c=Ys(t),n=new Ii(t);return Oi(e._query),Os(c,e._query).then(c=>new Si(t,n,e,c))}function ji(e,t,c,...n){e=Rs(e,qs);const r=Rs(e.firestore,Gs),s=li(r);let a;return a="string"==typeof(t=Object(i["i"])(t))||t instanceof Js?vi(s,"updateDoc",e._key,t,c,n):fi(s,"updateDoc",e._key,t),Pi(r,[a.toMutation(e._key,bt.exists(!0))])}function Di(e){return Pi(Rs(e.firestore,Gs),[new kt(e._key,bt.none())])}function Ni(e,t){const c=Rs(e.firestore,Gs),n=Ws(e),r=Ti(e.converter,t);return Pi(c,[hi(li(e.firestore),"addDoc",n._key,r,null!==e.converter,{}).toMutation(n._key,bt.exists(!1))]).then(()=>n)}function Pi(e,t){return function(e,t){const c=new C;return e.asyncQueue.enqueueAndForget(async()=>ns(await Ss(e),t,c)),c.promise}(Ys(e),t)}var Ri;!function(e){h=e}(n["a"]),Object(n["c"])(new r["a"]("firestore",(e,{options:t})=>{const c=e.getProvider("app").getImmediate(),n=new Gs(c,new L(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),n._setSettings(t),n},"PUBLIC")),Object(n["g"])(o,"3.1.1",Ri),Object(n["g"])(o,"3.1.1","esm2017")}).call(this,c("4362"))},"0b42":function(e,t,c){var n=c("e8b5"),r=c("68ee"),s=c("861d"),i=c("b622"),a=i("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,r(t)&&(t===Array||n(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},"0cfb":function(e,t,c){var n=c("83ab"),r=c("d039"),s=c("cc12");e.exports=!n&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},"107c":function(e,t,c){var n=c("d039"),r=c("da84"),s=r.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,c){"use strict";var n=c("d784"),r=c("44e7"),s=c("825a"),i=c("1d80"),a=c("4840"),o=c("8aa5"),l=c("50c4"),h=c("577e"),u=c("dc4a"),f=c("14c3"),v=c("9263"),d=c("9f7f"),m=c("d039"),p=d.UNSUPPORTED_Y,z=[].push,g=Math.min,b=4294967295,M=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var c="ab".split(e);return 2!==c.length||"a"!==c[0]||"b"!==c[1]}));n("split",(function(e,t,c){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,c){var n=h(i(this)),s=void 0===c?b:c>>>0;if(0===s)return[];if(void 0===e)return[n];if(!r(e))return t.call(n,e,s);var a,o,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=new RegExp(e.source,f+"g");while(a=v.call(m,n)){if(o=m.lastIndex,o>d&&(u.push(n.slice(d,a.index)),a.length>1&&a.index<n.length&&z.apply(u,a.slice(1)),l=a[0].length,d=o,u.length>=s))break;m.lastIndex===a.index&&m.lastIndex++}return d===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(d)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,c){return void 0===e&&0===c?[]:t.call(this,e,c)}:t,[function(t,c){var r=i(this),s=void 0==t?void 0:u(t,e);return s?s.call(t,r,c):n.call(h(r),t,c)},function(e,r){var i=s(this),u=h(e),v=c(n,i,u,r,n!==t);if(v.done)return v.value;var d=a(i,RegExp),m=i.unicode,z=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(p?"g":"y"),M=new d(p?"^(?:"+i.source+")":i,z),y=void 0===r?b:r>>>0;if(0===y)return[];if(0===u.length)return null===f(M,u)?[u]:[];var C=0,V=0,H=[];while(V<u.length){M.lastIndex=p?0:V;var L,w=f(M,p?u.slice(V):u);if(null===w||(L=g(l(M.lastIndex+(p?V:0)),u.length))===C)V=o(u,V,m);else{if(H.push(u.slice(C,V)),H.length===y)return H;for(var _=1;_<=w.length-1;_++)if(H.push(w[_]),H.length===y)return H;V=C=L}}return H.push(u.slice(C)),H}]}),!M,p)},"14c3":function(e,t,c){var n=c("825a"),r=c("1626"),s=c("c6b6"),i=c("9263");e.exports=function(e,t){var c=e.exec;if(r(c)){var a=c.call(e,t);return null!==a&&n(a),a}if("RegExp"===s(e))return i.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,c){var n=c("da84"),r=c("fdbc"),s=c("785a"),i=c("17c2"),a=c("9112"),o=function(e){if(e&&e.forEach!==i)try{a(e,"forEach",i)}catch(t){e.forEach=i}};for(var l in r)r[l]&&o(n[l]&&n[l].prototype);o(s)},1626:function(e,t){e.exports=function(e){return"function"===typeof e}},"17c2":function(e,t,c){"use strict";var n=c("b727").forEach,r=c("a640"),s=r("forEach");e.exports=s?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t){e.exports=function(e,t,c){if(e instanceof t)return e;throw TypeError("Incorrect "+(c?c+" ":"")+"invocation")}},"1a2d":function(e,t,c){var n=c("7b0b"),r={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return r.call(n(e),t)}},"1be4":function(e,t,c){var n=c("d066");e.exports=n("document","documentElement")},"1c7e":function(e,t,c){var n=c("b622"),r=n("iterator"),s=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(o){}e.exports=function(e,t){if(!t&&!s)return!1;var c=!1;try{var n={};n[r]=function(){return{next:function(){return{done:c=!0}}}},e(n)}catch(o){}return c}},"1cdc":function(e,t,c){var n=c("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("d3b7");function n(e,t,c,n,r,s,i){try{var a=e[s](i),o=a.value}catch(l){return void c(l)}a.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,c=arguments;return new Promise((function(r,s){var i=e.apply(t,c);function a(e){n(i,r,s,a,o,"next",e)}function o(e){n(i,r,s,a,o,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,c){var n=c("d039"),r=c("b622"),s=c("2d00"),i=r("species");e.exports=function(e){return s>=51||!n((function(){var t=[],c=t.constructor={};return c[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return V})),c.d(t,"c",(function(){return C})),c.d(t,"d",(function(){return o})),c.d(t,"e",(function(){return h})),c.d(t,"f",(function(){return k})),c.d(t,"g",(function(){return _})),c.d(t,"h",(function(){return O})),c.d(t,"i",(function(){return j})),c.d(t,"j",(function(){return u})),c.d(t,"k",(function(){return d})),c.d(t,"l",(function(){return p})),c.d(t,"m",(function(){return w})),c.d(t,"n",(function(){return z})),c.d(t,"o",(function(){return M})),c.d(t,"p",(function(){return f})),c.d(t,"q",(function(){return m})),c.d(t,"r",(function(){return b})),c.d(t,"s",(function(){return g})),c.d(t,"t",(function(){return S})),c.d(t,"u",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let c=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[c++]=r:r<2048?(t[c++]=r>>6|192,t[c++]=63&r|128):55296===(64512&r)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[c++]=r>>18|240,t[c++]=r>>12&63|128,t[c++]=r>>6&63|128,t[c++]=63&r|128):(t[c++]=r>>12|224,t[c++]=r>>6&63|128,t[c++]=63&r|128)}return t},r=function(e){const t=[];let c=0,n=0;while(c<e.length){const r=e[c++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[c++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[c++],i=e[c++],a=e[c++],o=((7&r)<<18|(63&s)<<12|(63&i)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{const s=e[c++],i=e[c++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&i)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,i=s?e[r+1]:0,a=r+2<e.length,o=a?e[r+2]:0,l=t>>2,h=(3&t)<<4|i>>4;let u=(15&i)<<2|o>>6,f=63&o;a||(f=64,s||(u=64)),n.push(c[l],c[h],c[u],c[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const c=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<e.length;){const t=c[e.charAt(r++)],s=r<e.length,i=s?c[e.charAt(r)]:0;++r;const a=r<e.length,o=a?c[e.charAt(r)]:64;++r;const l=r<e.length,h=l?c[e.charAt(r)]:64;if(++r,null==t||null==i||null==o||null==h)throw Error();const u=t<<2|i>>4;if(n.push(u),64!==o){const e=i<<4&240|o>>2;if(n.push(e),64!==h){const e=o<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){const t=n(e);return s.encodeByteArray(t,!0)},a=function(e){return i(e).replace(/\./g,"")},o=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,c)=>{t?this.reject(t):this.resolve(c),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[a(JSON.stringify(c)),a(JSON.stringify(i)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function v(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function z(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function b(){return!v()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class C extends Error{constructor(e,t,c){super(t),this.code=e,this.customData=c,this.name=y,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,c){this.service=e,this.serviceName=t,this.errors=c}create(e,...t){const c=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?H(r,c):"Error",i=`${this.serviceName}: ${s} (${n}).`,a=new C(n,i,c);return a}}function H(e,t){return e.replace(L,(e,c)=>{const n=t[c];return null!=n?String(n):`<${c}?>`})}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _(e,t){if(e===t)return!0;const c=Object.keys(e),n=Object.keys(t);for(const r of c){if(!n.includes(r))return!1;const c=e[r],s=t[r];if(A(c)&&A(s)){if(!_(c,s))return!1}else if(c!==s)return!1}for(const r of n)if(!c.includes(r))return!1;return!0}function A(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=[];for(const[c,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function E(e){const t={},c=e.replace(/^\?/,"").split("&");return c.forEach(e=>{if(e){const[c,n]=e.split("=");t[decodeURIComponent(c)]=decodeURIComponent(n)}}),t}function O(e){const t=e.indexOf("?");if(!t)return"";const c=e.indexOf("#",t);return e.substring(t,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const c=new T(e,t);return c.subscribe.bind(c)}class T{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,c){let n;if(void 0===e&&void 0===t&&void 0===c)throw new Error("Missing Observer.");n=I(e,["next","error","complete"])?e:{next:e,error:t,complete:c},void 0===n.next&&(n.next=x),void 0===n.error&&(n.error=x),void 0===n.complete&&(n.complete=x);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I(e,t){if("object"!==typeof e||null===e)return!1;for(const c of t)if(c in e&&"function"===typeof e[c])return!0;return!1}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}}).call(this,c("c8ba"))},2266:function(e,t,c){var n=c("825a"),r=c("e95a"),s=c("07fa"),i=c("0366"),a=c("9a1f"),o=c("35a1"),l=c("2a62"),h=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,c){var u,f,v,d,m,p,z,g=c&&c.that,b=!(!c||!c.AS_ENTRIES),M=!(!c||!c.IS_ITERATOR),y=!(!c||!c.INTERRUPTED),C=i(t,g,1+b+y),V=function(e){return u&&l(u,"normal",e),new h(!0,e)},H=function(e){return b?(n(e),y?C(e[0],e[1],V):C(e[0],e[1])):y?C(e,V):C(e)};if(M)u=e;else{if(f=o(e),!f)throw TypeError(String(e)+" is not iterable");if(r(f)){for(v=0,d=s(e);d>v;v++)if(m=H(e[v]),m&&m instanceof h)return m;return new h(!1)}u=a(e,f)}p=u.next;while(!(z=p.call(u)).done){try{m=H(z.value)}catch(L){l(u,"throw",L)}if("object"==typeof m&&m&&m instanceof h)return m}return new h(!1)}},"23cb":function(e,t,c){var n=c("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var c=n(e);return c<0?r(c+t,0):s(c,t)}},"23e7":function(e,t,c){var n=c("da84"),r=c("06cf").f,s=c("9112"),i=c("6eeb"),a=c("ce4e"),o=c("e893"),l=c("94ca");e.exports=function(e,t){var c,h,u,f,v,d,m=e.target,p=e.global,z=e.stat;if(h=p?n:z?n[m]||a(m,{}):(n[m]||{}).prototype,h)for(u in t){if(v=t[u],e.noTargetGet?(d=r(h,u),f=d&&d.value):f=h[u],c=l(p?u:m+(z?".":"#")+u,e.forced),!c&&void 0!==f){if(typeof v===typeof f)continue;o(v,f)}(e.sham||f&&f.sham)&&s(v,"sham",!0),i(h,u,v,e)}}},"241c":function(e,t,c){var n=c("ca84"),r=c("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,s)}},2532:function(e,t,c){"use strict";var n=c("23e7"),r=c("5a34"),s=c("1d80"),i=c("577e"),a=c("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~i(s(this)).indexOf(i(r(e)),arguments.length>1?arguments[1]:void 0)}})},"260b":function(e,t,c){"use strict";var n=c("5606");c.d(t,"a",(function(){return n["f"]}));var r="firebase",s="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(n["g"])(r,s,"app")},2626:function(e,t,c){"use strict";var n=c("d066"),r=c("9bf2"),s=c("b622"),i=c("83ab"),a=s("species");e.exports=function(e){var t=n(e),c=r.f;i&&t&&!t[a]&&c(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,c){var n=c("825a"),r=c("dc4a");e.exports=function(e,t,c){var s,i;n(e);try{if(s=r(e,"return"),!s){if("throw"===t)throw c;return c}s=s.call(e)}catch(a){i=!0,s=a}if("throw"===t)throw c;if(i)throw s;return n(s),c}},"2cf4":function(e,t,c){var n,r,s,i,a=c("da84"),o=c("1626"),l=c("d039"),h=c("0366"),u=c("1be4"),f=c("cc12"),v=c("1cdc"),d=c("605d"),m=a.setImmediate,p=a.clearImmediate,z=a.process,g=a.MessageChannel,b=a.Dispatch,M=0,y={},C="onreadystatechange";try{n=a.location}catch(_){}var V=function(e){if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},H=function(e){return function(){V(e)}},L=function(e){V(e.data)},w=function(e){a.postMessage(String(e),n.protocol+"//"+n.host)};m&&p||(m=function(e){var t=[],c=arguments.length,n=1;while(c>n)t.push(arguments[n++]);return y[++M]=function(){(o(e)?e:Function(e)).apply(void 0,t)},r(M),M},p=function(e){delete y[e]},d?r=function(e){z.nextTick(H(e))}:b&&b.now?r=function(e){b.now(H(e))}:g&&!v?(s=new g,i=s.port2,s.port1.onmessage=L,r=h(i.postMessage,i,1)):a.addEventListener&&o(a.postMessage)&&!a.importScripts&&n&&"file:"!==n.protocol&&!l(w)?(r=w,a.addEventListener("message",L,!1)):r=C in f("script")?function(e){u.appendChild(f("script"))[C]=function(){u.removeChild(this),V(e)}}:function(e){setTimeout(H(e),0)}),e.exports={set:m,clear:p}},"2d00":function(e,t,c){var n,r,s=c("da84"),i=c("342f"),a=s.process,o=s.Deno,l=a&&a.versions||o&&o.version,h=l&&l.v8;h?(n=h.split("."),r=n[0]<4?1:n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(r=n[1]))),e.exports=r&&+r},"342f":function(e,t,c){var n=c("d066");e.exports=n("navigator","userAgent")||""},"35a1":function(e,t,c){var n=c("f5df"),r=c("dc4a"),s=c("3f8c"),i=c("b622"),a=i("iterator");e.exports=function(e){if(void 0!=e)return r(e,a)||r(e,"@@iterator")||s[n(e)]}},"37e8":function(e,t,c){var n=c("83ab"),r=c("9bf2"),s=c("825a"),i=c("df75");e.exports=n?Object.defineProperties:function(e,t){s(e);var c,n=i(t),a=n.length,o=0;while(a>o)r.f(e,c=n[o++],t[c]);return e}},"3bbe":function(e,t,c){var n=c("1626");e.exports=function(e){if("object"===typeof e||n(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},"3f4e":function(e,t,c){"use strict";c.d(t,"setupDevtoolsPlugin",(function(){return i}));var n=c("abc5"),r=c("b774"),s=c("f30a");function i(e,t){const c=Object(n["b"])(),i=Object(n["a"])(),a=n["c"]&&e.enableEarlyProxy;if(!i||!c.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const n=a?new s["a"](e,i):null,r=c.__VUE_DEVTOOLS_PLUGINS__=c.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:e,setupFn:t,proxy:n}),n&&t(n.proxiedTarget)}else i.emit(r["b"],e,t)}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,c){var n=c("da84");e.exports=n},4362:function(e,t,c){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=c("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,c){var n=c("d039"),r=c("c6b6"),s="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?s.call(e,""):Object(e)}:Object},"44d2":function(e,t,c){var n=c("b622"),r=c("7c73"),s=c("9bf2"),i=n("unscopables"),a=Array.prototype;void 0==a[i]&&s.f(a,i,{configurable:!0,value:r(null)}),e.exports=function(e){a[i][e]=!0}},"44de":function(e,t,c){var n=c("da84");e.exports=function(e,t){var c=n.console;c&&c.error&&(1===arguments.length?c.error(e):c.error(e,t))}},"44e7":function(e,t,c){var n=c("861d"),r=c("c6b6"),s=c("b622"),i=s("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},4840:function(e,t,c){var n=c("825a"),r=c("5087"),s=c("b622"),i=s("species");e.exports=function(e,t){var c,s=n(e).constructor;return void 0===s||void 0==(c=n(s)[i])?t:r(c)}},"485a":function(e,t,c){var n=c("1626"),r=c("861d");e.exports=function(e,t){var c,s;if("string"===t&&n(c=e.toString)&&!r(s=c.call(e)))return s;if(n(c=e.valueOf)&&!r(s=c.call(e)))return s;if("string"!==t&&n(c=e.toString)&&!r(s=c.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,c){var n=c("2d00"),r=c("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4d64":function(e,t,c){var n=c("fc6a"),r=c("23cb"),s=c("07fa"),i=function(e){return function(t,c,i){var a,o=n(t),l=s(o),h=r(i,l);if(e&&c!=c){while(l>h)if(a=o[h++],a!=a)return!0}else for(;l>h;h++)if((e||h in o)&&o[h]===c)return e||h||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},"4de4":function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").filter,s=c("1dde"),i=s("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fc1":function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return l})),c.d(t,"c",(function(){return h})),c.d(t,"d",(function(){return u}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},i=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},o=(e,t,...c)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...c)};class l{constructor(e){this.name=e,this._logLevel=i,this._logHandler=o,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function h(e){n.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const c of n){let n=null;t&&t.level&&(n=s[t.level]),c.userLogHandler=null===e?null:(t,c,...s)=>{const i=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");c>=(null!==n&&void 0!==n?n:t.logLevel)&&e({level:r[c].toLowerCase(),message:i,args:s,type:t.name})}}}},5087:function(e,t,c){var n=c("68ee"),r=c("0d51");e.exports=function(e){if(n(e))return e;throw TypeError(r(e)+" is not a constructor")}},"50c4":function(e,t,c){var n=c("5926"),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function r(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?r(Object(c),!0).forEach((function(t){n(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},5606:function(e,t,c){"use strict";c.d(t,"a",(function(){return W})),c.d(t,"b",(function(){return U})),c.d(t,"c",(function(){return F})),c.d(t,"d",(function(){return q})),c.d(t,"e",(function(){return G})),c.d(t,"f",(function(){return K})),c.d(t,"g",(function(){return X}));var n=c("ffa6"),r=c("4fc1"),s=c("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const o="@firebase/app",l="0.7.4",h=new r["b"]("@firebase/app"),u="@firebase/app-compat",f="@firebase/analytics-compat",v="@firebase/analytics",d="@firebase/app-check-compat",m="@firebase/app-check",p="@firebase/auth",z="@firebase/auth-compat",g="@firebase/database",b="@firebase/database-compat",M="@firebase/functions",y="@firebase/functions-compat",C="@firebase/installations",V="@firebase/installations-compat",H="@firebase/messaging",L="@firebase/messaging-compat",w="@firebase/performance",_="@firebase/performance-compat",A="@firebase/remote-config",S="@firebase/remote-config-compat",E="@firebase/storage",O="@firebase/storage-compat",k="@firebase/firestore",T="@firebase/firestore-compat",I="firebase",x="9.1.3",j="[DEFAULT]",D={[o]:"fire-core",[u]:"fire-core-compat",[v]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[d]:"fire-app-check-compat",[p]:"fire-auth",[z]:"fire-auth-compat",[g]:"fire-rtdb",[b]:"fire-rtdb-compat",[M]:"fire-fn",[y]:"fire-fn-compat",[C]:"fire-iid",[V]:"fire-iid-compat",[H]:"fire-fcm",[L]:"fire-fcm-compat",[w]:"fire-perf",[_]:"fire-perf-compat",[A]:"fire-rc",[S]:"fire-rc-compat",[E]:"fire-gcs",[O]:"fire-gcs-compat",[k]:"fire-fst",[T]:"fire-fst-compat","fire-js":"fire-js",[I]:"fire-js-all"},N=new Map,P=new Map;function R(e,t){try{e.container.addComponent(t)}catch(c){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,c)}}function F(e){const t=e.name;if(P.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;P.set(t,e);for(const c of N.values())R(c,e);return!0}function U(e,t){return e.container.getProvider(t)}function q(e,t,c=j){U(e,t).clearInstance(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Z=new s["b"]("app","Firebase",B);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=x;function K(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const c=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),r=c.name;if("string"!==typeof r||!r)throw Z.create("bad-app-name",{appName:String(r)});const i=N.get(r);if(i){if(Object(s["g"])(e,i.options)&&Object(s["g"])(c,i.config))return i;throw Z.create("duplicate-app",{appName:r})}const a=new n["b"](r);for(const n of P.values())a.addComponent(n);const o=new $(e,c,a);return N.set(r,o),o}function G(e=j){const t=N.get(e);if(!t)throw Z.create("no-app",{appName:e});return t}function X(e,t,c){var r;let s=null!==(r=D[e])&&void 0!==r?r:e;c&&(s+="-"+c);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}F(new n["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){F(new n["a"]("platform-logger",e=>new i(e),"PRIVATE")),X(o,l,e),X(o,l,"esm2017"),X("fire-js","")}Y("")},5692:function(e,t,c){var n=c("c430"),r=c("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,c){var n=c("d066"),r=c("241c"),s=c("7418"),i=c("825a");e.exports=n("Reflect","ownKeys")||function(e){var t=r.f(i(e)),c=s.f;return c?t.concat(c(e)):t}},"577e":function(e,t,c){var n=c("f5df");e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},5926:function(e,t){var c=Math.ceil,n=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?n:c)(t)}},"59ed":function(e,t,c){var n=c("1626"),r=c("0d51");e.exports=function(e){if(n(e))return e;throw TypeError(r(e)+" is not a function")}},"5a34":function(e,t,c){var n=c("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,c){var n=c("83ab"),r=c("1a2d"),s=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,a=r(s,"name"),o=a&&"something"===function(){}.name,l=a&&(!n||n&&i(s,"name").configurable);e.exports={EXISTS:a,PROPER:o,CONFIGURABLE:l}},"605d":function(e,t,c){var n=c("c6b6"),r=c("da84");e.exports="process"==n(r.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,c){"use strict";var n=c("83ab"),r=c("d039"),s=c("df75"),i=c("7418"),a=c("d1e7"),o=c("7b0b"),l=c("44ad"),h=Object.assign,u=Object.defineProperty;e.exports=!h||r((function(){if(n&&1!==h({b:1},h(u({},"a",{enumerable:!0,get:function(){u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},c=Symbol(),r="abcdefghijklmnopqrst";return e[c]=7,r.split("").forEach((function(e){t[e]=e})),7!=h({},e)[c]||s(h({},t)).join("")!=r}))?function(e,t){var c=o(e),r=arguments.length,h=1,u=i.f,f=a.f;while(r>h){var v,d=l(arguments[h++]),m=u?s(d).concat(u(d)):s(d),p=m.length,z=0;while(p>z)v=m[z++],n&&!f.call(d,v)||(c[v]=d[v])}return c}:h},6547:function(e,t,c){var n=c("5926"),r=c("577e"),s=c("1d80"),i=function(e){return function(t,c){var i,a,o=r(s(t)),l=n(c),h=o.length;return l<0||l>=h?e?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===h||(a=o.charCodeAt(l+1))<56320||a>57343?e?o.charAt(l):i:e?o.slice(l,l+2):a-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(e,t,c){var n=c("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"68ee":function(e,t,c){var n=c("d039"),r=c("1626"),s=c("f5df"),i=c("d066"),a=c("8925"),o=[],l=i("Reflect","construct"),h=/^\s*(?:class|function)\b/,u=h.exec,f=!h.exec((function(){})),v=function(e){if(!r(e))return!1;try{return l(Object,o,e),!0}catch(t){return!1}},d=function(e){if(!r(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!u.call(h,a(e))};e.exports=!l||n((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?d:v},"69f3":function(e,t,c){var n,r,s,i=c("7f9a"),a=c("da84"),o=c("861d"),l=c("9112"),h=c("1a2d"),u=c("c6cd"),f=c("f772"),v=c("d012"),d="Object already initialized",m=a.WeakMap,p=function(e){return s(e)?r(e):n(e,{})},z=function(e){return function(t){var c;if(!o(t)||(c=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return c}};if(i||u.state){var g=u.state||(u.state=new m),b=g.get,M=g.has,y=g.set;n=function(e,t){if(M.call(g,e))throw new TypeError(d);return t.facade=e,y.call(g,e,t),t},r=function(e){return b.call(g,e)||{}},s=function(e){return M.call(g,e)}}else{var C=f("state");v[C]=!0,n=function(e,t){if(h(e,C))throw new TypeError(d);return t.facade=e,l(e,C,t),t},r=function(e){return h(e,C)?e[C]:{}},s=function(e){return h(e,C)}}e.exports={set:n,get:r,has:s,enforce:p,getterFor:z}},"6a7c":function(e,t,c){"use strict";c.d(t,"a",(function(){return sn})),c.d(t,"b",(function(){return at})),c.d(t,"c",(function(){return it})),c.d(t,"d",(function(){return ot}));var n=c("1fd5"),r=c("5606"),s=c("9ab4"),i=c("4fc1"),a=c("ffa6");function o(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=o,h=new n["b"]("auth","Firebase",o()),u=new i["b"]("@firebase/auth");function f(e,...t){u.logLevel<=i["a"].ERROR&&u.error(`Auth (${r["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw p(e,...t)}function d(e,...t){return p(e,...t)}function m(e,t,c){const r=Object.assign(Object.assign({},l()),{[t]:c}),s=new n["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function p(e,...t){if("string"!==typeof e){const c=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(c,...n)}return h.create(e,...t)}function z(e,t,...c){if(!e)throw p(t,...c)}function g(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||g(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function y(e){b(e instanceof Function,"Expected a class definition");let t=M.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,M.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const c=Object(r["b"])(e,"auth");if(c.isInitialized()){const e=c.getImmediate(),r=c.getOptions();if(Object(n["g"])(r,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const s=c.initialize({options:t});return s}function V(e,t){const c=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(c)?c:[c]).map(y);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function L(){return"http:"===w()||"https:"===w()}function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(L()||Object(n["k"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(n["p"])()||Object(n["q"])()}get(){return _()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){b(e.emulator,"Emulator should always be set here");const{url:c}=e.emulator;return t?`${c}${t.startsWith("/")?t.slice(1):t}`:c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,c){this.fetchImpl=e,t&&(this.headersImpl=t),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},T=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,c,r,s={}){return j(e,s,()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const a=Object(n["t"])(Object.assign({key:e.config.apiKey},i)).slice(1),o=new(O.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),O.fetch()(N(e,e.config.apiHost,c,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},s))})}async function j(e,t,c){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},k),t);try{const t=new P(e),n=await Promise.race([c(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw R(e,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const t=n.ok?s.errorMessage:s.error.message,[c,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw R(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===c)throw R(e,"email-already-in-use",s);const a=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw m(e,a,i);v(e,a)}}catch(s){if(s instanceof n["c"])throw s;v(e,"network-request-failed")}}async function D(e,t,c,n,r={}){const s=await x(e,t,c,n,r);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{serverResponse:s}),s}function N(e,t,c,n){const r=`${t}${c}?${n}`;return e.config.emulator?E(e.config,r):`${e.config.apiScheme}://${r}`}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(d(this.auth,"timeout")),T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function R(e,t,c){const n={appName:e.name};c.email&&(n.email=c.email),c.phoneNumber&&(n.phoneNumber=c.phoneNumber);const r=d(e,t,n);return r.customData._tokenResponse=c,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const c=Object(n["i"])(e),r=await c.getIdToken(t),s=$(r);z(s&&s.exp&&s.auth_time&&s.iat,c.auth,"internal-error");const i="object"===typeof s.firebase?s.firebase:void 0,a=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:s,token:r,authTime:q(Z(s.auth_time)),issuedAtTime:q(Z(s.iat)),expirationTime:q(Z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function Z(e){return 1e3*Number(e)}function $(e){const[t,c,r]=e.split(".");if(void 0===t||void 0===c||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(n["d"])(c);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s),null}}function W(e){const t=$(e);return z(t,"internal-error"),z("undefined"!==typeof t.exp,"internal-error"),z("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,c=!1){if(c)return t;try{return await t}catch(r){throw r instanceof n["c"]&&G(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,c=e-Date.now()-3e5;return Math.max(0,c)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const c=e.auth,n=await e.getIdToken(),r=await K(e,U(c,{idToken:n}));z(null===r||void 0===r?void 0:r.users.length,c,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,i),o=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!o&&l,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,u)}async function J(e){const t=Object(n["i"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const c=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...c,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,c=Object(s["d"])(e,["providerId"]);return{providerId:t,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const c=await j(e,{},()=>{const c=Object(n["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=N(e,r,"/v1/token","key="+s);return O.fetch()(i,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z("undefined"!==typeof e.idToken,"internal-error"),z("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:c,refreshToken:n,expiresIn:r}=await ce(e,t);this.updateTokensAndExpiration(c,n,Number(r))}updateTokensAndExpiration(e,t,c){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(e,t){const{refreshToken:c,accessToken:n,expirationTime:r}=t,s=new ne;return c&&(z("string"===typeof c,"internal-error",{appName:e}),s.refreshToken=c),n&&(z("string"===typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(z("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){z("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:c,stsTokenManager:n}=e,r=Object(s["d"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=c,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return J(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,F(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var c,n,r,s,i,a,o,l;const h=null!==(c=t.displayName)&&void 0!==c?c:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,v=null!==(s=t.photoURL)&&void 0!==s?s:void 0,d=null!==(i=t.tenantId)&&void 0!==i?i:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,p=null!==(o=t.createdAt)&&void 0!==o?o:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:M,isAnonymous:y,providerData:C,stsTokenManager:V}=t;z(b&&V,e,"internal-error");const H=ne.fromJSON(this.name,V);z("string"===typeof b,e,"internal-error"),re(h,e.name),re(u,e.name),z("boolean"===typeof M,e,"internal-error"),z("boolean"===typeof y,e,"internal-error"),re(f,e.name),re(v,e.name),re(d,e.name),re(m,e.name),re(p,e.name),re(g,e.name);const L=new se({uid:b,auth:e,email:u,emailVerified:M,displayName:h,isAnonymous:y,photoURL:v,phoneNumber:f,tenantId:d,stsTokenManager:H,createdAt:p,lastLoginAt:g});return C&&Array.isArray(C)&&(L.providerData=C.map(e=>Object.assign({},e))),m&&(L._redirectEventId=m),L}static async _fromIdTokenResponse(e,t,c=!1){const n=new ne;n.updateFromServerResponse(t);const r=new se({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:c});return await Q(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const ae=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t,c){return`firebase:${e}:${t}:${c}`}class le{constructor(e,t,c){this.persistence=e,this.auth=t,this.userKey=c;const{config:n,name:r}=this.auth;this.fullUserKey=oe(this.userKey,n.apiKey,r),this.fullPersistenceKey=oe("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,c="authUser"){if(!t.length)return new le(y(ae),e,c);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=n[0]||y(ae);const s=oe(c,e.config.apiKey,e.name);let i=null;for(const l of t)try{const t=await l._get(s);if(t){const c=se._fromJSON(e,t);l!==r&&(i=c),r=l;break}}catch(o){}const a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],i&&await r._set(s,i.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(o){}})),new le(r,e,c)):new le(r,e,c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pe(t))return"Blackberry";if(ze(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=e.match(t);if(2===(null===c||void 0===c?void 0:c.length))return c[1]}return"Other"}function ue(e=Object(n["j"])()){return/firefox\//i.test(e)}function fe(e=Object(n["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=Object(n["j"])()){return/crios\//i.test(e)}function de(e=Object(n["j"])()){return/iemobile/i.test(e)}function me(e=Object(n["j"])()){return/android/i.test(e)}function pe(e=Object(n["j"])()){return/blackberry/i.test(e)}function ze(e=Object(n["j"])()){return/webos/i.test(e)}function ge(e=Object(n["j"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(n["j"])()){var t;return ge(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Me(){return Object(n["n"])()&&10===document.documentMode}function ye(e=Object(n["j"])()){return ge(e)||me(e)||ze(e)||pe(e)||/windows phone/i.test(e)||de(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,t=[]){let c;switch(e){case"Browser":c=he(Object(n["j"])());break;case"Worker":c=`${he(Object(n["j"])())}-${e}`;break;default:c=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${c}/JsCore/${r["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new we(this),this.idTokenSubscription=new we(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=y(t)),this._initializationPromise=this.queue(async()=>{var c;this._deleted||(this.persistenceManager=await le.create(this,e),this._deleted||((null===(c=this._popupRedirectResolver)||void 0===c?void 0:c._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let c=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===c||void 0===c?void 0:c._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(c=s.user)}return c?c._redirectEventId?(z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)):this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(c){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(n["i"])(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(y(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,c){return this.registerStateListener(this.authStateSubscription,e,t,c)}onIdTokenChanged(e,t,c){return this.registerStateListener(this.idTokenSubscription,e,t,c)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const c=await this.getOrInitRedirectPersistenceManager(t);return null===e?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&y(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,c;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,c,n){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return z(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,c,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ve(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Le(e){return Object(n["i"])(e)}class we{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(n["f"])(e=>this.observer=e)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return g("not implemented")}_getIdTokenResponse(e){return g("not implemented")}_linkToIdToken(e,t){return g("not implemented")}_getReauthenticationResolver(e){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}async function Oe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends _e{constructor(e,t,c,n=null){super("password",c),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ke(e,t,"password")}static _fromEmailAndCode(e,t,c=null){return new ke(e,t,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ee(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oe(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="http://localhost";class xe extends _e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:c,signInMethod:n}=t,r=Object(s["d"])(t,["providerId","signInMethod"]);if(!c||!n)return null;const i=new xe(c,n);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Te(e,t)}_linkToIdToken(e,t){const c=this.buildRequest();return c.idToken=t,Te(e,c)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Te(e,t)}buildRequest(){const e={requestUri:Ie,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(n["t"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",I(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t))}async function Ne(e,t){const c=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t));if(c.temporaryProof)throw R(e,"account-exists-with-different-credential",c);return c}const Pe={["USER_NOT_FOUND"]:"user-not-found"};async function Re(e,t){const c=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,c),Pe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends _e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ne(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Re(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:c,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:c,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:r}=e;return c||t||n||r?new Fe({verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qe(e){const t=Object(n["u"])(Object(n["h"])(e))["link"],c=t?Object(n["u"])(Object(n["h"])(t))["deep_link_id"]:null,r=Object(n["u"])(Object(n["h"])(e))["deep_link_id"],s=r?Object(n["u"])(Object(n["h"])(r))["link"]:null;return s||r||c||t||e}class Be{constructor(e){var t,c,r,s,i,a;const o=Object(n["u"])(Object(n["h"])(e)),l=null!==(t=o["apiKey"])&&void 0!==t?t:null,h=null!==(c=o["oobCode"])&&void 0!==c?c:null,u=Ue(null!==(r=o["mode"])&&void 0!==r?r:null);z(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(s=o["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(i=o["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(a=o["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=qe(e);try{return new Be(t)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,t){return ke._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const c=Be.parseLink(t);return z(c,"argument-error"),ke._fromEmailAndCode(e,c.code,c.tenantId)}}Ze.PROVIDER_ID="password",Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends $e{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends We{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xe._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:c}=e;if(!t&&!c)return null;try{return Ge.credential(t,c)}catch(n){return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com",Ge.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends We{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends We{constructor(){super("twitter.com")}static credential(e,t){return xe._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:c}=e;if(!t||!c)return null;try{return Ye.credential(t,c)}catch(n){return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,c,n=!1){const r=await se._fromIdTokenResponse(e,c,n),s=Je(c),i=new Qe({user:r,providerId:s,_tokenResponse:c,operationType:t});return i}static async _forOperation(e,t,c){await e._updateTokensIfNecessary(c,!0);const n=Je(c);return new Qe({user:e,providerId:n,_tokenResponse:c,operationType:t})}}function Je(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends n["c"]{constructor(e,t,c,n){var r;super(t.code,t.message),this.operationType=c,this.user=n,this.name="FirebaseError",Object.setPrototypeOf(this,et.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(r=e.tenantId)&&void 0!==r?r:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,c,n){return new et(e,t,c,n)}}function tt(e,t,c,n){const r="reauthenticate"===t?c._getReauthenticationResolver(e):c._getIdTokenResponse(e);return r.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw et._fromErrorAndOperation(e,c,t,n);throw c})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,c=!1){const n=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),c);return Qe._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t,c=!1){const{auth:n}=e,r="reauthenticate";try{const s=await K(e,tt(n,r,t,e),c);z(s.idToken,n,"internal-error");const i=$(s.idToken);z(i,n,"internal-error");const{sub:a}=i;return z(e.uid===a,n,"user-mismatch"),Qe._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(n,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,c=!1){const n="signIn",r=await tt(e,n,t),s=await Qe._fromIdTokenResponse(e,n,r);return c||await e._updateCurrentUser(s.user),s}async function st(e,t){return rt(Le(e),t)}function it(e,t,c){return st(Object(n["i"])(e),Ze.credential(t,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t,c,r){return Object(n["i"])(e).onAuthStateChanged(t,c,r)}function ot(e){return Object(n["i"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,t))}function ht(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",I(e,t))}new WeakMap;const ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){const e=Object(n["j"])();return fe(e)||ge(e)}const dt=1e3,mt=10;class pt extends ft{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&Ce(),this.fallbackToPolling=ye(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const c=this.storage.getItem(t),n=this.localCache[t];c!==n&&e(t,n,c)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,c)=>{this.notifyListeners(e,c)});const c=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(c);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(c);(t||this.localCache[c]!==e)&&this.notifyListeners(c,e)},r=this.storage.getItem(c);Me()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,mt):n()}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:c}),!0)})},dt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pt.type="LOCAL";const zt=pt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ft{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gt.type="SESSION";const bt=gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const c=new yt(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:c,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:c,eventType:n});const i=Array.from(s).map(async e=>e(t.origin,r)),a=await Mt(i);t.ports[0].postMessage({status:"done",eventId:c,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e="",t=10){let c="";for(let n=0;n<t;n++)c+=Math.floor(10*Math.random());return e+c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.receivers=[];class Vt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,c=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((i,a)=>{const o=Ct("",20);n.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},c);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===o)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:o,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function Lt(e){Ht().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return"undefined"!==typeof Ht()["WorkerGlobalScope"]&&"function"===typeof Ht()["importScripts"]}async function _t(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function St(){return wt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="firebaseLocalStorageDb",Ot=1,kt="firebaseLocalStorage",Tt="fbase_key";class It{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xt(e,t){return e.transaction([kt],t?"readwrite":"readonly").objectStore(kt)}function jt(){const e=indexedDB.deleteDatabase(Et);return new It(e).toPromise()}function Dt(){const e=indexedDB.open(Et,Ot);return new Promise((t,c)=>{e.addEventListener("error",()=>{c(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(kt,{keyPath:Tt})}catch(n){c(n)}}),e.addEventListener("success",async()=>{const c=e.result;c.objectStoreNames.contains(kt)?t(c):(c.close(),await jt(),t(await Dt()))})})}async function Nt(e,t,c){const n=xt(e,!0).put({[Tt]:t,value:c});return new It(n).toPromise()}async function Pt(e,t){const c=xt(e,!1).get(t),n=await new It(c).toPromise();return void 0===n?null:n.value}function Rt(e,t){const c=xt(e,!0).delete(t);return new It(c).toPromise()}const Ft=800,Ut=3;class qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Dt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(c){if(t++>Ut)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yt._getInstance(St()),this.receiver._subscribe("keyChanged",async(e,t)=>{const c=await this._poll();return{keyProcessed:c.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _t(),!this.activeServiceWorker)return;this.sender=new Vt(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&(null===(e=c[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=c[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await Nt(e,ut,"1"),await Rt(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(c=>Nt(c,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Pt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=xt(e,!1).getAll();return new It(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],c=new Set;for(const{fbase_key:n,value:r}of e)c.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!c.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qt.type="LOCAL";const Bt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",I(e,t))}function $t(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Kt(e){return new Promise((t,c)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=d("internal-error");t.customData=e,c(t)},n.type="text/javascript",n.charset="UTF-8",Wt().appendChild(n)})}function Gt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gt("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function Yt(e,t,c){var n;const r=await c.verify();try{let s;if(z("string"===typeof r,e,"argument-error"),z(c.type===Xt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){z("enroll"===t.type,e,"internal-error");const c=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return c.phoneSessionInfo.sessionInfo}{z("signin"===t.type,e,"internal-error");const c=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;z(c,e,"missing-multi-factor-info");const i=await Zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:r}});return i.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await je(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{c._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Yt(this.auth,e,Object(n["i"])(t))}static credential(e,t){return Fe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qt.credentialFromTaggedObject(t)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:c}=e;return t&&c?Fe._fromTokenResponse(t,c):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e,t){return t?y(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.PROVIDER_ID="phone",Qt.PHONE_SIGN_IN_METHOD="phone";class ec extends _e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Te(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Te(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Te(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tc(e){return rt(e.auth,new ec(e),e.bypassAuthState)}function cc(e){const{auth:t,user:c}=e;return z(c,t,"internal-error"),nt(c,new ec(e),e.bypassAuthState)}async function nc(e){const{auth:t,user:c}=e;return z(c,t,"internal-error"),ct(c,new ec(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,c,n,r=!1){this.auth=e,this.resolver=c,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:c,postBody:n,tenantId:r,error:s,type:i}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:c,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(a))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tc;case"linkViaPopup":case"linkViaRedirect":return nc;case"reauthViaPopup":case"reauthViaRedirect":return cc;default:v(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new S(2e3,1e4);class ic extends rc{constructor(e,t,c,n,r){super(e,t,n,r),this.provider=c,this.authWindow=null,this.pollId=null,ic.currentPopupAction&&ic.currentPopupAction.cancel(),ic.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Ct();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(d(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ic.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,c;(null===(c=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===c?void 0:c.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,sc.get())};e()}}ic.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ac="pendingRedirect",oc=new Map;class lc extends rc{constructor(e,t,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,c),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const t=await hc(this.resolver,this.auth),c=t?await super.execute():null;e=()=>Promise.resolve(c)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function hc(e,t){const c=fc(t),n="true"===await uc(e)._get(c);return await uc(e)._remove(c),n}function uc(e){return y(e._redirectPersistence)}function fc(e){return oe(ac,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e,t,c=!1){const n=Le(e),r=Jt(n,t),s=new lc(n,r,c),i=await s.execute();return i&&!c&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dc=6e5;class mc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(e,c)&&(t=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var c;if(e.error&&!zc(e)){const n=(null===(c=e.error.code)||void 0===c?void 0:c.split("auth/")[1])||"internal-error";t.onError(d(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const c=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dc&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(e))}saveEventToCache(e){this.cachedEventUids.add(pc(e)),this.lastProcessedEventTime=Date.now()}}function pc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function zc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function gc(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yc=/^https?/;async function Cc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bc(e);for(const n of t)try{if(Vc(n))return}catch(c){}v(e,"unauthorized-domain")}function Vc(e){const t=H(),{protocol:c,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===c&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===c&&r.hostname===n}if(!yc.test(c))return!1;if(Mc.test(e))return n===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new S(3e4,6e4);function Lc(){const e=Ht().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let c=0;c<e.CP.length;c++)e.CP[c]=null}function wc(e){return new Promise((t,c)=>{var n,r,s;function i(){Lc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Lc(),c(d(e,"network-request-failed"))},timeout:Hc.get()})}if(null===(r=null===(n=Ht().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ht().gapi)||void 0===s?void 0:s.load)){const t=Gt("iframefcb");return Ht()[t]=()=>{gapi.load?i():c(d(e,"network-request-failed"))},Kt("https://apis.google.com/js/api.js?onload="+t)}i()}}).catch(e=>{throw _c=null,e})}let _c=null;function Ac(e){return _c=_c||wc(e),_c}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new S(5e3,15e3),Ec="__/auth/iframe",Oc="emulator/auth/iframe",kc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Tc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ic(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const c=t.emulator?E(t,Oc):`https://${e.config.authDomain}/${Ec}`,s={apiKey:t.apiKey,appName:e.name,v:r["a"]},i=Tc.get(e.config.apiHost);i&&(s.eid=i);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${c}?${Object(n["t"])(s).slice(1)}`}async function xc(e){const t=await Ac(e),c=Ht().gapi;return z(c,e,"internal-error"),t.open({where:document.body,url:Ic(e),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kc,dontclear:!0},t=>new Promise(async(c,n)=>{await t.restyle({setHideOnLeave:!1});const r=d(e,"network-request-failed"),s=Ht().setTimeout(()=>{n(r)},Sc.get());function i(){Ht().clearTimeout(s),c(t)}t.ping(i).then(i,()=>{n(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dc=500,Nc=600,Pc="_blank",Rc="http://localhost";class Fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Uc(e,t,c,r=Dc,s=Nc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},jc),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Object(n["j"])().toLowerCase();c&&(o=ve(h)?Pc:c),ue(h)&&(t=t||Rc,l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,c])=>`${e}${t}=${c},`,"");if(be(h)&&"_self"!==o)return qc(t||"",o),new Fc(null);const f=window.open(t||"",o,u);z(f,e,"popup-blocked");try{f.focus()}catch(v){}return new Fc(f)}function qc(e,t){const c=document.createElement("a");c.href=e,c.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__/auth/handler",Zc="emulator/auth/handler";function $c(e,t,c,s,i,a){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:c,redirectUrl:s,v:r["a"],eventId:i};if(t instanceof $e){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Object(n["m"])(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof We){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];return`${Wc(e)}?${Object(n["t"])(l).slice(1)}`}function Wc({config:e}){return e.emulator?E(e,Zc):`https://${e.authDomain}/${Bc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class Gc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bt,this._completeRedirectFn=vc}async _openPopup(e,t,c,n){var r;b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=$c(e,t,c,H(),n);return Uc(e,s,Ct())}async _openRedirect(e,t,c,n){return await this._originValidation(e),Lt($c(e,t,c,H(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:c}=this.eventManagers[t];return e?Promise.resolve(e):(b(c,"If manager is not set, promise should be"),c)}const c=this.initAndGetManager(e);return this.eventManagers[t]={promise:c},c}async initAndGetManager(e){const t=await xc(e),c=new mc(e);return t.register("authEvent",t=>{z(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=c.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=t,c}_isIframeWebStorageSupported(e,t){const c=this.iframes[e._key()];c.send(Kc,{type:Kc},c=>{var n;const r=null===(n=null===c||void 0===c?void 0:c[0])||void 0===n?void 0:n[Kc];void 0!==r&&t(!!r),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ye()||fe()||ge()}}const Xc=Gc;class Yc{constructor(e){this.factorId=e}_process(e,t,c){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,c);case"signin":return this._finalizeSignIn(e,t.credential);default:return g("unexpected MultiFactorSessionType")}}}class Qc extends Yc{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qc(e)}_finalizeEnroll(e,t,c){return ht(e,{idToken:t,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return $t(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Jc{constructor(){}static assertion(e){return Qc._fromCredential(e)}}Jc.FACTOR_ID="phone";var en="@firebase/auth",tn="0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var c;e((null===(c=t)||void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rn(e){Object(r["c"])(new a["a"]("auth",(t,{options:c})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=n.options;return(t=>{z(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),z(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ve(e)},i=new He(t,n);return V(i,c),i})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,c)=>{const n=e.getProvider("auth-internal");n.initialize()})),Object(r["c"])(new a["a"]("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new cn(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["g"])(en,tn,nn(e)),Object(r["g"])(en,tn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e=Object(r["e"])()){const t=Object(r["b"])(e,"auth");return t.isInitialized()?t.getImmediate():C(e,{popupRedirectResolver:Xc,persistence:[Bt,zt,bt]})}rn("Browser")},"6b0d":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{for(const[c,n]of t)e[c]=n;return e}},"6c02":function(e,t,c){"use strict";c.d(t,"a",(function(){return et})),c.d(t,"b",(function(){return Z}));var n=c("7a23");c("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>r?Symbol(e):"_vr_"+e,i=s("rvlm"),a=s("rvd"),o=s("r"),l=s("rl"),h=s("rvl"),u="undefined"!==typeof window;function f(e){return e.__esModule||r&&"Module"===e[Symbol.toStringTag]}const v=Object.assign;function d(e,t){const c={};for(const n in t){const r=t[n];c[n]=Array.isArray(r)?r.map(e):e(r)}return c}const m=()=>{};const p=/\/$/,z=e=>e.replace(p,"");function g(e,t,c="/"){let n,r={},s="",i="";const a=t.indexOf("?"),o=t.indexOf("#",a>-1?a:0);return a>-1&&(n=t.slice(0,a),s=t.slice(a+1,o>-1?o:t.length),r=e(s)),o>-1&&(n=n||t.slice(0,o),i=t.slice(o,t.length)),n=w(null!=n?n:t,c),{fullPath:n+(s&&"?")+s+i,path:n,query:r,hash:i}}function b(e,t){const c=t.query?e(t.query):"";return t.path+(c&&"?")+c+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function y(e,t,c){const n=t.matched.length-1,r=c.matched.length-1;return n>-1&&n===r&&C(t.matched[n],c.matched[r])&&V(t.params,c.params)&&e(t.query)===e(c.query)&&t.hash===c.hash}function C(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function V(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const c in e)if(!H(e[c],t[c]))return!1;return!0}function H(e,t){return Array.isArray(e)?L(e,t):Array.isArray(t)?L(t,e):e===t}function L(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,c)=>e===t[c]):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const c=t.split("/"),n=e.split("/");let r,s,i=c.length-1;for(r=0;r<n.length;r++)if(s=n[r],1!==i&&"."!==s){if(".."!==s)break;i--}return c.slice(0,i).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var _,A;(function(e){e["pop"]="pop",e["push"]="push"})(_||(_={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function S(e){if(!e)if(u){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),z(e)}const E=/^[^#]+#/;function O(e,t){return e.replace(E,"#")+t}function k(e,t){const c=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-c.left-(t.left||0),top:n.top-c.top-(t.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function I(e){let t;if("el"in e){const c=e.el,n="string"===typeof c&&c.startsWith("#");0;const r="string"===typeof c?n?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!r)return;t=k(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function x(e,t){const c=history.state?history.state.position-t:-1;return c+e}const j=new Map;function D(e,t){j.set(e,t)}function N(e){const t=j.get(e);return j.delete(e),t}let P=()=>location.protocol+"//"+location.host;function R(e,t){const{pathname:c,search:n,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,c=r.slice(t);return"/"!==c[0]&&(c="/"+c),M(c,"")}const i=M(c,e);return i+n+r}function F(e,t,c,n){let r=[],s=[],i=null;const a=({state:s})=>{const a=R(e,location),o=c.value,l=t.value;let h=0;if(s){if(c.value=a,t.value=s,i&&i===o)return void(i=null);h=l?s.position-l.position:0}else n(a);r.forEach(e=>{e(c.value,o,{delta:h,type:_.pop,direction:h?h>0?A.forward:A.back:A.unknown})})};function o(){i=c.value}function l(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(v({},e.state,{scroll:T()}),"")}function u(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h),{pauseListeners:o,listen:l,destroy:u}}function U(e,t,c,n=!1,r=!1){return{back:e,current:t,forward:c,replaced:n,position:window.history.length,scroll:r?T():null}}function q(e){const{history:t,location:c}=window,n={value:R(e,c)},r={value:t.state};function s(n,s,i){const a=e.indexOf("#"),o=a>-1?(c.host&&document.querySelector("base")?e:e.slice(a))+n:P()+e+n;try{t[i?"replaceState":"pushState"](s,"",o),r.value=s}catch(l){console.error(l),c[i?"replace":"assign"](o)}}function i(e,c){const i=v({},t.state,U(r.value.back,e,r.value.forward,!0),c,{position:r.value.position});s(e,i,!0),n.value=e}function a(e,c){const i=v({},r.value,t.state,{forward:e,scroll:T()});s(i.current,i,!0);const a=v({},U(n.value,e,null),{position:i.position+1},c);s(e,a,!1),n.value=e}return r.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:r,push:a,replace:i}}function B(e){e=S(e);const t=q(e),c=F(e,t.state,t.location,t.replace);function n(e,t=!0){t||c.pauseListeners(),history.go(e)}const r=v({location:"",base:e,go:n,createHref:O.bind(null,e)},t,c);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Z(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),B(e)}function $(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=s("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function Y(e,t){return v(new Error,{type:e,[G]:!0},t)}function Q(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const J="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ce(e,t){const c=v({},ee,t),n=[];let r=c.start?"^":"";const s=[];for(const h of e){const e=h.length?[]:[90];c.strict&&!h.length&&(r+="/");for(let t=0;t<h.length;t++){const n=h[t];let i=40+(c.sensitive?.25:0);if(0===n.type)t||(r+="/"),r+=n.value.replace(te,"\\$&"),i+=40;else if(1===n.type){const{value:e,repeatable:c,optional:a,regexp:o}=n;s.push({name:e,repeatable:c,optional:a});const u=o||J;if(u!==J){i+=10;try{new RegExp(`(${u})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+l.message)}}let f=c?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(f=a&&h.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),r+=f,i+=20,a&&(i+=-8),c&&(i+=-20),".*"===u&&(i+=-50)}e.push(i)}n.push(e)}if(c.strict&&c.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}c.strict||(r+="/?"),c.end?r+="$":c.strict&&(r+="(?:/|$)");const i=new RegExp(r,c.sensitive?"":"i");function a(e){const t=e.match(i),c={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",r=s[n-1];c[r.name]=e&&r.repeatable?e.split("/"):e}return c}function o(t){let c="",n=!1;for(const r of e){n&&c.endsWith("/")||(c+="/"),n=!1;for(const e of r)if(0===e.type)c+=e.value;else if(1===e.type){const{value:s,repeatable:i,optional:a}=e,o=s in t?t[s]:"";if(Array.isArray(o)&&!i)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(o)?o.join("/"):o;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(c.endsWith("/")?c=c.slice(0,-1):n=!0)}c+=l}}return c}return{re:i,score:n,keys:s,parse:a,stringify:o}}function ne(e,t){let c=0;while(c<e.length&&c<t.length){const n=t[c]-e[c];if(n)return n;c++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let c=0;const n=e.score,r=t.score;while(c<n.length&&c<r.length){const e=ne(n[c],r[c]);if(e)return e;c++}return r.length-n.length}const se={type:0,value:""},ie=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${c})/"${l}": ${e}`)}let c=0,n=c;const r=[];let s;function i(){s&&r.push(s),s=[]}let a,o=0,l="",h="";function u(){l&&(0===c?s.push({type:0,value:l}):1===c||2===c||3===c?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:h,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}while(o<e.length)if(a=e[o++],"\\"!==a||2===c)switch(c){case 0:"/"===a?(l&&u(),i()):":"===a?(u(),c=1):f();break;case 4:f(),c=n;break;case 1:"("===a?c=2:ie.test(a)?f():(u(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--);break;case 2:")"===a?"\\"==h[h.length-1]?h=h.slice(0,-1)+a:c=3:h+=a;break;case 3:u(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--,h="";break;default:t("Unknown state");break}else n=c,c=4;return 2===c&&t(`Unfinished custom RegExp for param "${l}"`),u(),i(),r}function oe(e,t,c){const n=ce(ae(e.path),c);const r=v(n,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function le(e,t){const c=[],n=new Map;function r(e){return n.get(e)}function s(e,c,n){const r=!n,a=ue(e);a.aliasOf=n&&n.record;const l=me(t,e),h=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(v({},a,{components:n?n.record.components:a.components,path:e,aliasOf:n?n.record:a}))}let u,f;for(const t of h){const{path:h}=t;if(c&&"/"!==h[0]){const e=c.record.path,n="/"===e[e.length-1]?"":"/";t.path=c.record.path+(h&&n+h)}if(u=oe(t,c,l),n?n.alias.push(u):(f=f||u,f!==u&&f.alias.push(u),r&&e.name&&!ve(u)&&i(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],u,n&&n.children[t])}n=n||u,o(u)}return f?()=>{i(f)}:m}function i(e){if(W(e)){const t=n.get(e);t&&(n.delete(e),c.splice(c.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=c.indexOf(e);t>-1&&(c.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function a(){return c}function o(e){let t=0;while(t<c.length&&re(e,c[t])>=0)t++;c.splice(t,0,e),e.record.name&&!ve(e)&&n.set(e.record.name,e)}function l(e,t){let r,s,i,a={};if("name"in e&&e.name){if(r=n.get(e.name),!r)throw Y(1,{location:e});i=r.record.name,a=v(he(t.params,r.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=c.find(e=>e.re.test(s)),r&&(a=r.parse(s),i=r.record.name);else{if(r=t.name?n.get(t.name):c.find(e=>e.re.test(t.path)),!r)throw Y(1,{location:e,currentLocation:t});i=r.record.name,a=v({},t.params,e.params),s=r.stringify(a)}const o=[];let l=r;while(l)o.unshift(l.record),l=l.parent;return{name:i,path:s,params:a,matched:o,meta:de(o)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function he(e,t){const c={};for(const n of t)n in e&&(c[n]=e[n]);return c}function ue(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},c=e.props||!1;if("component"in e)t.default=c;else for(const n in e.components)t[n]="boolean"===typeof c?c:c[n];return t}function ve(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function de(e){return e.reduce((e,t)=>v(e,t.meta),{})}function me(e,t){const c={};for(const n in e)c[n]=n in t?t[n]:e[n];return c}const pe=/#/g,ze=/&/g,ge=/\//g,be=/=/g,Me=/\?/g,ye=/\+/g,Ce=/%5B/g,Ve=/%5D/g,He=/%5E/g,Le=/%60/g,we=/%7B/g,_e=/%7C/g,Ae=/%7D/g,Se=/%20/g;function Ee(e){return encodeURI(""+e).replace(_e,"|").replace(Ce,"[").replace(Ve,"]")}function Oe(e){return Ee(e).replace(we,"{").replace(Ae,"}").replace(He,"^")}function ke(e){return Ee(e).replace(ye,"%2B").replace(Se,"+").replace(pe,"%23").replace(ze,"%26").replace(Le,"`").replace(we,"{").replace(Ae,"}").replace(He,"^")}function Te(e){return ke(e).replace(be,"%3D")}function Ie(e){return Ee(e).replace(pe,"%23").replace(Me,"%3F")}function xe(e){return null==e?"":Ie(e).replace(ge,"%2F")}function je(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const c="?"===e[0],n=(c?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ye," "),c=e.indexOf("="),s=je(c<0?e:e.slice(0,c)),i=c<0?null:je(e.slice(c+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(i)}else t[s]=i}return t}function Ne(e){let t="";for(let c in e){const n=e[c];if(c=Te(c),null==n){void 0!==n&&(t+=(t.length?"&":"")+c);continue}const r=Array.isArray(n)?n.map(e=>e&&ke(e)):[n&&ke(n)];r.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+c,null!=e&&(t+="="+e))})}return t}function Pe(e){const t={};for(const c in e){const n=e[c];void 0!==n&&(t[c]=Array.isArray(n)?n.map(e=>null==e?null:""+e):null==n?n:""+n)}return t}function Re(){let e=[];function t(t){return e.push(t),()=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)}}function c(){e=[]}return{add:t,list:()=>e,reset:c}}function Fe(e,t,c,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const o=e=>{!1===e?a(Y(4,{from:c,to:t})):e instanceof Error?a(e):$(e)?a(Y(2,{from:t,to:e})):(s&&n.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),i())},l=e.call(n&&n.instances[r],t,c,o);let h=Promise.resolve(l);e.length<3&&(h=h.then(o)),h.catch(e=>a(e))})}function Ue(e,t,c,n){const r=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(qe(i)){const a=i.__vccOpts||i,o=a[t];o&&r.push(Fe(o,c,n,s,e))}else{let a=i();0,r.push(()=>a.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const i=f(r)?r.default:r;s.components[e]=i;const a=i.__vccOpts||i,o=a[t];return o&&Fe(o,c,n,s,e)()}))}}return r}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Be(e){const t=Object(n["n"])(o),c=Object(n["n"])(l),r=Object(n["b"])(()=>t.resolve(Object(n["G"])(e.to))),s=Object(n["b"])(()=>{const{matched:e}=r.value,{length:t}=e,n=e[t-1],s=c.matched;if(!n||!s.length)return-1;const i=s.findIndex(C.bind(null,n));if(i>-1)return i;const a=Ge(e[t-2]);return t>1&&Ge(n)===a&&s[s.length-1].path!==a?s.findIndex(C.bind(null,e[t-2])):i}),i=Object(n["b"])(()=>s.value>-1&&Ke(c.params,r.value.params)),a=Object(n["b"])(()=>s.value>-1&&s.value===c.matched.length-1&&V(c.params,r.value.params));function h(c={}){return We(c)?t[Object(n["G"])(e.replace)?"replace":"push"](Object(n["G"])(e.to)).catch(m):Promise.resolve()}return{route:r,href:Object(n["b"])(()=>r.value.href),isActive:i,isExactActive:a,navigate:h}}const Ze=Object(n["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const c=Object(n["y"])(Be(e)),{options:r}=Object(n["n"])(o),s=Object(n["b"])(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:c.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const r=t.default&&t.default(c);return e.custom?r:Object(n["m"])("a",{"aria-current":c.isExactActive?e.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:s.value},r)}}}),$e=Ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const c in t){const n=t[c],r=e[c];if("string"===typeof n){if(n!==r)return!1}else if(!Array.isArray(r)||r.length!==n.length||n.some((e,t)=>e!==r[t]))return!1}return!0}function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,c)=>null!=e?e:null!=t?t:c,Ye=Object(n["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:c}){const r=Object(n["n"])(h),s=Object(n["b"])(()=>e.route||r.value),o=Object(n["n"])(a,0),l=Object(n["b"])(()=>s.value.matched[o]);Object(n["w"])(a,o+1),Object(n["w"])(i,l),Object(n["w"])(h,s);const u=Object(n["z"])();return Object(n["I"])(()=>[u.value,l.value,e.name],([e,t,c],[n,r,s])=>{t&&(t.instances[c]=e,r&&r!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&C(t,r)&&n||(t.enterCallbacks[c]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=s.value,i=l.value,a=i&&i.components[e.name],o=e.name;if(!a)return Qe(c.default,{Component:a,route:r});const h=i.props[e.name],f=h?!0===h?r.params:"function"===typeof h?h(r):h:null,d=e=>{e.component.isUnmounted&&(i.instances[o]=null)},m=Object(n["m"])(a,v({},f,t,{onVnodeUnmounted:d,ref:u}));return Qe(c.default,{Component:m,route:r})||m}}});function Qe(e,t){if(!e)return null;const c=e(t);return 1===c.length?c[0]:c}const Je=Ye;function et(e){const t=le(e.routes,e),c=e.parseQuery||De,r=e.stringifyQuery||Ne,s=e.history;const i=Re(),a=Re(),f=Re(),p=Object(n["D"])(K);let z=K;u&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const M=d.bind(null,e=>""+e),C=d.bind(null,xe),V=d.bind(null,je);function H(e,c){let n,r;return W(e)?(n=t.getRecordMatcher(e),r=c):r=e,t.addRoute(r,n)}function L(e){const c=t.getRecordMatcher(e);c&&t.removeRoute(c)}function w(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function S(e,n){if(n=v({},n||p.value),"string"===typeof e){const r=g(c,e,n.path),i=t.resolve({path:r.path},n),a=s.createHref(r.fullPath);return v(r,i,{params:V(i.params),hash:je(r.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=v({},e,{path:g(c,e.path,n.path).path});else{const t=v({},e.params);for(const e in t)null==t[e]&&delete t[e];i=v({},e,{params:C(e.params)}),n.params=C(n.params)}const a=t.resolve(i,n),o=e.hash||"";a.params=M(V(a.params));const l=b(r,v({},e,{hash:Oe(o),path:a.path})),h=s.createHref(l);return v({fullPath:l,hash:o,query:r===Ne?Pe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:h})}function E(e){return"string"===typeof e?g(c,e,p.value.path):v({},e)}function O(e,t){if(z!==e)return Y(8,{from:t,to:e})}function k(e){return R(e)}function j(e){return k(v(E(e),{replace:!0}))}function P(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:c}=t;let n="function"===typeof c?c(e):c;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=E(n):{path:n},n.params={}),v({query:e.query,hash:e.hash,params:e.params},n)}}function R(e,t){const c=z=S(e),n=p.value,s=e.state,i=e.force,a=!0===e.replace,o=P(c);if(o)return R(v(E(o),{state:s,force:i,replace:a}),t||c);const l=c;let h;return l.redirectedFrom=t,!i&&y(r,n,c)&&(h=Y(16,{to:l,from:n}),ne(n,n,!0,!1)),(h?Promise.resolve(h):U(l,n)).catch(e=>Q(e)?e:ee(e,l,n)).then(e=>{if(e){if(Q(e,2))return R(v(E(e.to),{state:s,force:i,replace:a}),t||l)}else e=B(l,n,!0,a,s);return q(l,n,e),e})}function F(e,t){const c=O(e,t);return c?Promise.reject(c):Promise.resolve()}function U(e,t){let c;const[n,r,s]=ct(e,t);c=Ue(n.reverse(),"beforeRouteLeave",e,t);for(const i of n)i.leaveGuards.forEach(n=>{c.push(Fe(n,e,t))});const o=F.bind(null,e,t);return c.push(o),tt(c).then(()=>{c=[];for(const n of i.list())c.push(Fe(n,e,t));return c.push(o),tt(c)}).then(()=>{c=Ue(r,"beforeRouteUpdate",e,t);for(const n of r)n.updateGuards.forEach(n=>{c.push(Fe(n,e,t))});return c.push(o),tt(c)}).then(()=>{c=[];for(const n of e.matched)if(n.beforeEnter&&!t.matched.includes(n))if(Array.isArray(n.beforeEnter))for(const r of n.beforeEnter)c.push(Fe(r,e,t));else c.push(Fe(n.beforeEnter,e,t));return c.push(o),tt(c)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),c=Ue(s,"beforeRouteEnter",e,t),c.push(o),tt(c))).then(()=>{c=[];for(const n of a.list())c.push(Fe(n,e,t));return c.push(o),tt(c)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function q(e,t,c){for(const n of f.list())n(e,t,c)}function B(e,t,c,n,r){const i=O(e,t);if(i)return i;const a=t===K,o=u?history.state:{};c&&(n||a?s.replace(e.fullPath,v({scroll:a&&o&&o.scroll},r)):s.push(e.fullPath,r)),p.value=e,ne(e,t,c,a),ce()}let Z;function $(){Z=s.listen((e,t,c)=>{const n=S(e),r=P(n);if(r)return void R(v(r,{replace:!0}),n).catch(m);z=n;const i=p.value;u&&D(x(i.fullPath,c.delta),T()),U(n,i).catch(e=>Q(e,12)?e:Q(e,2)?(R(e.to,n).then(e=>{Q(e,20)&&!c.delta&&c.type===_.pop&&s.go(-1,!1)}).catch(m),Promise.reject()):(c.delta&&s.go(-c.delta,!1),ee(e,n,i))).then(e=>{e=e||B(n,i,!1),e&&(c.delta?s.go(-c.delta,!1):c.type===_.pop&&Q(e,20)&&s.go(-1,!1)),q(n,i,e)}).catch(m)})}let G,X=Re(),J=Re();function ee(e,t,c){ce(e);const n=J.list();return n.length?n.forEach(n=>n(e,t,c)):console.error(e),Promise.reject(e)}function te(){return G&&p.value!==K?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ce(e){G||(G=!0,$(),X.list().forEach(([t,c])=>e?c(e):t()),X.reset())}function ne(t,c,r,s){const{scrollBehavior:i}=e;if(!u||!i)return Promise.resolve();const a=!r&&N(x(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Object(n["o"])().then(()=>i(t,c,a)).then(e=>e&&I(e)).catch(e=>ee(e,t,c))}const re=e=>s.go(e);let se;const ie=new Set,ae={currentRoute:p,addRoute:H,removeRoute:L,hasRoute:A,getRoutes:w,resolve:S,options:e,push:k,replace:j,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:i.add,beforeResolve:a.add,afterEach:f.add,onError:J.add,isReady:te,install(e){const t=this;e.component("RouterLink",$e),e.component("RouterView",Je),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(n["G"])(p)}),u&&!se&&p.value===K&&(se=!0,k(s.location).catch(e=>{0}));const c={};for(const s in K)c[s]=Object(n["b"])(()=>p.value[s]);e.provide(o,t),e.provide(l,Object(n["y"])(c)),e.provide(h,p);const r=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(z=K,Z&&Z(),p.value=K,se=!1,G=!1),r()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ct(e,t){const c=[],n=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const s=t.matched[i];s&&(e.matched.find(e=>C(e,s))?n.push(s):c.push(s));const a=e.matched[i];a&&(t.matched.find(e=>C(e,a))||r.push(a))}return[c,n,r]}},"6eeb":function(e,t,c){var n=c("da84"),r=c("1626"),s=c("1a2d"),i=c("9112"),a=c("ce4e"),o=c("8925"),l=c("69f3"),h=c("5e77").CONFIGURABLE,u=l.get,f=l.enforce,v=String(String).split("String");(e.exports=function(e,t,c,o){var l,u=!!o&&!!o.unsafe,d=!!o&&!!o.enumerable,m=!!o&&!!o.noTargetGet,p=o&&void 0!==o.name?o.name:t;r(c)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(c,"name")||h&&c.name!==p)&&i(c,"name",p),l=f(c),l.source||(l.source=v.join("string"==typeof p?p:""))),e!==n?(u?!m&&e[t]&&(d=!0):delete e[t],d?e[t]=c:i(e,t,c)):d?e[t]=c:a(t,c)})(Function.prototype,"toString",(function(){return r(this)&&u(this).source||o(this)}))},7051:function(e,t,c){(function(e){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ht=1e6,ut=1e3,ft="transitionend",vt=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),dt=e=>{do{e+=Math.floor(Math.random()*ht)}while(document.getElementById(e));return e},mt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let c=e.getAttribute("href");if(!c||!c.includes("#")&&!c.startsWith("."))return null;c.includes("#")&&!c.startsWith("#")&&(c="#"+c.split("#")[1]),t=c&&"#"!==c?c.trim():null}return t},pt=e=>{const t=mt(e);return t&&document.querySelector(t)?t:null},zt=e=>{const t=mt(e);return t?document.querySelector(t):null},gt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:c}=window.getComputedStyle(e);const n=Number.parseFloat(t),r=Number.parseFloat(c);return n||r?(t=t.split(",")[0],c=c.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(c))*ut):0},bt=e=>{e.dispatchEvent(new Event(ft))},Mt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),yt=e=>Mt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,Ct=(e,t,c)=>{Object.keys(c).forEach(n=>{const r=c[n],s=t[n],i=s&&Mt(s)?"element":vt(s);if(!new RegExp(r).test(i))throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)})},Vt=e=>!(!Mt(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),Ht=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),Lt=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Lt(e.parentNode):null},wt=()=>{},_t=e=>{e.offsetHeight},At=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},St=[],Et=e=>{"loading"===document.readyState?(St.length||document.addEventListener("DOMContentLoaded",()=>{St.forEach(e=>e())}),St.push(e)):e()},Ot=()=>"rtl"===document.documentElement.dir,kt=e=>{Et(()=>{const t=At();if(t){const c=e.NAME,n=t.fn[c];t.fn[c]=e.jQueryInterface,t.fn[c].Constructor=e,t.fn[c].noConflict=()=>(t.fn[c]=n,e.jQueryInterface)}})},Tt=e=>{"function"===typeof e&&e()},It=(e,t,c=!0)=>{if(!c)return void Tt(e);const n=5,r=gt(t)+n;let s=!1;const i=({target:c})=>{c===t&&(s=!0,t.removeEventListener(ft,i),Tt(e))};t.addEventListener(ft,i),setTimeout(()=>{s||bt(t)},r)},xt=(e,t,c,n)=>{let r=e.indexOf(t);if(-1===r)return e[!c&&n?e.length-1:0];const s=e.length;return r+=c?1:-1,n&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))]},jt=/[^.]*(?=\..*)\.|.*/,Dt=/\..*/,Nt=/::\d+$/,Pt={};let Rt=1;const Ft={mouseenter:"mouseover",mouseleave:"mouseout"},Ut=/^(mouseenter|mouseleave)/i,qt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Bt(e,t){return t&&`${t}::${Rt++}`||e.uidEvent||Rt++}function Zt(e){const t=Bt(e);return e.uidEvent=t,Pt[t]=Pt[t]||{},Pt[t]}function $t(e,t){return function c(n){return n.delegateTarget=e,c.oneOff&&ec.off(e,n.type,t),t.apply(e,[n])}}function Wt(e,t,c){return function n(r){const s=e.querySelectorAll(t);for(let{target:i}=r;i&&i!==this;i=i.parentNode)for(let a=s.length;a--;)if(s[a]===i)return r.delegateTarget=i,n.oneOff&&ec.off(e,r.type,t,c),c.apply(i,[r]);return null}}function Kt(e,t,c=null){const n=Object.keys(e);for(let r=0,s=n.length;r<s;r++){const s=e[n[r]];if(s.originalHandler===t&&s.delegationSelector===c)return s}return null}function Gt(e,t,c){const n="string"===typeof t,r=n?c:t;let s=Jt(e);const i=qt.has(s);return i||(s=e),[n,r,s]}function Xt(e,t,c,n,r){if("string"!==typeof t||!e)return;if(c||(c=n,n=null),Ut.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};n?n=e(n):c=e(c)}const[s,i,a]=Gt(t,c,n),o=Zt(e),l=o[a]||(o[a]={}),h=Kt(l,i,s?c:null);if(h)return void(h.oneOff=h.oneOff&&r);const u=Bt(i,t.replace(jt,"")),f=s?Wt(e,c,n):$t(e,c);f.delegationSelector=s?c:null,f.originalHandler=i,f.oneOff=r,f.uidEvent=u,l[u]=f,e.addEventListener(a,f,s)}function Yt(e,t,c,n,r){const s=Kt(t[c],n,r);s&&(e.removeEventListener(c,s,Boolean(r)),delete t[c][s.uidEvent])}function Qt(e,t,c,n){const r=t[c]||{};Object.keys(r).forEach(s=>{if(s.includes(n)){const n=r[s];Yt(e,t,c,n.originalHandler,n.delegationSelector)}})}function Jt(e){return e=e.replace(Dt,""),Ft[e]||e}const ec={on(e,t,c,n){Xt(e,t,c,n,!1)},one(e,t,c,n){Xt(e,t,c,n,!0)},off(e,t,c,n){if("string"!==typeof t||!e)return;const[r,s,i]=Gt(t,c,n),a=i!==t,o=Zt(e),l=t.startsWith(".");if("undefined"!==typeof s){if(!o||!o[i])return;return void Yt(e,o,i,s,r?c:null)}l&&Object.keys(o).forEach(c=>{Qt(e,o,c,t.slice(1))});const h=o[i]||{};Object.keys(h).forEach(c=>{const n=c.replace(Nt,"");if(!a||t.includes(n)){const t=h[c];Yt(e,o,i,t.originalHandler,t.delegationSelector)}})},trigger(e,t,c){if("string"!==typeof t||!e)return null;const n=At(),r=Jt(t),s=t!==r,i=qt.has(r);let a,o=!0,l=!0,h=!1,u=null;return s&&n&&(a=n.Event(t,c),n(e).trigger(a),o=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),i?(u=document.createEvent("HTMLEvents"),u.initEvent(r,o,!0)):u=new CustomEvent(t,{bubbles:o,cancelable:!0}),"undefined"!==typeof c&&Object.keys(c).forEach(e=>{Object.defineProperty(u,e,{get(){return c[e]}})}),h&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),u}},tc=new Map,cc={set(e,t,c){tc.has(e)||tc.set(e,new Map);const n=tc.get(e);n.has(t)||0===n.size?n.set(t,c):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get(e,t){return tc.has(e)&&tc.get(e).get(t)||null},remove(e,t){if(!tc.has(e))return;const c=tc.get(e);c.delete(t),0===c.size&&tc.delete(e)}},nc="5.1.3";class rc{constructor(e){e=yt(e),e&&(this._element=e,cc.set(this._element,this.constructor.DATA_KEY,this))}dispose(){cc.remove(this._element,this.constructor.DATA_KEY),ec.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,c=!0){It(e,t,c)}static getInstance(e){return cc.get(yt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return nc}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const sc=(e,t="hide")=>{const c="click.dismiss"+e.EVENT_KEY,n=e.NAME;ec.on(document,c,`[data-bs-dismiss="${n}"]`,(function(c){if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),Ht(this))return;const r=zt(this)||this.closest("."+n),s=e.getOrCreateInstance(r);s[t]()}))},ic="alert",ac="bs.alert",oc="."+ac,lc="close"+oc,hc="closed"+oc,uc="fade",fc="show";class vc extends rc{static get NAME(){return ic}close(){const e=ec.trigger(this._element,lc);if(e.defaultPrevented)return;this._element.classList.remove(fc);const t=this._element.classList.contains(uc);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),ec.trigger(this._element,hc),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=vc.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}sc(vc,"close"),kt(vc);const dc="button",mc="bs.button",pc="."+mc,zc=".data-api",gc="active",bc='[data-bs-toggle="button"]',Mc=`click${pc}${zc}`;class yc extends rc{static get NAME(){return dc}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(gc))}static jQueryInterface(e){return this.each((function(){const t=yc.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function Cc(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function Vc(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}ec.on(document,Mc,bc,e=>{e.preventDefault();const t=e.target.closest(bc),c=yc.getOrCreateInstance(t);c.toggle()}),kt(yc);const Hc={setDataAttribute(e,t,c){e.setAttribute("data-bs-"+Vc(t),c)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+Vc(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(c=>{let n=c.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=Cc(e.dataset[c])}),t},getDataAttribute(e,t){return Cc(e.getAttribute("data-bs-"+Vc(t)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},Lc=3,wc={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const c=[];let n=e.parentNode;while(n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeType!==Lc)n.matches(t)&&c.push(n),n=n.parentNode;return c},prev(e,t){let c=e.previousElementSibling;while(c){if(c.matches(t))return[c];c=c.previousElementSibling}return[]},next(e,t){let c=e.nextElementSibling;while(c){if(c.matches(t))return[c];c=c.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!Ht(e)&&Vt(e))}},_c="carousel",Ac="bs.carousel",Sc="."+Ac,Ec=".data-api",Oc="ArrowLeft",kc="ArrowRight",Tc=500,Ic=40,xc={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},jc={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Dc="next",Nc="prev",Pc="left",Rc="right",Fc={[Oc]:Rc,[kc]:Pc},Uc="slide"+Sc,qc="slid"+Sc,Bc="keydown"+Sc,Zc="mouseenter"+Sc,$c="mouseleave"+Sc,Wc="touchstart"+Sc,Kc="touchmove"+Sc,Gc="touchend"+Sc,Xc="pointerdown"+Sc,Yc="pointerup"+Sc,Qc="dragstart"+Sc,Jc=`load${Sc}${Ec}`,en=`click${Sc}${Ec}`,tn="carousel",cn="active",nn="slide",rn="carousel-item-end",sn="carousel-item-start",an="carousel-item-next",on="carousel-item-prev",ln="pointer-event",hn=".active",un=".active.carousel-item",fn=".carousel-item",vn=".carousel-item img",dn=".carousel-item-next, .carousel-item-prev",mn=".carousel-indicators",pn="[data-bs-target]",zn="[data-bs-slide], [data-bs-slide-to]",gn='[data-bs-ride="carousel"]',bn="touch",Mn="pen";class yn extends rc{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=wc.findOne(mn,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return xc}static get NAME(){return _c}next(){this._slide(Dc)}nextWhenVisible(){!document.hidden&&Vt(this._element)&&this.next()}prev(){this._slide(Nc)}pause(e){e||(this._isPaused=!0),wc.findOne(dn,this._element)&&(bt(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=wc.findOne(un,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void ec.one(this._element,qc,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const c=e>t?Dc:Nc;this._slide(c,this._items[e])}_getConfig(e){return e={...xc,...Hc.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ct(_c,e,jc),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Ic)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Rc:Pc)}_addEventListeners(){this._config.keyboard&&ec.on(this._element,Bc,e=>this._keydown(e)),"hover"===this._config.pause&&(ec.on(this._element,Zc,e=>this.pause(e)),ec.on(this._element,$c,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===Mn||e.pointerType===bn),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},c=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},n=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),Tc+this._config.interval))};wc.find(vn,this._element).forEach(e=>{ec.on(e,Qc,e=>e.preventDefault())}),this._pointerEvent?(ec.on(this._element,Xc,e=>t(e)),ec.on(this._element,Yc,e=>n(e)),this._element.classList.add(ln)):(ec.on(this._element,Wc,e=>t(e)),ec.on(this._element,Kc,e=>c(e)),ec.on(this._element,Gc,e=>n(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Fc[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?wc.find(fn,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const c=e===Dc;return xt(this._items,t,c,this._config.wrap)}_triggerSlideEvent(e,t){const c=this._getItemIndex(e),n=this._getItemIndex(wc.findOne(un,this._element));return ec.trigger(this._element,Uc,{relatedTarget:e,direction:t,from:n,to:c})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=wc.findOne(hn,this._indicatorsElement);t.classList.remove(cn),t.removeAttribute("aria-current");const c=wc.find(pn,this._indicatorsElement);for(let n=0;n<c.length;n++)if(Number.parseInt(c[n].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){c[n].classList.add(cn),c[n].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||wc.findOne(un,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const c=this._directionToOrder(e),n=wc.findOne(un,this._element),r=this._getItemIndex(n),s=t||this._getItemByOrder(c,n),i=this._getItemIndex(s),a=Boolean(this._interval),o=c===Dc,l=o?sn:rn,h=o?an:on,u=this._orderToDirection(c);if(s&&s.classList.contains(cn))return void(this._isSliding=!1);if(this._isSliding)return;const f=this._triggerSlideEvent(s,u);if(f.defaultPrevented)return;if(!n||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const v=()=>{ec.trigger(this._element,qc,{relatedTarget:s,direction:u,from:r,to:i})};if(this._element.classList.contains(nn)){s.classList.add(h),_t(s),n.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,h),s.classList.add(cn),n.classList.remove(cn,h,l),this._isSliding=!1,setTimeout(v,0)};this._queueCallback(e,n,!0)}else n.classList.remove(cn),s.classList.add(cn),this._isSliding=!1,v();a&&this.cycle()}_directionToOrder(e){return[Rc,Pc].includes(e)?Ot()?e===Pc?Nc:Dc:e===Pc?Dc:Nc:e}_orderToDirection(e){return[Dc,Nc].includes(e)?Ot()?e===Nc?Pc:Rc:e===Nc?Rc:Pc:e}static carouselInterface(e,t){const c=yn.getOrCreateInstance(e,t);let{_config:n}=c;"object"===typeof t&&(n={...n,...t});const r="string"===typeof t?t:n.slide;if("number"===typeof t)c.to(t);else if("string"===typeof r){if("undefined"===typeof c[r])throw new TypeError(`No method named "${r}"`);c[r]()}else n.interval&&n.ride&&(c.pause(),c.cycle())}static jQueryInterface(e){return this.each((function(){yn.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=zt(this);if(!t||!t.classList.contains(tn))return;const c={...Hc.getDataAttributes(t),...Hc.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(c.interval=!1),yn.carouselInterface(t,c),n&&yn.getInstance(t).to(n),e.preventDefault()}}ec.on(document,en,zn,yn.dataApiClickHandler),ec.on(window,Jc,()=>{const e=wc.find(gn);for(let t=0,c=e.length;t<c;t++)yn.carouselInterface(e[t],yn.getInstance(e[t]))}),kt(yn);const Cn="collapse",Vn="bs.collapse",Hn="."+Vn,Ln=".data-api",wn={toggle:!0,parent:null},_n={toggle:"boolean",parent:"(null|element)"},An="show"+Hn,Sn="shown"+Hn,En="hide"+Hn,On="hidden"+Hn,kn=`click${Hn}${Ln}`,Tn="show",In="collapse",xn="collapsing",jn="collapsed",Dn=`:scope .${In} .${In}`,Nn="collapse-horizontal",Pn="width",Rn="height",Fn=".collapse.show, .collapse.collapsing",Un='[data-bs-toggle="collapse"]';class qn extends rc{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const c=wc.find(Un);for(let n=0,r=c.length;n<r;n++){const e=c[n],t=pt(e),r=wc.find(t).filter(e=>e===this._element);null!==t&&r.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return wn}static get NAME(){return Cn}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=wc.find(Dn,this._config.parent);t=wc.find(Fn,this._config.parent).filter(t=>!e.includes(t))}const c=wc.findOne(this._selector);if(t.length){const n=t.find(e=>c!==e);if(e=n?qn.getInstance(n):null,e&&e._isTransitioning)return}const n=ec.trigger(this._element,An);if(n.defaultPrevented)return;t.forEach(t=>{c!==t&&qn.getOrCreateInstance(t,{toggle:!1}).hide(),e||cc.set(t,Vn,null)});const r=this._getDimension();this._element.classList.remove(In),this._element.classList.add(xn),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(xn),this._element.classList.add(In,Tn),this._element.style[r]="",ec.trigger(this._element,Sn)},i=r[0].toUpperCase()+r.slice(1),a="scroll"+i;this._queueCallback(s,this._element,!0),this._element.style[r]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=ec.trigger(this._element,En);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",_t(this._element),this._element.classList.add(xn),this._element.classList.remove(In,Tn);const c=this._triggerArray.length;for(let r=0;r<c;r++){const e=this._triggerArray[r],t=zt(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(xn),this._element.classList.add(In),ec.trigger(this._element,On)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Tn)}_getConfig(e){return e={...wn,...Hc.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=yt(e.parent),Ct(Cn,e,_n),e}_getDimension(){return this._element.classList.contains(Nn)?Pn:Rn}_initializeChildren(){if(!this._config.parent)return;const e=wc.find(Dn,this._config.parent);wc.find(Un,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=zt(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(jn):e.classList.add(jn),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const c=qn.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e]()}}))}}ec.on(document,kn,Un,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=pt(this),c=wc.find(t);c.forEach(e=>{qn.getOrCreateInstance(e,{toggle:!1}).toggle()})})),kt(qn);const Bn="dropdown",Zn="bs.dropdown",$n="."+Zn,Wn=".data-api",Kn="Escape",Gn="Space",Xn="Tab",Yn="ArrowUp",Qn="ArrowDown",Jn=2,er=new RegExp(`${Yn}|${Qn}|${Kn}`),tr="hide"+$n,cr="hidden"+$n,nr="show"+$n,rr="shown"+$n,sr=`click${$n}${Wn}`,ir=`keydown${$n}${Wn}`,ar=`keyup${$n}${Wn}`,or="show",lr="dropup",hr="dropend",ur="dropstart",fr="navbar",vr='[data-bs-toggle="dropdown"]',dr=".dropdown-menu",mr=".navbar-nav",pr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",zr=Ot()?"top-end":"top-start",gr=Ot()?"top-start":"top-end",br=Ot()?"bottom-end":"bottom-start",Mr=Ot()?"bottom-start":"bottom-end",yr=Ot()?"left-start":"right-start",Cr=Ot()?"right-start":"left-start",Vr={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Hr={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Lr extends rc{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Vr}static get DefaultType(){return Hr}static get NAME(){return Bn}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ht(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=ec.trigger(this._element,nr,e);if(t.defaultPrevented)return;const c=Lr.getParentFromElement(this._element);this._inNavbar?Hc.setDataAttribute(this._menu,"popper","none"):this._createPopper(c),"ontouchstart"in document.documentElement&&!c.closest(mr)&&[].concat(...document.body.children).forEach(e=>ec.on(e,"mouseover",wt)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(or),this._element.classList.add(or),ec.trigger(this._element,rr,e)}hide(){if(Ht(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=ec.trigger(this._element,tr,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>ec.off(e,"mouseover",wt)),this._popper&&this._popper.destroy(),this._menu.classList.remove(or),this._element.classList.remove(or),this._element.setAttribute("aria-expanded","false"),Hc.removeDataAttribute(this._menu,"popper"),ec.trigger(this._element,cr,e))}_getConfig(e){if(e={...this.constructor.Default,...Hc.getDataAttributes(this._element),...e},Ct(Bn,e,this.constructor.DefaultType),"object"===typeof e.reference&&!Mt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(Bn.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:Mt(this._config.reference)?t=yt(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const c=this._getPopperConfig(),r=c.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=at(t,this._menu,c),r&&Hc.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(or)}_getMenuElement(){return wc.next(this._element,dr)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(hr))return yr;if(e.classList.contains(ur))return Cr;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(lr)?t?gr:zr:t?Mr:br}_detectNavbar(){return null!==this._element.closest("."+fr)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const c=wc.find(pr,this._menu).filter(Vt);c.length&&xt(c,t,e===Qn,!c.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Lr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Jn||"keyup"===e.type&&e.key!==Xn))return;const t=wc.find(vr);for(let c=0,n=t.length;c<n;c++){const n=Lr.getInstance(t[c]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const r={relatedTarget:n._element};if(e){const t=e.composedPath(),c=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!c||"outside"===n._config.autoClose&&c)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&e.key===Xn||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(r.clickEvent=e)}n._completeHide(r)}}static getParentFromElement(e){return zt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Gn||e.key!==Kn&&(e.key!==Qn&&e.key!==Yn||e.target.closest(dr)):!er.test(e.key))return;const t=this.classList.contains(or);if(!t&&e.key===Kn)return;if(e.preventDefault(),e.stopPropagation(),Ht(this))return;const c=this.matches(vr)?this:wc.prev(this,vr)[0],n=Lr.getOrCreateInstance(c);if(e.key!==Kn)return e.key===Yn||e.key===Qn?(t||n.show(),void n._selectMenuItem(e)):void(t&&e.key!==Gn||Lr.clearMenus());n.hide()}}ec.on(document,ir,vr,Lr.dataApiKeydownHandler),ec.on(document,ir,dr,Lr.dataApiKeydownHandler),ec.on(document,sr,Lr.clearMenus),ec.on(document,ar,Lr.clearMenus),ec.on(document,sr,vr,(function(e){e.preventDefault(),Lr.getOrCreateInstance(this).toggle()})),kt(Lr);const wr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_r=".sticky-top";class Ar{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(wr,"paddingRight",t=>t+e),this._setElementAttributes(_r,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,c){const n=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+n)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e)[t];e.style[t]=c(Number.parseFloat(r))+"px"};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(wr,"paddingRight"),this._resetElementAttributes(_r,"marginRight")}_saveInitialAttribute(e,t){const c=e.style[t];c&&Hc.setDataAttribute(e,t,c)}_resetElementAttributes(e,t){const c=e=>{const c=Hc.getDataAttribute(e,t);"undefined"===typeof c?e.style.removeProperty(t):(Hc.removeDataAttribute(e,t),e.style[t]=c)};this._applyManipulationCallback(e,c)}_applyManipulationCallback(e,t){Mt(e)?t(e):wc.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Sr={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Er={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Or="backdrop",kr="fade",Tr="show",Ir="mousedown.bs."+Or;class xr{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&_t(this._getElement()),this._getElement().classList.add(Tr),this._emulateAnimation(()=>{Tt(e)})):Tt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Tr),this._emulateAnimation(()=>{this.dispose(),Tt(e)})):Tt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(kr),this._element=e}return this._element}_getConfig(e){return e={...Sr,..."object"===typeof e?e:{}},e.rootElement=yt(e.rootElement),Ct(Or,e,Er),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),ec.on(this._getElement(),Ir,()=>{Tt(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(ec.off(this._element,Ir),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){It(e,this._getElement(),this._config.isAnimated)}}const jr={trapElement:null,autofocus:!0},Dr={trapElement:"element",autofocus:"boolean"},Nr="focustrap",Pr="bs.focustrap",Rr="."+Pr,Fr="focusin"+Rr,Ur="keydown.tab"+Rr,qr="Tab",Br="forward",Zr="backward";class $r{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),ec.off(document,Rr),ec.on(document,Fr,e=>this._handleFocusin(e)),ec.on(document,Ur,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,ec.off(document,Rr))}_handleFocusin(e){const{target:t}=e,{trapElement:c}=this._config;if(t===document||t===c||c.contains(t))return;const n=wc.focusableChildren(c);0===n.length?c.focus():this._lastTabNavDirection===Zr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===qr&&(this._lastTabNavDirection=e.shiftKey?Zr:Br)}_getConfig(e){return e={...jr,..."object"===typeof e?e:{}},Ct(Nr,e,Dr),e}}const Wr="modal",Kr="bs.modal",Gr="."+Kr,Xr=".data-api",Yr="Escape",Qr={backdrop:!0,keyboard:!0,focus:!0},Jr={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},es="hide"+Gr,ts="hidePrevented"+Gr,cs="hidden"+Gr,ns="show"+Gr,rs="shown"+Gr,ss="resize"+Gr,is="click.dismiss"+Gr,as="keydown.dismiss"+Gr,os="mouseup.dismiss"+Gr,ls="mousedown.dismiss"+Gr,hs=`click${Gr}${Xr}`,us="modal-open",fs="fade",vs="show",ds="modal-static",ms=".modal.show",ps=".modal-dialog",zs=".modal-body",gs='[data-bs-toggle="modal"]';class bs extends rc{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=wc.findOne(ps,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ar}static get Default(){return Qr}static get NAME(){return Wr}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=ec.trigger(this._element,ns,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(us),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),ec.on(this._dialog,ls,()=>{ec.one(this._element,os,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=ec.trigger(this._element,es);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(vs),ec.off(this._element,is),ec.off(this._dialog,ls),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(e=>ec.off(e,Gr)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xr({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $r({trapElement:this._element})}_getConfig(e){return e={...Qr,...Hc.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ct(Wr,e,Jr),e}_showElement(e){const t=this._isAnimated(),c=wc.findOne(zs,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,c&&(c.scrollTop=0),t&&_t(this._element),this._element.classList.add(vs);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,ec.trigger(this._element,rs,{relatedTarget:e})};this._queueCallback(n,this._dialog,t)}_setEscapeEvent(){this._isShown?ec.on(this._element,as,e=>{this._config.keyboard&&e.key===Yr?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Yr||this._triggerBackdropTransition()}):ec.off(this._element,as)}_setResizeEvent(){this._isShown?ec.on(window,ss,()=>this._adjustDialog()):ec.off(window,ss)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(us),this._resetAdjustments(),this._scrollBar.reset(),ec.trigger(this._element,cs)})}_showBackdrop(e){ec.on(this._element,is,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(fs)}_triggerBackdropTransition(){const e=ec.trigger(this._element,ts);if(e.defaultPrevented)return;const{classList:t,scrollHeight:c,style:n}=this._element,r=c>document.documentElement.clientHeight;!r&&"hidden"===n.overflowY||t.contains(ds)||(r||(n.overflowY="hidden"),t.add(ds),this._queueCallback(()=>{t.remove(ds),r||this._queueCallback(()=>{n.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),c=t>0;(!c&&e&&!Ot()||c&&!e&&Ot())&&(this._element.style.paddingLeft=t+"px"),(c&&!e&&!Ot()||!c&&e&&Ot())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const c=bs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e](t)}}))}}ec.on(document,hs,gs,(function(e){const t=zt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),ec.one(t,ns,e=>{e.defaultPrevented||ec.one(t,cs,()=>{Vt(this)&&this.focus()})});const c=wc.findOne(ms);c&&bs.getInstance(c).hide();const n=bs.getOrCreateInstance(t);n.toggle(this)})),sc(bs),kt(bs);const Ms="offcanvas",ys="bs.offcanvas",Cs="."+ys,Vs=".data-api",Hs=`load${Cs}${Vs}`,Ls="Escape",ws={backdrop:!0,keyboard:!0,scroll:!1},_s={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},As="show",Ss="offcanvas-backdrop",Es=".offcanvas.show",Os="show"+Cs,ks="shown"+Cs,Ts="hide"+Cs,Is="hidden"+Cs,xs=`click${Cs}${Vs}`,js="keydown.dismiss"+Cs,Ds='[data-bs-toggle="offcanvas"]';class Ns extends rc{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Ms}static get Default(){return ws}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=ec.trigger(this._element,Os,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ar).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(As);const c=()=>{this._config.scroll||this._focustrap.activate(),ec.trigger(this._element,ks,{relatedTarget:e})};this._queueCallback(c,this._element,!0)}hide(){if(!this._isShown)return;const e=ec.trigger(this._element,Ts);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(As),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ar).reset(),ec.trigger(this._element,Is)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...ws,...Hc.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ct(Ms,e,_s),e}_initializeBackDrop(){return new xr({className:Ss,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new $r({trapElement:this._element})}_addEventListeners(){ec.on(this._element,js,e=>{this._config.keyboard&&e.key===Ls&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=Ns.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}ec.on(document,xs,Ds,(function(e){const t=zt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ht(this))return;ec.one(t,Is,()=>{Vt(this)&&this.focus()});const c=wc.findOne(Es);c&&c!==t&&Ns.getInstance(c).hide();const n=Ns.getOrCreateInstance(t);n.toggle(this)})),ec.on(window,Hs,()=>wc.find(Es).forEach(e=>Ns.getOrCreateInstance(e).show())),sc(Ns),kt(Ns);const Ps=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Rs=/^aria-[\w-]*$/i,Fs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Us=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,qs=(e,t)=>{const c=e.nodeName.toLowerCase();if(t.includes(c))return!Ps.has(c)||Boolean(Fs.test(e.nodeValue)||Us.test(e.nodeValue));const n=t.filter(e=>e instanceof RegExp);for(let r=0,s=n.length;r<s;r++)if(n[r].test(c))return!0;return!1},Bs={"*":["class","dir","id","lang","role",Rs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Zs(e,t,c){if(!e.length)return e;if(c&&"function"===typeof c)return c(e);const n=new window.DOMParser,r=n.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(let i=0,a=s.length;i<a;i++){const e=s[i],c=e.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){e.remove();continue}const n=[].concat(...e.attributes),r=[].concat(t["*"]||[],t[c]||[]);n.forEach(t=>{qs(t,r)||e.removeAttribute(t.nodeName)})}return r.body.innerHTML}const $s="tooltip",Ws="bs.tooltip",Ks="."+Ws,Gs="bs-tooltip",Xs=new Set(["sanitize","allowList","sanitizeFn"]),Ys={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Qs={AUTO:"auto",TOP:"top",RIGHT:Ot()?"left":"right",BOTTOM:"bottom",LEFT:Ot()?"right":"left"},Js={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Bs,popperConfig:null},ei={HIDE:"hide"+Ks,HIDDEN:"hidden"+Ks,SHOW:"show"+Ks,SHOWN:"shown"+Ks,INSERTED:"inserted"+Ks,CLICK:"click"+Ks,FOCUSIN:"focusin"+Ks,FOCUSOUT:"focusout"+Ks,MOUSEENTER:"mouseenter"+Ks,MOUSELEAVE:"mouseleave"+Ks},ti="fade",ci="modal",ni="show",ri="show",si="out",ii=".tooltip-inner",ai="."+ci,oi="hide.bs.modal",li="hover",hi="focus",ui="click",fi="manual";class vi extends rc{constructor(e,t){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Js}static get NAME(){return $s}static get Event(){return ei}static get DefaultType(){return Ys}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(ni))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),ec.off(this._element.closest(ai),oi,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=ec.trigger(this._element,this.constructor.Event.SHOW),t=Lt(this._element),c=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!c)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ii).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),r=dt(this.constructor.NAME);n.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&n.classList.add(ti);const s="function"===typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,i=this._getAttachment(s);this._addAttachmentClass(i);const{container:a}=this._config;cc.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(n),ec.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=at(this._element,n,this._getPopperConfig(i)),n.classList.add(ni);const o=this._resolvePossibleFunction(this._config.customClass);o&&n.classList.add(...o.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{ec.on(e,"mouseover",wt)});const l=()=>{const e=this._hoverState;this._hoverState=null,ec.trigger(this._element,this.constructor.Event.SHOWN),e===si&&this._leave(null,this)},h=this.tip.classList.contains(ti);this._queueCallback(l,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==ri&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),ec.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},c=ec.trigger(this._element,this.constructor.Event.HIDE);if(c.defaultPrevented)return;e.classList.remove(ni),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>ec.off(e,"mouseover",wt)),this._activeTrigger[ui]=!1,this._activeTrigger[hi]=!1,this._activeTrigger[li]=!1;const n=this.tip.classList.contains(ti);this._queueCallback(t,this.tip,n),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(ti,ni),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ii)}_sanitizeAndSetContent(e,t,c){const n=wc.findOne(c,e);t||!n?this.setElementContent(n,t):n.remove()}setElementContent(e,t){if(null!==e)return Mt(t)?(t=yt(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Zs(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Qs[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach(e=>{if("click"===e)ec.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==fi){const t=e===li?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,c=e===li?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;ec.on(this._element,t,this._config.selector,e=>this._enter(e)),ec.on(this._element,c,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},ec.on(this._element.closest(ai),oi,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?hi:li]=!0),t.getTipElement().classList.contains(ni)||t._hoverState===ri?t._hoverState=ri:(clearTimeout(t._timeout),t._hoverState=ri,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===ri&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?hi:li]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=si,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===si&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=Hc.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Xs.has(e)&&delete t[e]}),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:yt(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Ct($s,e,this.constructor.DefaultType),e.sanitize&&(e.template=Zs(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),c=e.getAttribute("class").match(t);null!==c&&c.length>0&&c.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return Gs}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=vi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}kt(vi);const di="popover",mi="bs.popover",pi="."+mi,zi="bs-popover",gi={...vi.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},bi={...vi.DefaultType,content:"(string|element|function)"},Mi={HIDE:"hide"+pi,HIDDEN:"hidden"+pi,SHOW:"show"+pi,SHOWN:"shown"+pi,INSERTED:"inserted"+pi,CLICK:"click"+pi,FOCUSIN:"focusin"+pi,FOCUSOUT:"focusout"+pi,MOUSEENTER:"mouseenter"+pi,MOUSELEAVE:"mouseleave"+pi},yi=".popover-header",Ci=".popover-body";class Vi extends vi{static get Default(){return gi}static get NAME(){return di}static get Event(){return Mi}static get DefaultType(){return bi}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),yi),this._sanitizeAndSetContent(e,this._getContent(),Ci)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return zi}static jQueryInterface(e){return this.each((function(){const t=Vi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}kt(Vi);const Hi="scrollspy",Li="bs.scrollspy",wi="."+Li,_i=".data-api",Ai={offset:10,method:"auto",target:""},Si={offset:"number",method:"string",target:"(string|element)"},Ei="activate"+wi,Oi="scroll"+wi,ki=`load${wi}${_i}`,Ti="dropdown-item",Ii="active",xi='[data-bs-spy="scroll"]',ji=".nav, .list-group",Di=".nav-link",Ni=".nav-item",Pi=".list-group-item",Ri=`${Di}, ${Pi}, .${Ti}`,Fi=".dropdown",Ui=".dropdown-toggle",qi="offset",Bi="position";class Zi extends rc{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,ec.on(this._scrollElement,Oi,()=>this._process()),this.refresh(),this._process()}static get Default(){return Ai}static get NAME(){return Hi}refresh(){const e=this._scrollElement===this._scrollElement.window?qi:Bi,t="auto"===this._config.method?e:this._config.method,c=t===Bi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const n=wc.find(Ri,this._config.target);n.map(e=>{const n=pt(e),r=n?wc.findOne(n):null;if(r){const e=r.getBoundingClientRect();if(e.width||e.height)return[Hc[t](r).top+c,n]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){ec.off(this._scrollElement,wi),super.dispose()}_getConfig(e){return e={...Ai,...Hc.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=yt(e.target)||document.documentElement,Ct(Hi,e,Si),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),c=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=c){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const c=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);c&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Ri.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),c=wc.findOne(t.join(","),this._config.target);c.classList.add(Ii),c.classList.contains(Ti)?wc.findOne(Ui,c.closest(Fi)).classList.add(Ii):wc.parents(c,ji).forEach(e=>{wc.prev(e,`${Di}, ${Pi}`).forEach(e=>e.classList.add(Ii)),wc.prev(e,Ni).forEach(e=>{wc.children(e,Di).forEach(e=>e.classList.add(Ii))})}),ec.trigger(this._scrollElement,Ei,{relatedTarget:e})}_clear(){wc.find(Ri,this._config.target).filter(e=>e.classList.contains(Ii)).forEach(e=>e.classList.remove(Ii))}static jQueryInterface(e){return this.each((function(){const t=Zi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}ec.on(window,ki,()=>{wc.find(xi).forEach(e=>new Zi(e))}),kt(Zi);const $i="tab",Wi="bs.tab",Ki="."+Wi,Gi=".data-api",Xi="hide"+Ki,Yi="hidden"+Ki,Qi="show"+Ki,Ji="shown"+Ki,ea=`click${Ki}${Gi}`,ta="dropdown-menu",ca="active",na="fade",ra="show",sa=".dropdown",ia=".nav, .list-group",aa=".active",oa=":scope > li > .active",la='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ha=".dropdown-toggle",ua=":scope > .dropdown-menu .active";class fa extends rc{static get NAME(){return $i}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ca))return;let e;const t=zt(this._element),c=this._element.closest(ia);if(c){const t="UL"===c.nodeName||"OL"===c.nodeName?oa:aa;e=wc.find(t,c),e=e[e.length-1]}const n=e?ec.trigger(e,Xi,{relatedTarget:this._element}):null,r=ec.trigger(this._element,Qi,{relatedTarget:e});if(r.defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,c);const s=()=>{ec.trigger(e,Yi,{relatedTarget:this._element}),ec.trigger(this._element,Ji,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,c){const n=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?wc.children(t,aa):wc.find(oa,t),r=n[0],s=c&&r&&r.classList.contains(na),i=()=>this._transitionComplete(e,r,c);r&&s?(r.classList.remove(ra),this._queueCallback(i,e,!0)):i()}_transitionComplete(e,t,c){if(t){t.classList.remove(ca);const e=wc.findOne(ua,t.parentNode);e&&e.classList.remove(ca),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ca),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),_t(e),e.classList.contains(na)&&e.classList.add(ra);let n=e.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains(ta)){const t=e.closest(sa);t&&wc.find(ha,t).forEach(e=>e.classList.add(ca)),e.setAttribute("aria-expanded",!0)}c&&c()}static jQueryInterface(e){return this.each((function(){const t=fa.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}ec.on(document,ea,la,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ht(this))return;const t=fa.getOrCreateInstance(this);t.show()})),kt(fa);const va="toast",da="bs.toast",ma="."+da,pa="mouseover"+ma,za="mouseout"+ma,ga="focusin"+ma,ba="focusout"+ma,Ma="hide"+ma,ya="hidden"+ma,Ca="show"+ma,Va="shown"+ma,Ha="fade",La="hide",wa="show",_a="showing",Aa={animation:"boolean",autohide:"boolean",delay:"number"},Sa={animation:!0,autohide:!0,delay:5e3};class Ea extends rc{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Aa}static get Default(){return Sa}static get NAME(){return va}show(){const e=ec.trigger(this._element,Ca);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ha);const t=()=>{this._element.classList.remove(_a),ec.trigger(this._element,Va),this._maybeScheduleHide()};this._element.classList.remove(La),_t(this._element),this._element.classList.add(wa),this._element.classList.add(_a),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(wa))return;const e=ec.trigger(this._element,Ma);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(La),this._element.classList.remove(_a),this._element.classList.remove(wa),ec.trigger(this._element,ya)};this._element.classList.add(_a),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(wa)&&this._element.classList.remove(wa),super.dispose()}_getConfig(e){return e={...Sa,...Hc.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Ct(va,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const c=e.relatedTarget;this._element===c||this._element.contains(c)||this._maybeScheduleHide()}_setListeners(){ec.on(this._element,pa,e=>this._onInteraction(e,!0)),ec.on(this._element,za,e=>this._onInteraction(e,!1)),ec.on(this._element,ga,e=>this._onInteraction(e,!0)),ec.on(this._element,ba,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Ea.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}sc(Ea),kt(Ea)},"7c73":function(e,t,c){var n,r=c("825a"),s=c("37e8"),i=c("7839"),a=c("d012"),o=c("1be4"),l=c("cc12"),h=c("f772"),u=">",f="<",v="prototype",d="script",m=h("IE_PROTO"),p=function(){},z=function(e){return f+d+u+e+f+"/"+d+u},g=function(e){e.write(z("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=l("iframe"),c="java"+d+":";return t.style.display="none",o.appendChild(t),t.src=String(c),e=t.contentWindow.document,e.open(),e.write(z("document.F=Object")),e.close(),e.F},M=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}M="undefined"!=typeof document?document.domain&&n?g(n):b():g(n);var e=i.length;while(e--)delete M[v][i[e]];return M()};a[m]=!0,e.exports=Object.create||function(e,t){var c;return null!==e?(p[v]=r(e),c=new p,p[v]=null,c[m]=e):c=M(),void 0===t?c:s(c,t)}},"7db0":function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").find,s=c("44d2"),i="find",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},"7dd0":function(e,t,c){"use strict";var n=c("23e7"),r=c("c430"),s=c("5e77"),i=c("1626"),a=c("9ed3"),o=c("e163"),l=c("d2bb"),h=c("d44e"),u=c("9112"),f=c("6eeb"),v=c("b622"),d=c("3f8c"),m=c("ae93"),p=s.PROPER,z=s.CONFIGURABLE,g=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,M=v("iterator"),y="keys",C="values",V="entries",H=function(){return this};e.exports=function(e,t,c,s,v,m,L){a(c,t,s);var w,_,A,S=function(e){if(e===v&&I)return I;if(!b&&e in k)return k[e];switch(e){case y:return function(){return new c(this,e)};case C:return function(){return new c(this,e)};case V:return function(){return new c(this,e)}}return function(){return new c(this)}},E=t+" Iterator",O=!1,k=e.prototype,T=k[M]||k["@@iterator"]||v&&k[v],I=!b&&T||S(v),x="Array"==t&&k.entries||T;if(x&&(w=o(x.call(new e)),w!==Object.prototype&&w.next&&(r||o(w)===g||(l?l(w,g):i(w[M])||f(w,M,H)),h(w,E,!0,!0),r&&(d[E]=H))),p&&v==C&&T&&T.name!==C&&(!r&&z?u(k,"name",C):(O=!0,I=function(){return T.call(this)})),v)if(_={values:S(C),keys:m?I:S(y),entries:S(V)},L)for(A in _)(b||O||!(A in k))&&f(k,A,_[A]);else n({target:t,proto:!0,forced:b||O},_);return r&&!L||k[M]===I||f(k,M,I,{name:v}),d[t]=I,_}},"7f9a":function(e,t,c){var n=c("da84"),r=c("1626"),s=c("8925"),i=n.WeakMap;e.exports=r(i)&&/native code/.test(s(i))},"825a":function(e,t,c){var n=c("861d");e.exports=function(e){if(n(e))return e;throw TypeError(String(e)+" is not an object")}},"83ab":function(e,t,c){var n=c("d039");e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,c){"use strict";var n=c("a04b"),r=c("9bf2"),s=c("5c6c");e.exports=function(e,t,c){var i=n(t);i in e?r.f(e,i,s(0,c)):e[i]=c}},"861d":function(e,t,c){var n=c("1626");e.exports=function(e){return"object"===typeof e?null!==e:n(e)}},8925:function(e,t,c){var n=c("1626"),r=c("c6cd"),s=Function.toString;n(r.inspectSource)||(r.inspectSource=function(e){return s.call(e)}),e.exports=r.inspectSource},"8aa5":function(e,t,c){"use strict";var n=c("6547").charAt;e.exports=function(e,t,c){return t+(c?n(e,t).length:1)}},"8c16":function(e,t,c){},"8f6b":function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return An})),c.d(t,"b",(function(){return En})),c.d(t,"c",(function(){return Sn})),c.d(t,"d",(function(){return kn})),c.d(t,"e",(function(){return On})),c.d(t,"f",(function(){return Tn})),c.d(t,"g",(function(){return In})),c.d(t,"h",(function(){return wn})),c.d(t,"i",(function(){return _n}));var n,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},i=i||{},a=r||self;function o(){}function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e){return Object.prototype.hasOwnProperty.call(e,f)&&e[f]||(e[f]=++v)}var f="closure_uid_"+(1e9*Math.random()>>>0),v=0;function d(e,t,c){return e.call.apply(e.bind,arguments)}function m(e,t,c){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,n),e.apply(t,c)}}return function(){return e.apply(t,arguments)}}function p(e,t,c){return p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:m,p.apply(null,arguments)}function z(e,t){var c=Array.prototype.slice.call(arguments,1);return function(){var t=c.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function g(e,t){function c(){}c.prototype=t.prototype,e.Z=t.prototype,e.prototype=new c,e.prototype.constructor=e,e.Vb=function(e,c,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[c].apply(e,r)}}function b(){this.s=this.s,this.o=this.o}var M=0,y={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=M)){var e=u(this);delete y[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let c=0;c<e.length;c++)if(c in e&&e[c]===t)return c;return-1},V=Array.prototype.forEach?function(e,t,c){Array.prototype.forEach.call(e,t,c)}:function(e,t,c){const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)s in r&&t.call(c,r[s],s,e)};function H(e){e:{var t=Fc;const c=e.length,n="string"===typeof e?e.split(""):e;for(let r=0;r<c;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function L(e){return Array.prototype.concat.apply([],arguments)}function w(e){const t=e.length;if(0<t){const c=Array(t);for(let n=0;n<t;n++)c[n]=e[n];return c}return[]}function _(e){return/^[\s\xa0]*$/.test(e)}var A,S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function E(e,t){return-1!=e.indexOf(t)}function O(e,t){return e<t?-1:e>t?1:0}e:{var k=a.navigator;if(k){var T=k.userAgent;if(T){A=T;break e}}A=""}function I(e,t,c){for(const n in e)t.call(c,e[n],n,e)}function x(e){const t={};for(const c in e)t[c]=e[c];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let c,n;for(let r=1;r<arguments.length;r++){for(c in n=arguments[r],n)e[c]=n[c];for(let t=0;t<j.length;t++)c=j[t],Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}}function N(e){return N[" "](e),e}function P(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}N[" "]=o;var R,F=E(A,"Opera"),U=E(A,"Trident")||E(A,"MSIE"),q=E(A,"Edge"),B=q||U,Z=E(A,"Gecko")&&!(E(A.toLowerCase(),"webkit")&&!E(A,"Edge"))&&!(E(A,"Trident")||E(A,"MSIE"))&&!E(A,"Edge"),$=E(A.toLowerCase(),"webkit")&&!E(A,"Edge");function W(){var e=a.document;return e?e.documentMode:void 0}e:{var K="",G=function(){var e=A;return Z?/rv:([^\);]+)(\)|;)/.exec(e):q?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(K=G?G[1]:""),U){var X=W();if(null!=X&&X>parseFloat(K)){R=String(X);break e}}R=K}var Y,Q={};function J(){return P((function(){let e=0;const t=S(String(R)).split("."),c=S("9").split("."),n=Math.max(t.length,c.length);for(let i=0;0==e&&i<n;i++){var r=t[i]||"",s=c[i]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=O(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==r[2].length,0==s[2].length)||O(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&U){var ee=W();Y=ee||(parseInt(R,10)||void 0)}else Y=void 0;var te=Y,ce=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",o,t),a.removeEventListener("test",o,t)}catch(c){}return e}();function ne(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function re(e,t){if(ne.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var c=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Z){e:{try{N(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==c?t=e.fromElement:"mouseout"==c&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&re.Z.h.call(this)}}ne.prototype.h=function(){this.defaultPrevented=!0},g(re,ne);var se={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),ae=0;function oe(e,t,c,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=c,this.capture=!!n,this.ia=r,this.key=++ae,this.ca=this.fa=!1}function le(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function he(e){this.src=e,this.g={},this.h=0}function ue(e,t){var c=t.type;if(c in e.g){var n,r=e.g[c],s=C(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(le(t),0==e.g[c].length&&(delete e.g[c],e.h--))}}function fe(e,t,c,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!c&&s.ia==n)return r}return-1}he.prototype.add=function(e,t,c,n,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var i=fe(e,t,n,r);return-1<i?(t=e[i],c||(t.fa=!1)):(t=new oe(t,this.src,s,!!n,r),t.fa=c,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),de={};function me(e,t,c,n,r){if(n&&n.once)return ge(e,t,c,n,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],c,n,r);return null}return c=Le(c),e&&e[ie]?e.N(t,c,h(n)?!!n.capture:!!n,r):pe(e,t,c,!1,n,r)}function pe(e,t,c,n,r,s){if(!t)throw Error("Invalid event type");var i=h(r)?!!r.capture:!!r,a=Ve(e);if(a||(e[ve]=a=new he(e)),c=a.add(t,c,n,i,s),c.proxy)return c;if(n=ze(),c.proxy=n,n.src=e,n.listener=c,e.addEventListener)ce||(r=i),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(ye(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return c}function ze(){function e(c){return t.call(e.src,e.listener,c)}var t=Ce;return e}function ge(e,t,c,n,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],c,n,r);return null}return c=Le(c),e&&e[ie]?e.O(t,c,h(n)?!!n.capture:!!n,r):pe(e,t,c,!0,n,r)}function be(e,t,c,n,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],c,n,r);else n=h(n)?!!n.capture:!!n,c=Le(c),e&&e[ie]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],c=fe(s,c,n,r),-1<c&&(le(s[c]),Array.prototype.splice.call(s,c,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fe(t,c,n,r)),(c=-1<e?t[e]:null)&&Me(c))}function Me(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ie])ue(t.i,e);else{var c=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(c,n,e.capture):t.detachEvent?t.detachEvent(ye(c),n):t.addListener&&t.removeListener&&t.removeListener(n),(c=Ve(t))?(ue(c,e),0==c.h&&(c.src=null,t[ve]=null)):le(e)}}}function ye(e){return e in de?de[e]:de[e]="on"+e}function Ce(e,t){if(e.ca)e=!0;else{t=new re(t,this);var c=e.listener,n=e.ia||e.src;e.fa&&Me(e),e=c.call(n,t)}return e}function Ve(e){return e=e[ve],e instanceof he?e:null}var He="__closure_events_fn_"+(1e9*Math.random()>>>0);function Le(e){return"function"===typeof e?e:(e[He]||(e[He]=function(t){return e.handleEvent(t)}),e[He])}function we(){b.call(this),this.i=new he(this),this.P=this,this.I=null}function _e(e,t){var c,n=e.I;if(n)for(c=[];n;n=n.I)c.push(n);if(e=e.P,n=t.type||t,"string"===typeof t)t=new ne(t,e);else if(t instanceof ne)t.target=t.target||e;else{var r=t;t=new ne(n,e),D(t,r)}if(r=!0,c)for(var s=c.length-1;0<=s;s--){var i=t.g=c[s];r=Ae(i,n,!0,t)&&r}if(i=t.g=e,r=Ae(i,n,!0,t)&&r,r=Ae(i,n,!1,t)&&r,c)for(s=0;s<c.length;s++)i=t.g=c[s],r=Ae(i,n,!1,t)&&r}function Ae(e,t,c,n){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var i=t[s];if(i&&!i.ca&&i.capture==c){var a=i.listener,o=i.ia||i.src;i.fa&&ue(e.i,i),r=!1!==a.call(o,n)&&r}}return r&&!n.defaultPrevented}g(we,b),we.prototype[ie]=!0,we.prototype.removeEventListener=function(e,t,c,n){be(this,e,t,c,n)},we.prototype.M=function(){if(we.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var c=t.g[e],n=0;n<c.length;n++)le(c[n]);delete t.g[e],t.h--}}this.I=null},we.prototype.N=function(e,t,c,n){return this.i.add(String(e),t,!1,c,n)},we.prototype.O=function(e,t,c,n){return this.i.add(String(e),t,!0,c,n)};var Se=a.JSON.stringify;function Ee(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const c=Te.get();c.set(e,t),this.h?this.h.next=c:this.g=c,this.h=c}}var ke,Te=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ie,e=>e.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xe(e){a.setTimeout(()=>{throw e},0)}function je(e,t){ke||De(),Ne||(ke(),Ne=!0),Pe.add(e,t)}function De(){var e=a.Promise.resolve(void 0);ke=function(){e.then(Re)}}var Ne=!1,Pe=new Oe;function Re(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(c){xe(c)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1}function Fe(e,t){we.call(this),this.h=e||1,this.g=t||a,this.j=p(this.kb,this),this.l=Date.now()}function Ue(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qe(e,t,c){if("function"===typeof e)c&&(e=p(e,c));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=p(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Be(e){e.g=qe(()=>{e.g=null,e.i&&(e.i=!1,Be(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}g(Fe,we),n=Fe.prototype,n.da=!1,n.S=null,n.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_e(this,"tick"),this.da&&(Ue(this),this.start()))}},n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Fe.Z.M.call(this),Ue(this),delete this.g};class Ze extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){b.call(this),this.h=e,this.g={}}g($e,b);var We=[];function Ke(e,t,c,n){Array.isArray(c)||(c&&(We[0]=c.toString()),c=We);for(var r=0;r<c.length;r++){var s=me(t,c[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){I(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Me(e)}),e),e.g={}}function Xe(){this.g=!0}function Ye(e,t,c,n,r,s){e.info((function(){if(e.g)if(s)for(var i="",a=s.split("&"),o=0;o<a.length;o++){var l=a[o].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");i=2<=u.length&&"type"==u[1]?i+(h+"=")+l+"&":i+(h+"=redacted&")}}else i=null;else i=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+c+"\n"+i}))}function Qe(e,t,c,n,r,s,i){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+c+"\n"+s+" "+i}))}function Je(e,t,c,n){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,c)+(n?" "+n:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var c=JSON.parse(t);if(c)for(e=0;e<c.length;e++)if(Array.isArray(c[e])){var n=c[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var i=1;i<r.length;i++)r[i]=""}}}return Se(c)}catch(a){return t}}$e.prototype.M=function(){$e.Z.M.call(this),Ge(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xe.prototype.Aa=function(){this.g=!1},Xe.prototype.info=function(){};var ct={},nt=null;function rt(){return nt=nt||new we}function st(e){ne.call(this,ct.Ma,e)}function it(e){const t=rt();_e(t,new st(t,e))}function at(e,t){ne.call(this,ct.STAT_EVENT,e),this.stat=t}function ot(e){const t=rt();_e(t,new at(t,e))}function lt(e,t){ne.call(this,ct.Na,e),this.size=t}function ht(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}ct.Ma="serverreachability",g(st,ne),ct.STAT_EVENT="statevent",g(at,ne),ct.Na="timingevent",g(lt,ne);var ut={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ft={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function dt(e){return e.h||(e.h=e.i())}function mt(){}vt.prototype.h=null;var pt,zt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gt(){ne.call(this,"d")}function bt(){ne.call(this,"c")}function Mt(){}function yt(e,t,c,n){this.l=e,this.j=t,this.m=c,this.X=n||1,this.V=new $e(this),this.P=Vt,e=B?125:void 0,this.W=new Fe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ct}function Ct(){this.i=null,this.g="",this.h=!1}g(gt,ne),g(bt,ne),g(Mt,vt),Mt.prototype.g=function(){return new XMLHttpRequest},Mt.prototype.i=function(){return{}},pt=new Mt;var Vt=45e3,Ht={},Lt={};function wt(e,t,c){e.K=1,e.v=Yt(Zt(t)),e.s=c,e.U=!0,_t(e,null)}function _t(e,t){e.F=Date.now(),Ot(e),e.A=Zt(e.v);var c=e.A,n=e.X;Array.isArray(n)||(n=[String(n)]),fc(c.h,"t",n),e.C=0,c=e.l.H,e.h=new Ct,e.g=bn(e.l,c?t:null,!e.s),0<e.O&&(e.L=new Ze(p(e.Ia,e,e.g),e.O)),Ke(e.V,e.g,"readystatechange",e.gb),t=e.H?x(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),it(1),Ye(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function St(e,t,c){let n,r=!0;for(;!e.I&&e.C<c.length;){if(n=Et(e,c),n==Lt){4==t&&(e.o=4,ot(14),r=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(n==Ht){e.o=4,ot(15),Je(e.j,e.m,c,"[Invalid Chunk]"),r=!1;break}Je(e.j,e.m,n,null),jt(e,n)}At(e)&&n!=Lt&&n!=Ht&&(e.h.g="",e.C=0),4!=t||0!=c.length||e.h.h||(e.o=1,ot(16),r=!1),e.i=e.i&&r,r?0<c.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),un(t),t.L=!0,ot(11))):(Je(e.j,e.m,c,"[Invalid Chunked Response]"),xt(e),It(e))}function Et(e,t){var c=e.C,n=t.indexOf("\n",c);return-1==n?Lt:(c=Number(t.substring(c,n)),isNaN(c)?Ht:(n+=1,n+c>t.length?Lt:(t=t.substr(n,c),e.C=n+c,t)))}function Ot(e){e.Y=Date.now()+e.P,kt(e,e.P)}function kt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ht(p(e.eb,e),t)}function Tt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function It(e){0==e.l.G||e.I||dn(e.l,e)}function xt(e){Tt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ue(e.W),Ge(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var c=e.l;if(0!=c.G&&(c.g==e||Mc(c.i,e)))if(c.I=e.N,!e.J&&Mc(c.i,e)&&3==c.G){try{var n=c.Ca.g.parse(t)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!c.u){if(c.g){if(!(c.g.F+3e3<e.F))break e;vn(c),en(c)}hn(c),ot(18)}}else c.ta=r[1],0<c.ta-c.U&&37500>r[2]&&c.N&&0==c.A&&!c.v&&(c.v=ht(p(c.ab,c),6e3));if(1>=bc(c.i)&&c.ka){try{c.ka()}catch(l){}c.ka=void 0}}else pn(c,11)}else if((e.J||c.g==e)&&vn(c),!_(t))for(r=c.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(c.U=l[0],l=l[1],2==c.G)if("c"==l[0]){c.J=l[1],c.la=l[2];const t=l[3];null!=t&&(c.ma=t,c.h.info("VER="+c.ma));const r=l[4];null!=r&&(c.za=r,c.h.info("SVER="+c.za));const h=l[5];null!=h&&"number"===typeof h&&0<h&&(n=1.5*h,c.K=n,c.h.info("backChannelRequestTimeoutMs_="+n)),n=c;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;!s.g&&(E(e,"spdy")||E(e,"quic")||E(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(yc(s,s.h),s.h=null))}if(n.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.sa=e,Xt(n.F,n.D,e))}}c.G=3,c.j&&c.j.xa(),c.$&&(c.O=Date.now()-e.F,c.h.info("Handshake RTT: "+c.O+"ms")),n=c;var i=e;if(n.oa=gn(n,n.H?n.la:null,n.W),i.J){Cc(n.i,i);var a=i,o=n.K;o&&a.setTimeout(o),a.B&&(Tt(a),Ot(a)),n.g=i}else ln(n);0<c.l.length&&nn(c)}else"stop"!=l[0]&&"close"!=l[0]||pn(c,7);else 3==c.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?pn(c,7):Jc(c):"noop"!=l[0]&&c.j&&c.j.wa(l),c.A=0)}it(4)}catch(l){}}function Dt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],c=e.length,n=0;n<c;n++)t.push(e[n]);return t}for(n in t=[],c=0,e)t[c++]=e[n];return t}function Nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)V(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var c=e.T();else if(e.R&&"function"==typeof e.R)c=void 0;else if(l(e)||"string"===typeof e){c=[];for(var n=e.length,r=0;r<n;r++)c.push(r)}else for(r in c=[],n=0,e)c[n++]=r;n=Dt(e),r=n.length;for(var s=0;s<r;s++)t.call(void 0,n[s],c&&c[s],e)}}function Pt(e,t){this.h={},this.g=[],this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var n=0;n<c;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof Pt)for(c=e.T(),n=0;n<c.length;n++)this.set(c[n],e.get(c[n]));else for(n in e)this.set(n,e[n])}function Rt(e){if(e.i!=e.g.length){for(var t=0,c=0;t<e.g.length;){var n=e.g[t];Ft(e.h,n)&&(e.g[c++]=n),t++}e.g.length=c}if(e.i!=e.g.length){var r={};for(c=t=0;t<e.g.length;)n=e.g[t],Ft(r,n)||(e.g[c++]=n,r[n]=1),t++;e.g.length=c}}function Ft(e,t){return Object.prototype.hasOwnProperty.call(e,t)}n=yt.prototype,n.setTimeout=function(e){this.P=e},n.gb=function(e){e=e.target;const t=this.L;t&&3==Wc(e)?t.l():this.Ia(e)},n.Ia=function(e){try{if(e==this.g)e:{const u=Wc(this.g);var t=this.g.Da();const f=this.g.ba();if(!(3>u)&&(3!=u||B||this.g&&(this.h.h||this.g.ga()||Kc(this.g)))){this.I||4!=u||7==t||it(8==t||0>=f?3:2),Tt(this);var c=this.g.ba();this.N=c;t:if(At(this)){var n=Kc(this.g);e="";var r=n.length,s=4==Wc(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xt(this),It(this);var i="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,i=this.h.g}else i=this.g.ga();if(this.i=200==c,Qe(this.j,this.u,this.A,this.m,this.X,u,c),this.i){if(this.$&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(o)){var h=o;break t}}h=null}if(!(c=h)){this.i=!1,this.o=3,ot(12),xt(this),It(this);break e}Je(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,c)}this.U?(St(this,u,i),B&&this.i&&3==u&&(Ke(this.V,this.W,"tick",this.fb),this.W.start())):(Je(this.j,this.m,i,null),jt(this,i)),4==u&&xt(this),this.i&&!this.I&&(4==u?dn(this.l,this):(this.i=!1,Ot(this)))}else 400==c&&0<i.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),xt(this),It(this)}}}catch(u){}},n.fb=function(){if(this.g){var e=Wc(this.g),t=this.g.ga();this.C<t.length&&(Tt(this),St(this,e,t),this.i&&4!=e&&Ot(this))}},n.cancel=function(){this.I=!0,xt(this)},n.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(it(3),ot(17)),xt(this),this.o=2,It(this)):kt(this,this.Y-e)},n=Pt.prototype,n.R=function(){Rt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},n.T=function(){return Rt(this),this.g.concat()},n.get=function(e,t){return Ft(this.h,e)?this.h[e]:t},n.set=function(e,t){Ft(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},n.forEach=function(e,t){for(var c=this.T(),n=0;n<c.length;n++){var r=c[n],s=this.get(r);e.call(t,s,r,this)}};var Ut=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qt(e,t){if(e){e=e.split("&");for(var c=0;c<e.length;c++){var n=e[c].indexOf("="),r=null;if(0<=n){var s=e[c].substring(0,n);r=e[c].substring(n+1)}else s=e[c];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Bt){this.g=void 0!==t?t:e.g,$t(this,e.j),this.s=e.s,Wt(this,e.i),Kt(this,e.m),this.l=e.l,t=e.h;var c=new oc;c.i=t.i,t.g&&(c.g=new Pt(t.g),c.h=t.h),Gt(this,c),this.o=e.o}else e&&(c=String(e).match(Ut))?(this.g=!!t,$t(this,c[1]||"",!0),this.s=ec(c[2]||""),Wt(this,c[3]||"",!0),Kt(this,c[4]),this.l=ec(c[5]||"",!0),Gt(this,c[6]||"",!0),this.o=ec(c[7]||"")):(this.g=!!t,this.h=new oc(null,this.g))}function Zt(e){return new Bt(e)}function $t(e,t,c){e.j=c?ec(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wt(e,t,c){e.i=c?ec(t,!0):t}function Kt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,c){t instanceof oc?(e.h=t,dc(e.h,e.g)):(c||(t=tc(t,ic)),e.h=new oc(t,e.g))}function Xt(e,t,c){e.h.set(t,c)}function Yt(e){return Xt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qt(e){return e instanceof Bt?Zt(e):new Bt(e,void 0)}function Jt(e,t,c,n){var r=new Bt(null,void 0);return e&&$t(r,e),t&&Wt(r,t),c&&Kt(r,c),n&&(r.l=n),r}function ec(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tc(e,t,c){return"string"===typeof e?(e=encodeURI(e).replace(t,cc),c&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tc(t,nc,!0),":");var c=this.i;return(c||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tc(t,nc,!0),"@"),e.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&e.push(":",String(c))),(c=this.l)&&(this.i&&"/"!=c.charAt(0)&&e.push("/"),e.push(tc(c,"/"==c.charAt(0)?sc:rc,!0))),(c=this.h.toString())&&e.push("?",c),(c=this.o)&&e.push("#",tc(c,ac)),e.join("")};var nc=/[#\/\?@]/g,rc=/[#\?:]/g,sc=/[#\?]/g,ic=/[#\?@]/g,ac=/#/g;function oc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lc(e){e.g||(e.g=new Pt,e.h=0,e.i&&qt(e.i,(function(t,c){e.add(decodeURIComponent(t.replace(/\+/g," ")),c)})))}function hc(e,t){lc(e),t=vc(e,t),Ft(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ft(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Rt(e)))}function uc(e,t){return lc(e),t=vc(e,t),Ft(e.g.h,t)}function fc(e,t,c){hc(e,t),0<c.length&&(e.i=null,e.g.set(vc(e,t),w(c)),e.h+=c.length)}function vc(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function dc(e,t){t&&!e.j&&(lc(e),e.i=null,e.g.forEach((function(e,t){var c=t.toLowerCase();t!=c&&(hc(this,t),fc(this,c,e))}),e)),e.j=t}n=oc.prototype,n.add=function(e,t){lc(this),this.i=null,e=vc(this,e);var c=this.g.get(e);return c||this.g.set(e,c=[]),c.push(t),this.h+=1,this},n.forEach=function(e,t){lc(this),this.g.forEach((function(c,n){V(c,(function(c){e.call(t,c,n,this)}),this)}),this)},n.T=function(){lc(this);for(var e=this.g.R(),t=this.g.T(),c=[],n=0;n<t.length;n++)for(var r=e[n],s=0;s<r.length;s++)c.push(t[n]);return c},n.R=function(e){lc(this);var t=[];if("string"===typeof e)uc(this,e)&&(t=L(t,this.g.get(vc(this,e))));else{e=this.g.R();for(var c=0;c<e.length;c++)t=L(t,e[c])}return t},n.set=function(e,t){return lc(this),this.i=null,e=vc(this,e),uc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),c=0;c<t.length;c++){var n=t[c],r=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var i=r;""!==n[s]&&(i+="="+encodeURIComponent(String(n[s]))),e.push(i)}}return this.i=e.join("&")};var mc=class{constructor(e,t){this.h=e,this.g=t}};function pc(e){this.l=e||zc,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zc=10;function gc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function bc(e){return e.h?1:e.g?e.g.size:0}function Mc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yc(e,t){e.g?e.g.add(t):e.h=t}function Cc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Vc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const c of e.g.values())t=t.concat(c.D);return t}return w(e.i)}function Hc(){}function Lc(){this.g=new Hc}function wc(e,t,c){const n=c||"";try{Nt(e,(function(e,c){let r=e;h(e)&&(r=Se(e)),t.push(n+c+"="+encodeURIComponent(r))}))}catch(r){throw t.push(n+"type="+encodeURIComponent("_badmap")),r}}function _c(e,t){const c=new Xe;if(a.Image){const n=new Image;n.onload=z(Ac,c,n,"TestLoadImage: loaded",!0,t),n.onerror=z(Ac,c,n,"TestLoadImage: error",!1,t),n.onabort=z(Ac,c,n,"TestLoadImage: abort",!1,t),n.ontimeout=z(Ac,c,n,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else t(!1)}function Ac(e,t,c,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(s){}}function Sc(e){this.l=e.$b||null,this.j=e.ib||!1}function Ec(e,t){we.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Oc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pc.prototype.cancel=function(){if(this.i=Vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Hc.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Hc.prototype.parse=function(e){return a.JSON.parse(e,void 0)},g(Sc,vt),Sc.prototype.g=function(){return new Ec(this.l,this.j)},Sc.prototype.i=function(e){return function(){return e}}({}),g(Ec,we);var Oc=0;function kc(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Tc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ic(e)}function Ic(e){e.onreadystatechange&&e.onreadystatechange.call(e)}n=Ec.prototype,n.open=function(e,t){if(this.readyState!=Oc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ic(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Tc(this)),this.readyState=Oc},n.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ic(this)),this.g&&(this.readyState=3,Ic(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kc(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},n.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Tc(this):Ic(this),3==this.readyState&&kc(this)}},n.Ua=function(e){this.g&&(this.response=this.responseText=e,Tc(this))},n.Ta=function(e){this.g&&(this.response=e,Tc(this))},n.ha=function(){this.g&&Tc(this)},n.setRequestHeader=function(e,t){this.v.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var c=t.next();!c.done;)c=c.value,e.push(c[0]+": "+c[1]),c=t.next();return e.join("\r\n")},Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xc=a.JSON.parse;function jc(e){we.call(this),this.headers=new Pt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dc,this.K=this.L=!1}g(jc,we);var Dc="",Nc=/^https?$/i,Pc=["POST","PUT"];function Rc(e){return U&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fc(e){return"content-type"==e.toLowerCase()}function Uc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qc(e),Zc(e)}function qc(e){e.D||(e.D=!0,_e(e,"complete"),_e(e,"error"))}function Bc(e){if(e.h&&"undefined"!=typeof i&&(!e.C[1]||4!=Wc(e)||2!=e.ba()))if(e.v&&4==Wc(e))qe(e.Fa,0,e);else if(_e(e,"readystatechange"),4==Wc(e)){e.h=!1;try{const i=e.ba();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var c;if(!(c=t)){var n;if(n=0===i){var r=String(e.H).match(Ut)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}n=!Nc.test(r?r.toLowerCase():"")}c=n}if(c)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<Wc(e)?e.g.statusText:""}catch(l){o=""}e.j=o+" ["+e.ba()+"]",qc(e)}}finally{Zc(e)}}}function Zc(e,t){if(e.g){$c(e);const n=e.g,r=e.C[0]?o:null;e.g=null,e.C=null,t||_e(e,"ready");try{n.onreadystatechange=r}catch(c){}}}function $c(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Wc(e){return e.g?e.g.readyState:0}function Kc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Gc(e){let t="";return I(e,(function(e,c){t+=c,t+=":",t+=e,t+="\r\n"})),t}function Xc(e,t,c){e:{for(n in c){var n=!1;break e}n=!0}n||(c=Gc(c),"string"===typeof e?null!=c&&encodeURIComponent(String(c)):Xt(e,t,c))}function Yc(e,t,c){return c&&c.internalChannelParams&&c.internalChannelParams[e]||t}function Qc(e){this.za=0,this.l=[],this.h=new Xe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yc("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yc("baseRetryDelayMs",5e3,e),this.$a=Yc("retryDelaySeedMs",1e4,e),this.Ya=Yc("forwardChannelMaxRetries",2,e),this.ra=Yc("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new pc(e&&e.concurrentRequestLimit),this.Ca=new Lc,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Jc(e){if(tn(e),3==e.G){var t=e.V++,c=Zt(e.F);Xt(c,"SID",e.J),Xt(c,"RID",t),Xt(c,"TYPE","terminate"),an(e,c),t=new yt(e,e.h,t,void 0),t.K=2,t.v=Yt(Zt(c)),c=!1,a.navigator&&a.navigator.sendBeacon&&(c=a.navigator.sendBeacon(t.v.toString(),"")),!c&&a.Image&&((new Image).src=t.v,c=!0),c||(t.g=bn(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ot(t)}zn(e)}function en(e){e.g&&(un(e),e.g.cancel(),e.g=null)}function tn(e){en(e),e.u&&(a.clearTimeout(e.u),e.u=null),vn(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function cn(e,t){e.l.push(new mc(e.Za++,t)),3==e.G&&nn(e)}function nn(e){gc(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function rn(e,t){return!(bc(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=ht(p(e.Ha,e,t),mn(e,e.C)),e.C++,!0))}function sn(e,t){var c;c=t?t.m:e.V++;const n=Zt(e.F);Xt(n,"SID",e.J),Xt(n,"RID",c),Xt(n,"AID",e.U),an(e,n),e.o&&e.s&&Xc(n,e.o,e.s),c=new yt(e,e.h,c,e.C+1),null===e.o&&(c.H=e.s),t&&(e.l=t.D.concat(e.l)),t=on(e,c,1e3),c.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),yc(e.i,c),wt(c,n,t)}function an(e,t){e.j&&Nt({},(function(e,c){Xt(t,c,e)}))}function on(e,t,c){c=Math.min(e.l.length,c);var n=e.j?p(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+c];-1==t?0<c?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let a=0;a<c;a++){let c=r[a].h;const o=r[a].g;if(c-=t,0>c)t=Math.max(0,r[a].h-100),i=!1;else try{wc(o,e,"req"+c+"_")}catch(s){n&&n(o)}}if(i){n=e.join("&");break e}}}return e=e.l.splice(0,c),t.D=e,n}function ln(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function hn(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=ht(p(e.Ga,e),mn(e,e.A)),e.A++,!0)}function un(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function fn(e){e.g=new yt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Zt(e.oa);Xt(t,"RID","rpc"),Xt(t,"SID",e.J),Xt(t,"CI",e.N?"0":"1"),Xt(t,"AID",e.U),an(e,t),Xt(t,"TYPE","xmlhttp"),e.o&&e.s&&Xc(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var c=e.g;e=e.la,c.K=1,c.v=Yt(Zt(t)),c.s=null,c.U=!0,_t(c,e)}function vn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function dn(e,t){var c=null;if(e.g==t){vn(e),un(e),e.g=null;var n=2}else{if(!Mc(e.i,t))return;c=t.D,Cc(e.i,t),n=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==n){c=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;n=rt(),_e(n,new lt(n,c,t,r)),nn(e)}else ln(e);else if(r=t.o,3==r||0==r&&0<e.I||!(1==n&&rn(e,t)||2==n&&hn(e)))switch(c&&0<c.length&&(t=e.i,t.i=t.i.concat(c)),r){case 1:pn(e,5);break;case 4:pn(e,10);break;case 3:pn(e,6);break;default:pn(e,2)}}function mn(e,t){let c=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(c*=2),c*t}function pn(e,t){if(e.h.info("Error code "+t),2==t){var c=null;e.j&&(c=null);var n=p(e.jb,e);c||(c=new Bt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$t(c,"https"),Yt(c)),_c(c.toString(),n)}else ot(2);e.G=0,e.j&&e.j.va(t),zn(e),tn(e)}function zn(e){e.G=0,e.I=-1,e.j&&(0==Vc(e.i).length&&0==e.l.length||(e.i.i.length=0,w(e.l),e.l.length=0),e.j.ua())}function gn(e,t,c){let n=Qt(c);if(""!=n.i)t&&Wt(n,t+"."+n.i),Kt(n,n.m);else{const e=a.location;n=Jt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,c)}return e.aa&&I(e.aa,(function(e,t){Xt(n,t,e)})),t=e.D,c=e.sa,t&&c&&Xt(n,t,c),Xt(n,"VER",e.ma),an(e,n),n}function bn(e,t,c){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=c&&e.Ba&&!e.qa?new jc(new Sc({ib:!0})):new jc(e.qa),t.L=e.H,t}function Mn(){}function yn(){if(U&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Cn(e,t){we.call(this),this.g=new Qc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!_(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ln(this)}function Vn(e){gt.call(this);var t=e.__sm__;if(t){e:{for(const c in t){e=c;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Hn(){bt.call(this),this.status=1}function Ln(e){this.g=e}n=jc.prototype,n.ea=function(e,t,c,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pt.g(),this.C=this.u?dt(this.u):dt(pt),this.g.onreadystatechange=p(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Uc(this,s)}e=c||"";const r=new Pt(this.headers);n&&Nt(n,(function(e,t){r.set(t,e)})),n=H(r.T()),c=a.FormData&&e instanceof a.FormData,!(0<=C(Pc,t))||n||c||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$c(this),0<this.B&&((this.K=Rc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=p(this.pa,this)):this.A=qe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Uc(this,s)}},n.pa=function(){"undefined"!=typeof i&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),Zc(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zc(this,!0)),jc.Z.M.call(this)},n.Fa=function(){this.s||(this.F||this.v||this.l?Bc(this):this.cb())},n.cb=function(){Bc(this)},n.ba=function(){try{return 2<Wc(this)?this.g.status:-1}catch(e){return-1}},n.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xc(t)}},n.Da=function(){return this.m},n.La=function(){return"string"===typeof this.j?this.j:String(this.j)},n=Qc.prototype,n.ma=8,n.G=1,n.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},n.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new yt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=x(s),D(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,c=0;c<this.l.length;c++){var n=this.l[c];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(t+=n,4096<t){t=c;break e}if(4096===t||c===this.l.length-1){t=c+1;break e}}t=1e3}else t=1e3;t=on(this,r,t),c=Zt(this.F),Xt(c,"RID",e),Xt(c,"CVER",22),this.D&&Xt(c,"X-HTTP-Session-Id",this.D),an(this,c),this.o&&s&&Xc(c,this.o,s),yc(this.i,r),this.Ra&&Xt(c,"TYPE","init"),this.ja?(Xt(c,"$req",t),Xt(c,"SID","null"),r.$=!0,wt(r,c,null)):wt(r,c,t),this.G=2}}else 3==this.G&&(e?sn(this,e):0==this.l.length||gc(this.i)||sn(this))},n.Ga=function(){if(this.u=null,fn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ht(p(this.bb,this),e)}},n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ot(10),en(this),fn(this))},n.ab=function(){null!=this.v&&(this.v=null,en(this),hn(this),ot(19))},n.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ot(2)):(this.h.info("Failed to ping google.com"),ot(1))},n=Mn.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Oa=function(){},yn.prototype.g=function(e,t){return new Cn(e,t)},g(Cn,we),Cn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,c=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(p(e.hb,e,t))),ot(0),e.W=t,e.aa=c||{},e.N=e.X,e.F=gn(e,null,e.W),nn(e)},Cn.prototype.close=function(){Jc(this.g)},Cn.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cn(this.g,t)}else this.v?(t={},t.__data__=Se(e),cn(this.g,t)):cn(this.g,e)},Cn.prototype.M=function(){this.g.j=null,delete this.j,Jc(this.g),delete this.g,Cn.Z.M.call(this)},g(Vn,gt),g(Hn,bt),g(Ln,Mn),Ln.prototype.xa=function(){_e(this.g,"a")},Ln.prototype.wa=function(e){_e(this.g,new Vn(e))},Ln.prototype.va=function(e){_e(this.g,new Hn(e))},Ln.prototype.ua=function(){_e(this.g,"b")},yn.prototype.createWebChannel=yn.prototype.g,Cn.prototype.send=Cn.prototype.u,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ft.COMPLETE="complete",mt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",we.prototype.listen=we.prototype.N,jc.prototype.listenOnce=jc.prototype.O,jc.prototype.getLastError=jc.prototype.La,jc.prototype.getLastErrorCode=jc.prototype.Da,jc.prototype.getStatus=jc.prototype.ba,jc.prototype.getResponseJson=jc.prototype.Qa,jc.prototype.getResponseText=jc.prototype.ga,jc.prototype.send=jc.prototype.ea;var wn=s.createWebChannelTransport=function(){return new yn},_n=s.getStatEventTarget=function(){return rt()},An=s.ErrorCode=ut,Sn=s.EventType=ft,En=s.Event=ct,On=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},kn=s.FetchXmlHttpFactory=Sc,Tn=s.WebChannel=mt,In=s.XhrIo=jc}).call(this,c("c8ba"))},"90e3":function(e,t){var c=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++c+n).toString(36)}},9112:function(e,t,c){var n=c("83ab"),r=c("9bf2"),s=c("5c6c");e.exports=n?function(e,t,c){return r.f(e,t,s(1,c))}:function(e,t,c){return e[t]=c,e}},9263:function(e,t,c){"use strict";var n=c("577e"),r=c("ad6d"),s=c("9f7f"),i=c("5692"),a=c("7c73"),o=c("69f3").get,l=c("fce3"),h=c("107c"),u=RegExp.prototype.exec,f=i("native-string-replace",String.prototype.replace),v=u,d=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=s.UNSUPPORTED_Y||s.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],z=d||p||m||l||h;z&&(v=function(e){var t,c,s,i,l,h,z,g=this,b=o(g),M=n(e),y=b.raw;if(y)return y.lastIndex=g.lastIndex,t=v.call(y,M),g.lastIndex=y.lastIndex,t;var C=b.groups,V=m&&g.sticky,H=r.call(g),L=g.source,w=0,_=M;if(V&&(H=H.replace("y",""),-1===H.indexOf("g")&&(H+="g"),_=M.slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==M.charAt(g.lastIndex-1))&&(L="(?: "+L+")",_=" "+_,w++),c=new RegExp("^(?:"+L+")",H)),p&&(c=new RegExp("^"+L+"$(?!\\s)",H)),d&&(s=g.lastIndex),i=u.call(V?c:g,_),V?i?(i.input=i.input.slice(w),i[0]=i[0].slice(w),i.index=g.lastIndex,g.lastIndex+=i[0].length):g.lastIndex=0:d&&i&&(g.lastIndex=g.global?i.index+i[0].length:s),p&&i&&i.length>1&&f.call(i[0],c,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&C)for(i.groups=h=a(null),l=0;l<C.length;l++)z=C[l],h[z[0]]=i[z[1]];return i}),e.exports=v},9483:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n,r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var c=t.registrationOptions;void 0===c&&(c={}),delete t.registrationOptions;var s=function(e){var c=[],n=arguments.length-1;while(n-- >0)c[n]=arguments[n+1];t&&t[e]&&t[e].apply(t,c)};"serviceWorker"in navigator&&n.then((function(){r()?(o(e,s,c),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return i(s,e)}))):(a(e,s,c),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return i(s,e)})))}))}function i(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,c){navigator.serviceWorker.register(e,c).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return i(t,e)}))}function o(e,t,c){fetch(e).then((function(n){404===n.status?(t("error",new Error("Service worker not found at "+e)),l()):-1===n.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+n.headers.get("content-type"))),l()):a(e,t,c)})).catch((function(e){return i(t,e)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return i(emit,e)}))}"undefined"!==typeof window&&(n="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},"94ca":function(e,t,c){var n=c("d039"),r=c("1626"),s=/#|\.prototype\./,i=function(e,t){var c=o[a(e)];return c==h||c!=l&&(r(t)?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(s,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",h=i.POLYFILL="P";e.exports=i},"96cf":function(e,t,c){var n=function(e){"use strict";var t,c=Object.prototype,n=c.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function o(e,t,c){return Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(k){o=function(e,t,c){return e[t]=c}}function l(e,t,c,n){var r=t&&t.prototype instanceof p?t:p,s=Object.create(r.prototype),i=new S(n||[]);return s._invoke=L(e,c,i),s}function h(e,t,c){try{return{type:"normal",arg:e.call(t,c)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u="suspendedStart",f="suspendedYield",v="executing",d="completed",m={};function p(){}function z(){}function g(){}var b={};o(b,s,(function(){return this}));var M=Object.getPrototypeOf,y=M&&M(M(E([])));y&&y!==c&&n.call(y,s)&&(b=y);var C=g.prototype=p.prototype=Object.create(b);function V(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function H(e,t){function c(r,s,i,a){var o=h(e[r],e,s);if("throw"!==o.type){var l=o.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){c("next",e,i,a)}),(function(e){c("throw",e,i,a)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return c("throw",e,i,a)}))}a(o.arg)}var r;function s(e,n){function s(){return new t((function(t,r){c(e,n,t,r)}))}return r=r?r.then(s,s):s()}this._invoke=s}function L(e,t,c){var n=u;return function(r,s){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===r)throw s;return O()}c.method=r,c.arg=s;while(1){var i=c.delegate;if(i){var a=w(i,c);if(a){if(a===m)continue;return a}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(n===u)throw n=d,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);n=v;var o=h(e,t,c);if("normal"===o.type){if(n=c.done?d:f,o.arg===m)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(n=d,c.method="throw",c.arg=o.arg)}}}function w(e,c){var n=e.iterator[c.method];if(n===t){if(c.delegate=null,"throw"===c.method){if(e.iterator["return"]&&(c.method="return",c.arg=t,w(e,c),"throw"===c.method))return m;c.method="throw",c.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=h(n,e.iterator,c.arg);if("throw"===r.type)return c.method="throw",c.arg=r.arg,c.delegate=null,m;var s=r.arg;return s?s.done?(c[e.resultName]=s.value,c.next=e.nextLoc,"return"!==c.method&&(c.method="next",c.arg=t),c.delegate=null,m):s:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function E(e){if(e){var c=e[s];if(c)return c.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function c(){while(++r<e.length)if(n.call(e,r))return c.value=e[r],c.done=!1,c;return c.value=t,c.done=!0,c};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return z.prototype=g,o(C,"constructor",g),o(g,"constructor",z),z.displayName=o(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===z||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,o(e,a,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},V(H.prototype),o(H.prototype,i,(function(){return this})),e.AsyncIterator=H,e.async=function(t,c,n,r,s){void 0===s&&(s=Promise);var i=new H(l(t,c,n,r),s);return e.isGeneratorFunction(c)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},V(C),o(C,a,"Generator"),o(C,s,(function(){return this})),o(C,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var c in e)t.push(c);return t.reverse(),function c(){while(t.length){var n=t.pop();if(n in e)return c.value=n,c.done=!1,c}return c.done=!0,c}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var c in this)"t"===c.charAt(0)&&n.call(this,c)&&!isNaN(+c.slice(1))&&(this[c]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var c=this;function r(n,r){return a.type="throw",a.arg=e,c.next=n,r&&(c.method="next",c.arg=t),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var o=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(o&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var c=this.tryEntries.length-1;c>=0;--c){var r=this.tryEntries[c];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=e,i.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var c=this.tryEntries[t];if(c.finallyLoc===e)return this.complete(c.completion,c.afterLoc),A(c),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var c=this.tryEntries[t];if(c.tryLoc===e){var n=c.completion;if("throw"===n.type){var r=n.arg;A(c)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,c,n){return this.delegate={iterator:E(e),resultName:c,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9a1f":function(e,t,c){var n=c("59ed"),r=c("825a"),s=c("35a1");e.exports=function(e,t){var c=arguments.length<2?s(e):t;if(n(c))return r(c.call(e));throw TypeError(String(e)+" is not iterable")}},"9ab4":function(e,t,c){"use strict";c.d(t,"d",(function(){return n})),c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return s})),c.d(t,"f",(function(){return i})),c.d(t,"c",(function(){return a})),c.d(t,"e",(function(){return o}));function n(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c}function r(e,t,c,n){function r(e){return e instanceof c?e:new c((function(t){t(e)}))}return new(c||(c=Promise))((function(c,s){function i(e){try{o(n.next(e))}catch(t){s(t)}}function a(e){try{o(n["throw"](e))}catch(t){s(t)}}function o(e){e.done?c(e.value):r(e.value).then(i,a)}o((n=n.apply(e,t||[])).next())}))}function s(e,t){var c,n,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return o([e,t])}}function o(s){if(c)throw new TypeError("Generator is already executing.");while(i)try{if(c=1,n&&(r=2&s[0]?n["return"]:s[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!(r=r.length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],n=0}finally{c=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function i(e){var t="function"===typeof Symbol&&Symbol.iterator,c=t&&e[t],n=0;if(c)return c.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var c="function"===typeof Symbol&&e[Symbol.iterator];if(!c)return e;var n,r,s=c.call(e),i=[];try{while((void 0===t||t-- >0)&&!(n=s.next()).done)i.push(n.value)}catch(a){r={error:a}}finally{try{n&&!n.done&&(c=s["return"])&&c.call(s)}finally{if(r)throw r.error}}return i}function o(e,t,c){if(c||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}Object.create},"9bf2":function(e,t,c){var n=c("83ab"),r=c("0cfb"),s=c("825a"),i=c("a04b"),a=Object.defineProperty;t.f=n?a:function(e,t,c){if(s(e),t=i(t),s(c),r)try{return a(e,t,c)}catch(n){}if("get"in c||"set"in c)throw TypeError("Accessors not supported");return"value"in c&&(e[t]=c.value),e}},"9ed3":function(e,t,c){"use strict";var n=c("ae93").IteratorPrototype,r=c("7c73"),s=c("5c6c"),i=c("d44e"),a=c("3f8c"),o=function(){return this};e.exports=function(e,t,c){var l=t+" Iterator";return e.prototype=r(n,{next:s(1,c)}),i(e,l,!1,!0),a[l]=o,e}},"9f7f":function(e,t,c){var n=c("d039"),r=c("da84"),s=r.RegExp;t.UNSUPPORTED_Y=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"9ff4":function(e,t,c){"use strict";(function(e){function n(e,t){const c=Object.create(null),n=e.split(",");for(let r=0;r<n.length;r++)c[n[r]]=!0;return t?e=>!!c[e.toLowerCase()]:e=>!!c[e]}c.d(t,"a",(function(){return H})),c.d(t,"b",(function(){return V})),c.d(t,"c",(function(){return w})),c.d(t,"d",(function(){return L})),c.d(t,"e",(function(){return Y})),c.d(t,"f",(function(){return ee})),c.d(t,"g",(function(){return re})),c.d(t,"h",(function(){return E})),c.d(t,"i",(function(){return ae})),c.d(t,"j",(function(){return ce})),c.d(t,"k",(function(){return T})),c.d(t,"l",(function(){return J})),c.d(t,"m",(function(){return o})),c.d(t,"n",(function(){return ne})),c.d(t,"o",(function(){return I})),c.d(t,"p",(function(){return N})),c.d(t,"q",(function(){return s})),c.d(t,"r",(function(){return p})),c.d(t,"s",(function(){return W})),c.d(t,"t",(function(){return x})),c.d(t,"u",(function(){return S})),c.d(t,"v",(function(){return F})),c.d(t,"w",(function(){return A})),c.d(t,"x",(function(){return $})),c.d(t,"y",(function(){return U})),c.d(t,"z",(function(){return K})),c.d(t,"A",(function(){return z})),c.d(t,"B",(function(){return j})),c.d(t,"C",(function(){return a})),c.d(t,"D",(function(){return P})),c.d(t,"E",(function(){return R})),c.d(t,"F",(function(){return b})),c.d(t,"G",(function(){return M})),c.d(t,"H",(function(){return n})),c.d(t,"I",(function(){return v})),c.d(t,"J",(function(){return l})),c.d(t,"K",(function(){return O})),c.d(t,"L",(function(){return y})),c.d(t,"M",(function(){return te})),c.d(t,"N",(function(){return se})),c.d(t,"O",(function(){return Z}));const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=n(r);const i="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=n(i);function o(e){return!!e||""===e}function l(e){if(I(e)){const t={};for(let c=0;c<e.length;c++){const n=e[c],r=P(n)?f(n):l(n);if(r)for(const e in r)t[e]=r[e]}return t}return P(e)||F(e)?e:void 0}const h=/;(?![^(]*\))/g,u=/:(.+)/;function f(e){const t={};return e.split(h).forEach(e=>{if(e){const c=e.split(u);c.length>1&&(t[c[0].trim()]=c[1].trim())}}),t}function v(e){let t="";if(P(e))t=e;else if(I(e))for(let c=0;c<e.length;c++){const n=v(e[c]);n&&(t+=n+" ")}else if(F(e))for(const c in e)e[c]&&(t+=c+" ");return t.trim()}const d="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",p=n(d),z=n(m);function g(e,t){if(e.length!==t.length)return!1;let c=!0;for(let n=0;c&&n<e.length;n++)c=b(e[n],t[n]);return c}function b(e,t){if(e===t)return!0;let c=D(e),n=D(t);if(c||n)return!(!c||!n)&&e.getTime()===t.getTime();if(c=I(e),n=I(t),c||n)return!(!c||!n)&&g(e,t);if(c=F(e),n=F(t),c||n){if(!c||!n)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const c in e){const n=e.hasOwnProperty(c),r=t.hasOwnProperty(c);if(n&&!r||!n&&r||!b(e[c],t[c]))return!1}}return String(e)===String(t)}function M(e,t){return e.findIndex(e=>b(e,t))}const y=e=>null==e?"":I(e)||F(e)&&(e.toString===q||!N(e.toString))?JSON.stringify(e,C,2):String(e),C=(e,t)=>t&&t.__v_isRef?C(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,c])=>(e[t+" =>"]=c,e),{})}:j(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||I(t)||$(t)?t:String(t),V={},H=[],L=()=>{},w=()=>!1,_=/^on[^a-z]/,A=e=>_.test(e),S=e=>e.startsWith("onUpdate:"),E=Object.assign,O=(e,t)=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)},k=Object.prototype.hasOwnProperty,T=(e,t)=>k.call(e,t),I=Array.isArray,x=e=>"[object Map]"===B(e),j=e=>"[object Set]"===B(e),D=e=>e instanceof Date,N=e=>"function"===typeof e,P=e=>"string"===typeof e,R=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,U=e=>F(e)&&N(e.then)&&N(e.catch),q=Object.prototype.toString,B=e=>q.call(e),Z=e=>B(e).slice(8,-1),$=e=>"[object Object]"===B(e),W=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=n(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return c=>{const n=t[c];return n||(t[c]=e(c))}},X=/-(\w)/g,Y=G(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,J=G(e=>e.replace(Q,"-$1").toLowerCase()),ee=G(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=G(e=>e?"on"+ee(e):""),ce=(e,t)=>!Object.is(e,t),ne=(e,t)=>{for(let c=0;c<e.length;c++)e[c](t)},re=(e,t,c)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:c})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const ae=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,c("c8ba"))},a04b:function(e,t,c){var n=c("c04e"),r=c("d9b5");e.exports=function(e){var t=n(e,"string");return r(t)?t:String(t)}},a15b:function(e,t,c){"use strict";var n=c("23e7"),r=c("44ad"),s=c("fc6a"),i=c("a640"),a=[].join,o=r!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(e){return a.call(s(this),void 0===e?",":e)}})},a306:function(e,t,c){"use strict";var n=c("7a23");function r(e){return-1!==[null,void 0,!1].indexOf(e)}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?a(Object(c),!0).forEach((function(t){l(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function l(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function h(e,t,c){var a=Object(n["F"])(e),h=a.options,u=a.mode,f=a.trackBy,v=a.limit,d=a.hideSelected,m=a.createTag,p=a.label,z=a.appendNewTag,g=a.multipleLabel,b=a.object,M=a.loading,y=a.delay,C=a.resolveOnLoad,V=a.minChars,H=a.filterResults,L=a.clearOnSearch,w=a.clearOnSelect,_=a.valueProp,A=a.canDeselect,S=a.max,E=a.strict,O=a.closeOnSelect,k=a.groups,T=(a.groupLabel,a.groupOptions),I=a.groupHideEmpty,x=a.groupSelect,j=c.iv,D=c.ev,N=c.search,P=c.clearSearch,R=c.update,F=c.pointer,U=c.clearPointer,q=c.blur,B=c.deactivate,Z=Object(n["z"])([]),$=Object(n["z"])([]),W=Object(n["z"])(!1),K=Object(n["b"])((function(){if(k.value){var e=$.value||[],t=[];return e.forEach((function(e){Me(e[T.value]).forEach((function(c){t.push(Object.assign({},c,e.disabled?{disabled:!0}:{}))}))})),t}var c=Me($.value||[]);return Z.value.length&&(c=c.concat(Z.value)),c})),G=Object(n["b"])((function(){return k.value?ge(($.value||[]).map((function(e){var t,c=Me(e[T.value]);return o(o({},e),{},(l(t={group:!0},T.value,be(c,!1).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),l(t,"__VISIBLE__",be(c).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),t))}))):[]})),X=Object(n["b"])((function(){var e=K.value;return te.value.length&&(e=te.value.concat(e)),e=be(e),v.value>0&&(e=e.slice(0,v.value)),e})),Y=Object(n["b"])((function(){switch(u.value){case"single":return!r(j.value[_.value]);case"multiple":case"tags":return!r(j.value)&&j.value.length>0}})),Q=Object(n["b"])((function(){return void 0!==g&&void 0!==g.value?g.value(j.value):j.value&&j.value.length>1?"".concat(j.value.length," options selected"):"1 option selected"})),J=Object(n["b"])((function(){return!K.value.length&&!W.value&&!te.value.length})),ee=Object(n["b"])((function(){return K.value.length>0&&0==X.value.length&&(N.value&&k.value||!k.value)})),te=Object(n["b"])((function(){var e;return!1!==m.value&&N.value?-1!==me(N.value)?[]:[(e={},l(e,_.value,N.value),l(e,p.value,N.value),l(e,f.value,N.value),e)]:[]})),ce=Object(n["b"])((function(){switch(u.value){case"single":return null;case"multiple":case"tags":return[]}})),ne=Object(n["b"])((function(){return M.value||W.value})),re=function(e){switch("object"!==i(e)&&(e=de(e)),u.value){case"single":R(e);break;case"multiple":case"tags":R(j.value.concat(e))}t.emit("select",ie(e),e)},se=function(e){switch("object"!==i(e)&&(e=de(e)),u.value){case"single":oe();break;case"tags":case"multiple":R(Array.isArray(e)?j.value.filter((function(t){return-1===e.map((function(e){return e[_.value]})).indexOf(t[_.value])})):j.value.filter((function(t){return t[_.value]!=e[_.value]})))}t.emit("deselect",ie(e),e)},ie=function(e){return b.value?e:e[_.value]},ae=function(e){se(e)},oe=function(){t.emit("clear"),R(ce.value)},le=function(e){if(void 0!==e.group)return"single"!==u.value&&ve(e[T.value])&&e[T.value].length;switch(u.value){case"single":return!r(j.value)&&j.value[_.value]==e[_.value];case"tags":case"multiple":return!r(j.value)&&-1!==j.value.map((function(e){return e[_.value]})).indexOf(e[_.value])}},he=function(e){return!0===e.disabled},ue=function(){return!(void 0===S||-1===S.value||!Y.value&&S.value>0)&&j.value.length>=S.value},fe=function(e){return void 0===e.find((function(e){return!le(e)&&!e.disabled}))},ve=function(e){return void 0===e.find((function(e){return!le(e)}))},de=function(e){return K.value[K.value.map((function(e){return String(e[_.value])})).indexOf(String(e))]},me=function(e){return K.value.map((function(e){return e[f.value]})).indexOf(e)},pe=function(e){return-1!==["tags","multiple"].indexOf(u.value)&&d.value&&le(e)},ze=function(e){Z.value.push(e)},ge=function(e){return I.value?e.filter((function(e){return N.value?e.__VISIBLE__.length:e[T.value].length})):e.filter((function(e){return!N.value||e.__VISIBLE__.length}))},be=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=e;return N.value&&H.value&&(c=c.filter((function(e){return-1!==s(e[f.value],E.value).indexOf(s(N.value,E.value))}))),d.value&&t&&(c=c.filter((function(e){return!pe(e)}))),c},Me=function(e){var t,c=e;return t=c,"[object Object]"===Object.prototype.toString.call(t)&&(c=Object.keys(c).map((function(e){var t,n=c[e];return l(t={},_.value,e),l(t,f.value,n),l(t,p.value,n),t}))),c=c.map((function(e){var t;return"object"===i(e)?e:(l(t={},_.value,e),l(t,f.value,e),l(t,p.value,e),t)}))},ye=function(){r(D.value)||(j.value=Ve(D.value))},Ce=function(e){W.value=!0,h.value(N.value).then((function(t){$.value=t,"function"==typeof e&&e(t),W.value=!1}))},Ve=function(e){return r(e)?"single"===u.value?{}:[]:b.value?e:"single"===u.value?de(e)||{}:e.filter((function(e){return!!de(e)})).map((function(e){return de(e)}))};if("single"!==u.value&&!r(D.value)&&!Array.isArray(D.value))throw new Error('v-model must be an array when using "'.concat(u.value,'" mode'));return h&&"function"==typeof h.value?C.value?Ce(ye):1==b.value&&ye():($.value=h.value,ye()),y.value>-1&&Object(n["I"])(N,(function(e){e.length<V.value||(W.value=!0,L.value&&($.value=[]),setTimeout((function(){e==N.value&&h.value(N.value).then((function(t){e==N.value&&($.value=t,F.value=X.value.filter((function(e){return!0!==e.disabled}))[0]||null,W.value=!1)}))}),y.value))}),{flush:"sync"}),Object(n["I"])(D,(function(e){var t,c,n;if(r(e))j.value=Ve(e);else switch(u.value){case"single":(b.value?e[_.value]!=j.value[_.value]:e!=j.value[_.value])&&(j.value=Ve(e));break;case"multiple":case"tags":t=b.value?e.map((function(e){return e[_.value]})):e,c=j.value.map((function(e){return e[_.value]})),n=c.slice().sort(),t.length===c.length&&t.slice().sort().every((function(e,t){return e===n[t]}))||(j.value=Ve(e))}}),{deep:!0}),"function"!=typeof e.options&&Object(n["I"])(h,(function(t,c){$.value=e.options,Object.keys(j.value).length||ye(),function(){if(Y.value)if("single"===u.value){var e=de(j.value[_.value])[p.value];j.value[p.value]=e,b.value&&(D.value[p.value]=e)}else j.value.forEach((function(e,t){var c=de(j.value[t][_.value])[p.value];j.value[t][p.value]=c,b.value&&(D.value[t][p.value]=c)}))}()})),{fo:X,filteredOptions:X,hasSelected:Y,multipleLabelText:Q,eo:K,extendedOptions:K,fg:G,filteredGroups:G,noOptions:J,noResults:ee,resolving:W,busy:ne,select:re,deselect:se,remove:ae,clear:oe,isSelected:le,isDisabled:he,isMax:ue,getOption:de,handleOptionClick:function(e){if(!he(e)){switch(u.value){case"single":if(le(e))return void(A.value&&se(e));q(),re(e);break;case"multiple":if(le(e))return void se(e);if(ue())return;re(e),w.value&&P(),d.value&&U(),O.value&&q();break;case"tags":if(le(e))return void se(e);if(ue())return;void 0===de(e[_.value])&&m.value&&(t.emit("tag",e[_.value]),z.value&&ze(e),P()),w.value&&P(),re(e),d.value&&U(),O.value&&q()}O.value&&B()}},handleGroupClick:function(e){if(!he(e)&&"single"!==u.value&&x.value){switch(u.value){case"multiple":case"tags":fe(e[T.value])?se(e[T.value]):re(e[T.value].filter((function(e){return-1===j.value.map((function(e){return e[_.value]})).indexOf(e[_.value])})).filter((function(e){return!e.disabled})).filter((function(e,t){return j.value.length+1+t<=S.value||-1===S.value})))}O.value&&B()}},handleTagRemove:function(e,t){0===t.button?ae(e):t.preventDefault()},refreshOptions:function(e){Ce(e)},resolveOptions:Ce}}function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function v(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function p(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function z(e,t,c){var r=Object(n["F"])(e),s=r.disabled,i=r.openDirection,a=r.showOptions,o=c.isOpen,l=c.isPointed,h=c.isSelected,u=c.isDisabled,f=c.isActive,v=c.canPointGroups,d=c.resolving,z=c.fo,g=function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){p(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},r.classes.value),b=Object(n["b"])((function(){return!!(o.value&&a.value&&(!d.value||d.value&&z.value.length))}));return{classList:Object(n["b"])((function(){return{container:[g.container].concat(s.value?g.containerDisabled:[]).concat(b.value&&"top"===i.value?g.containerOpenTop:[]).concat(b.value&&"top"!==i.value?g.containerOpen:[]).concat(f.value?g.containerActive:[]),spacer:g.spacer,singleLabel:g.singleLabel,multipleLabel:g.multipleLabel,search:g.search,tags:g.tags,tag:[g.tag].concat(s.value?g.tagDisabled:[]),tagRemove:g.tagRemove,tagRemoveIcon:g.tagRemoveIcon,tagsSearchWrapper:g.tagsSearchWrapper,tagsSearch:g.tagsSearch,tagsSearchCopy:g.tagsSearchCopy,placeholder:g.placeholder,caret:[g.caret].concat(o.value?g.caretOpen:[]),clear:g.clear,clearIcon:g.clearIcon,spinner:g.spinner,dropdown:[g.dropdown].concat("top"===i.value?g.dropdownTop:[]).concat(o.value&&a.value&&b.value?[]:g.dropdownHidden),options:[g.options].concat("top"===i.value?g.optionsTop:[]),group:g.group,groupLabel:function(e){var t=[g.groupLabel];return l(e)?t.push(h(e)?g.groupLabelSelectedPointed:g.groupLabelPointed):h(e)&&v.value?t.push(u(e)?g.groupLabelSelectedDisabled:g.groupLabelSelected):u(e)&&t.push(g.groupLabelDisabled),v.value&&t.push(g.groupLabelPointable),t},groupOptions:g.groupOptions,option:function(e,t){var c=[g.option];return l(e)?c.push(h(e)?g.optionSelectedPointed:g.optionPointed):h(e)?c.push(u(e)?g.optionSelectedDisabled:g.optionSelected):(u(e)||t&&u(t))&&c.push(g.optionDisabled),c},noOptions:g.noOptions,noResults:g.noResults,fakeInput:g.fakeInput}})),showDropdown:b}}var g={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"}},setup(e,t){const c=function(e,t){var c=Object(n["F"])(e),r=c.value,s=c.modelValue,i=c.mode,a=c.valueProp,o=Object(n["z"])("single"!==i.value?[]:{}),l=void 0!==t.expose?s:r,h=Object(n["b"])((function(){return"single"===i.value?o.value[a.value]:o.value.map((function(e){return e[a.value]}))})),u=Object(n["b"])((function(){return"single"!==i.value?o.value.map((function(e){return e[a.value]})).join(","):o.value[a.value]}));return{iv:o,internalValue:o,ev:l,externalValue:l,textValue:u,plainValue:h}}(e,t),s=function(e,t,c){var r=Object(n["F"])(e),s=r.groupSelect,i=r.mode,a=r.groups,o=Object(n["z"])(null),l=function(e){void 0===e||null!==e&&e.disabled||a.value&&e&&e.group&&("single"===i.value||!s.value)||(o.value=e)};return{pointer:o,setPointer:l,clearPointer:function(){l(null)}}}(e),i=function(e,t,c){var r=Object(n["F"])(e).disabled,s=Object(n["z"])(!1);return{isOpen:s,open:function(){s.value||r.value||(s.value=!0,t.emit("open"))},close:function(){s.value&&(s.value=!1,t.emit("close"))}}}(e,t),a=function(e,t,c){var r=Object(n["z"])(null),s=Object(n["z"])(null);return Object(n["I"])(r,(function(e){t.emit("search-change",e)})),{search:r,input:s,clearSearch:function(){r.value=""},handleSearchInput:function(e){r.value=e.target.value},handlePaste:function(e){t.emit("paste",e)}}}(0,t),o=function(e,t,c){var s=Object(n["F"])(e),i=s.object,a=s.valueProp,o=s.mode,l=c.iv,h=function(e){return i.value||r(e)?e:Array.isArray(e)?e.map((function(e){return e[a.value]})):e[a.value]},u=function(e){return r(e)?"single"===o.value?{}:[]:e};return{update:function(e){l.value=u(e);var c=h(e);t.emit("change",c),t.emit("input",c),t.emit("update:modelValue",c)}}}(e,t,{iv:c.iv}),l=function(e,t,c){var r=Object(n["F"])(e),s=r.searchable,i=r.disabled,a=c.input,o=c.open,l=c.close,h=c.clearSearch,u=Object(n["z"])(null),f=Object(n["z"])(!1),v=Object(n["b"])((function(){return s.value||i.value?-1:0})),d=function(){s.value&&a.value.blur(),u.value.blur()},m=function(){f.value=!1,setTimeout((function(){f.value||(l(),h())}),1)};return{multiselect:u,tabindex:v,isActive:f,blur:d,handleFocus:function(){s.value&&!i.value&&a.value.focus()},activate:function(){i.value||(f.value=!0,o())},deactivate:m,handleCaretClick:function(){m(),d()}}}(e,0,{input:a.input,open:i.open,close:i.close,clearSearch:a.clearSearch}),f=h(e,t,{ev:c.ev,iv:c.iv,search:a.search,clearSearch:a.clearSearch,update:o.update,pointer:s.pointer,clearPointer:s.clearPointer,blur:l.blur,deactivate:l.deactivate}),d=function(e,t,c){var r=Object(n["F"])(e),s=r.valueProp,i=r.showOptions,a=r.searchable,o=r.groupLabel,l=r.groups,h=r.mode,f=r.groupSelect,v=c.fo,d=c.fg,m=c.handleOptionClick,p=c.handleGroupClick,z=c.search,g=c.pointer,b=c.setPointer,M=c.clearPointer,y=c.multiselect,C=Object(n["b"])((function(){return v.value.filter((function(e){return!e.disabled}))})),V=Object(n["b"])((function(){return d.value.filter((function(e){return!e.disabled}))})),H=Object(n["b"])((function(){return"single"!==h.value&&f.value})),L=Object(n["b"])((function(){return g.value&&g.value.group})),w=Object(n["b"])((function(){return j(g.value)})),_=Object(n["b"])((function(){var e=L.value?g.value:j(g.value),t=V.value.map((function(e){return e[o.value]})).indexOf(e[o.value]),c=V.value[t-1];return void 0===c&&(c=S.value),c})),A=Object(n["b"])((function(){var e=V.value.map((function(e){return e.label})).indexOf(L.value?g.value[o.value]:j(g.value)[o.value])+1;return V.value.length<=e&&(e=0),V.value[e]})),S=Object(n["b"])((function(){return u(V.value).slice(-1)[0]})),E=Object(n["b"])((function(){return g.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),O=Object(n["b"])((function(){var e=w.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[s.value]})).indexOf(g.value[s.value])-1]})),k=Object(n["b"])((function(){var e=j(g.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[s.value]})).indexOf(g.value[s.value])+1]})),T=Object(n["b"])((function(){return u(_.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),I=Object(n["b"])((function(){return u(S.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),x=function(){b(C.value[0]||null)},j=function(e){return V.value.find((function(t){return-1!==t.__VISIBLE__.map((function(e){return e[s.value]})).indexOf(e[s.value])}))},D=function(){var e=y.value.querySelector("[data-pointed]");if(e){var t=e.parentElement.parentElement;l.value&&(t=L.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return Object(n["I"])(z,(function(e){a.value&&(e.length&&i.value?x():M())})),{pointer:g,canPointGroups:H,isPointed:function(e){return!(!g.value||!(!e.group&&g.value[s.value]==e[s.value]||void 0!==e.group&&g.value[o.value]==e[o.value]))||void 0},setPointerFirst:x,selectPointer:function(){g.value&&!0!==g.value.disabled&&(L.value?p(g.value):m(g.value))},forwardPointer:function(){if(null===g.value)b((l.value&&H.value?V.value[0]:C.value[0])||null);else if(l.value&&H.value){var e=L.value?E.value:k.value;void 0===e&&(e=A.value),b(e||null)}else{var t=C.value.map((function(e){return e[s.value]})).indexOf(g.value[s.value])+1;C.value.length<=t&&(t=0),b(C.value[t]||null)}Object(n["o"])((function(){D()}))},backwardPointer:function(){if(null===g.value){var e=C.value[C.value.length-1];l.value&&H.value&&void 0===(e=I.value)&&(e=S.value),b(e||null)}else if(l.value&&H.value){var t=L.value?T.value:O.value;void 0===t&&(t=L.value?_.value:w.value),b(t||null)}else{var c=C.value.map((function(e){return e[s.value]})).indexOf(g.value[s.value])-1;c<0&&(c=C.value.length-1),b(C.value[c]||null)}Object(n["o"])((function(){D()}))}}}(e,0,{fo:f.fo,fg:f.fg,handleOptionClick:f.handleOptionClick,handleGroupClick:f.handleGroupClick,search:a.search,pointer:s.pointer,setPointer:s.setPointer,clearPointer:s.clearPointer,multiselect:l.multiselect}),m=function(e,t,c){var r=Object(n["F"])(e),s=r.mode,i=r.addTagOn,a=r.createTag,o=r.openDirection,l=r.searchable,h=r.showOptions,u=r.valueProp,f=r.groups,d=c.iv,m=c.update,p=c.search,z=c.setPointer,g=c.selectPointer,b=c.backwardPointer,M=c.forwardPointer,y=c.blur,C=c.fo,V=function(){"tags"===s.value&&!h.value&&a.value&&l.value&&!f.value&&z(C.value[C.value.map((function(e){return e[u.value]})).indexOf(p.value)])};return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===s.value)return;if(l.value&&-1===[null,""].indexOf(p.value))return;if(0===d.value.length)return;m(v(d.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===s.value&&-1===i.value.indexOf("enter")&&a.value)return;V(),g();break;case 32:if(l.value&&"tags"!==s.value&&!a.value)return;if("tags"===s.value&&(-1===i.value.indexOf("space")&&a.value||!a.value))return;e.preventDefault(),V(),g();break;case 9:case 186:case 188:if("tags"!==s.value)return;if(-1===i.value.indexOf({9:"tab",186:";",188:","}[e.keyCode])||!a.value)return;V(),g(),e.preventDefault();break;case 27:y();break;case 38:if(e.preventDefault(),!h.value)return;"top"===o.value?M():b();break;case 40:if(e.preventDefault(),!h.value)return;"top"===o.value?b():M()}},preparePointer:V}}(e,0,{iv:c.iv,update:o.update,search:a.search,setPointer:s.setPointer,selectPointer:d.selectPointer,backwardPointer:d.backwardPointer,forwardPointer:d.forwardPointer,blur:l.blur,fo:f.fo}),p=z(e,0,{isOpen:i.isOpen,isPointed:d.isPointed,canPointGroups:d.canPointGroups,isSelected:f.isSelected,isDisabled:f.isDisabled,isActive:l.isActive,resolving:f.resolving,fo:f.fo});return{...c,...i,...l,...s,...o,...a,...f,...d,...m,...p}},render:function(e,t,c,r,s,i){return Object(n["u"])(),Object(n["d"])("div",{ref:"multiselect",tabindex:e.tabindex,class:e.classList.container,id:c.id,onFocusin:t[7]||(t[7]=(...t)=>e.activate&&e.activate(...t)),onFocusout:t[8]||(t[8]=(...t)=>e.deactivate&&e.deactivate(...t)),onKeydown:t[9]||(t[9]=(...t)=>e.handleKeydown&&e.handleKeydown(...t)),onFocus:t[10]||(t[10]=(...t)=>e.handleFocus&&e.handleFocus(...t))},[Object(n["e"])(" Search "),"tags"!==c.mode&&c.searchable&&!c.disabled?(Object(n["u"])(),Object(n["d"])("input",{key:0,type:c.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:c.autocomplete,onInput:t[1]||(t[1]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onPaste:t[2]||(t[2]=Object(n["K"])((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input"},null,42,["type","modelValue","value","autocomplete"])):Object(n["e"])("v-if",!0),Object(n["e"])(" Tags (with search) "),"tags"==c.mode?(Object(n["u"])(),Object(n["d"])("div",{key:1,class:e.classList.tags},[(Object(n["u"])(!0),Object(n["d"])(n["a"],null,Object(n["A"])(e.iv,(t,r,s)=>Object(n["B"])(e.$slots,"tag",{option:t,handleTagRemove:e.handleTagRemove,disabled:c.disabled},()=>[(Object(n["u"])(),Object(n["d"])("span",{class:e.classList.tag,key:s},[Object(n["i"])(Object(n["E"])(t[c.label])+" ",1),c.disabled?Object(n["e"])("v-if",!0):(Object(n["u"])(),Object(n["d"])("span",{key:0,class:e.classList.tagRemove,onMousedown:Object(n["K"])(c=>e.handleTagRemove(t,c),["prevent"])},[Object(n["j"])("span",{class:e.classList.tagRemoveIcon},null,2)],42,["onMousedown"]))],2))])),256)),Object(n["j"])("div",{class:e.classList.tagsSearchWrapper},[Object(n["e"])(" Used for measuring search width "),Object(n["j"])("span",{class:e.classList.tagsSearchCopy},Object(n["E"])(e.search),3),Object(n["e"])(" Actual search input "),c.searchable&&!c.disabled?(Object(n["u"])(),Object(n["d"])("input",{key:0,type:c.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,autocomplete:c.autocomplete,onInput:t[3]||(t[3]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onPaste:t[4]||(t[4]=Object(n["K"])((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input"},null,42,["type","modelValue","value","autocomplete"])):Object(n["e"])("v-if",!0)],2)],2)):Object(n["e"])("v-if",!0),Object(n["e"])(" Single label "),"single"==c.mode&&e.hasSelected&&!e.search&&e.iv?Object(n["B"])(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[Object(n["j"])("div",{class:e.classList.singleLabel},Object(n["E"])(e.iv[c.label]),3)]):Object(n["e"])("v-if",!0),Object(n["e"])(" Multiple label "),"multiple"==c.mode&&e.hasSelected&&!e.search?Object(n["B"])(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[Object(n["j"])("div",{class:e.classList.multipleLabel},Object(n["E"])(e.multipleLabelText),3)]):Object(n["e"])("v-if",!0),Object(n["e"])(" Placeholder "),!c.placeholder||e.hasSelected||e.search?Object(n["e"])("v-if",!0):Object(n["B"])(e.$slots,"placeholder",{key:4},()=>[Object(n["j"])("div",{class:e.classList.placeholder},Object(n["E"])(c.placeholder),3)]),Object(n["e"])(" Spinner "),e.busy?Object(n["B"])(e.$slots,"spinner",{key:5},()=>[Object(n["j"])("span",{class:e.classList.spinner},null,2)]):Object(n["e"])("v-if",!0),Object(n["e"])(" Clear "),e.hasSelected&&!c.disabled&&c.canClear&&!e.busy?Object(n["B"])(e.$slots,"clear",{key:6,clear:e.clear},()=>[Object(n["j"])("span",{class:e.classList.clear,onMousedown:t[5]||(t[5]=(...t)=>e.clear&&e.clear(...t))},[Object(n["j"])("span",{class:e.classList.clearIcon},null,2)],34)]):Object(n["e"])("v-if",!0),Object(n["e"])(" Caret "),c.caret?Object(n["B"])(e.$slots,"caret",{key:7},()=>[Object(n["j"])("span",{class:e.classList.caret,onClick:t[6]||(t[6]=(...t)=>e.handleCaretClick&&e.handleCaretClick(...t))},null,2)]):Object(n["e"])("v-if",!0),Object(n["e"])(" Options "),Object(n["j"])("div",{class:e.classList.dropdown,tabindex:"-1"},[Object(n["B"])(e.$slots,"beforelist",{options:e.fo}),Object(n["j"])("ul",{class:e.classList.options},[c.groups?(Object(n["u"])(!0),Object(n["d"])(n["a"],{key:0},Object(n["A"])(e.fg,(t,r,s)=>(Object(n["u"])(),Object(n["d"])("li",{class:e.classList.group,key:s},[Object(n["j"])("div",{class:e.classList.groupLabel(t),"data-pointed":e.isPointed(t),onMouseenter:c=>e.setPointer(t),onClick:c=>e.handleGroupClick(t)},[Object(n["B"])(e.$slots,"grouplabel",{group:t},()=>[Object(n["j"])("span",null,Object(n["E"])(t[c.groupLabel]),1)])],42,["data-pointed","onMouseenter","onClick"]),Object(n["j"])("ul",{class:e.classList.groupOptions},[(Object(n["u"])(!0),Object(n["d"])(n["a"],null,Object(n["A"])(t.__VISIBLE__,(r,s,i)=>(Object(n["u"])(),Object(n["d"])("li",{class:e.classList.option(r,t),key:i,"data-pointed":e.isPointed(r),onMouseenter:t=>e.setPointer(r),onClick:t=>e.handleOptionClick(r)},[Object(n["B"])(e.$slots,"option",{option:r,search:e.search},()=>[Object(n["j"])("span",null,Object(n["E"])(r[c.label]),1)])],42,["data-pointed","onMouseenter","onClick"]))),128))],2)],2))),128)):(Object(n["u"])(!0),Object(n["d"])(n["a"],{key:1},Object(n["A"])(e.fo,(t,r,s)=>(Object(n["u"])(),Object(n["d"])("li",{class:e.classList.option(t),key:s,"data-pointed":e.isPointed(t),onMouseenter:c=>e.setPointer(t),onClick:c=>e.handleOptionClick(t)},[Object(n["B"])(e.$slots,"option",{option:t,search:e.search},()=>[Object(n["j"])("span",null,Object(n["E"])(t[c.label]),1)])],42,["data-pointed","onMouseenter","onClick"]))),128))],2),e.noOptions?Object(n["B"])(e.$slots,"nooptions",{key:0},()=>[Object(n["j"])("div",{class:e.classList.noOptions,innerHTML:c.noOptionsText},null,10,["innerHTML"])]):Object(n["e"])("v-if",!0),e.noResults?Object(n["B"])(e.$slots,"noresults",{key:1},()=>[Object(n["j"])("div",{class:e.classList.noResults,innerHTML:c.noResultsText},null,10,["innerHTML"])]):Object(n["e"])("v-if",!0),Object(n["B"])(e.$slots,"afterlist",{options:e.fo})],2),Object(n["e"])(" Hacky input element to show HTML5 required warning "),c.required?(Object(n["u"])(),Object(n["d"])("input",{key:8,class:e.classList.fakeInput,tabindex:"-1",value:e.textValue,required:""},null,10,["value"])):Object(n["e"])("v-if",!0),Object(n["e"])(" Native input support "),c.nativeSupport?(Object(n["u"])(),Object(n["d"])(n["a"],{key:9},["single"==c.mode?(Object(n["u"])(),Object(n["d"])("input",{key:0,type:"hidden",name:c.name,value:void 0!==e.plainValue?e.plainValue:""},null,8,["name","value"])):(Object(n["u"])(!0),Object(n["d"])(n["a"],{key:1},Object(n["A"])(e.plainValue,(e,t)=>(Object(n["u"])(),Object(n["d"])("input",{type:"hidden",name:c.name+"[]",value:e,key:t},null,8,["name","value"]))),128))],64)):Object(n["e"])("v-if",!0),Object(n["e"])(" Create height for empty input "),Object(n["j"])("div",{class:e.classList.spacer},null,2)],42,["tabindex","id"])},__file:"src/Multiselect.vue"};t["a"]=g},a4b4:function(e,t,c){var n=c("342f");e.exports=/web0s(?!.*chrome)/i.test(n)},a4d3:function(e,t,c){"use strict";var n=c("23e7"),r=c("da84"),s=c("d066"),i=c("c430"),a=c("83ab"),o=c("4930"),l=c("d039"),h=c("1a2d"),u=c("e8b5"),f=c("1626"),v=c("861d"),d=c("d9b5"),m=c("825a"),p=c("7b0b"),z=c("fc6a"),g=c("a04b"),b=c("577e"),M=c("5c6c"),y=c("7c73"),C=c("df75"),V=c("241c"),H=c("057f"),L=c("7418"),w=c("06cf"),_=c("9bf2"),A=c("d1e7"),S=c("6eeb"),E=c("5692"),O=c("f772"),k=c("d012"),T=c("90e3"),I=c("b622"),x=c("e538"),j=c("746f"),D=c("d44e"),N=c("69f3"),P=c("b727").forEach,R=O("hidden"),F="Symbol",U="prototype",q=I("toPrimitive"),B=N.set,Z=N.getterFor(F),$=Object[U],W=r.Symbol,K=s("JSON","stringify"),G=w.f,X=_.f,Y=H.f,Q=A.f,J=E("symbols"),ee=E("op-symbols"),te=E("string-to-symbol-registry"),ce=E("symbol-to-string-registry"),ne=E("wks"),re=r.QObject,se=!re||!re[U]||!re[U].findChild,ie=a&&l((function(){return 7!=y(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(e,t,c){var n=G($,t);n&&delete $[t],X(e,t,c),n&&e!==$&&X($,t,n)}:X,ae=function(e,t){var c=J[e]=y(W[U]);return B(c,{type:F,tag:e,description:t}),a||(c.description=t),c},oe=function(e,t,c){e===$&&oe(ee,t,c),m(e);var n=g(t);return m(c),h(J,n)?(c.enumerable?(h(e,R)&&e[R][n]&&(e[R][n]=!1),c=y(c,{enumerable:M(0,!1)})):(h(e,R)||X(e,R,M(1,{})),e[R][n]=!0),ie(e,n,c)):X(e,n,c)},le=function(e,t){m(e);var c=z(t),n=C(c).concat(de(c));return P(n,(function(t){a&&!ue.call(c,t)||oe(e,t,c[t])})),e},he=function(e,t){return void 0===t?y(e):le(y(e),t)},ue=function(e){var t=g(e),c=Q.call(this,t);return!(this===$&&h(J,t)&&!h(ee,t))&&(!(c||!h(this,t)||!h(J,t)||h(this,R)&&this[R][t])||c)},fe=function(e,t){var c=z(e),n=g(t);if(c!==$||!h(J,n)||h(ee,n)){var r=G(c,n);return!r||!h(J,n)||h(c,R)&&c[R][n]||(r.enumerable=!0),r}},ve=function(e){var t=Y(z(e)),c=[];return P(t,(function(e){h(J,e)||h(k,e)||c.push(e)})),c},de=function(e){var t=e===$,c=Y(t?ee:z(e)),n=[];return P(c,(function(e){!h(J,e)||t&&!h($,e)||n.push(J[e])})),n};if(o||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,t=T(e),c=function(e){this===$&&c.call(ee,e),h(this,R)&&h(this[R],t)&&(this[R][t]=!1),ie(this,t,M(1,e))};return a&&se&&ie($,t,{configurable:!0,set:c}),ae(t,e)},S(W[U],"toString",(function(){return Z(this).tag})),S(W,"withoutSetter",(function(e){return ae(T(e),e)})),A.f=ue,_.f=oe,w.f=fe,V.f=H.f=ve,L.f=de,x.f=function(e){return ae(I(e),e)},a&&(X(W[U],"description",{configurable:!0,get:function(){return Z(this).description}}),i||S($,"propertyIsEnumerable",ue,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:W}),P(C(ne),(function(e){j(e)})),n({target:F,stat:!0,forced:!o},{for:function(e){var t=b(e);if(h(te,t))return te[t];var c=W(t);return te[t]=c,ce[c]=t,c},keyFor:function(e){if(!d(e))throw TypeError(e+" is not a symbol");if(h(ce,e))return ce[e]},useSetter:function(){se=!0},useSimple:function(){se=!1}}),n({target:"Object",stat:!0,forced:!o,sham:!a},{create:he,defineProperty:oe,defineProperties:le,getOwnPropertyDescriptor:fe}),n({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:ve,getOwnPropertySymbols:de}),n({target:"Object",stat:!0,forced:l((function(){L.f(1)}))},{getOwnPropertySymbols:function(e){return L.f(p(e))}}),K){var me=!o||l((function(){var e=W();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}));n({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,c){var n,r=[e],s=1;while(arguments.length>s)r.push(arguments[s++]);if(n=t,(v(t)||void 0!==e)&&!d(e))return u(t)||(t=function(e,t){if(f(n)&&(t=n.call(this,e,t)),!d(t))return t}),r[1]=t,K.apply(null,r)}})}if(!W[U][q]){var pe=W[U].valueOf;S(W[U],q,(function(){return pe.apply(this,arguments)}))}D(W,F),k[R]=!0},a640:function(e,t,c){"use strict";var n=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&n((function(){c.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,c){"use strict";var n=c("23e7"),r=c("c430"),s=c("fea9"),i=c("d039"),a=c("d066"),o=c("1626"),l=c("4840"),h=c("cdf9"),u=c("6eeb"),f=!!s&&i((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(n({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=l(this,a("Promise")),c=o(e);return this.then(c?function(c){return h(t,e()).then((function(){return c}))}:e,c?function(c){return h(t,e()).then((function(){throw c}))}:e)}}),!r&&o(s)){var v=a("Promise").prototype["finally"];s.prototype["finally"]!==v&&u(s.prototype,"finally",v,{unsafe:!0})}},ab13:function(e,t,c){var n=c("b622"),r=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(n){}}return!1}},abc5:function(e,t,c){"use strict";(function(e){function n(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,c("c8ba"))},ac1f:function(e,t,c){"use strict";var n=c("23e7"),r=c("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,c){"use strict";var n=c("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,c){"use strict";var n,r,s,i=c("d039"),a=c("1626"),o=c("7c73"),l=c("e163"),h=c("6eeb"),u=c("b622"),f=c("c430"),v=u("iterator"),d=!1;[].keys&&(s=[].keys(),"next"in s?(r=l(l(s)),r!==Object.prototype&&(n=r)):d=!0);var m=void 0==n||i((function(){var e={};return n[v].call(e)!==e}));m?n={}:f&&(n=o(n)),a(n[v])||h(n,v,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},b041:function(e,t,c){"use strict";var n=c("00ee"),r=c("f5df");e.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}},b0c0:function(e,t,c){var n=c("83ab"),r=c("5e77").EXISTS,s=c("9bf2").f,i=Function.prototype,a=i.toString,o=/^\s*function ([^ (]*)/,l="name";n&&!r&&s(i,l,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(e){return""}}})},b575:function(e,t,c){var n,r,s,i,a,o,l,h,u=c("da84"),f=c("06cf").f,v=c("2cf4").set,d=c("1cdc"),m=c("d4c3"),p=c("a4b4"),z=c("605d"),g=u.MutationObserver||u.WebKitMutationObserver,b=u.document,M=u.process,y=u.Promise,C=f(u,"queueMicrotask"),V=C&&C.value;V||(n=function(){var e,t;z&&(e=M.domain)&&e.exit();while(r){t=r.fn,r=r.next;try{t()}catch(c){throw r?i():s=void 0,c}}s=void 0,e&&e.enter()},d||z||p||!g||!b?!m&&y&&y.resolve?(l=y.resolve(void 0),l.constructor=y,h=l.then,i=function(){h.call(l,n)}):i=z?function(){M.nextTick(n)}:function(){v.call(u,n)}:(a=!0,o=b.createTextNode(""),new g(n).observe(o,{characterData:!0}),i=function(){o.data=a=!a})),e.exports=V||function(e){var t={fn:e,next:void 0};s&&(s.next=t),r||(r=t,i()),s=t}},b622:function(e,t,c){var n=c("da84"),r=c("5692"),s=c("1a2d"),i=c("90e3"),a=c("4930"),o=c("fdbf"),l=r("wks"),h=n.Symbol,u=o?h:h&&h.withoutSetter||i;e.exports=function(e){return s(l,e)&&(a||"string"==typeof l[e])||(a&&s(h,e)?l[e]=h[e]:l[e]=u("Symbol."+e)),l[e]}},b64b:function(e,t,c){var n=c("23e7"),r=c("7b0b"),s=c("df75"),i=c("d039"),a=i((function(){s(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(e){return s(r(e))}})},b727:function(e,t,c){var n=c("0366"),r=c("44ad"),s=c("7b0b"),i=c("07fa"),a=c("65f0"),o=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,h=4==e,u=6==e,f=7==e,v=5==e||u;return function(d,m,p,z){for(var g,b,M=s(d),y=r(M),C=n(m,p,3),V=i(y),H=0,L=z||a,w=t?L(d,V):c||f?L(d,0):void 0;V>H;H++)if((v||H in y)&&(g=y[H],b=C(g,H,M),e))if(t)w[H]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return H;case 2:o.call(w,g)}else switch(e){case 4:return!1;case 7:o.call(w,g)}return u?-1:l||h?h:w}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return r}));const n="devtools-plugin:setup",r="plugin:settings:set"},c04e:function(e,t,c){var n=c("861d"),r=c("d9b5"),s=c("dc4a"),i=c("485a"),a=c("b622"),o=a("toPrimitive");e.exports=function(e,t){if(!n(e)||r(e))return e;var c,a=s(e,o);if(a){if(void 0===t&&(t="default"),c=a.call(e,t),!n(c)||r(c))return c;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var c={}.toString;e.exports=function(e){return c.call(e).slice(8,-1)}},c6cd:function(e,t,c){var n=c("da84"),r=c("ce4e"),s="__core-js_shared__",i=n[s]||r(s,{});e.exports=i},c8ba:function(e,t){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(n){"object"===typeof window&&(c=window)}e.exports=c},ca84:function(e,t,c){var n=c("1a2d"),r=c("fc6a"),s=c("4d64").indexOf,i=c("d012");e.exports=function(e,t){var c,a=r(e),o=0,l=[];for(c in a)!n(i,c)&&n(a,c)&&l.push(c);while(t.length>o)n(a,c=t[o++])&&(~s(l,c)||l.push(c));return l}},caad:function(e,t,c){"use strict";var n=c("23e7"),r=c("4d64").includes,s=c("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cc12:function(e,t,c){var n=c("da84"),r=c("861d"),s=n.document,i=r(s)&&r(s.createElement);e.exports=function(e){return i?s.createElement(e):{}}},cca6:function(e,t,c){var n=c("23e7"),r=c("60da");n({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(e,t,c){var n=c("825a"),r=c("861d"),s=c("f069");e.exports=function(e,t){if(n(e),r(t)&&t.constructor===e)return t;var c=s.f(e),i=c.resolve;return i(t),c.promise}},ce4e:function(e,t,c){var n=c("da84");e.exports=function(e,t){try{Object.defineProperty(n,e,{value:t,configurable:!0,writable:!0})}catch(c){n[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,c){var n=c("da84"),r=c("1626"),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(n[e]):n[e]&&n[e][t]}},d1e7:function(e,t,c){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},d2bb:function(e,t,c){var n=c("825a"),r=c("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,c={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(c,[]),t=c instanceof Array}catch(s){}return function(c,s){return n(c),r(s),t?e.call(c,s):c.__proto__=s,c}}():void 0)},d3b7:function(e,t,c){var n=c("00ee"),r=c("6eeb"),s=c("b041");n||r(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,c){var n=c("9bf2").f,r=c("1a2d"),s=c("b622"),i=s("toStringTag");e.exports=function(e,t,c){e&&!r(e=c?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},d4c3:function(e,t,c){var n=c("342f"),r=c("da84");e.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==r.Pebble},d742:function(e,t,c){"use strict";c("8c16")},d784:function(e,t,c){"use strict";c("ac1f");var n=c("6eeb"),r=c("9263"),s=c("d039"),i=c("b622"),a=c("9112"),o=i("species"),l=RegExp.prototype;e.exports=function(e,t,c,h){var u=i(e),f=!s((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),v=f&&!s((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[o]=function(){return c},c.flags="",c[u]=/./[u]),c.exec=function(){return t=!0,null},c[u](""),!t}));if(!f||!v||c){var d=/./[u],m=t(u,""[e],(function(e,t,c,n,s){var i=t.exec;return i===r||i===l.exec?f&&!s?{done:!0,value:d.call(t,c,n)}:{done:!0,value:e.call(c,t,n)}:{done:!1}}));n(String.prototype,e,m[0]),n(l,u,m[1])}h&&a(l[u],"sham",!0)}},d81d:function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").map,s=c("1dde"),i=s("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(e,t,c){var n=c("1626"),r=c("d066"),s=c("fdbf");e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return n(t)&&Object(e)instanceof t}},da84:function(e,t,c){(function(t){var c=function(e){return e&&e.Math==Math&&e};e.exports=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,c("c8ba"))},dbb4:function(e,t,c){var n=c("23e7"),r=c("83ab"),s=c("56ef"),i=c("fc6a"),a=c("06cf"),o=c("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,c,n=i(e),r=a.f,l=s(n),h={},u=0;while(l.length>u)c=r(n,t=l[u++]),void 0!==c&&o(h,t,c);return h}})},dc4a:function(e,t,c){var n=c("59ed");e.exports=function(e,t){var c=e[t];return null==c?void 0:n(c)}},df75:function(e,t,c){var n=c("ca84"),r=c("7839");e.exports=Object.keys||function(e){return n(e,r)}},df7c:function(e,t,c){(function(e){function c(e,t){for(var c=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),c++):c&&(e.splice(n,1),c--)}if(t)for(;c--;c)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var t,c=0,n=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){c=t+1;break}}else-1===n&&(r=!1,n=t+1);return-1===n?"":e.slice(c,n)}function r(e,t){if(e.filter)return e.filter(t);for(var c=[],n=0;n<e.length;n++)t(e[n],n,e)&&c.push(e[n]);return c}t.resolve=function(){for(var t="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return t=c(r(t.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),i="/"===s(e,-1);return e=c(r(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&i&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,c){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var c=e.length-1;c>=0;c--)if(""!==e[c])break;return t>c?[]:e.slice(t,c-t+1)}e=t.resolve(e).substr(1),c=t.resolve(c).substr(1);for(var r=n(e.split("/")),s=n(c.split("/")),i=Math.min(r.length,s.length),a=i,o=0;o<i;o++)if(r[o]!==s[o]){a=o;break}var l=[];for(o=a;o<r.length;o++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),c=47===t,n=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){n=s;break}}else r=!1;return-1===n?c?"/":".":c&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var c=n(e);return t&&c.substr(-1*t.length)===t&&(c=c.substr(0,c.length-t.length)),c},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,c=0,n=-1,r=!0,s=0,i=e.length-1;i>=0;--i){var a=e.charCodeAt(i);if(47!==a)-1===n&&(r=!1,n=i+1),46===a?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){c=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===c+1?"":e.slice(t,n)};var s="b"==="ab".substr(-1)?function(e,t,c){return e.substr(t,c)}:function(e,t,c){return t<0&&(t=e.length+t),e.substr(t,c)}}).call(this,c("4362"))},e01a:function(e,t,c){"use strict";var n=c("23e7"),r=c("83ab"),s=c("da84"),i=c("1a2d"),a=c("1626"),o=c("861d"),l=c("9bf2").f,h=c("e893"),u=s.Symbol;if(r&&a(u)&&(!("description"in u.prototype)||void 0!==u().description)){var f={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof v?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};h(v,u);var d=v.prototype=u.prototype;d.constructor=v;var m=d.toString,p="Symbol(test)"==String(u("test")),z=/^Symbol\((.*)\)[^)]+$/;l(d,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=m.call(e);if(i(f,e))return"";var c=p?t.slice(7,-1):t.replace(z,"$1");return""===c?void 0:c}}),n({global:!0,forced:!0},{Symbol:v})}},e163:function(e,t,c){var n=c("1a2d"),r=c("1626"),s=c("7b0b"),i=c("f772"),a=c("e177"),o=i("IE_PROTO"),l=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){var t=s(e);if(n(t,o))return t[o];var c=t.constructor;return r(c)&&t instanceof c?c.prototype:t instanceof Object?l:null}},e177:function(e,t,c){var n=c("d039");e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,c){"use strict";var n=c("fc6a"),r=c("44d2"),s=c("3f8c"),i=c("69f3"),a=c("7dd0"),o="Array Iterator",l=i.set,h=i.getterFor(o);e.exports=a(Array,"Array",(function(e,t){l(this,{type:o,target:n(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,c=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==c?{value:n,done:!1}:"values"==c?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},e2cc:function(e,t,c){var n=c("6eeb");e.exports=function(e,t,c){for(var r in t)n(e,r,t[r],c);return e}},e439:function(e,t,c){var n=c("23e7"),r=c("d039"),s=c("fc6a"),i=c("06cf").f,a=c("83ab"),o=r((function(){i(1)})),l=!a||o;n({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(s(e),t)}})},e538:function(e,t,c){var n=c("b622");t.f=n},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,c){"use strict";var n,r,s,i,a=c("23e7"),o=c("c430"),l=c("da84"),h=c("d066"),u=c("fea9"),f=c("6eeb"),v=c("e2cc"),d=c("d2bb"),m=c("d44e"),p=c("2626"),z=c("59ed"),g=c("1626"),b=c("861d"),M=c("19aa"),y=c("8925"),C=c("2266"),V=c("1c7e"),H=c("4840"),L=c("2cf4").set,w=c("b575"),_=c("cdf9"),A=c("44de"),S=c("f069"),E=c("e667"),O=c("69f3"),k=c("94ca"),T=c("b622"),I=c("6069"),x=c("605d"),j=c("2d00"),D=T("species"),N="Promise",P=O.get,R=O.set,F=O.getterFor(N),U=u&&u.prototype,q=u,B=U,Z=l.TypeError,$=l.document,W=l.process,K=S.f,G=K,X=!!($&&$.createEvent&&l.dispatchEvent),Y=g(l.PromiseRejectionEvent),Q="unhandledrejection",J="rejectionhandled",ee=0,te=1,ce=2,ne=1,re=2,se=!1,ie=k(N,(function(){var e=y(q),t=e!==String(q);if(!t&&66===j)return!0;if(o&&!B["finally"])return!0;if(j>=51&&/native code/.test(e))return!1;var c=new q((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))},r=c.constructor={};return r[D]=n,se=c.then((function(){}))instanceof n,!se||!t&&I&&!Y})),ae=ie||!V((function(e){q.all(e)["catch"]((function(){}))})),oe=function(e){var t;return!(!b(e)||!g(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var c=e.reactions;w((function(){var n=e.value,r=e.state==te,s=0;while(c.length>s){var i,a,o,l=c[s++],h=r?l.ok:l.fail,u=l.resolve,f=l.reject,v=l.domain;try{h?(r||(e.rejection===re&&ve(e),e.rejection=ne),!0===h?i=n:(v&&v.enter(),i=h(n),v&&(v.exit(),o=!0)),i===l.promise?f(Z("Promise-chain cycle")):(a=oe(i))?a.call(i,u,f):u(i)):f(n)}catch(d){v&&!o&&v.exit(),f(d)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&ue(e)}))}},he=function(e,t,c){var n,r;X?(n=$.createEvent("Event"),n.promise=t,n.reason=c,n.initEvent(e,!1,!0),l.dispatchEvent(n)):n={promise:t,reason:c},!Y&&(r=l["on"+e])?r(n):e===Q&&A("Unhandled promise rejection",c)},ue=function(e){L.call(l,(function(){var t,c=e.facade,n=e.value,r=fe(e);if(r&&(t=E((function(){x?W.emit("unhandledRejection",n,c):he(Q,c,n)})),e.rejection=x||fe(e)?re:ne,t.error))throw t.value}))},fe=function(e){return e.rejection!==ne&&!e.parent},ve=function(e){L.call(l,(function(){var t=e.facade;x?W.emit("rejectionHandled",t):he(J,t,e.value)}))},de=function(e,t,c){return function(n){e(t,n,c)}},me=function(e,t,c){e.done||(e.done=!0,c&&(e=c),e.value=t,e.state=ce,le(e,!0))},pe=function(e,t,c){if(!e.done){e.done=!0,c&&(e=c);try{if(e.facade===t)throw Z("Promise can't be resolved itself");var n=oe(t);n?w((function(){var c={done:!1};try{n.call(t,de(pe,c,e),de(me,c,e))}catch(r){me(c,r,e)}})):(e.value=t,e.state=te,le(e,!1))}catch(r){me({done:!1},r,e)}}};if(ie&&(q=function(e){M(this,q,N),z(e),n.call(this);var t=P(this);try{e(de(pe,t),de(me,t))}catch(c){me(t,c)}},B=q.prototype,n=function(e){R(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:ee,value:void 0})},n.prototype=v(B,{then:function(e,t){var c=F(this),n=K(H(this,q));return n.ok=!g(e)||e,n.fail=g(t)&&t,n.domain=x?W.domain:void 0,c.parent=!0,c.reactions.push(n),c.state!=ee&&le(c,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new n,t=P(e);this.promise=e,this.resolve=de(pe,t),this.reject=de(me,t)},S.f=K=function(e){return e===q||e===s?new r(e):G(e)},!o&&g(u)&&U!==Object.prototype)){i=U.then,se||(f(U,"then",(function(e,t){var c=this;return new q((function(e,t){i.call(c,e,t)})).then(e,t)}),{unsafe:!0}),f(U,"catch",B["catch"],{unsafe:!0}));try{delete U.constructor}catch(ze){}d&&d(U,B)}a({global:!0,wrap:!0,forced:ie},{Promise:q}),m(q,N,!1,!0),p(N),s=h(N),a({target:N,stat:!0,forced:ie},{reject:function(e){var t=K(this);return t.reject.call(void 0,e),t.promise}}),a({target:N,stat:!0,forced:o||ie},{resolve:function(e){return _(o&&this===s?q:this,e)}}),a({target:N,stat:!0,forced:ae},{all:function(e){var t=this,c=K(t),n=c.resolve,r=c.reject,s=E((function(){var c=z(t.resolve),s=[],i=0,a=1;C(e,(function(e){var o=i++,l=!1;s.push(void 0),a++,c.call(t,e).then((function(e){l||(l=!0,s[o]=e,--a||n(s))}),r)})),--a||n(s)}));return s.error&&r(s.value),c.promise},race:function(e){var t=this,c=K(t),n=c.reject,r=E((function(){var r=z(t.resolve);C(e,(function(e){r.call(t,e).then(c.resolve,n)}))}));return r.error&&n(r.value),c.promise}})},e71f:function(e,t,c){"use strict";var n=c("0829");c.d(t,"a",(function(){return n["a"]})),c.d(t,"b",(function(){return n["b"]})),c.d(t,"c",(function(){return n["c"]})),c.d(t,"d",(function(){return n["d"]})),c.d(t,"e",(function(){return n["e"]})),c.d(t,"f",(function(){return n["f"]})),c.d(t,"g",(function(){return n["g"]}))},e893:function(e,t,c){var n=c("1a2d"),r=c("56ef"),s=c("06cf"),i=c("9bf2");e.exports=function(e,t){for(var c=r(t),a=i.f,o=s.f,l=0;l<c.length;l++){var h=c[l];n(e,h)||a(e,h,o(t,h))}}},e8b5:function(e,t,c){var n=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},e95a:function(e,t,c){var n=c("b622"),r=c("3f8c"),s=n("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[s]===e)}},ea7b:function(e,t,c){"use strict";var n=c("6a7c");c.d(t,"a",(function(){return n["a"]})),c.d(t,"b",(function(){return n["b"]})),c.d(t,"c",(function(){return n["c"]})),c.d(t,"d",(function(){return n["d"]}))},f069:function(e,t,c){"use strict";var n=c("59ed"),r=function(e){var t,c;this.promise=new e((function(e,n){if(void 0!==t||void 0!==c)throw TypeError("Bad Promise constructor");t=e,c=n})),this.resolve=n(t),this.reject=n(c)};e.exports.f=function(e){return new r(e)}},f30a:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c("b774");class r{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const c={};if(e.settings)for(const n in e.settings){const t=e.settings[n];c[n]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let s={...c};try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e}},t.on(n["a"],(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(c=>{this.targetQueue.push({method:t,args:e,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}},f5df:function(e,t,c){var n=c("00ee"),r=c("1626"),s=c("c6b6"),i=c("b622"),a=i("toStringTag"),o="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(c){}};e.exports=n?s:function(e){var t,c,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(c=l(t=Object(e),a))?c:o?s(t):"Object"==(n=s(t))&&r(t.callee)?"Arguments":n}},f772:function(e,t,c){var n=c("5692"),r=c("90e3"),s=n("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},fb6a:function(e,t,c){"use strict";var n=c("23e7"),r=c("e8b5"),s=c("68ee"),i=c("861d"),a=c("23cb"),o=c("07fa"),l=c("fc6a"),h=c("8418"),u=c("b622"),f=c("1dde"),v=f("slice"),d=u("species"),m=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var c,n,u,f=l(this),v=o(f),z=a(e,v),g=a(void 0===t?v:t,v);if(r(f)&&(c=f.constructor,s(c)&&(c===Array||r(c.prototype))?c=void 0:i(c)&&(c=c[d],null===c&&(c=void 0)),c===Array||void 0===c))return m.call(f,z,g);for(n=new(void 0===c?Array:c)(p(g-z,0)),u=0;z<g;z++,u++)z in f&&h(n,u,f[z]);return n.length=u,n}})},fc6a:function(e,t,c){var n=c("44ad"),r=c("1d80");e.exports=function(e){return n(r(e))}},fce3:function(e,t,c){var n=c("d039"),r=c("da84"),s=r.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,c){var n=c("4930");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,c){var n=c("da84");e.exports=n.Promise},ffa6:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return h}));var n=c("9ab4"),r=c("1fd5"),s=function(){function e(e,t,c){this.name=e,this.instanceFactory=t,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),i="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var c=new r["a"];if(this.instancesDeferred.set(t,c),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&c.resolve(n)}catch(s){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,c=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(c)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:c})}catch(r){if(n)return null;throw r}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,c;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(v){}try{for(var r=Object(n["f"])(this.instancesDeferred.entries()),s=r.next();!s.done;s=r.next()){var a=Object(n["c"])(s.value,2),o=a[0],h=a[1],u=this.normalizeInstanceIdentifier(o);try{var f=this.getOrInitializeService({instanceIdentifier:u});h.resolve(f)}catch(v){}}}catch(d){t={error:d}}finally{try{s&&!s.done&&(c=r.return)&&c.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=i),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(n["a"])(this,void 0,void 0,(function(){var e;return Object(n["b"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(n["e"])(Object(n["e"])([],Object(n["c"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(n["c"])(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=i),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=i),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,c;void 0===e&&(e={});var r=e.options,s=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(this.name+"("+i+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:i,options:s});try{for(var o=Object(n["f"])(this.instancesDeferred.entries()),l=o.next();!l.done;l=o.next()){var h=Object(n["c"])(l.value,2),u=h[0],f=h[1],v=this.normalizeInstanceIdentifier(u);i===v&&f.resolve(a)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(c=o.return)&&c.call(o)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var c,n=this.normalizeInstanceIdentifier(t),r=null!==(c=this.onInitCallbacks.get(n))&&void 0!==c?c:new Set;r.add(e),this.onInitCallbacks.set(n,r);var s=this.instances.get(n);return s&&e(s,n),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var c,r,s=this.onInitCallbacks.get(t);if(s)try{for(var i=Object(n["f"])(s),a=i.next();!a.done;a=i.next()){var o=a.value;try{o(e,t)}catch(l){}}}catch(h){c={error:h}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(c)throw c.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,c=e.options,n=void 0===c?{}:c,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(s){}return r||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=i),this.component?this.component.multipleInstances?e:i:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function o(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.c75771ed.js.map