do ->

  ## -- Private -------------------------------------------------------------

  parrot._DEFAULT =
    METHOD       : 'get'
    SEND         : {}
    HEADERS      : {}
    ASYNC        : true
    DATATYPE     : 'json'
    CONTENT_TYPE : 'application/x-www-form-urlencoded'

  parrot._partial = (func) -> #, 0..n args
    args = Array::slice.call(arguments, 1)
    ->
      allArguments = args.concat(Array::slice.call(arguments))
      func.apply this, allArguments

  parrot._createAjaxPromise = (obj) ->
    new Promise((resolve, reject) =>
      parrot.$.ajax
        url         : obj.url
        type        : obj.method or @_DEFAULT.METHOD
        data        : obj.send or @_DEFAULT.SEND
        dataType    : obj.datatype or @_DEFAULT.DATATYPE
        contentType : obj.contenttype or @_DEFAULT.CONTENT_TYPE
        async       : obj.async or @_DEFAULT.ASYNC
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
    _promise = (data, cb) =>
      @_createAjaxPromise(data).then ((response) ->
        cb null, response
      ), (error) ->
        cb error, null

    unless obj.url
      if typeof arguments[0] is 'string'
        if parrot.url._URLS[arguments[0]]?
          obj = parrot.url._bindAdd arguments[0], arguments[1]
        else
          if typeof arguments[1] is 'object'
            obj = arguments[1]
            obj.url = arguments[0]
          else
            obj = url: arguments[0]
        cb = arguments[2] if typeof arguments[1] is 'object'
      if (obj.query and obj.path)
        obj.url = "#{_url}/#{obj.path}?#{obj.query}"
      else
        obj.url = "#{_url}?#{obj.query}" if obj.query and not obj.path
        obj.url = "#{_url}/#{obj.path}" if obj.path and not obj.query
    else
      if (obj.url isnt _url) and (obj.url isnt "#{_url}/#{obj.path}") and (obj.url isnt "#{_url}?#{obj.query}") and (obj.url isnt "#{_url}/#{obj.path}?#{obj.query}")
        obj.url = "#{obj.url}/#{obj.path}" if obj.path?
        obj.url = "#{obj.url}?#{obj.query}" if obj.query?

    _promise(obj, cb)
