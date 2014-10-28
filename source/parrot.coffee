'use strict'

parrot = @parrot =

  version    : '0.10.28'
  environment: 'development'
  language   : window.navigator.language.slice(0,2)
  initialize : {}
  endpoint   : {}
  url        : {}
  store      :
    local    : {}
    session  : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $
