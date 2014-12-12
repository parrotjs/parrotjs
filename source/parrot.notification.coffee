do ->

  ## -- Private ----------------------------------------------------------------

  _Notification = {}
  _partial = require 'fn-partial'

  ## -- Public -----------------------------------------------------------------

  parrot.notification =
    getOrUpdate: (name, updateOptions=undefined) ->
      if updateOptions?
        for option of updateOptions
          _Notification[name][option] = updateOptions[option]
      _Notification[name]

    add: (opts) ->
      name = opts.name
      delete opts.name
      _Notification[name] = opts
      @[name] = _partial(@getOrUpdate, name)
      this

    show: (name, options) ->
      if arguments.length is 1 and typeof name is 'object'
        name = undefined
        options = arguments[0]

      _createNotification = (opts) ->
        try
          Notification.requestPermission()
          title = opts.title
          delete opts.title
          new Notification title, opts
        catch e
          throw new Error "Notification API is not available."

      return _createNotification options unless name?
      notification = @getOrUpdate name, options
      _createNotification notification
