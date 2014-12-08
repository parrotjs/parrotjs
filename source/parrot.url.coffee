do ->

  ## -- Private ----------------------------------------------------------------

  _URL = {}
  _getQuery = (queries) ->
    url               = new Url()
    url[key]          = ''for key in ['protocol', 'path', 'host', 'port', 'hash']
    url.query[option] = queries[index+1] for option, index in queries by 2
    query             = url.toString()
    query             = query.substring(1) if query.charAt(0) is '?'
    query

  ## -- Public -----------------------------------------------------------------

  parrot.environment = 'development'
  parrot.language = window.navigator.language.slice(0, 2)
  parrot.endpoint =
    add: (obj) ->
      @[obj.name] = -> obj.url
      this

    set: (environment) ->
      parrot.environment = environment
      this

  parrot.url =
    getOrUpdate: (name, update=undefined) ->
      if update?
        _URL[name][option] = update[option] for option of update
        _URL[name].query = _getQuery(update.query) if update.query?
      _URL[name]

    add: (opts) ->
      name = opts.name
      delete opts.name
      opts.query = _getQuery(opts.query) if opts.query?
      _URL[name] = opts
      @[name]    = parrot._partial(@getOrUpdate, name)
      this
