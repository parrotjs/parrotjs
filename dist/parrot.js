/**
 * parrotjs - Client library to connect your frontend application with whatever sails backend
 * @version v0.10.22
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function() {
  'use strict';
  var parrot,
    __slice = [].slice;

  parrot = this.parrot = {
    version: '0.10.22',
    environment: 'development',
    initialize: {},
    endpoint: {},
    url: {},
    storage: {},
    $: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof $$ !== "undefined" && $$ !== null) {
        return $$.apply(null, args);
      } else {
        return $.apply(null, args);
      }
    }
  };

  'use strict';

  parrot.initialize = (function() {})();

  'use strict';

  (function(fn) {
    fn.add = function(obj) {
      this[obj.name] = obj.url;
      return this;
    };
    return fn.set = function(environment) {
      parrot.environment = environment;
      return this;
    };
  })(parrot.endpoint);

  'use strict';

  (function(fn) {
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
    fn.add = function(obj) {
      if (obj.method == null) {
        obj.method = this._DEFAULT.method;
      }
      if (obj.protocol == null) {
        obj.protocol = this._DEFAULT.protocol;
      }
      this[obj.name] = {
        method: obj.method,
        protocol: obj.protocol,
        path: obj.path,
        query: obj.query != null ? this._getQuery(obj.query) : void 0
      };
      return this;
    };
    return fn.remove = function() {
      delete this._URLS[name];
      return this;
    };
  })(parrot.url);

  'use strict';

  parrot.storage = (function() {})();

}).call(this);
