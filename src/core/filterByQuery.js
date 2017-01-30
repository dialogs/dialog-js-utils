/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { IndexedIterable } from 'immutable';

export type Filterable<T> = Array<T> | IndexedIterable<T>;

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

  return items.map((item) => {
    const value = normalize(getValue(item));

    return {
      item,
      score: value.indexOf(normalQuery)
    };
  }).filter(
    ({ score }) => score !== -1
  ).sort(
    (a, b) => a.score - b.score
  ).map(
    ({ item }) => item
  );
}
