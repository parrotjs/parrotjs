(function() {
  describe('Parrot ::', function() {
    describe('endpoint ::', function() {
      it('add', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1337'
        });
        return parrot.endpoint.development.should.eql('http://localhost:1337');
      });
      it('add concatenate', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1334'
        }).add({
          name: 'production',
          url: 'http://api.com'
        });
        parrot.endpoint.development.should.eql('http://localhost:1334');
        return parrot.endpoint.production.should.eql('http://api.com');
      });
      return it('set', function() {
        parrot.endpoint.set('production');
        return parrot.environment.should.eql('production');
      });
    });
    return describe('url ::', function() {
      it('add with default values', function() {
        var _default;
        _default = {
          method: 'GET',
          protocol: 'http',
          path: void 0,
          query: void 0
        };
        parrot.url.add({
          name: 'login'
        });
        return parrot.url.login.should.eql(_default);
      });
      it('add with query', function() {
        var _default;
        _default = {
          method: 'GET',
          protocol: 'http',
          path: void 0,
          query: 'sort=id%20asc'
        };
        parrot.url.add({
          name: 'tweets',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets.should.eql(_default);
      });
      it('add with path and query', function() {
        var _default;
        _default = {
          method: 'GET',
          protocol: 'http',
          path: 'tweet',
          query: 'sort=id%20asc'
        };
        parrot.url.add({
          name: 'tweets',
          path: 'tweet',
          query: ['sort', 'id asc']
        });
        return parrot.url.tweets.should.eql(_default);
      });
      it('ajax', function() {
        var _url;
        _url = 'http://echo.jsontest.com/key/value/one/two';
        return parrot.url.ajax({
          url: _url
        }, function(err, result) {
          return result.one.should.eql('two');
        });
      });
      it('ajax with default values', function() {
        return parrot.url.ajax('http://echo.jsontest.com/key/value/one/two', function(err, result) {
          return result.one.should.eql('two');
        });
      });
      it('ajax using url object', function() {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        return parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two'
        }).ajax(parrot.url.jsontest, function(err, result) {
          return result.one.should.eql('two');
        });
      });
      it('ajax using url object (alternative method)', function() {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        return parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two'
        }).ajax('jsontest', function(err, result) {
          return result.one.should.eql('two');
        });
      });
      return xit('add with path and query and change values dynamically', function() {
        var _default;
        _default = {
          method: 'POST',
          protocol: 'http',
          path: 'tweet',
          query: 'sort=id%20asc'
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
  });

}).call(this);
