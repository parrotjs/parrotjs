'use strict'

do (fn = parrot.endpoint)->

  ## -- Public -----------------------------------------------------------------

  fn.add = (obj) ->
    # why function? for follow the API!
    @[obj.name] = -> obj.url
    this

  fn.set = (environment) ->
    parrot.environment = environment
    this

  fn.remove = (name) ->
    delete @[name]
    this
