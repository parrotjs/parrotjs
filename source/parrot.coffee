'use strict'

parrot = @parrot =

  version      : '0.12.7beta'
  environment  : 'development'
  language     : window.navigator.language.slice(0,2)
  endpoint     : {}
  url          : {}
  local        : {}
  session      : {}
  notification : {}
  device       : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
