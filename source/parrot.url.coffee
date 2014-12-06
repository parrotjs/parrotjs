do (fn = parrot.url)->

  ## -- Private ----------------------------------------------------------------

  fn._URLS = {}
  fn._getQuery = (queries) ->
    url               = new Url()
    url[key]          = ''for key in ['protocol', 'path', 'host', 'port', 'hash', ]
    url.query[option] = queries[index+1] for option, index in queries by 2
    query             = url.toString()
    query             = query.substring(1) if query.charAt(0) is '?'
    query

  fn._bindAdd = (name, updateOptions=undefined) ->
    if updateOptions?
      @_URLS[name][option] = updateOptions[option] for option of updateOptions
      @_URLS[name].query = @_getQuery(updateOptions.query) if updateOptions.query?
    @_URLS[name]

  ## -- Public -----------------------------------------------------------------

  fn.add = (opts) ->
    name = opts.name
    delete opts.name
    opts.query    = @_getQuery(opts.query) if opts.query?
    @_URLS[name]  = opts
    @[name]       = parrot._partial(@_bindAdd, name).bind(fn)
    this
