import Connection from "./connection"
import ConnectionMonitor from "./connection_monitor"
import Consumer, { createWebSocketURL } from "./consumer"
import INTERNAL from "./internal"
import Subscription from "./subscription"
import Subscriptions from "./subscriptions"
import adapters from "./adapters"
import logger from "./logger"

export {
  Connection,
  ConnectionMonitor,
  Consumer,
  INTERNAL,
  Subscription,
  Subscriptions,
  adapters,
  createWebSocketURL,
  logger,
}

export function createConsumer(url, ws) {
  return new Consumer(url, ws)
}

export function getConfig(name) {
  return name
}
