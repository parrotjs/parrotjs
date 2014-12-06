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

## API

The library is divided in different namespaces:

### Basic

This method is available in `Parrot` namespace. This is the basic method that you need yo set up the library and know the current version.

#### .version

Returns the version of the library.

```coffee
Parrot.version
# => '0.11.27'
```

#### .environment

Returns the environment that you are using at this moment.

```coffee
Parrot.environment
# => 'development'
```

Default environment is `development`.

#### .language

Returns the language that you want to use in the requests with your API's endpoints.

```coffee
Parrot.language
# => 'en'
```

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

### Endpoint

This method is available in `Parrot.endpoint` namespace:

#### .add(&lt;Object&gt;)

registers a new endpoint. Object must have:

```coffee
name : 'development'
url  : 'http://localhost:1337'
```

When you register an endpoint it is accesible in the `Parrot.endpoint` namespace:

```coffee
Parrot.endpoint.development()
# => http://localhost:1337
```

#### .set(&lt;String&gt;)

Sets the default environment of `Parrot.environment`. It's important because the URL's depend on the URL path register in the environment.

```coffee
Parrot.environment.set('production')
```

### URL Management

URL Management makes easy to do ajax or sockets requests with your backend. In order to do it, you need first to register the URL's. Each URL has a different schema as `protocol`, `path` and/or `query`.

This method is available in `Parrot.url` namespace:

#### .add(&lt;Object&gt;)

Registers a new URL. The minimum information you need to check is:

```coffee
name: 'login'
```

You can specify the same options that ajax options and other options specific of the URL:

```coffee
path  : 'user/find'
query : ['sort','id asc']
```

Remember that in a URL Object the `url` is equal to:

```
<endpoint URL>/[url.path]/[url.query]
```

Now, the URL is available in the `Parrot.url` namespace:

```coffee
Parrot.url.login()
# => { method: 'GET', protocol: 'http', path: 'user/login', query: null }
```

If you want update some value, you can provide an argument when you call the method. For example, for login you need to send the user information to the server:

```coffee
user = username: 'kiko', password: 'nerd'
Parrot.url.login(send: user)
```

Check AJAX section for know how to update values in the moment of the request and know the short version of each URL Object.

### Storage

This module is a little interface for using the same pattern in `localStorage` and `sessionStorage`. Both are different namespaces: `Parrot.local` and `Parrot.session`. But both methods are the same.

Remember that the only difference between `localStorage` and `sessionStorage` is the time of life of the information in the browser. `localStorage` is persisten and only is deleted if you clean it. `sessionStorage` is only for the session (for example, if you close and open the tab, disappear).

#### .add(&lt;key&gt;, &lt;value&gt;)

Stores something in `session` or `local` storage, depending on the namespace that you uses.

```coffee
Parrot.local.add('foo', 'bar')
```

and the key is available in the namespace:

```coffee
Parrot.local.foo()
# => 'bar'
```

You can also store objects:

```coffee
object = foo:'bar'
Parrot.local.add('myObject', object)
# => 'bar'
```

And the object is directly available in the namespace:

```coffee
Parrot.local.myObject()
# => {foo: 'bar'}
```

#### .remove(&lt;String...&gt;)

Removes the key and the value from the `local` or `session` storage:

```coffee
Parrot.local.remove 'one'
Parrot.local.one()
# => undefined
```

Note that you can delete different keys in one sentence:

```coffee
Parrot.local.remove 'one', 'foo'
```

#### .removeAll()

Removes all the elements from tal` or `session` storage:

```coffee
Parrot.local.removeAll()
Parrot.session.removeAll()
```

#### .size()

Returns the length of the `local` or `session` storage:

```coffee
Parrot.local.size()
# => 0
Parrot.session.size()
# => 8
```

#### .isAvailable(&lt;key&gt;)

Returns if a certain value if available in the `local` or `session` storage:

```coffee
Parrot.local.isAvailable 'foo'
# => false
Parrot.local.isAvailable 'bar'
# => true
```

### Storage Session Helpers

`Parrot.session` has a special helpers to make easy save and retrieve the session. It's similar to the standard actions, but you have to write less code for do the same.

If you don't provide a key in `Parrot.session`, the default key is `session`. For example, if you want to store in session a object only write:

```coffee
Parrot.session.add(user)
```

Automatically is associated with the key `session`. If you need to `get`, `remove` or check if `isAvailable` write the command without parameter and is resolved with `session` key:

```coffee
Parrot.session.get()
Parrot.session.remove()
Parrot.session.isAvailable()
# => false
```

### Notification

`Parrot.notification` represents the namespace for use HTML5 Notifications.

#### .isAvailable()

Check if your browser supports [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/notification).

```coffee
Parrot.nofitication.isAvailable()
# => true
```

#### .add(&lt;Object&gt;)

Registers a new `Notification`. This is useful when you need use a notification repeatedly or use a notification structure that you can edit before show it.

When you register a `Notification` you need to provide a `name` that referenced it with the rest of the `Notification` properties:

```coffee
Parrot.notification.add
  name: 'sample'
  title: 'A sample Notification'
  body: 'Hello World'
```

The properties of the `Notification` are defined in the [Standard Notification Properties](https://developer.mozilla.org/en-US/docs/Web/API/notification#Properties).

#### .remove(&lt;String...&gt;)

Remove a `Notification` that exists in the namespace.

```coffee
Parrot.nofitication.remove 'sample'
# => true
```

#### .show(&lt;String&gt;, [Object])

Show the notification.

You can do it of different ways. For example, if you have a previous notification registered only reference the name of the notification:

```coffee
Parrot.notification.show 'sample'
```

Maybe you want to show the notification but first want to add or update any property. Just provide the new values:

```coffee
Parrot.notification.show 'sample', icon:'icon.gif'
```

If you prefer show a notification that is not registered you can do it providing the values of the notification:

```coffee
Parrot.notification.show
  title : 'new notification'
  body  : 'another notification for you!'
  icon  : 'icon.gif'
```

## License

MIT © sailorjs
