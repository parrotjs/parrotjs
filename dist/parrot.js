/**
 * parrotjs - Use browser features (Notification, Storage, Vibration, Battery...) and make easy the communication with your API.
 * @version v0.12.13
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
eval(function(e,i,r,n,t,s){if(t=function(e){return(i>e?"":t(parseInt(e/i)))+((e%=i)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;r--;)s[t(r)]=n[r]||t(r);n=[function(e){return s[e]}],t=function(){return"\\w+"},r=1}for(;r--;)n[r]&&(e=e.replace(new RegExp("\\b"+t(r)+"\\b","g"),n[r]));return e}(";5 V=(8(){\"1D 1B\";5 j={l:'l',E:'1y',m:'m',p:'1x',q:'1v',v:'v'},19={\"1u\":1t,\"1q\":1n,\"1m\":11,\"1k\":18,\"1j\":11,\"1i\":18},S=8(a,b){5 d=1g,O=d.1f('a'),b=b||d.17.G,H=b.r(/\\/\\/(.*?)(?::(.*?))?@/)||[];O.G=b;w(5 i R j){a[i]=O[j[i]]||''}a.l=a.l.o(/:$/,'');a.q=a.q.o(/^\\?/,'');a.v=a.v.o(/^#/,'');a.F=H[1]||'';a.x=H[2]||'';a.m=(19[a.l]==a.m||a.m==0)?'':a.m;9(!a.l&&!/^([a-z]+:)?\\/\\//.1d(b)){5 c=T V(d.17.G.r(/(.*\\/)/)[0]),A=c.p.X('/'),B=a.p.X('/');A.W();w(5 i=0,C=['l','F','x','E','m'],s=C.Z;i<s;i++){a[C[i]]=c[C[i]]}10(B[0]=='..'){A.W();B.1c()}a.p=(b.1p(0,1)!='/'?A.13('/'):'')+'/'+B.13('/')}D{a.p=a.p.o(/^\\/?/,'/')}14(a)},15=8(s){s=s.o(/\\+/g,' ');s=s.o(/%([1b][0-t-f])%([P][0-t-f])%([P][0-t-f])/N,8(a,b,c,d){5 e=u(b,16)-1e,Q=u(c,16)-M;9(e==0&&Q<1h){k a}5 f=u(d,16)-M,n=(e<<12)+(Q<<6)+f;9(n>1l){k a}k K.J(n)});s=s.o(/%([1o][0-t-f])%([P][0-t-f])/N,8(a,b,c){5 d=u(b,16)-1a;9(d<2){k a}5 e=u(c,16)-M;k K.J((d<<6)+e)});s=s.o(/%([0-7][0-t-f])/N,8(a,b){k K.J(u(b,16))});k s},14=8(g){5 h=g.q;g.q=T(8(c){5 d=/([^=&]+)(=([^&]*))?/g,r;10((r=d.1r(c))){5 f=1s(r[1].o(/\\+/g,' ')),I=r[3]?15(r[3]):'';9(4[f]!=1w){9(!(4[f]y Y)){4[f]=[4[f]]}4[f].1z(I)}D{4[f]=I}}4.1A=8(){w(f R 4){9(!(4[f]y U)){1C 4[f]}}};4.L=8(){5 s='',e=1E;w(5 i R 4){9(4[i]y U){1F}9(4[i]y Y){5 a=4[i].Z;9(a){w(5 b=0;b<a;b++){s+=s?'&':'';s+=e(i)+'='+e(4[i][b])}}D{s+=(s?'&':'')+e(i)+'='}}D{s+=s?'&':'';s+=e(i)+'='+e(4[i])}}k s}})(h)};k 8(a){4.L=8(){k((4.l&&(4.l+'://'))+(4.F&&(4.F+(4.x&&(':'+4.x))+'@'))+(4.E&&4.E)+(4.m&&(':'+4.m))+(4.p&&4.p)+(4.q.L()&&('?'+4.q))+(4.v&&('#'+4.v)))};S(4,a)}}());",62,104,"||||this|var|||function|if|||||||||||return|protocol|port||replace|path|query|match||9a|parseInt|hash|for|pass|instanceof||basePath|selfPath|props|else|host|user|href|auth|value|fromCharCode|String|toString|0x80|gi|link|89ab|n2|in|parse|new|Function|Url|pop|split|Array|length|while|80||join|parseQs|decode||location|443|defaultPorts|0xC0|ef|shift|test|0xE0|createElement|document|32|wss|ws|https|0xFFFF|http|70|cd|substring|gopher|exec|decodeURIComponent|21|ftp|search|null|pathname|hostname|push|clear|strict|delete|use|encodeURIComponent|continue".split("|"),0,{})),function(e,i){"use strict";var r="0.7.3",n="",t="?",s="function",o="undefined",a="object",u="major",l="model",c="name",d="type",p="vendor",f="version",w="architecture",m="console",g="mobile",h="tablet",v="smarttv",b="wearable",y="embedded",x={extend:function(e,i){for(var r in i)-1!=="browser cpu device engine os".indexOf(r)&&i[r].length%2===0&&(e[r]=i[r].concat(e[r]));return e},has:function(e,i){return"string"==typeof e?-1!==i.toLowerCase().indexOf(e.toLowerCase()):void 0},lowerize:function(e){return e.toLowerCase()}},k={rgx:function(){for(var e,r,n,t,u,l,c,d=0,p=arguments;d<p.length&&!l;){var f=p[d],w=p[d+1];if(typeof e===o){e={};for(t in w)u=w[t],typeof u===a?e[u[0]]=i:e[u]=i}for(r=n=0;r<f.length&&!l;)if(l=f[r++].exec(this.getUA()))for(t=0;t<w.length;t++)c=l[++n],u=w[t],typeof u===a&&u.length>0?2==u.length?e[u[0]]=typeof u[1]==s?u[1].call(this,c):u[1]:3==u.length?e[u[0]]=typeof u[1]!==s||u[1].exec&&u[1].test?c?c.replace(u[1],u[2]):i:c?u[1].call(this,c,u[2]):i:4==u.length&&(e[u[0]]=c?u[3].call(this,c.replace(u[1],u[2])):i):e[u]=c?c:i;d+=2}return e},str:function(e,r){for(var n in r)if(typeof r[n]===a&&r[n].length>0){for(var s=0;s<r[n].length;s++)if(x.has(r[n][s],e))return n===t?i:n}else if(x.has(r[n],e))return n===t?i:n;return e}},A={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:"NT 6.4",RT:"ARM"}}}},E={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[c,f,u],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[c,"Opera"],f,u],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[c,f,u],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[c,"IE"],f,u],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[c,"Yandex"],f,u],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[c,/_/g," "],f,u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],[c,f,u],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[c,"Dolphin"],f,u],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[c,"Chrome"],f,u],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[f,u,[c,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[f,u,c],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[c,[u,k.str,A.browser.oldsafari.major],[f,k.str,A.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[c,f,u],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[c,"Netscape"],f,u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[c,f,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,x.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[w,/ower/,"",x.lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[w,x.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[d,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[d,h]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[d,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[d,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,k.str,A.device.amazon.model],[p,"Amazon"],[d,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[d,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[d,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[d,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[d,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[l,[p,"Asus"],[d,h]],[/(sony)\s(tablet\s[ps])/i],[p,l,[d,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[d,m]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[d,m]],[/(playstation\s[3portablevi]+)/i],[l,[p,"Sony"],[d,m]],[/(sprint\s(\w+))/i],[[p,k.str,A.device.sprint.vendor],[l,k.str,A.device.sprint.model],[d,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[d,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[d,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[d,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[d,g]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[p,"Motorola"],l,[d,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[d,h]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[d,h]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[d,g]],[/(samsung);smarttv/i],[p,l,[d,v]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[d,v]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[d,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[d,g]],[/android\s3\.[\s\w-;]{10}(a\d{3})/i],[l,[p,"Acer"],[d,h]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[d,h]],[/(lg) netcast\.tv/i],[p,l,[d,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[d,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[d,h]],[/linux;.+((jolla));/i],[p,l,[d,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[d,b]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[d,b]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[d,x.lowerize],p,l]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,f],[/rv\:([\w\.]+).*(gecko)/i],[f,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,f],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[f,k.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[f,k.str,A.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],f],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,f],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],f],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],f],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,f],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],f],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],f],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,f],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[f,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[f,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,f]]},S=function(i,r){if(!(this instanceof S))return new S(i,r).getResult();var t=i||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:n),s=r?x.extend(E,r):E;this.getBrowser=function(){return k.rgx.apply(this,s.browser)},this.getCPU=function(){return k.rgx.apply(this,s.cpu)},this.getDevice=function(){return k.rgx.apply(this,s.device)},this.getEngine=function(){return k.rgx.apply(this,s.engine)},this.getOS=function(){return k.rgx.apply(this,s.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this.setUA(t)};if(S.VERSION=r,S.BROWSER={NAME:c,MAJOR:u,VERSION:f},S.CPU={ARCHITECTURE:w},S.DEVICE={MODEL:l,VENDOR:p,TYPE:d,CONSOLE:m,MOBILE:g,SMARTTV:v,TABLET:h,WEARABLE:b,EMBEDDED:y},S.ENGINE={NAME:c,VERSION:f},S.OS={NAME:c,VERSION:f},typeof exports!==o)typeof module!==o&&module.exports&&(exports=module.exports=S),exports.UAParser=S;else{e.UAParser=S,typeof define===s&&define.amd&&define(function(){return S});var N=e.jQuery||e.Zepto;if(typeof N!==o){var O=new S;N.ua=O.getResult(),N.ua.get=function(){return O.getUA()},N.ua.set=function(e){O.setUA(e);var i=O.getResult();for(var r in i)N.ua[r]=i[r]}}}}(this),require=function e(i,r,n){function t(o,a){if(!r[o]){if(!i[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[o]={exports:{}};i[o][0].call(c.exports,function(e){var r=i[o][1][e];return t(r?r:e)},c,c.exports,e,i,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)t(n[o]);return t}({"fn-partial":[function(e,i){"use strict";i.exports=function(e){var i=Array.prototype.slice.call(arguments,1);return function(){var r;return r=i.concat(Array.prototype.slice.call(arguments)),e.apply(this,r)}}},{}]},{},[]),function(){"use strict";var e;e=this.parrot={version:"0.12.13",$:"undefined"!=typeof $$&&null!==$$?$$:$},function(){var i,r,n;return i={},r=function(e){var i,r,n,t,s,o,a,u,l,c;for(s=new Url,c=["protocol","path","host","port","hash"],o=0,u=c.length;u>o;o++)r=c[o],s[r]="";for(i=a=0,l=e.length;l>a;i=a+=2)n=e[i],s.query[n]=e[i+1];return t=s.toString(),"?"===t.charAt(0)&&(t=t.substring(1)),t},n=require("fn-partial"),e.environment="development",e.language=navigator.language.slice(0,2),e.endpoint={add:function(e){return this[e.name]=function(){return e.url},this},set:function(i){return e.environment=i,this}},e.url={getOrUpdate:function(e,n){var t;if(null==n&&(n=void 0),null!=n){for(t in n)i[e][t]=n[t];null!=n.query&&(i[e].query=r(n.query))}return i[e]},add:function(e){var t;return t=e.name,delete e.name,null!=e.query&&(e.query=r(e.query)),i[t]=e,this[t]=n(this.getOrUpdate,t),this}}}(),function(){return e.ajax=function(i,r){var n,t,s,o,a;return n=function(i){var r;return r={METHOD:"get",SEND:{},HEADERS:{},ASYNC:!0,DATATYPE:"json",CONTENT_TYPE:"application/x-www-form-urlencoded"},new Promise(function(n,t){return e.$.ajax({url:i.url,type:i.method||r.METHOD,data:i.send||r.SEND,dataType:i.dataType||r.DATATYPE,contentType:i.contentType||r.CONTENT_TYPE,async:i.async||r.ASYNC,headers:i.headers||r.HEADERS,success:function(e){return 0===e.status?t({code:0,message:{errors:[{param:"url",msg:"Server Unavailable."}]}}):n(e)},error:function(e,i){var r;if(i="object"==typeof e?e:i,null!=i.responseJSON)r=i.responseJSON;else try{r=JSON.parse(i.response)}catch(n){r=i.response}return t({code:i.status,message:r})}})})},t=function(e,i){return n(e).then(function(e){return i(null,e)},function(e){return i(e,null)})},s=""+e.endpoint[e.environment](),i.url?i.url!==s&&i.url!==""+s+"/"+i.path&&i.url!==""+s+"?"+i.query&&i.url!==""+s+"/"+i.path+"?"+i.query&&(null!=i.path&&(i.url=""+i.url+"/"+i.path),null!=i.query&&(i.url=""+i.url+"?"+i.query)):("string"==typeof arguments[0]&&(null!=("function"==typeof(o=e.url)[a=arguments[0]]?o[a]():void 0)?i=e.url.getOrUpdate(arguments[0],arguments[1]):"object"==typeof arguments[1]?(i=arguments[1],i.url=arguments[0]):i={url:arguments[0]},"object"==typeof arguments[1]&&(r=arguments[2])),i.query&&i.path?i.url=""+s+"/"+i.path+"?"+i.query:(i.query&&!i.path&&(i.url=""+s+"?"+i.query),i.path&&!i.query&&(i.url=""+s+"/"+i.path))),t(i,r)}}(),function(){var i,r,n,t,s,o,a,u,l;return s=require("fn-partial"),n=function(){var i,n,t,o,a,u,l,c;for(u=Object.keys(localStorage),n=0,o=u.length;o>n;n++)i=u[n],e.local[i]=s(r,"local",i);for(l=Object.keys(sessionStorage),c=[],t=0,a=l.length;a>t;t++)i=l[t],c.push(e.session[i]=s(r,"session",i));return c}(),l=function(e){return"local"===e?localStorage:sessionStorage},r=function(e,i){var r,n;r=l(e).getItem(i);try{return r=JSON.parse(r)}catch(t){return n=t,r}},i=function(i,n,t){return"string"!=typeof t&&(t=JSON.stringify(t)),l(i).setItem(n,t),e[i][n]=s(r,i,n)},o=function(i,r){return delete e[i][r],l(i).removeItem(r)},a=function(i){var r,n,t,s;for(n=Object.keys(l(i)),t=0,s=n.length;s>t;t++)r=n[t],delete e[i][r];return l(i).clear()},u=function(e){return l(e).length},t=function(e,i){return null!=l(e)[i]},e.local={add:function(e,r){return i("local",e,r),this},remove:function(){var e,i,r;for(i=0,r=arguments.length;r>i;i++)e=arguments[i],o("local",e);return this},removeAll:function(){return a("local"),this},size:function(){return u("local")},isAvailable:function(e){return t("local",e)}},e.session={get:function(){return r("session","session")},add:function(){var e,r;return 1===arguments.length?(r="session",e=arguments[0]):(r=arguments[0],e=arguments[1]),i("session",r,e),this},remove:function(){var e,i,r;if(0===arguments.length)o("session","session");else for(i=0,r=arguments.length;r>i;i++)e=arguments[i],o("session",e);return this},removeAll:function(){return a("session"),this},size:function(){return u("session")},isAvailable:function(){var e;return e=0===arguments.length?"session":arguments[0],t("session",e)}}}(),function(){var i,r;return i={},r=require("fn-partial"),e.notification={getOrUpdate:function(e,r){var n;if(null==r&&(r=void 0),null!=r)for(n in r)i[e][n]=r[n];return i[e]},add:function(e){var n;return n=e.name,delete e.name,i[n]=e,this[n]=r(this.getOrUpdate,n),this},show:function(e,i){var r,n;return 1===arguments.length&&"object"==typeof e&&(e=void 0,i=arguments[0]),n=function(e){var i,r;try{return Notification.requestPermission(),r=e.title,delete e.title,new Notification(r,e)}catch(n){throw i=n,new Error("Notification API is not available.")}},null==e?n(i):(r=this.getOrUpdate(e,i),n(r))}}}(),function(){var i;return i=document.body,e.device={detection:function(){return i.dataset.lang=e.language,i.dataset.os=e.device.os.name.toLowerCase(),i.dataset.device=e.device.type,i.dataset.orientation=e.device.screen.orientation,i.dataset.screen=e.device.screen.size,i.dataset.retina=1===this.screen.pixelRatio?!1:!0},noDetection:function(){var e,r,n,t,s;for(t=["lang","os","device","orientation","screen","retina"],s=[],r=0,n=t.length;n>r;r++)e=t[r],s.push(delete i.dataset[e]);return s}}}(),e.$(function(){var i;return i=function(){var i,r,n,t,s,o,a,u,l,c;u=e.device.detection,c=e.device.noDetection,n=(new UAParser).getResult(),delete n.ua,null!=n.cpu.architecture&&(n.cpu=n.cpu.architecture),delete n.cpu,l=n.device,delete n.device;for(t in l)o=l[t],null!=o&&(n[t]=o);return e.device=n,a=screen.width,i=screen.height,s=i>a&&480>a||a>i&&480>i?"small":"normal",r=1>i/a?"landscape":"portrait",e.device.screen={width:a,height:i,size:s,orientation:r,aspectRatio:require("aspect-ratio")(a,i)},"undefined"!=typeof devicePixelRatio&&null!==devicePixelRatio&&(e.device.screen.pixelRatio=devicePixelRatio),null==e.device.type&&"normal"===s&&(e.device.type="desktop"),e.device.detection=u,e.device.noDetection=c},i(),e.device.detection(),e.$(window).on("resize",i),e.$(window).on("orientationchange",i)})}.call(this);