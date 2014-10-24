'use strict'

do (fn = parrot.url)->

  ## -- Private -------------------------------------------------------------

  fn._URLS = {}

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

  # type, method, send = {}, background = false
  fn._createAjaxPromise = (obj) ->
    promise = new Hope.Promise()
    # unless background then do @loadingOn
    parrot.$.ajax
      type        : obj.method or 'GET'
      url         : obj.url
      data        : obj.send or {}
      dataType    : 'json'
      contentType : 'application/x-www-form-urlencoded'
      success: (xhr) =>
        # unless background then do @loadingOff
        if xhr.status is 0
          error = code: 0, message: 'Server Unavailable'
          promise.done error, null
        else
          promise.done null, xhr
      error: (xhr, request) =>
        # unless background then do @loadingOff
        error = code: request.status, message: request.response
        promise.done error, null
    promise

  fn._bindAdd = (name, update) ->
    if update?
      @_URLS[name].method = update.method if update.method?
      @_URLS[name].protocol = update.protocol if update.protocol?
      @_URLS[name].path = update.path if update.path?
      @_URLS[name].query = @_getQuery(update.query) if update.query?
    @_URLS[name]

  ## -- Public --------------------------------------------------------------

  fn.ajax = (obj, cb) ->
    if typeof arguments[0] is 'string'
      obj = @_URLS[arguments[0]] or url: arguments[0]

    obj.url = "#{parrot.endpoint[parrot.environment()]()}" unless obj.url
    obj.url = "#{obj.url}/#{obj.path}" if obj.path?
    obj.url = "#{obj.url}?#{obj.query}" if obj.query?

    promise = @_createAjaxPromise(obj)
    promise.then (err, result) -> cb(err, result)

  # name, method, protocol, path, query
  fn.add = (obj) ->
    obj.method = @_DEFAULT.method unless obj.method?
    obj.protocol = @_DEFAULT.protocol unless obj.protocol?

    @_URLS[obj.name] =
      method   : obj.method
      protocol : obj.protocol
      path     : obj.path
      query    : if obj.query? then @_getQuery(obj.query) else undefined

    @[obj.name] = parrot._partial(@_bindAdd, obj.name).bind(fn)
    this

  fn.remove = (name) ->
    delete @[name]
    this
