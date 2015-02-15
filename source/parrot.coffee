'use strict'

## -- Public ------------------------------------------------------------------

parrot = @parrot = do ->
  version  : '1.2'
  language : navigator.language.slice 0, 2
  $        : $$ or $ # DOM Handler Facade
