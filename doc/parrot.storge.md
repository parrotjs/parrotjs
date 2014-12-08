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