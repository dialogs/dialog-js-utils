/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

/**
 * Open standard browser file-select window.
 *
 * @param {Function} callback
 * @param {boolean} [multiple]
 */
export function selectFiles(callback: (files: File[]) => void, multiple?: boolean) {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = Boolean(multiple);
  input.onchange = () => {
    input.onchange = null;
    callback(Array.from(input.files));
  };

  input.click();
}
