do (fn = parrot.notification) ->

  ## -- Private ----------------------------------------------------------------

  fn._Notifications = {}
  fn._notification = -> window['Notification']
  fn._requestPermissions = -> @_notification.requestPermission()

  fn._bindAdd = (name, update=undefined) ->
    # if update?
    #   for option in ['headers', 'method', 'protocol', 'path', 'query', 'send', 'async', 'datatype', 'contenttype']
    #     @_URLS[name][option] = update[option] if update[option]?
    #   @_URLS[name].query = @_getQuery(update.query) if update.query?
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

  fn.show = (opts) ->
    title = opts.title
    delete opts.title
    notificationOptions = {}
    notificationOptions[option] = value for option, value of opts
    try
      do @_requestPermissions
      new Notification title, notificationOptions
    catch e
      throw new Error "Notification API is not available."
