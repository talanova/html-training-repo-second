(()=>{var e,r,n,t,o,i,a,c={413:()=>{class e extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML='\n    <header class="header page__header">\n    <a href="./index.html">\n      <img src="/media/img/return_button.png" alt="return to blog" />\n    </a>\n    <h1>Blog title</h1>\n  </header>'}}customElements.define("pageheader-component",e)}},d={};function s(e){if(d[e])return d[e].exports;var r=d[e]={exports:{}},n={id:e,module:r,factory:c[e],require:s};return s.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require),r.exports}s.m=c,s.c=d,s.i=[],s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>{},s.hmrF=()=>"pageheader."+s.h()+".hot-update.json",s.h=()=>"5eb00055ae62600b72b9",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="html-training-repo-second:",s.l=(n,t,o)=>{if(e[n])e[n].push(t);else{var i,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+o){i=l;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+o),i.src=n),e[n]=[t];var u=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),a&&document.head.appendChild(i)}},(()=>{var e,r,n,t,o={},i=s.c,a=[],c=[],d="idle";function l(e){d=e;for(var r=0;r<c.length;r++)c[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return l("check"),s.hmrM().then((function(t){if(!t)return l(m()?"ready":"idle"),null;l("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,r){return s.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),o)}))}))}))}function f(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var a=function(e){o||(o=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(c))}function m(){if(t)return n||(n=[]),Object.keys(s.hmrI).forEach((function(e){t.forEach((function(r){s.hmrI[e](r,n)}))})),t=void 0,!0}s.hmrD=o,s.i.push((function(h){var m,v,g,y=h.module,b=function(n,t){var o=i[t];if(!o)return n;var c=function(r){if(o.hot.active){if(i[r]){var c=i[r].parents;-1===c.indexOf(t)&&c.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(c,p,s(p));return c.e=function(e){return function(e){switch(d){case"ready":return l("prepare"),r.push(e),u((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},c}(h.require,h.id);y.hot=(m=h.id,v=y,g={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){a=v.parents.slice(),e=m,s(m)},active:!0,accept:function(e,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=r||function(){};else g._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":n=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,n)})),l("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:o[m]},e=void 0,g),y.parents=a,y.children=[],a=[],h.require=b})),s.hmrC={},s.hmrI={}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),s.hmrC.miniCss=(e,r,c,d,l,u)=>{l.push(a),e.forEach((e=>{var r=s.miniCssF(e),a=s.p+r;const c=t(r,a);c&&d.push(new Promise(((r,t)=>{var d=n(e,a,(()=>{d.as="style",d.rel="preload",r()}),t);o.push(c),i.push(d)})))}))},(()=>{var e,r,n,t,o={729:0},i={};function a(e){return new Promise(((r,n)=>{i[e]=r;var t=s.p+s.hu(e),o=new Error;s.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function c(i){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,d=s.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<d.parents.length;l++){var u=d.parents[l],p=s.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),c(n[u],[i])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}s.f&&delete s.f.jsonpHmr,e=void 0;var d={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(s.o(r,f)){var h,m=r[f],v=!1,g=!1,y=!1,b="";switch((h=m?a(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(f in u[f]=m,c(l,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),c(d[f],h.outdatedDependencies[f]));y&&(c(l,[h.moduleId]),u[f]=p)}r=void 0;for(var E,_=[],w=0;w<l.length;w++){var D=l[w];s.c[D]&&s.c[D].hot._selfAccepted&&u[D]!==p&&!s.c[D].hot._selfInvalidated&&_.push({module:D,require:s.c[D].hot._requireSelf,errorHandler:s.c[D].hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var i=t.pop(),a=s.c[i];if(a){var c={},u=a.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,c);for(s.hmrD[i]=c,a.hot.active=!1,delete s.c[i],delete d[i],w=0;w<a.children.length;w++){var p=s.c[a.children[w]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in d)if(s.o(d,f)&&(a=s.c[f]))for(E=d[f],w=0;w<E.length;w++)r=E[w],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)s.o(u,r)&&(s.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](s);for(var o in d)if(s.o(d,o)){var a=s.c[o];if(a){E=d[o];for(var c=[],p=[],f=0;f<E.length;f++){var h=E[f],m=a.hot._acceptedDependencies[h];if(m){if(-1!==c.indexOf(m))continue;c.push(m),p.push(h)}}for(var v=0;v<c.length;v++)try{c[v].call(null,E)}catch(r){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[v],error:r}),i.ignoreErrored||e(r)}}}for(var g=0;g<_.length;g++){var y=_[g],b=y.module;try{y.require(b)}catch(r){if("function"==typeof y.errorHandler)try{y.errorHandler(r)}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:n,originalError:r}),i.ignoreErrored||e(n),e(r)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:b,error:r}),i.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatehtml_training_repo_second=(e,n,o)=>{for(var a in n)s.o(n,a)&&(r[a]=n[a]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},s.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(c)),s.o(r,e)||(r[e]=s.m[e])},s.hmrC.jsonp=function(i,d,l,u,p,f){p.push(c),e={},n=d,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){s.o(o,r)&&void 0!==o[r]&&(u.push(a(r)),e[r]=!0)})),s.f&&(s.f.jsonpHmr=function(r,n){e&&!s.o(e,r)&&s.o(o,r)&&void 0!==o[r]&&(n.push(a(r)),e[r]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),s(413)})();