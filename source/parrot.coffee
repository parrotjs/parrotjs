'use strict'

parrot = @parrot =
  version  : '0.12.9'
  $        : if $$? then $$ else $ # DOM Handler Facade
  _partial : (func) -> #, 0..n args
    args = Array::slice.call(arguments, 1)
    ->
      allArguments = args.concat(Array::slice.call(arguments))
      func.apply this, allArguments
