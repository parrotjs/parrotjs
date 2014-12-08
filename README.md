<center>![](http://i.imgur.com/SmLtxEo.png)</center>

# Parrot <a href="http://bower.io/search/?q=Parrotjs"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/sailorjs/Parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency status](http://img.shields.io/david/sailorjs/Parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/Parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/Parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/Parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Client library to connect your frontend application with whatever sails backend.

Parrot helps you connect your frontend with you API backend. Only need to say to Parrot what do, and Parrot will do the hard work!

At this moment Parrot supports:

- Register different environments (development, production, testing,...).
- Register different URLs with different protocols (http, sockets) and make easy AJAX requests.
- Manage uniformly sessionStorage and localStorage.
- Chainable methods for make easy concatenate different actions.

For the future features check [Roadmap](https://github.com/sailorjs/Parrotjs/blob/master/ROADMAP.md) section.

## Install


```bash
bower install parrotjs
```

## Browsers Compatibility

[![browser support](https://ci.testling.com/sailorjs/Parrotjs.png)
](https://ci.testling.com/sailorjs/Parrotjs)

## Usage

At this moment, Parrot has two dependencies:

- [jsurl](https://github.com/Mikhus/jsurl), a Polyfill of [URL Objects](http://www.w3.org/TR/url/).
- [QuoJS](https://github.com/soyjavi/QuoJS/), [jQuery](https://github.com/jquery/jquery) or [Zepto](https://github.com/madrobby/zepto) for AJAX handler.

We offers different builds depending on what you need

### Standalone

Just Parrot code, without dependencies. Use it when you have a custom build with your other frontend dependencies:

```html
<script src="bower_components/parrotjs/dist/parrot.standalone.js"></script>
```

Notes that if you don't provide `jsurl` and AJAX handler parrot will not work!

### Standard

Parrot code with the minimum dependencies (only `jsurl`). Use it build when you provide your own ajax handler in yours frontend dependencies:

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

Check [Documentation](https://github.com/sailorjs/parrotjs/tree/beta/documentation) section for more information about each module API.

## License

MIT © sailorjs
