### Storage

This module is a little interface for using the same pattern in `localStorage` and `sessionStorage`. Both are different namespaces: `parrot.local` and `parrot.session`. But both methods are the same.

Remember that the only difference between `localStorage` and `sessionStorage` is the time of life of the information in the browser. `localStorage` is persisten and only is deleted if you clean it. `sessionStorage` is only for the session (for example, if you close and open the tab, disappear).

#### parrot.local

##### .add(&lt;key&gt;, &lt;value&gt;)

Stores something in `session` or `local` storage, depending on the namespace that you uses.

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

Removes the key and the value from the `local` or `session` storage:

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

Removes all the elements from tal` or `session` storage:

```coffee
parrot.local.removeAll()
parrot.session.removeAll()
```

##### .size()

Returns the length of the `local` or `session` storage:

```coffee
parrot.local.size()
# => 0
parrot.session.size()
# => 8
```

##### .isAvailable(&lt;key&gt;)

Returns if a certain value if available in the `local` or `session` storage:

```coffee
parrot.local.isAvailable 'foo'
# => false
parrot.local.isAvailable 'bar'
# => true
```

#### parrot.session

`parrot.session` has a special helpers to make easy save and retrieve the session. It's similar to the standard actions, but you have to write less code for do the same.

If you don't provide a key in `parrot.session`, the default key is `session`. For example, if you want to store in session a object only write:

```coffee
parrot.session.add(user)
```

Automatically is associated with the key `session`. If you need to `get`, `remove` or check if `isAvailable` write the command without parameter and is resolved with `session` key:

```coffee
parrot.session.get()
parrot.session.remove()
parrot.session.isAvailable()
# => false
```