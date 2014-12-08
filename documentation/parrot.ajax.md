### AJAX

This module make easy use a AJAX handler.

#### Parrot

##### .ajax(&lt;Object&gt; or &lt;String&gt;)

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

###### Using URL Objects

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

###### Using simple URL's

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
