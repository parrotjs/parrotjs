/**
 * parrotjs - Client library to connect your frontend application with whatever sails backend
 * @version v0.10.22
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function() {
  'use strict';
  var parrot;

  parrot = this.parrot = {
    version: '0.10.22',
    environment: 'development',
    initialize: {},
    endpoint: {},
    url: {},
    storage: {},
    $: typeof $$ !== "undefined" && $$ !== null ? $$ : $
  };

  'use strict';

  parrot.initialize = (function() {})();

  'use strict';

  (function(fn) {
    fn.add = function(obj) {
      this[obj.name] = obj.url;
      return this;
    };
    fn.set = function(environment) {
      parrot.environment = environment;
      return this;
    };
    return fn.remove = function(name) {
      delete this[name];
      return this;
    };
  })(parrot.endpoint);

  'use strict';

  (function(fn) {
    fn._URLS = {};
    fn._DEFAULT = {
      method: 'GET',
      protocol: 'http'
    };
    fn._getQuery = function(queries) {
      var index, option, query, _i, _len, _url;
      _url = new Url();
      _url.protocol = '';
      _url.path = '';
      for (index = _i = 0, _len = queries.length; _i < _len; index = _i += 2) {
        option = queries[index];
        _url.query[option] = queries[index + 1];
      }
      query = _url.toString();
      if (query.charAt(0) === '?') {
        query = query.substring(1);
      }
      return query;
    };
    fn._createAjaxPromise = function(obj) {
      var promise;
      promise = new Hope.Promise();
      parrot.$.ajax({
        type: obj.method || 'GET',
        url: obj.url,
        data: obj.send || {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: (function(_this) {
          return function(xhr) {
            var error;
            if (xhr.status === 0) {
              error = {
                code: 0,
                message: 'Server Unavailable'
              };
              return promise.done(error, null);
            } else {
              return promise.done(null, xhr);
            }
          };
        })(this),
        error: (function(_this) {
          return function(xhr, request) {
            var error;
            error = {
              code: request.status,
              message: request.response
            };
            return promise.done(error, null);
          };
        })(this)
      });
      return promise;
    };
    fn._bindAdd = function(name, update) {
      var obj;
      return obj = this._URLS[name];
    };
    fn.ajax = function(obj, cb) {
      var promise;
      if (typeof arguments[0] === 'string') {
        obj = this._URLS[arguments[0]] || {
          url: arguments[0]
        };
      }
      if (!obj.url) {
        obj.url = "" + parrot.endpoint[parrot.environment];
      }
      if (obj.path != null) {
        obj.url = "" + obj.url + "/" + obj.path;
      }
      if (obj.query != null) {
        obj.url = "" + obj.url + "?" + obj.query;
      }
      promise = this._createAjaxPromise(obj);
      return promise.then(function(err, result) {
        return cb(err, result);
      });
    };
    fn.add = function(obj) {
      if (obj.method == null) {
        obj.method = this._DEFAULT.method;
      }
      if (obj.protocol == null) {
        obj.protocol = this._DEFAULT.protocol;
      }
      this[obj.name] = this._URLS[obj.name] = {
        method: obj.method,
        protocol: obj.protocol,
        path: obj.path,
        query: obj.query != null ? this._getQuery(obj.query) : void 0
      };
      return this;
    };
    return fn.remove = function(name) {
      delete this[name];
      return this;
    };
  })(parrot.url);

  'use strict';

  parrot.storage = (function() {})();

}).call(this);
