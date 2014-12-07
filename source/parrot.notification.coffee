do (fn = parrot.notification) ->

  ## -- Private ----------------------------------------------------------------

  _Notification = {}

  ## -- Public -----------------------------------------------------------------

  fn.getOrUpdate = (name, updateOptions=undefined) ->
    if updateOptions?
      for option of updateOptions
        _Notification[name][option] = updateOptions[option]
    _Notification[name]

  fn.add = (opts) ->
    name = opts.name
    delete opts.name
    _Notification[name] = opts
    @[name] = parrot._partial(@getOrUpdate, name).bind(fn)
    this

  fn.show = (name, options) ->
    if arguments.length is 1 and typeof name is 'object'
      name = undefined
      options = arguments[0]

    _createNotification = (opts) =>
      try
        window['Notification'].requestPermission()
        title = opts.title
        delete opts.title
        new Notification title, opts
      catch e
        throw new Error "Notification API is not available."

    return _createNotification options unless name?
    notification =  @getOrUpdate name, options
    _createNotification notification
