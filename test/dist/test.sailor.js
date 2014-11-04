(function() {
  describe('Sailor connectivity ::', function() {
    before(function() {
      parrot.endpoint.add({
        name: 'development',
        url: 'http://localhost:1337'
      }).add({
        name: 'production',
        url: 'https://zb-api.herokuapp.com'
      }).set('development');
      return parrot.url.add({
        name: 'signup',
        path: 'user',
        method: 'post'
      }).add({
        name: 'login',
        path: 'user/login',
        method: 'post'
      }).add({
        name: 'logout',
        path: 'user/logout',
        method: 'post'
      }).add({
        name: 'updateProfile',
        path: 'user/profile',
        method: 'put'
      }).add({
        name: 'find',
        path: 'user',
        method: 'get'
      });
    });
    xit('register user', function(done) {
      parrot.url.signup({
        send: {
          username: "kikobeats",
          email: "kiko@sailor.com",
          password: "password"
        }
      });
      return parrot.ajax('signup', function(err, response) {
        console.log("signup ::");
        console.log(err);
        console.log(response);
        window.token = response.token;
        window.user = response.user;
        return done();
      });
    });
    it('login user', function(done) {
      parrot.url.login({
        send: {
          identifier: "kikobeats",
          password: "password"
        }
      });
      return parrot.ajax('login', function(err, response) {
        console.log("login ::");
        console.log(err);
        console.log(response);
        window.token = response.token;
        window.user = response.user;
        return done();
      });
    });
    return it('finAll users', function(done) {
      var _headers;
      _headers = {
        Authorization: "Bearer " + window.token.access_token
      };
      parrot.url.find({
        headers: _headers
      });
      return parrot.ajax('find', function(err, response) {
        console.log("find ::");
        console.log(err);
        console.log(response);
        return done();
      });
    });
  });

}).call(this);
