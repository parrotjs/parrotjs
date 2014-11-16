<center>![](http://i.imgur.com/SmLtxEo.png)</center>

# Parrot
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/sailorjs/parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](http://img.shields.io/travis/sailorjs/parrotjs/master.svg?style=flat)](https://travis-ci.org/sailorjs/parrotjs)
[![Dependency status](http://img.shields.io/david/sailorjs/parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/parrotjs#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/parrotjs.svg?style=flat)](https://www.npmjs.org/package/parrotjs)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Client library to connect your frontend application with whatever sails backend.

Parrot helps you connect your frontend with you API backend. Only need to say to parrot what do, and parrot will do the hard work!
a
At this moment Parrot supports:

- Register different environments (development, production, testing,...).
- Register different URLs with different protocols (http, sockets) and make easy AJAX requests.
- Manage uniformly sessionStorage and localStorage.
- Multilanguage support.
- Chainable methods.

## Install


```bash
bower install parrotjs
```

## Usage

You need to link the library in your frontend. You can use Gulp/Grunt to build and concatenate it with other dependencies o simply link it as a html script tag:

```html
<script src="bower_components/parrotjs/dist/parrot.js"></script>
```

At this moment, Parrot has two dependencies:

- [jsurl](https://github.com/Mikhus/jsurl) for url query string parser.
- [QuoJS](https://github.com/soyjavi/QuoJS/) for AJAX requests.

So, there are two version of the library:

- `standard` version has all the code with dependencies.
- `standalone` version has code without dependencies.

We are working to offer a library without dependencies, writing our own query params parser and ajax handler. For more information check [Roadmap](https://github.com/sailorjs/parrotjs/blob/master/ROADMAP.md) section.

Remember that you can use `standalone` and use [jQuery](https://github.com/jquery/jquery) or [Zepto](https://github.com/madrobby/zepto) if you prefer it!

## API

The library is divided in different namespaces:

### Basic

This method is available in `parrot` namespace. This is the basic method that you need yo set up the library and know the current version.

#### .version

Returns the version of the library.

```coffee
parrot.version
# => '0.11.09'
```

#### .environment

Returns the environment that you are using at this moment.

```coffee
parrot.environment
# => 'development'
```

Default environment is `development`.

#### .language

Returns the language that you want to use in the requests with your API's endpoints.

```coffee
parrot.language
# => 'en'
```

Default language is obtained from `navigator.language`, that is the language of the browser of the user.

#### .ajax(\<Object> or \<String>)

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

It exists different ways to provide the URL of the AJAX request, but the most common pattern is to give a `parrot.url` object:

```coffee
parrot.url.ajax parrot.url.login(), (err, result) ->
```

If you want to write less code:

```coffee
parrot.url.ajax 'login', (err, result) ->
```

Maybe you need to modify setting of the URL Object before the ajax request:

```coffee
parrot.url.ajax parrot.url.login(send:user), (err, result) ->
```

in short version could be:

```coffee
parrot.url.ajax 'login', send:user, (err, result) ->
```

#### Using simple URL's

Also you can provide a URL that you are not registered but that follows a `parrot.url` similar interface (extra field for the `url` because it is not calculated based on the `parrot.environment`).

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
parrot.url.ajax object, (err, result) ->
```

Is it possible a short version of this piece of code? of course!

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
```

Not problem if you need to specify another options of the AJAX or as URL Object:

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', async:false, send:user (err, result) ->
```

### Endpoint

This method is available in `parrot.endpoint` namespace:

#### .add(\<object>)

registers a new endpoint. Object must have:

```coffee
name : 'development'
url  : 'http://localhost:1337'
```

When you register an endpoint it is accesible in the `parrot.endpoint` namespace:

```coffee
parrot.endpoint.development()
# => http://localhost:1337
```

#### .set(\<value>)

Sets the default environment of `parrot.environment`. It's important because the URL's depend on the URL path register in the environment.

```coffee
parrot.environment.set('production')
```

#### .remove(\<name>)

Deletes a environment from the namespace

```coffee
parrot.environment.remove('testing')
```

### URL Management

URL Management makes easy to do ajax or sockets requests with your backend. In order to do it, you need first to register the URL's. Each URL has a different schema as `protocol`, `path` and/or `query`.

This method is available in `parrot.url` namespace:

#### .add(\<object>)

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
 
Now, the URL is available in the `parrot.url` namespace:

```coffee
parrot.url.login()
# => { method: 'GET', protocol: 'http', path: 'user/login', query: null }
```

If you want update some value, you can provide an argument when you call the method. For example, for login you need to send the user information to the server:

```coffee
user = username: 'kiko', password: 'nerd'
parrot.url.login(send: user)
```

Check AJAX section for know how to update values in the moment of the request and know the short version of each URL Object.

#### .remove(\<name>)

Delete a URL from the namespace.

```coffee
parrot.url.remove('logout')
```

### Storage

This module is a little interface for using the same pattern in `localStorage` and `sessionStorage`. Both are different namespaces: `parrot.local` and `parrot.session`. But both methods are the same.

Remember that the only difference between `localStorage` and `sessionStorage` is the time of life of the information in the browser. `localStorage` is persisten and only is deleted if you clean it. `sessionStorage` is only for the session (for example, if you close and open the tab, disappear).

#### .set(\<key>, \<value>)

Stores something in `session` or `local` storage, depending on the namespace that you uses.

```coffee
parrot.local.set('foo', 'bar')
```

and the key is available in the namespace:

```coffee
parrot.local.foo()
# => 'bar'
```

You can also store objects:

```coffee
object = foo:'bar'
parrot.local.set('myObject', object)
# => 'bar'
```

And the object is directly available in the namespace:

```coffee
parrot.local.myObject()
# => {foo: 'bar'}
```

#### .clear(\<keys...>)

Deletes the key and the value from the `local` or `session` storage:

```coffee
parrot.local.clear('one')
parrot.local.one()
# => undefined
```

Also you can delete different keys in one sentence:

```coffee
parrot.local.clear 'one', 'foo'
```

#### .clearAll()

Clears all the elements from tal` or `session` storage:

```coffee
parrot.local.removeAll()
parrot.session.removeAll()
```

#### .size()

Returns the length of the `local` or `session` storage:

```coffee
parrot.local.size()
# => 0
parrot.session.size()
# => 8
```

#### .isAvailable(\[key])

Returns if a certain value if available in the `local` or `session` storage:

```coffee
parrot.local.isAvailable('foo')
# => false
parrot.local.isAvailable('bar')
# => true
```

### sessionStorage Helpers

`parrot.session` has a special helpers to make easy save and retrieve the session. It's similar to the standard actions, but you have to write less code for do the same.

If you want to save a user session only write:

```coffee
parrot.session.set(user)
```

Automatically is associated with the key `session`. If you need to `get`, `clear` or check if `isAvailable` write the command without parameter and is resolved with `session` key:

```coffee
parrot.session.get(user)
parrot.session.clear()
parrot.session.isAvailable()
# => false
```

## License

MIT © sailorjs
