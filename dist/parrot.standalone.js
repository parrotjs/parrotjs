/**
 * parrotjs - Use browser features (Notification, Storage, Vibration, Battery...) and make easy the communication with your API.
 * @version v0.12.9
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){"use strict";var e;e=this.parrot={version:"0.12.9",$:"undefined"!=typeof $$&&null!==$$?$$:$,_partial:function(e){var t;return t=Array.prototype.slice.call(arguments,1),function(){var n;return n=t.concat(Array.prototype.slice.call(arguments)),e.apply(this,n)}}},function(){var t,n;return t={},n=function(e){var t,n,r,i,o,u,a,s,l,c;for(o=new Url,c=["protocol","path","host","port","hash"],u=0,s=c.length;s>u;u++)n=c[u],o[n]="";for(t=a=0,l=e.length;l>a;t=a+=2)r=e[t],o.query[r]=e[t+1];return i=o.toString(),"?"===i.charAt(0)&&(i=i.substring(1)),i},e.environment="development",e.language=window.navigator.language.slice(0,2),e.endpoint={add:function(e){return this[e.name]=function(){return e.url},this},set:function(t){return e.environment=t,this}},e.url={getOrUpdate:function(e,r){var i;if(null==r&&(r=void 0),null!=r){for(i in r)t[e][i]=r[i];null!=r.query&&(t[e].query=n(r.query))}return t[e]},add:function(r){var i;return i=r.name,delete r.name,null!=r.query&&(r.query=n(r.query)),t[i]=r,this[i]=e._partial(this.getOrUpdate,i),this}}}(),function(){return e.ajax=function(t,n){var r,i,o,u,a;return r=function(t){var n;return n={METHOD:"get",SEND:{},HEADERS:{},ASYNC:!0,DATATYPE:"json",CONTENT_TYPE:"application/x-www-form-urlencoded"},new Promise(function(r,i){return e.$.ajax({url:t.url,type:t.method||n.METHOD,data:t.send||n.SEND,dataType:t.dataType||n.DATATYPE,contentType:t.contentType||n.CONTENT_TYPE,async:t.async||n.ASYNC,headers:t.headers||n.HEADERS,success:function(e){return 0===e.status?i({code:0,message:{errors:[{param:"url",msg:"Server Unavailable."}]}}):r(e)},error:function(e,t){var n;if(t="object"==typeof e?e:t,null!=t.responseJSON)n=t.responseJSON;else try{n=JSON.parse(t.response)}catch(r){n=t.response}return i({code:t.status,message:n})}})})},i=function(e,t){return r(e).then(function(e){return t(null,e)},function(e){return t(e,null)})},o=""+e.endpoint[e.environment](),t.url?t.url!==o&&t.url!==""+o+"/"+t.path&&t.url!==""+o+"?"+t.query&&t.url!==""+o+"/"+t.path+"?"+t.query&&(null!=t.path&&(t.url=""+t.url+"/"+t.path),null!=t.query&&(t.url=""+t.url+"?"+t.query)):("string"==typeof arguments[0]&&(null!=("function"==typeof(u=e.url)[a=arguments[0]]?u[a]():void 0)?t=e.url.getOrUpdate(arguments[0],arguments[1]):"object"==typeof arguments[1]?(t=arguments[1],t.url=arguments[0]):t={url:arguments[0]},"object"==typeof arguments[1]&&(n=arguments[2])),t.query&&t.path?t.url=""+o+"/"+t.path+"?"+t.query:(t.query&&!t.path&&(t.url=""+o+"?"+t.query),t.path&&!t.query&&(t.url=""+o+"/"+t.path))),i(t,n)}}(),function(){var t,n,r,i,o,u,a,s;return r=function(){var t,r,i,o,u,a,s,l;for(a=Object.keys(localStorage),r=0,o=a.length;o>r;r++)t=a[r],e.local[t]=e._partial(n,"local",t);for(s=Object.keys(sessionStorage),l=[],i=0,u=s.length;u>i;i++)t=s[i],l.push(e.session[t]=e._partial(n,"session",t));return l}(),s=function(e){return"local"===e?localStorage:sessionStorage},n=function(e,t){var n,r;n=s(e).getItem(t);try{return n=JSON.parse(n)}catch(i){return r=i,n}},t=function(t,r,i){return"string"!=typeof i&&(i=JSON.stringify(i)),s(t).setItem(r,i),e[t][r]=e._partial(n,t,r)},o=function(t,n){return delete e[t][n],s(t).removeItem(n)},u=function(t){var n,r,i,o;for(r=Object.keys(s(t)),i=0,o=r.length;o>i;i++)n=r[i],delete e[t][n];return s(t).clear()},a=function(e){return s(e).length},i=function(e,t){return null!=s(e)[t]},e.local={add:function(e,n){return t("local",e,n),this},remove:function(){var e,t,n;for(t=0,n=arguments.length;n>t;t++)e=arguments[t],o("local",e);return this},removeAll:function(){return u("local"),this},size:function(){return a("local")},isAvailable:function(e){return i("local",e)}},e.session={get:function(){return n("session","session")},add:function(){var e,n;return 1===arguments.length?(n="session",e=arguments[0]):(n=arguments[0],e=arguments[1]),t("session",n,e),this},remove:function(){var e,t,n;if(0===arguments.length)o("session","session");else for(t=0,n=arguments.length;n>t;t++)e=arguments[t],o("session",e);return this},removeAll:function(){return u("session"),this},size:function(){return a("session")},isAvailable:function(){var e;return e=0===arguments.length?"session":arguments[0],i("session",e)}}}(),function(){var t;return t={},e.notification={getOrUpdate:function(e,n){var r;if(null==n&&(n=void 0),null!=n)for(r in n)t[e][r]=n[r];return t[e]},add:function(n){var r;return r=n.name,delete n.name,t[r]=n,this[r]=e._partial(this.getOrUpdate,r),this},show:function(e,t){var n,r;return 1===arguments.length&&"object"==typeof e&&(e=void 0,t=arguments[0]),r=function(){return function(e){var t,n;try{return window.Notification.requestPermission(),n=e.title,delete e.title,new Notification(n,e)}catch(r){throw t=r,new Error("Notification API is not available.")}}}(this),null==e?r(t):(n=this.getOrUpdate(e,t),r(n))}}}(),function(){return e.device={detection:function(){var t;return t=window.document.body,t.dataset.lang=e.language,t.dataset.os=this.os.name.toLowerCase(),t.dataset.device=this.type,t.dataset.orientation=this.screen.orientation,t.dataset.screen=this.screen.size,t.dataset.retina=1===this.screen.pixelRatio?!1:!0},noDetection:function(){var e,t,n,r,i;for(r=["lang","os","device","orientation","screen","retina"],i=[],t=0,n=r.length;n>t;t++)e=r[t],i.push(delete window.document.body.dataset[e]);return i}}}(),e.$(function(){var t;return t=function(){var t,n,r,i,o,u,a,s,l,c,d;l=e.device.detection,d=e.device.noDetection,o=function(e,t){var n,r,i;return r=function(e,t){return 0===t?e:r(t,e%t)},e===t?"1/1":(t>e&&(i=e,e=t,t=i),n=r(e,t),"undefined"==typeof i?e/n+"/"+t/n:t/n+"/"+e/n)},r=(new UAParser).getResult(),delete r.ua,null!=r.cpu.architecture&&(r.cpu=r.cpu.architecture),delete r.cpu,c=r.device,delete r.device;for(i in c)a=c[i],null!=a&&(r[i]=a);return e.device=r,s=screen.width,t=screen.height,u=t>s&&480>s||s>t&&480>t?"small":"normal",n=1>t/s?"landscape":"portrait",e.device.screen={width:s,height:t,size:u,orientation:n,pixelRatio:window.devicePixelRatio||"unsupported",aspectRatio:o(s,t)},null==e.device.type&&"normal"===u&&(e.device.type="desktop"),e.device.detection=l,e.device.noDetection=d}(),e.device.detection(),e.$(window).on("resize",t),e.$(window).on("orientationchange",t)})}).call(this);