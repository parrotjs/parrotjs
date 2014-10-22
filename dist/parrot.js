/**
 * parrotjs - Client library to connect your frontend application with whatever sails backend
 * @version v0.10.22
 * @link    http://github.com/sailor/parrotjs
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function() {
  'use strict';
  var Parrot,
    __slice = [].slice;

  Parrot = this.Parrot = {
    version: "0.10.22",
    Device: {},
    Storage: {},
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

  Parrot.Device = (function() {})();

  'use strict';

  Parrot.Storage = (function() {})();

}).call(this);
