/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

/**
 * Select text inside element.
 *
 * @param {Element} element
 */
export function selectText(element: HTMLElement): void {
  if (document.body.createTextRange) {
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
