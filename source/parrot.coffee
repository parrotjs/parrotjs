'use strict'

parrot = @parrot =

  version    : '0.10.25'
  environment: 'development'

  initialize : {}
  endpoint   : {}
  url        : {}
  storage    :
    local    : {}
    session  : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
