'use strict'

do (fn = parrot.storage) ->

  ## -- Private --------------------------------------------------------------

  fn._partial = (func) -> #, 0..n args
    args = Array::slice.call(arguments, 1)
    =>
      allArguments = args.concat(Array::slice.call(arguments))
      func.apply this, allArguments

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
      @[type][key] = @_partial(@_get, type, key, true)
    else
      @_storage(type).setItem(key, data)
      @[type][key] = @_partial(@_get, type, key, false)

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
    if @_storage(type)[key]? then true else false

  ## -- Public ---------------------------------------------------------------

  ## LocalStorage

  fn.local.set = (key, data) ->
    parrot.storage._set 'local', key, data
    this

  fn.local.clear = (key) ->
    parrot.storage._clear 'local', key
    this

  fn.local.clearAll = ->
    parrot.storage._clearAll 'local'
    this

  fn.local.size = ->
    parrot.storage._size 'local'

  fn.local.isAvailable = (key) ->
    parrot.storage._is 'local', key

  ## sessionStorage

  fn.session.set = (key, data) ->
    parrot.storage._set 'session', key, data
    this

  fn.session.clear = (key) ->
    parrot.storage._clear 'session', key
    this

  fn.session.clearAll = ->
    parrot.storage._clearAll 'session'
    this

  fn.session.size = ->
    parrot.storage._size 'session'

  fn.session.isAvailable = (key) ->
    parrot.storage._is 'session', key
