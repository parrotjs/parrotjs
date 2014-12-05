'use strict'

do (fn = parrot) ->

  ## -- Private ----------------------------------------------------------------

  fn._init = ->
    for key in Object.keys(localStorage)
      @['local'][key] = parrot._partial(@_get, 'local', key).bind(fn)
    for key in Object.keys(sessionStorage)
      @['session'][key] = parrot._partial(@_get, 'session', key).bind(fn)

  fn._storage = (type) ->
    if type is 'local' then localStorage else sessionStorage

  fn._get = (type, key) ->
    data = @_storage(type).getItem(key)
    try
      data = JSON.parse(data)
    catch e
      data

  fn._set = (type, key, data) ->
    data = JSON.stringify(data) unless typeof data is 'string'
    @_storage(type).setItem(key, data)
    @[type][key] = parrot._partial(@_get, type, key).bind(fn)

  fn._clear = (type, key) ->
    delete @[type][key]
    @_storage(type).removeItem(key)

  fn._clearAll = (type) ->
    keys = Object.keys(@_storage(type))
    delete @[type][key] for key in keys
    @_storage(type).clear()

  fn._size = (type) ->
    @_storage(type).length

  fn._is = (type, key) ->
    @_storage(type)[key]?

  ## -- Public -----------------------------------------------------------------

  ## LocalStorage

  fn.local.set = (key, data) ->
    parrot._set 'local', key, data
    this

  fn.local.clear = ->
    parrot._clear 'local', key for key in arguments
    this

  fn.local.clearAll = ->
    parrot._clearAll 'local'
    this

  fn.local.size = ->
    parrot._size 'local'

  fn.local.isAvailable = (key) ->
    parrot._is 'local', key

  ## sessionStorage

  fn.session.get = ->
    parrot._get 'session', 'session'

  fn.session.set = ->
    if arguments.length is 1
      key  = 'session'
      data = arguments[0]
    else
      key  = arguments[0]
      data = arguments[1]

    parrot._set 'session', key, data
    this

  fn.session.clear = ->
    if arguments.length is 0
      parrot._clear 'session', 'session'
    else
      parrot._clear 'session', key for key in arguments
    this

  fn.session.clearAll = ->
    parrot._clearAll 'session'
    this

  fn.session.size = ->
    parrot._size 'session'

  fn.session.isAvailable = ->
    key = if arguments.length is 0 then 'session' else arguments[0]
    parrot._is 'session', key

  ## -- Initialize -----------------------------------------------------------

  parrot._init()
