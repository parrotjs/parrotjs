do (fn = parrot.notification) ->

  ## -- Private ----------------------------------------------------------------

  fn._Notifications = {}
  fn._Notification = -> window['Notification']
  fn._requestPermissions = -> @_Notification().requestPermission()
  fn._get = (name) -> @_Notifications[name]

  fn._create = (options) ->
    title = options.title
    delete options.title
    new Notification title, options

  fn._bindAdd = (name, updateOptions=undefined) ->
    if updateOptions?
      for option of updateOptions
        @_Notifications[name][option] = updateOptions[option]
    @_Notifications[name]

  ## -- Public -----------------------------------------------------------------

  fn.isAvailable = -> @_Notification?

  fn.add = (opts) ->
    name = opts.name
    delete opts.name
    @_Notifications[name] = opts
    @[name] = parrot._partial(@_bindAdd, name).bind(fn)
    this

  fn.remove = ->
    delete @[name] for name in arguments
    this

  fn.show = (name, opts) ->
    if arguments.length is 1 and typeof name is 'object'
      name = undefined
      opts = arguments[0]

    _createNotification = (opts) =>
      try
        @_requestPermissions()
        @_create(opts)
      catch e
        console.log e
        throw new Error "Notification API is not available."

    return _createNotification opts unless name?
    notification =  @_bindAdd name, opts
    _createNotification notification
