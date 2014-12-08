### AJAX

This module makes easier to use an AJAX handler.

#### parrot

##### .ajax(&lt;Object&gt; or &lt;String&gt;)

Returns the result of AJAX request.

The default options for any ajax request are:

```coffee
method       : 'get'
send         : {}
headers      : {}
async        : true
datatype     : 'json'
content_type : 'application/x-www-form-urlencoded'
```

###### Using URL Objects

There are different ways to provide the URL of the AJAX request, but the most common pattern is to give a `parrot.url` object:

```coffee
parrot.url.ajax parrot.url.login(), (err, result) ->
```

If you want to write less code:

```coffee
parrot.url.ajax 'login', (err, result) ->
```

You may need to modify the settings of the URL Object before the ajax request:

```coffee
parrot.url.ajax parrot.url.login(send:user), (err, result) ->
```

A short version could be:

```coffee
parrot.url.ajax 'login', send:user, (err, result) ->
```

###### Using simple URL's

Also, you can provide a URL that you are not registering but that follows a `parrot.url` similar interface (extra field for the `url` because it is not calculated based on the `parrot.environment`).

```coffee
object = url: 'http://echo.jsontest.com/key/value/one/two', method: 'GET'
parrot.url.ajax object, (err, result) ->
```

Is it possible a shorter version of this piece of code? Of course!

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', (err, result) ->
```

There is no problem if you need to specify another options of the AJAX or as URL Object:

```coffee
parrot.url.ajax 'http://echo.jsontest.com/key/value/one/two', async:false, send:user (err, result) ->
```
