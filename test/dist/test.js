(function() {
  describe('Parrot ::', function() {
    describe('Endpoint ::', function() {
      it('add', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1337'
        });
        return parrot.endpoint.development().should.eql('http://localhost:1337');
      });
      it('add concatenate', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1334'
        }).add({
          name: 'production',
          url: 'http://api.com'
        });
        parrot.endpoint.development().should.eql('http://localhost:1334');
        return parrot.endpoint.production().should.eql('http://api.com');
      });
      return it('set', function() {
        parrot.endpoint.set('production');
        return parrot.environment.should.eql('production');
      });
    });
    describe('URL ::', function() {
      it('add with default values', function() {
        var _default;
        _default = {};
        parrot.url.add({
          name: 'login'
        });
        return parrot.url.login().should.eql(_default);
      });
      it('add with query', function() {
        var _default;
        _default = {
          query: "sort=id%20asc"
        };
        parrot.url.add({
          name: 'tweets',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets().should.eql(_default);
      });
      it('add with path and query', function() {
        var _default;
        _default = {
          path: 'tweet',
          query: 'sort=id%20asc'
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets().should.eql(_default);
      });
      it('add with path and query and change values dynamically', function() {
        var _default;
        _default = {
          path: 'tweet',
          query: 'sort=id%20desc',
          method: 'POST'
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets({
          method: 'POST',
          query: ['sort', 'id desc']
        }).should.eql(_default);
      });
      return it('added headers dynamically', function() {
        var _default, _headers;
        _headers = {
          Autorization: 'Bearer token'
        };
        _default = {
          path: 'tweet',
          query: 'sort=id%20desc',
          headers: _headers,
          method: 'POST'
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets({
          headers: _headers,
          method: 'POST',
          query: ['sort', 'id desc']
        }).should.eql(_default);
      });
    });
    describe('AJAX ::', function() {
      describe('Parrot URL object', function() {
        it('ajax with default options', function(done) {
          parrot.endpoint.add({
            name: 'testing',
            url: 'http://echo.jsontest.com'
          }).set('testing');
          parrot.url.add({
            name: 'jsontest',
            path: 'key/value/one/two'
          });
          return parrot.ajax(parrot.url.jsontest(), function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
        return it('ajax with custom options', function(done) {
          parrot.endpoint.add({
            name: 'testing',
            url: 'http://echo.jsontest.com'
          }).set('testing');
          parrot.url.add({
            name: 'jsontest',
            path: 'key/value/one/two',
            method: 'no_exist'
          });
          return parrot.ajax(parrot.url.jsontest({
            method: 'get'
          }), function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
      });
      describe('Parrot URL object (alternative method)', function() {
        it('ajax with default options', function(done) {
          parrot.endpoint.add({
            name: 'testing',
            url: 'http://echo.jsontest.com'
          }).set('testing');
          parrot.url.add({
            name: 'jsontest',
            path: 'key/value/one/two'
          });
          return parrot.ajax('jsontest', function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
        return it('ajax with custom settings', function(done) {
          parrot.endpoint.add({
            name: 'testing',
            url: 'http://echo.jsontest.com'
          }).set('testing');
          parrot.url.add({
            name: 'jsontest',
            path: 'key/value/one/two',
            method: 'no_exist'
          });
          return parrot.ajax('jsontest', {
            method: 'get'
          }, function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
      });
      return describe('Simple URL', function() {
        it('only with url (included the path inside)', function(done) {
          var request;
          request = {
            url: 'http://echo.jsontest.com/key/value/one/two',
            method: 'GET'
          };
          return parrot.ajax(request, function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
        it('with url and path', function(done) {
          var request;
          request = {
            url: 'http://echo.jsontest.com/',
            path: 'key/value/three/four',
            method: 'GET'
          };
          return parrot.ajax(request, function(err, result) {
            result.key.should.eql('value');
            return done();
          });
        });
        it('alternative method', function(done) {
          return parrot.ajax('http://echo.jsontest.com/key/value/one/two', function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
        return it('alternative method with options', function(done) {
          return parrot.ajax('http://echo.jsontest.com', {
            path: '/key/value/one/two'
          }, function(err, result) {
            result.one.should.eql('two');
            return done();
          });
        });
      });
    });
    describe('Language ::', function() {
      return it('set default language', function() {
        return parrot.language.should.eql('en');
      });
    });
    return describe('Storage ::', function() {
      before(function() {
        return localStorage.clear();
      });
      it('set and get simple value', function() {
        parrot.local.set('one', 'two').one().should.eql('two');
        localStorage.setItem('one', 'three');
        return parrot.local.one().should.eql('three');
      });
      it('set and get object', function() {
        var _object;
        _object = {
          foo: 'bar'
        };
        return parrot.local.set('myData', _object).myData().foo.should.eql('bar');
      });
      it('updated a item', function() {
        return parrot.local.set('one', 'three').one().should.eql('three');
      });
      it('get the size', function() {
        return parrot.local.size().should.eql(2);
      });
      it('check for a key', function() {
        return parrot.local.isAvailable('one').should.eql(true);
      });
      xit('remove one key', function() {
        parrot.local.clear('one');
        return should.not.exist(parrot.local.one());
      });
      xit('remove all', function() {
        parrot.local.clearAll();
        return should.not.exist(parrot.local.myData());
      });
      return describe('Session ::', function() {
        it('save a simple session and retrieve', function() {
          parrot.session.set('session');
          sessionStorage.getItem('session').should.eql('session');
          return parrot.session.get().should.eql('session');
        });
        return it('save a object session and retrieve', function() {
          var _session;
          _session = {
            foo: 'bar'
          };
          parrot.session.set(_session);
          return parrot.session.get().should.eql({
            foo: 'bar'
          });
        });
      });
    });
  });

}).call(this);
