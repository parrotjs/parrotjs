describe 'Sailor connectivity ::', ->

  before  ->
    parrot.endpoint
    .add(name:'development', url:'http://localhost:1337')
    .add(name:'production', url:'https://zb-api.herokuapp.com')
    .set 'development'

    parrot.url
    .add(name:'signup', path:'user', method:'post')
    .add(name:'login', path:'user/login', method:'post')
    .add(name:'logout', path:'user/logout', method:'post')
    .add(name:'updateProfile', path:'user/profile', method:'put')
    .add(name:'find', path:'user', method:'get')

  xit 'register user', (done) ->
    parrot.url.signup(send: username: "kikobeats", email: "kiko@sailor.com", password: "password")
    parrot.ajax 'signup', (err, response) ->
      console.log "signup ::"
      console.log err
      console.log response
      window.token = response.token
      window.user = response.user
      done()

  it 'login user', (done) ->
    parrot.url.login(send: identifier: "kikobeats", password: "password")
    parrot.ajax 'login', (err, response) ->
      console.log "login ::"
      console.log err
      console.log response
      window.token = response.token
      window.user = response.user
      done()

  it 'finAll users', (done) ->
    _headers = Authorization: "Bearer #{window.token.access_token}"
    parrot.url.find(headers: _headers)
    parrot.ajax 'find', (err, response) ->
      console.log "find ::"
      console.log err
      console.log response
      done()

