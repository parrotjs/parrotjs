(function() {
  describe('Parrot ::', function() {
    return it('exist parrot as global object', function() {
      return (typeof parrot !== "undefined" && parrot !== null).should.eql(true);
    });
  });

}).call(this);
