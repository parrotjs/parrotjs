do ->

  ## -- Public -----------------------------------------------------------------

  parrot.ajax = (obj, cb) ->
    ajaxPromise = (obj) ->
      DEFAULT =
        METHOD       : 'get'
        SEND         : {}
        HEADERS      : {}
        ASYNC        : true
        DATATYPE     : 'json'
        CONTENT_TYPE : 'application/x-www-form-urlencoded'

      new Promise((resolve, reject) =>
        parrot.$.ajax
          url         : obj.url
          type        : obj.method or DEFAULT.METHOD
          data        : obj.send or DEFAULT.SEND
          dataType    : obj.dataType or DEFAULT.DATATYPE
          contentType : obj.contentType or DEFAULT.CONTENT_TYPE
          async       : obj.async or DEFAULT.ASYNC
          headers     : obj.headers or DEFAULT.HEADERS
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

    promise = (data, cb) =>
      ajaxPromise(data).then ((response) ->
        cb null, response
      ), (error) ->
        cb error, null

    url = "#{parrot.endpoint[parrot.environment]()}"

    unless obj.url
      if typeof arguments[0] is 'string'
        if parrot.url[arguments[0]]?()?
          obj = parrot.url.getOrUpdate arguments[0], arguments[1]
        else
          if typeof arguments[1] is 'object'
            obj = arguments[1]
            obj.url = arguments[0]
          else
            obj = url: arguments[0]
        cb = arguments[2] if typeof arguments[1] is 'object'
      if (obj.query and obj.path)
        obj.url = "#{url}/#{obj.path}?#{obj.query}"
      else
        obj.url = "#{url}?#{obj.query}" if obj.query and not obj.path
        obj.url = "#{url}/#{obj.path}" if obj.path and not obj.query
    else
      if (obj.url isnt url) and (obj.url isnt "#{url}/#{obj.path}") and (obj.url isnt "#{url}?#{obj.query}") and (obj.url isnt "#{url}/#{obj.path}?#{obj.query}")
        obj.url = "#{obj.url}/#{obj.path}" if obj.path?
        obj.url = "#{obj.url}?#{obj.query}" if obj.query?

    promise(obj, cb)
