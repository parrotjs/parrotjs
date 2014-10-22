describe "Module", ->

  syncDouble = (value) ->
    promise = new Hope.Promise()
    _double promise, value
    promise

  asyncDouble = (value, time = 1000) ->
    promise = new Hope.Promise()
    setTimeout (->
      _double(promise, value)
    ), time
    promise

  _double = (promise, value) ->
    if value > 1024
      promise.done "ERROR! Maximum value is 1024.", value
    else
      promise.done null, (value * 2)


  it "is healthy", ->
    expect(Hope).toBeTruthy()


  it "can process a sync method", ->
    value = 1
    syncDouble(value).then (error, result) ->
      expect(result).toEqual (value * 2)


  it "can dispatch error in a sync method", ->
    value = 1980
    syncDouble(value).then (error, result) ->
      expect(error).toBeTruthy


  it "can process a async method", ->
    value = 1
    asyncDouble(value).then (error, result) ->
      expect(result).toEqual (value * 2)


  it "can dispatch error in async method", ->
    value = 1980
    asyncDouble(value).then (error, result) ->
      expect(error).toBeTruthy


  it "can join multiple sync/async methods", ->
    result = 12
    Hope.join([->
      syncDouble 1
    , ->
      syncDouble 2
    , ->
      syncDouble 3
    ]).then (errors, values) ->
      sum = 0
      sum += value for value in values
      expect(sum).toEqual result


  it "can dispatch error in multiple sync/async methods", ->
    Hope.join([->
      syncDouble 2
    , ->
      syncDouble 1980
    , ->
      syncDouble 3
    ]).then (errors, values) ->
      errorString = null
      for error in errors
        if error then errorString = error
      expect(errorString).not.toEqual null


  it "can chain multiple sync/async methods", ->
    result = 14
    Hope.chain([(error, value) ->
      syncDouble 1
    , (error, value) ->
      # value is 2
      syncDouble value + 1
    , (error, value) ->
      # value is 6
      syncDouble value + 1
    ]).then (error, value) ->
      expect(value).toEqual result


  it "can dispatch error in a chain of a sync/async methods", ->
    Hope.chain([(error, value) ->
      syncDouble 1
    , (error, value) ->
      syncDouble value + 1980
    , (error, value) ->
      syncDouble value + 1
    ]).then (error, value) ->
      expect(error).not.toEqual null
