/**
 * parrotjs - Client library to connect your frontend application with whatever API backend
 * @version v0.11.27a
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
eval(function(e,i,n,t,r,s){if(r=function(e){return(i>e?"":r(parseInt(e/i)))+((e%=i)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;n--;)s[r(n)]=t[n]||r(n);t=[function(e){return s[e]}],r=function(){return"\\w+"},n=1}for(;n--;)t[n]&&(e=e.replace(new RegExp("\\b"+r(n)+"\\b","g"),t[n]));return e}(";5 V=(8(){\"1D 1B\";5 j={l:'l',E:'1y',m:'m',p:'1x',q:'1v',v:'v'},19={\"1u\":1t,\"1q\":1n,\"1m\":11,\"1k\":18,\"1j\":11,\"1i\":18},S=8(a,b){5 d=1g,O=d.1f('a'),b=b||d.17.G,H=b.r(/\\/\\/(.*?)(?::(.*?))?@/)||[];O.G=b;w(5 i R j){a[i]=O[j[i]]||''}a.l=a.l.o(/:$/,'');a.q=a.q.o(/^\\?/,'');a.v=a.v.o(/^#/,'');a.F=H[1]||'';a.x=H[2]||'';a.m=(19[a.l]==a.m||a.m==0)?'':a.m;9(!a.l&&!/^([a-z]+:)?\\/\\//.1d(b)){5 c=T V(d.17.G.r(/(.*\\/)/)[0]),A=c.p.X('/'),B=a.p.X('/');A.W();w(5 i=0,C=['l','F','x','E','m'],s=C.Z;i<s;i++){a[C[i]]=c[C[i]]}10(B[0]=='..'){A.W();B.1c()}a.p=(b.1p(0,1)!='/'?A.13('/'):'')+'/'+B.13('/')}D{a.p=a.p.o(/^\\/?/,'/')}14(a)},15=8(s){s=s.o(/\\+/g,' ');s=s.o(/%([1b][0-t-f])%([P][0-t-f])%([P][0-t-f])/N,8(a,b,c,d){5 e=u(b,16)-1e,Q=u(c,16)-M;9(e==0&&Q<1h){k a}5 f=u(d,16)-M,n=(e<<12)+(Q<<6)+f;9(n>1l){k a}k K.J(n)});s=s.o(/%([1o][0-t-f])%([P][0-t-f])/N,8(a,b,c){5 d=u(b,16)-1a;9(d<2){k a}5 e=u(c,16)-M;k K.J((d<<6)+e)});s=s.o(/%([0-7][0-t-f])/N,8(a,b){k K.J(u(b,16))});k s},14=8(g){5 h=g.q;g.q=T(8(c){5 d=/([^=&]+)(=([^&]*))?/g,r;10((r=d.1r(c))){5 f=1s(r[1].o(/\\+/g,' ')),I=r[3]?15(r[3]):'';9(4[f]!=1w){9(!(4[f]y Y)){4[f]=[4[f]]}4[f].1z(I)}D{4[f]=I}}4.1A=8(){w(f R 4){9(!(4[f]y U)){1C 4[f]}}};4.L=8(){5 s='',e=1E;w(5 i R 4){9(4[i]y U){1F}9(4[i]y Y){5 a=4[i].Z;9(a){w(5 b=0;b<a;b++){s+=s?'&':'';s+=e(i)+'='+e(4[i][b])}}D{s+=(s?'&':'')+e(i)+'='}}D{s+=s?'&':'';s+=e(i)+'='+e(4[i])}}k s}})(h)};k 8(a){4.L=8(){k((4.l&&(4.l+'://'))+(4.F&&(4.F+(4.x&&(':'+4.x))+'@'))+(4.E&&4.E)+(4.m&&(':'+4.m))+(4.p&&4.p)+(4.q.L()&&('?'+4.q))+(4.v&&('#'+4.v)))};S(4,a)}}());",62,104,"||||this|var|||function|if|||||||||||return|protocol|port||replace|path|query|match||9a|parseInt|hash|for|pass|instanceof||basePath|selfPath|props|else|host|user|href|auth|value|fromCharCode|String|toString|0x80|gi|link|89ab|n2|in|parse|new|Function|Url|pop|split|Array|length|while|80||join|parseQs|decode||location|443|defaultPorts|0xC0|ef|shift|test|0xE0|createElement|document|32|wss|ws|https|0xFFFF|http|70|cd|substring|gopher|exec|decodeURIComponent|21|ftp|search|null|pathname|hostname|push|clear|strict|delete|use|encodeURIComponent|continue".split("|"),0,{})),function(e,i){"use strict";var n="0.7.3",t="",r="?",s="function",o="undefined",a="object",u="major",l="model",c="name",d="type",p="vendor",f="version",w="architecture",m="console",g="mobile",h="tablet",v="smarttv",b="wearable",y="embedded",x={extend:function(e,i){for(var n in i)-1!=="browser cpu device engine os".indexOf(n)&&i[n].length%2===0&&(e[n]=i[n].concat(e[n]));return e},has:function(e,i){return"string"==typeof e?-1!==i.toLowerCase().indexOf(e.toLowerCase()):void 0},lowerize:function(e){return e.toLowerCase()}},k={rgx:function(){for(var e,n,t,r,u,l,c,d=0,p=arguments;d<p.length&&!l;){var f=p[d],w=p[d+1];if(typeof e===o){e={};for(r in w)u=w[r],typeof u===a?e[u[0]]=i:e[u]=i}for(n=t=0;n<f.length&&!l;)if(l=f[n++].exec(this.getUA()))for(r=0;r<w.length;r++)c=l[++t],u=w[r],typeof u===a&&u.length>0?2==u.length?e[u[0]]=typeof u[1]==s?u[1].call(this,c):u[1]:3==u.length?e[u[0]]=typeof u[1]!==s||u[1].exec&&u[1].test?c?c.replace(u[1],u[2]):i:c?u[1].call(this,c,u[2]):i:4==u.length&&(e[u[0]]=c?u[3].call(this,c.replace(u[1],u[2])):i):e[u]=c?c:i;d+=2}return e},str:function(e,n){for(var t in n)if(typeof n[t]===a&&n[t].length>0){for(var s=0;s<n[t].length;s++)if(x.has(n[t][s],e))return t===r?i:t}else if(x.has(n[t],e))return t===r?i:t;return e}},A={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:"NT 6.4",RT:"ARM"}}}},E={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[c,f,u],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[c,"Opera"],f,u],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[c,f,u],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[c,"IE"],f,u],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[c,"Yandex"],f,u],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[c,/_/g," "],f,u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],[c,f,u],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[c,"Dolphin"],f,u],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[c,"Chrome"],f,u],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[f,u,[c,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[f,u,c],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[c,[u,k.str,A.browser.oldsafari.major],[f,k.str,A.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[c,f,u],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[c,"Netscape"],f,u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[c,f,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,x.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[w,/ower/,"",x.lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[w,x.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[d,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[d,h]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[d,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[d,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,k.str,A.device.amazon.model],[p,"Amazon"],[d,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[d,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[d,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[d,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[d,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[l,[p,"Asus"],[d,h]],[/(sony)\s(tablet\s[ps])/i],[p,l,[d,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[d,m]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[d,m]],[/(playstation\s[3portablevi]+)/i],[l,[p,"Sony"],[d,m]],[/(sprint\s(\w+))/i],[[p,k.str,A.device.sprint.vendor],[l,k.str,A.device.sprint.model],[d,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[d,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[d,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[d,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[d,g]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[p,"Motorola"],l,[d,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[d,h]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[d,h]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[d,g]],[/(samsung);smarttv/i],[p,l,[d,v]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[d,v]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[d,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[d,g]],[/android\s3\.[\s\w-;]{10}(a\d{3})/i],[l,[p,"Acer"],[d,h]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[d,h]],[/(lg) netcast\.tv/i],[p,l,[d,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[d,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[d,h]],[/linux;.+((jolla));/i],[p,l,[d,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[d,b]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[d,b]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[d,x.lowerize],p,l]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,f],[/rv\:([\w\.]+).*(gecko)/i],[f,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,f],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[f,k.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[f,k.str,A.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],f],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,f],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],f],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],f],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,f],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],f],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],f],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,f],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[f,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[f,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,f]]},S=function(i,n){if(!(this instanceof S))return new S(i,n).getResult();var r=i||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:t),s=n?x.extend(E,n):E;this.getBrowser=function(){return k.rgx.apply(this,s.browser)},this.getCPU=function(){return k.rgx.apply(this,s.cpu)},this.getDevice=function(){return k.rgx.apply(this,s.device)},this.getEngine=function(){return k.rgx.apply(this,s.engine)},this.getOS=function(){return k.rgx.apply(this,s.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this.setUA(r)};if(S.VERSION=n,S.BROWSER={NAME:c,MAJOR:u,VERSION:f},S.CPU={ARCHITECTURE:w},S.DEVICE={MODEL:l,VENDOR:p,TYPE:d,CONSOLE:m,MOBILE:g,SMARTTV:v,TABLET:h,WEARABLE:b,EMBEDDED:y},S.ENGINE={NAME:c,VERSION:f},S.OS={NAME:c,VERSION:f},typeof exports!==o)typeof module!==o&&module.exports&&(exports=module.exports=S),exports.UAParser=S;else{e.UAParser=S,typeof define===s&&define.amd&&define(function(){return S});var N=e.jQuery||e.Zepto;if(typeof N!==o){var O=new S;N.ua=O.getResult(),N.ua.get=function(){return O.getUA()},N.ua.set=function(e){O.setUA(e);var i=O.getResult();for(var n in i)N.ua[n]=i[n]}}}}(this),function(){"use strict";var e;e=this.parrot={version:"0.12.8beta",$:"undefined"!=typeof $$&&null!==$$?$$:$,_partial:function(e){var i;return i=Array.prototype.slice.call(arguments,1),function(){var n;return n=i.concat(Array.prototype.slice.call(arguments)),e.apply(this,n)}}},function(){return e.environment="development",e.language=window.navigator.language.slice(0,2),e.endpoint={add:function(e){return this[e.name]=function(){return e.url},this},set:function(i){return e.environment=i,this}}}(),function(){var i,n;return i={},n=function(e){var i,n,t,r,s,o,a,u,l,c;for(s=new Url,c=["protocol","path","host","port","hash"],o=0,u=c.length;u>o;o++)n=c[o],s[n]="";for(i=a=0,l=e.length;l>a;i=a+=2)t=e[i],s.query[t]=e[i+1];return r=s.toString(),"?"===r.charAt(0)&&(r=r.substring(1)),r},e.url={getOrUpdate:function(e,t){var r;if(null==t&&(t=void 0),null!=t){for(r in t)i[e][r]=t[r];null!=t.query&&(i[e].query=n(t.query))}return i[e]},add:function(t){var r;return r=t.name,delete t.name,null!=t.query&&(t.query=n(t.query)),i[r]=t,this[r]=e._partial(this.getOrUpdate,r),this}}}(e.url),function(){return e.ajax=function(i,n){var t,r,s,o,a;return t=function(i){var n;return n={METHOD:"get",SEND:{},HEADERS:{},ASYNC:!0,DATATYPE:"json",CONTENT_TYPE:"application/x-www-form-urlencoded"},new Promise(function(t,r){return e.$.ajax({url:i.url,type:i.method||n.METHOD,data:i.send||n.SEND,dataType:i.dataType||n.DATATYPE,contentType:i.contentType||n.CONTENT_TYPE,async:i.async||n.ASYNC,headers:i.headers||n.HEADERS,success:function(e){return 0===e.status?r({code:0,message:{errors:[{param:"url",msg:"Server Unavailable."}]}}):t(e)},error:function(e,i){var n;if(i="object"==typeof e?e:i,null!=i.responseJSON)n=i.responseJSON;else try{n=JSON.parse(i.response)}catch(t){n=i.response}return r({code:i.status,message:n})}})})},r=function(e,i){return t(e).then(function(e){return i(null,e)},function(e){return i(e,null)})},s=""+e.endpoint[e.environment](),i.url?i.url!==s&&i.url!==""+s+"/"+i.path&&i.url!==""+s+"?"+i.query&&i.url!==""+s+"/"+i.path+"?"+i.query&&(null!=i.path&&(i.url=""+i.url+"/"+i.path),null!=i.query&&(i.url=""+i.url+"?"+i.query)):("string"==typeof arguments[0]&&(null!=("function"==typeof(o=e.url)[a=arguments[0]]?o[a]():void 0)?i=e.url.getOrUpdate(arguments[0],arguments[1]):"object"==typeof arguments[1]?(i=arguments[1],i.url=arguments[0]):i={url:arguments[0]},"object"==typeof arguments[1]&&(n=arguments[2])),i.query&&i.path?i.url=""+s+"/"+i.path+"?"+i.query:(i.query&&!i.path&&(i.url=""+s+"?"+i.query),i.path&&!i.query&&(i.url=""+s+"/"+i.path))),r(i,n)}}(),function(){var i,n,t,r,s,o,a,u;return t=function(){var i,t,r,s,o,a,u,l;for(a=Object.keys(localStorage),t=0,s=a.length;s>t;t++)i=a[t],e.local[i]=e._partial(n,"local",i);for(u=Object.keys(sessionStorage),l=[],r=0,o=u.length;o>r;r++)i=u[r],l.push(e.session[i]=e._partial(n,"session",i));return l}(),u=function(e){return"local"===e?localStorage:sessionStorage},n=function(e,i){var n,t;n=u(e).getItem(i);try{return n=JSON.parse(n)}catch(r){return t=r,n}},i=function(i,t,r){return"string"!=typeof r&&(r=JSON.stringify(r)),u(i).setItem(t,r),e[i][t]=e._partial(n,i,t)},s=function(i,n){return delete e[i][n],u(i).removeItem(n)},o=function(i){var n,t,r,s;for(t=Object.keys(u(i)),r=0,s=t.length;s>r;r++)n=t[r],delete e[i][n];return u(i).clear()},a=function(e){return u(e).length},r=function(e,i){return null!=u(e)[i]},e.local={add:function(e,n){return i("local",e,n),this},remove:function(){var e,i,n;for(i=0,n=arguments.length;n>i;i++)e=arguments[i],s("local",e);return this},removeAll:function(){return o("local"),this},size:function(){return a("local")},isAvailable:function(e){return r("local",e)}},e.session={get:function(){return n("session","session")},add:function(){var e,n;return 1===arguments.length?(n="session",e=arguments[0]):(n=arguments[0],e=arguments[1]),i("session",n,e),this},remove:function(){var e,i,n;if(0===arguments.length)s("session","session");else for(i=0,n=arguments.length;n>i;i++)e=arguments[i],s("session",e);return this},removeAll:function(){return o("session"),this},size:function(){return a("session")},isAvailable:function(){var e;return e=0===arguments.length?"session":arguments[0],r("session",e)}}}(),function(i){var n;return n={},e.notification={getOrUpdate:function(e,i){var t;if(null==i&&(i=void 0),null!=i)for(t in i)n[e][t]=i[t];return n[e]},add:function(t){var r;return r=t.name,delete t.name,n[r]=t,this[r]=e._partial(this.getOrUpdate,r).bind(i),this},show:function(e,i){var n,t;return 1===arguments.length&&"object"==typeof e&&(e=void 0,i=arguments[0]),t=function(){return function(e){var i,n;try{return window.Notification.requestPermission(),n=e.title,delete e.title,new Notification(n,e)}catch(t){throw i=t,new Error("Notification API is not available.")}}}(this),null==e?t(i):(n=this.getOrUpdate(e,i),t(n))}}}(e.notification),function(){return e.device={detection:function(){return e.$(document.body).attr("data-lang",e.language),e.$(document.body).attr("data-os",this.os.name),e.$(document.body).attr("data-device",this.type),e.$(document.body).attr("data-orientation",this.screen.orientation),e.$(document.body).attr("data-screen",this.screen.size)},noDetection:function(){var i,n,t,r,s;for(r=["lang","os","device","orientation","screen"],s=[],n=0,t=r.length;t>n;n++)i=r[n],s.push(e.$(document.body).removeAttr("data-"+i));return s}}}(),e.$(function(){var i;return i=function(){var i,n,t,r,s,o,a,u,l;u=e.device.detection,l=e.device.noDetection,t=(new UAParser).getResult(),e.device=t.device,delete t.device;for(r in t)o=t[r],("cpu"!==r||null!=r.architecture)&&(e.device[r]=o);return null==e.device.type&&(e.device.type="desktop",delete e.device.vendor,delete e.device.model),a=window.screen.availWidth,i=window.screen.availHeight,s=i>a&&480>a||a>i&&480>i?"small":"normal",n=1>i/a?"landscape":"portrait",e.device.screen={width:a,height:i,size:s,orientation:n},e.device.detection=u,e.device.noDetection=l}(),e.device.detection(),e.$(window).on("resize",i),e.$(window).on("orientationchange",i)})}.call(this);