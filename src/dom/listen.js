/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 */

import { isPassiveListenerSupports } from '../support/isPassiveListenerSupports';

/**
 * Adds DOM event listener.
 *
 * @param {Element} target
 * @param {string} eventType - A string representing the event type to listen for.
 * @param {EventListener} listener - The function that receives a notification.
 * @param {Object} options - An options object that specifies characteristics about the event listener
 * @param {boolean} [options.capture=false] - Indicating that events will be dispatched
 * before being dispatched to any EventTarget it in the DOM tree.
 * @param {boolean} [options.passive=false] - Indicating that the listener will never call `event.preventDefault()`.
 * @returns {Listener}
 */
export function listen(target, eventType, listener, options) {
  const { passive = false, capture = false } = options;
  const opts = passive && isPassiveListenerSupports() ? { passive, capture } : capture;

  target.addEventListener(eventType, listener, opts);

  return {
    remove() {
      target.removeEventListener(eventType, listener, opts);
    }
  };
}
