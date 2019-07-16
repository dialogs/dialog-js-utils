/**
 * Copyright 2018 Dialog LLC <info@dlg.im>
 */

import { isPassiveListenerSupports } from './isPassiveListenerSupports';

export const listen = function listen(
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
