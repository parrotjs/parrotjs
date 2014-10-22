describe 'Sailor ::', ->

  describe 'intialize', ->
    it 'with api, env and token params',  ->
      Sailor.initialize 'localhost', 'environment', '123'
      Sailor.api.should.eql 'localhost'
      Sailor.env.should.eql 'environment'
      Sailor.token.should.eql '123'

      io.sails.url.should.eql 'localhost'
      io.sails.environment.should.eql 'environment'

  describe 'session', ->
    it 'store a retrieve a string', ->
      Sailor.store('test', 'myTest')
      Sailor.store('test').should.eql 'myTest'

    it 'store a retrieve a object', ->
      Sailor.store('test2', foo: 'bar')
      Sailor.store('test2').should.eql foo: 'bar'

    xit 'destroy the value of a key', ->
      Sailor.destroy.destroy('test')
      Sailor.destroy.destroy('test2')

  describe 'environment', ->
    it 'register a new environment' , ->
      Sailor.registerEnvironment 'development', 'localhost'

    it 'set and retrieve an environment', ->
      Sailor.environment 'development'
      Sailor.environment().should.eql 'development'
      Sailor.api.should.eql 'localhost'

  describe 'url', ->
    it 'register a new endpoint', ->
      Sailor.endpoint
