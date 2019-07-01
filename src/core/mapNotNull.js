/*
 * Copyright 2018 dialog LLC <info@dlg.im>
 * @flow strict
 */

/**
 * Maps collection using mapper and filters result if it't null.
 */
export function mapNotNull<T, R>(array: Array<T>, mapper: (item: T, index: number) => ?R): R[] {
  const result: R[] = [];
  for (let i = 0; i < array.length; i++) {
    const value: ?R = mapper(array[i], i);
    if (value !== null && typeof value !== 'undefined') {
      result.push(value);
    }
  }

  return result;
}
