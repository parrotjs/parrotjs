do (fn = parrot.storage) ->

  ## -- Private --------------------------------------------------------------

  fn._storage = (type) ->
    if type is 'local' then localStorage else sessionStorage

  fn._get = (type, key, object=false) ->
    if object
      JSON.parse(@_storage(type).getItem(key))
    else
      @_storage(type).getItem(key)

  fn._set = (type, key, data) ->
    unless typeof data is 'string'
      data = JSON.stringify(data)
      @_storage(type).setItem(key, data)
      @[type][key] = parrot._partial(@_get, type, key, true).bind(fn)
    else
      @_storage(type).setItem(key, data)
      @[type][key] = parrot._partial(@_get, type, key, false).bind(fn)

  fn._remove = (type, key) ->
    delete @[type][key]
    @_storage(type).removeItem(key)

  fn._removeAll = (type) ->
    keys = Object.keys(@_storage(type))
    delete @[type][key] for key in keys
    @_storage(type).clear()

  fn._size = (type) ->
    @_storage(type).length

  fn._is = (type, key) ->
    if @_storage(type)[key]? then true else false

  ## -- Public ---------------------------------------------------------------

  ## LocalStorage

  fn.local.set = (key, data) ->
    parrot.storage._set 'local', key, data
    this

  fn.local.remove = (key) ->
    parrot.storage._remove 'local', key
    this

  fn.local.removeAll = ->
    parrot.storage._removeAll 'local'
    this

  fn.local.size = ->
    parrot.storage._size 'local'

  fn.local.isAvailable = (key) ->
    parrot.storage._is 'local', key

  ## sessionStorage

  fn.session.set = (key, data) ->
    parrot.storage._set 'session', key, data
    this

  fn.session.remove = (key) ->
    parrot.storage._remove 'session', key
    this

  fn.session.removeAll = ->
    parrot.storage._removeAll 'session'
    this

  fn.session.size = ->
    parrot.storage._size 'session'

  fn.session.isAvailable = (key) ->
    parrot.storage._is 'session', key
