<center>![](http://i.imgur.com/1JUrwUB.png)</center>

# Parrot

[![Build Status](http://img.shields.io/travis/sailorjs/parrotjs/master.svg?style=flat)](https://travis-ci.org/sailorjs/parrotjs)
[![Dependency status](http://img.shields.io/david/sailorjs/parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/parrotjs.svg?style=flat)](https://david-dm.org/sailorjs/parrotjs#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/parrotjs.svg?style=flat)](https://www.npmjs.org/package/parrotjs)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Client library to connect your frontend application with whatever sails backend.

Parrot helps you connect your frontend with you API backend. Only need to say to parrot what do, and parrot will do the hard work!

At this moment Parrot Support:

- Register different environment (development, production, testing,...).
- Register different URL with different protocols (http, sockets) and make easy do ajax requests.
- Manage uniformly sessionStorage and localStorage.
- Chainable methods.

## Install


```bash
bower install parrotjs
```

## Usage

You need to link the library in your frontend. You can user Gulp/Grunt build to concatenate with other dependencies o simply link as html script tag:

```html
<script src="bower_components/parrotjs/dist/parrot.js"></script>
```

At this moment Parrot have two dependencies:

- [jsurl](https://github.com/Mikhus/jsurl) for url query string parser.
- [QuoJS](https://github.com/soyjavi/QuoJS/) for AJAX requests.
- [Hope](https://github.com/soyjavi/hope) for Promises.

So, exist two version of the library:

- `standalone` only have to code without dependencies
- `build` have all code with dependencies

This will be improved with ECMACSCript 6 because have native promises and the system for load external dependencies will be better. but it's ok.

## API

The library are divided in different namespaces

### Basic

This method are available in `parrot` namespace. This are the basic method that you need yo set up the library and know the current version.

#### .version

Return the version of the library.

```coffee
parrot.version
# => '0.10.25'
```

#### .environment

Return the environment that you are using at this moment.

```coffee
parrot.environment
# => 'development'
```

Default environment is `development`.

### Endpoint

This method are available in `parrot.endpoint` namespace:

#### .add(\<object>)

register a new endpoint. object must have:
	
```json
name:'development', 
url:'http://localhost:1337'
```

when you register a endpoint it is accesible in the `parrot.endpoint` namespace:

```coffee
parrot.endpoint.development()
# => http://localhost:1337
```

#### .set(\<value>)

set the default environment of `parrot.environment`. It's important because the URL's depend of the URL path register in the environment.

```coffee
parrot.environment.set('production')
```

#### .remove(\<name>)

delete a environment from the namespace

```coffee
parrot.environment.remove('testing')
```

### URL Management

URL Management make easy do ajax or sockets petitions with your backend. For do it, first you need to register the URL's. Each URL have a different schema as `protocol`, `path` and/or `query`.

This method are available in `parrot.url` namespace:

#### .add(\<object>)

Register a new URL. The minimum information that you need to prove is:

```json
name: 'login'
```

but you can be more specify:

```json
name: 'login',
path: 'user/login',
protocol: 'http',
query: null,
method: 'POST',
send: null
```

by default `method` is `GET`, protocol is http and other attributes that you don't provide are `undefined`.

Now the URL are available in the `parrot.url` namespace:

```coffee
parrot.url.login()
# => { method: 'GET', protocol: 'http', path: 'user/login', query: null }
```

If you can update some value, you can provide as argument when you call the method. For Example, for make login you need to send the user information to the server:

```coffee
user = username: 'kiko', password: 'nerd'
parrot.url.login(send: user)
```

#### .remove(\<name>)

Delete a URL from the namespace.

```coffee
parrot.url.remove('logout')
```

#### .ajax(\<Object>)

Return the result of AJAX request.

Exist different ways to provide the URL of the AJAX request, but the most common pattern is provide a `parrot.url` object:

```coffee
parrot.url.ajax parrot.url.login(), (err, result) ->
```

If you want to write less code:

```coffee
parrot.url.ajax 'login', (err, result) ->
```

Also you can provide a URL that you are not register but follow `parrot.url` similar interface (extra field for the `url` because is not calculated based on the `parrot.environment`). 

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
parrot.url.ajax object, (err, result) ->
```

default options are supported here also:

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two'
parrot.url.ajax object, (err, result) ->
```

and more simply, you can provide only the URL if is a `GET` method:

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
```

### Storage

This module is a little interface for use the same pattern in `localStorage` and `sessionStorage`. Both are different namespaces: `parrot.storage.local` and `parrot.storage.session`. But the method are the same.

Remember that the only different between `localStorage` and `sessionStorage` is the time of life of the information in the browser. `localStorage` is persisten and only is deleted if you clean it. `sessionStorage` is only for the session (for example, if you close and open the tab, disappear).

#### .set(\<key>, \<value>)

Store something in `session` or `local` storage, depend of the namespace that you uses.

```coffee
parrot.store.local.set('foo', 'bar')
```

and the key is available in the namespace:

```coffee
parrot.store.local.foo()
# => 'bar'
```

You can also store objects:

```coffee
object = foo:'bar'
parrot.store.local.set('myObject', object)
# => 'bar'
```

And the object is directly available in the namespace:

```coffee
parrot.store.local.myObject()
# => {foo: 'bar'}
```

#### .remove(\<key>)
	
Delete a key and the value from the `local` or `session` storage:

```coffee
parrot.storage.local.clear('one')
parrot.store.local.one()
# => undefined
```

#### .removeAll()

Clear all elements from the `local` or `session` storage:

```coffee
parrot.storage.local.removeAll()
parrot.storage.session.removeAll()
```

#### .size()

Know the length of the `local` or `session` storage:

```coffee
parrot.storage.local.size()
# => 0
parrot.storage.session.size()
# => 8
```

#### .isAvailable(\<key>)

Know if a certain value if available in the `local` or `session` storage:

```coffee
parrot.storage.local.isAvailable('foo')
# => false
parrot.storage.local.isAvailable('bar')
# => true
```

## License

MIT © sailorjs