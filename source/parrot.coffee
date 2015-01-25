'use strict'

parrot = @parrot =
  version  : '1.1.25'
  language : navigator.language.slice 0, 2
  $        : if $$? then $$ else $ # DOM Handler Facade
