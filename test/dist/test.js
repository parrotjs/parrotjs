(function() {
  describe('Sailor ::', function() {
    describe('intialize', function() {
      return it('with api, env and token params', function() {
        Sailor.initialize('localhost', 'environment', '123');
        Sailor.api.should.eql('localhost');
        Sailor.env.should.eql('environment');
        Sailor.token.should.eql('123');
        io.sails.url.should.eql('localhost');
        return io.sails.environment.should.eql('environment');
      });
    });
    describe('session', function() {
      it('store a retrieve a string', function() {
        Sailor.store('test', 'myTest');
        return Sailor.store('test').should.eql('myTest');
      });
      it('store a retrieve a object', function() {
        Sailor.store('test2', {
          foo: 'bar'
        });
        return Sailor.store('test2').should.eql({
          foo: 'bar'
        });
      });
      return xit('destroy the value of a key', function() {
        Sailor.destroy.destroy('test');
        return Sailor.destroy.destroy('test2');
      });
    });
    describe('environment', function() {
      it('register a new environment', function() {
        return Sailor.registerEnvironment('development', 'localhost');
      });
      return it('set and retrieve an environment', function() {
        Sailor.environment('development');
        Sailor.environment().should.eql('development');
        return Sailor.api.should.eql('localhost');
      });
    });
    return describe('url', function() {
      return it('register a new endpoint');
    });
  });

}).call(this);
