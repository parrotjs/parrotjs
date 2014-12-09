<center>![](http://i.imgur.com/SmLtxEo.png)</center>

# Parrot <a href="http://bower.io/search/?q=Parrotjs"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/parrotjs/Parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency status](http://img.shields.io/david/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Use browser features (Notification, Storage, Vibration, Battery...) and make easy the communication with your API.

The most importante feature are:

- Modular design with chainable methods.
- AJAX Handler and URL Management.
- Modules provide a uniform API for HTML5 features: Notification, Battery, Vibration, Geolocation,...

For the future features check [Roadmap](https://github.com/parrotjs/Parrotjs/blob/master/ROADMAP.md) section.

## Install


```bash
bower install parrotjs
```

## Browsers Compatibility

[![browser support](https://ci.testling.com/parrotjs/Parrotjs.png)
](https://ci.testling.com/parrotjs/Parrotjs)

## Usage

At this moment, Parrot has two dependencies:

- [jsurl](https://github.com/Mikhus/jsurl), a Polyfill of [URL Objects](http://www.w3.org/TR/url/).
- [UAParser](https://github.com/faisalman/ua-parser-js) for Device detection.
- [QuoJS](https://github.com/soyjavi/QuoJS/), [jQuery](https://github.com/jquery/jquery) or [Zepto](https://github.com/madrobby/zepto) for AJAX handler.

We offers different builds depending on what you need

### Standalone

Just parrot code, without dependencies. Use it when you have a custom build with your other frontend dependencies:

```html
<script src="bower_components/parrotjs/dist/parrot.standalone.js"></script>
```

Notes that if you don't provide `jsurl`, `UAPaser` and AJAX handler parrot will not work!

### Standard

Parrot code with the minimum dependencies (`jsurl` and `UAPaserse`). Use it build when you provide your own ajax handler in yours frontend dependencies:

```html
<script src="bower_components/parrotjs/dist/parrot.js"></script>
```

### QuoJS, jQuery or ZeptoJS

Parrot code with all dependencies that he needs. Use it when you want to provide AJAX handler and not complicate yourself:

```html
<script src="bower_components/parrotjs/dist/parrot.quo.js"></script>
<script src="bower_components/parrotjs/dist/parrot.jquery.js"></script>
<script src="bower_components/parrotjs/dist/parrot.zepto.js"></script>
```

### Custom Build

For improve your perfomance experience, the code design of Parrot is modular and independent. If feel that you don't need some modules, you can create your own build using only the modules that you need. Only need to add `parrot` initial module for define global methods and the namespace, and later add the modules that you need. It's simple!

## Documentation

Check [Documentation](https://github.com/parrotjs/parrotjs/tree/beta/documentation) section for more information about each module API.

## License

MIT © parrotjs
