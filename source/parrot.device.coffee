parrot.$ ->

  noDetection = ->
    for detection in ['os', 'device', 'orientation', 'screen']
      parrot.$(document.body).removeAttr "data-#{detection}"

  initialize = ->
    parser = new UAParser().getResult()
    parrot.device = parser.device
    delete parser.device
    for property, value of parser
      continue if property is 'cpu' and not property.architecture? # no cpu detection
      parrot.device[property] = value

    # fix desktop detection
    unless parrot.device.type?
      parrot.device.type = 'desktop'
      delete parrot.device.vendor
      delete parrot.device.model

    # screen
    w = window.screen.availWidth
    h = window.screen.availHeight
    size = if (h > w and w < 480) or (h < w and h < 480) then 'small' else 'normal'
    orientation = if ((h / w) < 1) then 'landscape' else 'portrait'

    parrot.device.screen =
      width       : w
      height      : h
      size        : size
      orientation : orientation

    # detection
    parrot.$(document.body).attr "data-os", parrot.device.os.name
    parrot.$(document.body).attr "data-device", parrot.device.type
    parrot.$(document.body).attr "data-orientation", parrot.device.screen.orientation
    parrot.$(document.body).attr "data-screen", parrot.device.screen.size
    parrot.device.noDetection = noDetection

  do initialize
  parrot.$(window).on 'resize', initialize
  parrot.$(window).on 'orientationchange', initialize
