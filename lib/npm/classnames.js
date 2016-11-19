/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

declare module 'classnames' {
  declare type ClassName = string | null | void | { [key: string]: boolean };

  declare function classNames(...args: ClassName[]): string;

  declare var exports: typeof classNames;
}
