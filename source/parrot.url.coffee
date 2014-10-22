'use strict'

do (fn = parrot.url)->

  ## -- Private -------------------------------------------------------------

  fn._DEFAULT =
    method: 'GET'
    protocol: 'http'

  fn._getQuery = (queries) ->
    _url = new Url()
    _url.protocol = ''
    _url.path = ''
    _url.query[option] = queries[index+1] for option, index in queries by 2
    query = _url.toString()
    query = query.substring(1) if query.charAt(0) is '?'
    query

  ## -- Public --------------------------------------------------------------

  # name, method, protocol, path, query
  fn.add = (obj) ->
    obj.method = @_DEFAULT.method unless obj.method?
    obj.protocol = @_DEFAULT.protocol unless obj.protocol?

    @[obj.name] =
      method   : obj.method
      protocol : obj.protocol
      path     : obj.path
      query    : if obj.query? then @_getQuery(obj.query) else undefined
    this

  fn.remove = ->
    delete @_URLS[name]
    this
