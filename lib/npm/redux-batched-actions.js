/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

declare module 'redux-batched-actions' {
  // this hack needs for simpler type coverage
  declare function batchActions<Action1, Action2>(actions: [Action1, Action2]): Action2;

  declare function enableBatching<F: Function>(reduce: F): F;
}
