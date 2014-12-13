/**
 * parrotjs - Use browser features (Notification, Storage, Vibration, Battery...) and make easy the communication with your API.
 * @version v0.12.13
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){"use strict";var t;t=function(){var t,e,n,r,o,u,l,i,c,a,f,s,d,p,y,h,m;return r=[],i=Object.prototype,l=/^\s*<(\w+|!)[^>]*>/,n=[1,9,11],e=/^\.([\w-]+)$/,u=/^#[\w\d-]+$/,f=/^[\w-]+$/,c=document.createElement("table"),a=document.createElement("tr"),o={tr:document.createElement("tbody"),tbody:c,thead:c,tfoot:c,td:a,th:a,"*":document.createElement("div")},t=function(e,n){var r;return e?"function"===t.toType(e)?t(document).ready(e):(r=y(e,n),h(r,e)):h()},t.query=function(t,n){var r;return e.test(n)?r=t.getElementsByClassName(n.replace(".","")):f.test(n)?r=t.getElementsByTagName(n):u.test(n)&&t===document?(r=t.getElementById(n.replace("#","")),r||(r=[])):r=t.querySelectorAll(n),r.nodeType?[r]:Array.prototype.slice.call(r)},t.extend=function(t){return Array.prototype.slice.call(arguments,1).forEach(function(e){var n,r;r=[];for(n in e)r.push(t[n]=e[n]);return r}),t},t.toType=function(t){return i.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t.each=function(e,n){var r,o,u,l,i;if(o=void 0,u=void 0,"array"===t.toType(e))for(o=l=0,i=e.length;i>l;o=++l)r=e[o],n.call(r,o,r)===!1;else for(u in e)n.call(e[u],u,e[u])===!1;return e},t.map=function(e,n){var r,o,u,l;if(l=[],r=void 0,o=void 0,"array"===t.toType(e))for(r=0;r<e.length;)u=n(e[r],r),null!=u&&l.push(u),r++;else for(o in e)u=n(e[o],o),null!=u&&l.push(u);return d(l)},t.mix=function(){var t,e,n,r,o;for(n={},t=0,r=arguments.length;r>t;){e=arguments[t];for(o in e)m(e,o)&&void 0!==e[o]&&(n[o]=e[o]);t++}return n},h=function(t,e){return null==e&&(e=""),t=t||r,t.selector=e,t.__proto__=h.prototype,t},y=function(e,r){var o,u;return o=null,u=t.toType(e),"array"===u?o=s(e):"string"===u&&l.test(e)?(o=p(e.trim(),RegExp.$1),e=null):"string"===u?(o=t.query(document,e),r&&(o=1===o.length?t.query(o[0],r):t.map(function(){return t.query(o,r)}))):(n.indexOf(e.nodeType)>=0||e===window)&&(o=[e],e=null),o},p=function(e,n){var r;return null==n&&(n="*"),n in o||(n="*"),r=o[n],r.innerHTML=""+e,t.each(Array.prototype.slice.call(r.childNodes),function(){return r.removeChild(this)})},s=function(t){return t.filter(function(t){return null!=t?t:void 0})},d=function(t){return t.length>0?r.concat.apply(r,t):t},m=function(t,e){return i.hasOwnProperty.call(t,e)},h.prototype=t.fn={},t.fn.each=function(t){return this.forEach(function(e,n){return t.call(e,n,e)}),this},t.fn.filter=function(e){return t(r.filter.call(this,function(n){return n.parentNode&&t.query(n.parentNode,e).indexOf(n)>=0}))},t.fn.forEach=r.forEach,t.fn.indexOf=r.indexOf,t.version="3.0.6",t}(),this.Quo=this.$$=t}).call(this);
(function(){"use strict";!function(t){var e,n,a,r,o,u,c,s,i,p,d,l;return e={TYPE:"GET",MIME:"json"},a={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},n=0,t.ajaxSettings={type:e.TYPE,async:!0,success:{},error:{},context:null,dataType:e.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},t.ajax=function(n){var a,u,s,d;if(s=t.mix(t.ajaxSettings,n),s.type===e.TYPE?s.url+=t.serialize(s.data,"?"):s.data=t.serialize(s.data),r(s.url))return o(s);d=s.xhr(),d.onreadystatechange=function(){return 4===d.readyState?(clearTimeout(a),p(d,s)):void 0},d.open(s.type,s.url,s.async),i(d,s),s.timeout>0&&(a=setTimeout(function(){return l(d,s)},s.timeout));try{d.send(s.data)}catch(f){u=f,d=u,c("Resource not found",d,s)}return d},t.get=function(e,n,a,r){return t.ajax({url:e,data:n,success:a,dataType:r})},t.post=function(t,e,n,a){return s("POST",t,e,n,a)},t.put=function(t,e,n,a){return s("PUT",t,e,n,a)},t["delete"]=function(t,e,n,a){return s("DELETE",t,e,n,a)},t.json=function(e,n,a){return t.ajax({url:e,data:n,success:a})},t.serialize=function(t,e){var n,a;null==e&&(e=""),a=e;for(n in t)t.hasOwnProperty(n)&&(a!==e&&(a+="&"),a+=""+encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return a===e?"":a},o=function(e){var a,r,o,u;return e.async?(r="jsonp"+ ++n,o=document.createElement("script"),u={abort:function(){return t(o).remove(),r in window?window[r]={}:void 0}},a=void 0,window[r]=function(n){return clearTimeout(a),t(o).remove(),delete window[r],d(n,u,e)},o.src=e.url.replace(RegExp("=\\?"),"="+r),t("head").append(o),e.timeout>0&&(a=setTimeout(function(){return l(u,e)},e.timeout)),u):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},p=function(t,e){t.status>=200&&t.status<300||0===t.status?e.async&&d(u(t,e),t,e):c("QuoJS.ajax: Unsuccesful request",t,e)},d=function(t,e,n){n.success.call(n.context,t,e)},c=function(t,e,n){n.error.call(n.context,t,e,n)},i=function(t,e){var n;e.contentType&&(e.headers["Content-Type"]=e.contentType),e.dataType&&(e.headers.Accept=a[e.dataType]);for(n in e.headers)t.setRequestHeader(n,e.headers[n])},l=function(t,e){t.onreadystatechange={},t.abort(),c("QuoJS.ajax: Timeout exceeded",t,e)},s=function(e,n,a,r,o){return t.ajax({type:e,url:n,data:a,success:r,dataType:o,contentType:"application/x-www-form-urlencoded"})},r=function(t){return RegExp("=\\?").test(t)},u=function(t,n){var a,r;if(r=t,t.responseText){if(n.dataType===e.MIME)try{r=JSON.parse(t.responseText)}catch(o){a=o,r=a,c("QuoJS.ajax: Parse Error",t,n)}"xml"===n.dataType&&(r=t.responseXML)}return r}}(Quo)}).call(this);
eval(function(e,a,t,s,r,n){if(r=function(e){return(a>e?"":r(parseInt(e/a)))+((e%=a)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;t--;)n[r(t)]=s[t]||r(t);s=[function(e){return n[e]}],r=function(){return"\\w+"},t=1}for(;t--;)s[t]&&(e=e.replace(new RegExp("\\b"+r(t)+"\\b","g"),s[t]));return e}(";5 V=(8(){\"1D 1B\";5 j={l:'l',E:'1y',m:'m',p:'1x',q:'1v',v:'v'},19={\"1u\":1t,\"1q\":1n,\"1m\":11,\"1k\":18,\"1j\":11,\"1i\":18},S=8(a,b){5 d=1g,O=d.1f('a'),b=b||d.17.G,H=b.r(/\\/\\/(.*?)(?::(.*?))?@/)||[];O.G=b;w(5 i R j){a[i]=O[j[i]]||''}a.l=a.l.o(/:$/,'');a.q=a.q.o(/^\\?/,'');a.v=a.v.o(/^#/,'');a.F=H[1]||'';a.x=H[2]||'';a.m=(19[a.l]==a.m||a.m==0)?'':a.m;9(!a.l&&!/^([a-z]+:)?\\/\\//.1d(b)){5 c=T V(d.17.G.r(/(.*\\/)/)[0]),A=c.p.X('/'),B=a.p.X('/');A.W();w(5 i=0,C=['l','F','x','E','m'],s=C.Z;i<s;i++){a[C[i]]=c[C[i]]}10(B[0]=='..'){A.W();B.1c()}a.p=(b.1p(0,1)!='/'?A.13('/'):'')+'/'+B.13('/')}D{a.p=a.p.o(/^\\/?/,'/')}14(a)},15=8(s){s=s.o(/\\+/g,' ');s=s.o(/%([1b][0-t-f])%([P][0-t-f])%([P][0-t-f])/N,8(a,b,c,d){5 e=u(b,16)-1e,Q=u(c,16)-M;9(e==0&&Q<1h){k a}5 f=u(d,16)-M,n=(e<<12)+(Q<<6)+f;9(n>1l){k a}k K.J(n)});s=s.o(/%([1o][0-t-f])%([P][0-t-f])/N,8(a,b,c){5 d=u(b,16)-1a;9(d<2){k a}5 e=u(c,16)-M;k K.J((d<<6)+e)});s=s.o(/%([0-7][0-t-f])/N,8(a,b){k K.J(u(b,16))});k s},14=8(g){5 h=g.q;g.q=T(8(c){5 d=/([^=&]+)(=([^&]*))?/g,r;10((r=d.1r(c))){5 f=1s(r[1].o(/\\+/g,' ')),I=r[3]?15(r[3]):'';9(4[f]!=1w){9(!(4[f]y Y)){4[f]=[4[f]]}4[f].1z(I)}D{4[f]=I}}4.1A=8(){w(f R 4){9(!(4[f]y U)){1C 4[f]}}};4.L=8(){5 s='',e=1E;w(5 i R 4){9(4[i]y U){1F}9(4[i]y Y){5 a=4[i].Z;9(a){w(5 b=0;b<a;b++){s+=s?'&':'';s+=e(i)+'='+e(4[i][b])}}D{s+=(s?'&':'')+e(i)+'='}}D{s+=s?'&':'';s+=e(i)+'='+e(4[i])}}k s}})(h)};k 8(a){4.L=8(){k((4.l&&(4.l+'://'))+(4.F&&(4.F+(4.x&&(':'+4.x))+'@'))+(4.E&&4.E)+(4.m&&(':'+4.m))+(4.p&&4.p)+(4.q.L()&&('?'+4.q))+(4.v&&('#'+4.v)))};S(4,a)}}());",62,104,"||||this|var|||function|if|||||||||||return|protocol|port||replace|path|query|match||9a|parseInt|hash|for|pass|instanceof||basePath|selfPath|props|else|host|user|href|auth|value|fromCharCode|String|toString|0x80|gi|link|89ab|n2|in|parse|new|Function|Url|pop|split|Array|length|while|80||join|parseQs|decode||location|443|defaultPorts|0xC0|ef|shift|test|0xE0|createElement|document|32|wss|ws|https|0xFFFF|http|70|cd|substring|gopher|exec|decodeURIComponent|21|ftp|search|null|pathname|hostname|push|clear|strict|delete|use|encodeURIComponent|continue".split("|"),0,{}));
!function(i,e){"use strict";var s="0.7.3",o="",r="?",n="function",a="undefined",t="object",w="major",d="model",l="name",c="type",p="vendor",m="version",u="architecture",f="console",g="mobile",h="tablet",b="smarttv",v="wearable",x="embedded",k={extend:function(i,e){for(var s in e)-1!=="browser cpu device engine os".indexOf(s)&&e[s].length%2===0&&(i[s]=e[s].concat(i[s]));return i},has:function(i,e){return"string"==typeof i?-1!==e.toLowerCase().indexOf(i.toLowerCase()):void 0},lowerize:function(i){return i.toLowerCase()}},y={rgx:function(){for(var i,s,o,r,w,d,l,c=0,p=arguments;c<p.length&&!d;){var m=p[c],u=p[c+1];if(typeof i===a){i={};for(r in u)w=u[r],typeof w===t?i[w[0]]=e:i[w]=e}for(s=o=0;s<m.length&&!d;)if(d=m[s++].exec(this.getUA()))for(r=0;r<u.length;r++)l=d[++o],w=u[r],typeof w===t&&w.length>0?2==w.length?i[w[0]]=typeof w[1]==n?w[1].call(this,l):w[1]:3==w.length?i[w[0]]=typeof w[1]!==n||w[1].exec&&w[1].test?l?l.replace(w[1],w[2]):e:l?w[1].call(this,l,w[2]):e:4==w.length&&(i[w[0]]=l?w[3].call(this,l.replace(w[1],w[2])):e):i[w]=l?l:e;c+=2}return i},str:function(i,s){for(var o in s)if(typeof s[o]===t&&s[o].length>0){for(var n=0;n<s[o].length;n++)if(k.has(s[o][n],i))return o===r?e:o}else if(k.has(s[o],i))return o===r?e:o;return i}},A={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:"NT 6.4",RT:"ARM"}}}},E={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[l,m,w],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[l,"Opera"],m,w],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[l,m,w],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[l,"IE"],m,w],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[l,"Yandex"],m,w],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[l,/_/g," "],m,w],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],[l,m,w],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[l,"Dolphin"],m,w],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[l,"Chrome"],m,w],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[m,w,[l,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[m,w,l],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[l,[w,y.str,A.browser.oldsafari.major],[m,y.str,A.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[l,m,w],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[l,"Netscape"],m,w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[l,m,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[u,"amd64"]],[/(ia32(?=;))/i],[[u,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[u,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[u,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[u,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[u,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[u,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[d,p,[c,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[d,[p,"Apple"],[c,h]],[/(apple\s{0,1}tv)/i],[[d,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,d,[c,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[d,[p,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[d,y.str,A.device.amazon.model],[p,"Amazon"],[c,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[d,p,[c,g]],[/\((ip[honed|\s\w*]+);/i],[d,[p,"Apple"],[c,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,d,[c,g]],[/\(bb10;\s(\w+)/i],[d,[p,"BlackBerry"],[c,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[d,[p,"Asus"],[c,h]],[/(sony)\s(tablet\s[ps])/i],[p,d,[c,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,d,[c,f]],[/android.+;\s(shield)\sbuild/i],[d,[p,"Nvidia"],[c,f]],[/(playstation\s[3portablevi]+)/i],[d,[p,"Sony"],[c,f]],[/(sprint\s(\w+))/i],[[p,y.str,A.device.sprint.vendor],[d,y.str,A.device.sprint.model],[c,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,d,[c,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[d,/_/g," "],[c,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[d,[p,"Microsoft"],[c,f]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,"Microsoft"],[c,g]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[p,"Motorola"],d,[c,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[p,"Motorola"],[c,h]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],d,[c,h]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],d,[c,g]],[/(samsung);smarttv/i],[p,d,[c,b]],[/\(dtv[\);].+(aquos)/i],[d,[p,"Sharp"],[c,b]],[/sie-(\w+)*/i],[d,[p,"Siemens"],[c,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],d,[c,g]],[/android\s3\.[\s\w-;]{10}(a\d{3})/i],[d,[p,"Acer"],[c,h]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],d,[c,h]],[/(lg) netcast\.tv/i],[p,d,[c,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[d,[p,"LG"],[c,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[d,[p,"Lenovo"],[c,h]],[/linux;.+((jolla));/i],[p,d,[c,g]],[/((pebble))app\/[\d\.]+\s/i],[p,d,[c,v]],[/android.+;\s(glass)\s\d/i],[d,[p,"Google"],[c,v]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[c,k.lowerize],p,d]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[l,m],[/rv\:([\w\.]+).*(gecko)/i],[m,l]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[l,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[l,[m,y.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[l,"Windows"],[m,y.str,A.os.windows.version]],[/\((bb)(10);/i],[[l,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[l,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[l,"Symbian"],m],[/\((series40);/i],[l],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[l,"Firefox OS"],m],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[l,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[l,"Chromium OS"],m],[/(sunos)\s?([\w\.]+\d)*/i],[[l,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[l,m],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[l,"iOS"],[m,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[l,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[l,m]]},S=function(e,s){if(!(this instanceof S))return new S(e,s).getResult();var r=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:o),n=s?k.extend(E,s):E;this.getBrowser=function(){return y.rgx.apply(this,n.browser)},this.getCPU=function(){return y.rgx.apply(this,n.cpu)},this.getDevice=function(){return y.rgx.apply(this,n.device)},this.getEngine=function(){return y.rgx.apply(this,n.engine)},this.getOS=function(){return y.rgx.apply(this,n.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(i){return r=i,this},this.setUA(r)};if(S.VERSION=s,S.BROWSER={NAME:l,MAJOR:w,VERSION:m},S.CPU={ARCHITECTURE:u},S.DEVICE={MODEL:d,VENDOR:p,TYPE:c,CONSOLE:f,MOBILE:g,SMARTTV:b,TABLET:h,WEARABLE:v,EMBEDDED:x},S.ENGINE={NAME:l,VERSION:m},S.OS={NAME:l,VERSION:m},typeof exports!==a)typeof module!==a&&module.exports&&(exports=module.exports=S),exports.UAParser=S;else{i.UAParser=S,typeof define===n&&define.amd&&define(function(){return S});var N=i.jQuery||i.Zepto;if(typeof N!==a){var T=new S;N.ua=T.getResult(),N.ua.get=function(){return T.getUA()},N.ua.set=function(i){T.setUA(i);var e=T.getResult();for(var s in e)N.ua[s]=e[s]}}}}(this);
require=function r(t,e,n){function o(i,a){if(!e[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var p=e[i]={exports:{}};t[i][0].call(p.exports,function(r){var e=t[i][1][r];return o(e?e:r)},p,p.exports,r,t,e,n)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({"fn-partial":[function(r,t){"use strict";t.exports=function(r){var t=Array.prototype.slice.call(arguments,1);return function(){var e;return e=t.concat(Array.prototype.slice.call(arguments)),r.apply(this,e)}}},{}]},{},[]);
(function(){"use strict";var e;e=this.parrot={version:"0.12.13",$:"undefined"!=typeof $$&&null!==$$?$$:$},function(){var t,n,r;return t={},n=function(e){var t,n,r,i,u,o,a,s,l,c;for(u=new Url,c=["protocol","path","host","port","hash"],o=0,s=c.length;s>o;o++)n=c[o],u[n]="";for(t=a=0,l=e.length;l>a;t=a+=2)r=e[t],u.query[r]=e[t+1];return i=u.toString(),"?"===i.charAt(0)&&(i=i.substring(1)),i},r=require("fn-partial"),e.environment="development",e.language=navigator.language.slice(0,2),e.endpoint={add:function(e){return this[e.name]=function(){return e.url},this},set:function(t){return e.environment=t,this}},e.url={getOrUpdate:function(e,r){var i;if(null==r&&(r=void 0),null!=r){for(i in r)t[e][i]=r[i];null!=r.query&&(t[e].query=n(r.query))}return t[e]},add:function(e){var i;return i=e.name,delete e.name,null!=e.query&&(e.query=n(e.query)),t[i]=e,this[i]=r(this.getOrUpdate,i),this}}}(),function(){return e.ajax=function(t,n){var r,i,u,o,a;return r=function(t){var n;return n={METHOD:"get",SEND:{},HEADERS:{},ASYNC:!0,DATATYPE:"json",CONTENT_TYPE:"application/x-www-form-urlencoded"},new Promise(function(r,i){return e.$.ajax({url:t.url,type:t.method||n.METHOD,data:t.send||n.SEND,dataType:t.dataType||n.DATATYPE,contentType:t.contentType||n.CONTENT_TYPE,async:t.async||n.ASYNC,headers:t.headers||n.HEADERS,success:function(e){return 0===e.status?i({code:0,message:{errors:[{param:"url",msg:"Server Unavailable."}]}}):r(e)},error:function(e,t){var n;if(t="object"==typeof e?e:t,null!=t.responseJSON)n=t.responseJSON;else try{n=JSON.parse(t.response)}catch(r){n=t.response}return i({code:t.status,message:n})}})})},i=function(e,t){return r(e).then(function(e){return t(null,e)},function(e){return t(e,null)})},u=""+e.endpoint[e.environment](),t.url?t.url!==u&&t.url!==""+u+"/"+t.path&&t.url!==""+u+"?"+t.query&&t.url!==""+u+"/"+t.path+"?"+t.query&&(null!=t.path&&(t.url=""+t.url+"/"+t.path),null!=t.query&&(t.url=""+t.url+"?"+t.query)):("string"==typeof arguments[0]&&(null!=("function"==typeof(o=e.url)[a=arguments[0]]?o[a]():void 0)?t=e.url.getOrUpdate(arguments[0],arguments[1]):"object"==typeof arguments[1]?(t=arguments[1],t.url=arguments[0]):t={url:arguments[0]},"object"==typeof arguments[1]&&(n=arguments[2])),t.query&&t.path?t.url=""+u+"/"+t.path+"?"+t.query:(t.query&&!t.path&&(t.url=""+u+"?"+t.query),t.path&&!t.query&&(t.url=""+u+"/"+t.path))),i(t,n)}}(),function(){var t,n,r,i,u,o,a,s,l;return u=require("fn-partial"),r=function(){var t,r,i,o,a,s,l,c;for(s=Object.keys(localStorage),r=0,o=s.length;o>r;r++)t=s[r],e.local[t]=u(n,"local",t);for(l=Object.keys(sessionStorage),c=[],i=0,a=l.length;a>i;i++)t=l[i],c.push(e.session[t]=u(n,"session",t));return c}(),l=function(e){return"local"===e?localStorage:sessionStorage},n=function(e,t){var n,r;n=l(e).getItem(t);try{return n=JSON.parse(n)}catch(i){return r=i,n}},t=function(t,r,i){return"string"!=typeof i&&(i=JSON.stringify(i)),l(t).setItem(r,i),e[t][r]=u(n,t,r)},o=function(t,n){return delete e[t][n],l(t).removeItem(n)},a=function(t){var n,r,i,u;for(r=Object.keys(l(t)),i=0,u=r.length;u>i;i++)n=r[i],delete e[t][n];return l(t).clear()},s=function(e){return l(e).length},i=function(e,t){return null!=l(e)[t]},e.local={add:function(e,n){return t("local",e,n),this},remove:function(){var e,t,n;for(t=0,n=arguments.length;n>t;t++)e=arguments[t],o("local",e);return this},removeAll:function(){return a("local"),this},size:function(){return s("local")},isAvailable:function(e){return i("local",e)}},e.session={get:function(){return n("session","session")},add:function(){var e,n;return 1===arguments.length?(n="session",e=arguments[0]):(n=arguments[0],e=arguments[1]),t("session",n,e),this},remove:function(){var e,t,n;if(0===arguments.length)o("session","session");else for(t=0,n=arguments.length;n>t;t++)e=arguments[t],o("session",e);return this},removeAll:function(){return a("session"),this},size:function(){return s("session")},isAvailable:function(){var e;return e=0===arguments.length?"session":arguments[0],i("session",e)}}}(),function(){var t,n;return t={},n=require("fn-partial"),e.notification={getOrUpdate:function(e,n){var r;if(null==n&&(n=void 0),null!=n)for(r in n)t[e][r]=n[r];return t[e]},add:function(e){var r;return r=e.name,delete e.name,t[r]=e,this[r]=n(this.getOrUpdate,r),this},show:function(e,t){var n,r;return 1===arguments.length&&"object"==typeof e&&(e=void 0,t=arguments[0]),r=function(e){var t,n;try{return Notification.requestPermission(),n=e.title,delete e.title,new Notification(n,e)}catch(r){throw t=r,new Error("Notification API is not available.")}},null==e?r(t):(n=this.getOrUpdate(e,t),r(n))}}}(),function(){var t;return t=document.body,e.device={detection:function(){return t.dataset.lang=e.language,t.dataset.os=e.device.os.name.toLowerCase(),t.dataset.device=e.device.type,t.dataset.orientation=e.device.screen.orientation,t.dataset.screen=e.device.screen.size,t.dataset.retina=1===this.screen.pixelRatio?!1:!0},noDetection:function(){var e,n,r,i,u;for(i=["lang","os","device","orientation","screen","retina"],u=[],n=0,r=i.length;r>n;n++)e=i[n],u.push(delete t.dataset[e]);return u}}}(),e.$(function(){var t;return t=function(){var t,n,r,i,u,o,a,s,l,c;s=e.device.detection,c=e.device.noDetection,r=(new UAParser).getResult(),delete r.ua,null!=r.cpu.architecture&&(r.cpu=r.cpu.architecture),delete r.cpu,l=r.device,delete r.device;for(i in l)o=l[i],null!=o&&(r[i]=o);return e.device=r,a=screen.width,t=screen.height,u=t>a&&480>a||a>t&&480>t?"small":"normal",n=1>t/a?"landscape":"portrait",e.device.screen={width:a,height:t,size:u,orientation:n,aspectRatio:require("aspect-ratio")(a,t)},"undefined"!=typeof devicePixelRatio&&null!==devicePixelRatio&&(e.device.screen.pixelRatio=devicePixelRatio),null==e.device.type&&"normal"===u&&(e.device.type="desktop"),e.device.detection=s,e.device.noDetection=c},t(),e.device.detection(),e.$(window).on("resize",t),e.$(window).on("orientationchange",t)})}).call(this);