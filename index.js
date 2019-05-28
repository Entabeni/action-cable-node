// Import internal VARS
var INTERNAL = require('./internal.js')
var Consumer = require('./action_cable/consumer.js')
var slice = [].slice;

// Create ActionCable class
var ActionCable = function () {
  this.internal = INTERNAL
}

ActionCable.prototype.createConsumer = function (url, ws) {
  return new Consumer(this.createWebSocketURL(url), ws)
}

ActionCable.prototype.createWebSocketURL = function (url) {
  return url
}

ActionCable.prototype.startDebugging = function () {
  return this.debugging = true
}

ActionCable.prototype.stopDebugging = function () {
  return this.debugging = null
}

ActionCable.prototype.log = function (messages) {
  var messages = 1 <= messages.length ? slice.call(messages, 0) : []
  if (this.debugging) {
    messages.push(Date.now())
    return console.log(["[ActionCable]"].concat(slice.call(messages)))
  }
}

module.exports = new ActionCable()