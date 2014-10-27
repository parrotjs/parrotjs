/**
 * parrotjs - Client library to connect your frontend application with whatever API backend
 * @version v0.10.27
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){"use strict";var t;t=this.parrot={version:"0.10.27",environment:"development",initialize:{},endpoint:{},url:{},store:{local:{},session:{}},$:"undefined"!=typeof $$&&null!==$$?$$:$},function(){return t._DEFAULT={METHOD:"GET",PROTOCOL:"http",SEND:{}},t._partial=function(t){var e;return e=Array.prototype.slice.call(arguments,1),function(){var r;return r=e.concat(Array.prototype.slice.call(arguments)),t.apply(this,r)}},t._createAjaxPromise=function(e){return new Promise(function(r){return function(n,s){return t.$.ajax({type:e.method||r._DEFAULT.METHOD,url:e.url,data:e.send||r._DEFAULT.SEND,dataType:"json",contentType:"application/x-www-form-urlencoded",success:function(t){var e;return 0===t.status?(e={code:0,message:"Server Unavailable"},s(e)):n(t)},error:function(t,e){var r;return r={code:e.status,message:e.response},s(r)}})}}(this))},t.ajax=function(e,r){var n;return n=""+t.endpoint[t.environment](),e.url?e.url!==n&&e.url!==""+n+"/"+e.path&&e.url!==""+n+"?"+e.query&&e.url!==""+n+"/"+e.path+"?"+e.query&&(null!=e.path&&(e.url=""+e.url+"/"+e.path),null!=e.query&&(e.url=""+e.url+"?"+e.query)):("string"==typeof arguments[0]&&(e=t.url._URLS[arguments[0]]||{url:arguments[0]}),e.query&&e.path?e.url=""+n+"/"+e.path+"?"+e.query:(e.query&&!e.path&&(e.url=""+n+"?"+e.query),e.path&&!e.query&&(e.url=""+n+"/"+e.path))),this._createAjaxPromise(e).then(function(t){return r(null,t)},function(t){return r(t,null)})}}(),function(e){return e.add=function(t){return this[t.name]=function(){return t.url},this},e.set=function(e){return t.environment=e,this},e.remove=function(t){return delete this[t],this}}(t.endpoint),function(e){return e._URLS={},e._getQuery=function(t){var e,r,n,s,o,u;for(u=new Url,u.protocol="",u.path="",e=s=0,o=t.length;o>s;e=s+=2)r=t[e],u.query[r]=t[e+1];return n=u.toString(),"?"===n.charAt(0)&&(n=n.substring(1)),n},e._bindAdd=function(t,e){return null!=e&&(null!=e.method&&(this._URLS[t].method=e.method),null!=e.protocol&&(this._URLS[t].protocol=e.protocol),null!=e.path&&(this._URLS[t].path=e.path),null!=e.query&&(this._URLS[t].query=this._getQuery(e.query)),null!=e.send&&(this._URLS[t].send=e.send)),this._URLS[t]},e.add=function(r){return null==r.method&&(r.method=t._DEFAULT.METHOD),null==r.protocol&&(r.protocol=t._DEFAULT.PROTOCOL),r.query=null!=r.query?this._getQuery(r.query):void 0,null==r.send&&(r.send=void 0),this._URLS[r.name]={method:r.method,protocol:r.protocol,path:r.path,query:r.query,send:r.send},this[r.name]=t._partial(this._bindAdd,r.name).bind(e),this},e.remove=function(t){return delete this[t],this}}(t.url),function(e){return e._storage=function(t){return"local"===t?localStorage:sessionStorage},e._get=function(t,e,r){return null==r&&(r=!1),r?JSON.parse(this._storage(t).getItem(e)):this._storage(t).getItem(e)},e._set=function(r,n,s){return"string"!=typeof s?(s=JSON.stringify(s),this._storage(r).setItem(n,s),this[r][n]=t._partial(this._get,r,n,!0).bind(e)):(this._storage(r).setItem(n,s),this[r][n]=t._partial(this._get,r,n,!1).bind(e))},e._clear=function(t,e){return delete this[t][e],this._storage(t).removeItem(e)},e._clearAll=function(t){var e,r,n,s;for(r=Object.keys(this._storage(t)),n=0,s=r.length;s>n;n++)e=r[n],delete this[t][e];return this._storage(t).clear()},e._size=function(t){return this._storage(t).length},e._is=function(t,e){return null!=this._storage(t)[e]?!0:!1},e.local.set=function(e,r){return t.store._set("local",e,r),this},e.local.clear=function(e){return t.store._clear("local",e),this},e.local.clearAll=function(){return t.store._clearAll("local"),this},e.local.size=function(){return t.store._size("local")},e.local.isAvailable=function(e){return t.store._is("local",e)},e.session.set=function(){var e,r;return 1===arguments.length?(r="session",e=arguments[0]):(r=arguments[0],e=arguments[1]),t.store._set("session",r,e),this},e.session.clear=function(){var e;return e=0===arguments.length?"session":arguments[0],t.store._clear("session",e),this},e.session.clearAll=function(){return t.store._clearAll("session"),this},e.session.size=function(){return t.store._size("session")},e.session.isAvailable=function(){var e;return e=0===arguments.length?"session":arguments[0],t.store._is("session",e)}}(t.store)}).call(this);