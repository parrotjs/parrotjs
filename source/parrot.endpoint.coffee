do (fn = parrot.endpoint)->

  ## -- Public -----------------------------------------------------------------

  fn.add = (obj) ->
    @[obj.name] = -> obj.url
    this

  fn.set = (environment) ->
    parrot.environment = environment
    this

  fn.remove = (name) ->
    delete @[name]
    this
