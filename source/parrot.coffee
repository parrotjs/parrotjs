'use strict'

parrot = @parrot =

  version    : '0.10.22'
  environment: 'development'

  initialize : {}
  endpoint   : {}
  url        : {}
  storage    : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
