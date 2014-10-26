(function() {
  describe('Parrot ::', function() {
    describe('endpoint ::', function() {
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
    describe('url ::', function() {
      it('add with default values', function() {
        var _default;
        _default = {
          method: 'GET',
          protocol: 'http',
          path: void 0,
          query: void 0,
          send: void 0
        };
        parrot.url.add({
          name: 'login'
        });
        return parrot.url.login().should.eql(_default);
      });
      it('add with query', function() {
        var _default;
        _default = {
          method: 'GET',
          protocol: 'http',
          path: void 0,
          query: 'sort=id%20asc',
          send: void 0
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
          method: 'GET',
          protocol: 'http',
          path: 'tweet',
          query: 'sort=id%20asc',
          send: void 0
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets().should.eql(_default);
      });
      it('ajax with the path in the url', function(done) {
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
      it('ajax with path and query', function(done) {
        var request;
        request = {
          url: 'http://echo.jsontest.com',
          path: 'key/value/one/two',
          method: 'GET'
        };
        return parrot.ajax(request, function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      it('ajax using short method for GET methods', function(done) {
        return parrot.ajax('http://echo.jsontest.com/key/value/one/two', function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      it('ajax using url object', function(done) {
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
      it('ajax using url object (alternative method)', function(done) {
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
      return it('add with path and query and change values dynamically', function() {
        var _default;
        _default = {
          method: 'POST',
          protocol: 'http',
          path: 'tweet',
          query: 'sort=id%20asc',
          send: void 0
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets({
          method: 'POST'
        }).should.eql(_default);
      });
    });
    return describe('storage ::', function() {
      before(function() {
        return localStorage.clear();
      });
      it('set and get simple value', function() {
        parrot.store.local.set('one', 'two').one().should.eql('two');
        localStorage.setItem('one', 'three');
        return parrot.store.local.one().should.eql('three');
      });
      it('set and get object', function() {
        var _object;
        _object = {
          foo: 'bar'
        };
        return parrot.store.local.set('myData', _object).myData().foo.should.eql('bar');
      });
      it('updated a item', function() {
        return parrot.store.local.set('one', 'three').one().should.eql('three');
      });
      it('get the size', function() {
        return parrot.store.local.size().should.eql(2);
      });
      it('check for a key', function() {
        return parrot.store.local.isAvailable('one').should.eql(true);
      });
      xit('remove one key', function() {
        parrot.store.local.remove('one');
        return should.not.exist(parrot.store.local.one());
      });
      return xit('remove all', function() {
        parrot.store.local.removeAll();
        return should.not.exist(parrot.store.local.myData());
      });
    });
  });

}).call(this);
