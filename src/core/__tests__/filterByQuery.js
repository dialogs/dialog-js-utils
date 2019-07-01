/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

import { filterByQuery } from '../filterByQuery';

describe('filterByQuery', () => {
  const users = [{ id: 1, name: 'Alexey' }, { id: 2, name: 'Lexy' }];

  it('should sort result', () => {
    expect(
      filterByQuery('le', users, (user) => user.name)
    ).toEqual(
      [{ id: 2, name: 'Lexy' }, { id: 1, name: 'Alexey' }]
    );
  });
});
