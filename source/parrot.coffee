'use strict'

parrot = @parrot =
  version      : '0.12.7beta'
  environment  : 'development'
  language     : window.navigator.language.slice(0,2)
  endpoint     : {}
  url          : {}
  local        : {}
  session      : {}
  notification : {}
  device       : {}

  # DOM Handler Facade
  $ : if $$? then $$ else $

parrot._partial = (func) -> #, 0..n args
  args = Array::slice.call(arguments, 1)
  ->
    allArguments = args.concat(Array::slice.call(arguments))
    func.apply this, allArguments

parrot.device.detection = ->
  parrot.$(document.body).attr "data-lang", parrot.language
  parrot.$(document.body).attr "data-os", parrot.device.os.name
  parrot.$(document.body).attr "data-device", parrot.device.type
  parrot.$(document.body).attr "data-orientation", parrot.device.screen.orientation
  parrot.$(document.body).attr "data-screen", parrot.device.screen.size

parrot.device.noDetection = ->
  for detection in ['lang', 'os', 'device', 'orientation', 'screen']
    parrot.$(document.body).removeAttr "data-#{detection}"
