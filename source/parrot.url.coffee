'use strict'

do (fn = parrot.url)->

  ## -- Private ----------------------------------------------------------------

  fn._URLS = {}

  fn._getQuery = (queries) ->
    _url               = new Url()
    _url[key]          = ''for key in ['protocol', 'path', 'host', 'port', 'hash', ]
    _url.query[option] = queries[index+1] for option, index in queries by 2
    query              = _url.toString()
    query              = query.substring(1) if query.charAt(0) is '?'
    query

  fn._bindAdd = (name, update=undefined) ->
    if update?
      for option in ['headers', 'method', 'protocol', 'path', 'query', 'send', 'async', 'datatype', 'contenttype']
        @_URLS[name][option] = update[option] if update[option]?
      @_URLS[name].query = @_getQuery(update.query) if update.query?
    @_URLS[name]

  ## -- Public -----------------------------------------------------------------

  fn.add = (obj) ->
    _name = obj.name
    delete obj.name
    obj.query = @_getQuery(obj.query) if obj.query?
    @_URLS[_name] = obj
    @[_name] = parrot._partial(@_bindAdd, _name).bind(fn)
    this

  fn.remove = (name) ->
    delete @[name]
    this
