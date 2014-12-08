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

The documentation are divided for each module. Check Documentation section for more information about each module API.


Default language is obtained from `navigator.language`, that is the language of the browser of the user.

#### .ajax(&lt;Object&gt; or &lt;String&gt;)

Returns the result of AJAX request.

The defaults options for whatever ajax request are:

```coffee
method       : 'get'
send         : {}
headers      : {}
async        : true
datatype     : 'json'
content_type : 'application/x-www-form-urlencoded'
```

##### Using URL Objects

It exists different ways to provide the URL of the AJAX request, but the most common pattern is to give a `Parrot.url` object:

```coffee
Parrot.url.ajax Parrot.url.login(), (err, result) ->
```

If you want to write less code:

```coffee
Parrot.url.ajax 'login', (err, result) ->
```

Maybe you need to modify setting of the URL Object before the ajax request:

```coffee
Parrot.url.ajax Parrot.url.login(send:user), (err, result) ->
```

in short version could be:

```coffee
Parrot.url.ajax 'login', send:user, (err, result) ->
```

#### Using simple URL's

Also you can provide a URL that you are not registered but that follows a `Parrot.url` similar interface (extra field for the `url` because it is not calculated based on the `Parrot.environment`).

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
Parrot.url.ajax object, (err, result) ->
```

Is it possible a short version of this piece of code? of course!

```coffee
Parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
```

Not problem if you need to specify another options of the AJAX or as URL Object:

```coffee
Parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', async:false, send:user (err, result) ->
```



## License

MIT © sailorjs
