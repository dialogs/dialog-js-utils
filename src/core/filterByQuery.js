/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { IndexedCollection } from 'immutable';

export type Filterable<T> = Array<T> | IndexedCollection<T>;

function normalize(text) {
  return text.toLowerCase()
             .replace(/ё/g, 'е');
}

/**
 * Filter any collection by query.
 */
export function filterByQuery<T, C: Filterable<T>>(
  query: string,
  items: C,
  getValue: (item: T) => string
): C {
  const normalQuery = normalize(query);

  return items.filter((item) => {
    const value = normalize(getValue(item));
    return value.indexOf(normalQuery) !== -1;
  });
}
