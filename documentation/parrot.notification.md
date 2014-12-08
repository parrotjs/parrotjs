### Notification

`parrot.notification` represents the namespace for use HTML5 Notifications.

#### parrot.notification

##### .add(&lt;Object&gt;)

It registers a new `Notification`. This is useful when you need to use the same notification repeatedly or use a notification structure that you can edit before show it.

When you register a `Notification` you need to provide a `name` that referenced it with the rest of the `Notification` properties:

```coffee
parrot.notification.add
  name: 'sample'
  title: 'A sample Notification'
  body: 'Hello World'
```

The properties of the `Notification` are defined in the [Standard Notification Properties](https://developer.mozilla.org/en-US/docs/Web/API/notification#Properties).

##### .remove(&lt;String...&gt;)

Remove a `Notification` that exists in the namespace.

```coffee
parrot.nofitication.remove 'sample'
# => true
```

##### .show(&lt;String&gt;, [Object])

Show the notification.

You can do it of different ways. For example, if you have a previous notification registered only reference the name of the notification:

```coffee
parrot.notification.show 'sample'
```

Maybe you want to show the notification but first want to add or update any property. Just provide the new values:

```coffee
parrot.notification.show 'sample', icon:'icon.gif'
```

If you prefer show a notification that is not registered you can do it providing the values of the notification:

```coffee
parrot.notification.show
  title : 'new notification'
  body  : 'another notification for you!'
  icon  : 'icon.gif'
```