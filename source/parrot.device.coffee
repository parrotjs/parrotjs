do ->
  el = document.body
  parrot.device =
    detection: ->
      el.dataset.lang        = parrot.language
      el.dataset.os          = parrot.device.os.name.toLowerCase()
      el.dataset.device      = parrot.device.type
      el.dataset.orientation = parrot.device.screen.orientation
      el.dataset.screen      = parrot.device.screen.size
      el.dataset.retina      = (if @screen.pixelRatio is 1 then false else true)

    noDetection: ->
      for property in ['lang', 'os', 'device', 'orientation', 'screen', "retina"]
        delete el.dataset[property]

parrot.$ ->
  initialize = ->
    _detection   = parrot.device.detection
    _noDetection = parrot.device.noDetection
    reduceRatio  = (numerator, denominator) ->
      gcd = (a, b) ->
        return a  if b is 0
        gcd b, a % b
      return "1/1"  if numerator is denominator
      if numerator < denominator
        temp = numerator
        numerator = denominator
        denominator = temp
      divisor = gcd(numerator, denominator)
      (if "undefined" is typeof temp then (numerator / divisor) + "/" + (denominator / divisor) else (denominator / divisor) + "/" + (numerator / divisor))

    parser = new UAParser().getResult()
    delete parser.ua
    parser.cpu = parser.cpu.architecture if parser.cpu.architecture?
    delete parser.cpu
    _device = parser.device
    delete parser.device
    parser[property] = value for property, value of _device when value?
    parrot.device = parser

    # screen
    w = screen.width
    h = screen.height
    size = if (h > w and w < 480) or (h < w and h < 480) then 'small' else 'normal'
    orientation = if ((h / w) < 1) then 'landscape' else 'portrait'

    parrot.device.screen =
      width       : w
      height      : h
      size        : size
      orientation : orientation
      pixelRatio  : devicePixelRatio or 'unsupported'
      aspectRatio : reduceRatio w, h

    # fix desktop detection
    parrot.device.type = 'desktop' if not parrot.device.type? and size is 'normal'

    # detection
    parrot.device.detection = _detection
    parrot.device.noDetection = _noDetection

  do initialize
  do parrot.device.detection
  parrot.$(window).on 'resize', initialize
  parrot.$(window).on 'orientationchange', initialize
