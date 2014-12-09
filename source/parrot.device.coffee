do ->
  parrot.device =
    detection: ->
      parrot.$(document.body).attr "data-lang", parrot.language
      parrot.$(document.body).attr "data-os", this.os.name
      parrot.$(document.body).attr "data-device", this.type
      parrot.$(document.body).attr "data-orientation", this.screen.orientation
      parrot.$(document.body).attr "data-screen", this.screen.size

    noDetection: ->
      for detection in ['lang', 'os', 'device', 'orientation', 'screen']
        parrot.$(document.body).removeAttr "data-#{detection}"

parrot.$ ->
  initialize = do ->
    _detection = parrot.device.detection
    _noDetection = parrot.device.noDetection

    parser = new UAParser().getResult()
    delete parser.ua
    parser.cpu = parser.cpu.architecture if parser.cpu.architecture?
    delete parser.cpu
    _device = parser.device
    delete parser.device
    parser[property] = value for property, value of _device when value?
    parrot.device = parser

    # screen
    w = window.innerWidth
    h = window.innerHeight
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

    # fix desktop detection
    unless parrot.device.type? and size is 'normal' and orientation is 'landscape'
      parrot.device.type = 'desktop'

  do parrot.device.detection
  parrot.$(window).on 'resize', initialize
  parrot.$(window).on 'orientationchange', initialize
