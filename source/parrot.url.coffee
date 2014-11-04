do (fn = parrot.url)->

  ## -- Private -------------------------------------------------------------

  fn._URLS = {}

  fn._getQuery = (queries) ->
    _url               = new Url()
    _url[key]          = ''for key in ['protocol', 'path', 'host', 'port', 'hash', ]
    _url.query[option] = queries[index+1] for option, index in queries by 2
    query              = _url.toString()
    query              = query.substring(1) if query.charAt(0) is '?'
    query

  fn._bindAdd = (name, update) ->
    if update?
      @_URLS[name].headers  = update.headers if update.headers?
      @_URLS[name].method   = update.method if update.method?
      @_URLS[name].protocol = update.protocol if update.protocol?
      @_URLS[name].path     = update.path if update.path?
      @_URLS[name].query    = @_getQuery(update.query) if update.query?
      @_URLS[name].send     = update.send if update.send?
    @_URLS[name]

  ## -- Public --------------------------------------------------------------

  fn.add = (obj) ->
    @_URLS[obj.name] =
      headers  : unless obj.headers? then parrot._DEFAULT.HEADERS else obj.headers
      method   : unless obj.method? then parrot._DEFAULT.METHOD else obj.method
      protocol : unless obj.protocol? then parrot._DEFAULT.PROTOCOL else obj.protocol
      query    : if obj.query? then @_getQuery(obj.query) else undefined
      path     : obj.path
      send     : obj.send
    @[obj.name] = parrot._partial(@_bindAdd, obj.name).bind(fn)
    this

  fn.remove = (name) ->
    delete @[name]
    this
