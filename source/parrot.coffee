'use strict'

parrot = @parrot =
  version  : '0.12.16'
  language : navigator.language.slice 0, 2
  $        : if $$? then $$ else $ # DOM Handler Facade
