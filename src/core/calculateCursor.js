/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

/**
 * Calculates next cursor position based on options.
 *
 * @param {number} min Minimum cursor value
 * @param {number} max Maximum cursor value
 * @param {number} next Next expected cursor value
 * @param {boolean} looped Should be true if cursor is looped
 * @returns {number} Next actual cursor value
 */
function calculateCursor({
  min = 0,
  max,
  next,
  looped = false
}: {
  min?: number,
  max: number,
  next: number,
  looped?: boolean
}): number {
  if (next < min) {
    return looped ? max : min;
  }

  if (next > max) {
    return looped ? min : max;
  }

  return next;
}

export default calculateCursor;
