describe 'Notification ::', ->

  it 'add new notification', ->
    notification =
      name  : 'sample'
      title : 'Test'
      body  : 'This is a sample notification'

    parrot.notification.add notification
    parrot.notification.sample().title.should.eql 'Test'

  # it 'check if notification is available', ->
  #   parrot.notification.isAvailable().should.eql true

  # it 'show a new notification', (done) ->
  #   opts =
  #     title   : 'test'
  #     content : 'this is a test'
  #     onShow  : (event) ->
  #       done()
  #   parrot.notification.show(opts)
