/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

import type { List } from "immutable";

export type Filterable<T> = Array<T> | List<T>;

function normalize(text) {
  return text.toLowerCase().replace(/ё/g, "е");
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

  return items
    .map(item => {
      const value = normalize(getValue(item));

      return {
        item,
        score: value.indexOf(normalQuery)
      };
    })
    .filter(({ score }) => score !== -1)
    .sort((a, b) => a.score - b.score)
    .map(({ item }) => item);
}
