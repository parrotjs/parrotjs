###
  Copyright 2013 (c) Javi Jiménez Villar <@soyjavi> <javi@tapquo.com>
  Licensed under the MIT License.
  https://github.com/soyjavi/hope
###

((exports) ->

  ###
  Promise object onto which callbacks can be attached.
  @method   Promise
  ###
  Promise = ->
    @_callbacks = []
    @


  ###
  Executes a bunch of asynchronous tasks together, returns a promise, and
  resolve that promise when all tasks are done.
  @method   join
  @param    {array} Array of functions
  ###
  join = (callbacks) ->
    callbacks_count = callbacks.length
    done_count = 0
    promise = new Promise()
    errors = []
    results = []

    notifier = (i) ->
      (error, result) ->
        done_count += 1
        errors[i] = error
        results[i] = result
        promise.done errors, results if done_count is callbacks_count

    i = 0
    while i < callbacks_count
      callbacks[i]().then notifier(i)
      i++
    promise


  ###
  Executes a bunch of asynchronous tasks in sequence, passing to each function
  the `error, value` arguments produced by the previous task.
  @method   chain
  @param    {array} Array of functions
  ###
  chain = (callbacks, error, result, shield) ->
    promise = new Promise()

    if callbacks.length is 0 or (shield? and error?)
      promise.done error, result
    else
      callbacks[0](error, result).then (result, error) ->
        callbacks.splice 0, 1
        chain(callbacks, result, error, shield).then (_error, _result) ->
          promise.done _error, _result
    promise


  ###
  Equal to chain method but Each function must return a promise and resolve it
  somehow, or when promise dispatch an error stops in currect function.
  @method   shield
  @param    {array} Array of functions
  ###
  shield = (callbacks, error, result) -> chain callbacks, error, result, true


  ###
  Promise suscription
  @method   then
  @param    {function}  Promise callback
  @param    {object}    Context of execution
  ###
  Promise::then = (callback, context) ->
    _callback = -> callback.apply context, arguments

    if @_isdone
      _callback @error, @result
    else
      @_callbacks.push _callback


  ###
  Dispatch promise method
  @method   done
  @param    {object} Error in callback
  @param    {object} Result of callback
  ###
  Promise::done = (error, result) ->
    @_isdone = true
    @error = error
    @result = result
    i = 0
    len = @_callbacks.length

    while i < len
      @_callbacks[i] error, result
      i++
    @_callbacks = []

  ###
  Module Reliable
  ###
  Hope =
    Promise : Promise
    join    : join
    chain   : chain
    shield  : shield

  if typeof define is "function" and define.amd
    define -> Hope
  else
    exports.Hope = Hope

  module.exports = Hope if module? and module.exports?

) this
