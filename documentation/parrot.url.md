### URL

The module `parrot.url` provides you everything you need for URL management.

This module adds two namespaces:

* `parrot.endpoint`, which is used to select and switch between different API's endpoints (production, test, development,...)
* `parrot.URL`, wich is used to save URL's that you need in your frontend.

#### parrot

In the `parrot` namespace, add the following methods:

##### .environment

It returns the environment that you are using at this moment.

```coffee
parrot.environment
# => 'development'
```

The default environment is `development`.

##### .language

It returns the language that you want to use in the requests with your API's endpoints.

```coffee
parrot.language
# => 'en'
```

The default language is obtained from `navigator.language`, which is the browser's language.

#### parrot.endpoint

The methods that are available in the `parrot.endpoint` namespace are:

##### .add(&lt;Object&gt;)

It registers a new endpoint. Object must have:

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

It sets the default environment of `parrot.environment`. It's important due to the URLs depend on the URL path registered in the environment.

```coffee
parrot.environment.set 'production'
```

The methods that are available in `parrot.url` namespace are:

URL Management makes easier to do ajax or sockets requests with your backend. In order to do it, you need first to register the URLs. Each URL has a different schema, as `protocol`, `path` and/or `query`.

#### parrot.URL

##### .add(&lt;Object&gt;)

It registers a new URL. The minimum information you need to check is:

```coffee
name: 'login'
```

You can specify the same options than ajax options and other options specify of the URL:

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

If you want update a value, you can provide an argument when you call the method. For example, if you want to login you need to send the user information to the server:

```coffee
user = username: 'kiko', password: 'nerd'
parrot.url.login send: user
```

Check the [AJAX module](https://github.com/sailorjs/parrotjs/blob/beta/documentation/parrot.ajax.md) if you want to know how to update values at the moment of the request.
