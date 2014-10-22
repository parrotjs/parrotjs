describe 'Parrot ::', ->

  describe 'endpoint ::', ->

    it 'add', ->
      parrot.endpoint.add(name: 'development', url:'http://localhost:1337')
      parrot.endpoint.get(name:'development').should.eql 'http://localhost:1337'

    it 'add concatenate', ->
      parrot.endpoint
      .add(name: 'development', url:'http://localhost:1334')
      .add(name: 'production', url:'http://api.com')
      parrot.endpoint.get(name:'development').should.eql 'http://localhost:1334'
      parrot.endpoint.get(name:'production').should.eql 'http://api.com'

    it 'set', ->
      parrot.endpoint.set('production')
      parrot.environment.should.eql 'production'

  describe 'url ::', ->

    it 'add with default values', ->
      _default = { method: 'GET', protocol: 'http', path: undefined, query: undefined }
      parrot.url.add name: 'login'
      parrot.url.login.should.eql _default

    it 'add with query',  ->
      _default = { method: 'GET', protocol: 'http', path: undefined, query: 'sort=id%20asc' }
      parrot.url.add name:'tweets', query: ['sort','id asc']
      parrot.url.tweets.should.eql _default

    it 'add with path and query',  ->
      _default = { method:'GET', protocol:'http', path: 'tweet', query:'sort=id%20asc' }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets.should.eql _default
