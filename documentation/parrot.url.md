### URL

The module `parrot.url` provide all you need for URL management.

This module add two namespace:

* `parrot.endpoint` that is used to select and switch between different API endpoints (production, testing, development,...)
* `parrot.URL` that is used to save URL's that you need in your frontend.

#### parrot

In the `parrot` namespace add the following methods:

##### .environment

Returns the environment that you are using at this moment.

```coffee
parrot.environment
# => 'development'
```

Default environment is `development`.

##### .language

Returns the language that you want to use in the requests with your API's endpoints.

```coffee
parrot.language
# => 'en'
```

Default language is obtained from `navigator.language`, that is the language of the browser of the user.

#### parrot.endpoint

The methods that are available in `parrot.endpoint` namespace are:

##### .add(&lt;Object&gt;)

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

##### .set(&lt;String&gt;)

Sets the default environment of `parrot.environment`. It's important because the URL's depend on the URL path register in the environment.

```coffee
parrot.environment.set 'production'
```

The methods that are available in `parrot.url` namespace are:

URL Management makes easy to do ajax or sockets requests with your backend. In order to do it, you need first to register the URL's. Each URL has a different schema as `protocol`, `path` and/or `query`.

#### parrot.URL

##### .add(&lt;Object&gt;)

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
parrot.url.login send: user
```

Check AJAX module for know how to update values in the moment of the request.
