/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

export type Options = {
  min?: number,
  max: number,
  next: number,
  looped?: boolean
};

/**
 * Calculates next cursor position based on options.
 *
 * @param {Object} options - The options
 * @param {number} [options.min] - Minimum cursor value
 * @param {number} options.max - Maximum cursor value
 * @param {number} options.next - Next expected cursor value
 * @param {boolean} [options.looped] - Should be true if cursor is looped
 *
 * @returns {number} Next actual cursor value
 */
export function calculateCursor(options: Options): number {
  const { min = 0, max, next, looped = false } = options;
  if (next < min) {
    return looped ? max : min;
  }

  if (next > max) {
    return looped ? min : max;
  }

  return next;
}
