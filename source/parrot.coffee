'use strict'

parrot = @parrot =

  version    : '0.10.26'
  environment: 'development'

  initialize : {}
  endpoint   : {}
  url        : {}
  storage    :
    local    : {}
    session  : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
