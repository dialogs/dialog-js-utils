/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

declare module "classnames" {
  declare type ClassName = string | null | void | { [key: string]: boolean };

  declare function classNames(...args: ClassName[]): string;

  declare module.exports: typeof classNames;
}
