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
    version: "0.10.22",
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

  parrot.initialize = (function() {
    return console.log('hello world');
  })();

  'use strict';

  parrot.endpoint = (function() {})();

  'use strict';

  parrot.url = (function() {})();

  'use strict';

  parrot.storage = (function() {})();

}).call(this);
