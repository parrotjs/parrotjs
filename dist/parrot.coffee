'use strict'

## -- Public ------------------------------------------------------------------

parrot = @parrot =
  version  : '1.2.0'
  language : navigator.language.slice 0, 2
  $        : $$ or $ # DOM Handler Facade
