'use strict'

Parrot = @Parrot =
  version   : "0.10.22"
  Device    : {}
  Storage   : {}
  # DOM Handler Facade
  $: (args...) -> if $$? then $$ args... else $ args...
