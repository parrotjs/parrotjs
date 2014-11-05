do ->

  ## -- Private -------------------------------------------------------------

  parrot._DEFAULT =
    METHOD   : 'GET'
    PROTOCOL : 'http'
    SEND     : {}
    HEADERS  : {}

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
        dataType    : "json"
        contentType : "application/x-www-form-urlencoded"
        headers     : obj.headers or @_DEFAULT.HEADERS
        success: (xhr) ->
          return reject(code: 0, message: {'errors': [{'param': 'url','msg': 'Server Unavailable.'}]}) if xhr.status is 0
          resolve(xhr)
        error: (type, xhr) ->
          xhr = if typeof type is 'object' then type else xhr

          if xhr.responseJSON?
            message = xhr.responseJSON
          else
            try
              message = JSON.parse(xhr.response)
            catch
              message = xhr.response
          reject(code: xhr.status, message: message)
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
      cb error, null
