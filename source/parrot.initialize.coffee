do ->

  ## -- Private -------------------------------------------------------------

  parrot._DEFAULT =
    METHOD   : 'GET'
    PROTOCOL : 'http'
    SEND     : {}
    HEADERS  : undefined

  parrot._partial = (func) -> #, 0..n args
    args = Array::slice.call(arguments, 1)
    ->
      allArguments = args.concat(Array::slice.call(arguments))
      func.apply this, allArguments

  parrot._createAjaxPromise = (obj) ->
    new Promise((resolve, reject) =>
      parrot.$.ajax
        type        : obj.method or @_DEFAULT.METHOD
        url         : obj.url
        data        : obj.send or @_DEFAULT.SEND
        dataType    : 'json'
        contentType : 'application/x-www-form-urlencoded'
        beforeSend:  (xhr) ->
          if obj.headers?
            headers = Object.keys(obj.headers)
            for header in headers
              xhr.setRequestHeader(header, obj.headers[header])
        success: (xhr) ->
          if xhr.status is 0
            error = code: 0, message: 'Server Unavailable'
            reject(error)
          else
            resolve(xhr)
        error: (xhr, request) ->
          error = code: request.status, message: request.response
          reject(error)
    )

  ## -- Public --------------------------------------------------------------

  parrot.ajax = (obj, cb) ->

    _url = "#{parrot.endpoint[parrot.environment]()}"

    unless obj.url
      obj = parrot.url._URLS[arguments[0]] or url: arguments[0] if typeof arguments[0] is 'string'
      if (obj.query and obj.path)
        obj.url = "#{_url}/#{obj.path}?#{obj.query}"
      else
        obj.url = "#{_url}?#{obj.query}" if obj.query and not obj.path
        obj.url = "#{_url}/#{obj.path}" if obj.path and not obj.query
    else
      if (obj.url isnt _url) and (obj.url isnt "#{_url}/#{obj.path}") and (obj.url isnt "#{_url}?#{obj.query}") and (obj.url isnt "#{_url}/#{obj.path}?#{obj.query}")
        obj.url = "#{obj.url}/#{obj.path}" if obj.path?
        obj.url = "#{obj.url}?#{obj.query}" if obj.query?

    @_createAjaxPromise(obj).then ((response) ->
      cb null, response
    ), (error) ->
      error.message = JSON.parse(error.message) if error.message?
      cb error, null
