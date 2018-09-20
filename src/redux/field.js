/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */
/* eslint-disable no-undef, no-use-before-define */

export type FieldAction<Type: string, State, Context> = {
  type: Type,
  payload: Field<State>,
  meta: {
    context: Context
  }
};

type DispatchOptions<Type: string, State, Context> = {
  type: Type,
  action: Promise<State>,
  context: Context,
  dispatch: (action: FieldAction<Type, State, Context>) => any,
  initialState: State
};

class Field<State> {
  value: State;
  error: ?Error;
  pending: boolean;

  static dispatch<Type: string, Context>({
    type,
    action,
    context,
    dispatch,
    initialState
  }: DispatchOptions<Type, State, Context>): void {
    dispatch({
      type,
      payload: new Field(initialState, null, true),
      meta: { context }
    });

    action.then(
      (value) => {
        dispatch({
          type,
          payload: new Field(value, null, false),
          meta: { context }
        });
      },
      (error) => {
        dispatch({
          type,
          payload: new Field(initialState, error, false),
          meta: { context }
        });
      }
    );
  }

  static create<Result>({
    value,
    error,
    pending
  }: {
    value: Result,
    error?: ?Error,
    pending?: boolean
  }): Field<Result> {
    return new Field(value, error, pending);
  }

  constructor(value: State, error: ?Error = null, pending: boolean = false) {
    this.value = value;
    this.error = error;
    this.pending = pending;
  }

  map<Result>(
    mapper: (value: State, error: ?Error, pending: boolean) => Result
  ): Field<Result> {
    return new Field(
      mapper(this.value, this.error, this.pending),
      this.error,
      this.pending
    );
  }

  flatMap<Result>(
    mapper: (value: State, error: ?Error, pending: boolean) => Result
  ): Result {
    return mapper(this.value, this.error, this.pending);
  }

  render<Result>(
    mapper: (value: State, error: ?Error, pending: boolean) => Result
  ): Result {
    return mapper(this.value, this.error, this.pending);
  }
}

export default Field;
