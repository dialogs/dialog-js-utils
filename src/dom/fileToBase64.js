/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

/**
 * Converts Blob to base64 string.
 *
 * @param {Blob} file
 * @param {Function} callback
 */
export function fileToBase64(file: Blob, callback: (dataUri: string) => void): void {
  const reader = new FileReader();
  reader.onload = (event) => callback(event.target.result);
  reader.readAsDataURL(file);
}
