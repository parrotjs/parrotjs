do (fn = parrot.url)->

  ## -- Private -------------------------------------------------------------

  fn._URLS = {}

  fn._getQuery = (queries) ->
    _url               = new Url()
    _url.protocol      = ''
    _url.path          = ''
    _url.query[option] = queries[index+1] for option, index in queries by 2
    query              = _url.toString()
    query              = query.substring(1) if query.charAt(0) is '?'
    query

  fn._bindAdd = (name, update) ->
    if update?
      @_URLS[name].method   = update.method if update.method?
      @_URLS[name].protocol = update.protocol if update.protocol?
      @_URLS[name].path     = update.path if update.path?
      @_URLS[name].query    = @_getQuery(update.query) if update.query?
      @_URLS[name].send     = update.send if update.send?
    @_URLS[name]

  ## -- Public --------------------------------------------------------------

  # name, method, protocol, path, query
  fn.add = (obj) ->
    obj.method   = parrot._DEFAULT.METHOD unless obj.method?
    obj.protocol = parrot._DEFAULT.PROTOCOL unless obj.protocol?
    obj.query    = if obj.query? then @_getQuery(obj.query) else undefined
    obj.send     = undefined unless obj.send?

    @_URLS[obj.name] =
      method   : obj.method
      protocol : obj.protocol
      path     : obj.path
      query    : obj.query
      send     : obj.send

    @[obj.name] = parrot._partial(@_bindAdd, obj.name).bind(fn)
    this

  fn.remove = (name) ->
    delete @[name]
    this
