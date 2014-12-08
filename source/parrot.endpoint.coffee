do ->
  parrot.environment = 'development'
  parrot.language = window.navigator.language.slice(0, 2)
  parrot.endpoint =
    add: (obj) ->
      @[obj.name] = -> obj.url
      this

    set: (environment) ->
      parrot.environment = environment
      this
