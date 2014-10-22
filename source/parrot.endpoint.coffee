'use strict'

do (fn = parrot.endpoint)->

  ## -- Private -------------------------------------------------------------

  fn._ENDPOINTS = {}

  ## -- Public --------------------------------------------------------------

  fn.add = (obj) ->
    @_ENDPOINTS[obj.name] = obj.url
    this

  fn.set = (environment) ->
    parrot.environment = environment
    this

  fn.get = (obj) ->
    return @_ENDPOINTS if arguments.length is 0
    return @_ENDPOINTS[obj.name] if obj.name
