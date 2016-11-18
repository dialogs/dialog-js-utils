/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

let isSupports = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      isSupports = true;
    }
  });

  window.addEventListener('test', null, opts);
} catch (e) {
  // do nothing
}

function isPassiveListenerSupports(): boolean {
  return isSupports;
}

export default isPassiveListenerSupports;
