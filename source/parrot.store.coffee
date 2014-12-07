do (fn = parrot) ->

  ## -- Private ----------------------------------------------------------------

  _initStorage = do ->
    for key in Object.keys(localStorage)
      parrot['local'][key] = parrot._partial(_get, 'local', key).bind(fn)
    for key in Object.keys(sessionStorage)
      parrot['session'][key] = parrot._partial(_get, 'session', key).bind(fn)

  _storage = (type) ->
    if type is 'local' then localStorage else sessionStorage

  _get = (type, key) ->
    data = _storage(type).getItem(key)
    try
      data = JSON.parse(data)
    catch e
      data

  _add = (type, key, data) ->
    data = JSON.stringify(data) unless typeof data is 'string'
    _storage(type).setItem(key, data)
    parrot[type][key] = parrot._partial(_get, type, key).bind(fn)

  _remove = (type, key) ->
    delete parrot[type][key]
    _storage(type).removeItem(key)

  _removeAll = (type) ->
    keys = Object.keys(_storage(type))
    delete parrot[type][key] for key in keys
    _storage(type).clear()

  _size = (type) ->
    _storage(type).length

  _is = (type, key) ->
    _storage(type)[key]?

  ## -- Public -----------------------------------------------------------------

  ## LocalStorage

  fn.local.add = (key, data) ->
    _add 'local', key, data
    this

  fn.local.remove = ->
    _remove 'local', key for key in arguments
    this

  fn.local.removeAll = ->
    _removeAll 'local'
    this

  fn.local.size = ->
    _size 'local'

  fn.local.isAvailable = (key) ->
    _is 'local', key

  ## sessionStorage

  fn.session.get = ->
    _get 'session', 'session'

  fn.session.add = ->
    if arguments.length is 1
      key  = 'session'
      data = arguments[0]
    else
      key  = arguments[0]
      data = arguments[1]

    _add 'session', key, data
    this

  fn.session.remove = ->
    if arguments.length is 0
      _remove 'session', 'session'
    else
      _remove 'session', key for key in arguments
    this

  fn.session.removeAll = ->
    _removeAll 'session'
    this

  fn.session.size = ->
    _size 'session'

  fn.session.isAvailable = ->
    key = if arguments.length is 0 then 'session' else arguments[0]
    _is 'session', key
