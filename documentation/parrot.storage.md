### Storage

This module is a little interface for using the same pattern in `localStorage` and `sessionStorage`. Both of them have different namespaces: `parrot.local` and `parrot.session`. However, both methods are the same.

Remember that the only difference between `localStorage` and `sessionStorage` is the lifetime of the information in the browser. `localStorage` is persistent and is deleted only when you clean it. `sessionStorage` is only for the session (for example, if you close and open the tab, it disappears).

#### parrot.local

##### .add(&lt;key&gt;, &lt;value&gt;)

It stores something in `session` or `local` storage, depending on the namespace that you use.

```coffee
parrot.local.add('foo', 'bar')
```

and the key is available in the namespace:

```coffee
parrot.local.foo()
# => 'bar'
```

You can also store objects:

```coffee
object = foo:'bar'
parrot.local.add('myObject', object)
# => 'bar'
```

And the object is directly available in the namespace:

```coffee
parrot.local.myObject()
# => {foo: 'bar'}
```

##### .remove(&lt;String...&gt;)

It removes the key and the value from the `local` or `session` storage:

```coffee
parrot.local.remove 'one'
parrot.local.one()
# => undefined
```

Note that you can delete different keys in one sentence:

```coffee
parrot.local.remove 'one', 'foo'
```

##### .removeAll()

It removes all the elements from tal` or `session` storage:

```coffee
parrot.local.removeAll()
parrot.session.removeAll()
```

##### .size()

It returns the length of the `local` or `session` storage:

```coffee
parrot.local.size()
# => 0
parrot.session.size()
# => 8
```

##### .isAvailable(&lt;key&gt;)

It returns if a certain value is available in the `local` or `session` storage:

```coffee
parrot.local.isAvailable 'foo'
# => false
parrot.local.isAvailable 'bar'
# => true
```

#### parrot.session

`parrot.session` has special helpers to make easier to save and retrieve the session. It's similar to the standard actions, but it lets you to write less code for doing the same.

If you don't provide a key in the `parrot.session`, the default key is `session`. For instance, if you want to store in a session an object, just write:

```coffee
parrot.session.add(user)
```

It is automatically associated with the key `session`. If you need to `get`, `remove` or check if it `isAvailable`, write the command without parameters and it will be resolved with `session` key:

```coffee
parrot.session.get()
parrot.session.remove()
parrot.session.isAvailable()
# => false
```
