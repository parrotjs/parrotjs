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