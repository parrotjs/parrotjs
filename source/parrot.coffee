'use strict'

parrot = @parrot =

  version    : '0.11.27'
  environment: 'development'
  language   : window.navigator.language.slice(0,2)
  initialize : {}
  endpoint   : {}
  url        : {}
  local      : {}
  session    : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
