### Notification

`parrot.notification` represents the namespace for HTML5 notifications usage.

#### parrot.notification

##### .add(&lt;Object&gt;)

It registers a new `Notification`. This is useful when you need to use the same notification repeatedly or to use a notification structure that you can edit before showing it.

When you register a `Notification`, you need to provide a `name` that references it with the rest of the `Notification` properties:

```coffee
parrot.notification.add
  name: 'sample'
  title: 'A sample Notification'
  body: 'Hello World'
```

The properties of the `Notification` are defined in the [Standard Notification Properties](https://developer.mozilla.org/en-US/docs/Web/API/notification#Properties).

##### .remove(&lt;String...&gt;)

Removing a `Notification` that exists in the namespace.

```coffee
parrot.nofitication.remove 'sample'
# => true
```

##### .show(&lt;String&gt;, [Object])

Showing the notification.

You can do it in different ways. For example, if you have a previous notification registered, you only need to reference the name of the notification:

```coffee
parrot.notification.show 'sample'
```

You may want to show the notification, but you want to add or update any property first. In that case, you just to provide the new values:

```coffee
parrot.notification.show 'sample', icon:'icon.gif'
```

If you prefer to show a notification which is not registered, you can do it providing the values of the notification:

```coffee
parrot.notification.show
  title : 'new notification'
  body  : 'another notification for you!'
  icon  : 'icon.gif'
```
