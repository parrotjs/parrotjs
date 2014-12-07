parrot.$ ->
  initialize = ->
    _detection = parrot.device.detection
    _noDetection = parrot.device.noDetection

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
    parrot.device.detection = _detection
    parrot.device.noDetection = _noDetection

  do initialize
  do parrot.device.detection
  parrot.$(window).on 'resize', initialize
  parrot.$(window).on 'orientationchange', initialize
