(function() {
  describe('Parrot ::', function() {
    describe('endpoint ::', function() {
      it('add', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1337'
        });
        return parrot.endpoint.get({
          name: 'development'
        }).should.eql('http://localhost:1337');
      });
      it('add concatenate', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1334'
        }).add({
          name: 'production',
          url: 'http://api.com'
        });
        parrot.endpoint.get({
          name: 'development'
        }).should.eql('http://localhost:1334');
        return parrot.endpoint.get({
          name: 'production'
        }).should.eql('http://api.com');
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
      return it('add with path and query', function() {
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
    });
  });

}).call(this);
