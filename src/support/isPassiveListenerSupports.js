/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

let isSupports = false;

try {
  // $FlowFixMe
  const opts = Object.defineProperty({}, "passive", {
    get() {
      isSupports = true;

      return true;
    }
  });

  window.addEventListener("test", null, opts);
} catch (e) {
  // do nothing
}

/**
 * Checks if browser supports passive event listeners.
 *
 * @returns {boolean}
 */
export function isPassiveListenerSupports(): boolean {
  return isSupports;
}
