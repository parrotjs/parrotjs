describe 'Notification ::', ->

  xit 'add new notification', ->
    notification =
      name  : 'sample'
      title : 'Test'
      body  : 'This is a sample notification'
    parrot.notification.add notification
    parrot.notification.sample().body.should.eql 'This is a sample notification'

  xit 'show the notification that is already added', ->
    parrot.notification.show 'sample', body :'yarl!'
    parrot.notification.sample().body.should.eql 'yarl!'

  xit 'show a notification that is not stored', ->
    notification =
      title : 'Test'
      body  : 'another sample notification!'
    notification = parrot.notification.show notification
    notification.body.should.eql 'another sample notification!'
