describe 'Parrot ::', ->

  describe 'endpoint ::', ->

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

  describe 'url ::', ->

    it 'add with default values', ->
      _default = { method: 'GET', protocol: 'http', path: undefined, query: undefined, send: undefined }
      parrot.url.add name: 'login'
      parrot.url.login().should.eql _default

    it 'add with query',  ->
      _default = { method: 'GET', protocol: 'http', path: undefined, query: 'sort=id%20asc', send: undefined }
      parrot.url.add name:'tweets', query: ['sort','id asc']
      parrot.url.tweets().should.eql _default

    it 'add with path and query',  ->
      _default = { method:'GET', protocol:'http', path: 'tweet', query:'sort=id%20asc', send: undefined }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets().should.eql _default

    it 'ajax with the path in the url', (done) ->
      request = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
      parrot.ajax request, (err, result) ->
        result.one.should.eql 'two'
        done()

    it 'ajax with path and query', (done) ->
      request = url: 'http://echo.jsontest.com', path:'key/value/one/two', method: 'GET'
      parrot.ajax request, (err, result) ->
        result.one.should.eql 'two'
        done()

    it 'ajax using short method for GET methods', (done) ->
      parrot.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
        result.one.should.eql 'two'
        done()

    it 'ajax using url object', (done) ->
      parrot.endpoint
      .add(name: 'testing', url:'http://echo.jsontest.com')
      .set('testing')

      parrot.url.add name:'jsontest', path:'key/value/one/two'
      parrot.ajax parrot.url.jsontest(), (err, result) ->
        result.one.should.eql 'two'
        done()

    it 'ajax using url object (alternative method)', (done) ->
      parrot.endpoint
      .add(name: 'testing', url:'http://echo.jsontest.com')
      .set('testing')

      parrot.url.add name:'jsontest', path:'key/value/one/two'
      parrot.ajax 'jsontest', (err, result) ->
        result.one.should.eql 'two'
        done()

    it 'add with path and query and change values dynamically',  ->
      _default = { method:'POST', protocol:'http', path: 'tweet', query:'sort=id%20asc', send: undefined }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets(method: 'POST').should.eql _default

  describe 'storage ::', ->
    before  ->
      localStorage.clear()

    it 'set and get simple value', ->
      parrot.storage.local
      .set 'one','two'
      .one().should.eql 'two'
      localStorage.setItem('one', 'three')
      parrot.storage.local.one().should.eql 'three'

    it 'set and get object', ->
      _object = foo:'bar'
      parrot.storage.local
      .set('myData', _object)
      .myData().foo.should.eql 'bar'

    it 'updated a item', ->
      parrot.storage.local
      .set 'one','three'
      .one().should.eql 'three'

    it 'get the size', ->
      parrot.storage.local.size().should.eql 2

    it 'check for a key', ->
      parrot.storage.local.isAvailable('one').should.eql true

    xit 'remove one key', ->
      parrot.storage.local.remove('one')
      should.not.exist(parrot.storage.local.one())

    xit 'remove all', ->
      parrot.storage.local.removeAll()
      should.not.exist(parrot.storage.local.myData())
