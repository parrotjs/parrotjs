describe 'Parrot ::', ->

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

  describe 'URL ::', ->

    it 'add with default values', ->
      _default = { headers: {}, method: 'GET', protocol: 'http', path: undefined, query: undefined, send: undefined }
      parrot.url.add name: 'login'
      parrot.url.login().should.eql _default

    it 'add with query',  ->
      _default = { headers: {}, method: 'GET', protocol: 'http', path: undefined, query: "sort=id%20asc", send: undefined }
      parrot.url.add name:'tweets', query: ['sort','id asc']
      parrot.url.tweets().should.eql _default

    it 'add with path and query',  ->
      _default = { headers: {}, method:'GET', protocol:'http', path: 'tweet', query: "sort=id%20asc", send: undefined }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets().should.eql _default

    it 'add with path and query and change values dynamically',  ->
      _default = { headers: {}, method:'POST', protocol:'http', path: 'tweet', query: "sort=id%20desc", send: undefined }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets(method: 'POST', query: ['sort', 'id desc']).should.eql _default

    it 'added headers dynamically', ->
      _headers = Autorization: 'Bearer token'
      _default = { headers: _headers, method:'POST', protocol:'http', path: 'tweet', query: "sort=id%20desc", send: undefined }
      parrot.url.add name:'tweets', path:'tweet', query: ['sort','id asc']
      parrot.url.tweets(headers: _headers, method: 'POST', query: ['sort', 'id desc']).should.eql _default

  describe 'AJAX ::', ->

    describe 'Parrot URL object', ->

      it 'ajax with default options', (done) ->
        parrot.endpoint
        .add(name: 'testing', url:'http://echo.jsontest.com')
        .set('testing')

        parrot.url.add name:'jsontest', path:'key/value/one/two'
        parrot.ajax parrot.url.jsontest(), (err, result) ->
          result.one.should.eql 'two'
          done()

      it 'ajax with custom options', (done) ->
        parrot.endpoint
        .add(name: 'testing', url:'http://echo.jsontest.com')
        .set('testing')

        parrot.url.add name:'jsontest', path:'key/value/one/two', method: 'no_exist'
        parrot.ajax parrot.url.jsontest(method:'get'), (err, result) ->
          result.one.should.eql 'two'
          done()

    describe 'Parrot URL object (alternative method)', ->

      it 'ajax with default options', (done) ->
        parrot.endpoint
        .add(name: 'testing', url:'http://echo.jsontest.com')
        .set('testing')

        parrot.url.add name:'jsontest', path:'key/value/one/two'
        parrot.ajax 'jsontest', (err, result) ->
          result.one.should.eql 'two'
          done()

      it 'ajax with custom settings', (done) ->
        parrot.endpoint
        .add(name: 'testing', url:'http://echo.jsontest.com')
        .set('testing')

        parrot.url.add name:'jsontest', path:'key/value/one/two', method: 'no_exist'
        parrot.ajax 'jsontest', {method:'get'}, (err, result) ->
          result.one.should.eql 'two'
          done()

    describe 'Simple URL', ->

      it 'only with url (included the path inside)', (done) ->
        request = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
        parrot.ajax request, (err, result) ->
          result.one.should.eql 'two'
          done()

      it 'with url and path', (done) ->
        request = url: 'http://echo.jsontest.com/', path:'key/value/three/four', method: 'GET'
        parrot.ajax request, (err, result) ->
          result.key.should.eql 'value'
          done()

      it 'alternative method', (done) ->
        parrot.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
          result.one.should.eql 'two'
          done()

      it 'alternative method with options', (done) ->
        parrot.ajax 'http://echo.jsontest.com', path:'/key/value/one/two', (err, result) ->
          result.one.should.eql 'two'
          done()

  describe 'Language ::', ->
    it 'set default language', ->
      parrot.language.should.eql 'en'

  describe 'Storage ::', ->
    before  ->
      localStorage.clear()

    it 'set and get simple value', ->
      parrot.store.local
      .set 'one','two'
      .one().should.eql 'two'
      localStorage.setItem('one', 'three')
      parrot.store.local.one().should.eql 'three'

    it 'set and get object', ->
      _object = foo:'bar'
      parrot.store.local
      .set('myData', _object)
      .myData().foo.should.eql 'bar'

    it 'updated a item', ->
      parrot.store.local
      .set 'one','three'
      .one().should.eql 'three'

    it 'get the size', ->
      parrot.store.local.size().should.eql 2

    it 'check for a key', ->
      parrot.store.local.isAvailable('one').should.eql true

    xit 'remove one key', ->
      parrot.store.local.clear('one')
      should.not.exist(parrot.store.local.one())

    xit 'remove all', ->
      parrot.store.local.clearAll()
      should.not.exist(parrot.store.local.myData())

    describe 'Session ::', ->
      it 'save a simple session and retrieve', ->
        parrot.store.session.set('session')
        sessionStorage.getItem('session').should.eql 'session'
        parrot.store.session.get().should.eql 'session'

      it 'save a object session and retrieve', ->
        _session = foo: 'bar'
        parrot.store.session.set(_session)
        parrot.store.session.get().should.eql {foo: 'bar'}
