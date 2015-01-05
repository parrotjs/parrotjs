<center>![](http://i.imgur.com/SmLtxEo.png)</center>

# Parrot <a href="http://bower.io/search/?q=Parrotjs"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/parrotjs/Parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency status](http://img.shields.io/david/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

Browsers are more modern than ever. You can know the battery of your laptop, vibrate your mobile or know your position. JavaScript (and browsers) are in everything and can do more things than you think.

On the other hand, the API of this news features are too primitive: the browsers just provide the minimal interface, and is necessary write a little code around it. Also, each browser have specific vendor and exist minimal changes in the way to access a this methods.

Parrot is a high-level wrapper for browser features: It's provide you concise methods for use this features today.

## Get Started

The design of code is modular. Only use the wrappers that you need. All code is minifier and prepare for production.

| Name                                                                                 | Description                                                                                                                         |
|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [parrot](https://github.com/parrotjs/parrotjs)                                       | This repository and have the basic code provide DOM Handler and other minimal things.                                                    |
| [parrot-boilerplate](https://github.com/parrotjs/parrot-boilerplate)                 | If you want to create a parrot-module, clone this repository and you have the standard scaffold and pre-configuration for do it.    |
| [parrot-module-ajax](https://github.com/parrotjs/parrot-module-ajax)                 | Make easy do AJAX petitions with different backend. Using with URL module for better experience.                                    |
| [parrot-module-url](https://github.com/parrotjs/parrot-module-url)                   | URL Management with support for different environments (testing, production, development,...). Use with AJAX for better experience. |
| [parrot-module-storage](https://github.com/parrotjs/parrot-module-storage)           | Provides a uniformly API for management localStorage and SessionStorage.                                                             |
| [parrot-module-notification](https://github.com/parrotjs/parrot-module-notification) | Interact with HTML5 Notifications. It makes easy to reuse notifications.                                                            |
| [parrot-module-device](https://github.com/parrotjs/parrot-module-device)             | Automatically detect your device and provide some useful information: vendor, screen properties, browser vendor and version,...     |
| [parrot-module-geolocation](https://github.com/parrotjs/parrot-module-geolocation)   | Using geolocation with guarantees to obtain a good approximation |

For install the library use `bower`:

```bash
bower install parrotjs
bower install parrot-module-device
```

We offers different builds depending on what you need

**Standalone (without DOM Handler)**

Just parrot code. You need to provide an DOM handler:

```html
<script src="bower_components/parrotjs/dist/parrot.standalone.js"></script>
```

**Standard (with QuoJS, jQuery or ZeptoJS as DOM Handler)**

Parrot code + DOM Handler. We have 3 different builds:

```html
<script src="bower_components/parrotjs/dist/parrot.quo.js"></script>
<script src="bower_components/parrotjs/dist/parrot.jquery.js"></script>
<script src="bower_components/parrotjs/dist/parrot.zepto.js"></script>
```

For use different modules, just chain the modules in your `html`:

```html
<script src="bower_components/parrotjs/dist/parrot.quo.js"></script>
<script src="bower_components/parrot-module-device/dist/parrot.device.js"></script>
```

Remember that for `production` you can concatenate all files that you need in one creating a simple Gulp/Grunt task.

## Documentation

This module provides the `parrot` namespace and the global methods that other modules need, which are not interesting for you.

### parrot

#### .version

Returns the version of the library.

```coffee
parrot.version
# => '0.11.27'
```

### .$

Returns the instance of the DOM handlers (QuoJS, jQuery or ZeptoJS)

```coffee
parrot.$
```

### .language

Returns the language detected in the browser.

```
parrot.language
# => 'en'
```

## License

MIT © parrotjs
