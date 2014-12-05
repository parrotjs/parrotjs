'use strict'

parrot = @parrot =

  version    : '0.12.5beta'
  environment: 'development'
  language   : window.navigator.language.slice(0,2)
  initialize : {}
  endpoint   : {}
  url        : {}
  local      : {}
  session    : {}
  notification: {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
