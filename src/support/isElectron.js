/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

const _isElectron = typeof window.require === 'function';

function isElectron(): boolean {
  return _isElectron;
}

export default isElectron;
