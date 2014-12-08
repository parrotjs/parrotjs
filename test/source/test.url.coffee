describe 'URL ::', ->

  describe 'Language ::', ->

    it 'set default language', ->
      parrot.language.should.eql 'en'

  describe 'Endpoint ::', ->

    it 'add', ->
      parrot.endpoint.add(name: 'development', url:'http://localhost:1337')
      parrot.endpoint.development().should.eql 'http://localhost:1337'

    it 'add concatenate', ->
      parrot.endpoint
      .add(name: 'development', url:'http://localhost:1334')
      .add(name: 'production', url:'http://api.com')
      parrot.endpoint.development().should.eql 'http://localhost:1334'
      parrot.endpoint.production().should.eql 'http://api.com'

    it 'set', ->
      parrot.endpoint.set('production')
      parrot.environment.should.eql 'production'

  it 'add with default values', ->
    _default = {}
    parrot.url.add name: 'login'
    parrot.url.login().should.eql _default

  it 'add with query',  ->
    _default = { query: "sort=id%20asc" }
    parrot.url.add name:'tweets', query: ['sort','id asc']
    parrot.url.tweets().should.eql _default

  it 'add with path and query',  ->
    _default = { path: 'tweet', query: 'sort=id%20asc' }
    parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
    parrot.url.tweets().should.eql _default

  it 'add with path and query and change values dynamically',  ->
    _default = { path: 'tweet', query: 'sort=id%20desc', method: 'POST' }
    parrot.url.add name: 'tweets', path: 'tweet', query: ['sort','id asc']
    parrot.url.tweets(method: 'POST', query: ['sort', 'id desc']).should.eql _default

  it 'added headers dynamically', ->
    _headers = Autorization: 'Bearer token'
    _default =  { path: 'tweet', query: 'sort=id%20desc', headers: _headers, method: 'POST' }
    parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
    parrot.url.tweets(headers: _headers, method: 'POST', query: ['sort', 'id desc']).should.eql _default
