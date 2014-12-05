do (fn = parrot.notification) ->

  ## -- Private ----------------------------------------------------------------

  fn._Notifications = {}
  fn._notification = -> window['Notification']
  fn._requestPermissions = -> @_notification().requestPermission()
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

  fn.isAvailable = -> @_notification?

  fn.add = (opts) ->
    name = opts.name
    delete opts.name
    @_Notifications[name] = opts
    @[name] = parrot._partial(@_bindAdd, name).bind(fn)
    this

  fn.remove = (name) ->
    delete @[name]
    this

  fn.show = (name, options) ->
    if arguments.length is 1 and typeof name is 'object'
      name = undefined
      options = arguments[0]

    _createNotification = (options) =>
      try
        @_requestPermissions()
        @_create(options)
      catch e
        console.log e
        throw new Error "Notification API is not available."

    return _createNotification options unless name?
    notification =  @_bindAdd name, options
    _createNotification notification
