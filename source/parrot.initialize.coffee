do ->

  ## -- Private -------------------------------------------------------------

  parrot._DEFAULT =
    METHOD   : 'GET'
    PROTOCOL : 'http'
    SEND     : {}

  parrot._partial = (func) -> #, 0..n args
    args = Array::slice.call(arguments, 1)
    ->
      allArguments = args.concat(Array::slice.call(arguments))
      func.apply this, allArguments

  # type, method, send = {}, background = false
  parrot._createAjaxPromise = (obj) ->
    promise = new Hope.Promise()
    # unless background then do @loadingOn
    parrot.$.ajax
      type        : obj.method or @_DEFAULT.METHOD
      url         : obj.url
      data        : obj.send or @_DEFAULT.SEND
      dataType    : 'json'
      contentType : 'application/x-www-form-urlencoded'
      success: (xhr) ->
        # unless background then do @loadingOff
        if xhr.status is 0
          error = code: 0, message: 'Server Unavailable'
          promise.done error, null
        else
          promise.done null, xhr
      error: (xhr, request) ->
        # unless background then do @loadingOff
        error = code: request.status, message: request.response
        promise.done error, null
    promise

  ## -- Public --------------------------------------------------------------

  parrot.ajax = (obj, cb) ->

    _url = "#{parrot.endpoint[parrot.environment]()}"

    unless obj.url
      obj = parrot.url._URLS[arguments[0]] or url: arguments[0] if typeof arguments[0] is 'string'
      if (obj.query and obj.path)
        obj.url = "#{_url}/#{obj.path}?#{obj.query}"
    promise = @_createAjaxPromise(obj)
    promise.then (err, result) -> cb(err, result)
