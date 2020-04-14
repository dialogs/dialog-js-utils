/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

/**
 * Select text inside element.
 *
 * @param {Element} element
 */
export function selectText(element: HTMLElement): void {
  // $FlowFixMe
  if (document.body.createTextRange) {
    // $FlowFixMe: IE fix
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
