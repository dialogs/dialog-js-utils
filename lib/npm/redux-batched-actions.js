/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow strict
 */

declare module "redux-batched-actions" {
  // this hack needs for simpler type coverage
  declare function batchActions<A1, A2>(actions: [A1, A2]): A2;
  declare function batchActions<A1, A2, A3>(actions: [A1, A2, A3]): A3;
  declare function batchActions<A1, A2, A3, A4>(actions: [A1, A2, A3, A4]): A4;
  declare function batchActions<A1, A2, A3, A4, A5>(
    actions: [A1, A2, A3, A4, A5]
  ): A5;

  declare function enableBatching<F: Function>(reduce: F): F;
}
