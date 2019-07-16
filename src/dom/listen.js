/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

import { isPassiveListenerSupports } from '../support/isPassiveListenerSupports';

type EventHandler = (event: Event) => mixed;
type EventListener = { handleEvent: EventHandler } | EventHandler;

type EventListenerOptionsOrUseCapture = {
  capture?: boolean,
  passive?: boolean,
};

interface ListenFn {
  (
    target: EventTarget,
    type: string,
    listener: EventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
}

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
export const listen: ListenFn = function listen(
  target,
  eventType,
  handler,
  opts = { capture: false, passive: false },
) {
  const options =
    opts.passive && isPassiveListenerSupports()
      ? { passive: opts.passive, capture: opts.capture }
      : opts.capture;

  target.addEventListener(eventType, handler, options);

  return {
    remove() {
      target.removeEventListener(eventType, handler, options);
    },
  };
};
