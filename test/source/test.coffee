describe 'Parrot ::', ->

  describe 'endpoint ::', ->

    it 'add', ->
      parrot.endpoint.add(name: 'development', url:'http://localhost:1337')
      parrot.endpoint.development.should.eql 'http://localhost:1337'

    it 'add concatenate', ->
      parrot.endpoint
      .add(name: 'development', url:'http://localhost:1334')
      .add(name: 'production', url:'http://api.com')
      parrot.endpoint.development.should.eql 'http://localhost:1334'
      parrot.endpoint.production.should.eql 'http://api.com'

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

    it 'ajax', ->
      _url = 'http://echo.jsontest.com/key/value/one/two'
      parrot.url.ajax url:_url, (err, result) ->
        result.one.should.eql 'two'

    it 'ajax with default values', ->
      parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
        result.one.should.eql 'two'

    it 'ajax using url object', ->

      parrot.endpoint
      .add(name: 'testing', url:'http://echo.jsontest.com')
      .set('testing')

      parrot.url
      .add name:'jsontest', path:'key/value/one/two'
      .ajax parrot.url.jsontest, (err, result) ->
        result.one.should.eql 'two'

    it 'ajax using url object (alternative method)', ->

      parrot.endpoint
      .add(name: 'testing', url:'http://echo.jsontest.com')
      .set('testing')

      parrot.url
      .add name:'jsontest', path:'key/value/one/two'
      .ajax 'jsontest', (err, result) ->
        result.one.should.eql 'two'

    xit 'add with path and query and change values dynamically',  ->
      _default = { method:'POST', protocol:'http', path: 'tweet', query:'sort=id%20asc' }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets(method: 'POST').should.eql _default

  describe 'storage ::', ->

    describe 'localStorage ::', ->

      before  ->
        localStorage.clear()

      it 'set and get simple value', ->
        parrot.storage.local
        .set 'one','two'
        .one().should.eql 'two'

      xit 'set and get object', ->
        _object = foo:'bar'
        parrot.storage.local
        .set('myData', _object)
        .myData.foo.should.eql 'bar'

      xit 'updated a item', ->
        parrot.storage.local
        .set 'one','three'
        .one.should.eql 'three'

      xit 'get the size', ->
        parrot.storage.local.size().should.eql 2

      xit 'check for a key', ->
        parrot.storage.local.is('one').should.eql true

      xit 'remove one key', ->
        parrot.storage.local.clear('one')
        (parrot.storage.local.one).should.equal('undefined')
