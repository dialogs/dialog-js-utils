/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

/**
 * Open standard browser file-select window.
 *
 * @param {Function} callback
 * @param {boolean} [multiple]
 * @param {string} [accept]
 */
export function selectFiles(
  callback: (files: File[]) => void,
  multiple?: boolean,
  accept?: string
) {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = Boolean(multiple);
  if (accept) {
    input.accept = accept;
  }

  input.onchange = () => {
    callback(Array.from(input.files));

    input.onchange = null;
  };

  input.click();
}
