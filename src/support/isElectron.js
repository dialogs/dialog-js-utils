/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

const _isElectron = typeof window.require === 'function';

/**
 * True if app running in Electron.
 *
 * @returns {boolean}
 */
export function isElectron(): boolean {
  return _isElectron;
}
